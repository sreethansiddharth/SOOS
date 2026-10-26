import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatPaiseToINR } from '../utils/currency';
import { useCart } from '../context/CartContext';
import {
  X,
  Star,
  ShoppingBag,
  Check,
  Zap,
  ShieldCheck,
  Truck,
  ArrowRight,
  Eye,
} from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addItem } = useCart();
  const [selectedImg, setSelectedImg] = useState<string>(product?.imageUrl || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!product) return null;

  const isOutOfStock = product.availableStock <= 0;
  const isLowStock = product.availableStock > 0 && product.availableStock <= 3;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    const ok = addItem(product, quantity);
    if (ok) {
      setAdded(true);
      setErrorMsg(null);
      setTimeout(() => setAdded(false), 2000);
    } else {
      setErrorMsg('Stock limit reached');
      setTimeout(() => setErrorMsg(null), 2500);
    }
  };

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imageUrl];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Gallery & Main Image */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/80 shadow-xs">
              <img
                src={selectedImg || product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
                {product.badge && (
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-[#172B3A] text-white shadow-sm">
                    {product.badge}
                  </span>
                )}
                {product.discountPercent && product.discountPercent > 0 && (
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg bg-rose-600 text-white shadow-sm">
                    {product.discountPercent}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail switcher if multiple images exist */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`cursor-pointer w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      (selectedImg || product.imageUrl) === img
                        ? 'border-[#267C78] shadow-sm ring-2 ring-[#267C78]/20'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Purchase Controls */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                <span className="font-bold text-[11px] tracking-wider uppercase text-[#267C78]">
                  {product.brand || product.category}
                </span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-gray-900">{product.rating}</span>
                  <span className="text-gray-400 text-xs font-normal">
                    ({product.reviewCount?.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#172B3A] leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            {/* Pricing Section */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70 space-y-1">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">
                  {formatPaiseToINR(product.pricePaise)}
                </span>
                {product.mrpPaise && product.mrpPaise > product.pricePaise && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPaiseToINR(product.mrpPaise)}
                  </span>
                )}
              </div>
              {product.discountPercent && (
                <div className="text-xs font-bold text-emerald-700">
                  Save {formatPaiseToINR((product.mrpPaise || 0) - product.pricePaise)} ({product.discountPercent}% off)
                </div>
              )}
              <div className="text-[11px] text-gray-500 pt-1 border-t border-gray-200/60 flex items-center justify-between">
                <span>Inclusive of all taxes &bull; Zero-Oversell Atomic Lock</span>
                <span className="font-mono text-gray-400">{product.pricePaise} paise</span>
              </div>
            </div>

            {/* Stock Pill & Delivery */}
            <div className="flex items-center gap-4 text-xs">
              <div>
                {isOutOfStock ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-bold">
                    Sold Out
                  </span>
                ) : isLowStock ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Only {product.availableStock} units left
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    In Stock ({product.availableStock} available)
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <Truck className="w-4 h-4" />
                <span>Next-Day Free Delivery</span>
              </div>
            </div>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  Key Features
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 overflow-hidden w-32 shrink-0">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="cursor-pointer px-3 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                  disabled={quantity <= 1 || isOutOfStock}
                >
                  -
                </button>
                <span className="font-mono font-bold text-sm text-[#172B3A]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.availableStock, q + 1))}
                  className="cursor-pointer px-3 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                  disabled={quantity >= product.availableStock || isOutOfStock}
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock || added}
                className={`cursor-pointer flex-1 py-3 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 ${
                  isOutOfStock
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : added
                    ? 'bg-emerald-600 text-white'
                    : errorMsg
                    ? 'bg-rose-600 text-white'
                    : 'bg-[#172B3A] hover:bg-[#267C78] text-white hover:shadow-lg active:scale-98'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : errorMsg ? (
                  <span>{errorMsg}</span>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Link to detail page */}
            <div className="pt-2 text-center">
              <Link
                to={`/products/${product.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#267C78] hover:text-[#172B3A] transition-colors"
              >
                <span>View Full Specifications & Saga Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
