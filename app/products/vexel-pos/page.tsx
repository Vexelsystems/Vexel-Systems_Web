
import { generatePageMetadata } from "@/lib/seo";
import VexelPOSClient from "./client";

export const metadata = generatePageMetadata({
  title: "Vexel POS - Best Price in Sri Lanka",
  description: "Vexel Systems",
  keywords: [
    "Vexel POS",
    "point of sale Sri Lanka",
    "retail POS system",
    "restaurant billing software",
    "inventory management POS",
    "cloud POS Sri Lanka",
    "best POS software Vavuniya",
    "shop management system",
    "business billing solutions",
    "Vexel Systems POS"
  ],
  path: "/products/vexel-pos",
});

export default function VexelPOSPage() {
  return (
    <div className="relative min-h-screen bg-background">
       {/* Global Glow Effect */}
       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none z-0" />
       <VexelPOSClient />
    </div>
  );
}
