import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Cpu, Shield, Search, Menu, X, User, ChevronDown } from 'lucide-react';
import { ArchitectureModal } from './ArchitectureModal';

export const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const { user, switchRole, isAdmin } = useAuth();
  const location = useLocation();
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F6F4EF]/90 backdrop-blur-md border-b border-[#D9E7E8]">
        {/* Top Announcement Bar */}
        <div className="bg-[#172B3A] text-[#F6F4EF] text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#267C78] animate-pulse" />
              <span className="font-mono text-[11px] text-[#D9E7E8]">
                BCSE355L Cloud Architecture Design — AWS Serverless Order Orchestration
              </span>
            </div>

            {/* Quick Role Switcher for Evaluator */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[#D9E7E8]/70 text-[11px]">Role Mode:</span>
              <div className="relative">
                <button
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="cursor-pointer flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isAdmin ? 'bg-amber-400' : 'bg-[#267C78]'}`} />
                  <span>{isAdmin ? 'Cloud Admin' : 'Demo Customer'}</span>
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </button>

                {isRoleDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-[#D9E7E8] py-1 z-50 text-[#172B3A]">
                    <button
                      onClick={() => {
                        switchRole('customer');
                        setIsRoleDropdownOpen(false);
                      }}
                      className={`cursor-pointer w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-[#F6F4EF] ${
                        !isAdmin ? 'font-semibold text-[#267C78]' : ''
                      }`}
                    >
                      <span>Demo Customer</span>
                      {!isAdmin && <span className="text-[10px] bg-[#D9E7E8] px-1.5 py-0.5 rounded">Active</span>}
                    </button>
                    <button
                      onClick={() => {
                        switchRole('admin');
                        setIsRoleDropdownOpen(false);
                      }}
                      className={`cursor-pointer w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-[#F6F4EF] ${
                        isAdmin ? 'font-semibold text-amber-700' : ''
                      }`}
                    >
                      <span>Cloud Architect (Admin)</span>
                      {isAdmin && <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Active</span>}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#172B3A] flex items-center justify-center text-white shadow-md group-hover:bg-[#267C78] transition-colors">
                  <Cpu className="w-5 h-5 text-[#D9E7E8]" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-2xl tracking-tight text-[#172B3A]">
                    AETHER
                  </span>
                  <span className="block text-[9px] font-mono tracking-widest uppercase text-[#267C78] -mt-1 font-semibold">
                    Electronics
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link
                  to="/"
                  className={`transition-colors ${
                    isActive('/') ? 'text-[#267C78] font-semibold' : 'text-[#172B3A]/80 hover:text-[#172B3A]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className={`transition-colors ${
                    isActive('/shop') ? 'text-[#267C78] font-semibold' : 'text-[#172B3A]/80 hover:text-[#172B3A]'
                  }`}
                >
                  Shop Catalogue
                </Link>
                <Link
                  to="/account/orders"
                  className={`transition-colors ${
                    isActive('/account/orders') ? 'text-[#267C78] font-semibold' : 'text-[#172B3A]/80 hover:text-[#172B3A]'
                  }`}
                >
                  My Orders
                </Link>
                <Link
                  to="/admin"
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors ${
                    isActive('/admin')
                      ? 'bg-[#172B3A] text-white'
                      : 'bg-[#D9E7E8]/60 text-[#172B3A] hover:bg-[#D9E7E8]'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5 text-[#267C78]" />
                  <span>Admin & Fault Simulator</span>
                </Link>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Architecture Modal Button */}
              <button
                onClick={() => setIsArchModalOpen(true)}
                className="cursor-pointer hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#D9E7E8] bg-white text-[#172B3A] hover:border-[#267C78] hover:text-[#267C78] text-xs font-semibold shadow-2xs transition-all"
                title="View AWS Serverless Architecture & Step Functions Specs"
              >
                <Cpu className="w-4 h-4 text-[#267C78]" />
                <span>Architecture Specs</span>
              </button>

              {/* Cart Button */}
              <Link
                to="/cart"
                className="cursor-pointer relative p-2.5 rounded-xl bg-white border border-[#D9E7E8] text-[#172B3A] hover:border-[#267C78] hover:text-[#267C78] transition-colors shadow-2xs flex items-center justify-center"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#267C78] text-white text-[10px] font-bold flex items-center justify-center shadow-xs animate-scale-in">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden cursor-pointer p-2 rounded-xl text-[#172B3A] hover:bg-[#D9E7E8]/50"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#D9E7E8] bg-[#F6F4EF] px-4 pt-3 pb-6 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-white"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-white"
            >
              Shop Catalogue
            </Link>
            <Link
              to="/account/orders"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-white"
            >
              My Orders
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium bg-[#D9E7E8]/50 text-[#172B3A]"
            >
              Admin & Fault Simulator
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsArchModalOpen(true);
              }}
              className="cursor-pointer w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#267C78] bg-white border border-[#D9E7E8]"
            >
              AWS Architecture Specifications
            </button>
          </div>
        )}
      </header>

      {/* Architecture Modal */}
      <ArchitectureModal isOpen={isArchModalOpen} onClose={() => setIsArchModalOpen(false)} />
    </>
  );
};
