import { generatePageMetadata, generateItemListSchema } from "@/lib/seo";
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
  // Generate ItemList schema using centralized function
  const schemaMarkup = generateItemListSchema({
    name: "Vexel Systems | Premium Business Suite",
    description: `Premium enterprise software solutions for businesses in ${SL_DISTRICTS.slice(0, 5).join(", ")} and across Sri Lanka.`,
    items: products.slice(0, 10).map((product) => ({
      name: product.title,
      description: product.shortDescription,
      price: String(product.startingPrice || "60000"),
    })),
  });

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
