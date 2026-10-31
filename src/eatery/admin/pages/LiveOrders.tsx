import { useEffect, useRef } from 'react';
import { supabase } from '../../../supabase/client';
import { KitchenLayout } from '../KitchenLayout';
import { OrderCard } from '../components/OrderCard';
import { useOrders } from '../../lib/hooks/useOrders';

function playNewOrderAlarm() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    [0, 0.38, 0.76].forEach(offset => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'square';
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(1.0, ctx.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.32);
      osc.start(ctx.currentTime + offset);
      osc.stop(ctx.currentTime + offset + 0.32);
    });
  } catch {
    // audio not available in this browser
  }
}

export function LiveOrders() {
  const { orders, loading, updateStatus } = useOrders();
  const initialised = useRef(false);

  useEffect(() => {
    // Wait one tick so the initial fetch doesn't trigger the alarm
    const ready = setTimeout(() => { initialised.current = true; }, 1500);

    const ch = supabase
      .channel('new-order-alarm')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'eatery_orders' },
        () => {
          if (initialised.current) playNewOrderAlarm();
        }
      )
      .subscribe();

    return () => {
      clearTimeout(ready);
      supabase.removeChannel(ch);
    };
  }, []);

  return (
    <KitchenLayout>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Live Orders</h2>
        <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">
          {orders.length} active
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🍽️</p>
          <p>No active orders right now.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} onStatusChange={updateStatus} />
          ))}
        </div>
      )}
    </KitchenLayout>
  );
}
