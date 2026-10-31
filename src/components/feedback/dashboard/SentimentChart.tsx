import type { DashboardStats } from '../../../types/feedback';

interface SentimentChartProps {
  stats: DashboardStats;
}

export function SentimentChart({ stats }: SentimentChartProps) {
  const total = stats.total || 1;
  const rows = [
    {
      label: 'Positive',
      count: stats.positiveCount,
      pct: stats.total ? Math.round((stats.positiveCount / stats.total) * 100) : 0,
      gradFrom: '#4ade80',
      gradTo: '#16a34a',
      bg: '#f0fdf4',
      text: '#15803d',
      dot: '#4ade80',
    },
    {
      label: 'Mixed',
      count: stats.mixedCount,
      pct: stats.total ? Math.round((stats.mixedCount / stats.total) * 100) : 0,
      gradFrom: '#fbbf24',
      gradTo: '#d97706',
      bg: '#fffbeb',
      text: '#b45309',
      dot: '#fbbf24',
    },
    {
      label: 'Poor',
      count: stats.poorCount,
      pct: stats.total ? Math.round((stats.poorCount / stats.total) * 100) : 0,
      gradFrom: '#f87171',
      gradTo: '#dc2626',
      bg: '#fef2f2',
      text: '#b91c1c',
      dot: '#f87171',
    },
  ];

  // suppress unused variable warning
  void total;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-[#1B3A5C]">Sentiment Overview</h3>
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
          {stats.total} total
        </span>
      </div>

      <div className="space-y-4">
        {rows.map(row => (
          <div key={row.label}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: row.dot }} />
                <span className="text-xs font-semibold" style={{ color: row.text }}>{row.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: row.bg, color: row.text }}
                >
                  {row.pct}%
                </span>
                <span className="text-xs text-gray-400">{row.count} responses</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${Math.max(row.pct, row.count > 0 ? 2 : 0)}%`,
                  background: `linear-gradient(90deg, ${row.gradFrom}, ${row.gradTo})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
