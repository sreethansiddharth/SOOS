import { Product } from '../types/index.js';
import { config } from '../config/index.js';
import { ddbDocClient } from './dynamoClient.js';
import { GetCommand, ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

export const INITIAL_PRODUCTS: Product[] = [
  {
    productId: 'prod_iphone_15_pro',
    slug: 'apple-iphone-15-pro-max-256gb',
    name: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
    subtitle: 'A17 Pro Chip, 6.7" Super Retina XDR, 5X Telephoto Optical Zoom',
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and 5x optical telephoto zoom.',
    category: 'smartphones',
    pricePaise: 14890000,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 2450,
    inStock: true,
    specs: [
      { label: 'Display', value: '6.7-inch Super Retina XDR OLED (120Hz ProMotion)' },
      { label: 'Processor', value: 'Apple A17 Pro (3nm architecture)' },
      { label: 'Storage', value: '256 GB NVMe' },
    ],
    highlights: ['Titanium Frame', 'A17 Pro Gaming Chip', '5x Telephoto Camera', 'Action Button'],
    active: true,
    createdAt: '2026-10-01T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
  {
    productId: 'prod_sony_wh1000xm5',
    slug: 'sony-wh-1000xm5-wireless-anc-headphones',
    name: 'Sony WH-1000XM5 Wireless Industry-Leading Noise Cancelling Headphones',
    subtitle: 'Auto NC Optimizer, 30-Hour Battery, Crystal Clear Hands-Free Calling',
    description: 'Two processors and 8 microphones for unprecedented noise cancellation.',
    category: 'audio',
    pricePaise: 2899000,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 3890,
    inStock: true,
    specs: [
      { label: 'Driver', value: '30mm Carbon Fiber Composite' },
      { label: 'Battery Life', value: '30 hours (ANC ON)' },
    ],
    highlights: ['Industry-Leading ANC', '30-Hour Battery', 'Hi-Res Audio Wireless', 'Multipoint Bluetooth'],
    active: true,
    createdAt: '2026-10-01T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
  {
    productId: 'prod_macbook_air_m3',
    slug: 'apple-macbook-air-15-m3-chip-midnight',
    name: 'Apple 2024 MacBook Air 15" Laptop with M3 chip (16GB RAM, 512GB SSD)',
    subtitle: 'Liquid Retina Display, 1080p FaceTime HD Camera, 18hr Battery',
    description: 'Lean, mean M3 machine. With a superportable design and up to 18 hours of battery life.',
    category: 'laptops',
    pricePaise: 13490000,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 1240,
    inStock: true,
    specs: [
      { label: 'Processor', value: 'Apple M3 Chip (8-core CPU, 10-core GPU)' },
      { label: 'Memory', value: '16GB Unified High-Bandwidth RAM' },
    ],
    highlights: ['Apple Silicon M3', '15.3" Liquid Retina', 'Silent Fanless Design', '18hr Battery'],
    active: true,
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
  {
    productId: 'prod_samsung_s24_ultra',
    slug: 'samsung-galaxy-s24-ultra-5g-titanium',
    name: 'Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)',
    subtitle: 'Galaxy AI Enabled, Built-in S Pen, 200MP Camera, Snapdragon 8 Gen 3',
    description: 'Welcome to the era of mobile AI with Galaxy S24 Ultra.',
    category: 'smartphones',
    pricePaise: 11999900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 1820,
    inStock: true,
    specs: [
      { label: 'Display', value: '6.8-inch Dynamic AMOLED 2X (2600 nits, 120Hz)' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
    ],
    highlights: ['Galaxy AI Onboard', '200MP ProVisual Camera', 'Titanium Shield', 'Flat 2600-nit Screen'],
    active: true,
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
  {
    productId: 'prod_sony_ps5_slim',
    slug: 'sony-playstation-5-slim-console-1tb',
    name: 'Sony PlayStation 5 Slim Console (1TB SSD, DualSense Wireless Controller)',
    subtitle: 'Lightning-Fast Custom SSD, Tempest 3D AudioTech, Ray Tracing 4K 120fps',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion with haptic feedback.',
    category: 'gaming',
    pricePaise: 4499000,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 5210,
    inStock: true,
    specs: [{ label: 'Storage', value: '1TB Custom NVMe SSD (5.5GB/s Raw)' }],
    highlights: ['1TB Ultra-Fast SSD', 'Ray Tracing Graphics', 'DualSense Haptic Feedback', 'Slim Chassis'],
    active: true,
    createdAt: '2026-10-03T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
  {
    productId: 'prod_keychron_q1_pro',
    slug: 'keychron-q1-pro-wireless-custom-keyboard',
    name: 'Keychron Q1 Pro QMK/VIA Wireless Custom Mechanical Keyboard',
    subtitle: 'Full CNC Aluminum Chassis, Double-Gasket Design, Hot-Swappable Switches',
    description: 'A revolutionary full metal wireless custom mechanical keyboard.',
    category: 'keyboards',
    pricePaise: 1849900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 890,
    inStock: true,
    specs: [{ label: 'Layout', value: '75% Compact with CNC Metal Knob' }],
    highlights: ['Full Aluminum Body', 'Double-Gasket Cushioning', 'Bluetooth 5.1 & Type-C', 'Hot-Swappable'],
    active: true,
    createdAt: '2026-10-03T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
  {
    productId: 'prod_logitech_mx_master_3s',
    slug: 'logitech-mx-master-3s-performance-mouse',
    name: 'Logitech MX Master 3S Wireless Performance Mouse (Pale Grey)',
    subtitle: 'Quiet Clicks, 8K DPI Any-Surface Sensor, MagSpeed Electromagnetic Scroll',
    description: 'An icon remastered with 8,000 DPI track-on-glass sensor.',
    category: 'accessories',
    pricePaise: 899500,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviewCount: 4120,
    inStock: true,
    specs: [{ label: 'Sensor', value: 'Darkfield High Precision (200 - 8000 DPI)' }],
    highlights: ['8K DPI Glass Tracking', 'Quiet Click Acoustics', 'MagSpeed Wheel', 'Cross-Computer Flow'],
    active: true,
    createdAt: '2026-10-04T10:00:00Z',
    updatedAt: '2026-10-19T12:00:00Z',
  },
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
    productId: 'prod_lightbar_004',
    slug: 'horizon-4k-monitor-optical-light-bar',
    name: 'Horizon 4K Monitor Optical Light Bar',
    subtitle: 'Asymmetric Optical Geometry with Wireless Rotary Desktop Dial',
    description: 'Engineered with 45-degree asymmetric forward-throw optics.',
    category: 'lighting',
    pricePaise: 399900,
    currency: 'INR',
    imageUrl: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    reviewCount: 52,
    inStock: true,
    specs: [{ label: 'Optical Path', value: '45-Degree Asymmetric' }],
    highlights: ['Zero Screen Reflection', 'Rotary Desktop Dial'],
    active: true,
    createdAt: '2026-10-04T10:00:00Z',
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
