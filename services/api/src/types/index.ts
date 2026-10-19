export type OrderStatus =
  | 'PENDING'
  | 'VALIDATING'
  | 'INVENTORY_RESERVED'
  | 'PAYMENT_PENDING'
  | 'PAYMENT_UNKNOWN'
  | 'PAYMENT_FAILED'
  | 'CONFIRMED'
  | 'FULFILLMENT_PENDING'
  | 'SHIPMENT_CREATED'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELLATION_PENDING'
  | 'CANCELLED'
  | 'FAILED';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  productId: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  pricePaise: number;
  currency: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specs: ProductSpec[];
  highlights: string[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryItem {
  productId: string;
  available: number;
  reserved: number;
  updatedAt: string;
}

export interface OrderItemSnapshot {
  productId: string;
  nameSnapshot: string;
  quantity: number;
  unitPricePaise: number;
}

export interface ShippingAddress {
  recipient: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
}

export interface Order {
  orderId: string;
  customerId: string;
  status: OrderStatus;
  subtotalPaise: number;
  taxPaise: number;
  shippingPaise: number;
  totalPaise: number;
  currency: string;
  items: OrderItemSnapshot[];
  shippingAddress: ShippingAddress;
  workflowExecutionArn: string;
  correlationId: string;
  idempotencyKey: string;
  createdAt: string;
  updatedAt: string;
  failureReason?: string;
}

export interface OrderEvent {
  orderId: string;
  eventKey: string;
  eventId: string;
  eventType: string;
  fromStatus: OrderStatus | null;
  toStatus: OrderStatus;
  occurredAt: string;
  correlationId: string;
  details: string;
  source: string;
}

export interface IdempotencyRecord {
  key: string; // partition key: customerId#idempotencyKey
  requestHash: string;
  orderId: string;
  responseBody: unknown;
  createdAt: string;
}

export interface UserContext {
  userId: string;
  role: 'customer' | 'admin';
  email: string;
}
