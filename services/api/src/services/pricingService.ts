export interface OrderFinancials {
  subtotalPaise: number;
  taxPaise: number;
  shippingPaise: number;
  totalPaise: number;
}

export const pricingService = {
  calculateTotals(
    items: Array<{ pricePaise: number; quantity: number }>,
    taxRate = 0.18,
    freeShippingThresholdPaise = 1000000,
    standardShippingFeePaise = 25000
  ): OrderFinancials {
    const subtotalPaise = items.reduce((acc, item) => {
      return acc + Math.round(item.pricePaise * item.quantity);
    }, 0);

    const taxPaise = Math.round(subtotalPaise * taxRate);
    const shippingPaise =
      subtotalPaise === 0 || subtotalPaise >= freeShippingThresholdPaise
        ? 0
        : standardShippingFeePaise;

    const totalPaise = subtotalPaise + taxPaise + shippingPaise;

    return {
      subtotalPaise,
      taxPaise,
      shippingPaise,
      totalPaise,
    };
  },
};
