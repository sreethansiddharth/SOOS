import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import {
  ShoppingBag,
  Cpu,
  Shield,
  Search,
  Menu,
  X,
  MapPin,
  ChevronDown,
  Sparkles,
  Zap,
  TrendingUp,
  Package,
} from 'lucide-react';
import { ArchitectureModal } from './ArchitectureModal';
import { CATEGORIES } from '../data/mockProducts';

export const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const { user, switchRole, isAdmin } = useAuth();
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

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#172B3A] text-white shadow-md">
        {/* Top Mini Bar */}
        <div className="bg-[#0e1d27] text-gray-300 text-[11px] py-1.5 px-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#267C78]/40 text-[#D9E7E8] font-semibold text-[10px]">
                <Zap className="w-3 h-3 text-[#267C78]" />
                FESTIVE ELECTRONICS SALE
              </span>
              <span className="hidden sm:inline text-gray-300">
                Up to 45% Off on Flagships &bull; Free Next-Day Prime Delivery
              </span>
            </div>

            {/* Quick Role & Cloud Mode Switcher */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="cursor-pointer flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isAdmin ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                  <span>{isAdmin ? 'Admin Console' : 'Customer Account'}</span>
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </button>

                {isRoleDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 py-1.5 z-50 text-gray-800">
                    <button
                      onClick={() => {
                        switchRole('customer');
                        setIsRoleDropdownOpen(false);
                      }}
                      className="cursor-pointer w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-gray-50"
                    >
                      <div>
                        <div className="font-bold text-[#172B3A]">Customer Mode</div>
                        <div className="text-[10px] text-gray-500">Standard shopper storefront</div>
                      </div>
                      {!isAdmin && <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Active</span>}
                    </button>
                    <button
                      onClick={() => {
                        switchRole('admin');
                        setIsRoleDropdownOpen(false);
                      }}
                      className="cursor-pointer w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-gray-50"
                    >
                      <div>
                        <div className="font-bold text-amber-700">Cloud Architect</div>
                        <div className="text-[10px] text-gray-500">Inventory & fault simulator</div>
                      </div>
                      {isAdmin && <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">Active</span>}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Flipkart/Amazon Style Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-[#267C78] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-white block leading-none">
                  AETHER
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#267C78] font-bold">
                  Flagship Store
                </span>
              </div>
            </Link>

            {/* Delivery Pin Drop (Amazon/Flipkart style) */}
            <div className="hidden lg:flex items-center gap-2 text-xs shrink-0 cursor-pointer hover:opacity-90">
              <MapPin className="w-4 h-4 text-[#267C78]" />
              <div>
                <div className="text-[10px] text-gray-400 leading-tight">Deliver to Rahul</div>
                <div className="font-bold text-white text-xs leading-tight">Vellore 632014</div>
              </div>
            </div>

            {/* Central Search Bar */}
            <form onSubmit={handleSearchSubmit} className="flex-1 max-w-2xl hidden md:flex items-center rounded-xl overflow-hidden bg-white shadow-inner">
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-2.5 border-r border-gray-200 outline-none cursor-pointer hover:bg-gray-200 transition-colors shrink-0"
              >
                <option value="all">All Tech</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="audio">Audio</option>
                <option value="gaming">Gaming</option>
                <option value="keyboards">Keyboards</option>
                <option value="accessories">Peripherals</option>
              </select>

              <input
                type="text"
                placeholder="Search iPhone 15 Pro, Sony XM5, PS5, MacBook Air M3..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none"
              />

              <button
                type="submit"
                className="bg-[#267C78] hover:bg-[#1f6663] text-white px-5 py-2.5 transition-colors cursor-pointer flex items-center justify-center shrink-0"
                title="Search Products"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Right Quick Links */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              {/* Architecture Specs Modal */}
              <button
                onClick={() => setIsArchModalOpen(true)}
                className="cursor-pointer hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
                title="View AWS Step Functions & Architecture"
              >
                <Cpu className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Architecture</span>
              </button>

              {/* My Orders */}
              <Link
                to="/account/orders"
                className="hidden sm:flex flex-col text-xs hover:text-[#267C78] transition-colors"
              >
                <span className="text-[10px] text-gray-400">Returns</span>
                <span className="font-bold text-white text-xs">& Orders</span>
              </Link>

              {/* Admin */}
              <Link
                to="/admin"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Admin</span>
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="cursor-pointer relative p-2.5 rounded-xl bg-[#267C78] text-white hover:bg-[#1f6663] transition-colors shadow-md flex items-center gap-2"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden sm:inline font-bold text-xs">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-gray-950 text-[10px] font-black flex items-center justify-center shadow-md animate-bounce">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden cursor-pointer p-2 rounded-xl text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Input */}
          <form onSubmit={handleSearchSubmit} className="mt-3 md:hidden flex items-center rounded-xl overflow-hidden bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search products, brands, gadgets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="bg-[#267C78] text-white px-4 py-2 flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Horizontal Category Strip (Flipkart / Amazon Ribbon) */}
        <div className="bg-[#1f3749] border-t border-white/10 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none py-2 text-xs font-medium">
          <div className="max-w-7xl mx-auto flex items-center gap-6 whitespace-nowrap">
            <Link to="/shop" className="text-amber-300 font-bold hover:text-white flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-amber-300" />
              <span>All Deals</span>
            </Link>
            <Link to="/shop?category=smartphones" className="text-gray-200 hover:text-white transition-colors">
              Smartphones & Flagships
            </Link>
            <Link to="/shop?category=laptops" className="text-gray-200 hover:text-white transition-colors">
              MacBooks & Laptops
            </Link>
            <Link to="/shop?category=audio" className="text-gray-200 hover:text-white transition-colors">
              Headphones & Sound
            </Link>
            <Link to="/shop?category=gaming" className="text-gray-200 hover:text-white transition-colors">
              PS5 & Gaming Gear
            </Link>
            <Link to="/shop?category=keyboards" className="text-gray-200 hover:text-white transition-colors">
              Custom Keyboards
            </Link>
            <Link to="/shop?category=wearables" className="text-gray-200 hover:text-white transition-colors">
              Apple Watch & Wearables
            </Link>
            <Link to="/shop?category=accessories" className="text-gray-200 hover:text-white transition-colors">
              Peripherals & Mice
            </Link>
            <Link to="/shop?category=desk-setup" className="text-gray-200 hover:text-white transition-colors">
              Desk Architecture
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#172B3A] px-4 pt-3 pb-6 space-y-2 text-sm">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white font-semibold hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white hover:bg-white/10"
            >
              All Products & Deals
            </Link>
            <Link
              to="/account/orders"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-white hover:bg-white/10"
            >
              My Orders & Invoices
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-amber-400 font-semibold hover:bg-white/10"
            >
              Admin & Fault Simulator
            </Link>
          </div>
        )}
      </header>

      {/* Cloud Architecture Specs Modal */}
      <ArchitectureModal isOpen={isArchModalOpen} onClose={() => setIsArchModalOpen(false)} />
    </>
  );
};
