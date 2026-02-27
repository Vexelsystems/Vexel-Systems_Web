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
  title: "Our Products",
  description:
    "Explore Vexel Systems' suite of high-performance business software. From our revolutionary cloud-based POS systems to custom enterprise ERP solutions, we build software that scales.",
  keywords: [
    "Vexel Systems products",
    "cloud POS system Sri Lanka",
    "enterprise ERP software",
    "inventory management solutions",
    "business suite software Sri Lanka",
    "retail software Vavuniya",
    "restaurant POS software",
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
