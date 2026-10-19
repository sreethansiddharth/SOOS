import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatPaiseToINR } from '../utils/currency';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Star, Check, AlertCircle } from 'lucide-react';

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
      setErrorMsg('Limit reached');
      setTimeout(() => setErrorMsg(null), 2000);
    }
  };

  const isOutOfStock = product.availableStock <= 0;
  const isLowStock = product.availableStock === 1;

  return (
    <div className="group bg-white rounded-2xl border border-[#D9E7E8]/70 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <Link to={`/products/${product.slug}`} className="block relative overflow-hidden bg-[#F6F4EF]/50 aspect-4/3">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-[#172B3A] text-white shadow-xs">
              {product.badge}
            </span>
          )}
          {isLowStock && !isOutOfStock && (
            <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-amber-500 text-white shadow-xs animate-pulse">
              Only 1 Unit Left
            </span>
          )}
          {isOutOfStock && (
            <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-rose-600 text-white shadow-xs">
              Out of Stock
            </span>
          )}
        </div>

        {/* Stock pill */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-md backdrop-blur-md shadow-xs ${
              isOutOfStock
                ? 'bg-rose-100/90 text-rose-800'
                : 'bg-white/90 text-[#172B3A]'
            }`}
          >
            {isOutOfStock ? '0 units' : `${product.availableStock} in stock`}
          </span>
        </div>

        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#172B3A]/60 mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-[10px] text-[#267C78]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-xs text-[#172B3A]">{product.rating}</span>
              <span className="text-[10px] text-[#172B3A]/50">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link to={`/products/${product.slug}`} className="block group-hover:text-[#267C78] transition-colors">
            <h3 className="font-display font-medium text-base text-[#172B3A] line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#172B3A]/60 line-clamp-2 mt-1 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-[#D9E7E8]/50 flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-[#172B3A]/50 uppercase tracking-wider font-mono">Price</div>
            <div className="text-lg font-display font-bold text-[#172B3A]">
              {formatPaiseToINR(product.pricePaise)}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock || added}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
              isOutOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : added
                ? 'bg-emerald-600 text-white'
                : errorMsg
                ? 'bg-rose-500 text-white'
                : 'bg-[#172B3A] hover:bg-[#267C78] text-white shadow-xs active:scale-95'
            }`}
            title={isOutOfStock ? 'Sold out' : 'Add to shopping cart'}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : errorMsg ? (
              <>
                <AlertCircle className="w-4 h-4" />
                <span>Max Stock</span>
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
