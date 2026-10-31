import type { DashboardStats } from '../../../types/feedback';

interface SummaryCardsProps {
  stats: DashboardStats;
}

interface CardConfig {
  key: keyof DashboardStats;
  label: string;
  icon: string;
  gradFrom: string;
  gradTo: string;
  suffix?: string;
}

const CARDS: CardConfig[] = [
  { key: 'total', label: 'Total Responses', icon: '📝', gradFrom: '#3B82F6', gradTo: '#2563EB' },
  { key: 'thisMonth', label: 'This Month', icon: '📅', gradFrom: '#6366F1', gradTo: '#4F46E5' },
  { key: 'avgScore', label: 'Avg Score', icon: '⭐', gradFrom: '#F59E0B', gradTo: '#D97706', suffix: '%' },
  { key: 'reviewClicks', label: 'Google Reviews', icon: '🌟', gradFrom: '#10B981', gradTo: '#059669' },
];

export function SummaryCards({ stats }: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {CARDS.map(card => (
        <div key={card.key} className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div
            className="h-1"
            style={{ background: `linear-gradient(90deg, ${card.gradFrom}, ${card.gradTo})` }}
          />
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-medium text-gray-400 leading-tight">{card.label}</span>
              <span className="text-lg shrink-0">{card.icon}</span>
            </div>
            <div
              className="text-2xl font-bold"
              style={{ color: card.gradFrom }}
            >
              {stats[card.key]}{card.suffix ?? ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
