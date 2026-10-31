import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { usePatients } from '../lib/hooks/usePatients';
import { ROLE_PERMISSIONS } from '../lib/types';
import type { IPOutletContext } from '../lib/types';
import { Plus, Search, UserCheck, UserX } from 'lucide-react';

export default function PatientList() {
  const { role } = useOutletContext<IPOutletContext>();
  const [statusFilter, setStatusFilter] = useState<'active' | 'discharged' | 'all'>('active');
  const [search, setSearch] = useState('');
  const { patients, loading } = usePatients(statusFilter);
  const navigate = useNavigate();
  const perms = ROLE_PERMISSIONS[role];

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.patient_id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Patients</h1>
          <p className="text-sm text-slate-400 mt-0.5">In-patient records</p>
        </div>
        {perms.canCreatePatient && (
          <button
            onClick={() => navigate('/ip-bill/patients/new')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={16} />
            Admit Patient
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or patient ID…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex rounded-lg border border-slate-200 overflow-hidden text-sm">
            {(['active', 'discharged', 'all'] as const).map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-2 capitalize transition-colors ${
                  statusFilter === s
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            {search ? 'No patients match your search.' : 'No patients found.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Patient ID</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Name</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Age / Gender</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-500">Admitted</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => (
                  <tr
                    key={p.id}
                    onClick={() => navigate(`/ip-bill/patients/${p.id}`)}
                    className="border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-slate-600">{p.patient_id}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                    <td className="px-4 py-3 text-slate-600 capitalize">{p.age} / {p.gender}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                        p.status === 'active'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {p.status === 'active' ? <UserCheck size={11} /> : <UserX size={11} />}
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {new Date(p.created_at).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
