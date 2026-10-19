import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Shield, Database, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172B3A] text-[#F6F4EF] pt-16 pb-12 border-t border-[#223c50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#267C78] flex items-center justify-center text-white shadow-md">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                AETHER
              </span>
            </div>
            <p className="text-xs text-[#D9E7E8]/80 leading-relaxed">
              Precision audio, desk architecture, and computing hardware engineered for deep focus. Backed by a serverless AWS event-driven order processing engine.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#D9E7E8]/60">
              BCSE355L — Cloud Architecture Design
            </div>
          </div>

          {/* E-Commerce Routes */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Storefront
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9E7E8]/80">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=audio" className="hover:text-white transition-colors">
                  Acoustics & Audio
                </Link>
              </li>
              <li>
                <Link to="/shop?category=keyboards" className="hover:text-white transition-colors">
                  Mechanical Keyboards
                </Link>
              </li>
              <li>
                <Link to="/shop?category=desk-setup" className="hover:text-white transition-colors">
                  Desk Architecture
                </Link>
              </li>
              <li>
                <Link to="/account/orders" className="hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Cloud Architecture & AWS Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Cloud Architecture
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9E7E8]/80">
              <li className="flex items-center gap-2">
                <Cloud className="w-3.5 h-3.5 text-[#267C78]" />
                <span>AWS Step Functions (Saga)</span>
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Amazon DynamoDB (Conditional Writes)</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Amazon API Gateway + Lambda</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Amazon SQS (FIFO) + Amazon SNS</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#267C78]" />
                <span>Private S3 + CloudWatch Alarms</span>
              </li>
            </ul>
          </div>

          {/* Admin & Verification */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Operations & Demo
            </h4>
            <p className="text-xs text-[#D9E7E8]/70 leading-relaxed mb-4">
              Inspect order states, inject simulated card failures, and observe Saga rollback transactions live.
            </p>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#267C78] hover:bg-[#349692] text-white text-xs font-semibold transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Admin Operations Center</span>
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9E7E8]/60 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Aether Electronics. University Project Demonstration.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Integer Paise Architecture (ADR-011)</span>
            <span>&bull;</span>
            <span>Idempotent Checkouts</span>
            <span>&bull;</span>
            <span>Zero Overselling</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
