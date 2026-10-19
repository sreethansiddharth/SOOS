import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, UpdateCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-south-1' }));
const ORDERS_TABLE = process.env.ORDERS_TABLE || 'aether-orders-dev';
const EVENTS_TABLE = process.env.ORDER_EVENTS_TABLE || 'aether-order-events-dev';

export async function confirmOrderHandler(event: {
  orderId: string;
  correlationId: string;
  paymentResult?: { paymentAttemptId: string };
}) {
  const { orderId, correlationId, paymentResult } = event;
  const now = new Date().toISOString();

  // 1. Mark Order CONFIRMED in DynamoDB Orders Table
  await client.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
      UpdateExpression: 'SET #st = :st, paymentAttemptId = :payId, updatedAt = :now',
      ExpressionAttributeNames: { '#st': 'status' },
      ExpressionAttributeValues: {
        ':st': 'CONFIRMED',
        ':payId': paymentResult?.paymentAttemptId || 'pay_simulated',
        ':now': now,
      },
    })
  );

  // 2. Persist Audit Record
  await client.send(
    new PutCommand({
      TableName: EVENTS_TABLE,
      Item: {
        orderId,
        eventKey: `${now}#evt_confirmed`,
        eventId: `evt_${Date.now()}_conf`,
        eventType: 'ORDER_CONFIRMED',
        fromStatus: 'PAYMENT_PENDING',
        toStatus: 'CONFIRMED',
        occurredAt: now,
        correlationId,
        details: 'Simulated payment succeeded. Order confirmed and event published to Amazon SNS.',
        source: 'CONFIRMATION_LAMBDA',
      },
    })
  );

  return { status: 'CONFIRMED', orderId, confirmedAt: now };
}

export async function cancelOrderHandler(event: {
  orderId: string;
  correlationId: string;
  error?: unknown;
}) {
  const { orderId, correlationId } = event;
  const now = new Date().toISOString();

  await client.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
      UpdateExpression: 'SET #st = :st, failureReason = :reason, updatedAt = :now',
      ExpressionAttributeNames: { '#st': 'status' },
      ExpressionAttributeValues: {
        ':st': 'CANCELLED',
        ':reason': 'Simulated payment failed. Saga compensation safely restored inventory.',
        ':now': now,
      },
    })
  );

  return { status: 'CANCELLED', orderId, cancelledAt: now };
}
