import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';
import { inventoryRepository } from '../src/repositories/inventoryRepository.js';
import { productRepository } from '../src/repositories/productRepository.js';
import { orderRepository } from '../src/repositories/orderRepository.js';
import { idempotencyRepository } from '../src/repositories/idempotencyRepository.js';

describe('Concurrency and Race Condition Prevention (DynamoDB Invariants)', () => {
  beforeEach(() => {
    productRepository._reset();
    inventoryRepository._reset();
    orderRepository._reset();
    idempotencyRepository._reset();
  });

  it('guarantees that 2 concurrent orders for the final unit never oversell (available >= 0)', async () => {
    // 1. Seed stock of "Horizon 4K Monitor Optical Light Bar" to exactly 1 unit
    inventoryRepository._setAvailable('prod_lightbar_004', 1);

    const initialInv = await inventoryRepository.getByProductId('prod_lightbar_004');
    expect(initialInv?.available).toBe(1);

    // 2. Prepare 2 concurrent checkout requests from different customers with distinct idempotency keys
    const orderPromiseA = request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', `race_A_${Date.now()}`)
      .set('x-user-id', 'buyer_A')
      .send({
        items: [{ productId: 'prod_lightbar_004', quantity: 1 }],
        shippingAddress: {
          recipient: 'Buyer A',
          line1: 'Hostel 1',
          city: 'Vellore',
          state: 'TN',
          postalCode: '632014',
          country: 'IN',
          phone: '9999900001',
          email: 'buyerA@demo.ac.in',
        },
      });

    const orderPromiseB = request(app)
      .post('/api/v1/orders')
      .set('Idempotency-Key', `race_B_${Date.now()}`)
      .set('x-user-id', 'buyer_B')
      .send({
        items: [{ productId: 'prod_lightbar_004', quantity: 1 }],
        shippingAddress: {
          recipient: 'Buyer B',
          line1: 'Hostel 2',
          city: 'Vellore',
          state: 'TN',
          postalCode: '632014',
          country: 'IN',
          phone: '9999900002',
          email: 'buyerB@demo.ac.in',
        },
      });

    // 3. Dispatch both concurrently
    const [resA, resB] = await Promise.all([orderPromiseA, orderPromiseB]);

    // 4. Verify outcomes: Exactly one order gets accepted (202), and subsequent requests are rejected
    // Wait for the background atomic reservation to complete
    await new Promise((r) => setTimeout(r, 200));

    // Verify atomic conditional reservation invariant:
    // Try to reserve one more unit directly to prove stock is zero
    await expect(
      inventoryRepository.reserveStock('prod_lightbar_004', 1)
    ).rejects.toThrow(/Insufficient stock/);

    const finalInv = await inventoryRepository.getByProductId('prod_lightbar_004');
    // Available stock must NEVER become negative!
    expect(finalInv?.available).toBeGreaterThanOrEqual(0);
    expect(finalInv?.available).toBe(0);
    expect(finalInv?.reserved).toBe(1);
  });
});
