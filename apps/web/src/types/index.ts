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
  category: 'audio' | 'keyboards' | 'accessories' | 'lighting' | 'charging' | 'desk-setup';
  pricePaise: number; // Stored in integer paise (e.g. 899900 = ₹8,999.00)
  currency: string;
  imageUrl: string;
  galleryImages: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  availableStock: number;
  reservedStock: number;
  specs: ProductSpec[];
  highlights: string[];
  badge?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  pricePaise: number;
  quantity: number;
  imageUrl: string;
  availableStock: number;
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

export interface OrderItemSnapshot {
  productId: string;
  nameSnapshot: string;
  quantity: number;
  unitPricePaise: number;
  imageUrl?: string;
}

export interface OrderEvent {
  eventId: string;
  orderId: string;
  eventType: string;
  fromStatus: OrderStatus | null;
  toStatus: OrderStatus;
  occurredAt: string;
  correlationId: string;
  details: string;
  source: 'API_GATEWAY' | 'STEP_FUNCTIONS' | 'INVENTORY_LAMBDA' | 'PAYMENT_LAMBDA' | 'SNS_PUBLISHER' | 'SQS_WORKER';
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
  paymentAttemptId?: string;
  failureReason?: string;
  trackingNumber?: string;
  invoiceUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

export interface CheckoutRequest {
  items: Array<{ productId: string; quantity: number }>;
  shippingAddress: ShippingAddress;
  faultScenario?: 'NONE' | 'PAYMENT_DEFINITIVE_FAILURE' | 'PAYMENT_AMBIGUOUS' | 'INSUFFICIENT_STOCK';
}

export interface CheckoutResponse {
  orderId: string;
  status: OrderStatus;
  statusUrl: string;
  eventsUrl: string;
  correlationId: string;
  idempotencyKey: string;
}
