import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
import { PRICING_CATEGORIES } from "@/lib/pricing-data";
import { events } from "@/lib/events-data";

/**
 * SITEMAP GENERATOR
 *
 * Functional Overview:
 * - Type: Dynamic Server Function generating `sitemap.xml`.
 * - Logic:
 *   1. Defines static priority routes (Home, About, Services).
 *   2. Iterates over data sources (`blogPosts`, `services`, `products`, `pricing`) to generate dynamic entries.
 *   3. Assigns `changeFrequency` and `priority` based on content type importance.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vexelsystems.lk";
  const lastModified = new Date();

  // Static routes with priorities
  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "yearly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/products", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/quote", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/team", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/events", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/consultation", priority: 0.8, changeFrequency: "yearly" as const },

    {
      url: "/company-policy",
      priority: 0.4,
      changeFrequency: "yearly" as const,
    },
    { url: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
    {
      url: "/cookie-policy",
      priority: 0.4,
      changeFrequency: "yearly" as const,
    },
    {
      url: "/refund-policy",
      priority: 0.4,
      changeFrequency: "yearly" as const,
    },
  ];

  // Dynamic blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic pricing routes
  const pricingPackages = PRICING_CATEGORIES.flatMap((cat) => cat.options);
  const pricingRoutes = pricingPackages.map((pkg) => ({
    url: `${baseUrl}/pricing/${pkg.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic event routes
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Combine all routes
  const allRoutes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: [`${baseUrl}/favicon.ico`],
    })),
    ...blogRoutes.map((route, idx) => ({
      ...route,
      images: [
        blogPosts[idx].image
          ? `${baseUrl}${blogPosts[idx].image}`
          : `${baseUrl}/favicon.ico`,
      ],
    })),
    ...serviceRoutes.map((route, idx) => ({
      ...route,
      images: [
        services[idx].heroImage
          ? `${baseUrl}${services[idx].heroImage}`
          : `${baseUrl}/favicon.ico`,
      ],
    })),
    ...productRoutes.map((route, idx) => ({
      ...route,
      images: [
        products[idx].mainImage
          ? `${baseUrl}${products[idx].mainImage}`
          : `${baseUrl}/favicon.ico`,
      ],
    })),
    ...eventRoutes.map((route, idx) => ({
      ...route,
      images: [
        events[idx].image
          ? `${baseUrl}${events[idx].image}`
          : `${baseUrl}/favicon.ico`,
      ],
    })),
    ...pricingRoutes.map((route) => ({
      ...route,
      images: [`${baseUrl}/favicon.ico`],
    })),
  ];

  return allRoutes;
}
