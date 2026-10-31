import { useState } from 'react';
import { useAuditLog } from '../lib/hooks/useAuditLog';
import { ChevronDown, ChevronRight } from 'lucide-react';

const TABLE_OPTIONS = ['', 'ip_patients', 'ip_charges', 'ip_payments'];

export default function AuditLog() {
  const [tableFilter, setTableFilter] = useState('');
  const { logs, loading } = useAuditLog({ tableName: tableFilter || undefined });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Audit Log</h1>
          <p className="text-sm text-slate-400 mt-0.5">All inserts and updates (last 200)</p>
        </div>
        <select
          value={tableFilter}
          onChange={e => setTableFilter(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {TABLE_OPTIONS.map(t => (
            <option key={t} value={t}>{t || 'All tables'}</option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-200">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : logs.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm">No audit entries found.</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {logs.map(log => {
              const open = expanded.has(log.id);
              return (
                <div key={log.id}>
                  <button
                    onClick={() => toggle(log.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="text-slate-400">
                      {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      log.action === 'INSERT' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {log.action}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{log.table_name}</span>
                    <span className="text-xs text-slate-400 ml-auto">
                      {log.user_role ?? '—'} · {new Date(log.created_at).toLocaleString('en-IN')}
                    </span>
                  </button>
                  {open && (
                    <div className="px-10 pb-4">
                      <p className="text-xs text-slate-400 mb-1">Record ID: <span className="font-mono">{log.record_id}</span></p>
                      {log.changed_fields && (
                        <pre className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 overflow-x-auto">
                          {JSON.stringify(log.changed_fields, null, 2)}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
