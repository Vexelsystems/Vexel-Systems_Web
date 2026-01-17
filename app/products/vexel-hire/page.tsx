
import { generatePageMetadata } from "@/lib/seo";
import VexelHireClient from "./client";

export const metadata = generatePageMetadata({
  title: "Vexel Hire",
  description: "Stop drowning in resumes. Just upload your CVs, tell us who you're looking for, and let our AI find the perfect candidate for you in seconds.",
  keywords: [
    "Vexel Hire",
    "AI recruitment software",
    "smart hiring system Sri Lanka",
    "resume filtering AI",
    "automated recruitment tool",
    "HR tech Sri Lanka",
    "talent acquisition software",
    "best hiring platform",
    "Vexel Systems products",
    "recruitment automation Vavuniya"
  ],
  path: "/products/vexel-hire",
});

export default function VexelHirePage() {
  return <VexelHireClient />;
}
