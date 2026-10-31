import { useEffect, useState } from 'react';
import { FeedbackHeader } from '../components/feedback/FeedbackHeader';
import { FeedbackSection } from '../components/feedback/FeedbackSection';
import { PersonalDetailsForm } from '../components/feedback/PersonalDetailsForm';
import { ThankYouScreen } from '../components/feedback/ThankYouScreen';
import { useFeedbackForm } from '../hooks/useFeedbackForm';
import { FEEDBACK_SECTIONS } from '../constants/feedbackQuestions';
import type { Lang } from '../types/feedback';

function WelcomeScreen({ onStart, lang, onLangToggle }: { onStart: () => void; lang: Lang; onLangToggle: () => void }) {
  const t = (en: string, ta: string) => lang === 'ta' ? ta : en;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1B3A5C 0%, #0d2a46 55%, #091d33 100%)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8A020, transparent)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', transform: 'translate(-30%, 30%)' }}
      />

      {/* Language toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={onLangToggle}
          className="rounded-xl px-4 py-2 text-sm font-bold transition-all active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.12)',
            color: '#F5C842',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {lang === 'ta' ? 'English' : 'தமிழ்'}
        </button>
      </div>

      <div className="w-full max-w-xs relative z-10">
        {/* Hospital icon with ring */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl opacity-30"
              style={{ background: '#E8A020', transform: 'scale(1.18)', filter: 'blur(12px)' }}
            />
            <div className="w-24 h-24 rounded-3xl bg-[#E8A020] flex items-center justify-center shadow-2xl relative">
              <span className="text-5xl">🏥</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-2 leading-tight">
          {t('How was your\nexperience?', 'உங்கள் அனுபவம்\nஎப்படி இருந்தது?')}
        </h1>
        <p className="text-[#E8A020] text-sm font-semibold text-center mb-1">
          Grace Kennett Foundation Hospital
        </p>
        <p className="text-blue-400 text-xs text-center mb-8 max-w-[260px] mx-auto leading-relaxed">
          {t(
            'Your honest feedback helps us deliver better care to every patient.',
            'உங்கள் நேர்மையான கருத்து ஒவ்வொரு நோயாளருக்கும் சிறந்த சேவை வழங்க உதவுகிறது.'
          )}
        </p>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-95 mb-3 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #E8A020 0%, #d97706 100%)',
            color: 'white',
            boxShadow: '0 8px 30px rgba(232,160,32,0.4)',
          }}
        >
          {t('Share My Feedback →', 'என் கருத்தை பகிர →')}
        </button>

        <p className="text-center text-blue-500 text-xs flex items-center justify-center gap-1.5 mb-8">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
          {t('All responses are strictly confidential', 'அனைத்து பதில்களும் இரகசியமாக வைக்கப்படும்')}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { num: '10K+', label: t('Patients\nServed', 'சிகிச்சை\nபெற்றோர்'), icon: '🏥' },
            { num: '4.8★', label: t('Average\nRating', 'சராசரி\nமதிப்பீடு'), icon: '⭐' },
            { num: '98%', label: t('Would\nRecommend', 'பரிந்துரைப்பர்'), icon: '❤️' },
          ].map(stat => (
            <div
              key={stat.num}
              className="text-center rounded-2xl py-3.5 px-2"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div className="text-base mb-1">{stat.icon}</div>
              <div className="text-[#F5C842] font-bold text-sm leading-none mb-1">{stat.num}</div>
              <div className="text-blue-400 text-xs leading-tight" style={{ whiteSpace: 'pre-line' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeedbackPage() {
  const [started, setStarted] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const form = useFeedbackForm();

  const toggleLang = () => setLang(l => l === 'en' ? 'ta' : 'en');

  useEffect(() => {
    document.title = 'Patient Feedback | Grace Kennett Foundation';
  }, []);

  if (form.isSubmitted) {
    return (
      <ThankYouScreen
        sentimentScore={form.sentimentScore}
        submissionId={form.submissionId}
        reviewClicked={form.reviewClicked}
        onReviewClick={form.trackReviewClick}
        onReset={form.resetForm}
      />
    );
  }

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} lang={lang} onLangToggle={toggleLang} />;
  }

  const showPersonalForm =
    form.currentSection === FEEDBACK_SECTIONS.length ||
    form.completedSections.size === FEEDBACK_SECTIONS.length;

  return (
    <div className="min-h-screen pb-24 mt-24 ml-20 mr-20" style={{ background: '#f1f5f9' }}>
      <FeedbackHeader
        totalSections={FEEDBACK_SECTIONS.length + 1}
        completedSections={form.completedSections.size}
        lang={lang}
        onLangToggle={toggleLang}
      />
      <div className="max-w-2xl mx-auto px-4 pt-4">
        {FEEDBACK_SECTIONS.map((section, index) => (
          <FeedbackSection
            key={section.id}
            section={section}
            index={index}
            isOpen={form.currentSection === index}
            isComplete={form.completedSections.has(index)}
            ratings={form.ratings}
            onToggle={() =>
              form.goToSection(form.currentSection === index ? -1 : index)
            }
            onRate={form.setRating}
            onNext={form.goNext}
            isLast={index === FEEDBACK_SECTIONS.length - 1}
            lang={lang}
          />
        ))}

        {showPersonalForm && (
          <PersonalDetailsForm
            personal={form.personal}
            suggestions={form.suggestions}
            signature={form.signatureDataUrl}
            onPersonalChange={form.setPersonal}
            onSuggestionsChange={form.setSuggestions}
            onSignatureChange={form.setSignature}
            onSubmit={form.submitForm}
            isSubmitting={form.isSubmitting}
            submitError={form.submitError}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
}
