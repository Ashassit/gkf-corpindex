import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useUsers } from '../lib/hooks/useUsers';
import { ROLE_LABELS } from '../lib/types';
import type { IPOutletContext, IPRole } from '../lib/types';
import { Plus, Trash2, X } from 'lucide-react';

const ROLES: IPRole[] = ['admin', 'medical', 'finance', 'super_admin'];

export default function UserManagement() {
  const { userId: currentUserId } = useOutletContext<IPOutletContext>();
  const { users, loading, createUser, updateRole, revokeAccess } = useUsers();

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', role: 'medical' as IPRole });
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setFormError('');
    if (form.password.length < 8) { setFormError('Password must be at least 8 characters.'); return; }
    setFormLoading(true);
    const err = await createUser(form);
    setFormLoading(false);
    if (err) { setFormError(err); return; }
    setForm({ email: '', password: '', role: 'medical' });
    setShowForm(false);
  }

  async function handleRoleChange(userId: string, role: IPRole) {
    await updateRole(userId, role);
  }

  async function handleRevoke(userId: string, email: string) {
    if (!confirm(`Revoke access for ${email}? They will no longer be able to sign in to IP Bill Book.`)) return;
    await revokeAccess(userId);
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">User Management</h1>
          <p className="text-sm text-slate-400 mt-0.5">Manage IP Bill Book staff access</p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={16} />
            Add User
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white rounded-xl border border-blue-200 p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-800">New User</h2>
            <button onClick={() => { setShowForm(false); setFormError(''); }} className="text-slate-400 hover:text-slate-600">
              <X size={16} />
            </button>
          </div>
          <form onSubmit={handleCreate} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Temporary Password</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Role</label>
              <select
                value={form.role}
                onChange={e => setForm(f => ({ ...f, role: e.target.value as IPRole }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {ROLES.map(r => (
                  <option key={r} value={r}>{ROLE_LABELS[r]}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end gap-2">
              <button
                type="submit"
                disabled={formLoading}
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {formLoading ? 'Creating…' : 'Create User'}
              </button>
            </div>
            {formError && (
              <div className="col-span-2">
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{formError}</p>
              </div>
            )}
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Email</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Role</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Added</th>
                  <th className="px-4 py-3 w-16" />
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-800">{u.email}</td>
                    <td className="px-4 py-3">
                      {u.user_id === currentUserId ? (
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {ROLE_LABELS[u.role]} (you)
                        </span>
                      ) : (
                        <select
                          value={u.role}
                          onChange={e => handleRoleChange(u.user_id, e.target.value as IPRole)}
                          className="px-2 py-1 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          {ROLES.map(r => (
                            <option key={r} value={r}>{ROLE_LABELS[r]}</option>
                          ))}
                        </select>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {new Date(u.created_at).toLocaleDateString('en-IN')}
                    </td>
                    <td className="px-4 py-3">
                      {u.user_id !== currentUserId && (
                        <button
                          onClick={() => handleRevoke(u.user_id, u.email)}
                          className="p-1.5 rounded hover:bg-red-100 text-slate-400 hover:text-red-600 transition-colors"
                          title="Revoke access"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-slate-400 py-10 text-sm">
                      No users yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
