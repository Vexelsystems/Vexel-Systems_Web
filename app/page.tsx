/**
 * HOMEPAGE - Main landing page
 * Uses next/dynamic to lazy load below-the-fold sections for better performance
 * HeroSection loads immediately for optimal LCP
 */

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

// Lazy load sections after initial render to reduce bundle size
const PortfolioSection = dynamic(
  () =>
    import("@/components/PortfolioSection").then((mod) => mod.PortfolioSection),
  { loading: () => <SectionSkeleton /> },
);
const ProcessSection = dynamic(
  () => import("@/components/ProcessSection").then((mod) => mod.ProcessSection),
  { loading: () => <SectionSkeleton /> },
);
const WhyChooseUsSection = dynamic(
  () =>
    import("@/components/WhyChooseUsSection").then(
      (mod) => mod.WhyChooseUsSection,
    ),
  { loading: () => <SectionSkeleton /> },
);
const TechStackSection = dynamic(
  () =>
    import("@/components/TechStackSection").then((mod) => mod.TechStackSection),
  { loading: () => <SectionSkeleton /> },
);
const TestimonialSection = dynamic(
  () =>
    import("@/components/TestimonialSection").then(
      (mod) => mod.TestimonialSection,
    ),
  { loading: () => <SectionSkeleton /> },
);
const ContactSection = dynamic(
  () => import("@/components/ContactSection").then((mod) => mod.ContactSection),
  { loading: () => <SectionSkeleton /> },
);
const ServicesPreviewSection = dynamic(
  () =>
    import("@/components/ServicesPreviewSection").then(
      (mod) => mod.ServicesPreviewSection,
    ),
  { loading: () => <SectionSkeleton /> },
);
const FAQSection = dynamic(
  () => import("@/components/FAQSection").then((mod) => mod.FAQSection),
  { loading: () => <SectionSkeleton /> },
);

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Vexel Systems",
  description: "Web Development & POS Software in Vavuniya",
  keywords: [
    "Vexel Systems",
    "Vexel Systems Sri Lanka",
    "Vexel Systems Vavuniya",
    "software company in Sri Lanka",
    "software company in Vavuniya",
    "POS systems Sri Lanka",
    "ERP software Sri Lanka",
    "custom software development Sri Lanka",
    "AI software Sri Lanka",
    "business automation solutions",
    "web and mobile app development Sri Lanka",
    "technology company Sri Lanka",
    "software company Vavuniya",
    "IT company Vavuniya",
    "tech company Vavuniya",
    "software developers Vavuniya",
    "web design Vavuniya",
    "software solutions Sri Lanka",
    "digital transformation Sri Lanka",
    "technology solutions global",
    "business management software",
    "startup software solutions",
    "custom software development",
    "web and mobile app development",
    "Vexel POS",
    "Vexel ERP",
    "POS software Sri Lanka",
    "AI platforms Sri Lanka",
  ],
  path: "/",
});

import HomePreloader from "@/components/ui/HomePreloader";

export default function Home() {
  return (
    <main className="flex-1">
      <HomePreloader />
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Vexel Systems",
            image: "https://www.vexelsystems.lk/VLogo.png",
            url: "https://www.vexelsystems.lk",
            telephone: "+94740968108",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vairavapuliyankulam",
              addressLocality: "Vavuniya",
              postalCode: "43000",
              addressCountry: "LK",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 8.7515,
              longitude: 80.4971,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            sameAs: [
              "https://www.facebook.com/vexelsystems",
              "https://www.linkedin.com/company/vexelsystems",
            ],
          }),
        }}
      />
      <HeroSection /> {/* Loaded immediately - No Animation Wrapper for LCP */}
      <MotionWrapper type="slideUp" delay={0.1} duration={1.2}>
        <ServicesPreviewSection />
      </MotionWrapper>
      <MotionWrapper type="stagger" duration={1.2}>
        <ProcessSection />
      </MotionWrapper>
      <MotionWrapper type="scale" delay={0.2} duration={1.2}>
        <WhyChooseUsSection />
      </MotionWrapper>
      <MotionWrapper type="slideLeft" duration={1.2}>
        <PortfolioSection />
      </MotionWrapper>
      <MotionWrapper type="slideRight" delay={0.1} duration={1.2}>
        <TechStackSection />
      </MotionWrapper>
      <MotionWrapper type="stagger" duration={1.2}>
        <TestimonialSection />
      </MotionWrapper>
      <MotionWrapper type="slideUp" delay={0.1} duration={1.2}>
        <FAQSection />
      </MotionWrapper>
      <MotionWrapper type="fade" delay={0.2} duration={1.2}>
        <ContactSection />
      </MotionWrapper>
    </main>
  );
}
