
import { generatePageMetadata } from "@/lib/seo";
import VexelTrackClient from "./client";

export const metadata = generatePageMetadata({
  title: "Vexel Track - Best Price in Sri Lanka",
  description: "Vexel Systems",
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
