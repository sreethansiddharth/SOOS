import { Router, Request, Response, NextFunction } from 'express';
import { orderService } from '../services/orderService.js';
import { orderRepository } from '../repositories/orderRepository.js';
import { orderEventsRepository } from '../repositories/orderEventsRepository.js';
import { authMiddleware } from '../middleware/auth.js';
import { AppError } from '../middleware/errorHandler.js';

export const ordersRouter = Router();

ordersRouter.use(authMiddleware);

// POST /api/v1/orders
ordersRouter.post('/orders', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idempotencyKey = req.headers['idempotency-key'] as string;
    const customerId = req.user?.userId || 'cust_demo_882';
    const correlationId = req.correlationId || `corr_${Date.now()}`;

    const result = await orderService.submitOrder(
      req.body,
      idempotencyKey,
      customerId,
      correlationId
    );

    res.status(202).json(result);
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/orders/:id
ordersRouter.get('/orders/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const order = await orderRepository.getById(id);

    if (!order) {
      return next(new AppError(404, 'ORDER_NOT_FOUND', `Order ${id} does not exist.`));
    }

    if (req.user?.role !== 'admin' && order.customerId !== req.user?.userId) {
      return next(
        new AppError(403, 'FORBIDDEN', 'Access denied: You do not own this order record.')
      );
    }

    res.json({ order });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/orders/:id/events
ordersRouter.get('/orders/:id/events', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const order = await orderRepository.getById(id);

    if (!order) {
      return next(new AppError(404, 'ORDER_NOT_FOUND', `Order ${id} does not exist.`));
    }

    if (req.user?.role !== 'admin' && order.customerId !== req.user?.userId) {
      return next(
        new AppError(403, 'FORBIDDEN', 'Access denied: You do not own this order.')
      );
    }

    const events = await orderEventsRepository.listByOrderId(id);
    res.json({ orderId: id, events, count: events.length });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/me/orders
ordersRouter.get('/me/orders', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customerId = req.user?.userId || 'cust_demo_882';
    const orders = await orderRepository.listByCustomer(customerId);

    res.json({ orders, count: orders.length });
  } catch (err) {
    next(err);
  }
});
