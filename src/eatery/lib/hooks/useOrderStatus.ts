import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase/client';
import type { Order } from '../types';

export function useOrderStatus(orderId: string | null) {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    supabase
      .from('eatery_orders')
      .select('*')
      .eq('id', orderId)
      .single()
      .then(({ data }) => {
        if (data) setOrder(data as Order);
        setLoading(false);
      });

    const ch = supabase
      .channel(`order-status-${orderId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'eatery_orders', filter: `id=eq.${orderId}` },
        (payload) => setOrder(payload.new as Order),
      )
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, [orderId]);

  return { order, loading };
}
