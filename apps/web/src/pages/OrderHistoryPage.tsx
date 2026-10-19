import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { formatPaiseToINR } from '../utils/currency';
import { ShoppingBag, ArrowRight, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export const OrderHistoryPage: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      orderService.getCustomerOrders(user.id).then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-48" />
        <div className="h-32 bg-gray-100 rounded-3xl" />
        <div className="h-32 bg-gray-100 rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#D9E7E8]">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#267C78]">
          Customer Account Area
        </span>
        <h1 className="text-3xl font-display font-bold text-[#172B3A] mt-1">
          Your Order History
        </h1>
        <p className="text-xs sm:text-sm text-[#172B3A]/70 mt-1">
          Authenticated customer orders retrieved from DynamoDB customer index
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="max-w-md mx-auto my-16 p-8 text-center bg-white rounded-3xl border border-[#D9E7E8] shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#D9E7E8]/50 text-[#267C78] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="font-display font-semibold text-lg text-[#172B3A]">
            No Orders Placed Yet
          </h3>
          <p className="text-xs text-[#172B3A]/70 max-w-xs mx-auto leading-relaxed">
            When you complete an order, its state machine execution and delivery status will appear here.
          </p>
          <Link
            to="/shop"
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#172B3A] text-white text-xs font-semibold rounded-xl hover:bg-[#267C78] transition-colors"
          >
            <span>Explore Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white rounded-3xl p-6 border border-[#D9E7E8] shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display font-bold text-base text-[#172B3A]">
                    {order.orderId}
                  </span>
                  <StatusBadge status={order.status} size="sm" />
                </div>

                <div className="text-xs text-[#172B3A]/60 flex items-center gap-3">
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                  <span>&bull;</span>
                  <span>{order.items.length} {order.items.length === 1 ? 'item' : 'items'}</span>
                  <span>&bull;</span>
                  <span className="font-mono">{order.correlationId}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {order.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-[#F6F4EF] px-2.5 py-1 rounded-lg text-[#172B3A]/80 border border-[#D9E7E8]/60"
                    >
                      {item.quantity} &times; {item.nameSnapshot}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-[#D9E7E8]/60">
                <div className="text-right">
                  <div className="font-display font-extrabold text-lg text-[#172B3A]">
                    {formatPaiseToINR(order.totalPaise)}
                  </div>
                  <div className="text-[10px] font-mono text-[#267C78]">
                    {order.totalPaise} paise
                  </div>
                </div>

                <Link
                  to={`/orders/${order.orderId}`}
                  className="px-4 py-2 rounded-xl bg-[#172B3A] hover:bg-[#267C78] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Track Order</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
