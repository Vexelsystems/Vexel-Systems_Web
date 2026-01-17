import { generatePageMetadata } from "@/lib/seo";
import PricingClient from "@/components/PricingClient";

/**
 * PRICING ROOT PAGE
 * 
 * Functional Overview:
 * - Strategy: Keeps the root light to allow `PricingClient` to handle complex geo-location and toggle logic.
 * - SEO: Generates static metadata optimized for commercial keywords.
 */

export const metadata = generatePageMetadata({
  title: "Pricing Packages - Transparent & Flexible",
  description: "Transparent pricing for honest work. No hidden fees, just clear costs for your websites, apps, and software.",
  keywords: [
    "software pricing Sri Lanka",
    "Vexel Systems pricing",
    "POS system cost",
    "website development packages",
    "app development cost Sri Lanka",
    "IT service pricing",
    "affordable software solutions",
    "transparent pricing",
    "business software rates",
    "enterprise software pricing",
    "startup tech packages",
    "competitive software rates"
  ],
  path: "/pricing",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function PricingPage() {
  return (
    <MotionWrapper>
      <PricingClient />
    </MotionWrapper>
  );
}
