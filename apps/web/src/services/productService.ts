import type { Product, Category } from '../types';
import { INITIAL_PRODUCTS, CATEGORIES } from '../data/mockProducts';

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:3000/api/v1';

export interface GetProductsParams {
  category?: string;
  q?: string;
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  inStockOnly?: boolean;
  dealsOnly?: boolean;
}

export const productService = {
  /**
   * Retrieves products with real-time backend synchronization.
   * If AWS backend is offline or pending deployment, seamlessly serves the rich 16-product catalog.
   */
  async getProducts(params?: GetProductsParams): Promise<Product[]> {
    let items: Product[] = [...INITIAL_PRODUCTS];

    try {
      const queryParams = new URLSearchParams();
      if (params?.category && params.category !== 'all') queryParams.set('category', params.category);
      if (params?.q) queryParams.set('q', params.q);

      const res = await fetch(`${API_BASE}/products?${queryParams.toString()}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.items && Array.isArray(data.items) && data.items.length > 0) {
          items = data.items;
        }
      }
    } catch {
      // Offline / Pending AWS account setup: fallback to 16 flagship products
    }

    if (params?.category && params.category !== 'all') {
      items = items.filter((p) => p.category === params.category);
    }

    if (params?.q && params.q.trim()) {
      const query = params.q.toLowerCase().trim();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          (p.brand && p.brand.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query)
      );
    }

    if (params?.inStockOnly) {
      items = items.filter((p) => p.availableStock > 0);
    }

    if (params?.dealsOnly) {
      items = items.filter((p) => p.isDealOfTheDay || (p.discountPercent && p.discountPercent > 10));
    }

    if (params?.sort) {
      switch (params.sort) {
        case 'price-asc':
          items.sort((a, b) => a.pricePaise - b.pricePaise);
          break;
        case 'price-desc':
          items.sort((a, b) => b.pricePaise - a.pricePaise);
          break;
        case 'rating':
          items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        default:
          break;
      }
    }

    return items;
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    const list = await this.getProducts();
    const found = list.find((p) => p.slug === slug);
    return found || null;
  },

  async getProductById(id: string): Promise<Product | null> {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.product) return data.product;
      }
    } catch {
      // Local fallback
    }

    const found = INITIAL_PRODUCTS.find((p) => p.productId === id);
    return found || null;
  },

  async getCategories(): Promise<Category[]> {
    return [...CATEGORIES];
  },

  async updateInventory(productId: string, available: number, reason: string): Promise<void> {
    try {
      await fetch(`${API_BASE}/admin/inventory/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'admin',
        },
        body: JSON.stringify({ available, reason }),
      });
    } catch {
      // update local
    }
    const idx = INITIAL_PRODUCTS.findIndex((p) => p.productId === productId);
    if (idx !== -1) {
      INITIAL_PRODUCTS[idx].availableStock = available;
      INITIAL_PRODUCTS[idx].inStock = available > 0;
    }
  },

  async seedCatalog(): Promise<void> {
    try {
      await fetch(`${API_BASE}/admin/seed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'admin',
        },
      });
    } catch {
      // No-op if offline
    }
  },
};
