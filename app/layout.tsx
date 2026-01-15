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
  
  // Page title configuration
  title: {
    default: DEFAULT_SEO.title, // Default title for homepage
    template: `%s | ${companyDetails.name}` // Template for other pages (e.g., "About Us | Vexel Systems")
  },
  
  // Meta description for search results
  description: DEFAULT_SEO.description,
  


  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // Keywords for search engine indexing
  keywords: DEFAULT_SEO.keywords,
  
  // Author and creator information
  authors: DEFAULT_SEO.authors,
  creator: DEFAULT_SEO.creator,
  publisher: DEFAULT_SEO.publisher,
  
  // Disable automatic detection of phone numbers, emails, addresses
  // This prevents mobile browsers from auto-linking these in content
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    ...DEFAULT_SEO.openGraph, // Spread default OG config
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },
  
  // Twitter Card metadata for Twitter sharing
  twitter: {
    ...DEFAULT_SEO.twitter, // Spread default Twitter config
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },
  
  // Robots meta tag for search engine crawling instructions
  robots: DEFAULT_SEO.robots,
  
  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: BASE_URL,
  },
  
  // Search engine verification codes (Google Search Console, Bing Webmaster, etc.)
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Additional metadata
  other: {
    'revisit-after': '7 days', // Suggests how often search engines should re-crawl
    'theme-color': companyDetails.branding.primaryColor, // Browser theme color for mobile
  },
};

/**
 * ROOT LAYOUT COMPONENT
 * 
 * This component wraps all pages in the application.
 * It provides the HTML structure and global components.
 * 
 * @param children - The page content to be rendered
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning prevents warnings from dark mode implementations
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* 
          JSON-LD STRUCTURED DATA
          
          This script tag injects JSON-LD (JavaScript Object Notation for Linked Data)
          which helps search engines understand the organization's information.
          
          Benefits:
          - Rich snippets in search results
          - Knowledge graph information
          - Better local SEO
          - Enhanced brand visibility
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org", // Schema.org vocabulary
              "@type": "Organization", // Type of entity
              "name": companyDetails.name, // Company name
              "legalName": companyDetails.legalName, // Legal business name
              "url": companyDetails.contact.website, // Website URL
              "logo": `${BASE_URL}${companyDetails.logos.main}`, // Company logo
              "foundingDate": companyDetails.business.establishedYear.toString(), // Year established
              "description": companyDetails.description, // Company description
              "slogan": companyDetails.tagline, // Company tagline
              
              // Physical address for local SEO
              "address": {
                "@type": "PostalAddress",
                "streetAddress": companyDetails.address.street,
                "addressLocality": companyDetails.address.city,
                "addressRegion": companyDetails.address.province,
                "postalCode": companyDetails.address.postalCode,
                "addressCountry": "LK" // Sri Lanka country code
              },
              
              // Contact points for different departments
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": companyDetails.contact.phone,
                  "contactType": "customer service",
                  "email": companyDetails.contact.email,
                  "areaServed": "Global", // Service area
                  "availableLanguage": ["en", "Tamil", "Sinhala"] // Supported languages
                },
                {
                  "@type": "ContactPoint",
                  "telephone": companyDetails.contact.phone,
                  "contactType": "sales",
                  "email": companyDetails.contact.salesEmail,
                  "areaServed": "Global"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": companyDetails.contact.phone,
                  "contactType": "technical support",
                  "email": companyDetails.contact.supportEmail,
                  "areaServed": "Global"
                }
              ],
              
              // Social media profiles for brand verification
              "sameAs": [
                companyDetails.socialLinks.facebook,
                companyDetails.socialLinks.twitter,
                companyDetails.socialLinks.linkedin,
                companyDetails.socialLinks.instagram,
                companyDetails.socialLinks.github
              ]
            })
          }}
        />
        
        {/* MAIN NAVIGATION - Fixed at top of viewport */}
        <Navbar />
        
        {/* 
          MAIN CONTENT WRAPPER
          
          - pt-24: Padding top to account for fixed navbar height
          - min-h-screen: Ensures content fills viewport height
          - flex flex-col: Flexbox column layout for proper footer positioning
        */}
        <div className="pt-24 min-h-screen flex flex-col  mx-auto">
          {/* Breadcrumbs - Automatically hidden on homepage */}
          <Breadcrumbs />
          {children} {/* Page-specific content rendered here */}
        </div>
        
        {/* FOOTER - Rendered after main content */}
        <Footer />
        
        {/* 
          GLOBAL CLIENT COMPONENTS
          
          Lazy-loaded client-side components:
          - LiveChat: Customer support chat widget
          - CookieConsent: GDPR cookie consent banner
          - GlowingBackground: Decorative animated background
          
          These are loaded separately to improve initial page load performance
        */}
        <GlobalClientWrapper />

        {/* 
          TOAST NOTIFICATIONS
          
          Global toast notification system using Sonner library
          - position="bottom-right": Toasts appear in bottom-right corner
          - richColors: Enables colored toasts (success, error, info, warning)
        */}
        <Toaster position="bottom-right" richColors />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-TG3FQ4DYYZ" />
      </body>
    </html>
  );
}
