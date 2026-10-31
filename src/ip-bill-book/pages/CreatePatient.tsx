import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { usePatients } from '../lib/hooks/usePatients';
import type { IPOutletContext } from '../lib/types';
import { ArrowLeft } from 'lucide-react';

export default function CreatePatient() {
  const { userId } = useOutletContext<IPOutletContext>();
  const { createPatient } = usePatients();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    patientId: '',
    age: '',
    gender: 'male' as 'male' | 'female' | 'other',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const age = parseInt(form.age);
    if (isNaN(age) || age <= 0 || age >= 150) {
      setError('Enter a valid age between 1 and 149.');
      return;
    }
    setLoading(true);
    const { id, error: err } = await createPatient({
      name: form.name.trim(),
      patientId: form.patientId.trim(),
      age,
      gender: form.gender,
      userId,
    });
    setLoading(false);
    if (err) { setError(err); return; }
    navigate(`/ip-bill/patients/${id}`, { replace: true });
  }

  return (
    <div className="p-6 max-w-xl">
      <button
        onClick={() => navigate('/ip-bill/patients')}
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-5 transition-colors"
      >
        <ArrowLeft size={15} />
        Back to patients
      </button>

      <h1 className="text-xl font-semibold text-slate-900 mb-6">Admit New Patient</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Patient full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Patient ID / IP Number</label>
          <input
            type="text"
            required
            value={form.patientId}
            onChange={e => setForm(f => ({ ...f, patientId: e.target.value }))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. IP2026-001"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Age</label>
            <input
              type="number"
              required
              min={1}
              max={149}
              value={form.age}
              onChange={e => setForm(f => ({ ...f, age: e.target.value }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Gender</label>
            <select
              value={form.gender}
              onChange={e => setForm(f => ({ ...f, gender: e.target.value as typeof form.gender }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
        )}

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={() => navigate('/ip-bill/patients')}
            className="flex-1 py-2.5 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {loading ? 'Admitting…' : 'Admit Patient'}
          </button>
        </div>
      </form>
    </div>
  );
}
