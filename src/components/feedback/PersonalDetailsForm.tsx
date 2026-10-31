import type { PersonalDetails, Lang } from '../../types/feedback';
import { SignaturePad } from './SignaturePad';

interface PersonalDetailsFormProps {
  personal: PersonalDetails;
  suggestions: string;
  signature: string | null;
  onPersonalChange: (field: keyof PersonalDetails, value: string) => void;
  onSuggestionsChange: (text: string) => void;
  onSignatureChange: (dataUrl: string | null) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  submitError: string | null;
  lang?: Lang;
}

const inputClass =
  'w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]/40 transition-all';

function Field({
  label,
  children,
  span2 = false,
}: {
  label: string;
  children: React.ReactNode;
  span2?: boolean;
}) {
  return (
    <div className={span2 ? 'col-span-2' : ''}>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      {children}
    </div>
  );
}

export function PersonalDetailsForm({
  personal,
  suggestions,
  signature,
  onPersonalChange,
  onSuggestionsChange,
  onSignatureChange,
  onSubmit,
  isSubmitting,
  submitError,
  lang = 'en',
}: PersonalDetailsFormProps) {
  const wordCount = suggestions.trim() ? suggestions.trim().split(/\s+/).length : 0;
  const t = (en: string, ta: string) => lang === 'ta' ? ta : en;

  return (
    <div className="mb-3">
      {/* Personal details card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-3">
        <div
          className="h-0.5"
          style={{ background: 'linear-gradient(90deg, #E8A020, #F5C842)' }}
        />
        <div className="p-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-xl shrink-0">
              📋
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1B3A5C]">{t('Your Details', 'உங்கள் விவரங்கள்')}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{t('All fields are optional', 'அனைத்து புலங்களும் விருப்பமானவை')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label={t('Patient Name', 'நோயாளர் பெயர்')} span2>
              <input
                type="text"
                value={personal.patientName}
                onChange={e => onPersonalChange('patientName', e.target.value)}
                placeholder={t('Full name', 'முழு பெயர்')}
                className={inputClass}
              />
            </Field>

            <Field label={t('Age', 'வயது')}>
              <input
                type="number"
                value={personal.age}
                onChange={e => onPersonalChange('age', e.target.value)}
                placeholder={t('Age', 'வயது')}
                min="0"
                max="150"
                className={inputClass}
              />
            </Field>

            <Field label={t('Bed No.', 'படுக்கை எண்')}>
              <input
                type="text"
                value={personal.bedNo}
                onChange={e => onPersonalChange('bedNo', e.target.value)}
                placeholder="e.g. A-12"
                className={inputClass}
              />
            </Field>

            <Field label={t('Mobile', 'கைபேசி')}>
              <input
                type="tel"
                value={personal.mobile}
                onChange={e => onPersonalChange('mobile', e.target.value)}
                placeholder={t('Mobile number', 'கைபேசி எண்')}
                className={inputClass}
              />
            </Field>

            <Field label={t('Date of Visit', 'வருகை தேதி')}>
              <input
                type="date"
                value={personal.date}
                onChange={e => onPersonalChange('date', e.target.value)}
                className={inputClass}
              />
            </Field>

            <Field label={t('Email', 'மின்னஞ்சல்')} span2>
              <input
                type="email"
                value={personal.email}
                onChange={e => onPersonalChange('email', e.target.value)}
                placeholder={t('Email address', 'மின்னஞ்சல் முகவரி')}
                className={inputClass}
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Notes / Suggestions card — prominent */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-3">
        <div
          className="h-0.5"
          style={{ background: 'linear-gradient(90deg, #1B3A5C, #2e5f8a)' }}
        />
        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: '#eff6ff' }}>
              <svg className="w-6 h-6" style={{ color: '#1B3A5C' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1B3A5C]">{t('Your Notes & Suggestions', 'கருத்துக்கள் மற்றும் ஆலோசனைகள்')}</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {t('Share anything that would help us improve', 'எங்கள் சேவையை மேம்படுத்த உதவும் எதையும் பகிரவும்')}
              </p>
            </div>
          </div>

          <div className="relative">
            <textarea
              value={suggestions}
              onChange={e => onSuggestionsChange(e.target.value)}
              placeholder={t(
                'Tell us what we did well, what could be better, or any other thoughts…',
                'நாங்கள் சிறப்பாக செய்தது என்ன, என்ன மேம்படுத்தலாம், வேறு எந்த கருத்துக்களும் பகிரலாம்…'
              )}
              rows={5}
              className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 text-sm bg-gray-50 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]/30 focus:bg-white resize-none transition-all leading-relaxed"
            />
            <div className="flex items-center justify-between mt-1.5 px-1">
              <span className="text-xs text-gray-300">{t('Optional but very valuable', 'விருப்பமானது ஆனால் மிகவும் மதிப்புமிக்கது')}</span>
              {wordCount > 0 && (
                <span className="text-xs text-gray-400">{wordCount} word{wordCount !== 1 ? 's' : ''}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Signature card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-3">
        <div
          className="h-0.5"
          style={{ background: 'linear-gradient(90deg, #E8A020, #F5C842)' }}
        />
        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-xl shrink-0">
              ✍️
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1B3A5C]">{t('Signature', 'கையொப்பம்')}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{t('Draw your signature below', 'கீழே உங்கள் கையொப்பத்தை வரையவும்')}</p>
            </div>
          </div>
          <SignaturePad value={signature} onChange={onSignatureChange} />
        </div>
      </div>

      {/* Error */}
      {submitError && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-2xl p-4 mb-3">
          <span className="text-red-500 text-sm mt-0.5 shrink-0">⚠️</span>
          <p className="text-xs text-red-600 leading-relaxed">{submitError}</p>
        </div>
      )}

      {/* Submit button */}
      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full py-4 rounded-2xl text-sm font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
        style={
          isSubmitting
            ? { background: '#94a3b8', color: 'white' }
            : {
                background: 'linear-gradient(135deg, #1B3A5C 0%, #0d2a46 100%)',
                color: 'white',
                boxShadow: '0 6px 24px rgba(27,58,92,0.35)',
              }
        }
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {t('Submitting your feedback…', 'உங்கள் கருத்தை சமர்ப்பிக்கிறோம்…')}
          </span>
        ) : (
          t('Submit Feedback ✓', 'கருத்தை சமர்ப்பிக்கவும் ✓')
        )}
      </button>
    </div>
  );
}
