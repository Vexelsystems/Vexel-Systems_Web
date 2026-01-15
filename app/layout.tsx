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
import Link from "next/link";
import { Toaster } from "sonner"; // Toast notification library
import { companyDetails } from "@/lib/companydetails"; // Centralized company information
import { DEFAULT_SEO, BASE_URL } from "@/lib/seo"; // SEO configuration and utilities
import GlobalClientWrapper from "@/components/GlobalClientWrapper"; // Wrapper for global client components
import { PageTransition } from "@/components/ui/PageTransition"; // Smooth page transition component
import "./globals.css"; // Global CSS styles
import GoogleAnalytics from "@/components/GoogleAnalytics"; // Google Analytics component
import Breadcrumbs from "@/components/Breadcrumbs"; // Breadcrumbs component

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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/20`}>
        {/* Google Analytics - Loaded after interactivity */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />

        {/* Global Client Components Wrapper (Bg, Toast, etc) */}
        <GlobalClientWrapper>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            
            {/* Main content area */}
            <main className="flex-1">
              <Breadcrumbs />
              <PageTransition>
                {children}
              </PageTransition>
            </main>

            <Footer />
          </div>
        </GlobalClientWrapper>

        {/* Toast notifications container */}
        <Toaster position="top-right" richColors closeButton />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": companyDetails.name,
                "url": BASE_URL,
                "logo": `${BASE_URL}${companyDetails.logos.main}`,
                "contactPoint": {
                   "@type": "ContactPoint",
                   "telephone": companyDetails.contact.phone,
                   "contactType": "customer service",
                   "email": companyDetails.contact.email,
                   "areaServed": "LK",
                   "availableLanguage": "en"
                },
                "sameAs": [
                   companyDetails.socialLinks.twitter,
                   companyDetails.socialLinks.linkedin,
                   companyDetails.socialLinks.instagram,
                   companyDetails.socialLinks.facebook
                ]
             })
          }}
        />
      </body>
    </html>
  );
}
