# Deployment Plan

## 1. Deployment topology

- Frontend: AWS Amplify Hosting connected to GitHub.
- API: Amazon API Gateway.
- API handler: Node.js Lambda with Express-compatible routing/adapter if used.
- Orchestration: AWS Step Functions.
- Storage: DynamoDB and S3.
- Messaging: SQS, DLQ, SNS.
- Monitoring: CloudWatch and tracing where supported.
- Infrastructure: AWS SAM/CloudFormation.

## 2. Prerequisites

- AWS account with appropriate permissions and MFA.
- AWS CLI configured with a named profile or secure role-based access.
- Node.js LTS runtime supported by selected Lambda runtime; verify current AWS support before deployment.
- npm.
- AWS SAM CLI.
- Git and GitHub repository.
- Billing alert/Budget configured.
- Chosen AWS Region documented.
- No credentials committed to the repository.

## 3. Suggested repository structure

```text
serverless-order-orchestration/
├── apps/
│   └── web/
├── services/
│   ├── api/
│   ├── inventory/
│   ├── payment-simulator/
│   ├── confirmation/
│   ├── shipment/
│   └── background-worker/
├── infrastructure/
│   ├── template.yaml
│   └── statemachine/
├── docs/
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── concurrency/
│   └── e2e/
├── scripts/
├── .env.example
├── .gitignore
└── README.md
```

The final structure may differ, but keep boundaries understandable and document the choice.

## 4. Local development sequence

1. Install dependencies in each app/service.
2. Run frontend with mock data only when `VITE_USE_MOCKS=true` is explicitly set.
3. Run unit tests and lint/type checks.
4. Use a repository abstraction or DynamoDB Local for local database development if useful.
5. Validate the SAM template and state-machine definition.
6. Use AWS integration tests in a dedicated development stack for service behavior that cannot be faithfully mocked.

## 5. AWS deployment sequence

1. Confirm budget and Region.
2. Review IAM permissions and resource names.
3. Run tests and static checks.
4. Validate/build SAM template.
5. Deploy the backend stack to `dev`.
6. Inspect stack outputs and actual deployed resources.
7. Seed a small synthetic catalogue.
8. Test product API, order submission, workflow, failure branch, and authorization.
9. Configure frontend environment variables for the deployed API URL.
10. Connect GitHub to Amplify Hosting and configure the build command/output directory for the Vite app.
11. Configure SPA rewrites so routes such as `/orders/:id` load correctly.
12. Test HTTPS, CORS, API auth, private invoices, and refresh behavior.
13. Configure CloudWatch dashboards/alarms and log retention.
14. Run end-to-end demo tests.
15. Record actual resource IDs/URLs in a local deployment record, not in source code as hardcoded assumptions.

## 6. Environment variables

Use `.env.example` with placeholders only. Suggested frontend variables:
- `VITE_API_BASE_URL`
- `VITE_USE_MOCKS` (default false in deployed environment)

Suggested backend configuration:
- `AWS_REGION`
- `PRODUCTS_TABLE`
- `INVENTORY_TABLE`
- `ORDERS_TABLE`
- `ORDER_EVENTS_TABLE`
- `IDEMPOTENCY_TABLE`
- `PAYMENTS_TABLE`
- `ORDER_STATE_MACHINE_ARN`
- `ORDER_EVENTS_TOPIC_ARN`
- `BACKGROUND_QUEUE_URL`
- `INVOICE_BUCKET`
- `ALLOWED_ORIGIN`
- `LOG_LEVEL`
- `FAULT_INJECTION_ENABLED` (false by default)
- authentication issuer/audience settings as required by the chosen identity design

Where possible, use CloudFormation references and environment-specific parameters rather than manually copying ARNs. Never expose backend variables to the browser. Only intentionally public `VITE_` values are bundled into frontend code.

## 7. CI/CD recommendations

At minimum, on pull requests:
- install dependencies using lockfiles
- lint/typecheck
- run unit tests
- build frontend
- validate SAM template
- run security/dependency checks appropriate to scope

Deployment should be a deliberate action to the correct environment. Do not deploy production/demo stacks from every arbitrary branch.

## 8. Rollback and cleanup

- Use CloudFormation stack updates and review changes before applying.
- Document recovery if a deployment update fails.
- Before deleting a stack, inspect retained data and resources.
- Remove temporary load-test resources, unused log groups, queues, buckets, and test stacks where safe.
- S3 buckets containing objects may need explicit emptying before stack deletion.
- Do not delete useful evidence before the evaluation.
- Confirm resources are actually removed and check billing after cleanup.

## 9. Deployment acceptance

- New team member can follow README.
- Infrastructure is provisioned from code.
- Backend API returns expected responses.
- Workflow execution can be inspected.
- Frontend works with deployed API.
- SPA refresh works.
- No secret appears in source, build output, or browser network payloads.
- Cleanup procedure has been tested in a disposable environment.
