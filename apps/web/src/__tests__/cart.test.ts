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

describe('Order Service API Contract & Error Handling', () => {
  it('throws descriptive backend connection error when API server is unreachable', async () => {
    // Simulate network connection failure
    const originalFetch = globalThis.fetch;
    globalThis.fetch = () => Promise.reject(new TypeError('Failed to fetch'));

    const req = {
      items: [{ productId: 'prod_lightbar_004', quantity: 1 }],
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

    try {
      await expect(orderService.createOrder(req, generateIdempotencyKey())).rejects.toThrow(
        /Backend Connection Failed/
      );
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('correctly propagates backend INSUFFICIENT_STOCK error to the frontend', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = () =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            error: {
              code: 'INSUFFICIENT_STOCK',
              message: 'Insufficient stock for "Horizon Light Bar". Available: 0, Requested: 1.',
            },
          }),
          { status: 409, headers: { 'Content-Type': 'application/json' } }
        )
      );

    const req = {
      items: [{ productId: 'prod_lightbar_004', quantity: 1 }],
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

    try {
      await expect(orderService.createOrder(req, generateIdempotencyKey())).rejects.toThrow(
        /INSUFFICIENT_STOCK/
      );
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('correctly propagates AWS credentials and Step Functions missing error to the frontend', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = () =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            error: {
              code: 'AWS_CREDENTIALS_MISSING',
              message: 'AWS credentials not configured on host. Integration with AWS DynamoDB and Step Functions requires valid AWS credentials.',
            },
          }),
          { status: 503, headers: { 'Content-Type': 'application/json' } }
        )
      );

    const req = {
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

    try {
      await expect(orderService.createOrder(req, generateIdempotencyKey())).rejects.toThrow(
        /AWS_CREDENTIALS_MISSING/
      );
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('returns valid 202 Accepted response on successful order submission', async () => {
    const originalFetch = globalThis.fetch;
    const key = generateIdempotencyKey();
    globalThis.fetch = () =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            orderId: 'ord_12345',
            status: 'PENDING',
            statusUrl: '/api/v1/orders/ord_12345',
            eventsUrl: '/api/v1/orders/ord_12345/events',
            correlationId: 'corr_12345',
            idempotencyKey: key,
          }),
          { status: 202, headers: { 'Content-Type': 'application/json' } }
        )
      );

    const req = {
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

    try {
      const res = await orderService.createOrder(req, key);
      expect(res.orderId).toBe('ord_12345');
      expect(res.status).toBe('PENDING');
      expect(res.idempotencyKey).toBe(key);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
