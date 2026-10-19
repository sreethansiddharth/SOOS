import { OrderEvent } from '../types/index.js';
import { config } from '../config/index.js';
import { ddbDocClient } from './dynamoClient.js';
import { PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';

const inMemoryEvents: Map<string, OrderEvent[]> = new Map();

export const orderEventsRepository = {
  async append(event: OrderEvent): Promise<void> {
    if (config.useInMemoryDdb) {
      const list = inMemoryEvents.get(event.orderId) || [];
      list.push(event);
      inMemoryEvents.set(event.orderId, list);
      return;
    }

    await ddbDocClient.send(
      new PutCommand({
        TableName: config.orderEventsTable,
        Item: event,
      })
    );
  },

  async listByOrderId(orderId: string): Promise<OrderEvent[]> {
    if (config.useInMemoryDdb) {
      const list = inMemoryEvents.get(orderId) || [];
      return [...list].sort(
        (a, b) => new Date(a.occurredAt).getTime() - new Date(b.occurredAt).getTime()
      );
    }

    const res = await ddbDocClient.send(
      new QueryCommand({
        TableName: config.orderEventsTable,
        KeyConditionExpression: 'orderId = :oid',
        ExpressionAttributeValues: { ':oid': orderId },
        ScanIndexForward: true, // Chronological
      })
    );

    return (res.Items as OrderEvent[]) || [];
  },

  _reset() {
    inMemoryEvents.clear();
  },
};
