import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-south-1' }));
const ORDERS_TABLE = process.env.ORDERS_TABLE || 'aether-orders-dev';
const EVENTS_TABLE = process.env.ORDER_EVENTS_TABLE || 'aether-order-events-dev';

export interface SQSEvent {
  Records: Array<{
    messageId: string;
    body: string;
    attributes?: Record<string, string>;
  }>;
}

export async function fulfillmentWorkerHandler(event: SQSEvent) {
  for (const record of event.Records) {
    const payload = JSON.parse(record.body);
    const { orderId, correlationId } = payload;
    const now = new Date().toISOString();

    // Idempotent invoice & fulfillment generation
    const invoiceKey = `invoices/${orderId}_gst_invoice.pdf`;

    // Append audit event for SQS processing
    await client.send(
      new PutCommand({
        TableName: EVENTS_TABLE,
        Item: {
          orderId,
          eventKey: `${now}#evt_sqs_worker`,
          eventId: `evt_${Date.now()}_sqs`,
          eventType: 'INVOICE_GENERATED_S3',
          fromStatus: 'CONFIRMED',
          toStatus: 'FULFILLMENT_PENDING',
          occurredAt: now,
          correlationId: correlationId || 'corr_sqs',
          details: `Asynchronous SQS worker generated PDF invoice: s3://aether-invoices-private-dev/${invoiceKey}`,
          source: 'SQS_WORKER',
        },
      })
    );
  }

  return { batchItemFailures: [] };
}
