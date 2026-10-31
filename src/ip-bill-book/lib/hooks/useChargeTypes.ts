import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPChargeType } from '../types';

export function useChargeTypes() {
  const [chargeTypes, setChargeTypes] = useState<IPChargeType[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const { data } = await supabase
      .from('ip_charge_types')
      .select('*')
      .order('name');
    if (data) setChargeTypes(data as IPChargeType[]);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function addChargeType(name: string): Promise<string | null> {
    const { error } = await supabase
      .from('ip_charge_types')
      .insert({ name });
    if (error) return error.message;
    await load();
    return null;
  }

  async function deleteChargeType(id: string): Promise<string | null> {
    const { error } = await supabase
      .from('ip_charge_types')
      .delete()
      .eq('id', id);
    if (error) return error.message;
    await load();
    return null;
  }

  return { chargeTypes, loading, addChargeType, deleteChargeType };
}
