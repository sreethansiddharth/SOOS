import type { Order, OrderEvent, CheckoutRequest, CheckoutResponse } from '../types';
import { calculateTotals } from '../utils/currency';
import { INITIAL_PRODUCTS } from '../data/mockProducts';

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:3000/api/v1';

const LOCAL_ORDERS_KEY = 'aether_local_orders';
const LOCAL_EVENTS_KEY = 'aether_local_events';

function getLocalOrders(): Map<string, Order> {
  try {
    const raw = localStorage.getItem(LOCAL_ORDERS_KEY);
    return raw ? new Map(JSON.parse(raw)) : new Map();
  } catch {
    return new Map();
  }
}

function saveLocalOrder(order: Order, events: OrderEvent[]) {
  try {
    const orders = getLocalOrders();
    orders.set(order.orderId, order);
    localStorage.setItem(LOCAL_ORDERS_KEY, JSON.stringify(Array.from(orders.entries())));

    const eventsMap = getLocalEvents();
    eventsMap.set(order.orderId, events);
    localStorage.setItem(LOCAL_EVENTS_KEY, JSON.stringify(Array.from(eventsMap.entries())));
  } catch {
    // Ignore storage quota
  }
}

function getLocalEvents(): Map<string, OrderEvent[]> {
  try {
    const raw = localStorage.getItem(LOCAL_EVENTS_KEY);
    return raw ? new Map(JSON.parse(raw)) : new Map();
  } catch {
    return new Map();
  }
}

export const orderService = {
  /**
   * Submits order to authoritative backend API. Directly invokes real AWS DynamoDB
   * and Step Functions. Throws real errors when AWS is disconnected.
   */
  async createOrder(
    request: CheckoutRequest,
    idempotencyKey: string,
    customerId = 'cust_demo_882'
  ): Promise<CheckoutResponse> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
          'x-user-id': customerId,
        },
        body: JSON.stringify(request),
      });
    } catch {
      throw new Error(
        `Backend Connection Failed: Unable to connect to API server at ${API_BASE}. Ensure the backend service is running and AWS services are reachable.`
      );
    }

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      const errCode = data?.error?.code ? `[${data.error.code}] ` : '';
      const errMsg = data?.error?.message || `Order creation failed with HTTP ${res.status}`;
      throw new Error(`${errCode}${errMsg}`);
    }

    const response = data as CheckoutResponse;
    return response;
  },

  /**
   * Demo mode order fulfillment allowing uninterrupted UI demonstration
   */
  createDemoOrder(
    request: CheckoutRequest,
    idempotencyKey: string,
    customerId = 'cust_demo_882'
  ): CheckoutResponse {
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const timestamp = new Date().toISOString();

    const snapshotItems = request.items.map((it) => {
      const found = INITIAL_PRODUCTS.find((p) => p.productId === it.productId);
      return {
        productId: it.productId,
        nameSnapshot: found?.name || it.productId,
        quantity: it.quantity,
        unitPricePaise: found?.pricePaise || 999900,
        imageUrl: found?.imageUrl,
      };
    });

    const calcItems = snapshotItems.map((i) => ({ pricePaise: i.unitPricePaise, quantity: i.quantity }));
    const financials = calculateTotals(calcItems);

    const newOrder: Order = {
      orderId,
      customerId,
      status: 'CONFIRMED',
      subtotalPaise: financials.subtotalPaise,
      taxPaise: financials.taxPaise,
      shippingPaise: financials.shippingPaise,
      totalPaise: financials.totalPaise,
      currency: 'INR',
      items: snapshotItems,
      shippingAddress: request.shippingAddress,
      workflowExecutionArn: `arn:aws:states:ap-south-1:123456789012:execution:OrderProcessingStateMachine:${orderId}`,
      correlationId: `corr_${Date.now()}`,
      idempotencyKey,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    const events: OrderEvent[] = [
      {
        eventId: `evt_${Date.now()}_1`,
        orderId,
        eventType: 'ORDER_SUBMITTED',
        fromStatus: null,
        toStatus: 'PENDING',
        occurredAt: timestamp,
        correlationId: newOrder.correlationId,
        details: 'Order authorized with idempotency token verification.',
        source: 'API_GATEWAY',
      },
      {
        eventId: `evt_${Date.now()}_2`,
        orderId,
        eventType: 'INVENTORY_RESERVED',
        fromStatus: 'PENDING',
        toStatus: 'INVENTORY_RESERVED',
        occurredAt: new Date(Date.now() + 1000).toISOString(),
        correlationId: newOrder.correlationId,
        details: 'DynamoDB atomic conditional reservation passed (available >= requested).',
        source: 'INVENTORY_LAMBDA',
      },
      {
        eventId: `evt_${Date.now()}_3`,
        orderId,
        eventType: 'ORDER_CONFIRMED',
        fromStatus: 'INVENTORY_RESERVED',
        toStatus: 'CONFIRMED',
        occurredAt: new Date(Date.now() + 2200).toISOString(),
        correlationId: newOrder.correlationId,
        details: 'Step Functions Saga successfully orchestrated. Invoice generated and queued for dispatch.',
        source: 'STEP_FUNCTIONS',
      },
    ];

    saveLocalOrder(newOrder, events);

    return {
      orderId,
      status: 'CONFIRMED',
      statusUrl: `/api/v1/orders/${orderId}`,
      eventsUrl: `/api/v1/orders/${orderId}/events`,
      correlationId: newOrder.correlationId,
      idempotencyKey,
    };
  },

  async getOrderById(orderId: string): Promise<Order | null> {
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.order) return data.order;
      }
    } catch {
      // Backend offline
    }

    const localMap = getLocalOrders();
    return localMap.get(orderId) || null;
  },

  async getOrderEvents(orderId: string): Promise<OrderEvent[]> {
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}/events`);
      if (res.ok) {
        const data = await res.json();
        if (data?.events) return data.events;
      }
    } catch {
      // Backend offline
    }

    const localEvents = getLocalEvents();
    return localEvents.get(orderId) || [];
  },

  async getCustomerOrders(customerId: string): Promise<Order[]> {
    try {
      const res = await fetch(`${API_BASE}/me/orders`, {
        headers: { 'x-user-id': customerId },
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.orders) return data.orders;
      }
    } catch {
      // Backend offline
    }

    const list = Array.from(getLocalOrders().values());
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list;
  },

  async getAllOrders(): Promise<Order[]> {
    try {
      const res = await fetch(`${API_BASE}/admin/orders`, {
        headers: { 'x-user-role': 'admin' },
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.orders) return data.orders;
      }
    } catch {
      // Backend offline
    }

    const list = Array.from(getLocalOrders().values());
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list;
  },
};
