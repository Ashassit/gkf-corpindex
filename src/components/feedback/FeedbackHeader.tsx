import logobutter from "../../assets/logo2.png";
import type { Lang } from '../../types/feedback';

interface FeedbackHeaderProps {
  totalSections: number;
  completedSections: number;
  lang: Lang;
  onLangToggle: () => void;
}

export function FeedbackHeader({ totalSections, completedSections, lang, onLangToggle }: FeedbackHeaderProps) {
  const progress = totalSections > 0
    ? Math.round((completedSections / totalSections) * 100)
    : 0;

  return (
    <div
      className="sticky top-0 z-40 shadow-lg p-10"
      style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #0d2a46 100%)' }}
    >
      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Brand row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-900/30">
            <img src={logobutter} className="w-10 h-10 object-contain" alt="GKF" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight">
              Grace Kennett Foundation
            </p>
            <p className="text-blue-300 text-xs">
              {lang === 'ta' ? 'நோயாளர் அனுபவ கருத்துக்கணிப்பு' : 'Patient Experience Survey'}
            </p>
          </div>

          {/* Language toggle */}
          <button
            type="button"
            onClick={onLangToggle}
            className="shrink-0 rounded-xl px-3 py-2 text-xs font-bold transition-all active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: '#F5C842',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {lang === 'ta' ? 'English' : 'தமிழ்'}
          </button>

          <div
            className="shrink-0 rounded-xl px-3 py-1.5 text-right"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <div className="font-bold text-xl leading-none" style={{ color: '#E8A020' }}>
              {progress}%
            </div>
            <div className="text-blue-400 text-xs">{lang === 'ta' ? 'முடிந்தது' : 'done'}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative bg-blue-950/60 rounded-full h-2 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #E8A020, #F5C842)',
              boxShadow: progress > 0 ? '0 0 10px rgba(232,160,32,0.5)' : 'none',
            }}
          />
        </div>

        {/* Step dots */}
        <div className="flex items-center justify-between mt-2.5">
          {Array.from({ length: totalSections }).map((_, i) => {
            const done = i < completedSections;
            const active = i === completedSections;
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active ? 20 : 6,
                  height: 6,
                  background: done
                    ? '#4ade80'
                    : active
                    ? '#E8A020'
                    : 'rgba(255,255,255,0.15)',
                  boxShadow: active ? '0 0 8px rgba(232,160,32,0.6)' : 'none',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
