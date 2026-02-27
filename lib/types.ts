/**
 * CENTRALIZED TYPES
 *
 * This file serves as the single source of truth for ALL TypeScript types and interfaces
 * used throughout the application. Having one central types file ensures:
 * - Type consistency across all pages and components
 * - Easier maintenance and updates
 * - Reduced duplication
 * - Better IDE autocomplete and type checking
 *
 * Types are organized by domain (services, products, pricing, etc.)
 */

import { type LucideIcon } from "lucide-react";

// ============================================================================
// BLOG TYPES
// ============================================================================
export type BlogPostCategory = "Technology" | "Business" | "POS" | "Guides";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogPostCategory;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

// ============================================================================
// CAREER TYPES
// ============================================================================
export type JobType = "Remote" | "Hybrid" | "On-site";

export type JobPosition = {
  id: string;
  title: string;
  department: string;
  type: JobType;
  salary: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

// ============================================================================
// FAQ TYPES
// ============================================================================
export interface FAQItem {
  category?: string;
  question: string;
  answer: string;
}

// ============================================================================
// LOCATION TYPES
// ============================================================================
export interface CoreProduct {
  title: string;
  description: string;
  icon: any;
}

export interface LocationData {
  slug: string;
  name: string;
  latitude: number;
  longitude: number;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1Heading: string;
  localHook: string;
  coreProducts: CoreProduct[];
  whyChooseUs: string;
  ctaText: string;
}

// ============================================================================
// EVENT TYPES
// ============================================================================
export interface EventAgendaItem {
  time: string;
  title: string;
}

export interface Speaker {
  name: string;
  role: string;
}

export type EventType = "In-Person" | "Virtual" | "Hybrid";
export type EventStatus = "Upcoming" | "Completed" | "Cancelled";

export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  time: string;
  category: string;
  location: string;
  type: EventType;
  image: string;
  description: string;
  agenda: EventAgendaItem[];
  speakers: Speaker[];
  status: EventStatus;
}

// ============================================================================
// PRICING TYPES
// ============================================================================
export interface PackageDeliverable {
  title: string;
  description: string;
}

export interface DetailedFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  type?: string;
  bestFor: string;
  timeline: string;
  priceLKR: string;
  priceUSD: string;
  features: string[];
  detailedFeatures?: DetailedFeature[];
  description: string;
  deliverables: string[];
  idealFor: string[];
  whyChoose: WhyChooseItem[];
  monthlyCost?: { lkr: string; usd: string };
  relatedProducts?: string[];
}

export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  options: PricingPackage[];
}

// ============================================================================
// PRODUCT TYPES
// ============================================================================
export interface ProductFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface DetailedFeatureCategory {
  category: string;
  icon: LucideIcon;
  features: string[];
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface PricingOption {
  name?: string;
  title?: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ComparisonItem {
  feature: string;
  value?: string | boolean;
  vexel?: boolean;
  others?: boolean;
}

export interface TestimonialItem {
  name?: string;
  author?: string;
  role: string;
  company?: string;
  image?: string;
  quote: string;
  rating?: number;
}

export interface CaseStudyItem {
  title: string;
  // Service case study fields
  image?: string;
  category?: string;
  stat?: string;
  statDescription?: string;
  // Product case study fields
  challenge?: string;
  problem?: string;
  solution?: string;
  result?: string;
  results?: string[];
  industry?: string;
  metrics?: { label: string; value: string }[];
}

export interface PartnerItem {
  name: string;
  logo: string;
  link?: string;
}

export interface RoadmapItem {
  phase: string;
  date: string;
  title?: string;
  description: string;
  features?: string[];
  items?: string[];
  status: "completed" | "in-progress" | "planned" | "current" | "future";
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  status?: string;
  tagline?: string;
  shortDescription: string;
  fullDescription?: string;
  longDescription?: string;
  badge?: string;
  badgeColor?: string;
  category?: string;
  icon: LucideIcon;
  mainImage?: string;
  image?: string;
  tags?: string[];
  checklist?: string[];
  idealFor?: string[];
  startingPrice?: number | string;
  maintenanceFee?: number | string;
  features?: ProductFeature[];
  detailedFeatures?: DetailedFeatureCategory[];
  benefits?: ProductBenefit[];
  pricing?: {
    description: string;
    options: PricingOption[];
  };
  comparison?: ComparisonItem[];
  testimonials?: TestimonialItem[];
  caseStudies?: CaseStudyItem[];
  partners?: PartnerItem[];
  process?: { step: string; description: string; icon?: LucideIcon }[];
  roadmap?: RoadmapItem[];
  faqs?: FAQItem[];
}

// ============================================================================
// SERVICE TYPES
// ============================================================================
export interface SubService {
  title: string;
  description: string;
  icon?: LucideIcon;
  features?: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

export interface WhyUs {
  heading: string;
  points: WhyUsPoint[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface PrivacyFeature {
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image?: string;
  quote: string;
  rating?: number;
}

export interface Certification {
  name: string;
  icon?: string;
}

export interface TechItem {
  name: string;
  icon?: LucideIcon;
}

export interface ServiceData {
  slug: string;
  title: string;
  navTitle?: string;
  subtitle: string;
  description?: string;
  icon?: LucideIcon;
  shortDescription?: string;
  longDescription?: string;
  aboutDetail?: string;
  heroImage?: string;
  subServices: SubService[];
  keyBenefits?: Benefit[];
  benefits?: Benefit[];
  whyUs?: WhyUs;
  process?: ProcessStep[] | { title: string; description: string }[];
  securityFeatures?: PrivacyFeature[];
  industriesServed?: Industry[];
  testimonials?: Testimonial[];
  testimonial?: { quote: string; author: string; role: string };
  certifications?: Certification[];
  technologies?: TechItem[];
  techStack?: { name: string; iconName: string; explanation: string }[];
  caseStudies?:
    | CaseStudyItem[]
    | {
        title: string;
        category: string;
        stat: string;
        statDescription: string;
        image: string;
      }[];
  faqs?: FAQItem[];
  faq?: { question: string; answer: string }[];
  roadmap?: RoadmapItem[];
  relatedServices?: string[];
  pricingPackageIds?: string[];
  pricing?: {
    title: string;
    description: string;
    options: { name: string; price: string; features: string[] }[];
  };
  comparison?: { feature: string; vexel: boolean; others: boolean }[];
  keywords?: string[];
  status?: string;
}

// ============================================================================
// SCHEMA & METADATA TYPES
// ============================================================================
export interface SchemaImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface GenerateSchemaOptions {
  name: string;
  description: string;
  url: string;
  image?: string;
}

// ============================================================================
// COMMON RESPONSE / API TYPES (For future backend integration)
// ============================================================================
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
