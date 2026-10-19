import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

declare global {
  namespace Express {
    interface Request {
      requestId?: string;
      correlationId?: string;
      user?: {
        userId: string;
        role: 'customer' | 'admin';
        email: string;
      };
    }
  }
}

export function requestIdMiddleware(req: Request, res: Response, next: NextFunction) {
  const reqId = (req.headers['x-request-id'] as string) || `req_${crypto.randomUUID()}`;
  const corrId = (req.headers['x-correlation-id'] as string) || `corr_${crypto.randomUUID()}`;

  req.requestId = reqId;
  req.correlationId = corrId;

  res.setHeader('X-Request-Id', reqId);
  res.setHeader('X-Correlation-Id', corrId);

  next();
}
