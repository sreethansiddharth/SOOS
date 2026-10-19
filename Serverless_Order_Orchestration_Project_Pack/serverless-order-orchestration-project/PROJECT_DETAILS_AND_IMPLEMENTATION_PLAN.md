# Serverless Order Orchestration & Fulfillment System
## Complete Project Plan, Implementation Guide, and Antigravity Prompts

**Course:** BCSE355L — Cloud Architecture Design  
**Semester:** Fall 2026–2027  
**Primary objective:** Build a polished e-commerce storefront backed by a reliable serverless AWS order orchestration and fulfillment workflow.

> This master document consolidates the project plan, architecture, technology choices, UI requirements, implementation phases, failure scenarios, deployment plan, testing, team division, and acceptance checklist. The accompanying `docs/` files provide focused, implementation-ready specifications.

---

Rahul, I went through your project PDF, Serverless Order Orchestration & Fulfillment System for BCSE355L — Cloud Architecture Design. Your team has the foundation for a genuinely strong cloud project, but the key is to build it in the right order.

Yes — build a working e-commerce website first, then deploy it on AWS. But don't stop at deploying a website. The real project is demonstrating how AWS processes orders reliably, handles failures, rolls back incomplete transactions, scales with demand, and lets you trace every order through a serverless workflow.

Your PDF already establishes the right core: API Gateway, AWS Step Functions, SQS/SNS, DynamoDB/S3, Lambda, CloudWatch, X-Ray, and Infrastructure as Code. Pages 4–9 describe the order-processing pipeline, while page 10 identifies architecture finalization, IaC, fault testing, and deployment as the next steps. 

Serverless-Order-Orchestration-and-Fulfillment-System.pdf

I'll structure the plan so you can give it to Antigravity phase by phase, rather than asking it to generate an enormous application in one attempt.

# 1. What exactly are you building?

[dribbble.com](https://dribbble.com/shots/26365094-Gadget-Mart-Ecommerce-Website)

## The customer-facing product

A complete, polished e-commerce platform where users browse products, manage their cart, check out, place orders, and track their delivery status.

[anand-guptaa.medium.com](https://anand-guptaa.medium.com/applying-the-aws-step-function-to-solve-common-microservice-design-patterns-7d8b957e17c2)

## The cloud-engineering product

An event-driven order orchestration system that coordinates inventory, payment simulation, confirmation, shipment, retries, compensating transactions, and operational monitoring.

The two parts must work together. The storefront is the visible interface; the serverless workflow is the technical centerpiece.

## The main demonstration

A customer buys a product with five units in stock. The backend reserves one unit, processes a simulated payment, confirms the order, and triggers shipment. The order status changes on the website.

Then your team deliberately causes payment failure. The workflow retries where appropriate, releases the inventory reservation if the order ultimately fails, marks the order appropriately, and records the failure in the monitoring dashboard.

That second scenario is what makes this much more impressive than an ordinary CRUD e-commerce website.

# 2. Final technology stack — what you should choose

Don't select technologies merely because they are popular. Your stack should directly support the architecture promised in your project abstract.

Frontend — React.js + Vite + Tailwind CSS

Choose this

Use React for reusable components, Vite for fast development, and Tailwind CSS for a consistent, responsive design system. Use React Router for pages and TanStack Query for API state.

Backend — Node.js + Express.js

Use Node.js for the API and AWS Lambda handlers. Express can organize REST endpoints, using a Lambda-compatible adapter when deployed behind API Gateway. Keep order orchestration in Step Functions, not in one giant Express controller.

Primary database — Amazon DynamoDB

Recommended

A managed NoSQL database that fits your serverless architecture, supports conditional writes for stock reservations, and offers on-demand capacity. 

Amazon Web Services

You do not need to provision or maintain a database server for this student project.

Compute — AWS Lambda

Run API handlers and individual order-processing tasks without maintaining application servers. Use a currently supported Node.js runtime; Node.js 24 is one suitable option. 

AWS Lambda

Workflow engine — AWS Step Functions

The centerpiece of the project. It coordinates the order lifecycle, retries, failure paths, timeouts, and compensating actions. 

AWS Lambda

Messaging — Amazon SQS + SNS

SQS buffers asynchronous work; SNS distributes notifications. Use a dead-letter queue to isolate messages that repeatedly fail.

File storage — Amazon S3

Store product images, generated invoices, and optional reports. Use private storage for invoices and controlled access for uploaded images.

API layer — Amazon API Gateway

Expose HTTPS endpoints, validate requests, and route calls to Lambda. It also provides a clear boundary between the website and the backend.

Frontend hosting — AWS Amplify Hosting

Connect your GitHub repository and deploy the React application with automated builds, HTTPS, and CDN-backed delivery. 

AWS Amplify Gen 2 Documentation

Monitoring — CloudWatch + X-Ray

Collect logs, metrics, alarms, and traces so you can demonstrate exactly where a failed order stopped and why.

## Why DynamoDB instead of MongoDB or MySQL?

| Database            | Suitability for this project                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon DynamoDB     | Best fit for a fully serverless AWS architecture, especially conditional inventory operations and order lookups.                               |
| Amazon RDS / Aurora | Good when relational joins and SQL transactions are central, but adds relational database configuration and potentially higher baseline costs. |
| MongoDB Atlas       | Viable, but introduces an additional provider and connection/network considerations instead of showcasing AWS-native storage.                  |

My recommendation: use DynamoDB as your only primary database for version 1. Don't add MySQL, MongoDB, or a second database just to make the stack look bigger.

There is an important design consequence: DynamoDB does not behave like a relational database. You must design your access patterns and partition keys before implementing queries. Avoid pretending it supports arbitrary SQL joins.

Use separate logical tables initially for `Products`, `Inventory`, `Orders`, `OrderEvents`, and optionally `IdempotencyKeys`. A single-table design is also possible, but separate tables are easier for a student team to understand and demonstrate. Choose one approach and document why.

# 3. The AWS architecture you should actually implement

React + Tailwind storefront

Product browsing · Cart · Checkout · Order tracking · Admin

HTTPS / JSON

Amazon API Gateway

REST/HTTP endpoints · request limits · authorization

AWS Lambda — API layer

Catalog · Cart/checkout · Order submission · Status lookup

Start execution with an order ID

### AWS Step Functions

1\. Validate order

2\. Reserve inventory

3\. Simulate payment

4\. Confirm order

5\. Initiate simulated shipment

Retry / Catch → Compensate → Failed or Cancelled

DynamoDB

Products, stock, orders, event records

SQS + SNS

Async tasks, notifications, DLQ

Amazon S3

Images, invoices, reports

CloudWatch + X-Ray

Logs, traces, metrics, alarms

This is the logical design. The actual implementation should connect each component through explicit permissions, defined inputs and outputs, and controlled state transitions.

## One crucial architectural decision

Do not build an Express application that handles the entire checkout sequence synchronously.

Instead:

1. API Gateway receives the order request.
2. A Lambda validates it, creates a durable pending order, and starts Step Functions.
3. The API returns an order ID and an accepted/pending response.
4. Step Functions runs the workflow independently.
5. The frontend fetches the latest order state or uses controlled polling to update the tracking screen.

This design makes the asynchronous workflow visible to your examiner.

Express is still useful for organizing REST routes, but it should be an API adapter, not the orchestration engine.

## How to use SQS and SNS correctly

Your PDF includes both services, and you should demonstrate both. However, don't add queues to every step simply to increase the number of AWS services.

- Use Step Functions to coordinate dependent operations that must happen in order.
- Use SQS to decouple background jobs, such as invoice generation or fulfillment processing, and to absorb bursts of work.
- Use SNS to publish order events to notification subscribers.
- Configure a dead-letter queue for messages that exhaust their retry attempts.
- Make consumers idempotent because messages can be delivered more than once.

A queue is not automatically a substitute for workflow orchestration. Use each service for the job it is designed to perform.

# 4. How the website must look and behave

Your goal is a polished, credible retail product—not a generic AI-generated template with glowing gradients, excessive animations, and decorative cards that do nothing.

I recommend a premium electronics and desk-technology store. This category gives you attractive products, product variants, stock management, order quantities, and realistic fulfillment scenarios.

## Required pages

01\. Home page — `/`

- Editorial hero with a strong product image.
- Featured collections and best sellers.
- Search, category navigation, and promotional banners.
- Recently viewed products and clear calls to action.

02\. Shop — `/shop`

- Search, category filters, price sorting, pagination.
- Product cards with real images, ratings if supported by real data, and stock availability.
- Loading skeletons, empty states, and API error handling.

03\. Product detail — `/products/:slug`

- Image gallery, specifications, price, quantity selector.
- Available stock and product variants.
- Add-to-cart feedback, delivery estimate, and related items.

04\. Cart and checkout — `/cart`, `/checkout`

- Persistent cart, quantity adjustments, and remove actions.
- Validated delivery address and order summary.
- Server-calculated prices, shipping, and taxes.
- Clear pending, failed, and successful checkout states.

05\. Order tracking — `/orders/:id`

- Order reference and item details.
- Timeline for inventory, payment, confirmation, and shipment.
- Current status, failure reason where safe, and last update time.
- Live-looking updates driven by actual backend state, not hardcoded animations.

06\. Admin and operations — `/admin`

- Product and inventory management.
- Order search and status inspection.
- Workflow execution reference and retry/error summaries.
- Controlled fault injection for demonstrations.

### Visual design system

Use these as the initial design tokens. Antigravity should implement them consistently rather than inventing new styles on each page.

Midnight

\#172B3A

Warm ivory

\#F6F4EF

Mist

\#D9E7E8

Teal

\#267C78

Typography: use a distinctive display font for large headings and a highly readable sans-serif for interface text. Keep body text around 14–16 px, with consistent line heights.

Motion: subtle hover transitions, product-image reveals, cart feedback, and a well-designed order timeline. Respect reduced-motion settings.

Layout: generous whitespace, aligned product grids, restrained borders, consistent spacing, and responsive mobile layouts.

Important: use real product photography from permitted sources, not emoji as product images. Avoid fake reviews, fake sales counters, fake inventory numbers, and fake delivery statuses.

# 5. Divide implementation into phases for Antigravity

Do not tell Antigravity to build the entire platform in a single prompt. Give it one phase at a time, review the result, run the application, and then proceed.

## 01

Project specification and architecture

Foundation

Define the data model, architecture diagram, route map, state machine, security boundaries, naming conventions, repository structure, and acceptance criteria. No full application generation yet.

Deliverable: architecture and implementation documents that prevent inconsistent decisions in later phases.

## 02

Storefront design and frontend

Build the complete responsive React application using realistic mock product data. Implement navigation, product detail, cart, checkout, tracking, and admin layouts.

Deliverable: a locally running website with functional interactions and mock data, before AWS dependencies are introduced.

## 03

Backend and DynamoDB

Implement the API contract, validation, products, inventory, order creation, idempotency, and status queries. Start locally with a repository abstraction or DynamoDB Local, then test against an AWS development table.

Deliverable: real API operations with persistent data and tests, rather than frontend-only simulations.

## 04

Serverless order orchestration

Implement the Step Functions state machine, Lambda tasks, success and failure branches, retries, timeouts, inventory compensation, payment simulation, and shipment initiation.

Deliverable: an end-to-end order that works, fails safely, and can be inspected in the AWS console.

## 05

Messaging, notifications and documents

Add SQS, SNS, dead-letter handling, invoice generation in S3, and asynchronous fulfillment. Make event consumers idempotent.

Deliverable: independently processed background tasks with recoverable failures.

## 06

Connect frontend to the real backend

Replace mock data, connect checkout to the API, add loading and error states, implement order tracking, and restrict administrative operations.

Deliverable: a complete application that works through the actual cloud workflow.

## 07

AWS infrastructure and deployment

Define infrastructure as code, deploy the API and workflow, configure IAM, deploy the frontend, and configure environment-specific endpoints.

Deliverable: a reproducible AWS deployment that can be redeployed from the repository.

## 08

Resilience, monitoring and load testing

Test stock contention, duplicate checkout, payment failure, timeouts, retries, dead-letter messages, and recovery. Add CloudWatch dashboards and alarms, and tracing where supported.

Deliverable: evidence of reliability, not just a successful happy-path demo.

## 09

Final presentation and project evidence

Prepare the architecture diagram, workflow screenshot, failure/recovery evidence, cost report, test results, and a rehearsed live demonstration.

Deliverable: a project that can be evaluated technically and demonstrated clearly.

## Phase 1 — the exact Antigravity instruction

Use this as your first prompt. It intentionally asks for the plan and repository foundation, not the entire application.

# PHASE 1 — ARCHITECTURE AND PROJECT FOUNDATION

You are the lead software architect for our university Cloud Architecture Design project.

## Project name

Serverless Order Orchestration & Fulfillment System

## Project objective

Build a complete e-commerce platform backed by a genuinely serverless, event-driven AWS order-processing system. The project must demonstrate automated inventory verification, payment processing, order confirmation, shipment initiation, retries, failure recovery, compensating transactions, scalability, security, and observability.

## Mandatory technology stack

- Frontend: React.js, Vite, Tailwind CSS.
- Frontend routing: React Router.
- API state management: TanStack Query.
- Backend: Node.js, Express.js, AWS Lambda.
- API gateway: Amazon API Gateway.
- Workflow: AWS Step Functions.
- Database: Amazon DynamoDB.
- Messaging: Amazon SQS and Amazon SNS.
- Object storage: Amazon S3.
- Monitoring: Amazon CloudWatch and AWS X-Ray where supported.
- Infrastructure as Code: AWS SAM with CloudFormation.
- Version control: Git and GitHub.

## Architecture rules

1. The frontend must communicate with the backend using documented HTTPS JSON APIs.
2. The backend must start an AWS Step Functions execution for an order and return a durable order reference without waiting for the entire fulfillment process.
3. Step Functions must coordinate inventory reservation, simulated payment, order confirmation, and shipment initiation.
4. Implement retries for transient failures, explicit terminal failure paths, and compensating actions for completed steps that need reversal.
5. Inventory reservations must use atomic conditional DynamoDB operations. Prevent overselling.
6. Checkout must be idempotent. Duplicate submissions must not create duplicate orders or charge a simulated payment twice.
7. Use SQS and SNS for appropriate asynchronous tasks and notifications, not as unnecessary decorations.
8. Use S3 for product assets and private invoice documents.
9. Every important order transition must be auditable and observable.
10. No real payment credentials, live financial transactions, or unnecessary paid services are required. Payment is simulated.
11. Use least-privilege IAM roles. Never expose AWS credentials, secrets, or private customer information in the frontend.
12. All AWS resources must be defined reproducibly using infrastructure as code.

## Required Phase 1 deliverables

Create the following documents before implementing the full application:

- `docs/PROJECT_SPECIFICATION.md`
- `docs/ARCHITECTURE.md`
- `docs/ARCHITECTURE_DECISIONS.md`
- `docs/DATABASE_SCHEMA.md`
- `docs/API_CONTRACT.md`
- `docs/ORDER_STATE_MACHINE.md`
- `docs/SECURITY_MODEL.md`
- `docs/DEPLOYMENT_PLAN.md`
- `docs/COST_AND_CLEANUP.md`
- `docs/TEST_STRATEGY.md`

Include an architecture diagram in Mermaid, complete order state transitions, API request/response examples, DynamoDB access patterns, error handling, environment variables, AWS permissions, and acceptance criteria.

Identify dependencies, possible race conditions, failure scenarios, security risks, and AWS costs before coding.

Do not generate the entire application yet. Do not silently change the mandatory stack. If a technical choice conflicts with the required architecture, explain the conflict and propose the smallest justified adjustment.

At the end, provide a checklist of architectural decisions that the team must approve before Phase 2 begins.

# 6. The order-processing workflow — make this technically correct

This is the most important part of the project. The order lifecycle should be explicitly modeled, not implemented as a sequence of unrelated API calls.

Order submitted

Validate items, quantity, price and request ID

Create pending order

Persist order ID and initial status in DynamoDB

Reserve inventory

Atomic conditional update; reject insufficient stock

Simulate payment

Record the payment attempt using an idempotency key

Confirm order

Persist confirmation, publish the order event

Shipment initiated

Create simulated shipment and generate invoice

Failure and compensation path

- Inventory unavailable → reject without payment.
- Payment fails after inventory reservation → release reserved inventory.
- Shipment initiation fails → retry or mark fulfillment as pending; do not automatically refund a successfully paid order without a defined cancellation policy.
- A permanent failure → record the reason and expose the final state to the customer.

## Important corner cases that your implementation must handle

| Scenario                             | Expected behavior                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Customer clicks Place Order twice    | Return the existing result for the same idempotency key.                                       |
| Two customers buy the last item      | Only one conditional reservation succeeds.                                                     |
| Payment times out                    | Treat the result as potentially ambiguous; reconcile before retrying a payment side effect.    |
| Lambda crashes after reserving stock | Workflow recovery must not reserve stock twice or lose the reservation reference.              |
| Notification delivery fails          | Retry asynchronously; order state must remain correct.                                         |
| Invoice generation fails             | Retry independently; don't undo a successfully completed purchase merely because a PDF failed. |
| Customer refreshes tracking page     | Load the latest persisted order status from the API.                                           |
| Client disconnects during checkout   | The order must still complete or fail deterministically on the backend.                        |
| Workflow receives a duplicate event  | The operation must be safe to execute more than once.                                          |
| An order is cancelled                | Release stock and reverse any simulated payment state as appropriate.                          |

A subtle but important distinction: Step Functions retries alone do not make side effects safe. Every side-effecting Lambda must be designed for retries, and ambiguous payment results must be reconciled. Your system should record reservation and payment references so compensating actions can be executed safely.

Also, model shipment initiation separately from actual delivery. Without a real carrier integration, you can demonstrate `SHIPMENT_CREATED`, `DISPATCHED`, and `DELIVERED` as simulated events, but must not claim a real parcel was dispatched.

# 7. DynamoDB design and data integrity

Define these entities before implementing checkout.

| Entity          | Important fields                                                                     | Purpose                      |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| Products        | `productId`, `slug`, `name`, `pricePaise`, `category`, `imageKey`, `active`          | Product catalogue            |
| Inventory       | `productId`, `available`, `reserved`, `updatedAt`                                    | Atomic stock reservation     |
| Orders          | `orderId`, `customerId`, `status`, `totalPaise`, `createdAt`, `workflowExecutionArn` | Durable order record         |
| OrderItems      | `orderId`, `productId`, `quantity`, `unitPricePaise`                                 | Immutable purchase snapshot  |
| OrderEvents     | `orderId`, `eventId`, `eventType`, `timestamp`, `details`                            | Audit timeline               |
| IdempotencyKeys | `key`, `requestHash`, `orderId`, `expiresAt`                                         | Duplicate-request protection |
| Payments        | `orderId`, `paymentAttemptId`, `status`, `amountPaise`                               | Simulated payment records    |

These can be separate tables or grouped using a carefully designed single-table schema. For the first version, separate tables are easier to inspect and explain.

### Non-negotiable database rules

- Store money as integer paise, not floating-point rupees.
- Recalculate totals using trusted product prices on the server. Never trust a total sent by React.
- Use conditional updates to ensure stock cannot go below zero.
- Store an order's purchased item names, quantities, and unit prices as a snapshot. Future product edits must not rewrite historical purchases.
- Define indexes around actual access patterns, such as customer order history and administrative order search.
- Do not scan the entire orders table on every request.
- Do not expose raw DynamoDB tables directly to unauthenticated clients.
- Design retention for idempotency records and operational logs explicitly; DynamoDB TTL deletion is asynchronous, not an exact-time guarantee.

## API contract

Use a predictable REST interface.

| Method | Endpoint                      | Purpose                         |
| ------ | ----------------------------- | ------------------------------- |
| GET    | `/api/v1/products`            | Paginated catalogue             |
| GET    | `/api/v1/products/:id`        | Product details                 |
| GET    | `/api/v1/categories`          | Product categories              |
| POST   | `/api/v1/orders`              | Submit an idempotent order      |
| GET    | `/api/v1/orders/:id`          | Retrieve an order               |
| GET    | `/api/v1/orders/:id/events`   | Retrieve its timeline           |
| GET    | `/api/v1/me/orders`           | Authenticated customer's orders |
| POST   | `/api/v1/admin/products`      | Create a product                |
| PATCH  | `/api/v1/admin/products/:id`  | Update product data             |
| PATCH  | `/api/v1/admin/inventory/:id` | Adjust stock with authorization |
| GET    | `/api/v1/admin/orders`        | Search and inspect orders       |

Use consistent HTTP statuses, structured JSON errors, input schemas, request IDs, and pagination. Protect all administrative routes and customer-specific resources with server-side authorization.

# 8. AWS deployment plan

Deploy the project in this order: infrastructure and backend first, frontend second, then integration testing.

Step 1 — GitHub repository

Store frontend, backend, workflow definitions, tests, and infrastructure templates in version control. Commit `.env.example`, not actual credentials.

Step 2 — Infrastructure as Code

Use AWS SAM and CloudFormation to define the Lambda functions, API Gateway, DynamoDB tables, Step Functions state machine, SQS queues, SNS topic, S3 buckets, IAM roles, and monitoring resources.

Step 3 — Deploy and test the backend

Build and deploy the SAM stack to a development environment. Test the API, database writes, workflow transitions, failure branches, and permissions before connecting the storefront.

Step 4 — Deploy the React frontend

Use AWS Amplify Hosting connected to GitHub. Configure the production API URL using an environment variable and set up SPA routing. Amplify supports Git-based deployment and CDN delivery. 

AWS Amplify Gen 2 Documentation

Step 5 — Security and integration

Verify HTTPS, CORS, authorization, IAM permissions, private invoice access, input validation, and that no credentials are bundled into the frontend.

Step 6 — Demonstration environment

Configure dashboards, alarms, controlled fault-injection modes, a seeded product catalogue, and reproducible test orders.

## Keep the architecture serverless

For the main design, do not deploy an always-running Express server on EC2 simply because you are familiar with Express. That undermines the project's scale-to-zero objective.

A practical deployment is:

- React frontend: Amplify Hosting.
- Public API: API Gateway.
- REST handler: Node.js Lambda, with Express and a Lambda adapter if desired.
- Order processing: separate Lambda functions orchestrated by Step Functions.
- Persistent data: DynamoDB.
- Background tasks: SQS/SNS.
- Files: S3.
- Infrastructure: SAM/CloudFormation.

Use the same business logic in local and cloud environments where possible, but do not force every AWS service into a local imitation. A clear local development adapter plus an AWS integration-test environment is sufficient.

## AWS cost and security controls

Your project is a student workload, so manage cost from day one.

- Set an AWS Budget and cost alerts before deployment.

- Use DynamoDB on-demand capacity when appropriate for unpredictable demonstration traffic, and verify the current free-tier eligibility for your account and Region. 

  [image](https://www.google.com/s2/favicons?domain=https://aws.amazon.com\&sz=32)

  Amazon Web Services

- Set CloudWatch log retention rather than keeping every log forever.

- Avoid unnecessary NAT gateways, always-on databases, oversized resources, and expensive load-testing infrastructure.

- Keep invoice and internal operational buckets private.

- Use IAM roles for service-to-service permissions, never hardcoded access keys.

- Restrict public API access with appropriate authorization, throttling, validation, and abuse protection.

- Keep test and production configuration separate.

- Add a cleanup procedure for resources that can be deleted after evaluation. Retain only resources you intentionally need.

A serverless design can be inexpensive for a small demonstration, but it is not automatically free. Workflow executions, logs, API calls, data transfer, storage, and other services can incur charges. Check the AWS Pricing Calculator and your account's current rates before launching.

# 9. Exact instructions to give Antigravity for the remaining phases

After Phase 1 has been reviewed and approved, use the following implementation prompts in order. Each prompt assumes the preceding phase is complete.

## Phase 2 — Build the storefront

Goal: finish the frontend before introducing cloud dependencies.

Implement Phase 2 of Serverless Order Orchestration & Fulfillment System.

Build a complete, premium electronics e-commerce frontend using React, Vite, Tailwind CSS, React Router, and TanStack Query.

Requirements:

- Responsive homepage, shop, search, category filters, product details, cart, checkout, order tracking, login/register screens, and admin interface.
- Use a cohesive design system, realistic product photography, consistent spacing, restrained animations, polished typography, and mobile-first layouts.
- Use realistic mock data behind a repository/service interface so it can later be replaced by the real API without rewriting page components.
- Implement functional cart quantity updates, totals, validation, loading skeletons, empty states, errors, and accessible keyboard navigation.
- Clearly distinguish simulated checkout from real payment processing.
- Do not fabricate successful payments, inventory updates, reviews, or delivery events.
- Create reusable components and keep pages, components, hooks, services, and types organized.
- Add tests for critical cart calculations and user interactions.
- Do not introduce unrelated libraries or redesign the architecture approved in Phase 1.

Run the application, test every route, fix console errors, verify responsive behavior, and document the commands needed to run it locally.

Do not proceed to AWS deployment in this phase.

## Phase 3 — Implement the backend and database

Goal: build real data operations and a reliable API contract.

Implement Phase 3 using the approved project specification, DynamoDB schema, and API contract.

Build the Node.js backend with Express-compatible routing and AWS Lambda deployment support. Use the AWS SDK v3 and validated environment configuration.

Implement:

- Product listing, search, categories, and product detail APIs.
- Persistent order creation and retrieval.
- Inventory reads and atomic conditional stock reservations.
- Server-side price calculation using integer paise.
- Idempotency-key handling and duplicate-request protection.
- Structured error responses, request IDs, input validation, pagination, and audit events.
- Authenticated customer order access and protected administrative endpoints.
- Unit tests, API integration tests, and concurrency tests.

Separate business logic, route handlers, DynamoDB repositories, validation schemas, and infrastructure configuration.

Do not place the complete order lifecycle inside a single request handler. The order endpoint must be designed to start Step Functions in Phase 4.

Never trust prices, roles, customer IDs, or inventory values supplied by the frontend.

Run the tests and report the actual results, unresolved issues, and commands needed to run the backend.

## Phase 4 — Implement the Step Functions workflow

Goal: implement the central technical feature of the project.

Implement Phase 4: the AWS Step Functions order orchestration workflow.

Use the approved architecture and define the state machine through infrastructure as code.

Implement explicit states for:

1. Order validation.
2. Inventory reservation.
3. Payment simulation.
4. Order confirmation.
5. Shipment initiation.
6. Success completion.
7. Failure handling and compensation.

Add:

- Retry policies for transient failures with bounded attempts and backoff.
- Catch paths for permanent failures.
- Inventory release when payment fails after a successful reservation.
- Idempotent payment and inventory operations.
- Durable order status transitions and auditable event records.
- Handling for duplicate submissions, ambiguous payment outcomes, and partially completed workflows.
- A controlled failure-injection mechanism that cannot be triggered by ordinary customers.
- A clear execution input/output contract and correlation IDs.

Integrate the API's order-submission endpoint with StartExecution or an appropriately configured Step Functions integration. Return a durable order ID to the client without waiting for fulfillment to finish.

Do not assume that retries make side effects safe. Ensure every retried task can recognize a previously completed operation.

Test both the happy path and every compensation branch. Document the workflow diagram and provide reproducible test cases.

## Phase 5 — Messaging and document generation

Implement Phase 5 using Amazon SQS, SNS, and S3.

Add SQS-based asynchronous background processing for suitable fulfillment or invoice tasks, an SNS notification topic for order lifecycle events, and a dead-letter queue for messages that exhaust retries.

Implement:

- Idempotent message consumers.
- Explicit retry and redrive policies.
- Event IDs and correlation IDs.
- Message validation and controlled handling of malformed messages.
- Private S3 invoice storage and an authenticated or short-lived authorized retrieval mechanism.
- A notification history that distinguishes queued, processed, and failed delivery attempts.
- Tests for duplicate messages, consumer crashes, poison messages, and recovery.

Do not move essential sequential workflow coordination into ad hoc queue handlers. Step Functions remains responsible for the core order lifecycle.

Do not claim that an SNS publish proves a customer received an email. Distinguish event publication from delivery confirmation.

Update infrastructure as code and document the complete event flow.

## Phase 6 — Connect the real frontend and backend

Implement Phase 6: integrate the completed React storefront with the actual backend.

Replace mock product and order data with API calls. Keep mock services available only for explicitly configured local development.

Connect:

- Product catalogue, categories, search, and product details.
- Cart validation and checkout submission.
- Idempotency-key generation and reuse on safe retries.
- Order status tracking and persisted event history.
- Authenticated order history and administrative workflows.
- Loading, timeout, network failure, unavailable stock, payment failure, and successful completion states.

Poll order status at a reasonable interval with cleanup and stop polling when a terminal state is reached. Avoid unnecessary requests and ensure a page refresh restores the correct order from the backend.

Secure customer-specific routes using server-side authentication and authorization, not merely hidden UI elements.

Run end-to-end tests against a real development backend and verify that a purchase in the browser produces an inspectable Step Functions execution and persistent DynamoDB records.

## Phase 7 — Infrastructure and AWS deployment

Implement Phase 7: deploy the approved application to AWS using AWS SAM and CloudFormation.

Define all required infrastructure as code, including API Gateway, Lambda functions, Step Functions, DynamoDB tables and indexes, SQS queues and DLQs, SNS topics, S3 buckets, IAM roles, and monitoring configuration.

Requirements:

- Use least-privilege IAM permissions and avoid wildcard resource access wherever practical.
- Separate development and demonstration environments.
- Configure environment variables without embedding secrets in the source repository.
- Configure CORS for the intended frontend origin and validate API authorization.
- Deploy the backend and test its endpoints before connecting the frontend.
- Deploy React through AWS Amplify Hosting using GitHub integration.
- Configure the frontend API endpoint and SPA route rewrites.
- Verify private S3 access, log retention, resource limits, and budget alerts.
- Document stack creation, updates, rollback, troubleshooting, and cleanup.

Do not claim a deployment succeeded until the relevant AWS resources and endpoints have actually been tested. Never invent deployment URLs, ARNs, metrics, or screenshots.

Provide exact deployment commands and a checklist for verifying each AWS resource.

## Phase 8 — Fault testing and observability

Implement Phase 8: reliability testing, observability, and performance validation.

Create automated scenarios for:

- Successful checkout.
- Insufficient stock.
- Concurrent purchases of the final available item.
- Duplicate checkout requests.
- Payment failure and inventory compensation.
- Transient Lambda errors and retry exhaustion.
- Duplicate SQS delivery.
- Dead-letter queue redrive.
- Invoice generation failure.
- Shipment initiation failure.
- Unauthorized customer and administrator requests.

Create CloudWatch dashboards for order volume, success/failure counts, workflow duration, Lambda errors and throttles, queue depth, oldest message age, and dead-letter messages. Add useful alarms and correlation IDs. Configure tracing where supported and affordable.

Use a controlled, bounded load test. Record test conditions, observed throughput, error rates, latency, and cost. Do not claim high availability or performance improvements without evidence.

Verify that the website presents correct statuses during delays and failures. Every test must have a documented expected result and actual result.

Add cleanup instructions for test orders, messages, temporary files, and unnecessary infrastructure.

## Phase 9 — Presentation and final verification

Prepare the final deliverables for our BCSE355L Cloud Architecture Design project.

Produce:

- A clear architecture diagram.
- A detailed order state-machine diagram.
- A database schema and access-pattern explanation.
- An API reference.
- A security and IAM explanation.
- A deployment and infrastructure-as-code guide.
- A cost breakdown with verified pricing assumptions.
- Automated test results and failure-recovery evidence.
- A demonstration script with expected results.
- A troubleshooting guide and cleanup procedure.

Prepare a live demonstration that starts on the e-commerce website, places an order, follows the order through Step Functions, inspects the persistent order and inventory records, deliberately triggers a controlled failure, verifies compensation, and shows the corresponding CloudWatch logs and metrics.

Separate implemented features from simulations, limitations, and future work. Do not invent test results, user counts, costs, or claims of production readiness.

Verify that a new team member can follow the README to install dependencies, run local tests, deploy the infrastructure, open the website, and reproduce the demonstration.

# 10. What will make this project outstanding?

The difference between an average cloud project and an excellent one is the evidence that the architecture solves real problems.

1\. Demonstrate a race condition

Set inventory to one unit. Submit two concurrent orders. Prove that only one reservation succeeds and the inventory never becomes negative.

2\. Demonstrate saga compensation

Force the simulated payment to fail after inventory reservation. Show the workflow's failure path and prove that reserved stock is released exactly once.

3\. Build a live operations dashboard

Display successful and failed orders, workflow durations, Lambda errors, queue depth, and dead-letter messages. Let the evaluator select an order and inspect its execution history.

4\. Show security rather than merely claiming it

Demonstrate that a customer cannot inspect another customer's order, an ordinary user cannot invoke administrative operations, and private invoices are not publicly accessible.

5\. Run a repeatable workload experiment

Compare a low-volume workload with a controlled burst. Record actual processing times, errors, queue behavior, and AWS costs. Explain what scales automatically and what bottlenecks remain.

6\. Make the deployment reproducible

Provision the system from infrastructure as code, deploy through GitHub, document configuration, and demonstrate that the stack can be recreated without manually configuring every resource.

## 11. How your three-person team should divide the work

The division below keeps the frontend, backend, and cloud workflow progressing in parallel without allowing the interfaces to drift apart.

### Member 1 — Frontend and user experience

Primary ownership: React, Tailwind CSS, Amplify Hosting

- Storefront, catalogue, product pages and cart.
- Checkout, tracking timeline and admin UI.
- API integration, accessibility, responsive behavior and UI tests.

### Member 2 — Backend and data integrity

Primary ownership: Node.js, Express, Lambda, DynamoDB

- API contracts, data model and repository layer.
- Inventory reservations, idempotency and order status.
- Payment simulation, validation, compensation helpers and backend tests.

### Member 3 — AWS architecture and reliability

Primary ownership: Step Functions, SQS/SNS, SAM, CloudWatch

- Workflow definition and AWS infrastructure.
- Messaging, DLQs, IAM and deployment configuration.
- Monitoring, fault injection, cost controls and test evidence.

### Shared responsibility

All three members should review the API contract, test the complete order lifecycle, understand the architecture, and rehearse the presentation. Each person should be able to explain why the chosen AWS services are needed.

## 12. Final acceptance checklist

Use this checklist to decide whether a phase is genuinely finished. Don't advance just because Antigravity has generated code.

## Project readiness

## 0/19

Storefront

All required pages work on desktop and mobile

Cart calculations and checkout validation are correct

Loading, empty, error and pending states are implemented

Backend and data

Orders and inventory persist in DynamoDB

Concurrent purchases cannot oversell inventory

Duplicate submissions do not create duplicate side effects

Customer and admin permissions are enforced

Workflow and messaging

Step Functions shows the expected order lifecycle

Retries and failure paths are tested

Compensation releases reserved inventory safely

SQS, SNS and DLQ behavior is verified

Deployment and operations

AWS resources are defined through IaC

Frontend and backend work together on AWS

CloudWatch logs, metrics and useful alarms exist

Budget controls and resource cleanup are documented

Final demonstration

A successful order is demonstrated end to end

A deliberate failure and its recovery are demonstrated

The team has real test evidence and a verified architecture diagram

All three members can explain the implementation

Copy checklist

## My final recommendation

Build the project in this exact order:

1. Approve the architecture and data contracts.
2. Build the complete local storefront with mock data.
3. Implement the real backend and DynamoDB.
4. Implement and test Step Functions and compensation.
5. Add messaging and file storage.
6. Connect the actual frontend to the backend.
7. Deploy using SAM and Amplify Hosting.
8. Test failure recovery, security, monitoring, and costs.
9. Prepare the live demonstration and evidence.

The most important principle is this: the e-commerce website should make the project understandable, but the reliable serverless order workflow should make it technically impressive. That matches the event-driven, real-architecture focus of your cloud project. 

For current implementation details, keep the official [AWS Step Functions documentation](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html), [AWS SAM documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html), [DynamoDB pricing](https://aws.amazon.com/dynamodb/pricing/), and [Amplify Hosting guide](https://docs.aws.amazon.com/amplify/latest/userguide/) alongside your project specification.

One last rule for Antigravity: never accept a phase as complete just because the code looks finished. Run it, test it, inspect the actual AWS behavior, fix the failures, and only then move to the next phase. That discipline will matter more than adding another ten AWS services.
