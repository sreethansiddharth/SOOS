import { Order, OrderStatus } from '../types/index.js';
import { config } from '../config/index.js';
import { ddbDocClient } from './dynamoClient.js';
import { GetCommand, PutCommand, UpdateCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';

const inMemoryOrders: Map<string, Order> = new Map();

export const orderRepository = {
  async getById(orderId: string): Promise<Order | null> {
    if (config.useInMemoryDdb) {
      const ord = inMemoryOrders.get(orderId);
      return ord ? JSON.parse(JSON.stringify(ord)) : null;
    }

    const res = await ddbDocClient.send(
      new GetCommand({
        TableName: config.ordersTable,
        Key: { orderId },
      })
    );

    return (res.Item as Order) || null;
  },

  async create(order: Order): Promise<void> {
    if (config.useInMemoryDdb) {
      inMemoryOrders.set(order.orderId, JSON.parse(JSON.stringify(order)));
      return;
    }

    await ddbDocClient.send(
      new PutCommand({
        TableName: config.ordersTable,
        Item: order,
      })
    );
  },

  async updateStatus(
    orderId: string,
    status: OrderStatus,
    extra: Partial<Order> = {}
  ): Promise<void> {
    const now = new Date().toISOString();

    if (config.useInMemoryDdb) {
      const ord = inMemoryOrders.get(orderId);
      if (ord) {
        Object.assign(ord, { status, updatedAt: now, ...extra });
        inMemoryOrders.set(orderId, ord);
      }
      return;
    }

    await ddbDocClient.send(
      new UpdateCommand({
        TableName: config.ordersTable,
        Key: { orderId },
        UpdateExpression: 'SET #st = :st, updatedAt = :now',
        ExpressionAttributeNames: { '#st': 'status' },
        ExpressionAttributeValues: {
          ':st': status,
          ':now': now,
        },
      })
    );
  },

  async listByCustomer(customerId: string): Promise<Order[]> {
    if (config.useInMemoryDdb) {
      const list = Array.from(inMemoryOrders.values()).filter(
        (o) => o.customerId === customerId
      );
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      return list;
    }

    const res = await ddbDocClient.send(
      new QueryCommand({
        TableName: config.ordersTable,
        IndexName: 'CustomerOrdersIndex',
        KeyConditionExpression: 'customerId = :cid',
        ExpressionAttributeValues: { ':cid': customerId },
        ScanIndexForward: false, // Newest first
      })
    );

    return (res.Items as Order[]) || [];
  },

  async listAll(): Promise<Order[]> {
    const list = Array.from(inMemoryOrders.values());
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list;
  },

  _reset() {
    inMemoryOrders.clear();
  },
};
