import { type LucideIcon } from "lucide-react";
import {
  Bot,
  Workflow,
  MessageSquare,
  BarChart3,
  Cpu,
  Code2,
  TrendingUp,
  Zap,
  LineChart,
  DollarSign,
  Landmark,
  Headphones,
  Factory,
  Megaphone,
  Users,
  Cloud,
  Smartphone,
  DraftingCompass,
  Settings,
  UploadCloud,
  PlusCircle,
  Gauge,
  Timer,
  Shield,
  Container,
  LayoutGrid,
  FileText,
  PenTool,
  SearchCheck,
  BarChart,
  Video,
  Microscope,
  LineChart as GraphChart,
  BrainCircuit,
  Lock,
  EyeOff,
  CloudOff,
  ShieldCheck,
  Stethoscope,
  Send,
  FlaskConical,
  UsersRound,
  IdCard,
  Fingerprint,
  FileCheck,
  Settings2,
  Building2,
  GraduationCap,
  Hospital,
  Store,
  Search,
  Share2,
  MousePointerClick,
  Mail,
  Lightbulb,
  UserPlus,
  Rocket,
  Newspaper,
  BookOpen,
  Tractor,
  Activity,
  MapPin,
  Clock,
  Globe,
  Radio,
  LayoutDashboard,
  CircuitBoard,
  Router,
  CloudCog,
  Wifi,
  Tablet,
  Sparkles,
  RefreshCw,
  Quote,
  Server,
  Bug,
  Star,
  Map,
  List,
  Network,
  Sliders,
  Eye,
  Database,
  Palette,
  Webhook,
  Layers,
  Tablets,
  PiggyBank,
  AppWindow,
  Blocks,
  ScanSearch,
  Laugh,
  Terminal,
  PieChart,
  Link as LinkIcon,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Music,
  Calendar,
  MessageCircle,
  MousePointerClick as Click,
  Award,
  Store as PointOfSale, // Alias Store for POS
  Landmark as CorporateFare,
  Cloud as CloudSync,
  Network as Hub, // Alias Network for Hub
  BadgeCheck,
  HeartPulse,
  CreditCard,
  Gavel,
  ShieldCheck as ShieldLock,
  Languages,
  ShoppingCart,
  Code2 as DataObject, // Alias Code2 for DataObject
  FilePenLine as EditDocument, // Maps to edit_document
  Navigation,
  Coins as Token, // Maps to token
  Monitor,
  Briefcase,
  ChevronRight,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

/**
 * SERVICES DATA
 *
 * Functional Overview:
 * - Comprehensive list of all services offered.
 * - Structure: Rich data model including sub-services, benefits, tech stack, and case studies.
 * - Used by: Services page, Service Detail pages, and Sitemap generation.
 */
export interface SubService {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  image?: string;
}

export interface Benefit {
  title: string;
  description: string;
  image?: string;
  icon?: any;
}

export interface WhyUsPoint {
  title: string;
  description: string;
  icon: any;
}

export interface WhyUs {
  title: string;
  description: string;
  image: string;
  points: WhyUsPoint[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PrivacyFeature {
  title: string;
  icon: any;
}

export interface CaseStudy {
  title: string;
  category: string;
  stat: string;
  statDescription: string;
  image: string;
}

export interface Industry {
  name: string;
  description?: string;
  icon?: any;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  authorImage?: string;
}

export interface Certification {
  title: string;
  icon: any;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  subServices: SubService[];
  benefits?: Benefit[];
  techStack: string[];
  industries?: Industry[];
  process?: ProcessStep[];
  whyUs?: WhyUs;
  caseStudies?: CaseStudy[];
  testimonial?: Testimonial;
  privacy?: {
    description: string;
    features: PrivacyFeature[];
  };
  certifications?: Certification[];
  faq?: FaqItem[];
}

export const services: ServiceData[] = [
  {
    slug: "ai-ml-solutions",
    title: "AI & Smart Automation Experts",
    subtitle: "The Only AI Company in Vavuniya",
    description:
      "We are the only company in Vavuniya building real, expert-level Artificial Intelligence solutions. From automating your daily tasks to creating smart systems that 'think' for you, we turn complex AI technology into simple tools that actually grow your business.",
    heroImage: "/home/photo-1531482615713-2afd69097998.jpg",
    subServices: [
      {
        title: "Intelligent Automation",
        description:
          "Stop doing the same boring tasks over and over. We build AI that handles your data entry, scheduling, and customer replies automatically.",
        icon: Zap,
      },
      {
        title: "Smart Business Tools",
        description:
          "Custom tools that understand your business language. Ask questions, get reports, and make decisions faster than ever.",
        icon: BrainCircuit,
      },
      {
        title: "Predictive Insights",
        description:
          "Know what your customers want before they do. Our systems analyze patterns to help you stock the right products and offer the right deals.",
        icon: TrendingUp,
      },
      {
        title: "Visual Intelligence",
        description:
          "Cameras that can count stock, secure your premises, or analyze foot traffic without you watching a single screen.",
        icon: Eye,
      },
    ],
    techStack: ["PYTHON", "TENSORFLOW", "OPENAI", "LANGCHAIN", "PYTORCH"],
    industries: [
      {
        name: "Retail Shops",
        icon: Store,
        description: "Smart inventory and customer tracking",
      },
      {
        name: "Healthcare",
        icon: Stethoscope,
        description: "Patient management and smart diagnostics",
      },
      {
        name: "Finance",
        icon: Landmark,
        description: "Automated accounting and fraud prevention",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Modern Web Design & Development",
    subtitle: "Websites That Sell",
    description:
      "Your website is your digital face. We don't just put code on a screen; we craft beautiful, high-speed websites that tell your story and turn visitors into paying customers.",
    heroImage: "/home/photo-1498050108023-c5249f4df085.jpg",
    subServices: [
      {
        title: "Stunning Business Websites",
        description:
          "A sleek, professional site that looks amazing on every phone and computer.",
        icon: Monitor,
      },
      {
        title: "E-Commerce Stores",
        description:
          "Sell your products online 24/7 with a shop that's easy to manage and safe for payments.",
        icon: ShoppingCart,
      },
      {
        title: "Web Applications",
        description:
          "Need more than a brochure? We build powerful web apps that run your entire business online.",
        icon: AppWindow,
      },
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We chat about your goals and what makes your brand special.",
      },
      {
        title: "Design",
        description: "We create a visual look that you'll fall in love with.",
      },
      {
        title: "Build",
        description: "We code everything to run fast and error-free.",
      },
      {
        title: "Launch",
        description: "We put you online and teach you how to use it.",
      },
    ],
    techStack: ["NEXT.JS", "REACT", "TAILWIND", "NODE.JS"],
  },
  {
    slug: "mobile-app-development",
    title: "iOS & Android Mobile Apps",
    subtitle: "Your Business in Their Pocket",
    description:
      "Get closer to your customers with a custom mobile app. Whether it's for shopping, booking, or managing your team, we build apps that are a joy to use.",
    heroImage: "/home/photo-1512941937669-90a1b58e7e9c.jpg",
    subServices: [
      {
        title: "iPhone & Android Apps",
        description:
          "One app that works perfectly on every device, saving you time and money.",
        icon: Smartphone,
      },
      {
        title: "Customer Loyalty Apps",
        description:
          "Keep them coming back with rewards, notifications, and easy ordering.",
        icon: Star,
      },
      {
        title: "Internal Business Apps",
        description:
          "Tools for your team to track work, sales, and inventory on the go.",
        icon: Briefcase,
      },
    ],
    techStack: ["FLUTTER", "REACT NATIVE", "FIREBASE"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    subtitle: "Get Found Online",
    description:
      "Having a great product isn't enough if nobody knows about it. We help you reach the right people, get more clicks, and grow your brand across social media and Google.",
    heroImage: "/home/photo-1557838923-2985c318be48.jpg",
    subServices: [
      {
        title: "Social Media Management",
        description:
          "We handle your Facebook, Instagram, and LinkedIn so you stay active and relevant.",
        icon: Share2,
      },
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Get your business to the top of Google when people search for what you offer.",
        icon: Search,
      },
      {
        title: "Paid Advertising",
        description:
          "Targeted ads that bring immediate traffic and leads to your business.",
        icon: Megaphone,
      },
    ],
    benefits: [
      {
        title: "More Visibility",
        description: "Be seen by thousands of potential local customers.",
        icon: Eye,
      },
      {
        title: "Real Leads",
        description: "Stop guessing and start getting calls and messages.",
        icon: Users,
      },
    ],
    techStack: ["GOOGLE ADS", "FACEBOOK", "INSTAGRAM", "ANALYTICS"],
  },
  {
    slug: "it-consulting-support",
    title: "IT Support & Strategy",
    subtitle: "We Are Your Tech Partner",
    description:
      "Technology can be confusing. We are here to simplify it. From fixing day-to-day issues to planning your future tech roadmap, think of us as your external IT department.",
    heroImage: "/home/photo-1521737604893-d14cc237f11d.jpg",
    subServices: [
      {
        title: "Tech Consultation",
        description:
          "Not sure what software to buy? We advise you on the best tools for your budget.",
        icon: Lightbulb,
      },
      {
        title: "System Maintenance",
        description:
          "We keep your websites and apps updated, secure, and running smoothly.",
        icon: Settings,
      },
      {
        title: "Digital Transformation",
        description:
          "Moving your traditional business processes to digital systems to save time.",
        icon: RefreshCw,
      },
    ],
    process: [
      {
        title: "Assess",
        description: "We look at what you have and what you need.",
      },
      {
        title: "Plan",
        description: "We give you a simple, clear roadmap.",
      },
      {
        title: "Execute",
        description: "We implement the changes for you.",
      },
      {
        title: "Support",
        description: "We're always a phone call away.",
      },
    ],
    techStack: ["CLOUD", "SECURITY", "STRATEGY"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}
