import { MetadataRoute } from "next";

/**
 * ROBOTS.TXT GENERATOR
 *
 * Functional Overview:
 * - Purpose: Instructions for search engine crawlers.
 * - Rules:
 *   - Allows indexing of the main site (`/`).
 *   - Disallows sensitive/system paths (`/api/`, `/_next/`, `/admin/`).
 *   - Sets a modest `crawlDelay` to prevent server overload.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/login",
          "/quote/success",
          "/test-popups/",
          "/maintenance/",
          "/*.json$",
          // Legal pages — accessible but not indexed
          "/company-policy",
          "/cookie-policy",
          "/refund-policy",
          "/privacy",
          "/terms",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/login",
          "/quote/success",
          "/test-popups/",
          "/maintenance/",
          "/company-policy",
          "/cookie-policy",
          "/refund-policy",
          "/privacy",
          "/terms",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/login",
          "/quote/success",
          "/test-popups/",
          "/maintenance/",
          "/company-policy",
          "/cookie-policy",
          "/refund-policy",
          "/privacy",
          "/terms",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://www.vexelsystems.lk/sitemap.xml",
  };
}
