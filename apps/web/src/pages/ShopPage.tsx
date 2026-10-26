import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService, GetProductsParams } from '../services/productService';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import {
  RotateCcw,
  AlertCircle,
  Check,
  Zap,
  Filter,
  Grid,
  LayoutGrid,
  Search,
  X,
} from 'lucide-react';

const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹20,000', min: 0, max: 2000000 },
  { label: '₹20k - ₹50k', min: 2000000, max: 5000000 },
  { label: '₹50k - ₹1.5 Lakh', min: 5000000, max: 15000000 },
  { label: 'Above ₹1.5 Lakh', min: 15000000, max: Infinity },
];

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allFetchedProducts, setAllFetchedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedPriceRangeIndex, setSelectedPriceRangeIndex] = useState<number>(0);
  const [gridCols, setGridCols] = useState<'normal' | 'compact'>('normal');

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
        setAllFetchedProducts(data);
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
    setSelectedBrand('all');
    setSelectedPriceRangeIndex(0);
    setSearchParams(new URLSearchParams());
  };

  // Available brands derived from current category / products
  const availableBrands = useMemo(() => {
    const brandSet = new Set<string>();
    allFetchedProducts.forEach((p) => {
      if (p.brand) brandSet.add(p.brand);
    });
    return Array.from(brandSet).sort();
  }, [allFetchedProducts]);

  // Client-side filtering by brand and price range
  const filteredProducts = useMemo(() => {
    let result = [...allFetchedProducts];

    if (selectedBrand !== 'all') {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    const priceRule = PRICE_RANGES[selectedPriceRangeIndex];
    if (priceRule && (priceRule.min > 0 || priceRule.max < Infinity)) {
      result = result.filter(
        (p) => p.pricePaise >= priceRule.min && p.pricePaise <= priceRule.max
      );
    }

    return result;
  }, [allFetchedProducts, selectedBrand, selectedPriceRangeIndex]);

  const hasActiveFilters =
    currentCategory !== 'all' ||
    Boolean(currentQuery) ||
    inStockOnly ||
    dealsOnly ||
    selectedBrand !== 'all' ||
    selectedPriceRangeIndex !== 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0e1d27] via-[#172B3A] to-[#267C78] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
            AETHER FLAGSHIP STOREFRONT &bull; 198 CERTIFIED PRODUCTS
          </span>
          <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1">
            Certified Hardware Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 mt-1">
            Authoritative pricing in integer paise &bull; Atomic stock reservations with zero overselling.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/20 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
            {filteredProducts.length} Items Found
          </span>
        </div>
      </div>

      {/* Main Filter & Control Panel */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs space-y-4">
        {/* Top Control Bar: Search Status, In-Stock, Deals, Sort, Grid View */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
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
              <span>Lightning Deals</span>
            </button>

            {/* Active Query Pill */}
            {currentQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-teal-50 text-[#267C78] text-xs font-bold border border-teal-200">
                <Search className="w-3 h-3" />
                <span>Keyword: &quot;{currentQuery}&quot;</span>
                <button
                  onClick={() => updateParam('q', null)}
                  className="cursor-pointer hover:text-rose-600 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="cursor-pointer text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          {/* Right Controls: Sort & Layout Grid View */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-auto">
            {/* View Switcher */}
            <div className="hidden sm:flex items-center rounded-xl border border-gray-200 bg-gray-50 p-0.5">
              <button
                onClick={() => setGridCols('normal')}
                className={`cursor-pointer p-1.5 rounded-lg transition-colors ${
                  gridCols === 'normal' ? 'bg-white shadow-xs text-[#172B3A]' : 'text-gray-400 hover:text-gray-700'
                }`}
                title="4 Column Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols('compact')}
                className={`cursor-pointer p-1.5 rounded-lg transition-colors ${
                  gridCols === 'compact' ? 'bg-white shadow-xs text-[#172B3A]' : 'text-gray-400 hover:text-gray-700'
                }`}
                title="3 Column Wide Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Sort:</span>
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
        </div>

        {/* Categories Strip */}
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
              {cat.name.split('&')[0]} ({cat.itemCount})
            </button>
          ))}
        </div>

        {/* Secondary Filter Row: Brands & Price Ranges */}
        <div className="pt-2 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          {/* Price Range Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="font-semibold text-gray-400 mr-1 shrink-0">Price:</span>
            {PRICE_RANGES.map((pr, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPriceRangeIndex(idx)}
                className={`cursor-pointer px-2.5 py-1 rounded-lg text-xs whitespace-nowrap font-medium transition-colors ${
                  selectedPriceRangeIndex === idx
                    ? 'bg-[#267C78] text-white font-bold'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                }`}
              >
                {pr.label}
              </button>
            ))}
          </div>

          {/* Brand Filter Dropdown / Pill */}
          {availableBrands.length > 0 && (
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-semibold text-gray-400">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-50 border border-gray-200 text-gray-800 outline-none cursor-pointer"
              >
                <option value="all">All Brands ({availableBrands.length})</option>
                {availableBrands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid / Loading / Empty State */}
      {isLoading ? (
        <div
          className={`grid gap-6 ${
            gridCols === 'compact'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
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
      ) : filteredProducts.length > 0 ? (
        <div
          className={`grid gap-6 ${
            gridCols === 'compact'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xs max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#172B3A]">
            No matching products found
          </h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
            No products match the selected filters. Try widening your price range or resetting brand/category filters.
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
