import React from 'react';
import { OrderStatus } from '../types';
import { CheckCircle2, Clock, XCircle, RotateCcw, ArrowRight, ShieldCheck, CreditCard, Box, Truck } from 'lucide-react';

interface StepFunctionsTimelineProps {
  status: OrderStatus;
  failureReason?: string;
}

export const StepFunctionsTimeline: React.FC<StepFunctionsTimelineProps> = ({
  status,
  failureReason,
}) => {
  // Define the ordered forward sequence in the Step Functions state machine
  const steps = [
    {
      id: 'validate',
      name: 'Validate Order',
      desc: 'Verify product catalog, bounds & hash',
      icon: ShieldCheck,
      isCompleted: [
        'VALIDATING',
        'INVENTORY_RESERVED',
        'PAYMENT_PENDING',
        'PAYMENT_UNKNOWN',
        'PAYMENT_FAILED',
        'CONFIRMED',
        'FULFILLMENT_PENDING',
        'SHIPMENT_CREATED',
        'DISPATCHED',
        'DELIVERED',
        'CANCELLATION_PENDING',
        'CANCELLED',
      ].includes(status),
      isActive: status === 'PENDING' || status === 'VALIDATING',
      isFailed: status === 'FAILED' && !failureReason?.includes('Payment'),
    },
    {
      id: 'inventory',
      name: 'Reserve Inventory',
      desc: 'Atomic conditional write in DynamoDB',
      icon: Box,
      isCompleted: [
        'INVENTORY_RESERVED',
        'PAYMENT_PENDING',
        'PAYMENT_UNKNOWN',
        'PAYMENT_FAILED',
        'CONFIRMED',
        'FULFILLMENT_PENDING',
        'SHIPMENT_CREATED',
        'DISPATCHED',
        'DELIVERED',
        'CANCELLATION_PENDING',
        'CANCELLED',
      ].includes(status),
      isActive: status === 'INVENTORY_RESERVED',
      isFailed: false,
    },
    {
      id: 'payment',
      name: 'Simulated Payment',
      desc: 'Idempotent card authorization gateway',
      icon: CreditCard,
      isCompleted: [
        'CONFIRMED',
        'FULFILLMENT_PENDING',
        'SHIPMENT_CREATED',
        'DISPATCHED',
        'DELIVERED',
      ].includes(status),
      isActive: status === 'PAYMENT_PENDING',
      isFailed: ['PAYMENT_FAILED', 'CANCELLATION_PENDING', 'CANCELLED'].includes(status),
    },
    {
      id: 'confirm',
      name: 'Order Confirmation',
      desc: 'Persist state & fanout to Amazon SNS',
      icon: CheckCircle2,
      isCompleted: [
        'CONFIRMED',
        'FULFILLMENT_PENDING',
        'SHIPMENT_CREATED',
        'DISPATCHED',
        'DELIVERED',
      ].includes(status),
      isActive: status === 'CONFIRMED',
      isFailed: false,
    },
    {
      id: 'shipment',
      name: 'Shipment Initiation',
      desc: 'SQS background worker creates tracking',
      icon: Truck,
      isCompleted: ['SHIPMENT_CREATED', 'DISPATCHED', 'DELIVERED'].includes(status),
      isActive: status === 'FULFILLMENT_PENDING',
      isFailed: false,
    },
  ];

  const isCompensated = ['CANCELLATION_PENDING', 'CANCELLED'].includes(status);

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#D9E7E8] shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#D9E7E8]/60 gap-2">
        <div>
          <h3 className="font-display font-semibold text-lg text-[#172B3A] flex items-center gap-2">
            <span>AWS Step Functions Execution Graph</span>
            <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-[#D9E7E8]/50 text-[#172B3A]">
              Standard Workflow
            </span>
          </h3>
          <p className="text-xs text-[#172B3A]/70 mt-0.5">
            Observing atomic states, retries, conditional DynamoDB locks & Saga compensation
          </p>
        </div>

        {isCompensated && (
          <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-xs font-medium">
            <RotateCcw className="w-3.5 h-3.5 text-amber-600 animate-spin" />
            <span>Saga Compensation Active</span>
          </div>
        )}
      </div>

      {/* Main forward flow steps */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            let statusColor = 'bg-[#F6F4EF] text-[#172B3A]/50 border-gray-200';
            let badgeText = 'Pending';
            let badgeBg = 'bg-gray-100 text-gray-500';

            if (step.isCompleted) {
              statusColor = 'bg-emerald-50 text-emerald-700 border-emerald-300';
              badgeText = 'Complete';
              badgeBg = 'bg-emerald-100 text-emerald-800';
            } else if (step.isActive) {
              statusColor = 'bg-[#D9E7E8] text-[#267C78] border-[#267C78] ring-2 ring-[#267C78]/20 animate-pulse';
              badgeText = 'Executing';
              badgeBg = 'bg-[#267C78] text-white';
            } else if (step.isFailed) {
              statusColor = 'bg-rose-50 text-rose-700 border-rose-300';
              badgeText = 'Failed';
              badgeBg = 'bg-rose-100 text-rose-800';
            }

            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${statusColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white shadow-xs">
                      {step.isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : step.isFailed ? (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      ) : step.isActive ? (
                        <Clock className="w-5 h-5 text-[#267C78] animate-spin" />
                      ) : (
                        <Icon className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeBg}`}>
                      {badgeText}
                    </span>
                  </div>

                  <h4 className="font-display font-medium text-sm text-[#172B3A] mb-1">
                    {idx + 1}. {step.name}
                  </h4>
                  <p className="text-xs text-[#172B3A]/70 line-clamp-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Saga Compensation Callout banner if failed/compensated */}
      {isCompensated && (
        <div className="mt-5 p-4 rounded-xl bg-amber-50/90 border border-amber-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 rounded-lg text-amber-800 mt-0.5">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-amber-950 font-display">
                  Saga Compensating Transaction Executed
                </h4>
                <span className="text-[10px] font-mono uppercase bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
                  Catch: States.ALL &rarr; ReleaseInventory
                </span>
              </div>
              <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                When the simulated payment step failed, the AWS Step Functions Catch block caught the exception and safely routed execution to the <code className="bg-amber-100 px-1 py-0.5 rounded text-[11px] font-mono">ReleaseInventory</code> Lambda task.
                Reserved inventory was atomically unlocked in DynamoDB to guarantee zero overselling.
              </p>
              {failureReason && (
                <div className="mt-2 text-xs font-mono bg-white/70 px-2.5 py-1.5 rounded border border-amber-200/60 text-rose-700">
                  Root Cause: {failureReason}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
