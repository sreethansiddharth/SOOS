# Architecture Decision Records

This document records the current decisions. The team should review and approve them before implementation. Revisit decisions only when a concrete constraint requires it.

## ADR-001: Serverless-first deployment
**Status:** Proposed  
**Decision:** Use API Gateway, Lambda, Step Functions, DynamoDB, SQS/SNS, and S3.  
**Reason:** Directly aligns with the project objective of managed infrastructure, event-driven orchestration, and scale with demand.  
**Trade-offs:** More distributed failure modes and IAM/configuration complexity than a monolith. Local debugging may require adapters and AWS integration tests.  
**Rejected alternative:** Always-on Express server on EC2, because it weakens the serverless demonstration.

## ADR-002: DynamoDB as the primary database
**Status:** Proposed  
**Decision:** Use DynamoDB only for the initial version.  
**Reason:** Native AWS integration, conditional writes for inventory, serverless operational model.  
**Trade-offs:** Access patterns and keys must be designed intentionally; arbitrary joins are not available.  
**Rejected alternatives:** RDS/Aurora adds relational setup and potentially baseline cost; MongoDB Atlas adds a separate provider. Reconsider only if a concrete relational requirement appears.

## ADR-003: Separate logical tables for clarity
**Status:** Proposed  
**Decision:** Start with separate tables for Products, Inventory, Orders, OrderItems (if needed), OrderEvents, IdempotencyKeys, and Payments.  
**Reason:** Easier for a student team and evaluator to inspect.  
**Trade-offs:** More tables and cross-table operations. A single-table design may be chosen if the team can document all access patterns and transaction boundaries.

## ADR-004: Step Functions owns orchestration
**Status:** Proposed  
**Decision:** API creates/reuses a durable order and starts a state machine; the browser receives a pending response.  
**Reason:** Workflow is visible, auditable, and independently retryable.  
**Trade-offs:** Workflow execution and task costs; asynchronous UI states are required.  
**Rejected alternative:** Synchronous checkout that performs all operations inside Express.

## ADR-005: Express-compatible Lambda API
**Status:** Proposed  
**Decision:** Keep Express-compatible route organization and deploy using a supported Lambda adapter or API Gateway integration.  
**Reason:** Meets the requested Node.js/Express stack without introducing an always-on server.  
**Trade-offs:** Adapter/runtime constraints and cold-start considerations. Avoid assuming a local Express server and deployed Lambda have identical lifecycle behavior.

## ADR-006: Simulated payment
**Status:** Proposed  
**Decision:** No real payment processing in the initial project.  
**Reason:** Safe, reproducible failure scenarios and no financial credentials or real transactions.  
**Trade-offs:** Does not demonstrate a real payment provider's settlement/reconciliation semantics; explain this limitation in the report.

## ADR-007: SQS/SNS used selectively
**Status:** Proposed  
**Decision:** Step Functions handles dependent workflow steps; SQS handles appropriate background jobs; SNS distributes events.  
**Reason:** Each AWS service has a clear responsibility.  
**Trade-offs:** Eventual consistency and duplicate delivery must be handled.

## ADR-008: SAM/CloudFormation for infrastructure
**Status:** Proposed  
**Decision:** Define cloud resources in AWS SAM and CloudFormation.  
**Reason:** Repeatable deployment, version-controlled infrastructure, and good fit for Lambda-centered applications.  
**Trade-offs:** CloudFormation syntax and AWS-specific templates.

## ADR-009: Amplify Hosting for the frontend
**Status:** Proposed  
**Decision:** Deploy the React/Vite application through GitHub-connected Amplify Hosting.  
**Reason:** Managed frontend builds, HTTPS and CDN-backed delivery.  
**Trade-offs:** Build configuration, SPA rewrites, and hosting configuration must be verified.

## ADR-010: Premium electronics storefront
**Status:** Proposed  
**Decision:** Use a premium electronics/desk-technology retail theme.  
**Reason:** Product variants, stock and realistic purchase journeys are easy to demonstrate visually.  
**Trade-offs:** Requires properly licensed product images and believable catalogue data.

## ADR-011: Money stored as integer paise
**Status:** Proposed  
**Decision:** Store currency amounts as integer paise.  
**Reason:** Avoid floating-point rounding errors and reflect INR.  
**Trade-offs:** API must clearly distinguish rupees shown to users from paise stored internally.

## ADR-012: Simulated shipment states
**Status:** Proposed  
**Decision:** Shipment-created, dispatched, and delivered events are simulated unless a real carrier integration is added.  
**Reason:** Keeps project reproducible and avoids false claims.  
**Trade-offs:** Does not represent actual carrier tracking.
