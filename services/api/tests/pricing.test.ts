import { describe, it, expect } from 'vitest';
import { pricingService } from '../src/services/pricingService.js';

describe('Pricing Engine (Integer Paise & ADR-011)', () => {
  it('calculates totals correctly below free shipping threshold (< ₹10,000)', () => {
    // 1 item of ₹5,499 (549900 paise)
    const result = pricingService.calculateTotals([{ pricePaise: 549900, quantity: 1 }]);

    expect(result.subtotalPaise).toBe(549900);
    expect(result.taxPaise).toBe(Math.round(549900 * 0.18)); // 98982 paise
    expect(result.shippingPaise).toBe(25000); // Standard ₹250
    expect(result.totalPaise).toBe(result.subtotalPaise + result.taxPaise + result.shippingPaise);
  });

  it('awards free shipping when subtotal >= 1,000,000 paise (₹10,000)', () => {
    // 1 item of ₹11,499 (1149900 paise)
    const result = pricingService.calculateTotals([{ pricePaise: 1149900, quantity: 1 }]);

    expect(result.subtotalPaise).toBe(1149900);
    expect(result.shippingPaise).toBe(0);
    expect(result.totalPaise).toBe(result.subtotalPaise + result.taxPaise);
  });

  it('accurately computes multi-item orders', () => {
    const result = pricingService.calculateTotals([
      { pricePaise: 899900, quantity: 2 }, // 1799800 paise
      { pricePaise: 399900, quantity: 1 }, // 399900 paise
    ]);

    expect(result.subtotalPaise).toBe(1799800 + 399900);
    expect(result.shippingPaise).toBe(0); // Subtotal > 1,000,000 paise
    expect(result.totalPaise).toBe(result.subtotalPaise + result.taxPaise);
  });
});
