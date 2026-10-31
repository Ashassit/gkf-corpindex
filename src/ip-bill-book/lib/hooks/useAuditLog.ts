import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPAuditLog } from '../types';

export function useAuditLog(filters?: { tableName?: string; userId?: string }) {
  const [logs, setLogs] = useState<IPAuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const tableName = filters?.tableName;
  const userId = filters?.userId;

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase
      .from('ip_audit_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    if (tableName) query = query.eq('table_name', tableName);
    if (userId) query = query.eq('user_id', userId);

    const { data, error: err } = await query;
    if (err) setError(err.message);
    else setLogs((data ?? []) as IPAuditLog[]);
    setLoading(false);
  }, [tableName, userId]);

  useEffect(() => { load(); }, [load]);

  return { logs, loading, error, reload: load };
}
