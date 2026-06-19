// Google Analytics 4 event tracking utility
export const GA_MEASUREMENT_ID = "G-L5H9P0NV7C";

// Send a custom event to GA4
export function sendGAEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params || {});
  }
}

// Funnel events for Business Sellability Assessment
export const trackBSAStart = (source?: string) =>
  sendGAEvent("bsa_start", { source: source || "organic" });

export const trackBSAComplete = (score: number, tier: string) =>
  sendGAEvent("bsa_complete", { score, tier });

export const trackBSABookCall = (tier: string, score: number) =>
  sendGAEvent("bsa_book_call", { tier, score });

export const trackBSACallbackRequest = (tier: string, score: number) =>
  sendGAEvent("bsa_callback_request", { tier, score });

export const trackPageView = (page: string) =>
  sendGAEvent("page_view_custom", { page });

export const trackContactFormSubmit = (source: string) =>
  sendGAEvent("contact_form_submit", { source });
