import type { RatingValue, Lang } from '../../types/feedback';

interface RatingButtonsProps {
  questionKey: string;
  label: string;
  labelTa?: string;
  value: RatingValue | undefined;
  onChange: (key: string, value: RatingValue) => void;
  lang?: Lang;
}

interface RatingOption {
  value: RatingValue;
  emoji: string;
  label: string;
  labelTa: string;
  idleBorder: string;
  idleHover: string;
  activeBg: string;
  activeBorder: string;
  activeShadow: string;
}

const OPTIONS: RatingOption[] = [
  {
    value: 'Excellent',
    emoji: '😊',
    label: 'Excellent',
    labelTa: 'நன்று',
    idleBorder: 'border-gray-200',
    idleHover: 'hover:border-green-300 hover:bg-green-50/60',
    activeBg: 'linear-gradient(145deg, #4ade80 0%, #16a34a 100%)',
    activeBorder: 'border-green-500',
    activeShadow: '0 6px 20px rgba(74,222,128,0.35)',
  },
  {
    value: 'Fair',
    emoji: '😐',
    label: 'Fair',
    labelTa: 'பரவாயில்லை',
    idleBorder: 'border-gray-200',
    idleHover: 'hover:border-amber-300 hover:bg-amber-50/60',
    activeBg: 'linear-gradient(145deg, #fbbf24 0%, #d97706 100%)',
    activeBorder: 'border-amber-500',
    activeShadow: '0 6px 20px rgba(251,191,36,0.35)',
  },
  {
    value: 'Poor',
    emoji: '😞',
    label: 'Poor',
    labelTa: 'நன்றாக இல்லை',
    idleBorder: 'border-gray-200',
    idleHover: 'hover:border-red-300 hover:bg-red-50/60',
    activeBg: 'linear-gradient(145deg, #f87171 0%, #dc2626 100%)',
    activeBorder: 'border-red-500',
    activeShadow: '0 6px 20px rgba(248,113,113,0.35)',
  },
];

export function RatingButtons({ questionKey, label, labelTa, value, onChange, lang = 'en' }: RatingButtonsProps) {
  const displayLabel = lang === 'ta' && labelTa ? labelTa : label;

  return (
    <div className="mb-5">
      <p className="text-sm font-semibold text-gray-700 mb-3 leading-snug">{displayLabel}</p>
      <div className="flex gap-2">
        {OPTIONS.map(opt => {
          const isSelected = value === opt.value;
          const optLabel = lang === 'ta' ? opt.labelTa : opt.label;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(questionKey, opt.value)}
              className={[
                'flex-1 rounded-2xl border-2 flex flex-col items-center justify-center gap-1.5 py-4',
                'font-semibold transition-all duration-200 cursor-pointer active:scale-95 relative overflow-hidden',
                isSelected
                  ? `${opt.activeBorder} text-white`
                  : `${opt.idleBorder} bg-white text-gray-500 ${opt.idleHover}`,
              ].join(' ')}
              style={
                isSelected
                  ? { background: opt.activeBg, boxShadow: opt.activeShadow }
                  : undefined
              }
            >
              {isSelected && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
              <span className={`leading-none transition-all duration-200 ${isSelected ? 'text-3xl' : 'text-2xl'}`}>
                {opt.emoji}
              </span>
              <span className={`text-xs font-bold text-center leading-tight px-0.5 ${isSelected ? 'text-white' : 'text-gray-500'}`}>
                {optLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
