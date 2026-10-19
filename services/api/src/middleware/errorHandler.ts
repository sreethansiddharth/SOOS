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

  // Fallback for unhandled internal errors: safe, generic message
  console.error(`[${requestId}] Unhandled Error:`, err);

  return res.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected internal error occurred. Please try again.',
      requestId,
      details: [],
    },
  });
}
