import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler.js';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const roleHeader = req.headers['x-user-role'] as string;
  const userIdHeader = req.headers['x-user-id'] as string;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    if (token === 'admin-token') {
      req.user = { userId: 'admin_sys_001', role: 'admin', email: 'admin@aether-demo.com' };
      return next();
    }
  }

  if (roleHeader === 'admin') {
    req.user = { userId: userIdHeader || 'admin_sys_001', role: 'admin', email: 'admin@aether-demo.com' };
    return next();
  }

  // Default to authenticated customer context
  req.user = {
    userId: userIdHeader || 'cust_demo_882',
    role: 'customer',
    email: 'customer@aether-demo.com',
  };

  next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'admin') {
    return next(
      new AppError(
        403,
        'FORBIDDEN',
        'Administrator authorization required for this resource.'
      )
    );
  }
  next();
}
