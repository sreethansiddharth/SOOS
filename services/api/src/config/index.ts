import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  awsRegion: process.env.AWS_REGION || 'ap-south-1',
  
  // Logical Table Names
  productsTable: process.env.PRODUCTS_TABLE || 'aether-products-dev',
  inventoryTable: process.env.INVENTORY_TABLE || 'aether-inventory-dev',
  ordersTable: process.env.ORDERS_TABLE || 'aether-orders-dev',
  orderEventsTable: process.env.ORDER_EVENTS_TABLE || 'aether-order-events-dev',
  idempotencyTable: process.env.IDEMPOTENCY_TABLE || 'aether-idempotency-dev',
  paymentsTable: process.env.PAYMENTS_TABLE || 'aether-payments-dev',
  
  // Workflow ARN
  orderStateMachineArn:
    process.env.ORDER_STATE_MACHINE_ARN ||
    'arn:aws:states:ap-south-1:123456789012:stateMachine:aether-order-orchestration-dev',

  // Mode: Connects to REAL AWS by default. Only enabled if explicitly set to 'true' (e.g. for offline unit tests).
  useInMemoryDdb: process.env.USE_IN_MEMORY_DDB === 'true',
  
  // CORS
  allowedOrigin: process.env.ALLOWED_ORIGIN || '*',
};
