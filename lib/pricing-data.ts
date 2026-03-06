import {
  Layout,
  Briefcase,
  ShoppingCart,
  Newspaper,
  GraduationCap,
  Plane,
  Calendar,
  Zap,
  Globe,
  Box,
  Plug,
  Server,
  type LucideIcon,
} from "lucide-react";
import type {
  PackageDeliverable,
  PricingPackage,
  PricingCategory,
  DetailedFeature,
  WhyChooseItem,
} from "@/lib/types";

export type {
  PackageDeliverable,
  PricingPackage,
  PricingCategory,
} from "@/lib/types";

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "cat-1",
    title: "Single Page Websites",
    description:
      "High-impact landing pages for portfolios, events, and products.",
    icon: Layout,
    color: "from-blue-500 to-cyan-400",
    options: [
      {
        id: "simple-static-site",
        name: "Simple Static",
        type: "Standard",
        bestFor: "Personal portfolios, events",
        timeline: "2–4 Weeks",
        priceLKR: "LKR 50,000 – 75,000",
        priceUSD: "$130 – $250",
        features: [
          "Hero & About Sections",
          "Contact Form Integration",
          "Social Media Links",
          "Fully Mobile Responsive",
        ],
        detailedFeatures: [
          {
            title: "Landing Page Excellence",
            description:
              "Specifically designed for single-goal conversion. We optimize the focal points of your page to ensure visitors take action immediately.",
          },
          {
            title: "Mobile-First DNA",
            description:
              "Over 60% of your traffic will be on mobile. We build from the small screen up, ensuring perfect performance on every device.",
          },
          {
            title: "Seamless Integration",
            description:
              "Connect your site directly to your email, WhatsApp, or CRM to never miss a new lead.",
          },
        ],
        description:
          "A beautifully crafted digital business card that establishes your presence online instantly. Perfect for showcasing your portfolio or launching a one-time event with style.",
        deliverables: [
          "Fully Responsive Single Page Website",
          "Contact Form with Email Integration",
          "Social Media Connections",
          "Basic SEO Setup",
          "Hosting Setup",
        ],
        idealFor: ["Freelancers", "Event Organizers", "Students", "Artists"],
        whyChoose: [
          {
            title: "Lightning Fast",
            description:
              "Get online in under a week with a site that loads instantly.",
          },
          {
            title: "Zero Maintenance",
            description:
              "Static architecture means no plugin updates or security patches needed.",
          },
        ],
        monthlyCost: { lkr: "LKR 2,000", usd: "$10" },
        relatedProducts: ["product-1", "product-2"], // Dummy IDs for now, need valid ones if strict
      },
      {
        id: "high-end-immersive",
        name: "High-End Immersive",
        type: "Premium",
        bestFor: "Product launches, startups",
        timeline: "4–6 Weeks",
        priceLKR: "LKR 80,000",
        priceUSD: "$250",
        features: [
          "3D Parallax Animations",
          "Interactive Scrolling",
          "Custom Cursor Effects",
          "Advanced Motion Graphics",
        ],
        detailedFeatures: [
          {
            title: "GSAP Immersive Motion",
            description:
              "We use high-performance GSAP animations to create a fluid, cinematic scrolling experience that keeps users engaged longer.",
          },
          {
            title: "WebGL & Canvas",
            description:
              "Utilize the browser's GPU for complex 3D visual effects that aren't possible with standard HTML and CSS.",
          },
          {
            title: "Bespoke Design System",
            description:
              "Zero templates. Every pixel is custom-designed to match your brand's unique philosophy and luxury positioning.",
          },
        ],
        description:
          "An award-winning visual experience designed to captivate your audience. We use cutting-edge WebGL and motion graphics to turn your story into an interactive journey.",
        deliverables: [
          "Custom WebGL/3D Elements",
          "Advanced Scroll Interactions (GSAP)",
          "Custom Sound Design (Optional)",
          "High-Performance Optimization",
          "Premium Analytics Setup",
        ],
        idealFor: [
          "Tech Startups",
          "Luxury Brands",
          "Creative Agencies",
          "Product Launches",
        ],
        whyChoose: [
          {
            title: "Unforgettable First Impression",
            description:
              "Stand out from competitors with a site that feels like a cinematic experience.",
          },
          {
            title: "Higher Conversion",
            description:
              "Engaged users stay longer and are more likely to convert.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-2",
    title: "Business Websites",
    description: "Scalable multi-page solutions for growing companies.",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-500",
    options: [
      {
        id: "standard-business",
        name: "Standard 5-Page",
        type: "Essential",
        bestFor: "SMEs, NGOs",
        timeline: "2–4 Weeks",
        priceLKR: "LKR 85,000 – 140,000",
        priceUSD: "$280 – $470",
        features: [
          "5 Core Pages",
          "Google Maps Integration",
          "WhatsApp Chat Button",
          "Basic SEO Setup",
        ],
        detailedFeatures: [
          {
            title: "Structured Navigation",
            description:
              "A logical 5-page architecture (Home, About, Services, Projects, Contact) that provides a comprehensive overview of your business trust.",
          },
          {
            title: "Local SEO Edge",
            description:
              "We optimize your site specifically for local search results and Google Maps, helping physical customers find you easily.",
          },
          {
            title: "Engagement Ready",
            description:
              "Built-in WhatsApp and click-to-call integration ensures there's no friction between a visitor and a sales conversation.",
          },
        ],
        description:
          "The digital foundation for your business. A professional, multi-page website that builds trust and provides all the essential information your customers need.",
        deliverables: [
          "Home, About, Services, Projects, Contact Pages",
          "Google Map & Business Profile Integration",
          "Click-to-Chat WhatsApp Integration",
          "Speed Optimization",
          "Admin Access to edit text",
        ],
        idealFor: ["Small Businesses", "Consultants", "Law Firms", "NGOs"],
        whyChoose: [
          {
            title: "Trust Builder",
            description:
              "A polished professional presence validates your business to new leads.",
          },
          {
            title: "Local Visibility",
            description:
              "Optimized for local SEO to help customers find you on Maps.",
          },
        ],
      },
      {
        id: "premium-corporate",
        name: "Premium Corporate",
        type: "Enterprise",
        bestFor: "Luxury brands, Agencies",
        timeline: "4–6 Weeks",
        priceLKR: "LKR 150,000",
        priceUSD: "$670",
        features: [
          "Full Site Animations",
          "Smooth Page Transitions",
          "Custom UI/UX Design",
          "Advanced Analytics",
        ],
        detailedFeatures: [
          {
            title: "Bespoke Design System",
            description:
              "We create a unique visual language for your brand, ensuring your digital presence is as premium as your corporate identity.",
          },
          {
            title: "Fluid User Experience",
            description:
              "Advanced page transitions and motion graphics create a seamless, app-like feel that exudes authority and professionalism.",
          },
          {
            title: "Enterprise-Grade Analytics",
            description:
              "Deep insights into user behavior and conversion paths to help you make data-driven decisions at a high level.",
          },
        ],
        description:
          "The pinnacle of corporate digital identity. Bespoke design, fluid animations, and enterprise-grade security come together to represent your brand's authority and excellence.",
        deliverables: [
          "Bespoke UI/UX Design System",
          "Page Transition Framework",
          "Advanced Security & Firewall",
          "Investor Relations Section",
          "Multi-language Capabilities",
        ],
        idealFor: [
          "Holdings",
          "International Exporters",
          "Luxury Hotels",
          "Financial Institutes",
        ],
        whyChoose: [
          {
            title: "Brand Authority",
            description:
              "Exude confidence and stability with a pixel-perfect digital headquarters.",
          },
          {
            title: "Global Reach",
            description:
              "Ready for international audiences with multi-language support structures.",
          },
        ],
      },
    ],
  },

  {
    id: "cat-4",
    title: "News & Media Portals",
    description: "High-traffic platforms for publishers and content creators.",
    icon: Newspaper,
    color: "from-gray-500 to-slate-500",
    options: [
      {
        id: "news-portal",
        name: "News Portal",
        bestFor: "News publishers, Media houses",
        timeline: "4–6 Weeks",
        priceLKR: "LKR 100,000",
        priceUSD: "$340",
        features: [
          "Admin CMS",
          "AdSense Ready",
          "Breaking News Ticker",
          "WhatsApp Sharing",
        ],
        detailedFeatures: [
          {
            title: "High-Performance Publishing",
            description:
              "Built for massive traffic and viral news spikes. Our caching architecture ensures your site stays fast even with thousands of concurrent readers.",
          },
          {
            title: "Monetization Ready",
            description:
              "Strategic ad placements and AdSense integration spots designed for maximum revenue without compromising user experience.",
          },
          {
            title: "Social Amplification",
            description:
              "One-click WhatsApp and social sharing tools integrated globally across all articles to drive organic engagement.",
          },
        ],
        description:
          "Broadcast your voice to the world. A high-performance media platform handling thousands of concurrent readers, complete with monetization ready architecture.",
        deliverables: [
          "Category-based News Layout",
          "Google AdSense Places",
          "Auto-post to Social Media",
          "Comment System",
          "Video Gallery Support",
        ],
        idealFor: [
          "Local News Stations",
          "Tech Blogs",
          "Magazines",
          "Review Sites",
        ],
        whyChoose: [
          {
            title: "Monetization Ready",
            description:
              "Start earning revenue immediately with pre-configured ad spots.",
          },
          {
            title: "Traffic Robust",
            description:
              "Optimized caching to handle viral news spikes without crashing.",
          },
        ],
      },
    ],
  },

  {
    id: "cat-6",
    title: "Travel & Hotel Booking",
    description: "Booking engines for the tourism industry.",
    icon: Plane,
    color: "from-sky-500 to-blue-500",
    options: [
      {
        id: "travel-booking",
        name: "Booking System",
        bestFor: "Hotels, Travel Agencies",
        timeline: "8–10 Weeks",
        priceLKR: "LKR 100,000",
        priceUSD: "$340",
        features: [
          "Availability Calendar",
          "WhatsApp Booking",
          "Multi-language Support",
          "Luxury UI animations",
        ],
        detailedFeatures: [
          {
            title: "Immersive UI Flow",
            description:
              "Bespoke hotel and trip views with luxury animations that inspire and lead guests through a seamless booking journey.",
          },
          {
            title: "Real-Time Availability",
            description:
              "Intelligent calendar system that syncs across devices, preventing double-bookings and allowing direct reservations.",
          },
          {
            title: "Global Reach Toolkit",
            description:
              "Integrated multi-currency and multi-language support to cater to international tourists and boost global sales.",
          },
        ],
        description:
          "Sell experiences, not just rooms. A stunning booking engine that inspires wanderlust and simplifies the reservation process for international travelers.",
        deliverables: [
          "Date-based Booking Engine",
          "Room/Package Management",
          "TripAdvisor / Reviews Integration",
          "Multi-Currency Display",
          "Itinerary Builder",
        ],
        idealFor: ["Boutique Hotels", "Safari Organizers", "Tour Operators"],
        whyChoose: [
          {
            title: "Direct Bookings",
            description:
              "Save on OTA commissions by empowering your own website.",
          },
          {
            title: "Global Appeal",
            description: "Designed to build trust with international tourists.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-7",
    title: "Appointment Systems",
    description: "Scheduling tools for service-based businesses.",
    icon: Calendar,
    color: "from-pink-500 to-rose-500",
    options: [
      {
        id: "appointment-booking",
        name: "Service Booking",
        bestFor: "Salons, Clinics, Service centers",
        timeline: "4–6 Weeks",
        priceLKR: "LKR 100,000",
        priceUSD: "$340",
        features: [
          "Time Slot Booking",
          "SMS Reminders",
          "Customer CRM",
          "Staff Management",
        ],
        detailedFeatures: [
          {
            title: "Automated Staff Roster",
            description:
              "Easily manage staff availability and individual service durations to maximize your billable hours and prevent scheduling conflicts.",
          },
          {
            title: "Intelligent SMS Reminders",
            description:
              "Automated appointment reminders and follow-ups reduced no-shows by up to 40%, ensuring your business runs at full capacity.",
          },
          {
            title: "Integrated Customer CRM",
            description:
              "Detailed customer histories and preference tracking so you can provide personalized service that keeps clients coming back.",
          },
        ],
        description:
          "Eliminate no-shows and phone tag. An intelligent scheduling assistant that works 24/7 to fill your calendar and remind your clients.",
        deliverables: [
          "Interactive Calendar Booking",
          "Automated SMS/Email Reminders",
          "Staff Roster Management",
          "Service Duration Logic",
          "Deposit Payments",
        ],
        idealFor: ["Medical Clinics", "Beauty Salons", "Car Service Centers"],
        whyChoose: [
          {
            title: "Full Calendars",
            description:
              "Maximize your billable hours with automated scheduling.",
          },
          {
            title: "Reduced No-Shows",
            description: "Automated reminders ensure clients show up on time.",
          },
        ],
      },
    ],
  },

  {
    id: "ai-solutions",
    title: "AI & Automation",
    description:
      "Intelligent solutions to automate workflows and enhance decision making.",
    icon: Zap,
    color: "from-violet-500 to-fuchsia-500",
    options: [
      {
        id: "chatbot-integration",
        name: "Smart Chatbot",
        type: "Automation",
        bestFor: "Customer Support",
        timeline: "4–6 Weeks",
        priceLKR: "Rs. 150,000",
        priceUSD: "$500",
        features: [
          "Custom Knowledge Base Training",
          "Website Integration",
          "WhatsApp/Messenger Integration",
          "Lead Qualification Logic",
          "24/7 Automated Support",
          "Chat History & Analytics",
        ],
        description:
          "Automate your customer support with an AI agent trained on your business data.",
        deliverables: [
          "Bot Source Code/Config",
          "Integration Script",
          "Training Manual",
          "User Guide",
        ],
        idealFor: ["E-commerce", "Service Agencies", "Support Teams"],
        whyChoose: [
          {
            title: "24/7 Availability",
            description: "Never miss a lead, even while you sleep.",
          },
          {
            title: "Cost Reduction",
            description: "Reduce the need for a large support team.",
          },
        ],
        monthlyCost: { lkr: "LKR 5,000", usd: "$15" },
      },
    ],
  },
  {
    id: "integrations-api",
    title: "Integrations & APIs",
    description:
      "Seamlessly connect your business with third-party tools and payment gateways.",
    icon: Plug,
    color: "from-orange-500 to-red-500",
    options: [
      {
        id: "sms-gateway-integration",
        name: "SMS Gateway Setup",
        type: "Communication",
        bestFor: "Alerts & OTPs",
        timeline: "2–4 Weeks",
        priceLKR: "Rs. 10,000",
        priceUSD: "$65",
        features: [
          "Provider Selection (text.lk)",
          "API Integration Code",
          "OTP Logic Implementation",
          "Automated Alerts Configuration",
          "Sender ID Registration Support",
        ],
        description:
          "Reliable SMS integration for instant notifications, OTP verifications, and marketing alerts.",
        deliverables: [
          "Integration Module",
          "API Keys Configuration",
          "Testing Log",
          "Admin Bundle Setup",
        ],
        idealFor: ["E-commerce", "App Developers", " Service Providers"],
        whyChoose: [
          {
            title: "Instant Delivery",
            description:
              "High throughput routes ensure messages arrive in seconds.",
          },
          {
            title: "Reliable Fallbacks",
            description: "Smart routing to secondary providers if one fails.",
          },
        ],
        monthlyCost: { lkr: "Usage Based", usd: "Usage Based" },
      },
      {
        id: "whatsapp-business-api",
        name: "WhatsApp API",
        type: "Messaging",
        bestFor: "Customer Engagement",
        timeline: "2–4 Weeks",
        priceLKR: "Rs. 15,000",
        priceUSD: "$65",
        features: [
          "Meta Business Verification",
          "Template Message Approval",
          "Chatbot Flow Setup",
          "CRM Integration",
          "Broadcast Capabilities",
        ],
        description:
          "Official WhatsApp Business API integration for verified green-tick messaging and automation.",
        deliverables: [
          "Verified Business Account",
          "approved Templates",
          "Webhook Setup",
          "User Manual",
        ],
        idealFor: ["Retail", "Support Teams", "Marketing Agencies"],
        whyChoose: [
          {
            title: "High Open Rates",
            description:
              "WhatsApp messages have 98% open rates compared to email.",
          },
          {
            title: "Rich Media",
            description:
              "Send images, videos, and documents directly to customers.",
          },
        ],
        monthlyCost: { lkr: "Platform Fees Apply", usd: "Platform Fees Apply" },
      },
      {
        id: "payment-gateway-integration",
        name: "Payment Gateway",
        type: "Fintech",
        bestFor: "Online Sales",
        timeline: "2–4 Weeks",
        priceLKR: "Rs. 15,000",
        priceUSD: "$65",
        features: [
          "Stripe / PayPal / PayHere",
          "Secure Checkout Flow",
          "Recurring Billing Setup",
          "Refund Handling Logic",
          "Transaction Logging",
        ],
        description:
          "Securely accept credit cards and digital payments on your website or app.",
        deliverables: [
          "Secure Payment Module",
          "Webhook Handler",
          "Testing Sandbox",
          "Compliance Checklist",
        ],
        idealFor: ["E-commerce", "SaaS", "Donation Sites"],
        whyChoose: [
          {
            title: "Secure Transactions",
            description: "PCI-DSS compliant handling of sensitive data.",
          },
          {
            title: "Global Reach",
            description: "Accept currencies from customers worldwide.",
          },
        ],
        monthlyCost: { lkr: "None", usd: "None" },
      },
    ],
  },
  {
    id: "infrastructure-essentials",
    title: "Infrastructure & Essentials",
    description:
      "The digital foundation for your online presence. Fast, secure, and reliable.",
    icon: Server,
    color: "from-slate-600 to-slate-900",
    options: [
      {
        id: "domain-registration",
        name: "Domain Registration",
        type: "Identity",
        bestFor: "New Brands",
        timeline: "24 Hours",
        priceLKR: "Market Rate",
        priceUSD: "Market Rate",
        features: [
          "Name Search & Availability",
          "DNS Configuration",
          "Whois Privacy Protection",
          "Auto-renewal Setup",
          "Email Forwarding",
        ],
        description:
          "Secure your perfect .com, .lk, or .io domain name before someone else does.",
        deliverables: [
          "Domain Ownership",
          "DNS Control Panel",
          "SSL Certificate (Basic)",
        ],
        idealFor: ["Everyone"],
        whyChoose: [
          {
            title: "Full Ownership",
            description: "You own the domain 100%, we just manage it.",
          },
          {
            title: "Managed DNS",
            description:
              "We handle the complex records so your site never goes down.",
          },
        ],
        monthlyCost: { lkr: "Yearly Fee", usd: "Yearly Fee" },
      },
      {
        id: "business-hosting",
        name: "Business Hosting",
        type: "Hosting",
        bestFor: "Websites",
        timeline: "Immediate",
        priceLKR: "Rs. 24,000 /yr",
        priceUSD: "$60 /yr",
        features: [
          "NVMe SSD Storage",
          "Free SSL Certificate",
          "Daily Backups",
          "99.9% Uptime SLA",
          "cPanel Access",
          "Priority Support",
        ],
        description:
          "High-performance business hosting optimized for WordPress and custom sites.",
        deliverables: [
          "Hosting Account",
          "FTP Access",
          "Email Accounts",
          "Backup System",
        ],
        idealFor: ["Small Business", "Blogs", "Portfolios"],
        whyChoose: [
          {
            title: "Blazing Fast",
            description:
              "Servers optimized for speed and Google Core Web Vitals.",
          },
          {
            title: "Secure",
            description: "Imunify360 security suite included to block hackers.",
          },
        ],
        monthlyCost: { lkr: "Annual Only", usd: "Annual Only" },
      },
    ],
  },
];

export function getPackageBySlug(slug: string): PricingPackage | undefined {
  for (const cat of PRICING_CATEGORIES) {
    const found = cat.options.find((opt) => opt.id === slug);
    if (found) return found;
  }
  return undefined;
}
