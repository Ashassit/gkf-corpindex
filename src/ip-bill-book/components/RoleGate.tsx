import type { ReactNode } from 'react';
import type { IPRole } from '../lib/types';

interface Props {
  role: IPRole;
  allowed: IPRole[];
  children: ReactNode;
  fallback?: ReactNode;
}

export function RoleGate({ role, allowed, children, fallback = null }: Props) {
  if (!allowed.includes(role)) return <>{fallback}</>;
  return <>{children}</>;
}
