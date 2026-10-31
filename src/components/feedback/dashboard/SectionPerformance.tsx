import type { SectionAverage } from '../../../types/feedback';

interface SectionPerformanceProps {
  averages: SectionAverage[];
}

export function SectionPerformance({ averages }: SectionPerformanceProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-[#1B3A5C]">Section Performance</h3>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Excellent
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            Fair
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
            Poor
          </span>
        </div>
      </div>

      {averages.length === 0 ? (
        <p className="text-xs text-gray-400 text-center py-8">No data yet</p>
      ) : (
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left pb-2 font-medium text-gray-400">Section</th>
              <th className="text-right pb-2 font-medium text-green-600">Excellent</th>
              <th className="text-right pb-2 font-medium text-amber-500">Fair</th>
              <th className="text-right pb-2 font-medium text-red-500">Poor</th>
            </tr>
          </thead>
          <tbody>
            {averages.map(avg => (
              <tr key={avg.sectionId} className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors">
                <td className="py-2.5 text-gray-700 font-medium">{avg.sectionTitle}</td>
                <td className="py-2.5 text-right">
                  <span className="bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full">
                    {avg.excellentPct}%
                  </span>
                </td>
                <td className="py-2.5 text-right">
                  <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded-full">
                    {avg.fairPct}%
                  </span>
                </td>
                <td className="py-2.5 text-right">
                  <span className="bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded-full">
                    {avg.poorPct}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
