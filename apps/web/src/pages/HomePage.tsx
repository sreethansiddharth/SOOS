import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  CheckCircle2,
  Truck,
  RotateCcw,
  CreditCard,
  ChevronRight,
  Flame,
  Star,
  Tag,
  Percent,
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { productService } from '../services/productService';
import { CATEGORIES } from '../data/mockProducts';
import { formatPaiseToINR } from '../utils/currency';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Live Deals Countdown Timer (Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const dealProducts = products.filter((p) => p.isDealOfTheDay || (p.discountPercent && p.discountPercent >= 14));
  const smartphoneProducts = products.filter((p) => p.category === 'smartphones' || p.category === 'laptops');
  const audioProducts = products.filter((p) => p.category === 'audio');
  const gamingProducts = products.filter((p) => p.category === 'gaming' || p.category === 'keyboards');

  return (
    <div className="space-y-12 pb-20 bg-gray-50/50">
      {/* 1. Hero Promotional Showcase Banner (Amazon/Flipkart Mega Banner) */}
      <section className="bg-gradient-to-r from-[#0f2231] via-[#172B3A] to-[#1c384c] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Pitch */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#267C78]/40 border border-[#267C78] text-[#D9E7E8] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Great Indian Tech Festival &bull; Live Now</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
                Next-Gen Flagships. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-200 to-emerald-400">
                  Unbeatable Deals.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
                Shop genuine Apple, Sony, Samsung, Keychron, and ASUS hardware. Enjoy flat ₹10,000 instant bank discounts, zero-cost EMI, and guaranteed zero-oversell stock reservation.
              </p>

              {/* Offer Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Percent className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">Up to 45% Off</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">Flat 10% HDFC/ICICI Cards</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Truck className="w-4 h-4 text-sky-400" />
                  <span className="font-semibold">Free Express Shipping</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/shop"
                  className="px-7 py-3.5 rounded-2xl bg-[#267C78] hover:bg-[#1f6663] text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-102 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Mega Sale</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/shop?deals=true"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Deals of the Day</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Product Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-rose-600 text-white font-extrabold uppercase text-[10px]">
                    FLAGSHIP DEAL
                  </span>
                  <span className="text-amber-300 font-mono font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    4.9 &bull; (2,450 Verified Reviews)
                  </span>
                </div>

                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-900/40">
                  <img
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop"
                    alt="iPhone 15 Pro Max"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#172B3A]/90 px-3 py-1 rounded-xl backdrop-blur-md text-xs font-bold text-white border border-white/20">
                    Natural Titanium &bull; A17 Pro
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-lg text-white">
                    Apple iPhone 15 Pro Max (256 GB)
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    5X Optical Telephoto, ProMotion 120Hz, Grade 5 Titanium Frame.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/15">
                  <div>
                    <div className="text-[10px] text-gray-400 line-through">M.R.P: ₹1,59,900</div>
                    <div className="text-2xl font-black text-amber-300 font-display">₹1,48,900</div>
                  </div>
                  <Link
                    to="/products/apple-iphone-15-pro-max-256gb"
                    className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-950 font-extrabold text-xs transition-colors shadow-lg"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Strip Grid (Explore by Category) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Shop By Category
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Explore Tech Collections
              </h2>
            </div>
            <Link to="/shop" className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.filter((c) => c.slug !== 'all').map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group flex flex-col items-center text-center p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50/60 border border-transparent hover:border-[#267C78]/30 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-sm border border-gray-200 group-hover:scale-110 transition-transform mb-2.5">
                  <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-gray-800 group-hover:text-[#267C78] transition-colors line-clamp-1">
                  {cat.name}
                </span>
                <span className="text-[10px] text-gray-500 mt-0.5">
                  {cat.itemCount} Items
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deal of the Day Row with LIVE COUNTDOWN TIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-900 via-[#172B3A] to-[#1c384c] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
          {/* Deals Header with Timer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-md">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  Deals of the Day &bull; Lightning Offers
                </h2>
                <p className="text-xs text-rose-200">
                  Massive discounts on certified hardware. Hurry, deals refresh when timer ends!
                </p>
              </div>
            </div>

            {/* Countdown Clock */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-black/40 px-4 py-2 rounded-2xl border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-gray-300 font-semibold uppercase">Ends In:</span>
              <div className="flex items-center gap-1 font-mono font-black text-amber-300 text-sm">
                <span className="bg-black/60 px-2 py-0.5 rounded-md">
                  {String(timeLeft.hours).padStart(2, '0')}h
                </span>
                <span>:</span>
                <span className="bg-black/60 px-2 py-0.5 rounded-md">
                  {String(timeLeft.minutes).padStart(2, '0')}m
                </span>
                <span>:</span>
                <span className="bg-black/60 px-2 py-0.5 rounded-md text-rose-400 animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>
            </div>
          </div>

          {/* Deal Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Flagships & Computing Showcase Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Flagship Performance
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Smartphones & Laptops
              </h2>
            </div>
            <Link
              to="/shop?category=smartphones"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>See More Flagships</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartphoneProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Promotional Mid-Page Banner (Amazon Prime / Flipkart Plus Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 p-8 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full">
              ZERO-OVERSELL GUARANTEE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              Instant Atomic Stock Reservation
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl">
              Every checkout is backed by Amazon DynamoDB conditional atomic locks and AWS Step Functions saga orchestration. You never get double-charged or face sudden out-of-stock cancellations.
            </p>
          </div>

          <Link
            to="/shop"
            className="px-6 py-3.5 rounded-2xl bg-white text-gray-950 font-black text-xs sm:text-sm shadow-xl hover:bg-gray-100 transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Audio & Acoustics Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Audiophile & Noise Cancellation
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Headphones & Studio Acoustics
              </h2>
            </div>
            <Link
              to="/shop?category=audio"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>Explore Audio</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audioProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gaming & Peripherals Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Pro Workstation & Gaming
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Gaming Gear, Displays & Keyboards
              </h2>
            </div>
            <Link
              to="/shop?category=gaming"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>View Gaming Gear</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamingProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Trust & Guarantee Assurance Badges (Amazon/Flipkart Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#172B3A]">Free Express Delivery</div>
              <div className="text-xs text-gray-500 mt-0.5">On all orders above ₹999 across India</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#172B3A]">7-Day Easy Returns</div>
              <div className="text-xs text-gray-500 mt-0.5">Hassle-free replacement policy</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#172B3A]">100% Genuine Tech</div>
              <div className="text-xs text-gray-500 mt-0.5">Direct manufacturer warranty included</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#172B3A]">Serverless Orchestration</div>
              <div className="text-xs text-gray-500 mt-0.5">Coordinated by AWS Step Functions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
