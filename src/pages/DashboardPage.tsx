import { useEffect } from 'react';
import { useDashboard } from '../hooks/useDashboard';
import { LoginScreen } from '../components/feedback/dashboard/LoginScreen';
import { SummaryCards } from '../components/feedback/dashboard/SummaryCards';
import { SentimentChart } from '../components/feedback/dashboard/SentimentChart';
import { SectionPerformance } from '../components/feedback/dashboard/SectionPerformance';
import { FiltersBar } from '../components/feedback/dashboard/FiltersBar';
import { SubmissionsTable } from '../components/feedback/dashboard/SubmissionsTable';
import { SubmissionPanel } from '../components/feedback/dashboard/SubmissionPanel';
import { ExportButton } from '../components/feedback/dashboard/ExportButton';
import newLogo from "../assets/logo2.png";

export function DashboardPage() {
  const {
    isAuthenticated, authLoading, userEmail, loginError,
    submissions, loading, total, page, pageSize,
    filters, stats, sectionAverages, selectedSubmission,
    newSubmissionAlert, login, logout, setFilter, clearFilters,
    setPage, selectSubmission, exportCSV, updateSubmission,
  } = useDashboard();

  useEffect(() => {
    document.title = 'Staff Dashboard | GKF';
  }, []);

  if (authLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(160deg, #1B3A5C 0%, #091d33 100%)' }}
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#E8A020] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-blue-300 text-sm">Loading dashboard…</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} error={loginError} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 mt-24">
      {/* New submission toast */}
      {newSubmissionAlert && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium flex items-center gap-2">
          <span className="text-base">🔔</span>
          New submission received!
        </div>
      )}

      {/* Header */}
      <div
        className="sticky top-0 z-40 shadow-lg"
        style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #0d2a46 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9  rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-900/30">
              <span className="text-lg"><img src={newLogo}/></span>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-white font-bold text-sm leading-tight">Feedback Dashboard</h1>
              <p className="text-blue-300 text-xs truncate">{userEmail}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <ExportButton onExport={exportCSV} />
              <button
                onClick={logout}
                className="px-3 py-2 text-xs text-blue-300 hover:text-white border border-blue-700/50 hover:border-blue-500 rounded-lg transition-all"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <SummaryCards stats={stats} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SentimentChart stats={stats} />
          <SectionPerformance averages={sectionAverages} />
        </div>
        <FiltersBar filters={filters} onFilter={setFilter} onClear={clearFilters} />
        <SubmissionsTable
          submissions={submissions}
          loading={loading}
          total={total}
          page={page}
          pageSize={pageSize}
          onSelect={selectSubmission}
          onPageChange={setPage}
        />
      </div>

      <SubmissionPanel
        submission={selectedSubmission}
        onClose={() => selectSubmission(null)}
        onUpdate={updateSubmission}
      />
    </div>
  );
}
