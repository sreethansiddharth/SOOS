# Test Strategy

## 1. Test pyramid

- Unit tests: pure business rules, money calculations, validation, state-transition rules, idempotency helpers.
- Component tests: cart and checkout UI, loading/error states, accessibility-critical interactions.
- API integration tests: request validation, authorization, DynamoDB repository behavior, idempotency.
- AWS integration tests: Step Functions, Lambda permissions, SQS/SNS, DLQ, S3 privacy, CloudWatch.
- End-to-end tests: browser checkout through actual deployed API and workflow.
- Concurrency tests: simultaneous attempts to reserve limited inventory.
- Bounded load tests: controlled workload with recorded conditions and costs.

## 2. Minimum scenarios

| ID | Scenario | Expected result |
|---|---|---|
| T01 | Valid order | Order accepted; workflow progresses; final successful simulated state persists |
| T02 | Invalid product/quantity | Rejected; no inventory change |
| T03 | Insufficient inventory | Reservation fails; no payment attempt |
| T04 | Two customers buy last unit | At most one reservation succeeds; available stock never negative |
| T05 | Duplicate same idempotency key and same payload | Existing order/result returned; no duplicate side effect |
| T06 | Same key, different payload | Conflict returned |
| T07 | Definitive payment failure | Inventory reservation released exactly once |
| T08 | Ambiguous payment timeout | Reconciliation occurs before retry/release |
| T09 | Lambda crashes after side effect | Retry safely detects existing operation |
| T10 | Shipment initiation failure | Bounded retry; order remains paid/fulfillment-pending as defined |
| T11 | Invoice worker failure | Invoice task retries; purchase state is not incorrectly reversed |
| T12 | Duplicate SQS delivery | Consumer remains idempotent |
| T13 | Poison message | DLQ receives message after configured attempts; alarm/inspection path works |
| T14 | SNS publish | Event publication recorded; do not equate publish with customer delivery |
| T15 | Customer reads another order | Access denied |
| T16 | Non-admin invokes admin route | Access denied |
| T17 | Invoice URL accessed without authorization | Access denied |
| T18 | Browser refreshes pending order | Latest persisted state loads |
| T19 | Workflow start fails after order persistence | Order is not silently stranded; recovery path is documented/tested |
| T20 | Compensation fails | High-severity event/metric and operator-visible state recorded |
| T21 | Fault injection by customer | Denied |
| T22 | API throttling/oversized payload | Controlled rejection; service remains stable |

## 3. Evidence to collect

For each test, record:
- Test ID and timestamp.
- Environment and version/commit.
- Setup and steps.
- Expected result.
- Actual result.
- Pass/fail.
- Relevant order ID/correlation ID.
- Relevant workflow execution reference and CloudWatch log/metric evidence.
- Cleanup performed.

Do not fabricate results. If a test is not run, mark it “Not run.”

## 4. Concurrency test

Seed exactly one unit. Submit at least two independent order requests concurrently. Verify:
- no negative stock;
- at most one active reservation for that unit;
- loser receives a clear unavailable-stock result;
- no payment side effect occurs for the failed reservation;
- event/order records agree with inventory state.

Repeat with multiple items and a case where one item is available but another is not, to test partial reservation compensation.

## 5. Fault-injection test

Fault injection must be explicitly enabled only in a demo environment and protected by admin authorization. Support allowlisted scenarios such as:
- `PAYMENT_DEFINITIVE_FAILURE`
- `PAYMENT_AMBIGUOUS`
- `INVOICE_FAILURE`
- `SHIPMENT_TRANSIENT_FAILURE`
- `COMPENSATION_FAILURE` (only for controlled test environments)

No arbitrary code execution or unbounded retry parameter should be exposed.

## 6. Performance reporting

Use a bounded and repeatable workload. Report concurrency, number of requests/orders, test duration, Region, software version, p50/p95/p99 latency if measured, error rate, throughput, queue age, workflow duration, and observed costs. Avoid claiming production-scale performance based on a tiny student test.

## 7. Definition of done

A phase passes only when tests run, failures are fixed or documented, and evidence exists. Generated code alone is not proof of completion.
