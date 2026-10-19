import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { Product } from '../types';
import { formatPaiseToINR } from '../utils/currency';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingBag,
  Check,
  AlertTriangle,
  ArrowLeft,
  Share2,
  Clock,
  Sparkles,
  CreditCard,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [stockError, setStockError] = useState<string | null>(null);
  const [pincode, setPincode] = useState('632014');
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    setStockError(null);
    setError(null);
    setQuantity(1);

    productService
      .getProductBySlug(slug)
      .then(async (data) => {
        if (!data) {
          setIsLoading(false);
          return;
        }
        setProduct(data);
        setSelectedImage(data.imageUrl);

        // Load related products from same category
        try {
          const rel = await productService.getProducts({ category: data.category });
          setRelated(rel.filter((p) => p.productId !== data.productId).slice(0, 3));
        } catch {
          // Ignored for related
        }
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse space-y-8">
        <div className="h-6 bg-gray-200 rounded w-48" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 aspect-4/3 bg-gray-200 rounded-3xl" />
          <div className="lg:col-span-5 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-1/2" />
            <div className="h-10 bg-gray-200 rounded w-1/3" />
            <div className="h-32 bg-gray-100 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto my-20 p-8 text-center bg-amber-50 rounded-3xl border border-amber-200 space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-200 text-amber-950 uppercase">
            AWS DynamoDB Required
          </span>
          <h2 className="text-lg font-display font-bold text-amber-950 pt-1">
            Unable to Retrieve Product Record
          </h2>
        </div>
        <p className="text-xs text-amber-900/80 leading-relaxed">
          {error}
        </p>
        <Link
          to="/shop"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#172B3A] text-white text-xs font-semibold rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalogue</span>
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-lg mx-auto my-20 p-8 text-center bg-white rounded-3xl border border-[#D9E7E8]">
        <h2 className="text-xl font-display font-bold text-[#172B3A]">Product Not Found</h2>
        <p className="text-xs text-[#172B3A]/70 mt-2">
          The requested hardware unit does not exist or has been retired.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#172B3A] text-white text-xs font-semibold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalogue</span>
        </Link>
      </div>
    );
  }

  const isOutOfStock = product.availableStock <= 0;
  const isLastUnit = product.availableStock === 1;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    const ok = addItem(product, quantity);
    if (ok) {
      setIsAdded(true);
      setStockError(null);
      setTimeout(() => setIsAdded(false), 2000);
    } else {
      setStockError(`Cannot add ${quantity} units. Only ${product.availableStock} in stock.`);
    }
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    const ok = addItem(product, quantity);
    if (ok) {
      navigate('/checkout');
    } else {
      setStockError(`Only ${product.availableStock} units available.`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-[#172B3A]/60">
        <Link to="/shop" className="hover:text-[#267C78] transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Shop</span>
        </Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="text-[#172B3A] font-medium truncate max-w-xs">{product.name}</span>
      </div>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-white border border-[#D9E7E8] aspect-4/3 shadow-sm">
            <img
              src={selectedImage || product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Real Stock Status Overlay */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {product.badge && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#172B3A] text-white shadow-xs">
                  {product.badge}
                </span>
              )}
              {isLastUnit && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500 text-white shadow-xs animate-pulse">
                  Last Unit in Stock
                </span>
              )}
              {isOutOfStock && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-600 text-white shadow-xs">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.galleryImages && product.galleryImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`cursor-pointer w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === img
                      ? 'border-[#267C78] ring-2 ring-[#267C78]/20'
                      : 'border-[#D9E7E8] hover:border-[#172B3A]'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details & Purchase Column */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div>
            <div className="flex items-center justify-between text-xs text-[#267C78] font-semibold uppercase tracking-wider mb-2">
              <span>{product.category}</span>
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-xs text-[#172B3A]">{product.rating}</span>
                <span className="text-xs text-[#172B3A]/60">({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] leading-tight">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#172B3A]/70 mt-1 leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          {/* Price, MRP, Savings & Bank Offer Box */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs space-y-3">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-black text-[#172B3A]">
                    {formatPaiseToINR(product.pricePaise)}
                  </span>
                  {product.mrpPaise && product.mrpPaise > product.pricePaise && (
                    <span className="text-sm text-gray-400 line-through">
                      M.R.P.: {formatPaiseToINR(product.mrpPaise)}
                    </span>
                  )}
                  {product.discountPercent && (
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                      {product.discountPercent}% OFF
                    </span>
                  )}
                </div>
                {product.mrpPaise && product.mrpPaise > product.pricePaise && (
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">
                    You save {formatPaiseToINR(product.mrpPaise - product.pricePaise)} inclusive of all taxes
                  </div>
                )}
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-[#267C78] bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md font-bold">
                  {product.pricePaise} paise
                </span>
                <div className="text-[11px] font-semibold mt-1">
                  {isOutOfStock ? (
                    <span className="text-rose-600">Currently unavailable</span>
                  ) : (
                    <span className="text-emerald-700 font-bold">
                      In Stock ({product.availableStock} units)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bank Offer & EMI Pill */}
            <div className="pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-900 flex items-start gap-2">
                <CreditCard className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Bank Offer</div>
                  <div className="text-[10px] text-amber-800">Flat 10% Instant Discount on HDFC & ICICI Cards</div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-teal-50/80 border border-teal-200/70 text-teal-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#267C78] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">No Cost EMI</div>
                  <div className="text-[10px] text-teal-800">Available on major banks. Up to 12 months</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <label className="text-xs font-semibold text-[#172B3A] uppercase tracking-wider">
                Quantity:
              </label>
              <div className="flex items-center rounded-xl border border-[#D9E7E8] bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1 || isOutOfStock}
                  className="cursor-pointer px-3 py-1.5 text-sm font-semibold hover:bg-[#F6F4EF] disabled:opacity-40"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-mono font-bold text-[#172B3A]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.availableStock, q + 1))}
                  disabled={quantity >= product.availableStock || isOutOfStock}
                  className="cursor-pointer px-3 py-1.5 text-sm font-semibold hover:bg-[#F6F4EF] disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            {stockError && (
              <div className="text-xs text-rose-600 flex items-center gap-1.5 font-medium">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{stockError}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`cursor-pointer py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  isOutOfStock
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border-2 border-[#172B3A] text-[#172B3A] hover:bg-[#F6F4EF]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                disabled={isOutOfStock}
                className={`cursor-pointer py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  isOutOfStock
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#172B3A] hover:bg-[#267C78] text-white shadow-md active:scale-98'
                }`}
              >
                <span>Express Checkout</span>
              </button>
            </div>
          </div>

          {/* Delivery & Pincode Checker */}
          <div className="p-4 rounded-2xl bg-white border border-[#D9E7E8] space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#172B3A]">
              <Truck className="w-4 h-4 text-[#267C78]" />
              <span>Simulated Delivery Estimate</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                maxLength={6}
                placeholder="Postal PIN"
                className="w-28 px-3 py-1.5 text-xs font-mono rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:outline-hidden"
              />
              <button
                onClick={() => setDeliveryChecked(true)}
                className="cursor-pointer px-3 py-1.5 rounded-xl bg-[#172B3A] text-white text-xs font-semibold hover:bg-[#267C78] transition-colors"
              >
                Check
              </button>
            </div>
            {deliveryChecked && (
              <p className="text-[11px] text-[#267C78] font-medium">
                Standard courier transit: 2–3 business days to PIN {pincode}. Free shipping above ₹10,000.
              </p>
            )}
          </div>

          {/* Highlights */}
          {product.highlights && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#172B3A]">
                Engineering Highlights
              </h4>
              <ul className="text-xs text-[#172B3A]/80 space-y-1.5">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Specifications Table */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D9E7E8] shadow-xs space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#267C78] font-semibold">
            Hardware Architecture
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-[#172B3A] mt-1">
            Technical Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 divide-y md:divide-y-0 divide-[#D9E7E8]/50">
          {product.specs?.map((spec, i) => (
            <div key={i} className="py-2.5 flex items-center justify-between border-b border-[#D9E7E8]/40 text-xs">
              <span className="text-[#172B3A]/60 font-medium">{spec.label}</span>
              <span className="text-[#172B3A] font-semibold text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-[#172B3A]">
              Related Workspace Peripherals
            </h3>
            <Link to="/shop" className="text-xs font-semibold text-[#267C78] hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.productId} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
