import { generatePageMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

/**
 * CONTACT ROOT PAGE
 *
 * Functional Overview:
 * - Architecture: Wrapper for `ContactClient` to enable SEO metadata injection.
 * - Keyword Targeting: Optimized for location-specific terms ("Vavuniya", "Sri Lanka").
 */

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Experience the best customer support and professional software consultation. Reach out to Vexel Systems today for custom web development, POS systems, and AI solutions in Sri Lanka.",
  keywords: [
    "contact Vexel Systems",
    "software company contact Sri Lanka",
    "IT company Vavuniya contact",
    "Vexel Systems address",
    "customer support Vexel Systems",
    "reach Vexel Systems",
    "software inquiries Sri Lanka",
    "software support Vavuniya",
    "IT support Vavuniya",
    "visit Vexel Systems Vavuniya",
    "call Vexel Systems Sri Lanka",
  ],
  path: "/contact",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function ContactPage() {
  return (
    <MotionWrapper>
      <ContactClient />
    </MotionWrapper>
  );
}
