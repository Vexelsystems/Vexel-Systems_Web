import { generatePageMetadata } from "@/lib/seo";
import BlogClient from "@/components/BlogClient";

/**
 * BLOG ROOT PAGE
 *
 * Functional Overview:
 * - Architecture: Server Component acting as a shell.
 * - Responsibility:
 *   1. Generates static SEO metadata via `generatePageMetadata`.
 *   2. Delegates rendering to `BlogClient` for interactive filtering/searching.
 */

export const metadata = generatePageMetadata({
  title: "Tech Insights & Business Software Blog | Vexel Systems Vavuniya",
  description:
    "Explore the latest trends in software development, POS systems, and AI technology from Vexel Systems in Vavuniya, Sri Lanka. Expert insights for businesses in the digital era.",
  keywords: [
    "Vavuniya Tech Blog",
    "Sri Lanka Software Insights",
    "Northern Province IT News",
    "Software Development Vavuniya",
    "Best POS Systems Sri Lanka Blog",
    "Vexel Systems Articles",
    "Enterprise AI Blog Sri Lanka",
    "Business Automation Vavuniya",
    "Jathushan Blog",
    "Digital Transformation Sri Lanka",
  ],
  path: "/blog",
});

import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default function BlogPage() {
  return (
    <MotionWrapper>
      <BlogClient />
    </MotionWrapper>
  );
}
