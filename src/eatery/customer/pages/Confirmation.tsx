import { useSearchParams } from 'react-router-dom';
import { useOrderStatus } from '../../lib/hooks/useOrderStatus';
import { CheckCircle, Clock, ChefHat, Bell, CreditCard } from 'lucide-react';

const STATUS_CONFIG = {
  pending: {
    icon: Clock,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    label: 'Order Received',
    sub: 'Waiting for the kitchen to confirm your order…',
  },
  confirmed: {
    icon: CreditCard,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    label: 'Order Confirmed — Please Pay',
    sub: 'Your order has been confirmed! Please pay at the counter to proceed.',
  },
  preparing: {
    icon: ChefHat,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    label: 'Being Prepared',
    sub: 'The kitchen is cooking your order now.',
  },
  ready: {
    icon: Bell,
    color: 'text-green-500',
    bg: 'bg-green-50',
    label: 'Ready to Serve!',
    sub: 'Your order is ready. A staff member will bring it to your table.',
  },
  served: {
    icon: CheckCircle,
    color: 'text-gray-400',
    bg: 'bg-gray-50',
    label: 'Served',
    sub: 'Enjoy your meal!',
  },
};

const STEPS = ['pending', 'confirmed', 'preparing', 'ready', 'served'] as const;

export function Confirmation() {
  const [params] = useSearchParams();
  const orderId = params.get('id');
  const { order, loading } = useOrderStatus(orderId);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!order) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 text-center">
      <p className="text-gray-500">Order not found.</p>
    </div>
  );

  const cfg = STATUS_CONFIG[order.status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.pending;
  const Icon = cfg.icon;
  const currentStep = STEPS.indexOf(order.status as typeof STEPS[number]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        {/* Status card */}
        <div className={`${cfg.bg} rounded-2xl p-6 text-center mb-4`}>
          <Icon className={`w-14 h-14 mx-auto mb-3 ${cfg.color}`} />
          <h2 className="text-xl font-bold text-gray-900 mb-1">{cfg.label}</h2>
          <p className="text-sm text-gray-500">{cfg.sub}</p>
          {order.estimated_mins && order.status === 'preparing' && (
            <p className="mt-2 text-sm font-medium text-blue-600">
              Est. ready in ~{order.estimated_mins} min
            </p>
          )}
        </div>

        {/* Pay at counter banner — shown only when confirmed */}
        {order.status === 'confirmed' && (
          <div className="mb-4 rounded-2xl border-2 border-purple-300 bg-white p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 text-2xl">
              💳
            </div>
            <div>
              <p className="font-bold text-purple-800 text-sm">Pay at the Counter</p>
              <p className="text-xs text-purple-600 mt-0.5">
                Show this screen and pay <span className="font-bold">₹{order.total}</span> to the cashier. The kitchen will start preparing after payment.
              </p>
            </div>
          </div>
        )}

        {/* Order summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">Table {order.table_number}</span>
            <span className="text-xs text-gray-400">#{order.id.slice(0, 8)}</span>
          </div>
          <ul className="space-y-1.5 mb-3">
            {order.items.map((item, i) => (
              <li key={i} className="flex justify-between text-sm text-gray-700">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
          {order.special_instructions && (
            <p className="text-xs text-gray-400 mt-2 italic">"{order.special_instructions}"</p>
          )}
        </div>

        {/* Progress steps */}
        <div className="flex justify-between px-1">
          {STEPS.map((s, i) => {
            const reached = currentStep >= i;
            return (
              <div key={s} className="flex flex-col items-center gap-1">
                <div className={`w-3 h-3 rounded-full transition-colors ${reached ? 'bg-orange-500' : 'bg-gray-200'}`} />
                <span className={`text-xs capitalize ${reached ? 'text-orange-600 font-medium' : 'text-gray-400'}`}>
                  {s}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
