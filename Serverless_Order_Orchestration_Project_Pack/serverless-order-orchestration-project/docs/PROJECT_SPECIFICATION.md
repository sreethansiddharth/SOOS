# Project Specification

## 1. Project identity

- **Name:** Serverless Order Orchestration & Fulfillment System
- **Course:** BCSE355L — Cloud Architecture Design
- **Type:** E-commerce storefront plus serverless order-processing platform
- **Primary outcome:** Demonstrate a complete order lifecycle and resilient failure recovery on AWS.

## 2. Problem statement

Traditional e-commerce order systems may couple inventory, payment, confirmation, and shipping into a single synchronous path. This can make failure isolation, scaling during traffic spikes, operational visibility, and cost control difficult. This project separates the customer-facing storefront from a serverless, event-driven workflow.

## 3. Objectives

1. Deliver a polished, responsive e-commerce website.
2. Automate order validation, inventory reservation, simulated payment, confirmation, and shipment initiation.
3. Coordinate dependent work with AWS Step Functions.
4. Use queues and events to decouple suitable background work.
5. Prevent overselling and duplicate side effects.
6. Implement retries, terminal failure handling, and compensating actions.
7. Observe the system through logs, metrics, execution history, and traces where supported.
8. Define infrastructure as code and document deployment and cleanup.
9. Measure behavior under controlled fault and workload tests.

## 4. In-scope features

### Customer storefront
- Homepage, shop/catalogue, categories, search, product detail, cart, checkout, order tracking, login/register screens, order history.
- Responsive desktop and mobile layouts.
- Loading, empty, error, pending, success, and unavailable-stock states.
- Realistic product imagery and product specifications.
- Cart persistence appropriate for the selected authentication model.

### Administration
- Protected product and inventory management.
- Order search and order status inspection.
- Workflow execution reference and safe fault-injection controls.
- Administrative operations authorized on the server, never only hidden in the UI.

### Cloud workflow
- Durable order record and order ID.
- Inventory reservation through atomic conditional DynamoDB operations.
- Simulated payment with idempotency.
- Order confirmation and event recording.
- Shipment initiation simulation.
- Compensation and clear terminal outcomes.
- SQS/SNS for justified asynchronous processing and notifications.
- DLQ and replay/redrive procedure.
- Private S3 invoice documents and assets.
- CloudWatch metrics/logs/alarms and tracing where supported.

## 5. Out of scope for the initial version

- Real card payments or storage of payment-card data.
- Real carrier dispatch or claims that a real parcel has shipped.
- Production-grade multi-region disaster recovery.
- Unnecessary microservices or multiple databases added only to increase technology count.
- Fake reviews, fake purchase counts, fake inventory, or fabricated performance results.

## 6. Mandatory technology stack

| Layer | Choice |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Routing | React Router |
| API state | TanStack Query |
| Backend | Node.js, Express-compatible routing, AWS Lambda |
| API | Amazon API Gateway |
| Workflow | AWS Step Functions |
| Primary database | Amazon DynamoDB |
| Messaging | Amazon SQS and SNS |
| Object storage | Amazon S3 |
| Observability | Amazon CloudWatch; AWS X-Ray where supported and affordable |
| Infrastructure as code | AWS SAM / CloudFormation |
| Frontend hosting | AWS Amplify Hosting |
| Version control | Git and GitHub |
| Testing | Unit, integration, concurrency, end-to-end, and bounded load tests |

## 7. Design direction

Use a premium electronics and desk-technology retail theme. Suggested design tokens:
- Midnight: `#172B3A`
- Warm ivory: `#F6F4EF`
- Mist: `#D9E7E8`
- Teal: `#267C78`

Use a distinctive display face for headings and a highly readable sans-serif for interface text. Prioritize whitespace, restrained borders, polished photography, accessible contrast, consistent spacing, subtle motion, and reduced-motion support. Avoid excessive neon/glow effects and generic decorative cards.

## 8. Required routes

- `/` — homepage
- `/shop` — catalogue, search, filters, sorting, pagination
- `/products/:slug` — product detail and variants
- `/cart` — cart management
- `/checkout` — address, server-calculated totals, simulated checkout
- `/orders/:id` — order status and event timeline
- `/login`, `/register` — authentication screens
- `/account/orders` — authenticated customer order history
- `/admin` — protected operations dashboard

## 9. Business rules

- Server-calculated prices and totals; money represented as integer paise.
- Product purchase details are snapshotted onto the order.
- Inventory cannot go below zero.
- Duplicate order requests using the same idempotency key must not create duplicate orders or side effects.
- A payment timeout is potentially ambiguous and must be reconciled before repeating the side effect.
- Inventory reservation is compensated if payment definitively fails.
- A shipment/invoice/notification failure must not silently corrupt a successfully paid order.
- Shipment creation, dispatch, and delivery are separate states. They are simulated unless an actual carrier integration is implemented.
- Every meaningful state transition is recorded with timestamp and correlation identifiers.

## 10. Acceptance criteria

The project is not complete until:
- Storefront pages and critical interactions work at desktop/mobile sizes.
- Orders and inventory persist in DynamoDB.
- Concurrent purchases cannot oversell inventory.
- Duplicate submissions are idempotent.
- Step Functions execution is visible for a submitted order.
- Payment failure after reservation safely releases inventory.
- Messaging consumers handle duplicate delivery.
- Private invoices are not publicly accessible.
- Customer and admin authorization is enforced server-side.
- CloudWatch logs/metrics and useful alarms are configured.
- Deployment is reproducible from infrastructure as code.
- The team can demonstrate a success path and a controlled failure/recovery path.
- Test results and performance/cost claims are based on observed evidence.
