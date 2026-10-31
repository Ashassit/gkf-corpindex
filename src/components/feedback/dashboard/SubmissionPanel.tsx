import { useState, useEffect } from 'react';
import { FEEDBACK_SECTIONS } from '../../../constants/feedbackQuestions';
import { calculateSentiment } from '../../../lib/feedbackUtils';
import type { FeedbackSubmission, RatingValue } from '../../../types/feedback';

interface DraftState {
  patient_name: string;
  age: string;
  bed_no: string;
  mobile: string;
  email: string;
  date: string;
  suggestions: string;
  ratings: Record<string, RatingValue>;
}

interface SubmissionPanelProps {
  submission: FeedbackSubmission | null;
  onClose: () => void;
  onUpdate?: (id: string, patch: Partial<FeedbackSubmission>) => Promise<void>;
}

const SCORE_COLOR = (score: number) =>
  score >= 70 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444';

const RATING_STYLE: Record<RatingValue, { bg: string; color: string; emoji: string }> = {
  Excellent: { bg: '#f0fdf4', color: '#15803d', emoji: '😊' },
  Fair: { bg: '#fffbeb', color: '#b45309', emoji: '😐' },
  Poor: { bg: '#fef2f2', color: '#b91c1c', emoji: '😞' },
};

const RATING_ACTIVE: Record<RatingValue, { bg: string; color: string; border: string }> = {
  Excellent: { bg: '#16a34a', color: 'white', border: '#16a34a' },
  Fair: { bg: '#d97706', color: 'white', border: '#d97706' },
  Poor: { bg: '#dc2626', color: 'white', border: '#dc2626' },
};

const inputClass =
  'w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]/40 focus:bg-white transition-all';

function getInitials(name: string | null) {
  if (!name) return '?';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function toDraft(sub: FeedbackSubmission): DraftState {
  return {
    patient_name: sub.patient_name ?? '',
    age: sub.age != null ? String(sub.age) : '',
    bed_no: sub.bed_no ?? '',
    mobile: sub.mobile ?? '',
    email: sub.email ?? '',
    date: sub.date ?? '',
    suggestions: sub.suggestions ?? '',
    ratings: { ...sub.ratings },
  };
}

export function SubmissionPanel({ submission, onClose, onUpdate }: SubmissionPanelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<DraftState | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setIsEditing(false);
    setDraft(null);
    setSaveError(null);
  }, [submission?.id]);

  const startEdit = () => {
    if (!submission) return;
    setDraft(toDraft(submission));
    setIsEditing(true);
    setSaveError(null);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setDraft(null);
    setSaveError(null);
  };

  const saveEdit = async () => {
    if (!submission || !draft || !onUpdate) return;
    setSaving(true);
    setSaveError(null);
    try {
      const { score, label } = calculateSentiment(draft.ratings);
      await onUpdate(submission.id, {
        patient_name: draft.patient_name || null,
        age: draft.age ? parseInt(draft.age, 10) : null,
        bed_no: draft.bed_no || null,
        mobile: draft.mobile || null,
        email: draft.email || null,
        date: draft.date || null,
        suggestions: draft.suggestions || null,
        ratings: draft.ratings,
        sentiment_score: score,
        sentiment_label: label,
      });
      setIsEditing(false);
      setDraft(null);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const setRating = (key: string, value: RatingValue) =>
    setDraft(d => d ? { ...d, ratings: { ...d.ratings, [key]: value } } : d);

  const clearRating = (key: string) =>
    setDraft(d => {
      if (!d) return d;
      const r = { ...d.ratings };
      delete r[key];
      return { ...d, ratings: r };
    });

  return (
    <>
      {submission && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          style={{ backdropFilter: 'blur(4px)' }}
          onClick={isEditing ? undefined : onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-lg z-50 transition-transform duration-300 flex flex-col ${
          submission ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#f1f5f9' }}
      >
        {submission && (
          <>
            {/* ── Header ── */}
            <div
              className="shrink-0"
              style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #0d2a46 100%)' }}
            >
              <div className="px-5 pt-4 pb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
                    {isEditing ? 'Editing Response' : 'Patient Response'}
                  </span>
                  <div className="flex items-center gap-2">
                    {!isEditing && onUpdate && (
                      <button
                        onClick={startEdit}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
                        style={{
                          background: 'rgba(232,160,32,0.2)',
                          color: '#F5C842',
                          border: '1px solid rgba(232,160,32,0.3)',
                        }}
                      >
                        ✏️ Edit
                      </button>
                    )}
                    {isEditing && (
                      <>
                        <button
                          onClick={saveEdit}
                          disabled={saving}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 disabled:opacity-50"
                          style={{ background: '#16a34a', color: 'white' }}
                        >
                          {saving ? 'Saving…' : '✓ Save'}
                        </button>
                        <button
                          onClick={cancelEdit}
                          disabled={saving}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
                          style={{
                            background: 'rgba(255,255,255,0.12)',
                            color: '#94a3b8',
                            border: '1px solid rgba(255,255,255,0.15)',
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    <button
                      onClick={isEditing ? undefined : onClose}
                      disabled={isEditing}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl leading-none transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Close"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #E8A020, #d97706)' }}
                  >
                    {getInitials(isEditing && draft ? draft.patient_name : submission.patient_name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-white font-bold text-base leading-tight truncate">
                      {isEditing && draft
                        ? draft.patient_name || 'Anonymous Patient'
                        : submission.patient_name ?? 'Anonymous Patient'}
                    </h2>
                    <p className="text-blue-300 text-xs mt-0.5">
                      {submission.created_at
                        ? new Date(submission.created_at).toLocaleDateString('en-IN', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })
                        : 'Unknown date'}
                    </p>
                    {(isEditing ? draft?.bed_no : submission.bed_no) && (
                      <span className="inline-block mt-1 text-xs bg-white/10 text-blue-300 px-2 py-0.5 rounded-full">
                        Bed {isEditing ? draft?.bed_no : submission.bed_no}
                      </span>
                    )}
                  </div>

                  {submission.sentiment_score !== null && (
                    <div className="shrink-0 flex flex-col items-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: `conic-gradient(${SCORE_COLOR(submission.sentiment_score)} ${
                            submission.sentiment_score * 3.6
                          }deg, rgba(255,255,255,0.1) 0deg)`,
                        }}
                      >
                        <div className="w-10 h-10 rounded-full bg-[#0d2a46] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {submission.sentiment_score}%
                          </span>
                        </div>
                      </div>
                      {submission.sentiment_label && (
                        <span
                          className="text-xs mt-1 font-semibold capitalize"
                          style={{ color: SCORE_COLOR(submission.sentiment_score) }}
                        >
                          {submission.sentiment_label}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Scrollable body ── */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-4 space-y-3 pb-10">

                {saveError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-xs text-red-600">
                    ⚠️ {saveError}
                  </div>
                )}

                {isEditing && draft ? (
                  /* ── EDIT MODE ── */
                  <>
                    {/* Patient details */}

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Patient Details
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2">
                          <label className="block text-xs text-gray-400 mb-1">Patient Name</label>
                          <input
                            className={inputClass}
                            value={draft.patient_name}
                            onChange={e => setDraft(d => d ? { ...d, patient_name: e.target.value } : d)}
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Age</label>
                          <input
                            type="number" min="0" max="150"
                            className={inputClass}
                            value={draft.age}
                            onChange={e => setDraft(d => d ? { ...d, age: e.target.value } : d)}
                            placeholder="Age"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Bed No.</label>
                          <input
                            className={inputClass}
                            value={draft.bed_no}
                            onChange={e => setDraft(d => d ? { ...d, bed_no: e.target.value } : d)}
                            placeholder="e.g. A-12"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Mobile</label>
                          <input
                            type="tel"
                            className={inputClass}
                            value={draft.mobile}
                            onChange={e => setDraft(d => d ? { ...d, mobile: e.target.value } : d)}
                            placeholder="Mobile number"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Visit Date</label>
                          <input
                            type="date"
                            className={inputClass}
                            value={draft.date}
                            onChange={e => setDraft(d => d ? { ...d, date: e.target.value } : d)}
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-xs text-gray-400 mb-1">Email</label>
                          <input
                            type="email"
                            className={inputClass}
                            value={draft.email}
                            onChange={e => setDraft(d => d ? { ...d, email: e.target.value } : d)}
                            placeholder="Email address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Notes & Suggestions
                      </h3>
                      <textarea
                        rows={4}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]/40 focus:bg-white resize-none transition-all"
                        value={draft.suggestions}
                        onChange={e => setDraft(d => d ? { ...d, suggestions: e.target.value } : d)}
                        placeholder="Patient notes and suggestions…"
                      />
                    </div>

                    {/* Ratings per section */}
                    {FEEDBACK_SECTIONS.map(section => (
                      <div
                        key={section.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                      >
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-50">
                          <span className="text-lg shrink-0">{section.icon}</span>
                          <span className="text-sm font-semibold text-gray-800 flex-1">
                            {section.title}
                          </span>
                        </div>
                        <div className="px-4 py-3 space-y-3">
                          {section.questions.map(q => (
                            <div key={q.key}>
                              <p className="text-xs text-gray-500 mb-1.5 leading-snug">{q.label}</p>
                              <div className="flex gap-1.5">
                                {(['Excellent', 'Fair', 'Poor'] as RatingValue[]).map(r => {
                                  const isSelected = draft.ratings[q.key] === r;
                                  const active = RATING_ACTIVE[r];
                                  return (
                                    <button
                                      key={r}
                                      type="button"
                                      onClick={() =>
                                        isSelected ? clearRating(q.key) : setRating(q.key, r)
                                      }
                                      className="flex-1 py-2 rounded-xl text-xs font-semibold border-2 transition-all active:scale-95"
                                      style={
                                        isSelected
                                          ? {
                                              background: active.bg,
                                              color: active.color,
                                              borderColor: active.border,
                                            }
                                          : {
                                              background: '#f8fafc',
                                              color: '#94a3b8',
                                              borderColor: '#e2e8f0',
                                            }
                                      }
                                    >
                                      {RATING_STYLE[r].emoji} {r}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  /* ── VIEW MODE ── */
                  <>
                    {/* Missing patient details banner */}
                    {!submission.patient_name && onUpdate && (
                      <button
                        type="button"
                        onClick={startEdit}
                        className="w-full text-left rounded-2xl p-4 border-2 border-dashed border-amber-300 bg-amber-50 hover:bg-amber-100 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center shrink-0 text-white text-lg">
                            👤
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-amber-800">Patient details missing</p>
                            <p className="text-xs text-amber-600 mt-0.5">Tap to add name, age, bed number and contact info</p>
                          </div>
                          <svg className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    )}

                    {/* NOTES */}
                    {submission.suggestions ? (
                      <div
                        className="rounded-2xl p-4 border"
                        style={{ background: '#fffbeb', borderColor: '#fde68a' }}
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-sm font-bold text-amber-800">Patient's Notes</h3>
                        </div>
                        <div className="relative pl-3.5">
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-300 rounded-full" />
                          <p className="text-sm text-amber-900 leading-relaxed">{submission.suggestions}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl p-3.5 border border-dashed border-gray-200 flex items-center gap-3 bg-white">
                        <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z"
                          />
                        </svg>
                        <p className="text-xs text-gray-400">No notes or suggestions provided</p>
                      </div>
                    )}

                    {/* Patient details card */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Patient Details
                      </h3>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                        {submission.age && (
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">Age</p>
                            <p className="font-semibold text-gray-800">{submission.age} yrs</p>
                          </div>
                        )}
                        {submission.mobile && (
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">Mobile</p>
                            <p className="font-semibold text-gray-800">{submission.mobile}</p>
                          </div>
                        )}
                        {submission.email && (
                          <div className="col-span-2">
                            <p className="text-xs text-gray-400 mb-0.5">Email</p>
                            <p className="font-semibold text-gray-800 break-all">{submission.email}</p>
                          </div>
                        )}
                        {submission.date && (
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">Visit Date</p>
                            <p className="font-semibold text-gray-800">
                              {new Date(submission.date).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        )}
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Google Review</p>
                          <p
                            className="font-semibold text-sm"
                            style={{ color: submission.review_clicked ? '#16a34a' : '#9ca3af' }}
                          >
                            {submission.review_clicked ? '✓ Clicked' : 'Not clicked'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section ratings */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
                        Section Ratings
                      </h3>
                      <div className="space-y-2">
                        {FEEDBACK_SECTIONS.map(section => {
                          const answered = section.questions.filter(q => submission.ratings[q.key]);
                          if (answered.length === 0) return null;

                          const excellentCount = answered.filter(
                            q => submission.ratings[q.key] === 'Excellent'
                          ).length;
                          const fairCount = answered.filter(
                            q => submission.ratings[q.key] === 'Fair'
                          ).length;
                          const poorCount = answered.filter(
                            q => submission.ratings[q.key] === 'Poor'
                          ).length;
                          const sectionScore = Math.round(
                            (excellentCount * 100 + fairCount * 50) / answered.length
                          );

                          return (
                            <div
                              key={section.id}
                              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                            >
                              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-50">
                                <span className="text-lg shrink-0">{section.icon}</span>
                                <span className="text-sm font-semibold text-gray-800 flex-1">
                                  {section.title}
                                </span>
                                <span
                                  className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
                                  style={{
                                    background:
                                      sectionScore >= 70
                                        ? '#f0fdf4'
                                        : sectionScore >= 40
                                        ? '#fffbeb'
                                        : '#fef2f2',
                                    color:
                                      sectionScore >= 70
                                        ? '#15803d'
                                        : sectionScore >= 40
                                        ? '#b45309'
                                        : '#b91c1c',
                                  }}
                                >
                                  {sectionScore}%
                                </span>
                              </div>

                              <div className="px-4 py-2.5 space-y-2">
                                {answered.map(q => {
                                  const rating = submission.ratings[q.key] as RatingValue;
                                  const rs = RATING_STYLE[rating];
                                  return (
                                    <div key={q.key} className="flex items-start justify-between gap-3">
                                      <span className="text-xs text-gray-500 flex-1 leading-snug pt-0.5">
                                        {q.label}
                                      </span>
                                      <span
                                        className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1"
                                        style={{ background: rs.bg, color: rs.color }}
                                      >
                                        <span>{rs.emoji}</span>
                                        <span>{rating}</span>
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>

                              <div className="px-4 pb-3">
                                <div className="flex rounded-full overflow-hidden h-1.5 bg-gray-100">
                                  {excellentCount > 0 && (
                                    <div
                                      className="bg-green-400"
                                      style={{ width: `${(excellentCount / answered.length) * 100}%` }}
                                    />
                                  )}
                                  {fairCount > 0 && (
                                    <div
                                      className="bg-amber-400"
                                      style={{ width: `${(fairCount / answered.length) * 100}%` }}
                                    />
                                  )}
                                  {poorCount > 0 && (
                                    <div
                                      className="bg-red-400"
                                      style={{ width: `${(poorCount / answered.length) * 100}%` }}
                                    />
                                  )}
                                </div>
                                <div className="flex gap-3 mt-1.5 text-xs text-gray-400">
                                  {excellentCount > 0 && (
                                    <span className="text-green-600">{excellentCount} Excellent</span>
                                  )}
                                  {fairCount > 0 && (
                                    <span className="text-amber-600">{fairCount} Fair</span>
                                  )}
                                  {poorCount > 0 && (
                                    <span className="text-red-500">{poorCount} Poor</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Signature */}
                    {submission.signature_url && (
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          Signature
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center">
                          <img
                            src={submission.signature_url}
                            alt="Patient signature"
                            className="max-h-20 max-w-full"
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
