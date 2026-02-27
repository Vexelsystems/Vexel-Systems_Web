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
  title: "Pricing Plans",
  description:
    "Transparent and competitive pricing for all your technology needs. Explore our flexible packages for Web Development, App Development, and the best POS systems in Vavuniya.",
  keywords: [
    "software pricing Sri Lanka",
    "Vexel Systems pricing",
    "POS system cost",
    "website development packages",
    "app development cost Sri Lanka",
    "IT service pricing",
    "affordable software solutions",
    "business software rates",
    "POS packages Vavuniya",
  ],
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingClient />;
}
