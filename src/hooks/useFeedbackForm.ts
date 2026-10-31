import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../supabase/client';
import { calculateSentiment } from '../lib/feedbackUtils';
import { FEEDBACK_SECTIONS } from '../constants/feedbackQuestions';
import type { RatingValue, PersonalDetails, SentimentLabel } from '../types/feedback';

const STORAGE_KEY = 'gkf-feedback-form';

const initialPersonal: PersonalDetails = {
  patientName: '',
  age: '',
  bedNo: '',
  mobile: '',
  email: '',
  date: new Date().toISOString().slice(0, 10),
};

interface StoredState {
  ratings: Record<string, RatingValue>;
  suggestions: string;
  personal: PersonalDetails;
  currentSection: number;
  completedSections: number[];
}

function loadFromStorage(): Partial<StoredState> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as StoredState;
  } catch {
    return {};
  }
}

function saveToStorage(state: StoredState): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage quota exceeded — silently ignore
  }
}

export function useFeedbackForm() {
  const saved = loadFromStorage();

  const [ratings, setRatings] = useState<Record<string, RatingValue>>(saved.ratings ?? {});
  const [suggestions, setSuggestionsState] = useState<string>(saved.suggestions ?? '');
  const [personal, setPersonalState] = useState<PersonalDetails>(saved.personal ?? initialPersonal);
  const [signatureDataUrl, setSignatureState] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(saved.currentSection ?? 0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(
    new Set(saved.completedSections ?? [])
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sentimentScore, setSentimentScore] = useState(0);
  const [sentimentLabel, setSentimentLabel] = useState<SentimentLabel | null>(null);
  const [reviewClicked, setReviewClicked] = useState(false);
  const submissionIdRef = useRef<string | null>(null);

  useEffect(() => {
    saveToStorage({
      ratings,
      suggestions,
      personal,
      currentSection,
      completedSections: [...completedSections],
    });
  }, [ratings, suggestions, personal, currentSection, completedSections]);

  const setRating = useCallback((key: string, value: RatingValue) => {
    setRatings(prev => ({ ...prev, [key]: value }));
  }, []);

  const setPersonal = useCallback((field: keyof PersonalDetails, value: string) => {
    setPersonalState(prev => ({ ...prev, [field]: value }));
  }, []);

  const setSuggestions = useCallback((text: string) => {
    setSuggestionsState(text);
  }, []);

  const setSignature = useCallback((dataUrl: string | null) => {
    setSignatureState(dataUrl);
  }, []);

  const goToSection = useCallback((index: number) => {
    setCurrentSection(index);
  }, []);

  const goNext = useCallback(() => {
    setCompletedSections(prev => {
      const next = new Set(prev);
      next.add(currentSection);
      return next;
    });
    setCurrentSection(prev => Math.min(prev + 1, FEEDBACK_SECTIONS.length));
  }, [currentSection]);

  const submitForm = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const { score, label } = calculateSentiment(ratings);
      setSentimentScore(score);
      setSentimentLabel(label);

      const id = crypto.randomUUID();

      const { error } = await supabase
        .from('feedback_submissions')
        .insert({
          id,
          patient_name: personal.patientName || null,
          age: personal.age ? parseInt(personal.age, 10) : null,
          bed_no: personal.bedNo || null,
          mobile: personal.mobile || null,
          email: personal.email || null,
          date: personal.date || null,
          signature_url: signatureDataUrl,
          suggestions: suggestions || null,
          sentiment_score: score,
          sentiment_label: label,
          review_prompt_shown: score >= 70,
          review_clicked: false,
          ratings,
        });

      if (error) throw error;
      submissionIdRef.current = id;
      sessionStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Submission failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [ratings, personal, signatureDataUrl, suggestions]);

  const trackReviewClick = useCallback(async (submissionId: string) => {
    setReviewClicked(true);
    await supabase
      .from('feedback_submissions')
      .update({ review_clicked: true })
      .eq('id', submissionId);
  }, []);

  const resetForm = useCallback(() => {
    setRatings({});
    setSuggestionsState('');
    setPersonalState(initialPersonal);
    setSignatureState(null);
    setCurrentSection(0);
    setCompletedSections(new Set());
    setIsSubmitted(false);
    setSubmitError(null);
    setSentimentScore(0);
    setSentimentLabel(null);
    setReviewClicked(false);
    submissionIdRef.current = null;
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    ratings,
    suggestions,
    personal,
    signatureDataUrl,
    currentSection,
    completedSections,
    isSubmitting,
    isSubmitted,
    submitError,
    sentimentScore,
    sentimentLabel,
    reviewClicked,
    submissionId: submissionIdRef.current,
    setRating,
    setPersonal,
    setSuggestions,
    setSignature,
    goToSection,
    goNext,
    submitForm,
    trackReviewClick,
    resetForm,
  };
}
