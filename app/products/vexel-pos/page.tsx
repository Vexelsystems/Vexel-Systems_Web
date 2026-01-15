
import { Metadata } from "next";
import VexelPOSClient from "./client";

export const metadata: Metadata = {
  title: "Vexel POS",
  description: "The Retail OS That Never Stops. Hybrid POS system for modern retail and wholesale businesses in Sri Lanka.",
};

export default function VexelPOSPage() {
  return (
    <div className="relative min-h-screen bg-background">
       {/* Global Glow Effect */}
       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none z-0" />
       <VexelPOSClient />
    </div>
  );
}
