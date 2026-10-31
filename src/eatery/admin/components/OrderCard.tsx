import type { Order, OrderStatus } from '../../lib/types';

const STATUS_NEXT: Partial<Record<OrderStatus, OrderStatus>> = {
  pending:   'confirmed',
  confirmed: 'preparing',
  preparing: 'ready',
  ready:     'served',
};

const ACTION_LABEL: Partial<Record<OrderStatus, string>> = {
  pending:   '✓ Confirm Order',
  confirmed: 'Start Preparing',
  preparing: 'Mark Ready',
  ready:     'Mark Served',
};

const STATUS_LABEL: Record<OrderStatus, string> = {
  pending:   'Pending',
  confirmed: 'Confirmed',
  preparing: 'Preparing',
  ready:     'Ready',
  served:    'Served',
};

const STATUS_COLOR: Record<OrderStatus, string> = {
  pending:   'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-purple-100 text-purple-800',
  preparing: 'bg-blue-100 text-blue-800',
  ready:     'bg-green-100 text-green-800',
  served:    'bg-gray-100 text-gray-500',
};

const BTN_COLOR: Partial<Record<OrderStatus, string>> = {
  pending:   'bg-purple-500 hover:bg-purple-600',
  confirmed: 'bg-blue-500 hover:bg-blue-600',
  preparing: 'bg-green-500 hover:bg-green-600',
  ready:     'bg-gray-500 hover:bg-gray-600',
};

type Props = {
  order: Order;
  onStatusChange: (id: string, status: OrderStatus) => Promise<void>;
};

function elapsed(created: string) {
  const secs = Math.floor((Date.now() - new Date(created).getTime()) / 1000);
  if (secs < 60) return `${secs}s ago`;
  return `${Math.floor(secs / 60)}m ago`;
}

export function OrderCard({ order, onStatusChange }: Props) {
  const next = STATUS_NEXT[order.status];

  return (
    <div className={`bg-white rounded-xl border shadow-sm p-4 ${order.status === 'pending' ? 'border-yellow-300 ring-2 ring-yellow-200' : 'border-gray-200'}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-lg font-bold text-gray-900">Table {order.table_number}</span>
          <span className="ml-2 text-xs text-gray-400">{elapsed(order.created_at)}</span>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_COLOR[order.status]}`}>
          {STATUS_LABEL[order.status]}
        </span>
      </div>

      <ul className="space-y-1 mb-3">
        {order.items.map((item, i) => (
          <li key={i} className="flex justify-between text-sm text-gray-700">
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </li>
        ))}
      </ul>

      {order.special_instructions && (
        <p className="text-xs text-gray-500 italic mb-3 bg-gray-50 rounded p-2">
          "{order.special_instructions}"
        </p>
      )}

      {order.status === 'confirmed' && (
        <p className="text-xs text-purple-600 font-semibold mb-3 bg-purple-50 rounded-lg px-3 py-1.5">
          💳 Customer is being asked to pay
        </p>
      )}

      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900">₹{order.total}</span>
        {next && (
          <button
            onClick={() => onStatusChange(order.id, next)}
            className={`px-4 py-1.5 rounded-lg text-white text-sm font-medium transition-colors ${BTN_COLOR[order.status] ?? 'bg-gray-400'}`}
          >
            {ACTION_LABEL[order.status]}
          </button>
        )}
      </div>
    </div>
  );
}
