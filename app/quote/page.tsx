
import { generatePageMetadata } from "@/lib/seo";
import QuoteClient from "./client";

export const metadata = generatePageMetadata({
  title: "Request a Quote - Start Your Project",
  description: "Ready to start? Tell us about your project, and we'll give you a fair, detailed estimate.",
  keywords: [
    "get a quote Vexel Systems",
    "software project estimate",
    "website cost calculator",
    "app development quote",
    "custom software pricing",
    "hire developers quote",
    "IT service quote Vavuniya",
    "business software quote",
    "project estimation Sri Lanka",
    "technology solution quote"
  ],
  path: "/quote",
});

export default function Quote() {
  return <QuoteClient />;
}
 