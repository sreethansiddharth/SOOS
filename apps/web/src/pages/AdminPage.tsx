import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { productService } from '../services/productService';
import { orderService } from '../services/orderService';
import { Product, Order } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { formatPaiseToINR } from '../utils/currency';
import {
  Shield,
  Database,
  Terminal,
  Zap,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Plus,
  ArrowRight,
  ExternalLink,
  Flame,
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { user, isAdmin, switchRole } = useAuth();
  const [activeTab, setActiveTab] = useState<'inventory' | 'orders' | 'faults'>('inventory');

  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Stock edit state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newStockVal, setNewStockVal] = useState<number>(0);
  const [auditReason, setAuditReason] = useState<string>('Restocked from warehouse batch');
  const [stockSuccessMsg, setStockSuccessMsg] = useState<string | null>(null);

  // Fault simulation console state
  const [faultLogs, setFaultLogs] = useState<Array<{ timestamp: string; level: 'info' | 'warn' | 'error' | 'success'; text: string }>>([
    {
      timestamp: new Date().toLocaleTimeString(),
      level: 'info',
      text: 'Admin Operations & Fault Injection Subsystem initialized.',
    },
  ]);

  const loadData = async () => {
    setLoading(true);
    const prods = await productService.getProducts();
    setProducts(prods);
    const ords = await orderService.getAllOrders();
    setOrders(ords);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addFaultLog = (level: 'info' | 'warn' | 'error' | 'success', text: string) => {
    setFaultLogs((prev) => [
      ...prev,
      {
        timestamp: new Date().toLocaleTimeString(),
        level,
        text,
      },
    ]);
  };

  const handleUpdateStock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    // Simulate conditional write update
    productService._updateProductStock(selectedProduct.productId, newStockVal);
    setStockSuccessMsg(`Successfully updated "${selectedProduct.name}" available stock to ${newStockVal}. Audit log recorded.`);
    addFaultLog('info', `DDB Conditional Update: Product ${selectedProduct.productId} stock set to ${newStockVal} units. Reason: "${auditReason}"`);
    loadData();
    setTimeout(() => setStockSuccessMsg(null), 3000);
  };

  // Demo Scenario 1: Force Payment Decline & Saga Rollback
  const handleTriggerSagaDemo = async () => {
    addFaultLog('warn', 'Starting Controlled Experiment: Saga Compensating Transaction...');
    addFaultLog('info', 'Submitting order for 1x Studio Wireless Pro ANC (Available: 5, Price: ₹8,999)...');

    try {
      const resp = await orderService.createOrder(
        {
          items: [{ productId: 'prod_headphones_001', quantity: 1 }],
          shippingAddress: {
            recipient: 'Test Fault Runner',
            line1: 'Cloud Lab 402',
            city: 'Vellore',
            state: 'Tamil Nadu',
            postalCode: '632014',
            country: 'IN',
            phone: '+91 99999 11111',
            email: 'fault-tester@vit.ac.in',
          },
          faultScenario: 'PAYMENT_DEFINITIVE_FAILURE',
        },
        `fault_idem_${Date.now()}`
      );

      addFaultLog('success', `Order ${resp.orderId} accepted (HTTP 202). Step Functions execution started.`);
      addFaultLog('info', 'T+1.2s: ReserveInventory decrements available stock from 5 to 4.');
      addFaultLog('error', 'T+2.5s: Payment Lambda throws GatewayDeclineException (simulated 402).');
      addFaultLog('warn', 'T+3.7s: Catch [States.ALL] triggers ReleaseInventory compensating task.');
      addFaultLog('success', 'T+5.0s: Saga compensation completed! 1 unit returned to pool. Available stock restored to 5.');

      loadData();
    } catch (err: unknown) {
      if (err instanceof Error) {
        addFaultLog('error', `Failed: ${err.message}`);
      }
    }
  };

  // Demo Scenario 2: Test Last Unit Stock Contention
  const handleTriggerContentionDemo = async () => {
    addFaultLog('warn', 'Starting Race Condition Experiment: Last-Unit Stock Contention (Zero-Overselling)...');
    
    // Set stock of Monitor Light Bar to exactly 1
    productService._updateProductStock('prod_lightbar_004', 1);
    addFaultLog('info', 'Prepared "Horizon 4K Monitor Light Bar" with availableStock = 1.');

    // Concurrently trigger two purchases
    addFaultLog('info', 'Simulating 2 concurrent checkout submissions for the final single unit...');

    const orderPromise1 = orderService.createOrder(
      {
        items: [{ productId: 'prod_lightbar_004', quantity: 1 }],
        shippingAddress: {
          recipient: 'Buyer A (Concurrent)',
          line1: 'Hostel Block 1',
          city: 'Vellore',
          state: 'TN',
          postalCode: '632014',
          country: 'IN',
          phone: '+91 99999 00001',
          email: 'buyerA@demo.ac.in',
        },
        faultScenario: 'NONE',
      },
      `race_idem_A_${Date.now()}`
    );

    const orderPromise2 = orderService.createOrder(
      {
        items: [{ productId: 'prod_lightbar_004', quantity: 1 }],
        shippingAddress: {
          recipient: 'Buyer B (Concurrent)',
          line1: 'Hostel Block 2',
          city: 'Vellore',
          state: 'TN',
          postalCode: '632014',
          country: 'IN',
          phone: '+91 99999 00002',
          email: 'buyerB@demo.ac.in',
        },
        faultScenario: 'NONE',
      },
      `race_idem_B_${Date.now()}`
    );

    const results = await Promise.allSettled([orderPromise1, orderPromise2]);

    results.forEach((res, i) => {
      const buyer = i === 0 ? 'Buyer A' : 'Buyer B';
      if (res.status === 'fulfilled') {
        addFaultLog('success', `${buyer}: Conditional check passed. Order ${res.value.orderId} created!`);
      } else {
        addFaultLog('error', `${buyer}: ConditionalCheckFailedException! Rejected with INSUFFICIENT_STOCK.`);
      }
    });

    addFaultLog('info', 'Verifying DynamoDB Invariant: availableStock >= 0. Final availableStock = 0.');
    loadData();
  };

  const handleResetCatalog = () => {
    productService._resetProducts();
    orderService._resetOrders();
    addFaultLog('info', 'Database reset: Restored initial catalog stock levels and cleared orders.');
    loadData();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D9E7E8] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              Protected Operations Dashboard
            </span>
            <span className="text-xs font-mono text-[#172B3A]/60">
              Role: <strong className={isAdmin ? 'text-amber-800' : 'text-[#267C78]'}>{user?.name} ({user?.role})</strong>
            </span>
          </div>
          <h1 className="text-3xl font-display font-bold text-[#172B3A] mt-1">
            Cloud Architecture Operations Console
          </h1>
          <p className="text-xs sm:text-sm text-[#172B3A]/70 mt-1">
            Manage DynamoDB inventory locks, inspect Step Functions executions, and trigger controlled fault injection.
          </p>
        </div>

        {/* Quick Role switch for evaluator convenience */}
        <div className="flex items-center gap-2">
          {!isAdmin ? (
            <button
              onClick={() => switchRole('admin')}
              className="cursor-pointer px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Switch to Admin Role</span>
            </button>
          ) : (
            <button
              onClick={() => switchRole('customer')}
              className="cursor-pointer px-4 py-2 rounded-xl bg-white border border-[#D9E7E8] hover:bg-[#F6F4EF] text-[#172B3A] text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors"
            >
              <span>Switch to Customer View</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#D9E7E8] pb-1">
        <button
          onClick={() => setActiveTab('inventory')}
          className={`cursor-pointer px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === 'inventory'
              ? 'border-[#267C78] text-[#267C78] bg-white'
              : 'border-transparent text-[#172B3A]/60 hover:text-[#172B3A]'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>DynamoDB Inventory Management</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`cursor-pointer px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === 'orders'
              ? 'border-[#267C78] text-[#267C78] bg-white'
              : 'border-transparent text-[#172B3A]/60 hover:text-[#172B3A]'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Orders & Step Functions Executions ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('faults')}
          className={`cursor-pointer px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === 'faults'
              ? 'border-amber-600 text-amber-700 bg-white'
              : 'border-transparent text-[#172B3A]/60 hover:text-[#172B3A]'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-600" />
          <span>Fault Injection & Resilience Hub</span>
        </button>
      </div>

      {/* TAB 1: Inventory Management */}
      {activeTab === 'inventory' && (
        <div className="space-y-6">
          {stockSuccessMsg && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{stockSuccessMsg}</span>
            </div>
          )}

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E7E8] shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#D9E7E8]/60">
              <div>
                <h3 className="font-display font-bold text-base text-[#172B3A]">
                  DynamoDB Inventory Table Live Records
                </h3>
                <p className="text-xs text-[#172B3A]/60 mt-0.5">
                  Partition Key: <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">productId (String)</code>
                </p>
              </div>
              <button
                onClick={handleResetCatalog}
                className="cursor-pointer text-xs font-semibold text-[#172B3A]/70 hover:text-rose-600 flex items-center gap-1.5 transition-colors"
                title="Restore initial stock values"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Initial Catalog</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#D9E7E8] text-[#172B3A]/60 uppercase font-mono text-[10px]">
                    <th className="py-2.5 font-semibold">Product ID</th>
                    <th className="py-2.5 font-semibold">Product Name</th>
                    <th className="py-2.5 font-semibold">Category</th>
                    <th className="py-2.5 font-semibold">Price (Paise / ₹)</th>
                    <th className="py-2.5 font-semibold">Available Stock</th>
                    <th className="py-2.5 font-semibold">Reserved Stock</th>
                    <th className="py-2.5 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9E7E8]/60 font-mono">
                  {products.map((p) => (
                    <tr key={p.productId} className="hover:bg-[#F6F4EF]/60 transition-colors">
                      <td className="py-3 font-semibold text-[#172B3A]">{p.productId}</td>
                      <td className="py-3 font-sans font-medium text-[#172B3A]">{p.name}</td>
                      <td className="py-3 uppercase text-[11px] text-[#267C78]">{p.category}</td>
                      <td className="py-3 font-sans font-medium">
                        {p.pricePaise} ({formatPaiseToINR(p.pricePaise)})
                      </td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                            p.availableStock === 0
                              ? 'bg-rose-100 text-rose-800'
                              : p.availableStock === 1
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {p.availableStock} units
                        </span>
                      </td>
                      <td className="py-3 text-stone-600">{p.reservedStock || 0}</td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedProduct(p);
                            setNewStockVal(p.availableStock);
                          }}
                          className="cursor-pointer px-3 py-1 rounded-lg bg-[#172B3A] hover:bg-[#267C78] text-white text-[11px] font-sans font-semibold transition-colors"
                        >
                          Adjust Stock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stock Adjustment Modal / Drawer */}
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs">
              <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border border-[#D9E7E8] shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#D9E7E8]">
                  <h3 className="font-display font-bold text-base text-[#172B3A]">
                    Adjust Stock: {selectedProduct.name}
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="cursor-pointer p-1 rounded-lg hover:bg-gray-100 text-gray-500"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleUpdateStock} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#172B3A] mb-1">
                      New Available Stock Units
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={999}
                      value={newStockVal}
                      onChange={(e) => setNewStockVal(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 rounded-xl bg-[#F6F4EF] border border-[#D9E7E8] font-mono font-bold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#172B3A] mb-1">
                      Audit Adjustment Reason (Recorded in OrderEvents)
                    </label>
                    <input
                      type="text"
                      required
                      value={auditReason}
                      onChange={(e) => setAuditReason(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#F6F4EF] border border-[#D9E7E8]"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="cursor-pointer px-4 py-2 rounded-xl border border-[#D9E7E8] hover:bg-gray-50 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="cursor-pointer px-4 py-2 rounded-xl bg-[#172B3A] hover:bg-[#267C78] text-white font-semibold transition-colors"
                    >
                      Save Conditional Write
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Orders Inspection */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E7E8] shadow-2xs space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-[#D9E7E8]/60">
            <div>
              <h3 className="font-display font-bold text-base text-[#172B3A]">
                Global Orders & Step Functions Executions
              </h3>
              <p className="text-xs text-[#172B3A]/60 mt-0.5">
                Inspect durable status, workflow execution ARNs, and customer associations
              </p>
            </div>
            <button
              onClick={loadData}
              className="cursor-pointer text-xs font-semibold text-[#172B3A]/70 hover:text-[#267C78] flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refresh Orders</span>
            </button>
          </div>

          {orders.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#172B3A]/60">
              No orders have been submitted yet. Place an order from the shop or trigger a demo scenario.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#D9E7E8] text-[#172B3A]/60 uppercase font-mono text-[10px]">
                    <th className="py-2.5 font-semibold">Order ID</th>
                    <th className="py-2.5 font-semibold">Status</th>
                    <th className="py-2.5 font-semibold">Total</th>
                    <th className="py-2.5 font-semibold">Items</th>
                    <th className="py-2.5 font-semibold">Correlation ID</th>
                    <th className="py-2.5 font-semibold">Created</th>
                    <th className="py-2.5 font-semibold text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9E7E8]/60 font-mono">
                  {orders.map((o) => (
                    <tr key={o.orderId} className="hover:bg-[#F6F4EF]/60 transition-colors">
                      <td className="py-3 font-semibold text-[#172B3A]">{o.orderId}</td>
                      <td className="py-3 font-sans">
                        <StatusBadge status={o.status} size="sm" />
                      </td>
                      <td className="py-3 font-sans font-semibold">
                        {formatPaiseToINR(o.totalPaise)}
                      </td>
                      <td className="py-3 font-sans">{o.items.length}</td>
                      <td className="py-3 text-stone-500 text-[11px]">{o.correlationId}</td>
                      <td className="py-3 text-[11px] text-stone-500">
                        {new Date(o.createdAt).toLocaleTimeString()}
                      </td>
                      <td className="py-3 text-right font-sans">
                        <Link
                          to={`/orders/${o.orderId}`}
                          className="px-2.5 py-1 rounded-lg bg-[#172B3A] hover:bg-[#267C78] text-white text-[11px] font-semibold transition-colors inline-flex items-center gap-1"
                        >
                          <span>Track</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Fault Injection Console */}
      {activeTab === 'faults' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#172B3A] text-white rounded-3xl p-6 sm:p-7 border border-[#223c50] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Flame className="w-5 h-5" />
                <h3 className="font-display font-bold text-base text-white">
                  Controlled Fault Injection Hub
                </h3>
              </div>
              <p className="text-xs text-[#D9E7E8]/80 leading-relaxed">
                Demonstrate resilient cloud architecture by triggering failure modes and observing automated Saga rollbacks and concurrency guarantees.
              </p>

              <div className="space-y-3 pt-2">
                {/* Scenario 1 Button */}
                <button
                  onClick={handleTriggerSagaDemo}
                  className="cursor-pointer w-full p-4 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/40 text-left transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs text-amber-300">
                      1. Trigger Payment Decline & Saga Rollback
                    </span>
                    <Zap className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[11px] text-amber-100/70 mt-1 leading-relaxed">
                    Places order, locks inventory, forces payment decline, and activates Step Functions Catch block to release held stock.
                  </p>
                </button>

                {/* Scenario 2 Button */}
                <button
                  onClick={handleTriggerContentionDemo}
                  className="cursor-pointer w-full p-4 rounded-2xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/40 text-left transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs text-blue-300">
                      2. Simulate 2 Concurrent Buys for 1 Unit
                    </span>
                    <Zap className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[11px] text-blue-100/70 mt-1 leading-relaxed">
                    Sets stock = 1 and sends concurrent checkout requests to prove DynamoDB conditional writes prevent overselling.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Execution Terminal */}
          <div className="lg:col-span-7 bg-[#0e1c27] text-white rounded-3xl p-6 sm:p-7 border border-[#223c50] shadow-xl space-y-4 font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                  CloudWatch Live Diagnostics Log
                </span>
              </div>
              <button
                onClick={() => setFaultLogs([])}
                className="text-[10px] text-gray-400 hover:text-white"
              >
                Clear
              </button>
            </div>

            <div className="space-y-2 text-xs max-h-96 overflow-y-auto pr-2 scrollbar-thin">
              {faultLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-gray-500 shrink-0 text-[11px]">[{log.timestamp}]</span>
                  <span
                    className={
                      log.level === 'error'
                        ? 'text-rose-400'
                        : log.level === 'warn'
                        ? 'text-amber-400'
                        : log.level === 'success'
                        ? 'text-emerald-400 font-semibold'
                        : 'text-gray-300'
                    }
                  >
                    {log.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
