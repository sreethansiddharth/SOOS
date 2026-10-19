import type { Product, Category } from '../types';
import { CATEGORIES } from '../data/mockProducts';

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:3000/api/v1';

export interface GetProductsParams {
  category?: string;
  q?: string;
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  inStockOnly?: boolean;
}

export const productService = {
  /**
   * Fetches products directly from AWS DynamoDB via backend API.
   * Throws real errors if AWS DynamoDB or API is unreachable.
   */
  async getProducts(params?: GetProductsParams): Promise<Product[]> {
    const queryParams = new URLSearchParams();
    if (params?.category && params.category !== 'all') queryParams.set('category', params.category);
    if (params?.q) queryParams.set('q', params.q);

    let res: Response;
    try {
      res = await fetch(`${API_BASE}/products?${queryParams.toString()}`, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (networkErr: unknown) {
      throw new Error(
        `Backend Connection Failed: Unable to reach API server at ${API_BASE}. Ensure backend is running and AWS DynamoDB tables are configured.`
      );
    }

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      const errCode = data?.error?.code ? `[${data.error.code}] ` : '';
      const errMsg = data?.error?.message || `Failed to fetch products (HTTP ${res.status})`;
      throw new Error(`${errCode}${errMsg}`);
    }

    let items: Product[] = data?.items || [];

    if (params?.inStockOnly) {
      items = items.filter((p) => p.availableStock > 0 || (p as any).inStock);
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
      }
    }

    return items;
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    const list = await this.getProducts();
    const found = list.find((p) => p.slug === slug && p.active);
    return found ? { ...found } : null;
  },

  async getProductById(id: string): Promise<Product | null> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/products/${id}`);
    } catch {
      throw new Error(`Failed to reach backend API to fetch product ${id}.`);
    }

    if (res.status === 404) {
      return null;
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const errCode = data?.error?.code ? `[${data.error.code}] ` : '';
      const errMsg = data?.error?.message || `Failed to fetch product (HTTP ${res.status})`;
      throw new Error(`${errCode}${errMsg}`);
    }

    return data?.product || null;
  },

  async getCategories(): Promise<Category[]> {
    try {
      const res = await fetch(`${API_BASE}/categories`);
      if (res.ok) {
        const data = await res.json();
        if (data.categories) {
          return data.categories.map((c: any) => ({
            ...c,
            itemCount: 2,
            imageUrl: CATEGORIES.find((cat) => cat.slug === c.slug)?.imageUrl || '',
          }));
        }
      }
    } catch {
      // Return predefined category taxonomy
    }

    return [...CATEGORIES];
  },

  async updateInventory(productId: string, available: number, reason: string): Promise<void> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/admin/inventory/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'admin',
        },
        body: JSON.stringify({ available, reason }),
      });
    } catch {
      throw new Error(`Failed to reach backend API to update inventory for ${productId}.`);
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error?.message || `Failed to update inventory (HTTP ${res.status})`);
    }
  },

  async seedCatalog(): Promise<void> {
    let res: Response;
    try {
      res = await fetch(`${API_BASE}/admin/seed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': 'admin',
        },
      });
    } catch {
      throw new Error(`Failed to reach backend API at ${API_BASE} to seed catalogue.`);
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error?.message || `Failed to seed DynamoDB (HTTP ${res.status})`);
    }
  },
};
