import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { SFNClient } from '@aws-sdk/client-sfn';
import { config } from '../config/index.js';

const rawDdb = new DynamoDBClient({
  region: config.awsRegion,
});

export const ddbDocClient = DynamoDBDocumentClient.from(rawDdb, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

export const sfnClient = new SFNClient({
  region: config.awsRegion,
});
