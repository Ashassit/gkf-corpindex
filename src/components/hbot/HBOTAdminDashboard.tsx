import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../../supabase/client';
import { Loader2, Wind, LogOut, Check, X } from 'lucide-react';
import type { HBOTAppointment, HBOTAppointmentStatus } from '../../types/hbot';
import { formatDate, formatTimeSlot, BOOKING_FOR_LABELS, STATUS_LABELS } from '../../types/hbot';

// ── Tab definition ─────────────────────────────────────────────────
type Tab = 'pending' | 'confirmed' | 'rejected' | 'all';

const TABS: { key: Tab; label: string }[] = [
  { key: 'pending',   label: 'Pending' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'rejected',  label: 'Rejected' },
  { key: 'all',       label: 'All' },
];

// ── Status pill ────────────────────────────────────────────────────
const STATUS_PILL: Record<HBOTAppointmentStatus, string> = {
  pending:   'bg-amber-100 text-amber-700',
  confirmed: 'bg-green-100 text-green-700',
  rejected:  'bg-red-100   text-red-700',
  cancelled: 'bg-gray-100  text-gray-600',
};

function StatusPill({ status }: { status: HBOTAppointmentStatus }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${STATUS_PILL[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

// ── Login screen ───────────────────────────────────────────────────
function LoginScreen({
  onLogin,
}: {
  onLogin: (email: string, password: string) => Promise<string | null>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const err = await onLogin(email, password);
    if (err) setError(err);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="mb-6">
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center mb-3">
            <Wind className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">HBOT Admin</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Hyperbaric Oxygen Therapy — Appointment Queue
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-4 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white rounded-lg py-2.5 font-medium text-sm hover:bg-teal-700 transition-colors mt-1 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Appointment card ───────────────────────────────────────────────
interface CardProps {
  appt: HBOTAppointment;
  approvingId: string | null;
  rejectingId: string | null;
  rejectNote: string;
  actionLoading: boolean;
  onApprove: (id: string) => void;
  onStartReject: (id: string) => void;
  onCancelReject: () => void;
  onConfirmReject: () => void;
  onRejectNoteChange: (v: string) => void;
}

function AppointmentCard({
  appt,
  approvingId,
  rejectingId,
  rejectNote,
  actionLoading,
  onApprove,
  onStartReject,
  onCancelReject,
  onConfirmReject,
  onRejectNoteChange,
}: CardProps) {
  const isApprovingThis = approvingId === appt.id;
  const isRejectingThis = rejectingId === appt.id;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{appt.full_name}</h3>
          {appt.booking_for !== 'self' && appt.patient_name && (
            <p className="text-sm text-gray-500 mt-0.5">
              Patient:{' '}
              <span className="text-gray-700 font-medium">{appt.patient_name}</span>
              {' '}
              <span className="text-gray-400">
                ({BOOKING_FOR_LABELS[appt.booking_for]})
              </span>
            </p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <StatusPill status={appt.status} />
          <p className="text-sm font-medium text-gray-700 mt-1">
            {formatDate(appt.preferred_date)} — {formatTimeSlot(appt.preferred_time)}
          </p>
        </div>
      </div>

      {/* Contact details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div>
          <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
            Email
          </span>
          <p className="text-gray-700 mt-0.5">{appt.email}</p>
        </div>
        <div>
          <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
            Phone
          </span>
          <p className="text-gray-700 mt-0.5">{appt.phone}</p>
        </div>
      </div>

      {/* Reason */}
      <div className="text-sm">
        <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
          Reason / Condition
        </span>
        <p className="text-gray-700 mt-0.5 leading-relaxed">{appt.reason}</p>
      </div>

      {/* Optional fields */}
      {appt.doctor_referral && (
        <div className="text-sm">
          <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
            Referring Doctor
          </span>
          <p className="text-gray-700 mt-0.5">{appt.doctor_referral}</p>
        </div>
      )}
      {appt.admin_note && (
        <div className="text-sm bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
          <span className="text-amber-600 text-xs uppercase tracking-wide font-medium">
            Admin Note
          </span>
          <p className="text-amber-900 mt-0.5">{appt.admin_note}</p>
        </div>
      )}

      {/* Submitted at */}
      <p className="text-xs text-gray-400">
        Submitted {new Date(appt.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
        {appt.reviewed_at && (
          <>
            {' · '}Reviewed{' '}
            {new Date(appt.reviewed_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
          </>
        )}
      </p>

      {/* Actions — only for pending */}
      {appt.status === 'pending' && (
        <div className="pt-1 border-t border-gray-100">
          {isRejectingThis ? (
            <div className="space-y-2">
              <textarea
                rows={2}
                placeholder="Rejection reason (optional)…"
                value={rejectNote}
                onChange={e => onRejectNoteChange(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
              <div className="flex gap-2">
                <button
                  onClick={onConfirmReject}
                  disabled={actionLoading}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 text-sm font-medium transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5"
                >
                  {actionLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  Confirm Reject
                </button>
                <button
                  onClick={onCancelReject}
                  disabled={actionLoading}
                  className="border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-60"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => onApprove(appt.id)}
                disabled={!!approvingId || !!rejectingId}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2 text-sm font-medium transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5"
              >
                {isApprovingThis ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}
                Approve
              </button>
              <button
                onClick={() => onStartReject(appt.id)}
                disabled={!!approvingId || !!rejectingId}
                className="flex-1 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg py-2 text-sm font-medium transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5"
              >
                <X className="w-4 h-4" />
                Reject
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main dashboard ─────────────────────────────────────────────────
export function HBOTAdminDashboard() {
  const [session, setSession] = useState<Session | null>(null);
  const [appointments, setAppointments] = useState<HBOTAppointment[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('pending');

  // Approve / reject state
  const [approvingId, setApprovingId] = useState<string | null>(null);
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectNote, setRejectNote] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  // Auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Fetch appointments when logged in
  useEffect(() => {
    if (session) fetchAppointments();
  }, [session]);

  async function fetchAppointments() {
    setLoading(true);
    const { data } = await supabase
      .from('hbot_appointments')
      .select('*')
      .order('created_at', { ascending: false });
    setAppointments((data as HBOTAppointment[]) ?? []);
    setLoading(false);
  }

  async function handleLogin(email: string, password: string): Promise<string | null> {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? error.message : null;
  }

  async function handleApprove(id: string) {
    setApprovingId(id);
    const { error } = await supabase
      .from('hbot_appointments')
      .update({ status: 'confirmed', reviewed_at: new Date().toISOString() })
      .eq('id', id);
    if (!error) await fetchAppointments();
    setApprovingId(null);
  }

  function startReject(id: string) {
    setRejectingId(id);
    setRejectNote('');
  }

  function cancelReject() {
    setRejectingId(null);
    setRejectNote('');
  }

  async function confirmReject() {
    if (!rejectingId) return;
    setActionLoading(true);
    const { error } = await supabase
      .from('hbot_appointments')
      .update({
        status: 'rejected',
        admin_note: rejectNote.trim() || null,
        reviewed_at: new Date().toISOString(),
      })
      .eq('id', rejectingId);
    if (!error) {
      await fetchAppointments();
      setRejectingId(null);
      setRejectNote('');
    }
    setActionLoading(false);
  }

  // Derived list based on active tab
  const filtered: HBOTAppointment[] =
    activeTab === 'all'
      ? appointments
      : appointments.filter(a => a.status === activeTab);

  // Tab counts
  const counts: Record<Tab, number> = {
    pending:   appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    rejected:  appointments.filter(a => a.status === 'rejected').length,
    all:       appointments.length,
  };

  if (!session) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">

        {/* Header bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4 mb-5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center shrink-0">
            <Wind className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-semibold text-gray-900">
              HBOT Appointment Queue
            </h1>
            <p className="text-xs text-gray-400 truncate">
              {session.user.email}
            </p>
          </div>
          <button
            onClick={() => supabase.auth.signOut()}
            className="shrink-0 flex items-center gap-1.5 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-lg px-3 py-1.5 text-sm transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl border border-gray-100 shadow-sm p-1 mb-5 overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-w-max flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 font-semibold ${
                  activeTab === tab.key
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm py-16 text-center">
            <Wind className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">
              No {activeTab === 'all' ? '' : activeTab} appointments yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(appt => (
              <AppointmentCard
                key={appt.id}
                appt={appt}
                approvingId={approvingId}
                rejectingId={rejectingId}
                rejectNote={rejectNote}
                actionLoading={actionLoading}
                onApprove={handleApprove}
                onStartReject={startReject}
                onCancelReject={cancelReject}
                onConfirmReject={confirmReject}
                onRejectNoteChange={setRejectNote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
