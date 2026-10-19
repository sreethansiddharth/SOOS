import crypto from 'crypto';
import { AppError } from '../middleware/errorHandler.js';
import { productRepository } from '../repositories/productRepository.js';
import { inventoryRepository } from '../repositories/inventoryRepository.js';
import { orderRepository } from '../repositories/orderRepository.js';
import { orderEventsRepository } from '../repositories/orderEventsRepository.js';
import { idempotencyRepository } from '../repositories/idempotencyRepository.js';
import { pricingService } from './pricingService.js';
import { Order, OrderEvent, ShippingAddress, OrderItemSnapshot } from '../types/index.js';
import { config } from '../config/index.js';
import { sfnClient } from '../repositories/dynamoClient.js';
import { StartExecutionCommand } from '@aws-sdk/client-sfn';

export interface CreateOrderInput {
  items: Array<{ productId: string; quantity: number }>;
  shippingAddress: ShippingAddress;
  faultScenario?: 'NONE' | 'PAYMENT_DEFINITIVE_FAILURE' | 'PAYMENT_AMBIGUOUS' | 'INSUFFICIENT_STOCK';
}

export interface CreateOrderResult {
  orderId: string;
  status: string;
  statusUrl: string;
  eventsUrl: string;
  correlationId: string;
  idempotencyKey: string;
}

export const orderService = {
  async submitOrder(
    input: CreateOrderInput,
    idempotencyKey: string,
    customerId: string,
    correlationId: string
  ): Promise<CreateOrderResult> {
    if (!idempotencyKey || !idempotencyKey.trim()) {
      throw new AppError(400, 'MISSING_IDEMPOTENCY_KEY', 'Idempotency-Key header is required.');
    }

    if (!input.items || !Array.isArray(input.items) || input.items.length === 0) {
      throw new AppError(400, 'INVALID_ORDER', 'Order must contain at least one item.');
    }

    // 1. Idempotency Check
    const scopedKey = `${customerId}#${idempotencyKey}`;
    const payloadHash = crypto.createHash('sha256').update(JSON.stringify(input)).digest('hex');
    const existingRecord = await idempotencyRepository.get(scopedKey);

    if (existingRecord) {
      if (existingRecord.requestHash !== payloadHash) {
        throw new AppError(
          409,
          'IDEMPOTENCY_CONFLICT',
          'Idempotency-Key has already been used with different request parameters.'
        );
      }
      return existingRecord.responseBody as CreateOrderResult;
    }

    // 2. Authoritative Server-Side Product Validation & Stock Check
    const snapshotItems: OrderItemSnapshot[] = [];
    const calculationItems: Array<{ pricePaise: number; quantity: number }> = [];

    for (const item of input.items) {
      if (!item.productId || typeof item.quantity !== 'number' || item.quantity <= 0) {
        throw new AppError(400, 'INVALID_QUANTITY', 'Product quantity must be an integer greater than 0.');
      }

      const product = await productRepository.getById(item.productId);
      if (!product || !product.active) {
        throw new AppError(404, 'PRODUCT_NOT_FOUND', `Product ${item.productId} is not available.`);
      }

      // Check current available inventory
      const inv = await inventoryRepository.getByProductId(item.productId);
      if (!inv || inv.available < item.quantity) {
        throw new AppError(
          409,
          'INSUFFICIENT_STOCK',
          `Insufficient stock for "${product.name}". Available: ${inv?.available || 0}, Requested: ${item.quantity}.`
        );
      }

      snapshotItems.push({
        productId: product.productId,
        nameSnapshot: product.name,
        quantity: item.quantity,
        unitPricePaise: product.pricePaise, // AUTHORITATIVE SERVER PRICE
      });

      calculationItems.push({
        pricePaise: product.pricePaise,
        quantity: item.quantity,
      });
    }

    // 3. Compute Integer Paise Totals on the Server (ADR-011)
    const financials = pricingService.calculateTotals(calculationItems);

    const orderId = `ord_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`;
    const timestamp = new Date().toISOString();
    const executionArn = `${config.orderStateMachineArn}:${orderId}`;

    // 4. Create Durable Order Record in Orders Table
    const newOrder: Order = {
      orderId,
      customerId,
      status: 'PENDING',
      subtotalPaise: financials.subtotalPaise,
      taxPaise: financials.taxPaise,
      shippingPaise: financials.shippingPaise,
      totalPaise: financials.totalPaise,
      currency: 'INR',
      items: snapshotItems,
      shippingAddress: input.shippingAddress,
      workflowExecutionArn: executionArn,
      correlationId,
      idempotencyKey,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    await orderRepository.create(newOrder);

    // 5. Append Initial Audit Event to OrderEvents Table
    const submittedEvent: OrderEvent = {
      orderId,
      eventKey: `${timestamp}#evt_1`,
      eventId: `evt_${Date.now()}_1`,
      eventType: 'ORDER_SUBMITTED',
      fromStatus: null,
      toStatus: 'PENDING',
      occurredAt: timestamp,
      correlationId,
      details: 'Order created via API Gateway and validated against server price/inventory rules.',
      source: 'API_GATEWAY',
    };
    await orderEventsRepository.append(submittedEvent);

    // 6. Start Step Functions Execution
    try {
      if (!config.useInMemoryDdb) {
        await sfnClient.send(
          new StartExecutionCommand({
            stateMachineArn: config.orderStateMachineArn,
            name: orderId,
            input: JSON.stringify({
              schemaVersion: '1',
              orderId,
              customerId,
              correlationId,
              faultScenario: input.faultScenario || 'NONE',
            }),
          })
        );
      } else {
        // Local mode: trigger async simulated Step Functions Saga
        this._runSimulatedStepFunctions(orderId, snapshotItems, input.faultScenario || 'NONE', correlationId);
      }
    } catch (err: unknown) {
      console.warn('Step Functions start notification:', (err as Error).message);
    }

    const responseBody: CreateOrderResult = {
      orderId,
      status: 'PENDING',
      statusUrl: `/api/v1/orders/${orderId}`,
      eventsUrl: `/api/v1/orders/${orderId}/events`,
      correlationId,
      idempotencyKey,
    };

    // 7. Store Idempotency Record
    await idempotencyRepository.save({
      key: scopedKey,
      requestHash: payloadHash,
      orderId,
      responseBody,
      createdAt: timestamp,
    });

    return responseBody;
  },

  /**
   * Local Step Functions simulation to execute saga branches for local test suites
   */
  _runSimulatedStepFunctions(
    orderId: string,
    items: OrderItemSnapshot[],
    faultScenario: string,
    correlationId: string
  ) {
    setTimeout(async () => {
      // Step 1: Reserve Inventory (Atomic Conditional Check)
      try {
        for (const it of items) {
          await inventoryRepository.reserveStock(it.productId, it.quantity);
        }

        await orderRepository.updateStatus(orderId, 'INVENTORY_RESERVED');
        await orderEventsRepository.append({
          orderId,
          eventKey: `${new Date().toISOString()}#evt_inv`,
          eventId: `evt_${Date.now()}_inv`,
          eventType: 'INVENTORY_RESERVED',
          fromStatus: 'PENDING',
          toStatus: 'INVENTORY_RESERVED',
          occurredAt: new Date().toISOString(),
          correlationId,
          details: 'Atomic conditional write passed. Inventory reserved.',
          source: 'INVENTORY_LAMBDA',
        });

        // Step 2: Payment
        if (faultScenario === 'PAYMENT_DEFINITIVE_FAILURE') {
          // Trigger Saga Compensation!
          await orderRepository.updateStatus(orderId, 'PAYMENT_FAILED', {
            failureReason: 'Card issuer simulated decline: Insufficient balance.',
          });

          // Compensation: Release inventory
          for (const it of items) {
            await inventoryRepository.releaseStock(it.productId, it.quantity);
          }

          await orderRepository.updateStatus(orderId, 'CANCELLED', {
            failureReason: 'Order cancelled due to payment failure. Reserved stock released.',
          });
          await orderEventsRepository.append({
            orderId,
            eventKey: `${new Date().toISOString()}#evt_comp`,
            eventId: `evt_${Date.now()}_comp`,
            eventType: 'INVENTORY_RELEASED',
            fromStatus: 'PAYMENT_FAILED',
            toStatus: 'CANCELLED',
            occurredAt: new Date().toISOString(),
            correlationId,
            details: 'Saga compensation executed: 100% of reserved stock restored.',
            source: 'INVENTORY_LAMBDA',
          });
          return;
        }

        // Happy Path: Payment Confirmed
        await orderRepository.updateStatus(orderId, 'CONFIRMED');
        await orderEventsRepository.append({
          orderId,
          eventKey: `${new Date().toISOString()}#evt_conf`,
          eventId: `evt_${Date.now()}_conf`,
          eventType: 'ORDER_CONFIRMED',
          fromStatus: 'INVENTORY_RESERVED',
          toStatus: 'CONFIRMED',
          occurredAt: new Date().toISOString(),
          correlationId,
          details: 'Simulated payment captured. Event published to Amazon SNS.',
          source: 'PAYMENT_LAMBDA',
        });
      } catch (err: unknown) {
        await orderRepository.updateStatus(orderId, 'FAILED', {
          failureReason: (err as Error).message,
        });
      }
    }, 100);
  },
};
