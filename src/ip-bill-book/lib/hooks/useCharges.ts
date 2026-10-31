import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPCharge } from '../types';

export function useCharges(patientId: string) {
  const [charges, setCharges] = useState<IPCharge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error: err } = await supabase
      .from('ip_charges')
      .select('*')
      .eq('patient_id', patientId)
      .order('created_at', { ascending: true });
    if (err) setError(err.message);
    else setCharges((data ?? []) as IPCharge[]);
    setLoading(false);
  }, [patientId]);

  useEffect(() => { load(); }, [load]);

  async function addCharge(params: {
    chargeName: string;
    amount: number;
    userId: string;
  }): Promise<string | null> {
    const now = new Date().toISOString();
    const { error: err } = await supabase
      .from('ip_charges')
      .insert({
        patient_id: patientId,
        charge_name: params.chargeName,
        amount: params.amount,
        created_by: params.userId,
        updated_at: now,
        updated_by: params.userId,
      });
    if (err) return err.message;
    await load();
    return null;
  }

  async function updateCharge(params: {
    id: string;
    chargeName: string;
    amount: number;
    userId: string;
  }): Promise<string | null> {
    const { error: err } = await supabase
      .from('ip_charges')
      .update({
        charge_name: params.chargeName,
        amount: params.amount,
        updated_at: new Date().toISOString(),
        updated_by: params.userId,
      })
      .eq('id', params.id);
    if (err) return err.message;
    await load();
    return null;
  }

  async function deleteCharge(id: string): Promise<string | null> {
    const { error: err } = await supabase
      .from('ip_charges')
      .delete()
      .eq('id', id);
    if (err) return err.message;
    await load();
    return null;
  }

  const totalCharges = charges.reduce((sum, c) => sum + c.amount, 0);

  return { charges, loading, error, reload: load, addCharge, updateCharge, deleteCharge, totalCharges };
}
