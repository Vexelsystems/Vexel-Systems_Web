
import { generatePageMetadata } from "@/lib/seo";
import VexelTrackClient from "./client";

export const metadata = generatePageMetadata({
  title: "Vexel Track",
  description: "Know exactly where your vehicles are, anytime. A simple, reliable GPS tracking system designed to help Sri Lankan businesses save fuel and reduce delays.",
  keywords: [
    "Vexel Track",
    "GPS fleet tracking Sri Lanka",
    "vehicle management system",
    "asset tracking software",
    "real-time fleet monitoring",
    "logistics software Sri Lanka",
    "GPS tracking Vavuniya",
    "fleet optimization tool",
    "business transport solutions",
    "Vexel Systems tracking"
  ],
  path: "/products/vexel-track",
});

export default function VexelTrackPage() {
  return <VexelTrackClient />;
}
