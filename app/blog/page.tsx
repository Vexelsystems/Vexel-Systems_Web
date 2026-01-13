
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
  title: "Blog - Insights, News & Tech Trends",
  description: "Stay updated with the latest insights from Vexel Systems. Articles on technology trends, digital transformation, retail solutions, and more.",
  keywords: [
    "Vexel Blog",
    "Tech Insights",
    "Software Development Blog",
    "Digital Transformation News",
    "Retail Technology",
    "AI Trends",
  ],
  path: "/blog",
});

export default function BlogPage() {
  return <BlogClient />;
}
