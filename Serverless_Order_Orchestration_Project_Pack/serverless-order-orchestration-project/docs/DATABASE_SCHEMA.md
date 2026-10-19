# Database Schema and Access Patterns

## 1. General rules

- Use DynamoDB with on-demand capacity for an unpredictable small demonstration workload, subject to current account/Region pricing and free-tier terms.
- Use UUID/ULID-like opaque identifiers; do not expose sequential IDs.
- Store money as integer paise.
- Use ISO-8601 UTC timestamps for persisted times.
- Do not store full payment-card data. Payment is simulated.
- Define indexes for real query patterns; avoid table scans on hot paths.
- TTL is asynchronous cleanup, not an exact expiration mechanism.
- Use conditional writes and transactions where required for consistency.

## 2. Logical tables

### Products
Primary key: `productId` (string)

Example:
```json
{
  "productId": "prod_headphones_001",
  "slug": "studio-wireless-headphones",
  "name": "Studio Wireless Headphones",
  "description": "Over-ear wireless headphones",
  "category": "audio",
  "pricePaise": 899900,
  "currency": "INR",
  "imageKey": "products/headphones/main.webp",
  "active": true,
  "createdAt": "2026-10-10T12:00:00Z",
  "updatedAt": "2026-10-10T12:00:00Z"
}
```
Access patterns: get product by ID; list active products by category; resolve slug; search should be bounded/paginated and not implemented as an unbounded scan. For a small demo, category indexes and client-visible pagination may suffice; document search limitations.

### Inventory
Primary key: `productId` (string)

```json
{
  "productId": "prod_headphones_001",
  "available": 5,
  "reserved": 0,
  "updatedAt": "2026-10-10T12:00:00Z"
}
```
Reservation condition: update only when `available >= requestedQuantity`. Atomically decrement `available`, increment `reserved`, and store a reservation reference/status where the chosen schema permits safe idempotency. Release only if the reservation is still active. Do not rely on read-then-write checks alone.

### Orders
Primary key: `orderId` (string)

```json
{
  "orderId": "ord_example",
  "customerId": "user_example",
  "status": "PENDING",
  "totalPaise": 899900,
  "currency": "INR",
  "items": [
    {
      "productId": "prod_headphones_001",
      "nameSnapshot": "Studio Wireless Headphones",
      "quantity": 1,
      "unitPricePaise": 899900
    }
  ],
  "shippingAddress": {
    "recipient": "Demo Customer",
    "line1": "Example Street",
    "city": "Vellore",
    "state": "Tamil Nadu",
    "postalCode": "632014",
    "country": "IN"
  },
  "workflowExecutionArn": "set-by-backend",
  "correlationId": "corr_example",
  "createdAt": "2026-10-10T12:00:00Z",
  "updatedAt": "2026-10-10T12:00:00Z"
}
```
Access patterns: get order by ID; list a customer's orders newest first; admin search by status/time where justified. Add a customer/time GSI or another documented access pattern. Do not assume querying by arbitrary status is free without an index.

### OrderItems
Optional separate table if item arrays become too large or access requires it. Key by `orderId` plus `itemId`/`productId`. For the initial small catalogue, a bounded immutable item snapshot inside Orders can be simpler.

### OrderEvents
Use partition key `orderId`, sort key `eventKey` (timestamp plus stable event ID). Store:
- `eventId`
- `eventType`
- `fromStatus`, `toStatus`
- `occurredAt`
- `correlationId`
- safe, non-sensitive details
- `source` (API, workflow task, worker)
Never put secrets or unnecessary personal data in event details.

### IdempotencyKeys
Key by a scoped key such as `customerId#idempotencyKey`, with:
- `requestHash`
- `orderId`
- `state`
- `createdAt`
- `expiresAt` (optional TTL)
If the same key is reused with a different request hash, return a conflict. If the same request is repeated, return the existing order/result. Use conditional creation and carefully handle concurrent first submissions.

### Payments
Key by `orderId` or stable `paymentAttemptId`, with:
- `paymentAttemptId`
- `idempotencyKey`
- `amountPaise`
- `status`: `PENDING`, `SUCCEEDED`, `FAILED`, `UNKNOWN`
- `createdAt`, `updatedAt`
- simulated result code
The same attempt must not succeed twice. `UNKNOWN` requires reconciliation before repeating a side effect.

## 3. Inventory invariants

1. `available >= 0`.
2. `reserved >= 0`.
3. A reservation can transition from active to released/committed only once.
4. A release operation is idempotent.
5. A failed payment does not release stock until the failure is definitive.
6. Concurrent final-unit requests must produce at most one successful reservation.

## 4. Order states

Suggested states:
- `PENDING`
- `VALIDATING`
- `INVENTORY_RESERVED`
- `PAYMENT_PENDING`
- `PAYMENT_UNKNOWN`
- `PAYMENT_FAILED`
- `CONFIRMED`
- `FULFILLMENT_PENDING`
- `SHIPMENT_CREATED`
- `DISPATCHED` (simulated)
- `DELIVERED` (simulated)
- `CANCELLATION_PENDING`
- `CANCELLED`
- `FAILED`

Do not allow arbitrary status mutation. Enforce transitions in backend/workflow logic and record an event for each transition.

## 5. Access pattern checklist

- Get product by ID.
- Get product by slug.
- List products by category and page token.
- Get inventory by product ID.
- Reserve/release inventory by product ID and reservation ID.
- Get order by ID.
- List a customer's orders by creation time.
- Get order events by order ID ordered by time.
- Resolve idempotency key.
- Get payment attempt by stable attempt ID.
- Admin search by status/date using a documented index or a bounded demonstration-only strategy.

## 6. Consistency and transactions

Use conditional expressions for inventory and idempotency. Use DynamoDB transactions only where the cross-item atomicity requirement is justified and supported. Do not assume an entire distributed workflow can be enclosed in one database transaction. Step Functions compensation handles cross-service business recovery.
