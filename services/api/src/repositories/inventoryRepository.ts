import { InventoryItem } from '../types/index.js';
import { config } from '../config/index.js';
import { ddbDocClient } from './dynamoClient.js';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

export const INITIAL_INVENTORY: Record<string, { available: number; reserved: number }> = {
  prod_headphones_001: { available: 5, reserved: 0 },
  prod_keyboard_002: { available: 3, reserved: 0 },
  prod_mouse_003: { available: 8, reserved: 0 },
  prod_lightbar_004: { available: 1, reserved: 0 }, // 1 unit in stock for concurrency testing!
  prod_charger_005: { available: 0, reserved: 0 }, // Out of stock
};

const inMemoryInventory: Map<string, InventoryItem> = new Map(
  Object.entries(INITIAL_INVENTORY).map(([productId, data]) => [
    productId,
    {
      productId,
      available: data.available,
      reserved: data.reserved,
      updatedAt: '2026-10-15T12:00:00Z',
    },
  ])
);

export class ConditionalCheckFailedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConditionalCheckFailedException';
  }
}

export const inventoryRepository = {
  async getByProductId(productId: string): Promise<InventoryItem | null> {
    if (config.useInMemoryDdb) {
      const inv = inMemoryInventory.get(productId);
      return inv ? { ...inv } : null;
    }

    const res = await ddbDocClient.send(
      new GetCommand({
        TableName: config.inventoryTable,
        Key: { productId },
      })
    );

    return (res.Item as InventoryItem) || null;
  },

  /**
   * Atomic conditional stock reservation:
   * ConditionExpression: 'available >= :reqQty'
   * UpdateExpression: 'SET available = available - :reqQty, reserved = reserved + :reqQty, updatedAt = :now'
   * Guaranteed to prevent overselling under concurrent requests!
   */
  async reserveStock(productId: string, quantity: number): Promise<void> {
    const now = new Date().toISOString();

    if (config.useInMemoryDdb) {
      const item = inMemoryInventory.get(productId);
      if (!item) {
        throw new ConditionalCheckFailedException(`Product ${productId} not found in inventory.`);
      }

      // ATOMIC CONDITIONAL CHECK: available >= requestedQuantity
      if (item.available < quantity) {
        throw new ConditionalCheckFailedException(
          `Insufficient stock: product ${productId} has ${item.available} available, but ${quantity} was requested.`
        );
      }

      // Execute update atomically
      item.available -= quantity;
      item.reserved += quantity;
      item.updatedAt = now;
      inMemoryInventory.set(productId, item);
      return;
    }

    try {
      await ddbDocClient.send(
        new UpdateCommand({
          TableName: config.inventoryTable,
          Key: { productId },
          UpdateExpression:
            'SET available = available - :qty, reserved = reserved + :qty, updatedAt = :now',
          ConditionExpression: 'available >= :qty',
          ExpressionAttributeValues: {
            ':qty': quantity,
            ':now': now,
          },
        })
      );
    } catch (err: unknown) {
      if ((err as { name?: string }).name === 'ConditionalCheckFailedException') {
        throw new ConditionalCheckFailedException(
          `Insufficient stock: conditional reservation write rejected for ${productId}.`
        );
      }
      throw err;
    }
  },

  /**
   * Saga compensation: releases reserved stock back to available pool
   */
  async releaseStock(productId: string, quantity: number): Promise<void> {
    const now = new Date().toISOString();

    if (config.useInMemoryDdb) {
      const item = inMemoryInventory.get(productId);
      if (item) {
        item.available += quantity;
        item.reserved = Math.max(0, item.reserved - quantity);
        item.updatedAt = now;
        inMemoryInventory.set(productId, item);
      }
      return;
    }

    await ddbDocClient.send(
      new UpdateCommand({
        TableName: config.inventoryTable,
        Key: { productId },
        UpdateExpression:
          'SET available = available + :qty, reserved = reserved - :qty, updatedAt = :now',
        ConditionExpression: 'reserved >= :qty',
        ExpressionAttributeValues: {
          ':qty': quantity,
          ':now': now,
        },
      })
    );
  },

  async setStock(productId: string, available: number): Promise<void> {
    const now = new Date().toISOString();
    if (config.useInMemoryDdb) {
      this._setAvailable(productId, available);
      return;
    }
    await ddbDocClient.send(
      new UpdateCommand({
        TableName: config.inventoryTable,
        Key: { productId },
        UpdateExpression: 'SET available = :avail, reserved = if_not_exists(reserved, :zero), updatedAt = :now',
        ExpressionAttributeValues: {
          ':avail': available,
          ':zero': 0,
          ':now': now,
        },
      })
    );
  },

  _setAvailable(productId: string, count: number) {
    const item = inMemoryInventory.get(productId) || {
      productId,
      available: 0,
      reserved: 0,
      updatedAt: new Date().toISOString(),
    };
    item.available = count;
    inMemoryInventory.set(productId, item);
  },

  _reset() {
    inMemoryInventory.clear();
    for (const [productId, data] of Object.entries(INITIAL_INVENTORY)) {
      inMemoryInventory.set(productId, {
        productId,
        available: data.available,
        reserved: data.reserved,
        updatedAt: '2026-10-15T12:00:00Z',
      });
    }
  },
};
