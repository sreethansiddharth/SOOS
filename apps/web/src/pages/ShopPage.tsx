import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService, GetProductsParams } from '../services/productService';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, RotateCcw, AlertCircle, Check } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters from query params
  const currentCategory = searchParams.get('category') || 'all';
  const currentQuery = searchParams.get('q') || '';
  const currentSort = (searchParams.get('sort') as GetProductsParams['sort']) || 'featured';
  const inStockOnly = searchParams.get('inStock') === 'true';

  useEffect(() => {
    productService.getCategories().then(setCategories).catch(() => {});
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    productService
      .getProducts({
        category: currentCategory,
        q: currentQuery,
        sort: currentSort,
        inStockOnly,
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [currentCategory, currentQuery, currentSort, inStockOnly]);

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === '') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const handleResetFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#D9E7E8]">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
            Authoritative Server Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#172B3A] mt-1">
            Engineered Workspace Peripherals
          </h1>
          <p className="text-xs sm:text-sm text-[#172B3A]/70 mt-1">
            Prices validated in integer paise &bull; Stock backed by conditional write DynamoDB locks
          </p>
        </div>
        <div className="text-xs font-mono bg-white px-3 py-1.5 rounded-xl border border-[#D9E7E8] text-[#172B3A]">
          {isLoading ? 'Querying...' : `${products.length} Products Available`}
        </div>
      </div>

      {/* Controls Bar: Search, Category, Sort, Stock Toggle */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D9E7E8] shadow-2xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Search Bar */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-[#172B3A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search audio, keyboards, light bars..."
              value={currentQuery}
              onChange={(e) => updateParam('q', e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#F6F4EF]/70 border border-[#D9E7E8] focus:outline-hidden focus:border-[#267C78] focus:bg-white transition-colors"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-4 flex items-center gap-2">
            <label className="text-xs text-[#172B3A]/60 shrink-0 font-medium hidden sm:inline">
              Sort by:
            </label>
            <select
              value={currentSort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="w-full py-2 px-3 text-xs sm:text-sm rounded-xl bg-[#F6F4EF]/70 border border-[#D9E7E8] focus:outline-hidden focus:border-[#267C78] focus:bg-white text-[#172B3A] cursor-pointer"
            >
              <option value="featured">Featured Catalog</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>

          {/* In Stock Toggle */}
          <div className="md:col-span-3 flex items-center justify-end">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#172B3A]">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => updateParam('inStock', e.target.checked ? 'true' : null)}
                className="w-4 h-4 rounded text-[#267C78] focus:ring-[#267C78] border-gray-300 cursor-pointer"
              />
              <span>In Stock Only (&gt;0 Units)</span>
            </label>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-[#D9E7E8]/50">
          <button
            onClick={() => updateParam('category', 'all')}
            className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
              currentCategory === 'all'
                ? 'bg-[#172B3A] text-white shadow-xs'
                : 'bg-[#F6F4EF] text-[#172B3A]/80 hover:bg-[#D9E7E8]'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam('category', cat.slug)}
              className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                currentCategory === cat.slug
                  ? 'bg-[#172B3A] text-white shadow-xs'
                  : 'bg-[#F6F4EF] text-[#172B3A]/80 hover:bg-[#D9E7E8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid / Loading / Error / Empty State */}
      {error ? (
        <div className="bg-amber-50/80 rounded-3xl p-8 sm:p-10 border border-amber-200 text-center max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-2xs">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-200/80 text-amber-950 uppercase tracking-wide">
              AWS Connection Required
            </span>
            <h3 className="font-display font-bold text-lg text-amber-950 pt-1">
              Unable to Load Catalogue from AWS DynamoDB
            </h3>
          </div>
          <p className="text-xs text-amber-900/80 leading-relaxed max-w-md mx-auto">
            {error}
          </p>
          <div className="pt-2 text-[11px] text-amber-800 font-mono bg-white/70 p-3 rounded-xl border border-amber-200/60 text-left">
            <div>&bull; Ensure backend server is running: <code>npm run dev</code> in <code>services/api</code></div>
            <div>&bull; Deploy AWS SAM stack: <code>sam deploy</code> in <code>infrastructure/</code></div>
            <div>&bull; Verify AWS credentials: <code>aws configure</code> or environment variables</div>
          </div>
        </div>
      ) : isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div
              key={n}
              className="bg-white rounded-2xl border border-[#D9E7E8] p-4 space-y-4 animate-pulse"
            >
              <div className="aspect-4/3 bg-gray-200 rounded-xl" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
              <div className="h-8 bg-gray-200 rounded-xl mt-4" />
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
        <div className="bg-white rounded-3xl p-12 text-center border border-[#D9E7E8] shadow-xs max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display font-semibold text-lg text-[#172B3A]">
            No matching products found
          </h3>
          <p className="text-xs text-[#172B3A]/70 max-w-xs mx-auto leading-relaxed">
            No products match the selected category, search query, or stock filter criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#172B3A] text-white text-xs font-semibold rounded-xl hover:bg-[#267C78] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
