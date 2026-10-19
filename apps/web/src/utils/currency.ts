/**
 * Utility functions for currency formatting and financial calculations.
 * In accordance with ADR-011 and database schema rules, all money is
 * represented internally as integer paise to prevent floating-point rounding errors.
 */

export function formatPaiseToINR(paise: number, includeDecimals = false): string {
  if (typeof paise !== 'number' || isNaN(paise)) return '₹0';
  const rupees = paise / 100;
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: includeDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(rupees);
}

export function rupeesToPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

export function paiseToRupees(paise: number): number {
  return paise / 100;
}

export interface OrderFinancials {
  subtotalPaise: number;
  taxPaise: number; // 18% GST (standard electronics tax in India)
  shippingPaise: number;
  totalPaise: number;
}

/**
 * Server-authoritative calculation of order financial totals.
 * Never trust client prices or client-computed totals.
 */
export function calculateTotals(
  items: Array<{ pricePaise: number; quantity: number }>,
  taxRate = 0.18, // 18% GST
  freeShippingThresholdPaise = 1000000, // Free shipping above ₹10,000
  standardShippingFeePaise = 25000 // ₹250 standard shipping
): OrderFinancials {
  const subtotalPaise = items.reduce((acc, item) => {
    return acc + Math.round(item.pricePaise * item.quantity);
  }, 0);

  const taxPaise = Math.round(subtotalPaise * taxRate);
  
  const shippingPaise = subtotalPaise === 0 || subtotalPaise >= freeShippingThresholdPaise 
    ? 0 
    : standardShippingFeePaise;

  const totalPaise = subtotalPaise + taxPaise + shippingPaise;

  return {
    subtotalPaise,
    taxPaise,
    shippingPaise,
    totalPaise,
  };
}
