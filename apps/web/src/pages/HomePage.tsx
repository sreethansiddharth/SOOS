import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, RefreshCw, Cpu, Layers, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { productService } from '../services/productService';
import { CATEGORIES } from '../data/mockProducts';

export const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    productService
      .getProducts()
      .then((items) => {
        setFeaturedProducts(items.slice(0, 4));
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D9E7E8]/70 border border-[#267C78]/30 text-[#172B3A] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Next-Gen Desk Architecture & Reference Audio</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#172B3A] leading-[1.08]">
                Precision Hardware. <br />
                <span className="text-[#267C78]">Zero-Oversell</span> Resilience.
              </h1>

              <p className="text-base sm:text-lg text-[#172B3A]/75 leading-relaxed max-w-2xl">
                Experience ultra-refined peripherals, planar magnetic acoustics, and minimalist workstations. Engineered with an event-driven AWS Step Functions saga orchestrator that guarantees transactional integrity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/shop"
                  className="px-6 py-3.5 rounded-2xl bg-[#172B3A] hover:bg-[#267C78] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Catalogue</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/admin"
                  className="px-6 py-3.5 rounded-2xl bg-white border border-[#D9E7E8] hover:border-[#267C78] text-[#172B3A] font-semibold text-sm shadow-2xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Cpu className="w-4 h-4 text-[#267C78]" />
                  <span>Fault Simulation Hub</span>
                </Link>
              </div>

              {/* Architectural Highlights Pill List */}
              <div className="pt-6 border-t border-[#D9E7E8]/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#172B3A]/80 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#267C78]" />
                  <span>DynamoDB Conditional Locks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#267C78]" />
                  <span>Idempotent Checkouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#267C78]" />
                  <span>Saga Rollback Compensation</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5 bg-[#172B3A]">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
                  alt="Studio Wireless Pro Headphones"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A] via-transparent to-transparent opacity-80" />

                {/* Floating Architecture Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D9E7E8] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#267C78] font-bold">
                        Featured Engineering
                      </div>
                      <div className="font-display font-semibold text-sm text-[#172B3A]">
                        Studio Wireless Pro ANC
                      </div>
                      <div className="text-xs text-[#172B3A]/70">5 Units In Real-Time Stock</div>
                    </div>
                    <Link
                      to="/products/studio-wireless-pro-anc"
                      className="px-3.5 py-1.5 rounded-xl bg-[#267C78] text-white text-xs font-semibold hover:bg-[#1E6360] transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
              Curated Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mt-1">
              Engineered Collections
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold text-[#267C78] hover:underline flex items-center gap-1 group"
          >
            <span>Browse All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.slice(0, 3).map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative rounded-3xl overflow-hidden aspect-16/10 bg-[#172B3A] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={cat.imageUrl}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A] via-[#172B3A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono text-[#D9E7E8] uppercase tracking-wider">
                  {cat.itemCount} Engineered Items
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1 group-hover:text-[#D9E7E8] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-white/70 line-clamp-1 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestseller Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
              Verified Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mt-1">
              Featured Flagship Products
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold text-[#267C78] hover:underline flex items-center gap-1 group"
          >
            <span>View Full Shop</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {error ? (
          <div className="bg-amber-50/80 rounded-3xl p-8 border border-amber-200 text-center max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-200 text-amber-950 uppercase">
                AWS DynamoDB Required
              </span>
              <h3 className="font-display font-bold text-base text-amber-950 pt-1">
                DynamoDB Flagship Catalogue Offline
              </h3>
            </div>
            <p className="text-xs text-amber-900/80 leading-relaxed max-w-md mx-auto">
              {error}
            </p>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-[#D9E7E8] p-4 space-y-4 animate-pulse">
                <div className="aspect-4/3 bg-gray-200 rounded-xl" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Cloud Engineering Spotlight Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#172B3A] text-white rounded-3xl p-8 sm:p-12 border border-[#223c50] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#267C78]/30 border border-[#267C78]/50 text-[#D9E7E8] text-xs font-mono">
                <span>BCSE355L Demonstration Core</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Simulate Payment Failures & Observe Saga Rollback
              </h2>
              <p className="text-sm text-[#D9E7E8]/80 leading-relaxed max-w-2xl">
                Unlike ordinary CRUD stores, this system decouples checkout into an asynchronous <span className="text-white font-semibold">AWS Step Functions</span> state machine. Trigger a simulated payment failure to inspect automated inventory replenishment, CloudWatch audit logs, and Amazon SNS event publications.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/admin"
                  className="px-5 py-2.5 rounded-xl bg-[#267C78] hover:bg-[#349692] text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>Launch Fault Injection Console</span>
                </Link>
                <Link
                  to="/shop"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Test Standard Checkout</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0e1c27] p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#D9E7E8] uppercase tracking-wider font-semibold border-b border-white/10 pb-2">
                Live State Invariants
              </div>
              <div className="space-y-2 text-xs text-[#D9E7E8]/80">
                <div className="flex justify-between">
                  <span>Price Arithmetic:</span>
                  <span className="font-mono text-emerald-400">Integer Paise (₹)</span>
                </div>
                <div className="flex justify-between">
                  <span>DynamoDB Stock Lock:</span>
                  <span className="font-mono text-emerald-400">Conditional Check</span>
                </div>
                <div className="flex justify-between">
                  <span>Workflow Engine:</span>
                  <span className="font-mono text-emerald-400">Step Functions</span>
                </div>
                <div className="flex justify-between">
                  <span>Idempotency Key:</span>
                  <span className="font-mono text-emerald-400">RFC4122 v4 UUID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
