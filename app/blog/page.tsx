
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
  title: "Blog",
  description: "Vexel Systems",
  keywords: [
    "Vexel Systems blog",
    "software blog Sri Lanka",
    "POS blog",
    "ERP blog",
    "AI software insights",
    "technology articles Sri Lanka",
    "business automation blog",
    "software development tips",
    "startup technology Sri Lanka",
    "digital transformation",
    "Vavuniya tech blog",
    "business software advice",
    "software solutions trends",
    "SaaS tips Sri Lanka",
    "technology news Sri Lanka",
    "Vexel insights",
    "enterprise software articles"
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
