
import { Metadata } from "next";
import VexelTrackClient from "./client";

export const metadata: Metadata = {
  title: "Vexel Track",
  description: "Real-Time Fleet & Asset Tracking system. Optimize routes, reduce fuel costs, and monitor driver behavior in Sri Lanka.",
};

export default function VexelTrackPage() {
  return <VexelTrackClient />;
}
