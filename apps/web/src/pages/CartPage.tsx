import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPaiseToINR } from '../utils/currency';
import { Trash2, ArrowRight, ShoppingBag, ShieldCheck, Truck, AlertCircle } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, financials } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center bg-white rounded-3xl border border-[#D9E7E8] shadow-xs space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-[#D9E7E8]/50 text-[#267C78] flex items-center justify-center mx-auto">
          <ShoppingBag className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-display font-bold text-[#172B3A]">
          Your Shopping Cart is Empty
        </h2>
        <p className="text-xs text-[#172B3A]/70 leading-relaxed max-w-xs mx-auto">
          Explore our reference audio, mechanical keyboards, and precision desk hardware.
        </p>
        <Link
          to="/shop"
          className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#172B3A] text-white text-xs font-semibold rounded-xl hover:bg-[#267C78] transition-colors"
        >
          <span>Browse Catalogue</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#D9E7E8]">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
            Authoritative Server Cart
          </span>
          <h1 className="text-3xl font-display font-bold text-[#172B3A] mt-1">
            Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
          </h1>
        </div>
        <button
          onClick={clearCart}
          className="cursor-pointer text-xs text-[#172B3A]/60 hover:text-rose-600 transition-colors font-medium"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-[#D9E7E8] shadow-2xs divide-y divide-[#D9E7E8]/60">
            {items.map((item) => (
              <div key={item.productId} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Link
                    to={`/products/${item.slug}`}
                    className="w-20 h-20 rounded-2xl overflow-hidden bg-[#F6F4EF] shrink-0 border border-[#D9E7E8]"
                  >
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div>
                    <Link
                      to={`/products/${item.slug}`}
                      className="font-display font-semibold text-sm text-[#172B3A] hover:text-[#267C78] transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <div className="text-xs font-mono text-[#172B3A]/60 mt-0.5">
                      Unit: {formatPaiseToINR(item.pricePaise)} ({item.pricePaise} paise)
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">
                      {item.availableStock} in stock
                    </div>
                  </div>
                </div>

                {/* Quantity Controls & Total */}
                <div className="flex items-center justify-between sm:justify-end gap-6">
                  {/* Quantity selector */}
                  <div className="flex items-center rounded-xl border border-[#D9E7E8] bg-[#F6F4EF] overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="cursor-pointer px-2.5 py-1 text-xs font-bold hover:bg-white"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-mono font-bold text-[#172B3A]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      disabled={item.quantity >= item.availableStock}
                      className="cursor-pointer px-2.5 py-1 text-xs font-bold hover:bg-white disabled:opacity-40"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[100px]">
                    <div className="font-display font-bold text-base text-[#172B3A]">
                      {formatPaiseToINR(item.pricePaise * item.quantity)}
                    </div>
                    <div className="text-[10px] font-mono text-[#172B3A]/50">
                      {item.pricePaise * item.quantity} paise
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="cursor-pointer p-1.5 rounded-lg text-gray-400 hover:text-rose-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#D9E7E8]/40 border border-[#D9E7E8] flex items-center gap-3 text-xs text-[#172B3A]/80">
            <Truck className="w-4 h-4 text-[#267C78] shrink-0" />
            <span>Orders over ₹10,000 (1,000,000 paise) automatically qualify for Complimentary Priority Shipping.</span>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E7E8] shadow-sm space-y-6">
            <h3 className="font-display font-bold text-lg text-[#172B3A] pb-3 border-b border-[#D9E7E8]/60">
              Order Financials
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-[#172B3A]/70">
                <span>Items Subtotal</span>
                <span className="font-mono text-[#172B3A] font-medium">
                  {formatPaiseToINR(financials.subtotalPaise)}
                </span>
              </div>

              <div className="flex justify-between text-[#172B3A]/70">
                <span>GST (18% Standard)</span>
                <span className="font-mono text-[#172B3A] font-medium">
                  {formatPaiseToINR(financials.taxPaise)}
                </span>
              </div>

              <div className="flex justify-between text-[#172B3A]/70">
                <span>Shipping Fee</span>
                <span className="font-mono text-[#172B3A] font-medium">
                  {financials.shippingPaise === 0 ? (
                    <span className="text-emerald-700 font-semibold">FREE</span>
                  ) : (
                    formatPaiseToINR(financials.shippingPaise)
                  )}
                </span>
              </div>

              <div className="pt-3 border-t border-[#D9E7E8] flex justify-between text-base">
                <span className="font-display font-bold text-[#172B3A]">Estimated Total</span>
                <div className="text-right">
                  <div className="font-display font-extrabold text-[#172B3A]">
                    {formatPaiseToINR(financials.totalPaise)}
                  </div>
                  <div className="text-[10px] font-mono text-[#267C78]">
                    {financials.totalPaise} paise
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="cursor-pointer w-full py-3.5 px-4 rounded-2xl bg-[#172B3A] hover:bg-[#267C78] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="pt-3 border-t border-[#D9E7E8]/60 space-y-2 text-[11px] text-[#172B3A]/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Zero overselling: Stock verified before payment</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Simulated payment mode: No live card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
