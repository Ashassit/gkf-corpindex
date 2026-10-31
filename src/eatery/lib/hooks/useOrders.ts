import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { Order, OrderStatus } from '../types';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    const { data } = await supabase
      .from('eatery_orders')
      .select('*')
      .not('status', 'eq', 'served')
      .order('created_at', { ascending: true });
    if (data) setOrders(data as Order[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
    const ch = supabase
      .channel('eatery-orders-watch')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'eatery_orders' }, fetch)
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [fetch]);

  const updateStatus = async (orderId: string, status: OrderStatus) => {
    await supabase.from('eatery_orders').update({ status }).eq('id', orderId);
  };

  return { orders, loading, updateStatus };
}
