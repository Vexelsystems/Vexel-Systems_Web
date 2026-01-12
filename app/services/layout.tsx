import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Services | Web, Mobile & Software Solutions",
  description: "Explore our comprehensive IT services including web development, mobile apps, and custom software solutions in Vavuniya, Sri Lanka. Affordable and high-quality.",
  keywords: [
    "IT Services Vavuniya",
    "Software Companies in Northern Province",
    "Sri Lanka Web Solutions",
    "Mobile App Development Services Vavuniya",
    "Custom Software Development Sri Lanka",
    "Low Cost IT Services Northern Province"
  ],
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
