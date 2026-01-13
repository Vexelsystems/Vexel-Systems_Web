import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import Link from "next/link";
import { Toaster } from "sonner";
import { companyDetails } from "@/lib/companydetails";
import { DEFAULT_SEO, BASE_URL } from "@/lib/seo";
import GlobalClientWrapper from "@/components/GlobalClientWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${companyDetails.name}`
  },
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,
  authors: DEFAULT_SEO.authors,
  creator: DEFAULT_SEO.creator,
  publisher: DEFAULT_SEO.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...DEFAULT_SEO.openGraph,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },
  twitter: {
    ...DEFAULT_SEO.twitter,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },
  robots: DEFAULT_SEO.robots,
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'revisit-after': '7 days',
    'theme-color': companyDetails.branding.primaryColor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": companyDetails.name,
              "legalName": companyDetails.legalName,
              "url": companyDetails.contact.website,
              "logo": `${BASE_URL}${companyDetails.logos.main}`,
              "foundingDate": companyDetails.business.establishedYear.toString(),
              "description": companyDetails.description,
              "slogan": companyDetails.tagline,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": companyDetails.address.street,
                "addressLocality": companyDetails.address.city,
                "addressRegion": companyDetails.address.province,
                "postalCode": companyDetails.address.postalCode,
                "addressCountry": "LK"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": companyDetails.contact.phone,
                  "contactType": "customer service",
                  "email": companyDetails.contact.email,
                  "areaServed": "Global",
                  "availableLanguage": ["en", "Tamil", "Sinhala"]
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
        <Navbar />
        <div className="pt-24 min-h-screen flex flex-col  mx-auto">
          {children}
        </div>
        <Footer />
        <GlobalClientWrapper />

        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
