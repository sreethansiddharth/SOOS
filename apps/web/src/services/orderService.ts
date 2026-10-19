import type { Order, OrderEvent, CheckoutRequest, CheckoutResponse } from '../types';

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:3000/api/v1';

export const orderService = {
  /**
   * Submits an order idempotently to the authoritative backend API.
   * Directly invokes the AWS Step Functions pipeline and DynamoDB tables.
   * Throws real AWS / backend errors if AWS services or credentials are not integrated.
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
    } catch (networkErr: unknown) {
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

    return data as CheckoutResponse;
  },

  async getOrderById(orderId: string): Promise<Order | null> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/orders/${orderId}`);
    } catch {
      throw new Error(
        `Failed to reach backend API at ${API_BASE} to fetch order ${orderId}.`
      );
    }

    if (res.status === 404) {
      return null;
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error?.message || `Failed to fetch order (HTTP ${res.status})`);
    }

    return data?.order || null;
  },

  async getOrderEvents(orderId: string): Promise<OrderEvent[]> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/orders/${orderId}/events`);
    } catch {
      return [];
    }

    if (!res.ok) {
      return [];
    }

    const data = await res.json().catch(() => null);
    return data?.events || [];
  },

  async getCustomerOrders(customerId: string): Promise<Order[]> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/me/orders`, {
        headers: { 'x-user-id': customerId },
      });
    } catch {
      throw new Error(`Failed to load customer orders from ${API_BASE}.`);
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error?.message || `Failed to fetch customer orders (HTTP ${res.status})`);
    }

    return data?.orders || [];
  },

  async getAllOrders(): Promise<Order[]> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/admin/orders`, {
        headers: { 'x-user-role': 'admin' },
      });
    } catch {
      throw new Error(`Failed to load admin orders from ${API_BASE}.`);
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error?.message || `Failed to fetch admin orders (HTTP ${res.status})`);
    }

    return data?.orders || [];
  },
};
