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

import {
  generatePageMetadata,
  generateProfessionalServiceSchema,
} from "@/lib/seo";

export const metadata = generatePageMetadata({
  title:
    "Vexel Systems | Software Company in Sri Lanka | Web, POS & AI Solutions",
  description:
    "Vexel Systems is a leading software company in Vavuniya. delivering custom web development, AI-powered systems, and advanced POS solutions. Based in Vavuniya, we help businesses automate operations and scale digitally with secure, high-performance technology.",
  keywords: [
    "Vexel Systems",
    "Vexel Systems Sri Lanka",
    "software company Sri Lanka",
    "software company Vavuniya",
    "web development Sri Lanka",
    "mobile app development Sri Lanka",
    "POS systems Sri Lanka",
    "POS software Vavuniya",
    "AI software solutions Sri Lanka",
    "custom software development",
    "ERP systems Sri Lanka",
    "inventory management software",
    "business automation solutions",
    "IT company Sri Lanka",
    "technology company Vavuniya",
    "digital transformation Sri Lanka",
    "startup software development",
    "ecommerce development Sri Lanka",
    "school management system Sri Lanka",
    "enterprise software solutions",
  ],
  path: "/",
});

import HomePreloader from "@/components/ui/HomePreloader";

export default function Home() {
  return (
    <main className="flex-1">
      <HomePreloader />
      {/* Professional Service Schema - Centralized from seo.ts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProfessionalServiceSchema()),
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
      <MotionWrapper type="slideRight" delay={0.1} duration={1.2}>
        <TechStackSection />
      </MotionWrapper>
      <MotionWrapper type="stagger" duration={1.2}>
        <TestimonialSection />
      </MotionWrapper>
      <MotionWrapper type="fade" delay={0.2} duration={1.2}>
        <ContactSection />
      </MotionWrapper>
    </main>
  );
}
