import { useState } from 'react';
import { useChargeTypes } from '../lib/hooks/useChargeTypes';
import { Plus, Trash2 } from 'lucide-react';

export default function ChargeTypes() {
  const { chargeTypes, loading, addChargeType, deleteChargeType } = useChargeTypes();
  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);
  const [err, setErr] = useState('');

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;
    setAdding(true);
    const error = await addChargeType(trimmed);
    setAdding(false);
    if (error) { setErr(error); return; }
    setNewName('');
    setErr('');
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Remove "${name}" from charge types?`)) return;
    await deleteChargeType(id);
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-900">Charge Types</h1>
        <p className="text-sm text-slate-400 mt-0.5">
          Manage the names shown in the charge dropdown when adding charges to a patient
        </p>
      </div>

      <div className="mb-6 max-w-sm">
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="text"
            placeholder="New charge type name…"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={adding || !newName.trim()}
            className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={15} />
            Add
          </button>
        </form>
        {err && <p className="text-sm text-red-600 mt-2">{err}</p>}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 max-w-sm">
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : chargeTypes.length === 0 ? (
          <p className="text-center text-slate-400 py-10 text-sm">No charge types yet.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {chargeTypes.map(ct => (
              <li key={ct.id} className="flex items-center justify-between px-4 py-3 group">
                <span className="text-sm text-slate-800">{ct.name}</span>
                <button
                  onClick={() => handleDelete(ct.id, ct.name)}
                  className="p-1.5 rounded hover:bg-red-100 text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                  title="Remove"
                >
                  <Trash2 size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
