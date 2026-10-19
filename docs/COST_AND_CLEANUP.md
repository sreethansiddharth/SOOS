# Cost, Budget, and Cleanup Plan

## 1. Cost philosophy

A serverless architecture can reduce idle compute costs, but it is not automatically free. Charges may arise from API requests, Lambda duration, Step Functions state transitions/executions, DynamoDB reads/writes/storage, SQS/SNS requests, S3 storage/requests/data transfer, CloudWatch logs/metrics/alarms, tracing, frontend hosting/build minutes, and any optional security/network services.

All prices and free-tier conditions change. Verify current pricing for the chosen Region and account in the AWS Pricing Calculator and service pricing pages before deployment. Do not put an unverified fixed cost in the report.

## 2. Cost controls before first deployment

- Create an AWS Budget and billing alerts.
- Choose a Region and record why.
- Use synthetic, small test data.
- Use DynamoDB on-demand capacity for an unpredictable small demo only after checking the current price/eligibility.
- Keep Lambda memory/timeouts appropriate; measure rather than guess.
- Set CloudWatch log retention.
- Avoid NAT gateways unless genuinely required.
- Avoid always-on EC2/RDS resources for this serverless-first project.
- Bound retries and timeouts.
- Limit load tests and stop them deliberately.
- Avoid unnecessary X-Ray sampling and expensive metrics.
- Use lifecycle/retention policies only where their effects are understood.
- Keep private invoice storage small and remove disposable test files.

## 3. Cost report format

Record:
- AWS Region and date checked.
- Account/free-tier assumptions.
- Expected demo orders and workflow executions.
- Estimated API requests, Lambda invocations/duration, database operations, queue messages, stored data, logs, and build minutes.
- Pricing Calculator inputs and output.
- Actual bill/Cost Explorer observations after test.
- Excluded items and uncertainty.

Never claim “zero cost” or “near-zero cost” without qualifying assumptions and current pricing evidence.

## 4. Operational limits

- Use bounded retry counts and backoff.
- Set Lambda timeouts and concurrency controls thoughtfully.
- Set API throttling.
- Keep fault-injection scenarios bounded.
- Do not run unbounded loops or high-volume load tests.
- Set DLQ alarms and queue-age alerts.
- Set a log-retention period appropriate for the project.

## 5. Cleanup runbook

Before cleanup:
1. Save screenshots, test reports, architecture diagrams, and relevant execution identifiers.
2. Export any data required for the report using an approved safe method.
3. Stop load tests and disable fault injection.
4. Verify the demo is no longer needed.

Cleanup:
1. Delete disposable CloudFormation/SAM stacks only after reviewing retained resources.
2. Empty disposable S3 buckets where appropriate, then remove them.
3. Remove test queues, DLQs, topics, and state-machine resources if not managed by the deleted stack.
4. Remove test data or tables only when safe and documented.
5. Delete unneeded log groups/alarms/dashboards if they are not stack-managed.
6. Disconnect or disable unused build resources if relevant.
7. Check the AWS console for orphaned resources.
8. Review billing/Cost Explorer after a suitable reporting delay.

Do not delete the live demo before evaluation if the team needs it. Document which resources remain and why.
