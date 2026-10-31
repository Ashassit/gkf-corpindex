import type { RatingValue, SentimentLabel, FeedbackSubmission, SectionAverage } from '../types/feedback';
import { FEEDBACK_SECTIONS } from '../constants/feedbackQuestions';

export function calculateSentiment(
  ratings: Record<string, RatingValue>
): { score: number; label: SentimentLabel } {
  const values = Object.values(ratings);
  if (values.length === 0) return { score: 0, label: 'poor' };
  const excellentCount = values.filter(v => v === 'Excellent').length;
  const score = Math.round((excellentCount / values.length) * 100);
  const label: SentimentLabel =
    score >= 70 ? 'positive' : score >= 40 ? 'mixed' : 'poor';
  return { score, label };
}

export function computeSectionAverages(
  submissions: FeedbackSubmission[]
): SectionAverage[] {
  return FEEDBACK_SECTIONS.map(section => {
    const keys = section.questions.map(q => q.key);
    let excellent = 0, fair = 0, poor = 0, total = 0;
    submissions.forEach(sub => {
      keys.forEach(key => {
        const val = sub.ratings[key];
        if (val === 'Excellent') excellent++;
        else if (val === 'Fair') fair++;
        else if (val === 'Poor') poor++;
        if (val) total++;
      });
    });
    return {
      sectionId: section.id,
      sectionTitle: section.title,
      excellentPct: total ? Math.round((excellent / total) * 100) : 0,
      fairPct: total ? Math.round((fair / total) * 100) : 0,
      poorPct: total ? Math.round((poor / total) * 100) : 0,
    };
  });
}

export function exportToCSV(submissions: FeedbackSubmission[]): void {
  const allKeys = FEEDBACK_SECTIONS.flatMap(s => s.questions.map(q => q.key));
  const headers = [
    'Date', 'Name', 'Age', 'Bed No.', 'Mobile', 'Email',
    'Score %', 'Sentiment', ...allKeys, 'Suggestions', 'Review Clicked',
  ];
  const rows = submissions.map(sub => [
    sub.created_at ? new Date(sub.created_at).toLocaleDateString() : '',
    sub.patient_name ?? '',
    sub.age ?? '',
    sub.bed_no ?? '',
    sub.mobile ?? '',
    sub.email ?? '',
    sub.sentiment_score ?? '',
    sub.sentiment_label ?? '',
    ...allKeys.map(k => sub.ratings[k] ?? ''),
    sub.suggestions ?? '',
    sub.review_clicked ? 'Yes' : 'No',
  ]);
  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `gkf-feedback-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
