import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import { Order, OrderEvent } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { StepFunctionsTimeline } from '../components/StepFunctionsTimeline';
import { formatPaiseToINR } from '../utils/currency';
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ExternalLink,
  Shield,
  FileText,
  Truck,
  Copy,
  Check,
  Pause,
  Play,
  Terminal,
} from 'lucide-react';

export const OrderTrackingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [events, setEvents] = useState<OrderEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPolling, setIsPolling] = useState(true);
  const [copiedKey, setCopiedKey] = useState(false);

  const terminalStates = ['DISPATCHED', 'DELIVERED', 'CANCELLED', 'FAILED'];

  // Load Order and Events
  const fetchOrderDetails = async () => {
    if (!id) return;
    try {
      const data = await orderService.getOrderById(id);
      if (data) {
        setOrder(data);
        const evts = await orderService.getOrderEvents(id);
        setEvents(evts);

        // Stop polling if order has reached a definitive terminal state
        if (terminalStates.includes(data.status)) {
          setIsPolling(false);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  // Polling loop (every 1.5 seconds) while in non-terminal states
  useEffect(() => {
    if (!isPolling || !id) return;

    const interval = setInterval(() => {
      fetchOrderDetails();
    }, 1500);

    return () => clearInterval(interval);
  }, [isPolling, id]);

  const copyId = () => {
    if (!order) return;
    navigator.clipboard.writeText(order.orderId);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 1800);
  };

  if (isLoading && !order) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/3" />
        <div className="h-48 bg-gray-200 rounded-3xl" />
        <div className="h-64 bg-gray-100 rounded-3xl" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center bg-white rounded-3xl border border-[#D9E7E8]">
        <h2 className="text-xl font-display font-bold text-[#172B3A]">Order Not Found</h2>
        <p className="text-xs text-[#172B3A]/70 mt-2">
          Unable to locate order record with reference ID: <code className="font-mono">{id}</code>.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#172B3A] text-white text-xs font-semibold rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Store</span>
        </Link>
      </div>
    );
  }

  const isTerminal = terminalStates.includes(order.status);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D9E7E8] shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#D9E7E8]/70 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
                Durable Order Record
              </span>
              <StatusBadge status={order.status} size="lg" />
            </div>

            <div className="flex items-center gap-3 mt-1.5">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] tracking-tight">
                {order.orderId}
              </h1>
              <button
                onClick={copyId}
                className="cursor-pointer p-1.5 rounded-lg bg-[#F6F4EF] hover:bg-[#D9E7E8] text-[#172B3A] transition-colors"
                title="Copy Order ID"
              >
                {copiedKey ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <p className="text-xs text-[#172B3A]/60 mt-1">
              Created {new Date(order.createdAt).toLocaleString()} &bull; Correlation ID: <span className="font-mono">{order.correlationId}</span>
            </p>
          </div>

          {/* Polling & Refresh Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {!isTerminal && (
              <button
                onClick={() => setIsPolling(!isPolling)}
                className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isPolling
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                {isPolling ? (
                  <>
                    <Pause className="w-3.5 h-3.5 animate-pulse text-emerald-600" />
                    <span>Auto-Polling State (1.5s)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-stone-600" />
                    <span>Resume Auto-Polling</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={fetchOrderDetails}
              className="cursor-pointer px-3.5 py-2 rounded-xl bg-[#172B3A] hover:bg-[#267C78] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refresh Now</span>
            </button>
          </div>
        </div>

        {/* AWS Execution ARN & Metadata Banner */}
        <div className="p-4 rounded-2xl bg-[#172B3A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#D9E7E8]">
              Step Functions Workflow Execution ARN
            </div>
            <div className="font-mono text-emerald-300 text-[11px] break-all">
              {order.workflowExecutionArn}
            </div>
          </div>
          <Link
            to="/admin"
            className="shrink-0 text-xs text-[#D9E7E8] hover:text-white underline flex items-center gap-1"
          >
            <span>Inspect in Admin Console</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Step Functions State Machine Visualizer */}
      <StepFunctionsTimeline status={order.status} failureReason={order.failureReason} />

      {/* Tracking Number or Invoice Card (if generated) */}
      {(order.trackingNumber || order.invoiceUrl) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {order.trackingNumber && (
            <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#267C78] flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#172B3A]/60">
                  Carrier Tracking Code (Simulated)
                </div>
                <div className="font-mono font-bold text-sm text-[#172B3A] mt-0.5">
                  {order.trackingNumber}
                </div>
                <div className="text-[11px] text-[#267C78] mt-0.5">Dispatched to Regional Sort Facility</div>
              </div>
            </div>
          )}

          {order.invoiceUrl && (
            <div className="p-5 rounded-2xl bg-white border border-[#D9E7E8] shadow-2xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#172B3A]/60">
                    S3 Private Storage Document
                  </div>
                  <div className="font-semibold text-xs text-[#172B3A] mt-0.5">
                    GST Compliant Tax Invoice
                  </div>
                  <div className="text-[11px] text-[#172B3A]/60 font-mono">Presigned short-lived URL</div>
                </div>
              </div>
              <a
                href="#download-simulated"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Private S3 Document Access verified for Order ${order.orderId}. Authorized presigned GET request simulated.`);
                }}
                className="px-3 py-1.5 rounded-xl bg-[#172B3A] hover:bg-[#267C78] text-white text-xs font-semibold transition-colors shrink-0"
              >
                Download PDF
              </a>
            </div>
          )}
        </div>
      )}

      {/* Grid: Order Items Snapshot & Chronological Audit Event History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Snapshotted Items & Address */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-[#D9E7E8] shadow-2xs space-y-4">
            <h3 className="font-display font-bold text-base text-[#172B3A] pb-3 border-b border-[#D9E7E8]/60">
              Purchased Items Snapshot
            </h3>

            <div className="divide-y divide-[#D9E7E8]/50 space-y-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-semibold text-[#172B3A]">{item.nameSnapshot}</div>
                    <div className="text-[11px] text-[#172B3A]/60">
                      Qty: {item.quantity} &times; {formatPaiseToINR(item.unitPricePaise)}
                    </div>
                  </div>
                  <div className="font-display font-bold text-sm text-[#172B3A]">
                    {formatPaiseToINR(item.unitPricePaise * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D9E7E8] space-y-1.5 text-xs">
              <div className="flex justify-between text-[#172B3A]/70">
                <span>Subtotal</span>
                <span className="font-mono">{formatPaiseToINR(order.subtotalPaise)}</span>
              </div>
              <div className="flex justify-between text-[#172B3A]/70">
                <span>GST (18%)</span>
                <span className="font-mono">{formatPaiseToINR(order.taxPaise)}</span>
              </div>
              <div className="flex justify-between text-[#172B3A]/70">
                <span>Shipping</span>
                <span className="font-mono">{order.shippingPaise === 0 ? 'FREE' : formatPaiseToINR(order.shippingPaise)}</span>
              </div>
              <div className="pt-2 border-t border-[#D9E7E8]/60 flex justify-between text-sm font-bold text-[#172B3A]">
                <span>Total</span>
                <span className="font-display">{formatPaiseToINR(order.totalPaise)}</span>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-3xl p-6 border border-[#D9E7E8] shadow-2xs space-y-2 text-xs">
            <h4 className="font-display font-bold text-sm text-[#172B3A] mb-2">
              Delivery Destination
            </h4>
            <div className="text-[#172B3A] font-semibold">{order.shippingAddress.recipient}</div>
            <div className="text-[#172B3A]/70">{order.shippingAddress.line1}</div>
            <div className="text-[#172B3A]/70">
              {order.shippingAddress.city}, {order.shippingAddress.state} — {order.shippingAddress.postalCode}
            </div>
            <div className="text-[#172B3A]/60 font-mono pt-1">Phone: {order.shippingAddress.phone}</div>
          </div>
        </div>

        {/* Right: Chronological Audit Events Stream */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E7E8] shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9E7E8]/60">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#267C78]" />
              <h3 className="font-display font-bold text-base text-[#172B3A]">
                Audit Event History Stream (DynamoDB OrderEvents)
              </h3>
            </div>
            <span className="text-[10px] font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
              {events.length} Records
            </span>
          </div>

          <p className="text-xs text-[#172B3A]/70 leading-relaxed">
            Every state transition is persisted with an immutable event ID, correlation ID, and actor component identifier.
          </p>

          <div className="space-y-3 pt-2">
            {events.map((evt) => (
              <div
                key={evt.eventId}
                className="p-3.5 rounded-xl border border-[#D9E7E8]/70 bg-[#F6F4EF]/50 hover:bg-[#F6F4EF] transition-colors space-y-1.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#172B3A] text-xs">
                      {evt.eventType}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#172B3A] text-white">
                      {evt.source}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#172B3A]/50">
                    {new Date(evt.occurredAt).toLocaleTimeString()}
                  </span>
                </div>

                <p className="text-xs text-[#172B3A]/80 leading-relaxed">{evt.details}</p>

                <div className="flex items-center gap-2 text-[10px] font-mono text-[#172B3A]/50 pt-1 border-t border-[#D9E7E8]/40">
                  <span>From: {evt.fromStatus || 'NULL'}</span>
                  <span>&rarr;</span>
                  <span className="font-semibold text-[#267C78]">To: {evt.toStatus}</span>
                  <span className="ml-auto text-[9px] text-gray-400">ID: {evt.eventId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
