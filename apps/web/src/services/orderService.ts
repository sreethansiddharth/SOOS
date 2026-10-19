import type { Order, OrderEvent, OrderStatus, CheckoutRequest, CheckoutResponse } from '../types';
import { productService } from './productService';
import { calculateTotals } from '../utils/currency';
import { generateCorrelationId } from '../utils/idempotency';

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:3000/api/v1';
const USE_MOCKS = (import.meta as any).env?.VITE_USE_MOCKS === 'true';

// In-memory store simulating DynamoDB Orders, OrderEvents, and IdempotencyKeys tables
const ordersStore: Map<string, Order> = new Map();
const orderEventsStore: Map<string, OrderEvent[]> = new Map();
const idempotencyStore: Map<string, { requestHash: string; orderId: string; response: CheckoutResponse }> = new Map();

function hashPayload(payload: unknown): string {
  return JSON.stringify(payload);
}

export const orderService = {
  /**
   * Submits an order idempotently, creates a durable pending order,
   * starts simulated Step Functions workflow, and returns 202 Accepted.
   */
  async createOrder(
    request: CheckoutRequest,
    idempotencyKey: string,
    customerId = 'cust_demo_882'
  ): Promise<CheckoutResponse> {
    if (!USE_MOCKS) {
      try {
        const res = await fetch(`${API_BASE}/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotencyKey,
            'x-user-id': customerId,
          },
          body: JSON.stringify(request),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error?.message || `Checkout error (HTTP ${res.status})`);
        }

        return data as CheckoutResponse;
      } catch (err: unknown) {
        // If live backend API returned an error, rethrow it
        if (err instanceof Error && !err.message.includes('fetch')) {
          throw err;
        }
        // If network fetch failed (backend not running), proceed to resilient in-memory handler
      }
    }

    // In-Memory Step Functions Saga Simulator
    await new Promise((r) => setTimeout(r, 180));

    // 1. Idempotency Check
    const existing = idempotencyStore.get(idempotencyKey);
    const currentHash = hashPayload(request);

    if (existing) {
      if (existing.requestHash !== currentHash) {
        throw new Error(
          'IDEMPOTENCY_CONFLICT: Idempotency-Key reused with different request payload.'
        );
      }
      return existing.response;
    }

    // 2. Validate Items & Retrieve Authoritative Server Prices
    if (!request.items || request.items.length === 0) {
      throw new Error('INVALID_REQUEST: Order must contain at least one item.');
    }

    const orderItemsSnapshot = [];
    const calculationItems = [];

    for (const reqItem of request.items) {
      const product = await productService.getProductById(reqItem.productId);
      if (!product || !product.active) {
        throw new Error(`PRODUCT_UNAVAILABLE: Product ${reqItem.productId} is inactive or does not exist.`);
      }

      if (reqItem.quantity <= 0) {
        throw new Error(`INVALID_QUANTITY: Quantity for ${product.name} must be greater than 0.`);
      }

      if (product.availableStock < reqItem.quantity) {
        throw new Error(
          `INSUFFICIENT_STOCK: Product "${product.name}" has only ${product.availableStock} unit(s) available.`
        );
      }

      orderItemsSnapshot.push({
        productId: product.productId,
        nameSnapshot: product.name,
        quantity: reqItem.quantity,
        unitPricePaise: product.pricePaise,
        imageUrl: product.imageUrl,
      });

      calculationItems.push({
        pricePaise: product.pricePaise,
        quantity: reqItem.quantity,
      });
    }

    // 3. Compute Financial Totals Authoritatively (integer paise)
    const financials = calculateTotals(calculationItems);
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const correlationId = generateCorrelationId();
    const timestamp = new Date().toISOString();
    const executionArn = `arn:aws:states:ap-south-1:123456789012:execution:OrderProcessingStateMachine:${orderId}`;

    const newOrder: Order = {
      orderId,
      customerId,
      status: 'PENDING',
      subtotalPaise: financials.subtotalPaise,
      taxPaise: financials.taxPaise,
      shippingPaise: financials.shippingPaise,
      totalPaise: financials.totalPaise,
      currency: 'INR',
      items: orderItemsSnapshot,
      shippingAddress: request.shippingAddress,
      workflowExecutionArn: executionArn,
      correlationId,
      idempotencyKey,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    ordersStore.set(orderId, newOrder);

    const initialEvents: OrderEvent[] = [
      {
        eventId: `evt_${Date.now()}_1`,
        orderId,
        eventType: 'ORDER_SUBMITTED',
        fromStatus: null,
        toStatus: 'PENDING',
        occurredAt: timestamp,
        correlationId,
        details: 'Order received via API Gateway with valid idempotency key.',
        source: 'API_GATEWAY',
      },
      {
        eventId: `evt_${Date.now()}_2`,
        orderId,
        eventType: 'WORKFLOW_STARTED',
        fromStatus: 'PENDING',
        toStatus: 'VALIDATING',
        occurredAt: new Date(Date.now() + 50).toISOString(),
        correlationId,
        details: `Step Functions execution initiated: ${executionArn}`,
        source: 'STEP_FUNCTIONS',
      },
    ];
    orderEventsStore.set(orderId, initialEvents);

    const response: CheckoutResponse = {
      orderId,
      status: 'PENDING',
      statusUrl: `/api/v1/orders/${orderId}`,
      eventsUrl: `/api/v1/orders/${orderId}/events`,
      correlationId,
      idempotencyKey,
    };

    idempotencyStore.set(idempotencyKey, {
      requestHash: currentHash,
      orderId,
      response,
    });

    this._runStepFunctionsWorkflow(orderId, request.faultScenario || 'NONE');

    return response;
  },

  async getOrderById(orderId: string): Promise<Order | null> {
    if (!USE_MOCKS) {
      try {
        const res = await fetch(`${API_BASE}/orders/${orderId}`);
        if (res.ok) {
          const data = await res.json();
          return data.order || null;
        }
      } catch {
        // Fallback
      }
    }

    await new Promise((r) => setTimeout(r, 60));
    const order = ordersStore.get(orderId);
    return order ? JSON.parse(JSON.stringify(order)) : null;
  },

  async getOrderEvents(orderId: string): Promise<OrderEvent[]> {
    if (!USE_MOCKS) {
      try {
        const res = await fetch(`${API_BASE}/orders/${orderId}/events`);
        if (res.ok) {
          const data = await res.json();
          return data.events || [];
        }
      } catch {
        // Fallback
      }
    }

    await new Promise((r) => setTimeout(r, 50));
    const events = orderEventsStore.get(orderId) || [];
    return JSON.parse(JSON.stringify(events));
  },

  async getCustomerOrders(customerId: string): Promise<Order[]> {
    if (!USE_MOCKS) {
      try {
        const res = await fetch(`${API_BASE}/me/orders`, {
          headers: { 'x-user-id': customerId },
        });
        if (res.ok) {
          const data = await res.json();
          return data.orders || [];
        }
      } catch {
        // Fallback
      }
    }

    await new Promise((r) => setTimeout(r, 80));
    const list = Array.from(ordersStore.values()).filter((o) => o.customerId === customerId);
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return JSON.parse(JSON.stringify(list));
  },

  async getAllOrders(): Promise<Order[]> {
    if (!USE_MOCKS) {
      try {
        const res = await fetch(`${API_BASE}/admin/orders`, {
          headers: { 'x-user-role': 'admin' },
        });
        if (res.ok) {
          const data = await res.json();
          return data.orders || [];
        }
      } catch {
        // Fallback
      }
    }

    await new Promise((r) => setTimeout(r, 100));
    const list = Array.from(ordersStore.values());
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return JSON.parse(JSON.stringify(list));
  },

  _runStepFunctionsWorkflow(
    orderId: string,
    faultScenario: 'NONE' | 'PAYMENT_DEFINITIVE_FAILURE' | 'PAYMENT_AMBIGUOUS' | 'INSUFFICIENT_STOCK'
  ) {
    const updateOrder = (status: OrderStatus, extra?: Partial<Order>) => {
      const current = ordersStore.get(orderId);
      if (current) {
        ordersStore.set(orderId, {
          ...current,
          status,
          updatedAt: new Date().toISOString(),
          ...extra,
        });
      }
    };

    const addEvent = (
      eventType: string,
      fromStatus: OrderStatus,
      toStatus: OrderStatus,
      details: string,
      source: OrderEvent['source'] = 'STEP_FUNCTIONS'
    ) => {
      const current = ordersStore.get(orderId);
      const events = orderEventsStore.get(orderId) || [];
      const newEvent: OrderEvent = {
        eventId: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        orderId,
        eventType,
        fromStatus,
        toStatus,
        occurredAt: new Date().toISOString(),
        correlationId: current?.correlationId || 'corr_unknown',
        details,
        source,
      };
      events.push(newEvent);
      orderEventsStore.set(orderId, events);
    };

    setTimeout(() => {
      const order = ordersStore.get(orderId);
      if (!order) return;

      if (faultScenario === 'INSUFFICIENT_STOCK') {
        updateOrder('FAILED', { failureReason: 'Simulated fault: Inventory validation failure.' });
        addEvent('ORDER_VALIDATION_FAILED', 'VALIDATING', 'FAILED', 'Stock validation rejected in worker Lambda.', 'INVENTORY_LAMBDA');
        return;
      }

      updateOrder('VALIDATING');
      addEvent('ORDER_VALIDATED', 'PENDING', 'VALIDATING', 'Validation task verified product data and price integrity.', 'STEP_FUNCTIONS');

      setTimeout(() => {
        for (const item of order.items) {
          const product = productService._getInternalState().find((p) => p.productId === item.productId);
          if (product) {
            productService._updateProductStock(
              item.productId,
              product.availableStock - item.quantity,
              (product.reservedStock || 0) + item.quantity
            );
          }
        }

        updateOrder('INVENTORY_RESERVED');
        addEvent(
          'INVENTORY_RESERVED',
          'VALIDATING',
          'INVENTORY_RESERVED',
          'Atomic conditional write succeeded. Reserved stock allocated.',
          'INVENTORY_LAMBDA'
        );

        setTimeout(() => {
          updateOrder('PAYMENT_PENDING');
          addEvent('PAYMENT_ATTEMPTED', 'INVENTORY_RESERVED', 'PAYMENT_PENDING', 'Payment authorization submitted with idempotency token.', 'PAYMENT_LAMBDA');

          if (faultScenario === 'PAYMENT_DEFINITIVE_FAILURE') {
            setTimeout(() => {
              updateOrder('PAYMENT_FAILED', {
                failureReason: 'Card issuer simulated decline: Insufficient balance / Test Fault Triggered.',
              });
              addEvent('PAYMENT_FAILED', 'PAYMENT_PENDING', 'PAYMENT_FAILED', 'Gateway returned DECLINED (HTTP 402 Simulated).', 'PAYMENT_LAMBDA');

              setTimeout(() => {
                updateOrder('CANCELLATION_PENDING');
                addEvent(
                  'COMPENSATION_STARTED',
                  'PAYMENT_FAILED',
                  'CANCELLATION_PENDING',
                  'Step Functions Catch block activated: Executing ReleaseInventory compensation task.',
                  'STEP_FUNCTIONS'
                );

                setTimeout(() => {
                  for (const item of order.items) {
                    const product = productService._getInternalState().find((p) => p.productId === item.productId);
                    if (product) {
                      productService._updateProductStock(
                        item.productId,
                        product.availableStock + item.quantity,
                        Math.max(0, (product.reservedStock || 0) - item.quantity)
                      );
                    }
                  }

                  updateOrder('CANCELLED', {
                    failureReason: 'Order cancelled due to payment failure. Reserved inventory safely released.',
                  });
                  addEvent(
                    'INVENTORY_RELEASED',
                    'CANCELLATION_PENDING',
                    'CANCELLED',
                    'Saga compensation complete: 100% of reserved inventory released back to pool. Zero overselling.',
                    'INVENTORY_LAMBDA'
                  );
                }, 1400);
              }, 1200);
            }, 1500);

            return;
          }

          setTimeout(() => {
            const paymentId = `pay_${Date.now()}`;
            updateOrder('CONFIRMED', { paymentAttemptId: paymentId });
            addEvent('PAYMENT_SUCCEEDED', 'PAYMENT_PENDING', 'CONFIRMED', `Simulated payment captured. Ref: ${paymentId}`, 'PAYMENT_LAMBDA');
            addEvent('ORDER_CONFIRMED_SNS', 'CONFIRMED', 'CONFIRMED', 'Published ORDER_CONFIRMED event to Amazon SNS order-events-topic.', 'SNS_PUBLISHER');

            setTimeout(() => {
              updateOrder('FULFILLMENT_PENDING');
              addEvent('FULFILLMENT_QUEUED_SQS', 'CONFIRMED', 'FULFILLMENT_PENDING', 'Message enqueued into fulfillment-work-queue.fifo for invoice & dispatch.', 'SQS_WORKER');

              setTimeout(() => {
                const trackingNo = `AWB-IND-${Math.floor(10000000 + Math.random() * 90000000)}`;
                const invoice = `/invoices/${orderId}_tax_invoice.pdf`;
                updateOrder('SHIPMENT_CREATED', {
                  trackingNumber: trackingNo,
                  invoiceUrl: invoice,
                });
                addEvent(
                  'SHIPMENT_CREATED',
                  'FULFILLMENT_PENDING',
                  'SHIPMENT_CREATED',
                  `Simulated shipping manifest generated. Courier Tracking: ${trackingNo}`,
                  'STEP_FUNCTIONS'
                );
                addEvent(
                  'INVOICE_GENERATED_S3',
                  'SHIPMENT_CREATED',
                  'SHIPMENT_CREATED',
                  `PDF Tax Invoice generated and archived into private S3 bucket: ${invoice}`,
                  'SQS_WORKER'
                );

                setTimeout(() => {
                  updateOrder('DISPATCHED');
                  addEvent('SHIPMENT_DISPATCHED', 'SHIPMENT_CREATED', 'DISPATCHED', 'Parcel handed over to carrier hub (Simulated carrier dispatch).', 'STEP_FUNCTIONS');
                }, 2500);
              }, 2000);
            }, 1500);
          }, 1500);
        }, 1200);
      }, 1200);
    }, 1000);
  },

  _resetOrders() {
    ordersStore.clear();
    orderEventsStore.clear();
    idempotencyStore.clear();
  },
};
