# API Contract

Base path: `/api/v1`

All request/response bodies are JSON. Production/development API URLs are configured in environment variables and never hardcoded into source files.

## Common conventions

- Use a request/correlation ID in logs and responses.
- Validate body, path, query and content type.
- Use structured errors.
- Paginate list endpoints.
- Authenticate customer and admin endpoints.
- The backend computes prices and totals.
- Never accept a client-provided role, authoritative customer ID, price, or stock value.
- `Idempotency-Key` is required for order creation.
- An accepted order is not yet a completed order.

## Error format

```json
{
  "error": {
    "code": "INSUFFICIENT_STOCK",
    "message": "One or more items are no longer available.",
    "requestId": "req_example",
    "details": []
  }
}
```

Do not include stack traces, secrets, internal ARNs, or sensitive customer details in public errors.

## Endpoints

### GET `/products`
Query parameters: `category`, `q` (if supported), `sort`, `limit`, `cursor`.

Success `200`:
```json
{
  "items": [
    {
      "productId": "prod_headphones_001",
      "slug": "studio-wireless-headphones",
      "name": "Studio Wireless Headphones",
      "pricePaise": 899900,
      "currency": "INR",
      "imageUrl": "/assets/headphones.webp",
      "inStock": true
    }
  ],
  "nextCursor": null
}
```
Public catalogue fields only. `imageUrl` may be a controlled public asset URL or a backend-provided URL; never expose a private invoice URL.

### GET `/products/:id`
Returns product details. `404` if absent or inactive.

### GET `/categories`
Returns available categories.

### POST `/orders`
Headers:
- `Content-Type: application/json`
- `Idempotency-Key: <unique client-generated key>`
- Authorization as required by the selected authentication model.

Request:
```json
{
  "items": [
    {"productId": "prod_headphones_001", "quantity": 1}
  ],
  "shippingAddress": {
    "recipient": "Demo Customer",
    "line1": "Example Street",
    "city": "Vellore",
    "state": "Tamil Nadu",
    "postalCode": "632014",
    "country": "IN"
  }
}
```

Rules:
- Validate quantity bounds and active product IDs.
- Calculate total from current trusted server-side product data.
- Hash normalized request content for idempotency conflict detection.
- Persist a durable pending order and start Step Functions.
- Return `202 Accepted` after the order and workflow-start behavior is safely handled.

Response:
```json
{
  "orderId": "ord_example",
  "status": "PENDING",
  "statusUrl": "/api/v1/orders/ord_example",
  "eventsUrl": "/api/v1/orders/ord_example/events",
  "correlationId": "corr_example"
}
```

Errors: `400` validation error; `401` unauthenticated; `403` unauthorized; `409` same idempotency key with different request content or known stock conflict; `429` throttled; `500/503` service failure. Exact mapping should be documented and consistent.

Important: if persisting the order succeeds but starting the workflow fails, do not leave an invisible stranded order. Use a defined recovery strategy (for example, mark start failure and allow a controlled retry/reconciler) and test it.

### GET `/orders/:id`
Requires owner/admin authorization unless the order ID is paired with a deliberately designed secure guest-order access mechanism. Return durable order state, item snapshot, totals, timestamps, and safe status information. Never return another customer's data.

### GET `/orders/:id/events`
Return ordered event history after authorization. Paginate if needed. Avoid sensitive internals in customer-visible messages.

### GET `/me/orders`
Authenticated customer's orders, paginated newest first.

### POST `/admin/products`
Admin-only product creation with validation.

### PATCH `/admin/products/:id`
Admin-only update. Do not let arbitrary updates overwrite order snapshots.

### PATCH `/admin/inventory/:id`
Admin-only stock adjustment. Use a validated adjustment reason and audit event; avoid exposing this operation to customer roles.

### GET `/admin/orders`
Admin-only bounded search using documented indexes/filters.

## Status and polling

The browser should poll the order status endpoint at a modest interval while the order is non-terminal, stop after terminal status, clean up polling on route changes/unmount, and recover state after refresh. Avoid showing success until the backend says the order reached the appropriate successful state.

## Authentication decision

The project must select and document an authentication provider/model before exposing customer data. Use a managed identity provider such as Amazon Cognito if the team chooses it and can configure it safely, or a clearly scoped development-only authentication strategy for local work. Never treat a client-side role flag as authorization.
