import { describe, it, expect, beforeEach } from 'vitest';
import { calculateTotals, formatPaiseToINR, rupeesToPaise, paiseToRupees } from '../utils/currency';
import { generateIdempotencyKey } from '../utils/idempotency';
import { orderService } from '../services/orderService';
import { productService } from '../services/productService';

describe('Currency and Order Financial Calculations (Paise)', () => {
  it('converts correctly between rupees and paise without floating-point errors', () => {
    expect(rupeesToPaise(8999)).toBe(899900);
    expect(paiseToRupees(899900)).toBe(8999);
    expect(rupeesToPaise(49.99)).toBe(4999);
  });

  it('formats integer paise into INR string', () => {
    const formatted = formatPaiseToINR(899900);
    expect(formatted).toContain('8,999');
  });

  it('calculates totals correctly below free shipping threshold (< ₹10,000)', () => {
    // 1 unit of ₹5,499 (549900 paise)
    const items = [{ pricePaise: 549900, quantity: 1 }];
    const totals = calculateTotals(items);

    expect(totals.subtotalPaise).toBe(549900);
    // 18% GST on 549900 = 98982 paise
    expect(totals.taxPaise).toBe(Math.round(549900 * 0.18));
    // Subtotal < 1,000,000 paise => standard shipping 25000 paise (₹250)
    expect(totals.shippingPaise).toBe(25000);
    expect(totals.totalPaise).toBe(totals.subtotalPaise + totals.taxPaise + totals.shippingPaise);
  });

  it('qualifies for free shipping when subtotal >= ₹10,000 (1,000,000 paise)', () => {
    // 1 unit of ₹11,499 (1149900 paise)
    const items = [{ pricePaise: 1149900, quantity: 1 }];
    const totals = calculateTotals(items);

    expect(totals.subtotalPaise).toBe(1149900);
    expect(totals.shippingPaise).toBe(0); // Free shipping!
    expect(totals.totalPaise).toBe(totals.subtotalPaise + totals.taxPaise);
  });

  it('handles multi-item calculations with quantities', () => {
    const items = [
      { pricePaise: 399900, quantity: 2 }, // 799800 paise
      { pricePaise: 549900, quantity: 1 }, // 549900 paise
    ];
    const totals = calculateTotals(items);

    expect(totals.subtotalPaise).toBe(799800 + 549900);
    expect(totals.totalPaise).toBe(totals.subtotalPaise + totals.taxPaise + totals.shippingPaise);
  });
});

describe('Idempotency Key Generation', () => {
  it('generates unique RFC4122 v4 UUID with idem_ prefix', () => {
    const key1 = generateIdempotencyKey();
    const key2 = generateIdempotencyKey();

    expect(key1).toMatch(/^idem_[0-9a-f-]{36}$/);
    expect(key2).toMatch(/^idem_[0-9a-f-]{36}$/);
    expect(key1).not.toBe(key2);
  });
});

describe('Order Service & Idempotency Rules', () => {
  beforeEach(() => {
    productService._resetProducts();
    orderService._resetOrders();
  });

  it('rejects order when requested quantity exceeds available stock', async () => {
    // Product 4 has only 1 unit in stock
    const req = {
      items: [{ productId: 'prod_lightbar_004', quantity: 5 }],
      shippingAddress: {
        recipient: 'Test User',
        line1: 'Test St',
        city: 'Vellore',
        state: 'TN',
        postalCode: '632014',
        country: 'IN',
        phone: '1234567890',
        email: 'test@demo.com',
      },
    };

    await expect(orderService.createOrder(req, generateIdempotencyKey())).rejects.toThrow(
      /INSUFFICIENT_STOCK/
    );
  });

  it('returns identical order response when submitting with same idempotency key and same payload', async () => {
    const key = generateIdempotencyKey();
    const req = {
      items: [{ productId: 'prod_headphones_001', quantity: 1 }],
      shippingAddress: {
        recipient: 'Rahul Sharma',
        line1: 'Hostel Block',
        city: 'Vellore',
        state: 'TN',
        postalCode: '632014',
        country: 'IN',
        phone: '9876543210',
        email: 'rahul@demo.com',
      },
    };

    const firstResponse = await orderService.createOrder(req, key);
    expect(firstResponse.orderId).toBeDefined();

    // Re-submit identical request with same key
    const secondResponse = await orderService.createOrder(req, key);
    expect(secondResponse.orderId).toBe(firstResponse.orderId);
    expect(secondResponse.idempotencyKey).toBe(key);
  });

  it('detects idempotency conflict if key is reused with different payload', async () => {
    const key = generateIdempotencyKey();
    const req1 = {
      items: [{ productId: 'prod_headphones_001', quantity: 1 }],
      shippingAddress: {
        recipient: 'Rahul',
        line1: 'Apt 1',
        city: 'Vellore',
        state: 'TN',
        postalCode: '632014',
        country: 'IN',
        phone: '1111111111',
        email: 'r@demo.com',
      },
    };

    await orderService.createOrder(req1, key);

    // Reuse same key with different quantity (different payload)
    const req2 = {
      ...req1,
      items: [{ productId: 'prod_headphones_001', quantity: 2 }],
    };

    await expect(orderService.createOrder(req2, key)).rejects.toThrow(
      /IDEMPOTENCY_CONFLICT/
    );
  });
});
