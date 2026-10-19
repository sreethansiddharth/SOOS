import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatPaiseToINR } from '../utils/currency';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Star, Check, AlertCircle, Zap, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.availableStock <= 0) return;

    const ok = addItem(product, 1);
    if (ok) {
      setAdded(true);
      setErrorMsg(null);
      setTimeout(() => setAdded(false), 1800);
    } else {
      setErrorMsg('Max limit');
      setTimeout(() => setErrorMsg(null), 2000);
    }
  };

  const isOutOfStock = product.availableStock <= 0;
  const isLowStock = product.availableStock > 0 && product.availableStock <= 3;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200/80 hover:border-[#267C78]/60 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative">
      {/* Top Image & Floating Badges */}
      <Link to={`/products/${product.slug}`} className="block relative overflow-hidden bg-gray-50 aspect-square">
        {/* Badges on top left */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#172B3A] text-white shadow-xs">
              {product.badge}
            </span>
          )}
          {product.discountPercent && product.discountPercent > 0 && (
            <span className="text-[10px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded-md bg-rose-600 text-white shadow-xs">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Urgency Pill on top right */}
        <div className="absolute top-2.5 right-2.5 z-10">
          {isOutOfStock ? (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 border border-rose-200">
              Sold Out
            </span>
          ) : isLowStock ? (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300 animate-pulse">
              Only {product.availableStock} left
            </span>
          ) : (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/90 text-emerald-800 border border-emerald-100 shadow-2xs">
              In Stock
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      {/* Product Content Details */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-bold text-[10px] tracking-wider uppercase text-[#267C78]">
              {product.brand || product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-xs text-gray-800">{product.rating}</span>
              <span className="text-[10px] text-gray-500">({product.reviewCount?.toLocaleString()})</span>
            </div>
          </div>

          {/* Title */}
          <Link to={`/products/${product.slug}`} className="block group-hover:text-[#267C78] transition-colors">
            <h3 className="font-display font-bold text-sm text-[#172B3A] line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Key Spec */}
          <p className="text-[11px] text-gray-500 line-clamp-1 mt-1">
            {product.subtitle}
          </p>

          {/* Fast Delivery Badge */}
          <div className="flex items-center gap-1.5 mt-2 text-[11px] font-medium text-emerald-700">
            <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>FREE Next-Day Delivery &bull; Assured</span>
          </div>
        </div>

        {/* Price Row & Add Button */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-display font-extrabold text-[#172B3A]">
                {formatPaiseToINR(product.pricePaise)}
              </span>
              {product.mrpPaise && product.mrpPaise > product.pricePaise && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPaiseToINR(product.mrpPaise)}
                </span>
              )}
            </div>
            {product.discountPercent && (
              <div className="text-[10px] font-bold text-emerald-700">
                Save {formatPaiseToINR(product.mrpPaise! - product.pricePaise)} ({product.discountPercent}% off)
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock || added}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 shrink-0 ${
              isOutOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : added
                ? 'bg-emerald-600 text-white shadow-md'
                : errorMsg
                ? 'bg-rose-500 text-white'
                : 'bg-[#172B3A] hover:bg-[#267C78] text-white shadow-sm hover:shadow-md active:scale-95'
            }`}
            title={isOutOfStock ? 'Sold out' : 'Add to shopping cart'}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Added</span>
              </>
            ) : errorMsg ? (
              <>
                <AlertCircle className="w-4 h-4" />
                <span>Full</span>
              </>
            ) : isOutOfStock ? (
              <span>Sold Out</span>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
