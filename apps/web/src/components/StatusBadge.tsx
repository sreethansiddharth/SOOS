import React from 'react';
import { OrderStatus } from '../types';

interface StatusBadgeProps {
  status: OrderStatus;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getStatusConfig = (s: OrderStatus) => {
    switch (s) {
      case 'PENDING':
        return {
          label: 'Order Submitted',
          bg: 'bg-amber-50',
          text: 'text-amber-800',
          border: 'border-amber-200',
          dot: 'bg-amber-500',
        };
      case 'VALIDATING':
        return {
          label: 'Validating Order',
          bg: 'bg-blue-50',
          text: 'text-blue-800',
          border: 'border-blue-200',
          dot: 'bg-blue-500',
        };
      case 'INVENTORY_RESERVED':
        return {
          label: 'Inventory Reserved',
          bg: 'bg-indigo-50',
          text: 'text-indigo-800',
          border: 'border-indigo-200',
          dot: 'bg-indigo-500',
        };
      case 'PAYMENT_PENDING':
        return {
          label: 'Payment Processing',
          bg: 'bg-purple-50',
          text: 'text-purple-800',
          border: 'border-purple-200',
          dot: 'bg-purple-500',
        };
      case 'CONFIRMED':
        return {
          label: 'Order Confirmed',
          bg: 'bg-emerald-50',
          text: 'text-emerald-800',
          border: 'border-emerald-200',
          dot: 'bg-emerald-500',
        };
      case 'FULFILLMENT_PENDING':
        return {
          label: 'Fulfillment Queued',
          bg: 'bg-sky-50',
          text: 'text-sky-800',
          border: 'border-sky-200',
          dot: 'bg-sky-500',
        };
      case 'SHIPMENT_CREATED':
        return {
          label: 'Shipment Created',
          bg: 'bg-teal-50',
          text: 'text-teal-800',
          border: 'border-teal-200',
          dot: 'bg-teal-500',
        };
      case 'DISPATCHED':
        return {
          label: 'Dispatched (Simulated)',
          bg: 'bg-teal-50',
          text: 'text-teal-900',
          border: 'border-teal-300',
          dot: 'bg-teal-600',
        };
      case 'DELIVERED':
        return {
          label: 'Delivered',
          bg: 'bg-green-50',
          text: 'text-green-800',
          border: 'border-green-200',
          dot: 'bg-green-600',
        };
      case 'PAYMENT_FAILED':
        return {
          label: 'Payment Declined',
          bg: 'bg-rose-50',
          text: 'text-rose-800',
          border: 'border-rose-200',
          dot: 'bg-rose-500',
        };
      case 'CANCELLATION_PENDING':
        return {
          label: 'Releasing Stock (Compensating)',
          bg: 'bg-orange-50',
          text: 'text-orange-800',
          border: 'border-orange-200',
          dot: 'bg-orange-500',
        };
      case 'CANCELLED':
        return {
          label: 'Cancelled (Compensated)',
          bg: 'bg-stone-100',
          text: 'text-stone-700',
          border: 'border-stone-300',
          dot: 'bg-stone-500',
        };
      case 'FAILED':
      default:
        return {
          label: 'Failed',
          bg: 'bg-red-50',
          text: 'text-red-800',
          border: 'border-red-200',
          dot: 'bg-red-500',
        };
    }
  };

  const config = getStatusConfig(status);

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3.5 py-1.5 text-sm',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${config.bg} ${config.text} ${config.border} ${sizeClasses}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
      {config.label}
    </span>
  );
};
