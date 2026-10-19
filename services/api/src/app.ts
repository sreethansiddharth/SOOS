import express from 'express';
import cors from 'cors';
import { requestIdMiddleware } from './middleware/requestId.js';
import { errorHandler } from './middleware/errorHandler.js';
import { productsRouter } from './routes/products.js';
import { ordersRouter } from './routes/orders.js';
import { adminRouter } from './routes/admin.js';

export const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(requestIdMiddleware);

// Health Check
app.get('/health', (req, res) => {
  res.json({
    status: 'HEALTHY',
    service: 'aether-order-orchestration-api',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/v1', productsRouter);
app.use('/api/v1', ordersRouter);
app.use('/api/v1/admin', adminRouter);

// Standardized 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: {
      code: 'ROUTE_NOT_FOUND',
      message: `Cannot ${req.method} ${req.originalUrl}`,
      requestId: (req as { requestId?: string }).requestId || 'req_unknown',
      details: [],
    },
  });
});

// Structured Global Error Handler
app.use(errorHandler);
