import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { calculateTotals, OrderFinancials } from '../utils/currency';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => boolean;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => boolean;
  clearCart: () => void;
  itemCount: number;
  financials: OrderFinancials;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'aether_cart_items';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1): boolean => {
    if (quantity <= 0 || product.availableStock <= 0) return false;

    let success = true;
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.productId);
      if (existing) {
        const newQty = existing.quantity + quantity;
        if (newQty > product.availableStock) {
          success = false;
          return prev;
        }
        return prev.map((i) =>
          i.productId === product.productId
            ? { ...i, quantity: newQty, availableStock: product.availableStock }
            : i
        );
      } else {
        if (quantity > product.availableStock) {
          success = false;
          return prev;
        }
        return [
          ...prev,
          {
            productId: product.productId,
            slug: product.slug,
            name: product.name,
            pricePaise: product.pricePaise,
            quantity,
            imageUrl: product.imageUrl,
            availableStock: product.availableStock,
          },
        ];
      }
    });

    return success;
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number): boolean => {
    if (quantity <= 0) {
      removeItem(productId);
      return true;
    }

    let success = true;
    setItems((prev) =>
      prev.map((i) => {
        if (i.productId === productId) {
          if (quantity > i.availableStock) {
            success = false;
            return i;
          }
          return { ...i, quantity };
        }
        return i;
      })
    );

    return success;
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  const financials = calculateTotals(
    items.map((i) => ({ pricePaise: i.pricePaise, quantity: i.quantity }))
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        financials,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
