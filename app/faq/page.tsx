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
  description: "Find answers to common questions about Vexel Systems services, pricing, POS systems, and technical support in our comprehensive FAQ center.",
  keywords: [
    "FAQ",
    "Help Center",
    "Support",
    "Pricing Questions",
    "POS Troubleshooting",
    "Technical Support",
    "Vexel Systems Help",
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
