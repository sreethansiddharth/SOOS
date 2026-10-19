import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';
import { productRepository } from '../src/repositories/productRepository.js';
import { inventoryRepository } from '../src/repositories/inventoryRepository.js';
import { orderRepository } from '../src/repositories/orderRepository.js';
import { idempotencyRepository } from '../src/repositories/idempotencyRepository.js';

describe('API Contract Integration Tests', () => {
  beforeEach(() => {
    productRepository._reset();
    inventoryRepository._reset();
    orderRepository._reset();
    idempotencyRepository._reset();
  });

  it('GET /health returns 200 HEALTHY', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('HEALTHY');
  });

  it('GET /api/v1/products returns active catalogue', async () => {
    const res = await request(app).get('/api/v1/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.items.length).toBeGreaterThan(0);
    expect(res.body.items[0]).toHaveProperty('pricePaise');
  });

  it('GET /api/v1/products/:id returns 404 with structured error on nonexistent item', async () => {
    const res = await request(app).get('/api/v1/products/nonexistent_prod_999');
    expect(res.status).toBe(404);
    expect(res.body.error).toBeDefined();
    expect(res.body.error.code).toBe('PRODUCT_NOT_FOUND');
    expect(res.body.error.requestId).toBeDefined();
  });

  it('POST /api/v1/orders rejects request without Idempotency-Key header', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .send({
        items: [{ productId: 'prod_headphones_001', quantity: 1 }],
        shippingAddress: {
          recipient: 'Rahul',
          line1: 'Hostel',
          city: 'Vellore',
          state: 'TN',
          postalCode: '632014',
          country: 'IN',
          phone: '9999999999',
          email: 'rahul@demo.com',
        },
      });

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('MISSING_IDEMPOTENCY_KEY');
  });

  it('POST /api/v1/orders returns 202 Accepted on valid submission', async () => {
    const idemKey = `test_idem_${Date.now()}`;
    const payload = {
      items: [{ productId: 'prod_headphones_001', quantity: 1 }],
      shippingAddress: {
        recipient: 'Rahul Sharma',
        line1: 'Room 312, Men’s Hostel',
        city: 'Vellore',
        state: 'Tamil Nadu',
        postalCode: '632014',
        country: 'IN',
        phone: '9876543210',
        email: 'rahul@demo.com',
      },
    };

    const res = await request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', idemKey)
      .set('x-user-id', 'cust_123')
      .send(payload);

    expect(res.status).toBe(202);
    expect(res.body.orderId).toBeDefined();
    expect(res.body.status).toBe('PENDING');
    expect(res.body.statusUrl).toContain('/api/v1/orders/');

    // Re-submitting with identical key returns the same order (Idempotency)
    const resRetry = await request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', idemKey)
      .set('x-user-id', 'cust_123')
      .send(payload);

    expect(resRetry.status).toBe(202);
    expect(resRetry.body.orderId).toBe(res.body.orderId);
  });

  it('POST /api/v1/orders rejects duplicate key with different payload (409 Conflict)', async () => {
    const idemKey = `conflict_key_${Date.now()}`;
    const payload1 = {
      items: [{ productId: 'prod_headphones_001', quantity: 1 }],
      shippingAddress: {
        recipient: 'Rahul',
        line1: 'Block A',
        city: 'Vellore',
        state: 'TN',
        postalCode: '632014',
        country: 'IN',
        phone: '9876543210',
        email: 'r@demo.com',
      },
    };

    await request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', idemKey)
      .set('x-user-id', 'cust_123')
      .send(payload1);

    // Re-submit same key with quantity 2
    const payload2 = {
      ...payload1,
      items: [{ productId: 'prod_headphones_001', quantity: 2 }],
    };

    const resConflict = await request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', idemKey)
      .set('x-user-id', 'cust_123')
      .send(payload2);

    expect(resConflict.status).toBe(409);
    expect(resConflict.body.error.code).toBe('IDEMPOTENCY_CONFLICT');
  });

  it('Enforces server-side authorization: customer cannot view another customer’s order', async () => {
    // Create order for customer A
    const res = await request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', `auth_test_${Date.now()}`)
      .set('x-user-id', 'customer_A')
      .send({
        items: [{ productId: 'prod_headphones_001', quantity: 1 }],
        shippingAddress: {
          recipient: 'Customer A',
          line1: 'Street 1',
          city: 'Vellore',
          state: 'TN',
          postalCode: '632014',
          country: 'IN',
          phone: '9876543210',
          email: 'a@demo.com',
        },
      });

    const orderId = res.body.orderId;

    // Customer B tries to read Customer A's order -> 403 Forbidden!
    const resB = await request(app)
      .get(`/api/v1/orders/${orderId}`)
      .set('x-user-id', 'customer_B');

    expect(resB.status).toBe(403);
    expect(resB.body.error.code).toBe('FORBIDDEN');
  });

  it('Protects admin routes: non-admin request to /admin/inventory is rejected', async () => {
    const res = await request(app)
      .patch('/api/v1/admin/inventory/prod_headphones_001')
      .set('x-user-role', 'customer')
      .send({ available: 10 });

    expect(res.status).toBe(403);
    expect(res.body.error.code).toBe('FORBIDDEN');
  });

  it('Allows admin request to /admin/inventory when authorized', async () => {
    const res = await request(app)
      .patch('/api/v1/admin/inventory/prod_headphones_001')
      .set('x-user-role', 'admin')
      .send({ available: 10, reason: 'Restocked' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.newAvailable).toBe(10);
  });
});
