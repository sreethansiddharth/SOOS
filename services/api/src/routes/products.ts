import { Router, Request, Response, NextFunction } from 'express';
import { productRepository } from '../repositories/productRepository.js';
import { AppError } from '../middleware/errorHandler.js';

export const productsRouter = Router();

const CATEGORIES = [
  { id: 'cat_audio', name: 'Acoustics & Audio', slug: 'audio' },
  { id: 'cat_keyboards', name: 'Mechanical Keyboards', slug: 'keyboards' },
  { id: 'cat_accessories', name: 'Precision Peripherals', slug: 'accessories' },
  { id: 'cat_lighting', name: 'Workspace Lighting', slug: 'lighting' },
  { id: 'cat_charging', name: 'Power & Charging', slug: 'charging' },
  { id: 'cat_desk_setup', name: 'Desk Architecture', slug: 'desk-setup' },
];

// GET /api/v1/categories
productsRouter.get('/categories', (req: Request, res: Response) => {
  res.json({ categories: CATEGORIES });
});

// GET /api/v1/products
productsRouter.get('/products', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = typeof req.query.category === 'string' ? req.query.category : undefined;
    const q = typeof req.query.q === 'string' ? req.query.q : undefined;

    const items = await productRepository.list(category, q);

    res.json({
      items,
      count: items.length,
      nextCursor: null,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/products/:id
productsRouter.get('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const product = await productRepository.getById(id);

    if (!product || !product.active) {
      return next(new AppError(404, 'PRODUCT_NOT_FOUND', `Product ${id} not found.`));
    }

    res.json({ product });
  } catch (err) {
    next(err);
  }
});
