import type { Product, Category } from '../types';
import { INITIAL_PRODUCTS, CATEGORIES } from '../data/mockProducts';

// In-memory persistent state across navigation & fallback
let productsState: Product[] = [...INITIAL_PRODUCTS];

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:3000/api/v1';
const USE_MOCKS = (import.meta as any).env?.VITE_USE_MOCKS === 'true';

export interface GetProductsParams {
  category?: string;
  q?: string;
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  inStockOnly?: boolean;
}

export const productService = {
  async getProducts(params?: GetProductsParams): Promise<Product[]> {
    if (!USE_MOCKS) {
      try {
        const queryParams = new URLSearchParams();
        if (params?.category && params.category !== 'all') queryParams.set('category', params.category);
        if (params?.q) queryParams.set('q', params.q);

        const res = await fetch(`${API_BASE}/products?${queryParams.toString()}`, {
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          let items: Product[] = data.items || [];

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
        }
      } catch {
        // Fall back to in-memory catalogue if backend is unreachable
      }
    }

    // In-memory local fallback
    await new Promise((r) => setTimeout(r, 120));

    let filtered = productsState.filter((p) => p.active);

    if (params?.category && params.category !== 'all') {
      filtered = filtered.filter((p) => p.category === params.category);
    }

    if (params?.q && params.q.trim()) {
      const query = params.q.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    if (params?.inStockOnly) {
      filtered = filtered.filter((p) => p.availableStock > 0);
    }

    if (params?.sort) {
      switch (params.sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.pricePaise - b.pricePaise);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.pricePaise - a.pricePaise);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }

    return filtered;
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    const list = await this.getProducts();
    const found = list.find((p) => p.slug === slug && p.active);
    return found ? { ...found } : null;
  },

  async getProductById(id: string): Promise<Product | null> {
    if (!USE_MOCKS) {
      try {
        const res = await fetch(`${API_BASE}/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          return data.product || null;
        }
      } catch {
        // Fall back to local state
      }
    }

    await new Promise((r) => setTimeout(r, 80));
    const product = productsState.find((p) => p.productId === id);
    return product ? { ...product } : null;
  },

  async getCategories(): Promise<Category[]> {
    if (!USE_MOCKS) {
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
        // Fallback
      }
    }

    await new Promise((r) => setTimeout(r, 60));
    return [...CATEGORIES];
  },

  _updateProductStock(productId: string, newAvailable: number, newReserved: number = 0) {
    const idx = productsState.findIndex((p) => p.productId === productId);
    if (idx !== -1) {
      productsState[idx] = {
        ...productsState[idx],
        availableStock: Math.max(0, newAvailable),
        reservedStock: Math.max(0, newReserved),
        inStock: newAvailable > 0,
      };
    }
  },

  _getInternalState(): Product[] {
    return productsState;
  },

  _resetProducts() {
    productsState = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  },
};
