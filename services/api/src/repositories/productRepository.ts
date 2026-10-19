import { Product } from '../types/index.js';
import { config } from '../config/index.js';
import { ddbDocClient } from './dynamoClient.js';
import { GetCommand, ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

export const INITIAL_PRODUCTS: Product[] = [
  {
    productId: 'prod_headphones_001',
    slug: 'studio-wireless-pro-anc',
    name: 'Studio Wireless Pro ANC Headphones',
    subtitle: 'Reference-Grade Planar Audio with Hybrid Active Noise Cancellation',
    description: 'Custom 40mm beryllium diaphragm drivers deliver surgical transient accuracy.',
    category: 'audio',
    pricePaise: 899900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 128,
    inStock: true,
    specs: [{ label: 'Driver', value: '40mm Beryllium' }],
    highlights: ['Active Noise Cancellation', 'USB-C Lossless DAC'],
    active: true,
    createdAt: '2026-10-01T10:00:00Z',
    updatedAt: '2026-10-15T12:00:00Z',
  },
  {
    productId: 'prod_keyboard_002',
    slug: 'lumina-mechanical-keyboard-75',
    name: 'Lumina 75% Wireless Mechanical Keyboard',
    subtitle: 'Gasket-Mounted CNC Anodized Aluminum with Pre-lubed Linear Switches',
    description: 'Solid 6063 aerospace aluminum chassis with leaf-spring silicone gasket mounting.',
    category: 'keyboards',
    pricePaise: 1149900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    specs: [{ label: 'Layout', value: '75% Compact' }],
    highlights: ['Gasket Mount', 'QMK/VIA Support'],
    active: true,
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-15T12:00:00Z',
  },
  {
    productId: 'prod_mouse_003',
    slug: 'ultraglide-precision-mouse',
    name: 'UltraGlide Ergonomic Precision Mouse',
    subtitle: 'Electromagnetic SmartScroll with 26,000 DPI Optical Tracking Sensor',
    description: 'Sculpted ergonomic design with electromagnetic scroll wheel.',
    category: 'accessories',
    pricePaise: 549900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    reviewCount: 86,
    inStock: true,
    specs: [{ label: 'DPI', value: '26,000 DPI' }],
    highlights: ['MagSpeed Scroll', 'Darkfield Glass Tracking'],
    active: true,
    createdAt: '2026-10-03T10:00:00Z',
    updatedAt: '2026-10-15T12:00:00Z',
  },
  {
    productId: 'prod_lightbar_004',
    slug: 'horizon-4k-monitor-light-bar',
    name: 'Horizon 4K Monitor Optical Light Bar',
    subtitle: 'Asymmetric Eye-Care Illuminator with Wireless Desktop Controller',
    description: 'Asymmetric optical reflector illuminates desk without screen glare.',
    category: 'lighting',
    pricePaise: 399900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    specs: [{ label: 'CRI', value: 'Ra >= 97' }],
    highlights: ['Zero Glare', '2.4G Dial Controller'],
    active: true,
    createdAt: '2026-10-04T10:00:00Z',
    updatedAt: '2026-10-15T12:00:00Z',
  },
  {
    productId: 'prod_charger_005',
    slug: 'magstand-wireless-charging-station',
    name: 'MagStand 3-in-1 Fast Wireless Station',
    subtitle: 'Floating Magnetic Qi2 15W Fast-Charging for Phone, Watch, & Earbuds',
    description: 'Machined aluminum charging station with Qi2 fast charging.',
    category: 'charging',
    pricePaise: 429900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1622445262464-84b14e0745b1?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    reviewCount: 42,
    inStock: false,
    specs: [{ label: 'Standard', value: 'Qi2 15W' }],
    highlights: ['3-in-1 Charging', 'Heavy Base'],
    active: true,
    createdAt: '2026-10-05T10:00:00Z',
    updatedAt: '2026-10-15T12:00:00Z',
  },
];

const inMemoryProducts: Map<string, Product> = new Map(
  INITIAL_PRODUCTS.map((p) => [p.productId, { ...p }])
);

export const productRepository = {
  async getById(productId: string): Promise<Product | null> {
    if (config.useInMemoryDdb) {
      const p = inMemoryProducts.get(productId);
      return p ? { ...p } : null;
    }

    const res = await ddbDocClient.send(
      new GetCommand({
        TableName: config.productsTable,
        Key: { productId },
      })
    );

    return (res.Item as Product) || null;
  },

  async list(category?: string, query?: string): Promise<Product[]> {
    let items: Product[] = [];

    if (config.useInMemoryDdb) {
      items = Array.from(inMemoryProducts.values()).filter((p) => p.active);
    } else {
      const res = await ddbDocClient.send(
        new ScanCommand({
          TableName: config.productsTable,
          FilterExpression: '#act = :act',
          ExpressionAttributeNames: { '#act': 'active' },
          ExpressionAttributeValues: { ':act': true },
        })
      );
      items = (res.Items as Product[]) || [];
    }

    if (category && category !== 'all') {
      items = items.filter((p) => p.category === category);
    }

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return items;
  },

  async create(product: Product): Promise<void> {
    if (config.useInMemoryDdb) {
      inMemoryProducts.set(product.productId, { ...product });
      return;
    }

    await ddbDocClient.send(
      new PutCommand({
        TableName: config.productsTable,
        Item: product,
      })
    );
  },

  _reset() {
    inMemoryProducts.clear();
    for (const p of INITIAL_PRODUCTS) {
      inMemoryProducts.set(p.productId, { ...p });
    }
  },
};
