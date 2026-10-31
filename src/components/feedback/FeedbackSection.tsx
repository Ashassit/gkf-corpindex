import { RatingButtons } from './RatingButtons';
import type { FeedbackSection as FeedbackSectionType, RatingValue, Lang } from '../../types/feedback';

interface FeedbackSectionProps {
  section: FeedbackSectionType;
  index: number;
  isOpen: boolean;
  isComplete: boolean;
  ratings: Record<string, RatingValue>;
  onToggle: () => void;
  onRate: (key: string, value: RatingValue) => void;
  onNext: () => void;
  isLast: boolean;
  lang?: Lang;
}

export function FeedbackSection({
  section,
  index,
  isOpen,
  isComplete,
  ratings,
  onToggle,
  onRate,
  onNext,
  isLast,
  lang = 'en',
}: FeedbackSectionProps) {
  const answeredCount = section.questions.filter(q => ratings[q.key]).length;
  const allAnswered = answeredCount === section.questions.length;

  return (
    <div
      className={[
        'rounded-2xl overflow-hidden mb-3 transition-all duration-200',
        isOpen
          ? 'shadow-lg ring-1 ring-[#1B3A5C]/10 bg-white'
          : isComplete
          ? 'shadow-sm ring-1 ring-green-200/80 bg-white'
          : 'shadow-sm bg-white',
      ].join(' ')}
    >
      {/* Top gradient accent strip */}
      <div
        className="h-0.5 w-full"
        style={{
          background: isOpen
            ? 'linear-gradient(90deg, #E8A020, #F5C842)'
            : isComplete
            ? 'linear-gradient(90deg, #4ade80, #10b981)'
            : '#e5e7eb',
        }}
      />

      {/* Header button */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-4 text-left"
      >
        {/* Step number + icon */}
        <div className="relative shrink-0">
          <div
            className={[
              'w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all',
              isOpen ? 'bg-amber-50' : isComplete ? 'bg-green-50' : 'bg-gray-50',
            ].join(' ')}
          >
            {isComplete ? '✅' : section.icon}
          </div>
          <div
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold leading-none"
            style={
              isComplete
                ? { background: '#4ade80', color: 'white' }
                : isOpen
                ? { background: '#E8A020', color: 'white' }
                : { background: '#e5e7eb', color: '#9ca3af' }
            }
          >
            {index + 1}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-[#1B3A5C] leading-tight">
            {lang === 'ta' && section.titleTa ? section.titleTa : section.title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {isComplete
              ? (lang === 'ta' ? 'அனைத்து கேள்விகளும் பதிலளிக்கப்பட்டன' : 'All questions answered')
              : isOpen && answeredCount > 0
              ? `${answeredCount} / ${section.questions.length}`
              : `${section.questions.length} ${lang === 'ta' ? 'கேள்விகள்' : `question${section.questions.length !== 1 ? 's' : ''}`}`}
          </p>
        </div>

        {isComplete ? (
          <span className="shrink-0 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
            Done ✓
          </span>
        ) : !isComplete && answeredCount > 0 && !isOpen ? (
          <span className="shrink-0 w-7 h-7 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-xs font-bold text-amber-700">
            {answeredCount}
          </span>
        ) : null}

        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Open body */}
      {isOpen && (
        <div className="px-4 pb-5">
          <div className="border-t border-gray-100 pt-4">
            {section.subtitle && (
              <p className="text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide mb-3 px-0.5">
                {lang === 'ta' && section.subtitleTa ? section.subtitleTa : section.subtitle}
              </p>
            )}
            {section.questions.map((q, qi) => (
              <div key={q.key}>
                {qi > 0 && <div className="border-t border-gray-50 my-1" />}
                <RatingButtons
                  questionKey={q.key}
                  label={q.label}
                  labelTa={q.labelTa}
                  value={ratings[q.key]}
                  onChange={onRate}
                  lang={lang}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            disabled={!allAnswered}
            className="mt-2 w-full py-4 rounded-2xl text-sm font-bold transition-all disabled:cursor-not-allowed active:scale-95"
            style={
              allAnswered
                ? {
                    background: 'linear-gradient(135deg, #1B3A5C 0%, #0d2a46 100%)',
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(27,58,92,0.3)',
                  }
                : {
                    background: '#f1f5f9',
                    color: '#94a3b8',
                  }
            }
          >
            {!allAnswered ? (
              <span>
                {lang === 'ta'
                  ? `இன்னும் ${section.questions.length - answeredCount} கேள்விகளுக்கு பதிலளிக்கவும்`
                  : `Answer ${section.questions.length - answeredCount} more to continue`}
              </span>
            ) : isLast ? (
              lang === 'ta' ? 'உங்கள் விவரங்களுக்கு தொடரவும் →' : 'Continue to Your Details →'
            ) : (
              lang === 'ta' ? 'அடுத்த பகுதி →' : 'Next Section →'
            )}
          </button>
        </div>
      )}
    </div>
  );
}
