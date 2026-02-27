import { generatePageMetadata } from "@/lib/seo";
import ProductsClient from "./ProductsClient";
import { products } from "@/lib/products";

/**
 * PRODUCTS LIST PAGE (SERVER COMPONENT)
 *
 * Layout Strategy:
 * - Architecture: Server-side rendering for metadata and initial content.
 * - Discovery: Interactive filtering handled by `ProductsClient`.
 * - Rich Snippets: Automated generation for software applications.
 */

// List of Sri Lankan Districts for SEO Context
const SL_DISTRICTS = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Moneragala",
  "Ratnapura",
  "Kegalle",
];

export const metadata = generatePageMetadata({
  title: "Vexel Systems Business Suite",
  description: `Premium enterprise software solutions for businesses in ${SL_DISTRICTS.slice(0, 5).join(", ")} and across Sri Lanka.`,
  keywords: [
    "Vexel Systems",
    "business software Sri Lanka",
    "POS systems Sri Lanka",
    "ERP software Sri Lanka",
    "custom software development Sri Lanka",
    "software company Vavuniya",
    "software company Colombo",
    "retail software Sri Lanka",
    "wholesale software Sri Lanka",
    "inventory management Sri Lanka",
    "billing software Sri Lanka",
    "SaaS solutions Sri Lanka",
  ],
  path: "/products",
});

export default function ProductsPage() {
  // Schema.org SoftwareApplication markup (Static part)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vexel Systems | Premium Business Suite",
    description: `Premium enterprise software solutions for businesses in ${SL_DISTRICTS.slice(0, 5).join(", ")} and across Sri Lanka.`,
    itemListElement: products.slice(0, 10).map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.title,
        operatingSystem: "Web, Windows, Android, iOS",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: product.startingPrice || "60000",
          priceCurrency: "LKR",
        },
        description: product.shortDescription,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <ProductsClient />
    </>
  );
}
