import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { Dish } from '../types';

export function useDishes(onlyAvailable = false) {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    let q = supabase.from('eatery_dishes').select('*').order('display_order');
    if (onlyAvailable) q = (q as typeof q).eq('is_available', true);
    const { data } = await q;
    if (data) setDishes(data as Dish[]);
    setLoading(false);
  }, [onlyAvailable]);

  useEffect(() => {
    fetch();
    const ch = supabase
      .channel('eatery-dishes-watch')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'eatery_dishes' }, fetch)
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [fetch]);

  const toggleAvailable = async (id: string, is_available: boolean) => {
    await supabase.from('eatery_dishes').update({ is_available }).eq('id', id);
  };

  const updatePrepTime = async (id: string, prep_time_mins: number) => {
    await supabase.from('eatery_dishes').update({ prep_time_mins }).eq('id', id);
  };

  return { dishes, loading, toggleAvailable, updatePrepTime };
}
