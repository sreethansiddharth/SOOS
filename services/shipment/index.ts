import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, UpdateCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-south-1' }));
const ORDERS_TABLE = process.env.ORDERS_TABLE || 'aether-orders-dev';
const EVENTS_TABLE = process.env.ORDER_EVENTS_TABLE || 'aether-order-events-dev';

export async function initiateShipmentHandler(event: {
  orderId: string;
  correlationId: string;
}) {
  const { orderId, correlationId } = event;
  const now = new Date().toISOString();
  const trackingNumber = `AWB-IND-${Math.floor(10000000 + Math.random() * 90000000)}`;
  const invoiceUrl = `s3://aether-invoices-private-dev/invoices/${orderId}_tax_invoice.pdf`;

  // Update order with courier tracking reference
  await client.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId },
      UpdateExpression: 'SET #st = :st, trackingNumber = :trk, invoiceUrl = :inv, updatedAt = :now',
      ExpressionAttributeNames: { '#st': 'status' },
      ExpressionAttributeValues: {
        ':st': 'SHIPMENT_CREATED',
        ':trk': trackingNumber,
        ':inv': invoiceUrl,
        ':now': now,
      },
    })
  );

  // Append audit event
  await client.send(
    new PutCommand({
      TableName: EVENTS_TABLE,
      Item: {
        orderId,
        eventKey: `${now}#evt_shipment`,
        eventId: `evt_${Date.now()}_ship`,
        eventType: 'SHIPMENT_CREATED',
        fromStatus: 'CONFIRMED',
        toStatus: 'SHIPMENT_CREATED',
        occurredAt: now,
        correlationId,
        details: `Simulated courier tracking initiated. Carrier Tracking Code: ${trackingNumber}`,
        source: 'SHIPMENT_LAMBDA',
      },
    })
  );

  return { status: 'SHIPMENT_CREATED', orderId, trackingNumber, invoiceUrl };
}
