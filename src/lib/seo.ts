/**
 * Shared SEO constants and structured-data (JSON-LD) helpers.
 *
 * Production domain confirmed by the site owner: https://proofofpotential.co.za
 * No GA4 / Google Search Console property exists yet — nothing here fabricates
 * tracking IDs. No social profiles exist yet — Organization schema intentionally
 * omits `sameAs` until real profiles exist.
 */

export const SITE_URL = "https://proofofpotential.co.za";
export const SITE_NAME = "Proof of Potential";
export const SITE_DESCRIPTION =
  "Proof of Potential helps young South Africans discover careers where they'll thrive through skills-based assessment, and helps employers hire on demonstrated capability instead of the CV alone.";

/** Prefixes a root-relative path (e.g. a bundled image URL or route path) with the production domain. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Site-wide Organization + WebSite JSON-LD. Injected once via the root route's
 * `head().scripts`, so it renders on every page. Real contact emails are used
 * (from the Contact page); no addresses, phone numbers, or social links are
 * invented.
 */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        areaServed: "ZA",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "hello@proofofpotential.co.za",
            contactType: "customer service",
            areaServed: "ZA",
          },
          {
            "@type": "ContactPoint",
            email: "partners@proofofpotential.co.za",
            contactType: "sales",
            areaServed: "ZA",
          },
          {
            "@type": "ContactPoint",
            email: "media@proofofpotential.co.za",
            contactType: "media relations",
            areaServed: "ZA",
          },
          {
            "@type": "ContactPoint",
            email: "research@proofofpotential.co.za",
            contactType: "other",
            areaServed: "ZA",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-ZA",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

/** Builds a BreadcrumbList JSON-LD block. Pass the full trail including Home. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
