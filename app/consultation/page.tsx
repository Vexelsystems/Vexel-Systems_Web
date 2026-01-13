import { generatePageMetadata } from "@/lib/seo";
import ConsultationClient from "./ConsultationClient";

/**
 * CONSULTATION ROOT PAGE
 * 
 * Functional Overview:
 * - Role: Server-side entry point for the Consultation booking flow.
 * - Logic: Delegates all interactivity (form, progress tracking) to `ConsultationClient`.
 * - Metadata: SEO optimized for "booking" and "consultation" keywords.
 */

export const metadata = generatePageMetadata({
  title: "Schedule a Consultation - Let's Build Your Future",
  description: "Book a strategic consultation with Vexel Systems experts. Discuss your project requirements, technology needs, and digital transformation goals with our team.",
  keywords: [
    "Schedule Consultation",
    "Book a Meeting",
    "Digital Strategy Consultation",
    "Tech Consulting Sri Lanka",
    "Vexel Systems Appointment",
    "Software Project Discovery",
  ],
  path: "/consultation",
});

export default function ConsultationPage() {
  return <ConsultationClient />;
}
