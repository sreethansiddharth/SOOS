import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details: unknown[] = []
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  const requestId = req.requestId || 'req_unknown';

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        requestId,
        details: err.details,
      },
    });
  }

  // Specific handling for AWS SDK failures when AWS services are unintegrated or unreachable
  const errName = err.name || '';
  const errMsg = err.message || '';

  if (
    errName === 'CredentialsProviderError' ||
    errMsg.includes('Could not load credentials') ||
    errMsg.includes('credentials')
  ) {
    console.error(`[${requestId}] AWS Credentials Missing:`, errMsg);
    return res.status(503).json({
      error: {
        code: 'AWS_CREDENTIALS_MISSING',
        message: 'AWS credentials not configured on host. Integration with AWS DynamoDB and Step Functions requires valid AWS credentials.',
        requestId,
        details: [errMsg],
      },
    });
  }

  if (
    errName === 'ResourceNotFoundException' ||
    errMsg.includes('Cannot do operations on a non-existent table') ||
    errMsg.includes('ResourceNotFoundException')
  ) {
    console.error(`[${requestId}] AWS Resource Not Found:`, errMsg);
    return res.status(503).json({
      error: {
        code: 'AWS_RESOURCE_NOT_FOUND',
        message: 'AWS DynamoDB table or resource not found. Ensure SAM template resources have been deployed to AWS.',
        requestId,
        details: [errMsg],
      },
    });
  }

  if (
    errName === 'StateMachineDoesNotExist' ||
    errName === 'ExecutionLimitExceeded' ||
    errMsg.includes('stateMachine')
  ) {
    console.error(`[${requestId}] AWS Step Functions Error:`, errMsg);
    return res.status(503).json({
      error: {
        code: 'AWS_STEP_FUNCTIONS_UNAVAILABLE',
        message: `AWS Step Functions state machine is not reachable or not deployed: ${errMsg}`,
        requestId,
        details: [errMsg],
      },
    });
  }

  if (
    errName === 'AccessDeniedException' ||
    errName === 'UnrecognizedClientException'
  ) {
    console.error(`[${requestId}] AWS Access Denied:`, errMsg);
    return res.status(403).json({
      error: {
        code: 'AWS_ACCESS_DENIED',
        message: `AWS authorization failure: ${errMsg}`,
        requestId,
        details: [errMsg],
      },
    });
  }

  // Fallback for unhandled internal errors: safe, generic message
  console.error(`[${requestId}] Unhandled Error:`, err);

  return res.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message || 'An unexpected internal error occurred. Please try again.',
      requestId,
      details: [],
    },
  });
}
