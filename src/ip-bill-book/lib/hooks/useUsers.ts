import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPUserRole, IPRole } from '../types';

export function useUsers() {
  const [users, setUsers] = useState<IPUserRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error: err } = await supabase
      .from('ip_user_roles')
      .select('*')
      .order('created_at', { ascending: true });
    if (err) setError(err.message);
    else setUsers((data ?? []) as IPUserRole[]);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function createUser(params: {
    email: string;
    password: string;
    role: IPRole;
  }): Promise<string | null> {
    const { error: err } = await supabase.functions.invoke('create-ip-user', {
      body: { email: params.email, password: params.password, role: params.role },
    });
    if (err) return err.message;
    await load();
    return null;
  }

  async function updateRole(userId: string, role: IPRole): Promise<string | null> {
    const { error: err } = await supabase
      .from('ip_user_roles')
      .update({ role })
      .eq('user_id', userId);
    if (err) return err.message;
    await load();
    return null;
  }

  async function revokeAccess(userId: string): Promise<string | null> {
    const { error: err } = await supabase
      .from('ip_user_roles')
      .delete()
      .eq('user_id', userId);
    if (err) return err.message;
    await load();
    return null;
  }

  return { users, loading, error, reload: load, createUser, updateRole, revokeAccess };
}
