
import { generatePageMetadata } from "@/lib/seo";
import QuoteClient from "./client";

export const metadata = generatePageMetadata({
  title: "Get a Free Quote",
  description: "Web & Software Development",
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
 