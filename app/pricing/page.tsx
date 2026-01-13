import { generatePageMetadata } from "@/lib/seo";
import PricingClient from "@/components/PricingClient";

export const metadata = generatePageMetadata({
  title: "Pricing Packages - Transparent & Flexible",
  description: "View our competitive pricing packages for web development, software solutions, and maintenance plans. We offer tailored options for startups and enterprises.",
  keywords: [
    "Pricing Packages",
    "Web Development Cost",
    "Software Pricing",
    "Maintenance Plans",
    "Enterprise Solutions",
    "Startup Packages",
  ],
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingClient />;
}
