import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase/client';
import type { IPRole } from '../types';

export interface IPAuthState {
  userId: string | null;
  email: string | null;
  role: IPRole | null;
  loading: boolean;
}

export function useIPAuth() {
  const [auth, setAuth] = useState<IPAuthState>({
    userId: null,
    email: null,
    role: null,
    loading: true,
  });

  useEffect(() => {
    let mounted = true;

    async function loadAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        if (mounted) setAuth({ userId: null, email: null, role: null, loading: false });
        return;
      }
      const { data } = await supabase
        .from('ip_user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .single();
      if (mounted) {
        setAuth({
          userId: session.user.id,
          email: session.user.email ?? null,
          role: (data?.role as IPRole) ?? null,
          loading: false,
        });
      }
    }

    loadAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      loadAuth();
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
  }

  return { ...auth, signOut };
}
