declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/* ---------- Page Views ---------- */
export const trackPageView = (path: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document.title,
    });
  }
};

/* ---------- WhatsApp Click ---------- */
export const trackWhatsAppClick = (source: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: source,
      contact_method: "whatsapp",
    });
  }
};

/* ---------- Call Click ---------- */
export const trackCallClick = (source: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "call_click", {
      event_category: "engagement",
      event_label: source,
      contact_method: "phone",
    });
  }
};

/* ---------- Appointment Form Submit ---------- */
export const trackAppointmentSubmit = (formName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "appointment_submit", {
      event_category: "conversion",
      event_label: formName,
    });
  }
};

/* ---------- 🆕 DONATION TRACKING (Key for Charity Benchmarking) ---------- */
export const trackDonation = (params: {
  amount: number;
  program: string;
  paymentMethod?: string;
  isRecurring?: boolean;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "donation", {
      event_category: "monetization",
      event_label: params.program,
      currency: "INR",
      value: params.amount,
      donation_program: params.program,
      payment_method: params.paymentMethod || "unknown",
      is_recurring: params.isRecurring || false,
    });
  }
};

/* ---------- 🆕 DONATION INTENT (User clicked donate button) ---------- */
export const trackDonationIntent = (program: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "begin_checkout", {
      event_category: "conversion_funnel",
      event_label: program,
      donation_program: program,
    });
  }
};

/* ---------- 🆕 FORM INTERACTIONS (Better engagement tracking) ---------- */
export const trackFormStart = (formName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "form_start", {
      event_category: "engagement",
      event_label: formName,
      form_name: formName,
    });
  }
};

export const trackFormFieldError = (formName: string, fieldName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "form_error", {
      event_category: "form_interaction",
      event_label: `${formName} - ${fieldName}`,
      form_name: formName,
      field_name: fieldName,
    });
  }
};

/* ---------- 🆕 SOCIAL MEDIA TRACKING ---------- */
export const trackSocialClick = (platform: string, action: string = "visit") => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "social_click", {
      event_category: "engagement",
      event_label: `${platform} - ${action}`,
      social_platform: platform,
      social_action: action,
    });
  }
};

/* ---------- 🆕 VIDEO ENGAGEMENT ---------- */
export const trackVideoPlay = (videoTitle: string, videoLocation: string = "unknown") => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "video_start", {
      event_category: "engagement",
      event_label: videoTitle,
      video_title: videoTitle,
      video_location: videoLocation,
    });
  }
};

export const trackVideoComplete = (videoTitle: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "video_complete", {
      event_category: "engagement",
      event_label: videoTitle,
      video_title: videoTitle,
    });
  }
};

/* ---------- 🆕 FILE DOWNLOADS ---------- */
export const trackDownload = (fileName: string, fileType: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "file_download", {
      event_category: "engagement",
      event_label: fileName,
      file_name: fileName,
      file_type: fileType,
    });
  }
};

/* ---------- 🆕 SEARCH TRACKING (if you have site search) ---------- */
export const trackSearch = (searchTerm: string, resultsCount: number = 0) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "search", {
      event_category: "engagement",
      search_term: searchTerm,
      results_count: resultsCount,
    });
  }
};

/* ---------- 🆕 SCROLL DEPTH (Engagement indicator) ---------- */
export const trackScrollDepth = (percentage: number, page: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "scroll", {
      event_category: "engagement",
      event_label: `${page} - ${percentage}%`,
      scroll_depth: percentage,
      page_path: page,
    });
  }
};

/* ---------- 🆕 EMAIL CLICK ---------- */
export const trackEmailClick = (source: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "email_click", {
      event_category: "engagement",
      event_label: source,
      contact_method: "email",
    });
  }
};

/* ---------- 🆕 PROGRAM INTEREST (User clicked to learn more about a program) ---------- */
export const trackProgramInterest = (programName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "program_interest", {
      event_category: "engagement",
      event_label: programName,
      program_name: programName,
    });
  }
};

/* ---------- 🆕 CTA CLICK (Call-to-Action buttons) ---------- */
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "engagement",
      event_label: `${ctaName} - ${ctaLocation}`,
      cta_name: ctaName,
      cta_location: ctaLocation,
    });
  }
};

/* ---------- 🆕 OUTBOUND LINK TRACKING ---------- */
export const trackOutboundClick = (url: string, linkText: string = "") => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click", {
      event_category: "outbound",
      event_label: linkText || url,
      outbound_url: url,
    });
  }
};

/* ---------- 🆕 ERROR TRACKING (Technical issues) ---------- */
export const trackError = (errorType: string, errorMessage: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "exception", {
      description: `${errorType}: ${errorMessage}`,
      fatal: false,
    });
  }
};

/* ---------- 🆕 TIMING EVENTS (Performance tracking) ---------- */
export const trackTiming = (category: string, variable: string, timeMs: number) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "timing_complete", {
      name: variable,
      value: timeMs,
      event_category: category,
    });
  }
};
