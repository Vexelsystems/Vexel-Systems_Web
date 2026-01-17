
import { getPackageBySlug, PRICING_CATEGORIES } from "@/lib/pricing-data";
import { companyDetails } from "@/lib/companydetails";
import { notFound } from "next/navigation";
import { generateDynamicMetadata } from "@/lib/seo";
import PricingDetailClient from "./client";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) return {};

  return generateDynamicMetadata({
    title: pkg.name,
    description: pkg.description,
    keywords: [
      pkg.name,
      ...pkg.detailedFeatures?.map(f => f.title) || [],
      "Vexel Pricing",
      "Software Development Packages",
      "Web Design Pricing Sri Lanka"
    ],
    path: `/pricing/${slug}`,
  });
}

export async function generateStaticParams() {
  const paths = PRICING_CATEGORIES.flatMap(cat => 
    cat.options.map(opt => ({
      slug: opt.id
    }))
  );
  
  return paths;
}

export default async function PricingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <PricingDetailClient pkg={pkg} />;
}
