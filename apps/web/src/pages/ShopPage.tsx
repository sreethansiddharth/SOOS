import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService, GetProductsParams } from '../services/productService';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, RotateCcw, AlertCircle, Check, Zap, Filter, Tag } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters from query params
  const currentCategory = searchParams.get('category') || 'all';
  const currentQuery = searchParams.get('q') || '';
  const currentSort = (searchParams.get('sort') as GetProductsParams['sort']) || 'featured';
  const inStockOnly = searchParams.get('inStock') === 'true';
  const dealsOnly = searchParams.get('deals') === 'true';

  useEffect(() => {
    productService.getCategories().then(setCategories).catch(() => {});
  }, []);

  useEffect(() => {
    setIsLoading(true);
    productService
      .getProducts({
        category: currentCategory,
        q: currentQuery,
        sort: currentSort,
        inStockOnly,
        dealsOnly,
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [currentCategory, currentQuery, currentSort, inStockOnly, dealsOnly]);

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === '') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const toggleParam = (key: string) => {
    const next = new URLSearchParams(searchParams);
    if (next.get(key) === 'true') {
      next.delete(key);
    } else {
      next.set(key, 'true');
    }
    setSearchParams(next);
  };

  const handleResetFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#172B3A] to-[#267C78] text-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
            AETHER FLAGSHIP CATALOGUE
          </span>
          <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1">
            Certified Tech & Peripherals
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 mt-1">
            Authoritative pricing in integer paise &bull; Atomic stock reservations with zero overselling.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-mono text-xs font-bold">
            {products.length} Products Available
          </span>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-xs space-y-4">
        {/* Top Controls: Search query status & Sort options */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Quick Filters:
            </span>

            {/* In stock toggle */}
            <button
              onClick={() => toggleParam('inStock')}
              className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                inStockOnly
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${inStockOnly ? 'opacity-100' : 'opacity-0'}`} />
              <span>In Stock Only</span>
            </button>

            {/* Deals only toggle */}
            <button
              onClick={() => toggleParam('deals')}
              className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                dealsOnly
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Deals & Discounts</span>
            </button>

            {(currentCategory !== 'all' || currentQuery || inStockOnly || dealsOnly) && (
              <button
                onClick={handleResetFilters}
                className="cursor-pointer text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <span className="text-xs font-medium text-gray-500">Sort By:</span>
            <select
              value={currentSort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-gray-50 border border-gray-200 text-gray-800 outline-none cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <option value="featured">Featured & Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Category Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam('category', cat.slug)}
              className={`cursor-pointer px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                currentCategory === cat.slug
                  ? 'bg-[#172B3A] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid / Loading / Empty State */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div
              key={n}
              className="bg-white rounded-2xl border border-gray-200 p-4 space-y-4 animate-pulse"
            >
              <div className="aspect-square bg-gray-200 rounded-xl" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
              <div className="h-9 bg-gray-200 rounded-xl mt-4" />
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xs max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-[#172B3A]">
            No matching products found
          </h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
            No products match the selected category or search filter criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#172B3A] text-white text-xs font-bold rounded-xl hover:bg-[#267C78] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
