# Antigravity Implementation Prompts

Use these prompts one at a time. Before moving to the next phase, run the app/tests and review the actual output. The prompts are also included in the master project plan.

## Phase 1 — Architecture and project foundation

You are the lead software architect for our university Cloud Architecture Design project.

Project: Serverless Order Orchestration & Fulfillment System.

Objective: Build a complete e-commerce platform backed by a genuinely serverless, event-driven AWS order-processing system. Demonstrate inventory verification, simulated payment, confirmation, shipment initiation, retries, failure recovery, compensating transactions, scalability, security, and observability.

Mandatory stack:
- React, Vite, Tailwind CSS, React Router, TanStack Query
- Node.js, Express-compatible routing, AWS Lambda
- Amazon API Gateway, Step Functions, DynamoDB
- Amazon SQS, SNS, S3
- CloudWatch and X-Ray where supported
- AWS SAM/CloudFormation, Git, GitHub
- AWS Amplify Hosting for the frontend

Architecture rules:
1. Frontend communicates via documented HTTPS JSON APIs.
2. Order endpoint creates/reuses a durable order, starts Step Functions, and returns a durable reference without waiting for fulfillment.
3. Step Functions coordinates validation, inventory reservation, simulated payment, confirmation, and shipment initiation.
4. Retries, terminal failure paths, and compensation are explicit.
5. Inventory uses atomic conditional writes; prevent overselling.
6. Checkout and every side-effecting operation are idempotent.
7. SQS/SNS are used for justified asynchronous work and events.
8. S3 holds product assets and private invoices.
9. Order transitions are auditable and observable.
10. No real payment credentials or transactions.
11. Least-privilege IAM; no secrets in frontend or Git.
12. All AWS resources are defined as code.

Before coding, create:
- docs/PROJECT_SPECIFICATION.md
- docs/ARCHITECTURE.md
- docs/ARCHITECTURE_DECISIONS.md
- docs/DATABASE_SCHEMA.md
- docs/API_CONTRACT.md
- docs/ORDER_STATE_MACHINE.md
- docs/SECURITY_MODEL.md
- docs/DEPLOYMENT_PLAN.md
- docs/COST_AND_CLEANUP.md
- docs/TEST_STRATEGY.md

Include Mermaid architecture/state diagrams, API examples, DynamoDB access patterns, failure handling, environment variables, IAM permissions, cost risks, acceptance criteria, and a list of decisions requiring team approval. Do not generate the entire application yet. Do not silently change the stack.

## Phase 2 — Storefront

Implement a premium electronics e-commerce frontend using React, Vite, Tailwind CSS, React Router, and TanStack Query. Include responsive homepage, shop/search/categories/filters, product details, cart, checkout, login/register screens, order tracking, order history, and admin interface. Use realistic product photography and mock data behind a replaceable service layer. Build functional cart operations, totals, validation, skeletons, empty/error/pending states, accessibility, and reduced-motion support. Do not fabricate payment, inventory, reviews, or delivery events. Add tests for cart calculations and key interactions. Run every route and fix console errors. No AWS deployment in this phase.

## Phase 3 — Backend and DynamoDB

Implement Node.js backend with Express-compatible routing and Lambda support, AWS SDK v3, validated environment configuration, product/catalogue APIs, persistent orders, inventory reads and atomic conditional reservations, server-calculated integer-paise totals, idempotency, structured errors, request IDs, validation, pagination, audit events, customer authorization, admin authorization, and unit/API/concurrency tests. Separate routes, business logic, repositories, validation, and infrastructure. Do not put the whole lifecycle in one request handler. Prepare the order endpoint to start Step Functions in Phase 4. Never trust frontend prices, roles, customer IDs, or stock.

## Phase 4 — Step Functions

Define the state machine as infrastructure as code. Include validation, inventory reservation, payment simulation, confirmation, shipment initiation, success, and failure/compensation states. Add bounded retries/backoff, catches, timeouts, idempotent payment/inventory tasks, durable status transitions, event records, ambiguous payment reconciliation, controlled admin-only fault injection, and correlation IDs. Return an order ID without waiting for fulfillment. Test every happy and compensation branch. Retries must not duplicate side effects.

## Phase 5 — SQS/SNS/S3

Use SQS for appropriate background processing, SNS for lifecycle event fan-out, and a DLQ for retry-exhausted messages. Implement idempotent consumers, bounded retries/redrive, event/correlation IDs, message validation, private S3 invoice storage, authorized/short-lived access, and notification processing history. Test duplicate delivery, worker crashes, poison messages, and recovery. Step Functions remains the core orchestrator. Do not equate SNS publication with confirmed customer receipt.

## Phase 6 — Frontend/backend integration

Replace mock product/order data with actual API calls; retain mocks only for explicit local development. Connect catalogue, search, product details, checkout, idempotency key handling, order tracking, event history, order history, and admin workflows. Handle loading, timeout, network errors, stock conflicts, payment failure, and success. Poll at a reasonable interval only while non-terminal and clean up polling. Enforce authorization on the server. Verify a browser purchase creates persistent DynamoDB data and an inspectable Step Functions execution.

## Phase 7 — AWS deployment

Deploy via AWS SAM/CloudFormation. Define API Gateway, Lambda, Step Functions, DynamoDB tables/indexes, SQS/DLQs, SNS, S3, IAM, and monitoring. Use least privilege, separate environments, secure config, CORS, backend-first deployment, Amplify Hosting with GitHub, correct API URL, SPA rewrites, private S3, log retention, budget alerts, rollback and cleanup documentation. Do not claim success until actual resources/endpoints are verified. Never invent URLs, ARNs, metrics, or screenshots.

## Phase 8 — Reliability and observability

Test successful order, insufficient stock, concurrent final-unit purchases, duplicate checkout, payment failure/compensation, Lambda transient failures/retry exhaustion, duplicate SQS delivery, DLQ redrive, invoice failure, shipment failure, and unauthorized requests. Build CloudWatch dashboards for order volume/success/failure, workflow duration, Lambda errors/throttles, queue depth/age, and DLQ messages. Add alarms and correlation IDs; tracing only where supported/affordable. Run bounded load tests and record real conditions, latency, throughput, errors, and cost. Include cleanup.

## Phase 9 — Final presentation

Prepare architecture and state-machine diagrams, schema/access-pattern explanation, API reference, security/IAM explanation, IaC/deployment guide, verified cost report, test evidence, demo script, troubleshooting, and cleanup. Demo successful checkout, inspect Step Functions and DynamoDB, trigger a controlled failure, verify compensation, and show CloudWatch evidence. Distinguish implemented features from simulations and future work. Never invent results. Ensure a new team member can follow the README to run tests, deploy, and reproduce the demo.
