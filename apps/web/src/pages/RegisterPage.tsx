import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Cpu, ArrowRight, UserPlus } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, email);
    navigate('/shop');
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4 space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-[#172B3A] text-white flex items-center justify-center mx-auto shadow-md">
          <Cpu className="w-6 h-6 text-[#D9E7E8]" />
        </div>
        <h1 className="text-2xl font-display font-bold text-[#172B3A]">
          Create Customer Account
        </h1>
        <p className="text-xs text-[#172B3A]/70">
          Join Aether for serverless order tracking and persistent history
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D9E7E8] shadow-2xs space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#172B3A] mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] focus:bg-white focus:outline-hidden focus:border-[#267C78]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#172B3A] mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@domain.com"
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
          <UserPlus className="w-4 h-4" />
          <span>Register Account</span>
        </button>

        <div className="text-center text-xs text-[#172B3A]/60 pt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-[#267C78] font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};
