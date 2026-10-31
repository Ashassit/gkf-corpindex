import { GOOGLE_REVIEW_URL, SENTIMENT_THRESHOLD } from '../../constants/feedbackQuestions';

interface ThankYouScreenProps {
  sentimentScore: number;
  submissionId: string | null;
  reviewClicked: boolean;
  onReviewClick: (id: string) => void;
  onReset: () => void;
}

export function ThankYouScreen({
  sentimentScore,
  submissionId,
  reviewClicked,
  onReviewClick,
  onReset,
}: ThankYouScreenProps) {
  const showReviewPrompt = sentimentScore >= SENTIMENT_THRESHOLD && !reviewClicked;
  const isPositive = sentimentScore >= 70;
  const isMixed = sentimentScore >= 40 && sentimentScore < 70;

  function handleReviewClick() {
    if (submissionId) onReviewClick(submissionId);
    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
  }

  const scoreColor = isPositive ? '#4ade80' : isMixed ? '#fbbf24' : '#f87171';

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-white"
      style={{ background: 'linear-gradient(160deg, #1B3A5C 0%, #0d2a46 55%, #091d33 100%)' }}
    >
      <div className="w-full max-w-sm text-center">
        <div className="text-7xl mb-5 animate-bounce">{isPositive ? '🎉' : '🙏'}</div>

        <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
        <p className="text-blue-300 text-sm mb-6 leading-relaxed">
          Your feedback has been received successfully and will help us improve care at GKF Hospital.
        </p>

        {/* Score badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 mb-8">
          <div className="text-left">
            <p className="text-blue-400 text-xs">Your satisfaction score</p>
            <p className="font-bold text-2xl" style={{ color: scoreColor }}>{sentimentScore}%</p>
          </div>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
            style={{ background: `conic-gradient(${scoreColor} ${sentimentScore * 3.6}deg, rgba(255,255,255,0.1) 0deg)` }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0d2a46] text-sm font-bold" style={{ color: scoreColor }}>
              {isPositive ? '😊' : isMixed ? '😐' : '😔'}
            </div>
          </div>
        </div>

        {showReviewPrompt && (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#E8A020] rounded-xl flex items-center justify-center text-lg shrink-0">
                ⭐
              </div>
              <div>
                <p className="text-white text-sm font-semibold">You had a great experience!</p>
                <p className="text-blue-300 text-xs">Help other patients discover GKF</p>
              </div>
            </div>
            <p className="text-blue-300 text-xs mb-4 leading-relaxed">
              Sharing your positive experience on Google helps other patients make informed decisions.
            </p>
            <button
              onClick={handleReviewClick}
              className="w-full py-3 bg-[#E8A020] text-white rounded-xl text-sm font-bold shadow-lg shadow-amber-900/30 active:scale-95 transition-transform"
            >
              Write a Google Review →
            </button>
          </div>
        )}

        <button
          onClick={onReset}
          className="text-blue-400 text-sm hover:text-blue-200 transition-colors underline underline-offset-2"
        >
          Submit another response
        </button>
      </div>
    </div>
  );
}
