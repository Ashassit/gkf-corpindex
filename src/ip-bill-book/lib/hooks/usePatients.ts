import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPPatient } from '../types';

export function usePatients(statusFilter?: 'active' | 'discharged' | 'all') {
  const [patients, setPatients] = useState<IPPatient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase
      .from('ip_patients')
      .select('*')
      .order('created_at', { ascending: false });

    if (statusFilter && statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    const { data, error: err } = await query;
    if (err) setError(err.message);
    else setPatients((data ?? []) as IPPatient[]);
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  async function createPatient(params: {
    name: string;
    patientId: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    userId: string;
  }): Promise<{ id: string | null; error: string | null }> {
    const { data, error: err } = await supabase
      .from('ip_patients')
      .insert({
        name: params.name,
        patient_id: params.patientId,
        age: params.age,
        gender: params.gender,
        created_by: params.userId,
      })
      .select('id')
      .single();
    if (err) return { id: null, error: err.message };
    await load();
    return { id: data.id as string, error: null };
  }

  return { patients, loading, error, reload: load, createPatient };
}

export function usePatient(id: string) {
  const [patient, setPatient] = useState<IPPatient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error: err } = await supabase
      .from('ip_patients')
      .select('*')
      .eq('id', id)
      .single();
    if (err) setError(err.message);
    else setPatient(data as IPPatient);
    setLoading(false);
  }, [id]);

  useEffect(() => { load(); }, [load]);

  async function dischargePatient(userId: string): Promise<string | null> {
    const { error: err } = await supabase
      .from('ip_patients')
      .update({
        status: 'discharged',
        discharged_at: new Date().toISOString(),
        discharged_by: userId,
      })
      .eq('id', id);
    if (err) return err.message;
    await load();
    return null;
  }

  return { patient, loading, error, reload: load, dischargePatient };
}
