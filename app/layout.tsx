/**
 * ROOT LAYOUT COMPONENT
 *
 * This is the root layout for the entire Next.js application.
 * It wraps all pages and provides:
 * - Global metadata for SEO
 * - Consistent layout structure (Navbar, Footer)
 * - Global styles and fonts
 * - JSON-LD structured data for search engines
 * - Client-side utilities (toast notifications, live chat, cookie consent)
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Google Font for typography
import Navbar from "@/components/Navbar"; // Main navigation component
import Footer from "@/components/Footer"; // Footer component

import { Toaster } from "sonner"; // Toast notification library
import { companyDetails } from "@/lib/companydetails"; // Centralized company information
import { DEFAULT_SEO, BASE_URL } from "@/lib/seo"; // SEO configuration and utilities
import GlobalClientWrapper from "@/components/GlobalClientWrapper"; // Wrapper for global client components
import "./globals.css"; // Global CSS styles
import GoogleAnalytics from "@/components/GoogleAnalytics"; // Google Analytics component
import Breadcrumbs from "@/components/Breadcrumbs"; // Breadcrumbs component
import ScrollNavButtons from "@/components/ScrollNavButtons"; // Scroll navigation buttons
import ScrollToTop from "@/components/ScrollToTop"; // Scroll to top on navigation

/**
 * FONT CONFIGURATION
 *
 * Loads the Inter font from Google Fonts with:
 * - Latin character subset for optimal loading
 * - CSS variable (--font-inter) for use in Tailwind config
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * GLOBAL METADATA
 *
 * Defines SEO metadata for the entire site. Individual pages can override these defaults.
 * This metadata is used by:
 * - Search engines (Google, Bing, etc.)
 * - Social media platforms (Facebook, Twitter, LinkedIn)
 * - Browsers (for bookmarks, tabs, etc.)
 */
export const metadata: Metadata = {
  // Base URL for all relative URLs in metadata
  metadataBase: new URL(BASE_URL),

  // Title template for children pages: "Page Name | Vexel Systems"
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${companyDetails.name}`,
  },

  // Default SEO descriptions and keywords
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,

  // Authorship
  authors: [{ name: companyDetails.name, url: BASE_URL }],
  creator: companyDetails.name,
  publisher: companyDetails.name,

  // Robots crawling instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph metadata for social sharing (FB, LinkedIn, Slack)
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: BASE_URL,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    siteName: companyDetails.name,
    images: DEFAULT_SEO.openGraph.images,
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: DEFAULT_SEO.twitter.images,
    creator: "@vexelsystems",
  },

  // Apple-specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: companyDetails.name,
  },

  // Alternative formats
  alternates: {
    canonical: BASE_URL,
  },

  // Verification codes for search engines
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },

  // Favicons and Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

/**
 * VIEWPORT CONFIGURATION
 * Configures how the site is viewed on different screen sizes.
 */
export const viewport = {
  themeColor: "#050B15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
};

/**
 * ROOT COMPONENT
 * Renders the top-level HTML structure.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/20`}
      >
        {/* Google Analytics - Loaded after interactivity */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />

        {/* Global Client Components Wrapper (Bg, Toast, etc) */}
        <GlobalClientWrapper>
          <ScrollToTop />
          <ScrollNavButtons />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />

            {/* Main content area */}
            <main className="flex-1">
              <Breadcrumbs />
              {children}
            </main>

            <Footer />
          </div>
        </GlobalClientWrapper>

        {/* Toast notifications container */}
        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="system"
          toastOptions={{
            classNames: {
              error: "bg-red-500 text-white border-red-600",
              success: "bg-green-500 text-white border-green-600",
              warning: "bg-yellow-500 text-white border-yellow-600",
              info: "bg-blue-500 text-white border-blue-600",
              toast:
                "bg-white/80 backdrop-blur-md border border-gray-200 dark:bg-zinc-900/90 dark:border-white/10 dark:text-white shadow-xl rounded-2xl p-4",
              title: "font-bold text-sm",
              description: "text-xs opacity-90",
              actionButton:
                "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
              cancelButton: "bg-orange-400",
              closeButton:
                "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
            },
          }}
        />

        {/* Structured Data (JSON-LD) for SEO */}

        {/* SoftwareBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareBusiness",
              "@id": "https://vexelsystems.lk/#softwarebusiness",
              name: companyDetails.name,
              url: companyDetails.contact.website,
              logo: `${BASE_URL}/VLogo.png`,
              image: `${BASE_URL}/VLogo.png`,
              description:
                "Vexel Systems is a Sri Lankan software company providing POS systems, billing software, inventory management, and custom business solutions.",
              email: companyDetails.contact.email,
              telephone: companyDetails.contact.phone,
              priceRange: "LKR",
              foundingDate: companyDetails.business.establishedYear.toString(),
              address: {
                "@type": "PostalAddress",
                streetAddress: companyDetails.address.street,
                addressLocality: companyDetails.address.city,
                addressRegion: companyDetails.address.province,
                postalCode: companyDetails.address.postalCode,
                addressCountry: "LK",
              },
              areaServed: {
                "@type": "Country",
                name: "Sri Lanka",
              },
              sameAs: [
                companyDetails.socialLinks.facebook,
                companyDetails.socialLinks.linkedin,
                companyDetails.socialLinks.instagram,
                companyDetails.socialLinks.twitter,
              ],
              founder: [
                {
                  "@type": "Person",
                  name: companyDetails.founders[0].name,
                  jobTitle: companyDetails.founders[0].role,
                },
                {
                  "@type": "Person",
                  name: companyDetails.founders[1].name,
                  jobTitle: companyDetails.founders[1].role,
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "Retail & Wholesale POS System",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Windows, Web",
                      description:
                        "Wholesale and retail POS system with billing, inventory, and reporting.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "Inventory Management System",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Web",
                      description:
                        "Stock control, supplier management, and analytics.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://vexelsystems.lk/#website",
              url: "https://vexelsystems.lk",
              name: "Vexel Systems",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vexelsystems.lk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://vexelsystems.lk/#organization",
              name: companyDetails.name,
              url: companyDetails.contact.website,
              logo: `${BASE_URL}/VLogo.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: companyDetails.contact.phone,
                contactType: "customer support",
                areaServed: "LK",
              },
              sameAs: [
                companyDetails.socialLinks.facebook,
                companyDetails.socialLinks.linkedin,
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema for Multi-Region Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://vexelsystems.lk/#vavuniya",
              name: companyDetails.name,
              url: companyDetails.contact.website,
              logo: `${BASE_URL}/VLogo.png`,
              image: `${BASE_URL}/VLogo.png`,
              description:
                "Vexel Systems provides POS systems, billing software, and inventory management solutions in Vavuniya and across Northern Province, Eastern Province, and Colombo, Sri Lanka.",
              email: companyDetails.contact.email,
              telephone: companyDetails.contact.phone,
              priceRange: "LKR",
              address: {
                "@type": "PostalAddress",
                streetAddress: companyDetails.address.street,
                addressLocality: companyDetails.address.city,
                addressRegion: companyDetails.address.province,
                postalCode: companyDetails.address.postalCode,
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.7514",
                longitude: "80.4971",
              },
              areaServed: [
                // Western Province
                { "@type": "City", name: "Colombo" },
                { "@type": "City", name: "Gampaha" },
                { "@type": "City", name: "Kalutara" },
                // Central Province
                { "@type": "City", name: "Kandy" },
                { "@type": "City", name: "Matale" },
                { "@type": "City", name: "Nuwara Eliya" },
                // Southern Province
                { "@type": "City", name: "Galle" },
                { "@type": "City", name: "Matara" },
                { "@type": "City", name: "Hambantota" },
                // Northern Province
                { "@type": "City", name: "Jaffna" },
                { "@type": "City", name: "Kilinochchi" },
                { "@type": "City", name: "Mannar" },
                { "@type": "City", name: "Vavuniya" },
                { "@type": "City", name: "Mullaitivu" },
                // Eastern Province
                { "@type": "City", name: "Trincomalee" },
                { "@type": "City", name: "Batticaloa" },
                { "@type": "City", name: "Ampara" },
                // North Western Province
                { "@type": "City", name: "Kurunegala" },
                { "@type": "City", name: "Puttalam" },
                // North Central Province
                { "@type": "City", name: "Anuradhapura" },
                { "@type": "City", name: "Polonnaruwa" },
                // Uva Province
                { "@type": "City", name: "Badulla" },
                { "@type": "City", name: "Monaragala" },
                // Sabaragamuwa Province
                { "@type": "City", name: "Ratnapura" },
                { "@type": "City", name: "Kegalle" },
                // Provinces
                { "@type": "AdministrativeArea", name: "Western Province" },
                { "@type": "AdministrativeArea", name: "Central Province" },
                { "@type": "AdministrativeArea", name: "Southern Province" },
                { "@type": "AdministrativeArea", name: "Northern Province" },
                { "@type": "AdministrativeArea", name: "Eastern Province" },
                {
                  "@type": "AdministrativeArea",
                  name: "North Western Province",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "North Central Province",
                },
                { "@type": "AdministrativeArea", name: "Uva Province" },
                {
                  "@type": "AdministrativeArea",
                  name: "Sabaragamuwa Province",
                },
                // Country
                { "@type": "Country", name: "Sri Lanka" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                companyDetails.socialLinks.facebook,
                companyDetails.socialLinks.linkedin,
              ],
            }),
          }}
        />

        {/* Service Schema - Multiple Services with Regional Targeting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "POS System Development",
                provider: {
                  "@type": "Organization",
                  name: companyDetails.name,
                  url: companyDetails.contact.website,
                },
                areaServed: [
                  { "@type": "City", name: "Colombo" },
                  { "@type": "City", name: "Gampaha" },
                  { "@type": "City", name: "Kalutara" },
                  { "@type": "City", name: "Kandy" },
                  { "@type": "City", name: "Matale" },
                  { "@type": "City", name: "Nuwara Eliya" },
                  { "@type": "City", name: "Galle" },
                  { "@type": "City", name: "Matara" },
                  { "@type": "City", name: "Hambantota" },
                  { "@type": "City", name: "Jaffna" },
                  { "@type": "City", name: "Kilinochchi" },
                  { "@type": "City", name: "Mannar" },
                  { "@type": "City", name: "Vavuniya" },
                  { "@type": "City", name: "Mullaitivu" },
                  { "@type": "City", name: "Trincomalee" },
                  { "@type": "City", name: "Batticaloa" },
                  { "@type": "City", name: "Ampara" },
                  { "@type": "City", name: "Kurunegala" },
                  { "@type": "City", name: "Puttalam" },
                  { "@type": "City", name: "Anuradhapura" },
                  { "@type": "City", name: "Polonnaruwa" },
                  { "@type": "City", name: "Badulla" },
                  { "@type": "City", name: "Monaragala" },
                  { "@type": "City", name: "Ratnapura" },
                  { "@type": "City", name: "Kegalle" },
                  { "@type": "Country", name: "Sri Lanka" },
                ],
                serviceType: "Retail and Wholesale POS Software",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Web Development Services",
                provider: {
                  "@type": "Organization",
                  name: companyDetails.name,
                  url: companyDetails.contact.website,
                },
                areaServed: [
                  { "@type": "City", name: "Colombo" },
                  { "@type": "City", name: "Gampaha" },
                  { "@type": "City", name: "Kalutara" },
                  { "@type": "City", name: "Kandy" },
                  { "@type": "City", name: "Matale" },
                  { "@type": "City", name: "Nuwara Eliya" },
                  { "@type": "City", name: "Galle" },
                  { "@type": "City", name: "Matara" },
                  { "@type": "City", name: "Hambantota" },
                  { "@type": "City", name: "Jaffna" },
                  { "@type": "City", name: "Kilinochchi" },
                  { "@type": "City", name: "Mannar" },
                  { "@type": "City", name: "Vavuniya" },
                  { "@type": "City", name: "Mullaitivu" },
                  { "@type": "City", name: "Trincomalee" },
                  { "@type": "City", name: "Batticaloa" },
                  { "@type": "City", name: "Ampara" },
                  { "@type": "City", name: "Kurunegala" },
                  { "@type": "City", name: "Puttalam" },
                  { "@type": "City", name: "Anuradhapura" },
                  { "@type": "City", name: "Polonnaruwa" },
                  { "@type": "City", name: "Badulla" },
                  { "@type": "City", name: "Monaragala" },
                  { "@type": "City", name: "Ratnapura" },
                  { "@type": "City", name: "Kegalle" },
                  { "@type": "Country", name: "Sri Lanka" },
                ],
                serviceType: "Custom Web Development and E-commerce Solutions",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "AI Integration Services",
                provider: {
                  "@type": "Organization",
                  name: companyDetails.name,
                  url: companyDetails.contact.website,
                },
                areaServed: [
                  { "@type": "City", name: "Colombo" },
                  { "@type": "City", name: "Gampaha" },
                  { "@type": "City", name: "Kalutara" },
                  { "@type": "City", name: "Kandy" },
                  { "@type": "City", name: "Matale" },
                  { "@type": "City", name: "Nuwara Eliya" },
                  { "@type": "City", name: "Galle" },
                  { "@type": "City", name: "Matara" },
                  { "@type": "City", name: "Hambantota" },
                  { "@type": "City", name: "Jaffna" },
                  { "@type": "City", name: "Kilinochchi" },
                  { "@type": "City", name: "Mannar" },
                  { "@type": "City", name: "Vavuniya" },
                  { "@type": "City", name: "Mullaitivu" },
                  { "@type": "City", name: "Trincomalee" },
                  { "@type": "City", name: "Batticaloa" },
                  { "@type": "City", name: "Ampara" },
                  { "@type": "City", name: "Kurunegala" },
                  { "@type": "City", name: "Puttalam" },
                  { "@type": "City", name: "Anuradhapura" },
                  { "@type": "City", name: "Polonnaruwa" },
                  { "@type": "City", name: "Badulla" },
                  { "@type": "City", name: "Monaragala" },
                  { "@type": "City", name: "Ratnapura" },
                  { "@type": "City", name: "Kegalle" },
                  { "@type": "Country", name: "Sri Lanka" },
                ],
                serviceType: "Artificial Intelligence and Business Automation",
              },
            ]),
          }}
        />

        {/* ContactPoint Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: companyDetails.contact.phone,
              email: companyDetails.contact.email,
              availableLanguage: ["English", "Tamil"],
              areaServed: "LK",
            }),
          }}
        />

        {/* SiteNavigationElement Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: ["Home", "POS System", "Pricing", "Contact"],
              url: [
                "https://vexelsystems.lk",
                "https://vexelsystems.lk/pos",
                "https://vexelsystems.lk/pricing",
                "https://vexelsystems.lk/contact",
              ],
            }),
          }}
        />

        {/* City Schemas for All 25 Districts in Sri Lanka */}

        {/* Western Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-colombo",
              name: "Colombo",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.9271",
                longitude: "79.8612",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Western Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-gampaha",
              name: "Gampaha",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.0840",
                longitude: "80.0098",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Western Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-kalutara",
              name: "Kalutara",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.5854",
                longitude: "79.9607",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Western Province",
              },
            }),
          }}
        />

        {/* Central Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-kandy",
              name: "Kandy",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.2906",
                longitude: "80.6337",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Central Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-matale",
              name: "Matale",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.4675",
                longitude: "80.6234",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Central Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-nuwara-eliya",
              name: "Nuwara Eliya",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.9497",
                longitude: "80.7891",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Central Province",
              },
            }),
          }}
        />

        {/* Southern Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-galle",
              name: "Galle",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.0535",
                longitude: "80.2210",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Southern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-matara",
              name: "Matara",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "5.9549",
                longitude: "80.5550",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Southern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-hambantota",
              name: "Hambantota",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.1429",
                longitude: "81.1212",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Southern Province",
              },
            }),
          }}
        />

        {/* Northern Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-jaffna",
              name: "Jaffna",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "9.6615",
                longitude: "80.0255",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Northern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-kilinochchi",
              name: "Kilinochchi",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "9.3967",
                longitude: "80.4033",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Northern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-mannar",
              name: "Mannar",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.9810",
                longitude: "79.9044",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Northern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-vavuniya",
              name: "Vavuniya",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.7514",
                longitude: "80.4971",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Northern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-mullaitivu",
              name: "Mullaitivu",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "9.2671",
                longitude: "80.8142",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Northern Province",
              },
            }),
          }}
        />

        {/* Eastern Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-trincomalee",
              name: "Trincomalee",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.5874",
                longitude: "81.2152",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Eastern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-batticaloa",
              name: "Batticaloa",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.7310",
                longitude: "81.6747",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Eastern Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-ampara",
              name: "Ampara",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.2974",
                longitude: "81.6747",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Eastern Province",
              },
            }),
          }}
        />

        {/* North Western Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-kurunegala",
              name: "Kurunegala",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.4863",
                longitude: "80.3623",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "North Western Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-puttalam",
              name: "Puttalam",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.0362",
                longitude: "79.8283",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "North Western Province",
              },
            }),
          }}
        />

        {/* North Central Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-anuradhapura",
              name: "Anuradhapura",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.3114",
                longitude: "80.4037",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "North Central Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-polonnaruwa",
              name: "Polonnaruwa",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.9403",
                longitude: "81.0188",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "North Central Province",
              },
            }),
          }}
        />

        {/* Uva Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-badulla",
              name: "Badulla",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.9934",
                longitude: "81.0550",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Uva Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-monaragala",
              name: "Monaragala",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.8728",
                longitude: "81.3507",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Uva Province",
              },
            }),
          }}
        />

        {/* Sabaragamuwa Province */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-ratnapura",
              name: "Ratnapura",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.7056",
                longitude: "80.3847",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Sabaragamuwa Province",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "City",
              "@id": "https://vexelsystems.lk/#city-kegalle",
              name: "Kegalle",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.2513",
                longitude: "80.3464",
              },
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Sabaragamuwa Province",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
