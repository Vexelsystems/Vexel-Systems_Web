import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import LiveChat from "@/components/LiveChat";
import CookieConsent from "@/components/CookieConsent";
import SeasonalPromo from "@/components/SeasonalPromo";
import Link from "next/link";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Vexel Systems | Innovative Software Solutions",
    template: "%s | Vexel Systems"
  },
  description: "Global technology partner specializing in POS systems, custom software development, and AI-driven business automation.",
  keywords: ["POS Systems", "Software Development", "Business Automation", "Retail Technology", "Sri Lanka Tech", "SaaS Solutions"],
  authors: [{ name: "Vexel Systems" }],
  creator: "Vexel Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vexelsystems.com",
    siteName: "Vexel Systems",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Vexel Systems - Powering Future Businesses"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexel Systems",
    description: "Leading tech solutions for the next generation of business.",
    images: ["/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vexel Systems",
              "url": "https://vexelsystems.com",
              "logo": "https://vexelsystems.com/V Logo.png",
              "sameAs": [
                "https://facebook.com/vexelsystems",
                "https://twitter.com/vexelsystems",
                "https://linkedin.com/company/vexelsystems"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94 77 123 4567",
                "contactType": "customer service",
                "areaServed": "Global",
                "availableLanguage": ["en", "Tamil", "Sinhala"]
              }
            })
          }}
        />
        <Preloader />
        <Navbar />
        <div className="pt-24 w-[80%] mx-auto max-w-[1920px]">
          {children}
        </div>
        <Footer />
        <LiveChat />
        <CookieConsent />
        <SeasonalPromo />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
