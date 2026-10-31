export type RatingValue = 'Excellent' | 'Fair' | 'Poor';
export type SentimentLabel = 'positive' | 'mixed' | 'poor';

export interface FeedbackQuestion {
  key: string;
  label: string;
  labelTa?: string;
}

export interface FeedbackSection {
  id: string;
  title: string;
  titleTa?: string;
  subtitle?: string;
  subtitleTa?: string;
  icon: string;
  questions: FeedbackQuestion[];
}

export type Lang = 'en' | 'ta';

export interface PersonalDetails {
  patientName: string;
  age: string;
  bedNo: string;
  mobile: string;
  email: string;
  date: string;
}

export interface FeedbackFormState {
  ratings: Record<string, RatingValue>;
  suggestions: string;
  personal: PersonalDetails;
  signatureDataUrl: string | null;
  currentSection: number;
  completedSections: Set<number>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError: string | null;
  sentimentScore: number;
  sentimentLabel: SentimentLabel | null;
  reviewClicked: boolean;
}

export interface FeedbackSubmission {
  id: string;
  created_at: string;
  patient_name: string | null;
  age: number | null;
  bed_no: string | null;
  mobile: string | null;
  email: string | null;
  date: string | null;
  signature_url: string | null;
  suggestions: string | null;
  sentiment_score: number | null;
  sentiment_label: SentimentLabel | null;
  review_prompt_shown: boolean;
  review_clicked: boolean;
  ratings: Record<string, RatingValue>;
}

export interface DashboardFilters {
  search: string;
  sentiment: SentimentLabel | 'all';
  dateFrom: string;
  dateTo: string;
}

export interface DashboardStats {
  total: number;
  thisMonth: number;
  avgScore: number;
  reviewClicks: number;
  positiveCount: number;
  mixedCount: number;
  poorCount: number;
}

export interface SectionAverage {
  sectionId: string;
  sectionTitle: string;
  excellentPct: number;
  fairPct: number;
  poorPct: number;
}
