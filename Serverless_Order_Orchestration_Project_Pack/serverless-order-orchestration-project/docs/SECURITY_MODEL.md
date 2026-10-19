# Security Model

## 1. Security goals

- Protect customer identity, addresses, order history, and invoices.
- Prevent unauthorized product/inventory/order administration.
- Prevent overselling, price manipulation, duplicate side effects, and abuse of fault injection.
- Keep credentials and secrets out of Git and the browser.
- Minimize retained personal data and sensitive logging.

## 2. Trust boundaries

1. Browser is untrusted. All input is validated on the server.
2. API Gateway is the public entry point.
3. API Lambda has only the permissions needed for its API responsibilities.
4. Workflow task Lambdas each have narrowly scoped permissions.
5. Step Functions can invoke only intended tasks and integrations.
6. SQS/SNS policies restrict publishers/consumers to intended resources.
7. S3 invoice bucket is private; no public bucket policy.
8. DynamoDB is accessed through IAM roles, not directly by browsers.

## 3. Authentication and authorization

- Decide and document the identity solution before real customer data is exposed.
- A managed identity service such as Amazon Cognito is a reasonable AWS-native option, but implementation must be tested and correctly configured.
- Customer order retrieval must enforce ownership server-side.
- Admin endpoints require an administrator role/claim verified by trusted backend logic.
- Hiding a button or route in React is not authorization.
- Do not trust `customerId`, `role`, `isAdmin`, price, or inventory fields supplied in request bodies.
- For guest checkout, implement a deliberate secure order-access mechanism rather than relying on an easily guessed order ID.

## 4. IAM

- Use execution roles and short-lived credentials; never commit access keys.
- Scope DynamoDB permissions to the required tables/indexes and operations.
- Scope S3 permissions to specific buckets/prefixes.
- Scope `states:StartExecution` to the intended state machine.
- Scope Lambda invoke permissions to the intended functions.
- Restrict SQS send/receive/delete and SNS publish permissions to required resources.
- Avoid broad `*` permissions unless unavoidable and documented.
- Separate deployment permissions from runtime permissions.

## 5. API protections

- HTTPS only.
- Validate payload size, schema, type, ranges, and allowed values.
- Set API throttling/quotas and consider AWS WAF only if justified by scope and cost.
- Configure CORS for the actual frontend origin; CORS is not authentication.
- Return generic safe errors; keep stack traces in protected logs.
- Use request IDs/correlation IDs.
- Avoid unlimited search, pagination, or invoice generation requests.
- Rate-limit or protect authentication endpoints where supported.
- Validate image upload content type/size and use controlled object keys if uploads are enabled.

## 6. Data protection

- Use encryption at rest and HTTPS in transit using AWS service defaults/configuration appropriate to the deployment.
- Keep invoices private; return short-lived authorized links only after authorization.
- Do not log passwords, tokens, full address payloads, secrets, or unnecessary personal data.
- Use synthetic test customer data for demonstrations.
- Set log retention and data cleanup rules.
- Define backup/recovery needs according to course scope and cost.

## 7. Fault injection controls

- Failure injection must be disabled or inaccessible in ordinary customer flows.
- Restrict it to an authenticated administrator/demo role.
- Use an allowlisted scenario name, not arbitrary code or raw Lambda input.
- Log who triggered the test, scenario, order ID, and result without leaking sensitive details.
- Never expose a general-purpose endpoint that can cause unbounded retries or cost.

## 8. Threat cases to test

- Customer requests another customer's order.
- Non-admin invokes admin endpoints.
- Client submits a lower price or fake stock.
- Duplicate checkout.
- Malformed/oversized input.
- S3 invoice URL accessed without authorization.
- Repeated order creation or status polling abuse.
- Forged/duplicate queue message.
- Fault injection by an unauthorized user.
- Secrets accidentally included in frontend build or logs.

## 9. Security acceptance criteria

All threat cases above have reproducible tests, and the report includes actual outcomes. Do not claim the system is production-secure solely because IAM or Cognito is present.
