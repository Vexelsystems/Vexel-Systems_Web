import { generatePageMetadata } from "@/lib/seo";
import VexelPOSClient from "./client";
import { generateSoftwareApplicationSchema } from "@/lib/schema-utils";

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
    "Vexel Systems POS",
  ],
  path: "/products/vexel-pos",
});

export default function VexelPOSPage() {
  // Generate schema for SEO
  const schema = generateSoftwareApplicationSchema({
    name: "Vexel POS - Point of Sale System",
    description:
      "Vexel POS is a comprehensive retail and wholesale billing system with inventory management, customer loyalty programs, and real-time analytics. Built for Sri Lankan businesses with hybrid online/offline functionality, multi-store sync, and WhatsApp receipts. Perfect for supermarkets, pharmacies, fashion retail, and multi-location franchises in Vavuniya, Colombo, Kandy, and across Sri Lanka.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Web",
    offers: {
      priceCurrency: "LKR",
      priceRange: "Free - LKR 12,500/month",
    },
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
    },
    features: [
      "Online & Offline Hybrid Mode",
      "Multi-Store Real-time Sync",
      "WhatsApp & SMS Receipts",
      "AI Inventory Prediction",
      "Quick Sale Shortcuts",
      "Multiple Payment Modes (Cash, Card, QR)",
      "Real-time Stock Tracking",
      "Low Stock & Expiry Alerts",
      "Built-in CRM & Loyalty Points",
      "Daily Sales Reports",
      "Profit & Loss Statements",
      "GST/VAT Tax Reports",
    ],
    screenshot: "/products/photo-1556742502-ec7c0e9f34b1.jpg",
    url: "/products/vexel-pos",
  });

  return (
    <div className="relative min-h-screen bg-background">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Global Glow Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none z-0" />
      <VexelPOSClient />
    </div>
  );
}
