import { useState, useEffect, useCallback } from 'react';
import type { RealtimeChannel } from '@supabase/supabase-js';
import { supabase } from '../supabase/client';
import { computeSectionAverages, exportToCSV } from '../lib/feedbackUtils';
import type {
  FeedbackSubmission,
  DashboardFilters,
  DashboardStats,
  SectionAverage,
  SentimentLabel,
} from '../types/feedback';

const PAGE_SIZE = 20;

const initialFilters: DashboardFilters = {
  search: '',
  sentiment: 'all',
  dateFrom: '',
  dateTo: '',
};

const initialStats: DashboardStats = {
  total: 0,
  thisMonth: 0,
  avgScore: 0,
  reviewClicks: 0,
  positiveCount: 0,
  mixedCount: 0,
  poorCount: 0,
};

export function useDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const [submissions, setSubmissions] = useState<FeedbackSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPageState] = useState(1);

  const [filters, setFiltersState] = useState<DashboardFilters>(initialFilters);
  const [stats, setStats] = useState<DashboardStats>(initialStats);
  const [sectionAverages, setSectionAverages] = useState<SectionAverage[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FeedbackSubmission | null>(null);
  const [newSubmissionAlert, setNewSubmissionAlert] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setIsAuthenticated(true);
        setUserEmail(data.session.user.email ?? null);
      }
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setUserEmail(session?.user.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchSubmissions = useCallback(async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    setError(null);
    try {
      let query = supabase
        .from('feedback_submissions')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

      if (filters.search) {
        query = query.or(
          `patient_name.ilike.%${filters.search}%,mobile.ilike.%${filters.search}%,email.ilike.%${filters.search}%`
        );
      }
      if (filters.sentiment !== 'all') {
        query = query.eq('sentiment_label', filters.sentiment as SentimentLabel);
      }
      if (filters.dateFrom) {
        query = query.gte('created_at', filters.dateFrom);
      }
      if (filters.dateTo) {
        query = query.lte('created_at', `${filters.dateTo}T23:59:59`);
      }

      const { data, error: fetchError, count } = await query;
      if (fetchError) throw fetchError;
      setSubmissions((data ?? []) as FeedbackSubmission[]);
      setTotal(count ?? 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch submissions');
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, page, filters]);

  const fetchStats = useCallback(async () => {
    if (!isAuthenticated) return;
    try {
      const { data } = await supabase
        .from('feedback_submissions')
        .select('sentiment_label, sentiment_score, review_clicked, created_at');

      if (!data) return;

      const now = new Date();
      const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
      const thisMonth = data.filter(d => d.created_at >= thisMonthStart).length;
      const scores = data
        .map(d => d.sentiment_score)
        .filter((s): s is number => s !== null);
      const avgScore = scores.length
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;

      setStats({
        total: data.length,
        thisMonth,
        avgScore,
        reviewClicks: data.filter(d => d.review_clicked).length,
        positiveCount: data.filter(d => d.sentiment_label === 'positive').length,
        mixedCount: data.filter(d => d.sentiment_label === 'mixed').length,
        poorCount: data.filter(d => d.sentiment_label === 'poor').length,
      });

      setSectionAverages(computeSectionAverages(data as FeedbackSubmission[]));
    } catch {
      // stats failure is non-critical
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
      fetchStats();
    }
  }, [fetchSubmissions, fetchStats, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;

    let channel: RealtimeChannel;
    channel = supabase
      .channel('feedback_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'feedback_submissions' },
        () => {
          fetchSubmissions();
          fetchStats();
          setNewSubmissionAlert(true);
          setTimeout(() => setNewSubmissionAlert(false), 5000);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAuthenticated, fetchSubmissions, fetchStats]);

  const login = useCallback(async (email: string, password: string) => {
    setLoginError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUserEmail(null);
    setSubmissions([]);
    setStats(initialStats);
  }, []);

  const setFilter = useCallback((patch: Partial<DashboardFilters>) => {
    setFiltersState(prev => ({ ...prev, ...patch }));
    setPageState(1);
  }, []);

  const clearFilters = useCallback(() => {
    setFiltersState(initialFilters);
    setPageState(1);
  }, []);

  const setPage = useCallback((p: number) => {
    setPageState(p);
  }, []);

  const selectSubmission = useCallback((sub: FeedbackSubmission | null) => {
    setSelectedSubmission(sub);
  }, []);

  const exportCSV = useCallback(() => {
    exportToCSV(submissions);
  }, [submissions]);

  const updateSubmission = useCallback(async (id: string, patch: Partial<FeedbackSubmission>) => {
    const { error } = await supabase
      .from('feedback_submissions')
      .update(patch)
      .eq('id', id);
    if (error) throw error;
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, ...patch } : s));
    setSelectedSubmission(prev => prev?.id === id ? { ...prev, ...patch } : prev);
  }, []);

  return {
    isAuthenticated,
    authLoading,
    userEmail,
    loginError,
    submissions,
    loading,
    error,
    total,
    page,
    pageSize: PAGE_SIZE,
    filters,
    stats,
    sectionAverages,
    selectedSubmission,
    newSubmissionAlert,
    login,
    logout,
    setFilter,
    clearFilters,
    setPage,
    selectSubmission,
    exportCSV,
    updateSubmission,
  };
}
