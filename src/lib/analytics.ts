declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

/** Fires a GA4 event via gtag.js. No-ops during SSR or if the tag hasn't loaded. */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
