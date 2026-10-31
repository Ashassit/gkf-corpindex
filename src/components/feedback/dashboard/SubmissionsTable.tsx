import type { FeedbackSubmission, SentimentLabel } from '../../../types/feedback';

interface SubmissionsTableProps {
  submissions: FeedbackSubmission[];
  loading: boolean;
  total: number;
  page: number;
  pageSize: number;
  onSelect: (sub: FeedbackSubmission) => void;
  onPageChange: (page: number) => void;
}

const SENTIMENT_BADGE: Record<SentimentLabel, { bg: string; text: string; dot: string }> = {
  positive: { bg: '#f0fdf4', text: '#15803d', dot: '#4ade80' },
  mixed: { bg: '#fffbeb', text: '#b45309', dot: '#fbbf24' },
  poor: { bg: '#fef2f2', text: '#b91c1c', dot: '#f87171' },
};

export function SubmissionsTable({
  submissions,
  loading,
  total,
  page,
  pageSize,
  onSelect,
  onPageChange,
}: SubmissionsTableProps) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#1B3A5C]">Recent Submissions</h3>
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
          {total} total
        </span>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <div className="w-8 h-8 border-[3px] border-[#1B3A5C] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-gray-400">Loading submissions…</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-2">
          <span className="text-4xl">📭</span>
          <p className="text-sm text-gray-400 font-medium">No submissions found</p>
          <p className="text-xs text-gray-300">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-slate-50">
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 font-semibold text-gray-400 uppercase tracking-wide">
                  Date
                </th>
                <th className="text-left px-5 py-3 font-semibold text-gray-400 uppercase tracking-wide">
                  Patient
                </th>
                <th className="text-left px-5 py-3 font-semibold text-gray-400 uppercase tracking-wide">
                  Score
                </th>
                <th className="text-left px-5 py-3 font-semibold text-gray-400 uppercase tracking-wide">
                  Sentiment
                </th>
                <th className="text-center px-3 py-3 font-semibold text-gray-400 uppercase tracking-wide">
                  Notes
                </th>
                <th className="text-left px-5 py-3 font-semibold text-gray-400 uppercase tracking-wide">
                  Review
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, i) => {
                const badge = sub.sentiment_label ? SENTIMENT_BADGE[sub.sentiment_label] : null;
                const hasNotes = Boolean(sub.suggestions?.trim());
                return (
                  <tr
                    key={sub.id}
                    onClick={() => onSelect(sub)}
                    className={[
                      'border-b border-gray-50 cursor-pointer hover:bg-blue-50/60 transition-colors group',
                      i % 2 === 0 ? '' : 'bg-slate-50/40',
                    ].join(' ')}
                  >
                    <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">
                      {sub.created_at
                        ? new Date(sub.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                          })
                        : '—'}
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="font-semibold text-gray-800 group-hover:text-[#1B3A5C] transition-colors">
                        {sub.patient_name ?? (
                          <span className="text-gray-300 font-normal">Anonymous</span>
                        )}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      <span
                        className="font-bold"
                        style={{
                          color:
                            sub.sentiment_score !== null
                              ? sub.sentiment_score >= 70
                                ? '#16a34a'
                                : sub.sentiment_score >= 40
                                ? '#d97706'
                                : '#dc2626'
                              : '#9ca3af',
                        }}
                      >
                        {sub.sentiment_score !== null ? `${sub.sentiment_score}%` : '—'}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      {badge ? (
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold capitalize"
                          style={{ background: badge.bg, color: badge.text }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: badge.dot }}
                          />
                          {sub.sentiment_label}
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>

                    <td className="px-3 py-3.5 text-center">
                      {hasNotes ? (
                        <span
                          title={sub.suggestions ?? ''}
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full"
                          style={{ background: '#fffbeb' }}
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            style={{ color: '#d97706' }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-200">—</span>
                      )}
                    </td>

                    <td className="px-5 py-3.5">
                      {sub.review_clicked ? (
                        <span className="text-green-600 font-bold">✓ Yes</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100 bg-slate-50/50">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-white transition-all"
          >
            ← Prev
          </button>
          <span className="text-xs text-gray-500 font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-white transition-all"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
