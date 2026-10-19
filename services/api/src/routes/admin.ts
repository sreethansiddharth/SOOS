import { Router, Request, Response, NextFunction } from 'express';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';
import { orderRepository } from '../repositories/orderRepository.js';
import { inventoryRepository, INITIAL_INVENTORY } from '../repositories/inventoryRepository.js';
import { productRepository, INITIAL_PRODUCTS } from '../repositories/productRepository.js';
import { AppError } from '../middleware/errorHandler.js';

export const adminRouter = Router();

adminRouter.use(authMiddleware);
adminRouter.use(requireAdmin);

// GET /api/v1/admin/orders
adminRouter.get('/orders', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderRepository.listAll();
    res.json({ orders, count: orders.length });
  } catch (err) {
    next(err);
  }
});

// Update inventory handler for both PUT and PATCH
const updateInventoryHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const { available, reason } = req.body;

    if (typeof available !== 'number' || available < 0) {
      return next(new AppError(400, 'INVALID_STOCK', 'Available stock must be a non-negative number.'));
    }

    await inventoryRepository.setStock(id, available);

    res.json({
      success: true,
      productId: id,
      newAvailable: available,
      auditReason: reason || 'Manual admin stock adjustment',
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
};

adminRouter.patch('/inventory/:id', updateInventoryHandler);
adminRouter.put('/inventory/:id', updateInventoryHandler);

// POST /api/v1/admin/products
adminRouter.post('/products', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = req.body;
    if (!product.productId || !product.name || typeof product.pricePaise !== 'number') {
      return next(new AppError(400, 'INVALID_PRODUCT', 'Missing required product attributes.'));
    }

    await productRepository.create({
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    res.status(201).json({ product });
  } catch (err) {
    next(err);
  }
});

// POST /api/v1/admin/seed - Seeds DynamoDB tables with initial catalogue and inventory
adminRouter.post('/seed', async (req: Request, res: Response, next: NextFunction) => {
  try {
    for (const p of INITIAL_PRODUCTS) {
      await productRepository.create(p);
    }
    for (const [productId, inv] of Object.entries(INITIAL_INVENTORY)) {
      await inventoryRepository.setStock(productId, inv.available);
    }
    res.json({
      success: true,
      message: 'Successfully seeded catalogue and inventory into AWS DynamoDB.',
      productCount: INITIAL_PRODUCTS.length,
    });
  } catch (err) {
    next(err);
  }
});
