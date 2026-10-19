import { IdempotencyRecord } from '../types/index.js';
import { config } from '../config/index.js';
import { ddbDocClient } from './dynamoClient.js';
import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const inMemoryIdempotency: Map<string, IdempotencyRecord> = new Map();

export const idempotencyRepository = {
  async get(key: string): Promise<IdempotencyRecord | null> {
    if (config.useInMemoryDdb) {
      const rec = inMemoryIdempotency.get(key);
      return rec ? { ...rec } : null;
    }

    const res = await ddbDocClient.send(
      new GetCommand({
        TableName: config.idempotencyTable,
        Key: { key },
      })
    );

    return (res.Item as IdempotencyRecord) || null;
  },

  async save(record: IdempotencyRecord): Promise<void> {
    if (config.useInMemoryDdb) {
      inMemoryIdempotency.set(record.key, { ...record });
      return;
    }

    await ddbDocClient.send(
      new PutCommand({
        TableName: config.idempotencyTable,
        Item: record,
      })
    );
  },

  _reset() {
    inMemoryIdempotency.clear();
  },
};
