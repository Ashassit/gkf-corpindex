import type { DashboardFilters, SentimentLabel } from '../../../types/feedback';

interface FiltersBarProps {
  filters: DashboardFilters;
  onFilter: (patch: Partial<DashboardFilters>) => void;
  onClear: () => void;
}

const SENTIMENTS: { value: SentimentLabel | 'all'; label: string }[] = [
  { value: 'all', label: 'All Sentiments' },
  { value: 'positive', label: 'Positive' },
  { value: 'mixed', label: 'Mixed' },
  { value: 'poor', label: 'Poor' },
];

const inputClass =
  'border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20';

export function FiltersBar({ filters, onFilter, onClear }: FiltersBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex flex-wrap gap-3 items-end">
        <div className="flex-1 min-w-[160px]">
          <label className="block text-xs text-gray-400 mb-1">Search</label>
          <input
            type="text"
            value={filters.search}
            onChange={e => onFilter({ search: e.target.value })}
            placeholder="Name, mobile, email…"
            className={`w-full ${inputClass}`}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Sentiment</label>
          <select
            value={filters.sentiment}
            onChange={e => onFilter({ sentiment: e.target.value as SentimentLabel | 'all' })}
            className={inputClass}
          >
            {SENTIMENTS.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">From</label>
          <input
            type="date"
            value={filters.dateFrom}
            onChange={e => onFilter({ dateFrom: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">To</label>
          <input
            type="date"
            value={filters.dateTo}
            onChange={e => onFilter({ dateTo: e.target.value })}
            className={inputClass}
          />
        </div>
        <button
          onClick={onClear}
          className="px-3 py-2 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
