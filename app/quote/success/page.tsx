
import { generatePageMetadata } from "@/lib/seo";
import QuoteSuccessClient from "./client";

export const metadata = generatePageMetadata({
  title: "Request Received - Vexel Systems",
  description: "We have received your request and will contact you shortly.",
  path: "/quote/success",
});

export default function DemoSuccessPage() {
  return <QuoteSuccessClient />;
}
