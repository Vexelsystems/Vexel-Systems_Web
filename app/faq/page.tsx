import { generatePageMetadata, generateFAQPageSchema } from "@/lib/seo";
import { faqData } from "@/lib/faq-data";
import FaqClient from "@/components/FaqClient";

/**
 * FAQ ROOT PAGE
 *
 * Functional Overview:
 * - Pattern: Simple server component wrapper.
 * - Responsibility: Provides static metadata context for the client-side FAQ accordion interactivity.
 */

export const metadata = generatePageMetadata({
  title: "FAQ",
  description: "Vexel Systems",
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
    "Vexel customer support FAQ",
  ],
  path: "/faq",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function FAQPage() {
  // Generate FAQ schema from centralized data
  const faqSchema = generateFAQPageSchema(
    faqData.slice(0, 10).map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <MotionWrapper>
        <FaqClient />
      </MotionWrapper>
    </>
  );
}
