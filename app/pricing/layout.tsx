import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Pricing | Affordable Web & Software Development",
  description: "Transparent and affordable pricing for web development, mobile apps, and software solutions in Vavuniya, Sri Lanka. Packages starting from LKR 40,000.",
  keywords: [
    "Web Development Pricing Sri Lanka",
    "Affordable App Development Cost",
    "Software Development Rates Vavuniya",
    "Cheap Web Design Packages",
    "Low Cost Software Company",
    "Website Maintenance Prices Sri Lanka"
  ]
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
