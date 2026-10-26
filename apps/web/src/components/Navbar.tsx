import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPaiseToINR } from '../utils/currency';
import {
  ShoppingBag,
  Cpu,
  Search,
  Menu,
  X,
  MapPin,
  ChevronDown,
  Sparkles,
  Zap,
  Smartphone,
  Laptop,
  Headphones,
  Gamepad2,
  Keyboard,
  Mouse,
  Watch,
  Layout,
  Camera,
  Grid,
} from 'lucide-react';
import { ArchitectureModal } from './ArchitectureModal';
import { CATEGORIES } from '../data/mockProducts';

export const Navbar: React.FC = () => {
  const { itemCount, financials } = useCart();
  const { switchRole, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (searchCategory !== 'all') params.set('category', searchCategory);
    navigate(`/shop?${params.toString()}`);
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    all: <Grid className="w-3.5 h-3.5" />,
    smartphones: <Smartphone className="w-3.5 h-3.5" />,
    laptops: <Laptop className="w-3.5 h-3.5" />,
    audio: <Headphones className="w-3.5 h-3.5" />,
    gaming: <Gamepad2 className="w-3.5 h-3.5" />,
    keyboards: <Keyboard className="w-3.5 h-3.5" />,
    accessories: <Mouse className="w-3.5 h-3.5" />,
    wearables: <Watch className="w-3.5 h-3.5" />,
    'desk-setup': <Layout className="w-3.5 h-3.5" />,
    cameras: <Camera className="w-3.5 h-3.5" />,
  };

  const searchParams = new URLSearchParams(location.search);
  const activeCat = searchParams.get('category') || (location.pathname === '/shop' ? 'all' : '');

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#172B3A]/95 backdrop-blur-md text-white shadow-lg border-b border-white/10">
        {/* Top Announcements Mini Bar */}
        <div className="bg-[#0b1720] text-gray-300 text-[11px] py-1.5 px-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#267C78]/40 border border-[#267C78]/50 text-[#D9E7E8] font-bold text-[10px]">
                <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                FESTIVE ELECTRONICS MEGA-SALE
              </span>
              <span className="hidden md:inline text-gray-300">
                Up to 45% Off on 198 Flagship Hardware Items &bull; Free Next-Day Prime Delivery
              </span>
            </div>

            {/* Quick Role & Cloud Mode Switcher */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsArchModalOpen(true)}
                className="cursor-pointer hidden sm:flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors font-medium"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Architecture Diagram</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="cursor-pointer flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold transition-colors border border-white/15"
                >
                  <span className={`w-2 h-2 rounded-full ${isAdmin ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                  <span>{isAdmin ? 'Admin / Architect' : 'Customer Mode'}</span>
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </button>

                {isRoleDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 text-gray-800 animate-in fade-in">
                    <button
                      onClick={() => {
                        switchRole('customer');
                        setIsRoleDropdownOpen(false);
                      }}
                      className="cursor-pointer w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-gray-50"
                    >
                      <div>
                        <div className="font-bold text-[#172B3A]">Customer Mode</div>
                        <div className="text-[10px] text-gray-500">Shop storefront & checkout</div>
                      </div>
                      {!isAdmin && <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-md">Active</span>}
                    </button>
                    <button
                      onClick={() => {
                        switchRole('admin');
                        setIsRoleDropdownOpen(false);
                        navigate('/admin');
                      }}
                      className="cursor-pointer w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-gray-50"
                    >
                      <div>
                        <div className="font-bold text-amber-700">Cloud Architect</div>
                        <div className="text-[10px] text-gray-500">Live inventory & Saga console</div>
                      </div>
                      {isAdmin && <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-md">Active</span>}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#267C78] to-teal-400 flex items-center justify-center text-white shadow-md shadow-teal-900/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-white block leading-none">
                  AETHER
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-teal-300 font-bold">
                  Certified Flagships
                </span>
              </div>
            </Link>

            {/* Delivery Pin Drop (Amazon/Flipkart style) */}
            <div className="hidden lg:flex items-center gap-2.5 text-xs shrink-0 cursor-pointer hover:bg-white/5 px-2.5 py-1.5 rounded-xl border border-transparent hover:border-white/10 transition-colors">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <div className="text-[10px] text-gray-400 leading-tight">Deliver to Rahul</div>
                <div className="font-bold text-white text-xs leading-tight">Vellore 632014 &bull; Next Day</div>
              </div>
            </div>

            {/* Central Search Bar */}
            <form onSubmit={handleSearchSubmit} className="flex-1 max-w-2xl hidden md:flex items-center rounded-2xl overflow-hidden bg-white shadow-md border border-white/20">
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="bg-gray-100 text-gray-800 text-xs font-semibold px-3.5 py-2.5 border-r border-gray-200 outline-none cursor-pointer hover:bg-gray-200 transition-colors shrink-0"
              >
                <option value="all">All Hardware</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="audio">Audio</option>
                <option value="gaming">Gaming</option>
                <option value="keyboards">Keyboards</option>
                <option value="accessories">Peripherals</option>
                <option value="wearables">Wearables</option>
                <option value="desk-setup">Desk Setup</option>
                <option value="cameras">Cameras</option>
              </select>

              <div className="flex-1 flex items-center px-3.5">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 198 certified products (e.g., iPhone 15, M3 Max, Sony XM5, Steam Deck)..."
                  className="w-full text-xs text-gray-900 placeholder-gray-400 outline-none bg-transparent py-1.5"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="cursor-pointer text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="cursor-pointer bg-[#267C78] hover:bg-[#1E6360] text-white px-5 py-2.5 transition-colors flex items-center justify-center shrink-0"
                aria-label="Submit Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Right Action Icons */}
            <div className="flex items-center gap-3">
              {/* Account Orders */}
              <Link
                to="/account/orders"
                className="hidden sm:flex flex-col text-right hover:text-teal-300 transition-colors px-2 py-1"
              >
                <span className="text-[10px] text-gray-400">Track Packages</span>
                <span className="font-bold text-xs text-white">Orders & Saga</span>
              </Link>

              {/* Shopping Cart Pill with Live Indicator */}
              <Link
                to="/cart"
                className="cursor-pointer relative flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#267C78] to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-teal-950/40 hover:scale-102 transition-all shrink-0"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-white" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 min-w-[18px] h-[18px] flex items-center justify-center px-1 rounded-full bg-rose-600 text-white text-[10px] font-black border border-white animate-bounce">
                      {itemCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-left leading-tight">
                  <div className="text-[9px] text-teal-100 font-normal">Cart Total</div>
                  <div className="text-xs font-mono font-bold text-white">
                    {formatPaiseToINR(financials.subtotalPaise)}
                  </div>
                </div>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden cursor-pointer p-2 rounded-xl bg-white/10 text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation Ribbon (Amazon/Apple Subnav bar) */}
        <div className="bg-[#122330] border-t border-white/10 px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
            {CATEGORIES.map((cat) => {
              const isActive = activeCat === cat.slug;
              return (
                <Link
                  key={cat.id}
                  to={cat.slug === 'all' ? '/shop' : `/shop?category=${cat.slug}`}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#267C78] text-white shadow-xs'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {categoryIcons[cat.slug] || <Grid className="w-3.5 h-3.5" />}
                  <span>{cat.name.split('&')[0].trim()}</span>
                  <span className="text-[10px] opacity-70 font-mono">({cat.itemCount})</span>
                </Link>
              );
            })}

            <Link
              to="/shop?deals=true"
              className="flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold bg-rose-600/30 text-rose-300 border border-rose-500/40 hover:bg-rose-600 hover:text-white transition-all ml-2"
            >
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>Lightning Deals</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search & Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0e1d27] border-t border-white/10 p-4 space-y-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center rounded-xl overflow-hidden bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 198 certified products..."
                className="w-full text-xs text-gray-900 px-3.5 py-2.5 outline-none"
              />
              <button type="submit" className="bg-[#267C78] text-white p-2.5">
                <Search className="w-4 h-4" />
              </button>
            </form>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                to="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium"
              >
                All Products
              </Link>
              <Link
                to="/account/orders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium"
              >
                Track Orders
              </Link>
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 font-medium"
              >
                Admin Console
              </Link>
              <button
                onClick={() => {
                  setIsArchModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl bg-teal-500/20 text-teal-300 font-medium text-left"
              >
                Architecture
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Cloud Architecture Diagram Modal */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />
    </>
  );
};
