import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Products",
  description:
    "High-performance POS, ERP, and customized management systems for Sri Lankan businesses. Proven solutions for Retail, Pharmacy, Education, and Logistics.",
  keywords: [
    "Best POS Software Sri Lanka",
    "Pharmacy POS Sri Lanka",
    "Inventory Management System Colombo",
    "Token & Queue Management Software",
    "Custom ERP Solutions Vavuniya",
    "Affordable Business Automation",
    "Supermarket Billing System Sri Lanka",
    "Restaurant Management Software",
    "School Management System Sri Lanka",
    "Fleet Management Solutions",
    "Cloud POS Sri Lanka",
    "Vexel Systems Products catalog",
  ],
  path: "/products",
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
