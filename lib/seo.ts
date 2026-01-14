/**
 * SEO UTILITIES
 *
 * This file provides utilities for generating SEO metadata and structured data
 * across the entire application.
 *
 * Purpose:
 * - Centralize SEO configuration
 * - Generate page-specific metadata
 * - Create JSON-LD structured data for rich snippets
 * - Ensure consistent SEO across all pages
 *
 * Used by:
 * - All pages for metadata generation
 * - Dynamic routes (services, products, blog posts)
 * - Layout for global SEO configuration
 *
 * Benefits:
 * - Better search engine rankings
 * - Rich snippets in search results
 * - Improved social media sharing
 * - Consistent metadata structure
 */

import { Metadata } from "next";
import { companyDetails } from "./companydetails";

/**
 * BASE URL
 * The production URL of the website
 * Used for generating absolute URLs in metadata and structured data
 */
export const BASE_URL = "https://www.vexelsystems.lk";

/**
 * DEFAULT SEO CONFIGURATION
 *
 * Default values used across the site if page-specific values aren't provided.
 * This ensures every page has basic SEO even without custom metadata.
 *
 * Structure:
 * - siteName: Company name for branding
 * - title: Default page title
 * - description: Default meta description
 * - keywords: Array of relevant keywords for search engines
 * - openGraph: Social media sharing configuration (Facebook, LinkedIn)
 * - twitter: Twitter Card configuration
 * - robots: Search engine crawling instructions
 */
export const DEFAULT_SEO = {
  siteName: companyDetails.name,
  title: `${companyDetails.name} | ${companyDetails.tagline}`,
  description: companyDetails.description,

  /**
   * KEYWORDS
   *
   * Comprehensive list of keywords for search engine optimization.
   * Organized by category for better maintainability.
   *
   * Categories:
   * - Core Services: Main service offerings
   * - Location-based: Geographic targeting (Vavuniya, Sri Lanka)
   * - Affordable/Price-focused: Budget-conscious keywords
   * - Industry-specific: Vertical market terms
   * - Technology: Tech stack and platforms
   * - Business: Business-oriented terms
   */
  keywords: [
    // Core Services
    "POS Systems",
    "Point of Sale",
    "Software Development",
    "Custom Software",
    "Business Automation",
    "AI Solutions",
    "IoT Solutions",
    "Cloud Solutions",
    "DevOps",
    "API Development",

    // Location-based
    "Vavuniya",
    "Sri Lanka",
    "Northern Province",
    "Sri Lankan Tech Company",
    "Vavuniya Software",
    "Best Web Design Company Vavuniya",
    "Northern Province Tech Services",

    // Affordable / Price-focused
    "Low Cost Web Development Vavuniya",
    "Affordable Web Design Sri Lanka",
    "Cheap Website Builder Northern Province",
    "Low Price Mobile App Development",
    "Affordable AI Integration",
    "Budget Friendly Software Solutions",

    // Industry-specific
    "Retail Technology",
    "Restaurant POS",
    "Inventory Management",
    "ERP Systems",
    "CRM Solutions",
    "Digital Marketing",
    "Web Development",
    "Mobile App Development",

    // Technology
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AI Automation",
    "Machine Learning",
    "Cloud Computing",
    "AWS",
    "Azure",

    // Business
    "SaaS Solutions",
    "Enterprise Software",
    "Startup Technology",
    "Business Intelligence",
    "Data Analytics",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    url: BASE_URL,
    siteName: companyDetails.name,
    images: [
      {
        url: `${BASE_URL}/VLogo.png`,
        width: 1200,
        height: 630,
        alt: `${companyDetails.name} - ${companyDetails.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    site: "@vexelsystems",
    creator: "@vexelsystems",
    images: [`${BASE_URL}/VLogo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  authors: [{ name: companyDetails.name }],
  creator: companyDetails.name,
  publisher: companyDetails.name,
};

/**
 * Generate metadata for a page
 * @param title - Page title (will be appended with site name)
 * @param description - Page description
 * @param keywords - Additional keywords specific to the page
 * @param path - Page path (e.g., '/about')
 * @param image - Custom Open Graph image path
 * @param noIndex - Whether to prevent indexing (for legal pages, etc.)
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  // Ensure title ends with Company Name if not already present
  // User request: "page name | descritopn or company name"
  // We prioritize "Title | Company Name" for consistency.
  const fullTitle = title
    .toLowerCase()
    .includes(companyDetails.name.toLowerCase())
    ? title
    : `${title} | ${companyDetails.name}`;

  const url = `${BASE_URL}${path}`;
  const ogImage = image
    ? `${BASE_URL}${image}`
    : DEFAULT_SEO.openGraph.images[0].url;

  return {
    title: title, // Use raw title to allow layout template to apply suffix without duplication
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords],
    authors: DEFAULT_SEO.authors,
    creator: DEFAULT_SEO.creator,
    publisher: DEFAULT_SEO.publisher,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      ...DEFAULT_SEO.twitter,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : DEFAULT_SEO.robots,
  };
}

/**
 * Generate metadata for dynamic pages (blog posts, services, products)
 * @param title - Content title
 * @param description - Content description
 * @param keywords - Content-specific keywords
 * @param path - Full path to the content
 * @param image - Content image
 * @param type - Open Graph type
 * @param publishedTime - Publication date (for articles)
 * @param modifiedTime - Last modified date (for articles)
 * @param author - Author name (for articles)
 * @param section - Content section/category (for articles)
 */
export function generateDynamicMetadata({
  title,
  description,
  keywords = [],
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}): Metadata {
  // User request: "page name | descritopn or company name"
  const fullTitle = `${title} | ${companyDetails.name}`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || DEFAULT_SEO.openGraph.images[0].url;

  const metadata: Metadata = {
    title: title, // Use raw title so app/layout.tsx template "%s | Vexel Systems" applies WITHOUT duplication
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords],
    authors: author ? [{ name: author }] : DEFAULT_SEO.authors,
    creator: DEFAULT_SEO.creator,
    publisher: DEFAULT_SEO.publisher,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: DEFAULT_SEO.openGraph.locale,
      url,
      siteName: DEFAULT_SEO.openGraph.siteName,
      title: title, // Use exact content title for Open Graph (social sharing)
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...DEFAULT_SEO.twitter,
      title: title, // Use exact content title for Twitter Card
      description,
      images: [ogImage],
    },
    robots: DEFAULT_SEO.robots,
  };

  // Add article-specific metadata
  if (
    type === "article" &&
    (publishedTime || modifiedTime || author || section)
  ) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
    };
  }

  return metadata;
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyDetails.name,
    legalName: companyDetails.legalName,
    url: companyDetails.contact.website,
    logo: `${BASE_URL}${companyDetails.logos.main}`,
    foundingDate: companyDetails.business.establishedYear.toString(),
    description: companyDetails.description,
    slogan: companyDetails.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyDetails.address.street,
      addressLocality: companyDetails.address.city,
      addressRegion: companyDetails.address.province,
      postalCode: companyDetails.address.postalCode,
      addressCountry: "LK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyDetails.contact.phone,
      contactType: "customer service",
      email: companyDetails.contact.email,
      areaServed: "Global",
      availableLanguage: ["en", "Tamil", "Sinhala"],
    },
    sameAs: [
      companyDetails.socialLinks.facebook,
      companyDetails.socialLinks.twitter,
      companyDetails.socialLinks.linkedin,
      companyDetails.socialLinks.instagram,
      companyDetails.socialLinks.github,
    ],
  };
}

/**
 * Generate JSON-LD structured data for WebSite
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyDetails.name,
    url: BASE_URL,
    description: companyDetails.description,
    publisher: {
      "@type": "Organization",
      name: companyDetails.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${companyDetails.logos.main}`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate JSON-LD structured data for Article (blog posts)
 */
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: companyDetails.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${companyDetails.logos.main}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Generate JSON-LD structured data for Service
 */
export function generateServiceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: companyDetails.name,
      url: companyDetails.contact.website,
    },
    areaServed: "Global",
    url,
    image: image || `${BASE_URL}/VLogo.png`,
  };
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
