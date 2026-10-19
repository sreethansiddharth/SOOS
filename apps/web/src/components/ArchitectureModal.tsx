import React from 'react';
import { X, Server, Database, GitBranch, Bell, Shield, ArrowRight, ExternalLink } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#F6F4EF] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#D9E7E8] shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#172B3A] text-white p-6 rounded-t-3xl flex items-center justify-between border-b border-[#223c50] z-20">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D9E7E8] font-mono">
              BCSE355L — Cloud Architecture Design
            </div>
            <h2 className="text-xl font-display font-bold text-white mt-0.5">
              Serverless Order Orchestration & Fulfillment Architecture
            </h2>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Architectural Principle */}
          <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-xs">
            <h3 className="text-base font-display font-semibold text-[#172B3A] flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-[#267C78]" />
              Core Architecture: Asynchronous Step Functions vs Synchronous Express
            </h3>
            <p className="text-sm text-[#172B3A]/80 mt-2 leading-relaxed">
              In conventional e-commerce, checkout is handled inside a monolithic, synchronous HTTP handler.
              In this architecture, <span className="font-semibold text-[#172B3A]">API Gateway</span> receives the order request, authenticates the customer, verifies the <span className="font-mono text-xs bg-[#D9E7E8]/50 px-1 py-0.5 rounded">Idempotency-Key</span>, creates a durable pending order in DynamoDB, and immediately starts an <span className="font-semibold text-[#267C78]">AWS Step Functions</span> state machine execution before returning <code className="font-mono text-xs text-[#267C78] bg-[#D9E7E8]/50 px-1.5 py-0.5 rounded">202 Accepted</code>.
            </p>
          </div>

          {/* Component Responsibilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#267C78] font-semibold text-sm font-display mb-2">
                <Database className="w-4 h-4" />
                <span>DynamoDB & Atomic Invariants</span>
              </div>
              <ul className="text-xs text-[#172B3A]/80 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span><strong>Zero Overselling:</strong> Stock reservations execute via conditional writes (<code className="font-mono text-[11px] bg-stone-100 px-1">available &gt;= requested</code>).</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span><strong>Integer Paise (ADR-011):</strong> All money is stored in whole integer paise (e.g. ₹8,999 = 899900 paise) preventing IEEE-754 floating-point rounding bugs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span><strong>Idempotency Keys:</strong> Reusing the same key with identical payload returns the prior order without creating duplicate charges.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#267C78] font-semibold text-sm font-display mb-2">
                <Shield className="w-4 h-4" />
                <span>Saga Pattern & Compensating Transactions</span>
              </div>
              <ul className="text-xs text-[#172B3A]/80 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span><strong>Forward Actions:</strong> Validation &rarr; Reserve Inventory &rarr; Simulate Payment &rarr; Confirm Order &rarr; Dispatch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span><strong>Rollback Compensation:</strong> If payment declines, Step Functions catches the error and executes <code className="font-mono text-[11px] bg-amber-100 text-amber-900 px-1">ReleaseInventory</code>, safely returning held stock to the available pool.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#267C78] shrink-0 mt-0.5" />
                  <span><strong>Traceable Audit Trail:</strong> Every transition records an immutable <code className="font-mono text-[11px] bg-stone-100 px-1">OrderEvent</code> with correlation ID.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#267C78] font-semibold text-sm font-display mb-2">
                <Bell className="w-4 h-4" />
                <span>SQS, SNS & Asynchronous Buffering</span>
              </div>
              <p className="text-xs text-[#172B3A]/80 leading-relaxed">
                On order confirmation, events publish to <span className="font-semibold text-[#172B3A]">Amazon SNS</span> (<code className="font-mono text-[11px] bg-stone-100 px-1">order-events-topic</code>) for notification fanout. Background tasks like PDF invoice compilation and shipment generation are queued in <span className="font-semibold text-[#172B3A]">Amazon SQS</span> with a Dead-Letter Queue (DLQ) for poison-message isolation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#267C78] font-semibold text-sm font-display mb-2">
                <Server className="w-4 h-4" />
                <span>Private S3 & CloudWatch Observability</span>
              </div>
              <p className="text-xs text-[#172B3A]/80 leading-relaxed">
                Tax invoices are written directly into a private <span className="font-semibold text-[#172B3A]">Amazon S3</span> bucket accessible solely through short-lived presigned URLs. Workflow states, queue age, and execution latencies are tracked via <span className="font-semibold text-[#172B3A]">CloudWatch Metrics and Alarms</span>.
              </p>
            </div>
          </div>

          {/* Docs Links */}
          <div className="p-5 rounded-2xl bg-[#D9E7E8]/40 border border-[#D9E7E8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display font-medium text-sm text-[#172B3A]">
                Detailed Specifications & Architecture Decisions
              </h4>
              <p className="text-xs text-[#172B3A]/70 mt-0.5">
                All 10 project specifications and decision records are maintained in the <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded">/docs</code> directory.
              </p>
            </div>
            <a
              href="/admin"
              onClick={onClose}
              className="cursor-pointer px-4 py-2 bg-[#172B3A] text-white text-xs font-semibold rounded-xl hover:bg-[#267C78] transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Open Admin & Fault Simulator</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
