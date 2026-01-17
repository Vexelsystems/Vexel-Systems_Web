import { generatePageMetadata } from "@/lib/seo";
import FaqClient from "@/components/FaqClient";

/**
 * FAQ ROOT PAGE
 * 
 * Functional Overview:
 * - Pattern: Simple server component wrapper.
 * - Responsibility: Provides static metadata context for the client-side FAQ accordion interactivity.
 */

export const metadata = generatePageMetadata({
  title: "FAQ Center - Common Questions & Support",
  description: "Got questions? We've got answers. Find quick help on our services, pricing, and support.",
  keywords: [
    "Vexel Systems FAQ",
    "POS system questions",
    "ERP system questions",
    "software product questions",
    "software support FAQ",
    "business software FAQ",
    "startup software FAQ",
    "IT solution questions Sri Lanka",
    "AI software FAQ",
    "digital solutions FAQ",
    "Vavuniya tech FAQ",
    "software troubleshooting",
    "user support Vexel Systems",
    "ERP FAQ Sri Lanka",
    "POS software FAQ",
    "SaaS questions",
    "Vexel customer support FAQ"
  ],
  path: "/faq",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function FAQPage() {
  return (
    <MotionWrapper>
      <FaqClient />
    </MotionWrapper>
  );
}
