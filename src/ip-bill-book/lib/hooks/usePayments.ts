import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPPayment } from '../types';

export function usePayments(patientId: string) {
  const [payments, setPayments] = useState<IPPayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error: err } = await supabase
      .from('ip_payments')
      .select('*')
      .eq('patient_id', patientId)
      .order('created_at', { ascending: true });
    if (err) setError(err.message);
    else setPayments((data ?? []) as IPPayment[]);
    setLoading(false);
  }, [patientId]);

  useEffect(() => { load(); }, [load]);

  async function addPayment(params: {
    amount: number;
    paymentType: 'advance' | 'additional';
    notes: string;
    userId: string;
  }): Promise<string | null> {
    if (params.paymentType === 'advance' && params.amount > 20000) {
      return 'Advance payment cannot exceed ₹20,000';
    }
    const { error: err } = await supabase
      .from('ip_payments')
      .insert({
        patient_id: patientId,
        amount: params.amount,
        payment_type: params.paymentType,
        notes: params.notes || null,
        created_by: params.userId,
      });
    if (err) return err.message;
    await load();
    return null;
  }

  // Advance is collected but held — it does NOT reduce the outstanding balance
  // until admin/finance records the final closing payment.
  const advanceAmount  = payments.filter(p => p.payment_type === 'advance').reduce((s, p) => s + p.amount, 0);
  const additionalPaid = payments.filter(p => p.payment_type === 'additional').reduce((s, p) => s + p.amount, 0);
  const hasAdvance = payments.some(p => p.payment_type === 'advance');

  return { payments, loading, error, reload: load, addPayment, advanceAmount, additionalPaid, hasAdvance };
}
