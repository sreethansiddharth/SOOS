import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-south-1' }));
const INVENTORY_TABLE = process.env.INVENTORY_TABLE || 'aether-inventory-dev';
const ORDERS_TABLE = process.env.ORDERS_TABLE || 'aether-orders-dev';
const EVENTS_TABLE = process.env.ORDER_EVENTS_TABLE || 'aether-order-events-dev';

export async function reserveInventoryHandler(event: { orderId: string; correlationId: string }) {
  const { orderId, correlationId } = event;
  const now = new Date().toISOString();

  // 1. Fetch order items snapshot
  const orderRes = await client.send(
    new GetCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
    })
  );

  const order = orderRes.Item;
  if (!order) {
    throw new Error(`Order ${orderId} not found.`);
  }

  // 2. Perform atomic conditional reservation for each item
  for (const item of order.items) {
    try {
      await client.send(
        new UpdateCommand({
          TableName: INVENTORY_TABLE,
          Key: { productId: item.productId },
          UpdateExpression: 'SET available = available - :qty, reserved = reserved + :qty, updatedAt = :now',
          ConditionExpression: 'available >= :qty',
          ExpressionAttributeValues: {
            ':qty': item.quantity,
            ':now': now,
          },
        })
      );
    } catch (err: unknown) {
      if ((err as { name?: string }).name === 'ConditionalCheckFailedException') {
        throw new Error(`InsufficientStockException: Item ${item.productId} stock unavailable.`);
      }
      throw err;
    }
  }

  // 3. Update order state and append audit event
  await client.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
      UpdateExpression: 'SET #st = :st, updatedAt = :now',
      ExpressionAttributeNames: { '#st': 'status' },
      ExpressionAttributeValues: { ':st': 'INVENTORY_RESERVED', ':now': now },
    })
  );

  return { status: 'INVENTORY_RESERVED', orderId, reservedAt: now };
}

export async function releaseInventoryHandler(event: { orderId: string; correlationId: string; error?: unknown }) {
  const { orderId, correlationId } = event;
  const now = new Date().toISOString();

  // Fetch order items to release
  const orderRes = await client.send(
    new GetCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
    })
  );

  const order = orderRes.Item;
  if (order && order.items) {
    for (const item of order.items) {
      await client.send(
        new UpdateCommand({
          TableName: INVENTORY_TABLE,
          Key: { productId: item.productId },
          UpdateExpression: 'SET available = available + :qty, reserved = reserved - :qty, updatedAt = :now',
          ConditionExpression: 'reserved >= :qty',
          ExpressionAttributeValues: {
            ':qty': item.quantity,
            ':now': now,
          },
        })
      );
    }
  }

  return { status: 'INVENTORY_RELEASED', orderId, releasedAt: now };
}
