import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Cpu, Shield, ArrowRight, UserCheck, Lock } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginAsDemoCustomer, loginAsDemoAdmin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/shop');
  };

  const handleDemoCustomer = async () => {
    await loginAsDemoCustomer();
    navigate('/shop');
  };

  const handleDemoAdmin = async () => {
    await loginAsDemoAdmin();
    navigate('/admin');
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4 space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-[#172B3A] text-white flex items-center justify-center mx-auto shadow-md">
          <Cpu className="w-6 h-6 text-[#D9E7E8]" />
        </div>
        <h1 className="text-2xl font-display font-bold text-[#172B3A]">
          Sign in to Aether
        </h1>
        <p className="text-xs text-[#172B3A]/70">
          Enter credentials or choose an instant evaluation identity below
        </p>
      </div>

      {/* Quick Evaluation Logins */}
      <div className="bg-white rounded-3xl p-6 border border-[#D9E7E8] shadow-2xs space-y-3">
        <div className="text-xs font-semibold text-[#172B3A] uppercase tracking-wider mb-2">
          Fast Evaluation Access:
        </div>
        <button
          onClick={handleDemoCustomer}
          className="cursor-pointer w-full py-2.5 px-4 rounded-xl bg-[#F6F4EF] hover:bg-[#D9E7E8] text-[#172B3A] text-xs font-semibold flex items-center justify-between transition-colors border border-[#D9E7E8]"
        >
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#267C78]" />
            <span>Sign in as Demo Customer (Rahul Sharma)</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-[#172B3A]/50" />
        </button>

        <button
          onClick={handleDemoAdmin}
          className="cursor-pointer w-full py-2.5 px-4 rounded-xl bg-[#172B3A] hover:bg-[#223c50] text-white text-xs font-semibold flex items-center justify-between transition-colors"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Sign in as Cloud Architect (Admin)</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-white/50" />
        </button>
      </div>

      {/* Standard Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 border border-[#D9E7E8] shadow-2xs space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#172B3A] mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#172B3A] mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-3 px-4 rounded-xl bg-[#172B3A] hover:bg-[#267C78] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          <span>Sign In</span>
        </button>

        <div className="text-center text-xs text-[#172B3A]/60 pt-2">
          Don&rsquo;t have an account?{' '}
          <Link to="/register" className="text-[#267C78] font-semibold hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};
