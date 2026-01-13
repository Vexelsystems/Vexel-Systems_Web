import { generatePageMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

/**
 * CONTACT ROOT PAGE
 * 
 * Functional Overview:
 * - Architecture: Wrapper for `ContactClient` to enable SEO metadata injection.
 * - Keyword Targeting: Optimized for location-specific terms ("Vavuniya", "Sri Lanka").
 */

export const metadata = generatePageMetadata({
  title: "Contact Us - Get in Touch",
  description: "Contact Vexel Systems for innovative software solutions. Located in Vavuniya, Sri Lanka, we serve clients globally. Reach out for POS systems, custom software, AI solutions, and more.",
  keywords: [
    "Contact Vexel Systems",
    "Software Company Contact",
    "Vavuniya Contact",
    "Sri Lanka Tech Support",
    "Get a Quote",
    "Business Inquiry",
    "Technical Support",
    "Sales Contact",
  ],
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
