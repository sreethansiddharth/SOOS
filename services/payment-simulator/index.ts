import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-south-1' }));
const PAYMENTS_TABLE = process.env.PAYMENTS_TABLE || 'aether-payments-dev';
const ORDERS_TABLE = process.env.ORDERS_TABLE || 'aether-orders-dev';

export async function simulatePaymentHandler(event: {
  orderId: string;
  correlationId: string;
  faultScenario?: string;
}) {
  const { orderId, correlationId, faultScenario } = event;
  const now = new Date().toISOString();

  // 1. Fetch Order
  const orderRes = await client.send(
    new GetCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
    })
  );

  const order = orderRes.Item;
  if (!order) throw new Error(`Order ${orderId} not found.`);

  // 2. Controlled Fault Injection Check
  if (faultScenario === 'PAYMENT_DEFINITIVE_FAILURE') {
    // Record payment failure in Payments Table
    await client.send(
      new PutCommand({
        TableName: PAYMENTS_TABLE,
        Item: {
          paymentAttemptId: `pay_fail_${Date.now()}`,
          orderId,
          status: 'FAILED',
          amountPaise: order.totalPaise,
          resultCode: 'CARD_DECLINED',
          createdAt: now,
        },
      })
    );

    // Throws exception to trigger Step Functions Catch block & Saga compensation
    const err = new Error('GatewayDeclineException: Card declined due to simulated failure injection.');
    err.name = 'PaymentFailedException';
    throw err;
  }

  if (faultScenario === 'PAYMENT_AMBIGUOUS') {
    const err = new Error('PaymentAmbiguousException: Gateway timed out. Outcome ambiguous.');
    err.name = 'PaymentAmbiguousException';
    throw err;
  }

  // 3. Normal Happy Path Payment
  const paymentAttemptId = `pay_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  await client.send(
    new PutCommand({
      TableName: PAYMENTS_TABLE,
      Item: {
        paymentAttemptId,
        orderId,
        status: 'SUCCEEDED',
        amountPaise: order.totalPaise,
        resultCode: 'AUTH_000',
        createdAt: now,
      },
    })
  );

  return {
    status: 'SUCCEEDED',
    paymentAttemptId,
    amountPaise: order.totalPaise,
    capturedAt: now,
  };
}

export async function reconcilePaymentHandler(event: { orderId: string }) {
  // Reconcile by querying Payments table for prior attempt
  return { status: 'SUCCEEDED', reconciledAt: new Date().toISOString() };
}
