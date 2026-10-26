import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Truck,
  RotateCcw,
  CreditCard,
  ChevronRight,
  Flame,
  Star,
  Percent,
  Award,
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { productService } from '../services/productService';
import { CATEGORIES } from '../data/mockProducts';
import { formatPaiseToINR } from '../utils/currency';

interface HeroSlide {
  title: string;
  subtitle: string;
  badge: string;
  pricePaise: number;
  mrpPaise: number;
  slug: string;
  imageUrl: string;
  tagline: string;
  specs: string[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Apple iPhone 15 Pro Max',
    subtitle: 'A17 Pro Chip, 6.7" Super Retina XDR, 5X Telephoto Optical Zoom',
    badge: 'TITANIUM FLAGSHIP',
    pricePaise: 14890000,
    mrpPaise: 15990000,
    slug: 'apple-iphone-15-pro-max-256gb',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Forged in aerospace Grade 5 titanium with console-grade ray tracing.',
    specs: ['Grade 5 Titanium', 'A17 Pro 3nm', '5x Telephoto', 'Action Button'],
  },
  {
    title: 'MacBook Pro 16" M3 Max',
    subtitle: '16-Core CPU, 40-Core GPU, 36GB Unified Memory, Space Black',
    badge: 'CREATOR TITAN',
    pricePaise: 34990000,
    mrpPaise: 39990000,
    slug: 'apple-macbook-pro-16-m3-max-space-black',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Monumental graphics throughput with Liquid Retina XDR 1600 nits.',
    specs: ['40-Core GPU', '16.2" Liquid XDR', 'Space Black Seal', '22h Battery'],
  },
  {
    title: 'Sony WH-1000XM5 ANC',
    subtitle: 'Auto NC Optimizer, 30-Hour Battery, Crystal Clear Calling',
    badge: 'ACOUSTIC KING',
    pricePaise: 2899000,
    mrpPaise: 3499000,
    slug: 'sony-wh-1000xm5-wireless-anc-headphones',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    tagline: 'Dual V1/QN1 noise canceling processors for pristine spatial silence.',
    specs: ['Dual ANC Processors', '30-Hour Battery', 'LDAC Hi-Res Audio', 'Multipoint BT'],
  },
];

const POPULAR_BRANDS = [
  'Apple',
  'Sony',
  'Samsung',
  'Bose',
  'ASUS',
  'Dell',
  'Keychron',
  'Lofree',
  'Herman Miller',
  'DJI',
  'Valve',
  'Fujifilm',
];

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  // Live Deals Countdown Timer (Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

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

  // Autoplay hero slides every 6 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((curr) => (curr + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];

  const dealProducts = products.filter((p) => p.isDealOfTheDay || (p.discountPercent && p.discountPercent >= 14));
  const smartphoneAndLaptops = products.filter((p) => p.category === 'smartphones' || p.category === 'laptops');
  const audioProducts = products.filter((p) => p.category === 'audio');
  const gamingProducts = products.filter((p) => p.category === 'gaming');
  const keyboardAndPeripherals = products.filter((p) => p.category === 'keyboards' || p.category === 'accessories');
  const deskAndCameras = products.filter((p) => p.category === 'desk-setup' || p.category === 'cameras');

  return (
    <div className="space-y-12 pb-20 bg-[#F8F7F4]">
      {/* 1. Hero Showcase Carousel Banner */}
      <section className="bg-gradient-to-r from-[#0b1720] via-[#172B3A] to-[#122838] text-white overflow-hidden relative border-b border-white/10">
        {/* Ambient subtle glow mesh */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Pitch */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D9E7E8] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Great Indian Tech Festival &bull; 198 Certified Flagships</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight leading-[1.06] text-white">
                Engineered for Focus. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-amber-200 to-emerald-300">
                  Precision Hardware.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
                Discover genuine Apple, Sony, Samsung, Keychron, Herman Miller & DJI computing gear. Every checkout is protected by AWS DynamoDB atomic inventory locks and zero overselling.
              </p>

              {/* Offer Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Percent className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">Up to 45% Off</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">Flat 10% Instant Cards</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Truck className="w-4 h-4 text-sky-400" />
                  <span className="font-semibold">Free Express Prime Delivery</span>
                </div>
              </div>

              {/* Action Buttons & Slide Controls */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/shop"
                  className="px-7 py-3.5 rounded-2xl bg-[#267C78] hover:bg-[#1E6360] text-white font-bold text-sm shadow-xl shadow-teal-950/40 hover:scale-102 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Complete Catalogue (198 Items)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/shop?deals=true"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Lightning Offers</span>
                </Link>

                {/* Carousel Selectors */}
                <div className="flex items-center gap-2 ml-auto">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`cursor-pointer transition-all duration-300 rounded-full ${
                        activeSlide === idx
                          ? 'w-8 h-2.5 bg-amber-400'
                          : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Hero Product Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/25 p-6 sm:p-7 shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-rose-600 text-white font-extrabold uppercase text-[10px] shadow-sm">
                    {currentSlide.badge}
                  </span>
                  <span className="text-amber-300 font-mono font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    4.9 &bull; Verified Flagship
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-900/40 border border-white/10">
                  <img
                    src={currentSlide.imageUrl}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#172B3A]/90 px-3 py-1 rounded-xl backdrop-blur-md text-xs font-bold text-white border border-white/20">
                    {currentSlide.specs[0]} &bull; {currentSlide.specs[1]}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                    {currentSlide.tagline}
                  </p>
                </div>

                {/* Specs pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentSlide.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-lg bg-white/10 text-white text-[10px] font-medium border border-white/15"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Price & Buy Now CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <div>
                    <div className="text-[11px] text-gray-400 line-through">
                      M.R.P: {formatPaiseToINR(currentSlide.mrpPaise)}
                    </div>
                    <div className="text-2xl font-black text-amber-300 font-display">
                      {formatPaiseToINR(currentSlide.pricePaise)}
                    </div>
                  </div>
                  <Link
                    to={`/products/${currentSlide.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-950 font-extrabold text-xs transition-colors shadow-lg shadow-amber-950/20"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Pillars Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#267C78] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-xs text-[#172B3A]">Zero-Oversell Locks</div>
              <div className="text-[10px] text-gray-500">Atomic DynamoDB reserve</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-xs text-[#172B3A]">100% Genuine Gear</div>
              <div className="text-[10px] text-gray-500">Authorized manufacturer seal</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-xs text-[#172B3A]">Free Prime Delivery</div>
              <div className="text-[10px] text-gray-500">Next-day expedited shipping</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-xs text-[#172B3A]">7-Day Easy Returns</div>
              <div className="text-[10px] text-gray-500">Instant compensation saga</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Strip Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Certified Collections
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Explore by Tech Category
              </h2>
            </div>
            <Link to="/shop" className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1">
              <span>View All 198 Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CATEGORIES.filter((c) => c.slug !== 'all').map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group flex flex-col items-center text-center p-3.5 rounded-2xl bg-gray-50 hover:bg-teal-50/50 border border-transparent hover:border-[#267C78]/30 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200 group-hover:scale-108 transition-transform mb-2.5">
                  <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-gray-800 group-hover:text-[#267C78] transition-colors line-clamp-1">
                  {cat.name.split('&')[0]}
                </span>
                <span className="text-[10px] text-gray-500 mt-0.5">
                  {cat.itemCount} Flagships
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deal of the Day Row with LIVE COUNTDOWN TIMER & CLAIMED PROGRESS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-950 via-[#172B3A] to-[#122838] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
          {/* Deals Header with Timer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-rose-600 flex items-center justify-center text-white shadow-md">
                <Zap className="w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    Lightning Deals of the Day
                  </h2>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-rose-500 text-white text-[10px] font-black uppercase">
                    LIMITED QUANTITY
                  </span>
                </div>
                <p className="text-xs text-rose-200 mt-0.5">
                  Massive discounts on certified hardware. Hurry, deals refresh when timer ends!
                </p>
              </div>
            </div>

            {/* Countdown Clock */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-black/50 px-4 py-2 rounded-2xl border border-white/20">
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
              <div key={product.productId} className="flex flex-col">
                <ProductCard product={product} />
                {/* Lightning Deal Claimed Progress Bar */}
                <div className="mt-2 bg-black/40 rounded-xl p-2.5 border border-white/10 text-[11px] space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-amber-300 font-bold">84% Claimed</span>
                    <span className="text-gray-400">Only {product.availableStock} left</span>
                  </div>
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-rose-500 h-full w-[84%]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Flagships: Smartphones & Creator Laptops */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Flagship Performance
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Smartphones & Pro Laptops
              </h2>
            </div>
            <Link
              to="/shop?category=smartphones"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>View All Flagships</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartphoneAndLaptops.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Promotional Mid-Page Banner (Amazon Prime / Flipkart Plus Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full">
              AWS STEP FUNCTIONS ORCHESTRATION
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
            className="px-7 py-3.5 rounded-2xl bg-white text-gray-950 font-black text-xs sm:text-sm shadow-xl hover:bg-gray-100 transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. Audio & Audiophile Acoustics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Studio Fidelity & Noise Cancellation
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Headphones & High-Fidelity Acoustics
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

      {/* 8. Gaming Consoles & Handhelds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Next-Gen Gaming
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Consoles & Handheld Gaming
              </h2>
            </div>
            <Link
              to="/shop?category=gaming"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>View All Gaming</span>
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

      {/* 9. Keyboards & Precision Peripherals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Tactile Input & Peripherals
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Custom Keyboards & Studio Tools
              </h2>
            </div>
            <Link
              to="/shop?category=keyboards"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>Explore Keyboards</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyboardAndPeripherals.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Desk Architecture & Pro Cameras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#267C78] uppercase tracking-wider">
                Workstation & Optics
              </span>
              <h2 className="text-2xl font-display font-extrabold text-[#172B3A] mt-0.5">
                Desk Architecture & Pro Cameras
              </h2>
            </div>
            <Link
              to="/shop?category=desk-setup"
              className="text-xs font-bold text-[#267C78] hover:underline flex items-center gap-1"
            >
              <span>Explore Workspace</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deskAndCameras.slice(0, 4).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Popular Brands Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Authorized Manufacturer Partners
            </span>
            <span className="text-xs text-gray-400 font-mono">100% Genuine Certified</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {POPULAR_BRANDS.map((brand) => (
              <Link
                key={brand}
                to={`/shop?q=${encodeURIComponent(brand)}`}
                className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#267C78] text-gray-700 hover:text-white font-bold text-xs border border-gray-200/70 hover:border-transparent transition-all shadow-2xs hover:shadow-sm"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
