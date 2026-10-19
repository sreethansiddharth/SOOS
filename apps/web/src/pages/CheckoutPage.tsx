import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../services/orderService';
import { generateIdempotencyKey } from '../utils/idempotency';
import { formatPaiseToINR } from '../utils/currency';
import { ShippingAddress, CheckoutRequest } from '../types';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowRight,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Info,
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, financials, clearCart } = useCart();
  const { user } = useAuth();

  const [idempotencyKey, setIdempotencyKey] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fault injection scenario selector for demonstration
  const [faultScenario, setFaultScenario] = useState<
    'NONE' | 'PAYMENT_DEFINITIVE_FAILURE' | 'PAYMENT_AMBIGUOUS' | 'INSUFFICIENT_STOCK'
  >('NONE');

  // Form State
  const [form, setForm] = useState<ShippingAddress>({
    recipient: 'Rahul Sharma',
    line1: 'Room 312, Mens Hostel Block-D, VIT University',
    city: 'Vellore',
    state: 'Tamil Nadu',
    postalCode: '632014',
    country: 'IN',
    phone: '+91 98765 43210',
    email: user?.email || 'rahul.sharma@demo.ac.in',
  });

  useEffect(() => {
    // Generate fresh idempotency key when loading the checkout form
    setIdempotencyKey(generateIdempotencyKey());
  }, []);

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center bg-white rounded-3xl border border-[#D9E7E8]">
        <h2 className="text-xl font-display font-bold text-[#172B3A]">No Items in Cart</h2>
        <p className="text-xs text-[#172B3A]/70 mt-2">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#172B3A] text-white text-xs font-semibold rounded-xl"
        >
          <span>Return to Shop</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const checkoutReq: CheckoutRequest = {
        items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })),
        shippingAddress: form,
        faultScenario,
      };

      // Submits order to backend API with Idempotency-Key
      const response = await orderService.createOrder(
        checkoutReq,
        idempotencyKey,
        user?.id || 'cust_demo_882'
      );

      // Clear the local cart once accepted
      clearCart();

      // Redirect immediately to the Step Functions Order Tracking screen
      navigate(`/orders/${response.orderId}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected checkout failure occurred.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#D9E7E8]">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
          Idempotent Transaction Pipeline
        </span>
        <h1 className="text-3xl font-display font-bold text-[#172B3A] mt-1">
          Express Checkout & Order Submission
        </h1>
        <p className="text-xs sm:text-sm text-[#172B3A]/70 mt-1">
          Step Functions state machine coordinates inventory reservation, simulated payment & confirmation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Shipping Form & Fault Scenario */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleSubmitOrder} className="space-y-6">
            {/* Delivery Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D9E7E8] shadow-2xs space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#D9E7E8]/60">
                <h3 className="font-display font-bold text-base text-[#172B3A]">
                  1. Shipping & Delivery Address
                </h3>
                <span className="text-xs font-mono text-[#267C78] bg-[#D9E7E8]/50 px-2 py-0.5 rounded">
                  Validated Input
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Recipient Full Name
                  </label>
                  <input
                    type="text"
                    name="recipient"
                    required
                    value={form.recipient}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name="line1"
                    required
                    value={form.line1}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={form.city}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={form.state}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Postal PIN</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    maxLength={6}
                    value={form.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78] font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
                  />
                </div>
              </div>
            </div>

            {/* Cloud Architecture Demo: Fault Injection Control */}
            <div className="bg-[#172B3A] text-white rounded-3xl p-6 sm:p-7 border border-[#223c50] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <h3 className="font-display font-bold text-sm">
                    Demonstration Mode — Select Workflow Branch
                  </h3>
                </div>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-[#D9E7E8]">
                  BCSE355L Testing
                </span>
              </div>

              <p className="text-xs text-[#D9E7E8]/80 leading-relaxed">
                Choose which branch the AWS Step Functions workflow should execute for this submission:
              </p>

              <div className="space-y-2.5">
                <label className="cursor-pointer flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                  <input
                    type="radio"
                    name="scenario"
                    checked={faultScenario === 'NONE'}
                    onChange={() => setFaultScenario('NONE')}
                    className="mt-0.5 text-[#267C78] focus:ring-[#267C78]"
                  />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Happy Path (All tasks succeed)
                    </div>
                    <div className="text-[11px] text-[#D9E7E8]/70">
                      Reserve Inventory &rarr; Capture Simulated Payment &rarr; Confirm Order &rarr; Dispatch.
                    </div>
                  </div>
                </label>

                <label className="cursor-pointer flex items-start gap-3 p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 transition-colors">
                  <input
                    type="radio"
                    name="scenario"
                    checked={faultScenario === 'PAYMENT_DEFINITIVE_FAILURE'}
                    onChange={() => setFaultScenario('PAYMENT_DEFINITIVE_FAILURE')}
                    className="mt-0.5 text-amber-400 focus:ring-amber-400"
                  />
                  <div>
                    <div className="text-xs font-semibold text-amber-300">
                      Definitive Payment Failure &rarr; Saga Compensation (Stock Release)
                    </div>
                    <div className="text-[11px] text-amber-100/70">
                      Simulates a card decline. Step Functions Catch block activates to safely release locked inventory back to available stock.
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Simulated Payment Notice Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#D9E7E8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#172B3A]">
                <CreditCard className="w-4 h-4 text-[#267C78]" />
                <span>Simulated Payment Gateway (No Live Financial Transactions)</span>
              </div>
              <p className="text-xs text-[#172B3A]/70 leading-relaxed">
                Per ADR-006, payment processing is simulated in an idempotent Lambda handler. No real card numbers or live payment credentials are ever accepted or stored.
              </p>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Checkout Error</div>
                  <div className="mt-0.5">{errorMessage}</div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`cursor-pointer w-full py-4 px-6 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-[#172B3A] hover:bg-[#267C78] text-white active:scale-98'
              }`}
            >
              {isSubmitting ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>Submitting to Step Functions...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Submit Order ({formatPaiseToINR(financials.totalPaise)})</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Order Summary & Idempotency Key */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E7E8] shadow-sm space-y-5">
            <h3 className="font-display font-bold text-base text-[#172B3A] pb-3 border-b border-[#D9E7E8]/60">
              Order Summary ({items.length} items)
            </h3>

            {/* Items list preview */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.productId} className="flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-gray-100 border border-[#D9E7E8]"
                    />
                    <div>
                      <div className="font-semibold text-[#172B3A] line-clamp-1">{item.name}</div>
                      <div className="text-[#172B3A]/60">Qty: {item.quantity} &times; {formatPaiseToINR(item.pricePaise)}</div>
                    </div>
                  </div>
                  <div className="font-bold text-[#172B3A] shrink-0 font-display">
                    {formatPaiseToINR(item.pricePaise * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Breakdown */}
            <div className="pt-4 border-t border-[#D9E7E8]/60 space-y-2 text-xs">
              <div className="flex justify-between text-[#172B3A]/70">
                <span>Items Subtotal</span>
                <span className="font-mono">{formatPaiseToINR(financials.subtotalPaise)}</span>
              </div>
              <div className="flex justify-between text-[#172B3A]/70">
                <span>GST (18% Standard)</span>
                <span className="font-mono">{formatPaiseToINR(financials.taxPaise)}</span>
              </div>
              <div className="flex justify-between text-[#172B3A]/70">
                <span>Shipping</span>
                <span className="font-mono">
                  {financials.shippingPaise === 0 ? 'FREE' : formatPaiseToINR(financials.shippingPaise)}
                </span>
              </div>
              <div className="pt-3 border-t border-[#D9E7E8] flex justify-between text-base font-bold text-[#172B3A]">
                <span>Total Due</span>
                <div className="text-right">
                  <div>{formatPaiseToINR(financials.totalPaise)}</div>
                  <div className="text-[10px] font-mono text-[#267C78] font-normal">
                    {financials.totalPaise} paise
                  </div>
                </div>
              </div>
            </div>

            {/* Idempotency Key Inspection Box */}
            <div className="p-4 rounded-2xl bg-[#D9E7E8]/40 border border-[#D9E7E8] space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold text-[#172B3A] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#267C78]" />
                  <span>Idempotency-Key Header:</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIdempotencyKey(generateIdempotencyKey())}
                  className="cursor-pointer text-[10px] text-[#267C78] hover:underline font-mono font-semibold"
                  title="Generate a new key"
                >
                  Regenerate
                </button>
              </div>
              <div className="font-mono text-[10px] break-all bg-white p-2 rounded-lg border border-[#D9E7E8] text-[#172B3A]">
                {idempotencyKey}
              </div>
              <p className="text-[10px] text-[#172B3A]/70 leading-relaxed">
                If network drops and you click &ldquo;Submit Order&rdquo; again with this identical key, the backend returns the existing accepted order without charging or reserving twice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
