import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useIPAuth } from '../lib/hooks/useIPAuth';
import { ROLE_PERMISSIONS, ROLE_LABELS } from '../lib/types';
import type { IPOutletContext } from '../lib/types';
import { Users, FileText, ClipboardList, LogOut, Activity, Tag } from 'lucide-react';
import { useEffect } from 'react';

export default function IPLayout() {
  const { userId, email, role, loading, signOut } = useIPAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!userId || !role)) {
      navigate('/ip-bill/login', { replace: true });
    }
  }, [loading, userId, role, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!userId || !role) return null;

  const perms = ROLE_PERMISSIONS[role];
  const context: IPOutletContext = { role, userId, email: email ?? '' };

  async function handleSignOut() {
    await signOut();
    navigate('/ip-bill/login', { replace: true });
  }

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-50 text-blue-700'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Activity size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">IP Bill Book</p>
              <p className="text-xs text-slate-400">GKF Hospital</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          <NavLink to="/ip-bill/patients" className={navClass}>
            <ClipboardList size={16} />
            Patients
          </NavLink>

          {perms.canManageChargeTypes && (
            <NavLink to="/ip-bill/charge-types" className={navClass}>
              <Tag size={16} />
              Charge Types
            </NavLink>
          )}

          {perms.canManageUsers && (
            <NavLink to="/ip-bill/users" className={navClass}>
              <Users size={16} />
              Users
            </NavLink>
          )}

          {perms.canViewAuditLog && (
            <NavLink to="/ip-bill/audit" className={navClass}>
              <FileText size={16} />
              Audit Log
            </NavLink>
          )}
        </nav>

        <div className="p-3 border-t border-slate-200">
          <div className="px-3 py-2 mb-1">
            <p className="text-xs font-medium text-slate-800 truncate">{email}</p>
            <p className="text-xs text-slate-400">{ROLE_LABELS[role]}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={14} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet context={context} />
      </main>
    </div>
  );
}
