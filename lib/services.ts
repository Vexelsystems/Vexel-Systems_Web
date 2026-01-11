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
  MonitorSmartphone,
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
  ChevronRight,
  ChevronDown,
  CheckCircle
} from "lucide-react";

export interface SubService {
  title: string;
  description: string;
  image?: string;
  icon: any;
  features?: string[];
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
    slug: "api-development",
    title: "Seamless API Development & System Integration",
    subtitle: "Connectivity Solutions",
    description: "Connect systems, platforms, and applications securely. We build robust bridges for your data to flow effortlessly across your entire ecosystem.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZSDj9t6ICTdhHiGYtKeTqOCvOjC7S3IS9jYY-usYFa3AM6HFy07nFuMG8SkvY7nFZ4UOYQHyZsaOyDgC83RR2R9XUdIcuT5g-DfUV-9SewW5tfsStZtpokevHtXgF1ca98N2bRpdcNjLHwwA9069n8UW6aiao1OC5xfD5WsNt1PIiLs1vsd82PDYAicHjxOQDlaZVc7_HpYhMdv4_LyVj8oiYyuPbRp3__i1_4RLSswM14LW7PijE81vnM_dWfOgol_Emw2gWCTjr",
    subServices: [
      {
        title: "REST API Development",
        description: "High-performance, scalable endpoints built with industry standards for your business needs.",
        icon: Cloud
      },
      {
        title: "Third-party Integration",
        description: "Connecting CRM, ERP, and SaaS tools like Salesforce, Hubspot, and SAP seamlessly.",
        icon: Workflow
      },
      {
        title: "Payment Gateways",
        description: "Secure Stripe, PayPal, and custom banking gateway setups for global transactions.",
        icon: DollarSign
      },
      {
        title: "Mobile & Web Backend",
        description: "Powering robust mobile and web experiences with speed, security, and low latency.",
        icon: Smartphone
      }
    ],
    techStack: ["NODE.JS", "JAVA SPRING", "LARAVEL", "GRAPHQL"]
  },
  {
    slug: "cloud-devops",
    title: "Scalable Cloud & DevOps Solutions",
    subtitle: "Next-Gen Infrastructure",
    description: "Deploy, manage, and scale applications securely on the cloud. We build the architecture that powers high-performance systems.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE9ZNrkrnr_swfqK-M9oC0xQoxiLwEN7y4EUOD0fXZYLQrbBRwk7RKHnLfmk2Yom_PSKBho-_O8-_RrrUqxlU9ShPA7OaW1DK4l0E8989MXRJtaoa8gkUf6MauGEkO1eH-cCShVkRpYxCZW7Wk2TTzHf5GTG93vqNIb47gUvm2-bBAoyV703O9vT88J6TiFadJfvmK9LUSrCjZbu62tvBJ-ZQQO7YKODhcbMpTcYaxBvZz9nDXpf-J9zhCa5et4wvs9Nj4V1r91GZl",
    subServices: [
        {
          title: "Cloud Architecture",
          description: "Designing resilient, distributed infrastructures built for infinite scale and reliability.",
          icon: DraftingCompass
        },
        {
          title: "AWS/Azure/GCP Setup",
          description: "Expert multi-cloud configuration and management across the world's leading providers.",
          icon: Cloud
        },
        {
          title: "CI/CD Pipelines",
          description: "Fully automated delivery workflows that accelerate your development velocity by 10x.",
          icon: Workflow
        },
        {
          title: "Server Automation",
          description: "Infrastructure as Code (IaC) implementation to eliminate manual errors and configuration drift.",
          icon: Settings
        },
        {
          title: "Cloud Migration",
          description: "Zero-downtime transition strategies for moving legacy systems to modern cloud environments.",
          icon: UploadCloud
        },
        {
          title: "Custom Solutions",
          description: "Tailored infrastructure solutions to meet unique business requirements and compliance needs.",
          icon: PlusCircle
        }
    ],
    benefits: [
        {
          title: "High Availability",
          description: "Redundant architectures that ensure your services are reachable from anywhere, anytime."
        },
        {
          title: "Reduced Downtime",
          description: "Self-healing systems and proactive monitoring to fix issues before they impact users."
        },
        {
          title: "Cost Optimization",
          description: "Right-sizing instances and implementing auto-scaling to pay only for what you use."
        },
        {
          title: "Secure Deployments",
          description: "DevSecOps principles integrated into every stage of your delivery pipeline."
        }
    ],
    techStack: ["AWS", "DOCKER", "KUBERNETES", "AZURE", "GITHUB"]
  },
  {
    slug: "content-marketing",
    title: "Content That Educates, Engages & Converts",
    subtitle: "Content Marketing",
    description: "Build authority and trust through high-quality content designed for modern tech brands.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA345wCjvOhqgxATpTXiKP2ym-UKhZ4PIzXzGLAT9Kuh42aEh9kFhBS4LY-9oZInbslGPWz5deowFncGYehpIhnEwvyP6j08qEMS9QuLPymLX42FARzPzLYomKgTkaZL1fLujvJ6wB3PooQzxFocnrXaIiEgxcGDD6-Zv1QjLylKTsOqgjvQLru6F6KsuAmSrDc1e_EbKYaBpRx2IDMAU2WGnrgL0D6ZRuYFPpS2-efS_gRNhOF12lEhYxyimnmQzrxP74khI-dNLGw",
    subServices: [
        {
          title: "Blog Writing",
          description: "Thought leadership and deep industry insights.",
          icon: FileText
        },
        {
          title: "Website Copy",
          description: "UX-focused copy for high conversion rates.",
          icon: PenTool
        },
        {
          title: "SEO Articles",
          description: "Keyword optimized for organic reach and growth.",
          icon: SearchCheck
        },
        {
          title: "Case Studies",
          description: "Data-driven stories of customer success.",
          icon: BarChart
        },
        {
          title: "Video Scripts",
          description: "Engaging storytelling for modern visual media.",
          icon: Video
        }
    ],
    benefits: [
        {
          title: "SEO Visibility",
          description: "Optimized content ranks higher, bringing targeted traffic to your site consistently."
        },
        {
          title: "Customer Trust",
          description: "Educating your audience builds credibility before the first sales call."
        },
        {
          title: "Sustainable Growth",
          description: "Content is an asset that keeps working for you long after it is published."
        }
    ],
    techStack: ["SEO", "COPYWRITING", "ANALYTICS", "STORYTELLING", "RESEARCH"]
  },
  {
    slug: "custom-ai-solutions",
    title: "AI Solutions Without Technical Complexity",
    subtitle: "For Non-Technical Professionals",
    description: "We help professionals like doctors, researchers, and analysts use AI to automate complex tasks without needing to write a single line of code.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwU5SkmZ-KegwWvVYPR8XsnrZDpsg0LcHa7odB6_Zl-cNtRWjXG5F-hen3oHO-RaT6MuxqtBsrFBS6x-Nq_J7xWYp8-GprEr2QxwjL3AJzHQOXRlQSowXCuw_nGT-U8GE9g7ziEznaNpi6l09uBf-iDzpftDXDiDfB6ZH2tECnSLEP-xTn_uZSwS-ofRuMe8iVAKz2MZ16GFdUYnxeoQg20xjJdzw16IOJf8PmQYGM086eRL2ngO9kIs3OaoSaO-eyDOEglI5JzTQ1",
    subServices: [
        {
          title: "Medical Data Analysis",
          description: "Processing complex electronic health records to identify patient risk factors.",
          icon: Stethoscope
        },
        {
          title: "Image & Report Analysis",
          description: "Automated pre-screening for X-rays, MRIs, and pathology reports for faster triage.",
          icon: Microscope
        },
        {
          title: "Predictive Models",
          description: "Forecasting patient outcomes or research trends based on historical data inputs.",
          icon: TrendingUp
        },
        {
          title: "Research-based AI Tools",
          description: "Custom algorithms designed to find specific patterns in genomic or chemical data.",
          icon: FlaskConical
        },
        {
          title: "Custom ML Model Training",
          description: "We train proprietary models on your unique datasets for maximum accuracy.",
          icon: BrainCircuit
        }
    ],
    techStack: ["PYTHON", "TENSORFLOW", "PYTORCH", "HIPAA COMPLIANT", "GDPR"],
    industries: [
        { name: "Doctors", icon: Stethoscope },
        { name: "Researchers", icon: Microscope },
        { name: "Business Analysts", icon: GraphChart }
    ],
    process: [
        { title: "Understand Problem", description: "We define the goal and success metrics for your solution." },
        { title: "Analyze Data", description: "Our experts audit and prepare your data for training." },
        { title: "Build & Train", description: "We develop and refine the AI model using best-in-class tools." },
        { title: "Deploy", description: "Receive a ready-to-use tool integrated into your workflow." }
    ],
    privacy: {
        description: "Your data security is our highest priority. We implement enterprise-grade encryption and follow strict HIPAA and GDPR compliance standards for all projects.",
        features: [
            { title: "Encrypted", icon: Lock },
            { title: "Compliant", icon: ShieldCheck },
            { title: "Private", icon: EyeOff },
            { title: "Isolated", icon: CloudOff }
        ]
    }
  },
  {
    slug: "custom-business-systems",
    title: "Software Built Exactly for Your Business",
    subtitle: "Custom Business Systems",
    description: "Stop struggling with generic tools. We build custom management systems designed to solve your specific operational headaches.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYvtiuz2smY6tfKA2fh9xGPOIRqoIuIKlUF7wJVGJhFoE_76M8SX59Zf-adFgvpoZ1HxuU4u4pR-lnvbrLdatQfTS_hNPCjIBh4Kx-EekkCIEmcQdFAPU33Hf46aIyYoYTxjPriPs1GbpRcidkXt6QP2Ne6qmMiq9QRTetb9C3id_Jf9ocKTt7gMvusiQo0UEONkNMayzdQ1zglbb8VA4vo105gsL9BYzo1ctoTUn65_ACjpBcW0alTpzVSOcd6cROhDF2aSaudnjF",
    subServices: [
        {
          title: "Staff Management",
          description: "Centralize employee data, roles, and compliance.",
          icon: UsersRound
        },
        {
          title: "ID & Access Control",
          description: "Secure physical and digital entry points automatically.",
          icon: IdCard
        },
        {
          title: "Biometric Attendance",
          description: "Eliminate attendance fraud with precision tracking.",
          icon: Fingerprint
        },
        {
          title: "Payroll Tracking",
          description: "Automate leave and salary calculations accurately.",
          icon: FileCheck
        },
        {
          title: "Office Automation",
          description: "Streamline daily repetitive workflows and paperwork.",
          icon: Settings2
        }
    ],
    benefits: [
        {
          title: "Reduce Manual Work",
          description: "Automate time-consuming tasks so your team can focus on growth.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5z581RNd83ucu0YondO6cbmreUvft6DtzwJk4L1sbqRpXsb-5rKg4VGC3MKpSCWTp8rfv6UOB8C5CbJqLMnY546BvXkrMNn-T71DlURV7UTsMsZYZxs7zyPYn8F7e-mEqDtT94b1KUCSsXLFRI0ondlCtkhz2rR0Ly4poaKDhC2AnHAMIXSe9TkpwT9gBJLYdo8LkV4oZWU4Jj-qwq5VM15PYGGQAtdqB6sdGZXe0h86ueuVHXgbCONnnJqWRvmbjZAkZ1Zr53MNg"
        },
        {
          title: "Prevent Attendance Fraud",
          description: "Biometric verification stops 'buddy punching' and lost revenue.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpi50vvihFBg5ahmE57OFy2pexq5XXazSjR0PwFGNiJZqG-p-eE-HS4DfhgUi6bbOycnFSeptpOVjv22Ag1GCgeB_L-N5wRHndXVw6_3Soe1Z8-WtxoxHwcYK7EUQ4ZYFeff2ls4zpi4IhUObv_N8nx0tu-SzufwTwuoYMnkZ2_OjlYmamQJ7s3mc9tB8v3msqzXoURlNdG_qlR2i9LwS43ChUPEZyXNjHvUsLj0acIFECobh2jAJt2_XAx1AGm4gl06D1O_X3CkhI"
        },
        {
          title: "Accurate Records",
          description: "Reliable, immutable data storage you can trust for compliance.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZXJHdBZ3AoOSiZhMdLckOYfSmu1Zg1oAQ_XYjCcxa7tobDH5qMAIwwoIZdZ2nei_ImYNLAV3TDNT6pudPl_wiLZndSmzb9066PuPg4dzNM-OmAcZiq3T7W_IbycXnx83_ss-zjkKQgG5d-qAk9bCIp2RvjhLH4fX2_iZFPVyD-1FG1pFbZuLJqkJXV4WenYiPZIcYFdYi0J4mcBwqylUKTSakYSqpppPwjgNkQk1n5TyapkuU-4Pl4hpUmHmeiKW1siOcNkIYbLT"
        },
        {
          title: "Easy Reporting",
          description: "Generate deep business insights with a single click.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCobn0doRHwriL6RkPxHJL5ye3_qje9vD1Z1FLZC1jv8ornDIoOMY5tpBqN_x8ZNMYJ1nOnZbJTmrmERstFngT9vWtaxDHcl8WbOoWG0adMUb6eWjU2rgy8EnHmP9DUCMgKuYHxQM_Tcd8X0SWBPLskm6IGgG7zaH7B88tp5dXnoDpVRQ2WsrB8C3kW6In0a4q6J_Y0cLiH5esvRds4j9qQ_rDKFpyH_A--NJh3_ELOviZIKvvK6p4dW3QGRo0VKejT4cfO3Y8qNVId"
        }
    ],
    techStack: ["PYTHON", "REACT", "NODE.JS", "PSQL", "AWS"],
    industries: [
      { name: "Offices", icon: Building2 },
      { name: "Schools", icon: GraduationCap },
      { name: "Hospitals", icon: Hospital },
      { name: "Factories", icon: Factory },
      { name: "Retail", icon: Store }
    ]
  },
  {
    slug: "ai-automation",
    title: "AI-Powered Automation for Smarter Businesses",
    subtitle: "Next-Gen MCP Integration",
    description: "Revolutionize your workflow with Vexel Systems' cutting-edge Model Context Protocol (MCP) and AI automation tools. Increase efficiency, eliminate bottlenecks, and scale your operations.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx6opG4rGcK2qHENG2IzgsSULn8sHM-jQ2c5-3tAhQyyhdTlBkIPoTwdwQeEGsZkpSHXMKhhlEeyANrHlC_0RbOC2uR-W5SMuzwHF5nxPCgbl0GTVkSqSTHhW7eeOLhavxaUqs5azzAO7NvI2l-2dfkuQy869EXilurb6Y9XzL4mukSE45QQZcA21F4i4WXKPi6fdcbjleaNTPB123RtXBFNJrk-qLae3w1CzGXSdkxSj5Y9YAdEXH6co5ip5kuO9zRPEA-A6toSF2",
    subServices: [
      {
        title: "AI Workflow Automation",
        description: "End-to-end process optimization using LLMs to orchestrate complex task sequences across your existing software stack.",
        icon: Workflow
      },
      {
        title: "MCP Automation",
        description: "Advanced Model Context Protocol integration allowing your AI agents to securely interact with private data and local tools.",
        icon: Cpu
      },
      {
        title: "Intelligent Chatbots",
        description: "24/7 customer engagement solutions that don't just reply, but actually resolve issues by executing backend actions.",
        icon: MessageSquare
      },
      {
        title: "AI Business Analytics",
        description: "Automated data-driven insights and forecasting that turn raw numbers into actionable strategic maneuvers.",
        icon: BarChart3
      },
      {
        title: "Intelligent Process Automation",
        description: "Cognitive automation combining RPA with AI to handle unstructured data like emails, images, and voice.",
        icon: Zap
      },
      {
        title: "Custom Agent Development",
        description: "Bespoke AI agents designed for your specific vertical needs and proprietary internal systems.",
        icon: Code2
      }
    ],
    benefits: [
      {
        title: "Reduce Manual Work",
        description: "Eliminate repetitive tasks by up to 85%."
      },
      {
        title: "Increase Productivity",
        description: "Enable your team to focus on high-value strategy."
      },
      {
        title: "Real-time Insights",
        description: "Instant visibility into your business metrics."
      },
      {
        title: "Cost Optimization",
        description: "Drastically lower operational overhead costs."
      }
    ],
    techStack: ["PYTHON", "OPENAI", "ANTHROPIC", "LANGCHAIN", "ZAPIER", "UI PATH"],
    industries: [
      { name: "Finance", icon: Landmark },
      { name: "Customer Support", icon: Headphones },
      { name: "Operations", icon: Factory },
      { name: "Marketing", icon: Megaphone },
      { name: "Human Resources", icon: Users }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing That Delivers Real Results",
    subtitle: "Growth Driven Marketing",
    description: "Empowering your brand with data-driven strategies and targeted growth solutions. We combine technology and creativity to scale your business.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Ih8_MDD7PnfxWw1-D-IDVi05SlpTlTo6W3meJdnuWuDl_5dZOLC58Je9oeSmxSygFs_pu9cVvHoElLIPDlXDx_EutdeE97EnzjPnAhADlDqHeoVlRXROhdifkGltTpBvVTkMgQIo67HPDF7LlftwPC_ZtTZ25n0jzUWNieuSKrzWMuy-I8bkn6pFwjhPtgsvV6HLxMBZcsUEWLSo2n7heDP-W0cYNss9RUPc8EC1Pu8GSsNH-SvYYhoDJx9AKuQOxsQEam9Honf4",
    subServices: [
        {
          title: "SEO",
          description: "Rank higher on search engines and drive consistent, organic traffic to your website with our technical optimization.",
          icon: Search
        },
        {
          title: "Social Media Marketing",
          description: "Engage your audience across all social platforms with viral content and strategic community management.",
          icon: Share2
        },
        {
          title: "Google Ads",
          description: "Immediate visibility on search results. We manage high-converting PPC campaigns that maximize every cent spent.",
          icon: MousePointerClick
        },
        {
          title: "Facebook & Instagram Ads",
          description: "Highly targeted paid strategies for maximum reach. Reach your ideal customer based on behavior and interest.",
          icon: Megaphone
        },
        {
          title: "Email Marketing",
          description: "Nurturing leads with value-driven campaigns. Build long-term relationships and increase customer lifetime value.",
          icon: Mail
        },
        {
          title: "Content Marketing",
          description: "Building brand authority through quality content. We create assets that position you as the leader in your industry.",
          icon: FileText
        }
    ],
    whyUs: {
        title: "Why Vexel Systems?",
        description: "We aren't just a marketing agency; we are a technology partner. We bridge the gap between complex data and commercial success.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Ih8_MDD7PnfxWw1-D-IDVi05SlpTlTo6W3meJdnuWuDl_5dZOLC58Je9oeSmxSygFs_pu9cVvHoElLIPDlXDx_EutdeE97EnzjPnAhADlDqHeoVlRXROhdifkGltTpBvVTkMgQIo67HPDF7LlftwPC_ZtTZ25n0jzUWNieuSKrzWMuy-I8bkn6pFwjhPtgsvV6HLxMBZcsUEWLSo2n7heDP-W0cYNss9RUPc8EC1Pu8GSsNH-SvYYhoDJx9AKuQOxsQEam9Honf4",
        points: [
            {
                title: "Data-Driven Strategies",
                description: "Every campaign is backed by hard analytics and performance tracking. We pivot based on what the numbers say.",
                icon: GraphChart
            },
            {
                title: "Targeted Growth",
                description: "We don't just find traffic; we find your future customers. Precision targeting ensures high conversion rates.",
                icon: Lightbulb
            },
            {
                title: "Rapid Scaling",
                description: "Built-in agility allows us to scale winning campaigns quickly, ensuring you capture market share fast.",
                icon: Zap
            }
        ]
    },
    benefits: [
        {
          title: "Brand Awareness",
          description: "Visible Everywhere",
          icon: TrendingUp
        },
        {
          title: "Lead Generation",
          description: "Consistent Pipeline",
          icon: UserPlus
        },
        {
          title: "Higher ROI",
          description: "Optimized Spend",
          icon: DollarSign
        },
        {
          title: "Business Growth",
          description: "Market Dominance",
          icon: Rocket
        }
    ],
    techStack: ["GOOGLE ADS", "FACEBOOK", "LINKEDIN", "HUBSPOT", "GA4"]
  },
  {
    slug: "email-marketing",
    title: "Convert Leads into Customers with Email Marketing",
    subtitle: "Email Marketing & Automation",
    description: "Automated campaigns that nurture and retain customers through strategic data-driven personalization.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyVIJc6YmydwzA-UXsf8U1U7mG7dfBZ8IKgC5f68vkuE0Lgdhd67SpQon1ZXZgtPxrsDpY7bOGJOU0sU-Ytvyt8f0ND3A-PZkBee6wUc0_iviznN7b_qF19Hk0laUpVmoWCnCZMrTpF90PT_s3vni1vnGag0Z2eN1Wi4CYq1tfT-noDK6iFaAdn0j8_WUqeqSlhLd1v4NdbbWMWeWoLI8OjIOZEt9-uZuPlJWVrrXuI4-JaCES9zVkrwwlgL6nb_KAlx-Ncma4dQeD",
    subServices: [
        {
          title: "Campaign Setup",
          description: "Strategic planning and flawless execution of your unique email initiatives.",
          icon: Mail
        },
        {
          title: "Automation Workflows",
          description: "Trigger-based sequences that work while you sleep, capturing every opportunity.",
          icon: Workflow
        },
        {
          title: "Lead Nurturing",
          description: "Building lasting relationships through intelligently personalized content.",
          icon: UsersRound
        },
        {
          title: "Newsletter Management",
          description: "Engaging your audience with consistent, high-value industry updates.",
          icon: Newspaper
        },
        {
          title: "Analytics & Optimization",
          description: "Data-driven insights and A/B testing to constantly improve your ROI.",
          icon: BarChart3
        }
    ],
    techStack: ["MAILCHIMP", "BREVO", "HUBSPOT"]
  },
  {
    slug: "industry-digital-solutions",
    title: "Technology Designed for Your Industry",
    subtitle: "Industry Digital Solutions",
    description: "Custom software solutions built for real-world operations. We bridge the gap between complex technology and industry-specific needs.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Z-A4uY18ndm1mCluNvYfHMuWS0NYIyPzGU8hzKnJVP8C3zQgui_OD1fIxddbNTl2Wf8W8omh4FBEJxYlXvutiRIPQQUpNEBV6AG_usk8xMe0CdgeRV4GsUIrjjS28OTAVcLmlPMmS4PRkSoG7IgI3p2Pfn-DSWYlN8AFlXCHRQ3wYvezpYTpBPNucxE3bvi-LMtqGh41a6t6_X60iN6bZdLbfgVbiUYv9zjbNE5X9Mqu8C3IlpRBsd9PjrUf8k3gKbyKVpNLbTsi",
    subServices: [
        {
          title: "Healthcare",
          description: "Digitalizing Patient Care",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA67Bn-Puo9jZy7CDj-rFMO9gpm5-2371FbIOxOQkrsPJ3FXlQ84WdC15Af3MoMW9rvpNmY6mJhoMG4f8EP4nqOFkSTwwgqpb36CKS3SuYA9BgYMOQnF_1QfufLMWMITVmFfuZqq8MaXvNkIKXTiyWfnjNJpVX7k7ceyAV6pwbVOaj0xzzG0BeQGIQrXqZnBdx_PRfeqHI9O1kxpgBomMS-c3SL57LjYdDhsYT1D-twd62gdlUjSFockho2S530kDIsNskzSj4xqpDD",
          icon: Activity,
          features: ["Next-gen EHR Systems", "Secure Telemedicine Portals", "Patient Experience Hubs"]
        },
        {
          title: "Education",
          description: "Modernizing the Classroom",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWluiuOszzDsrm3STHBEMsWvTZaeVt6ZfjnHQVcKPpX1sj_XRRgBkL1HRQQ-IdLZ8FvUrY2_TMzRxbYytpVgd6oSe2-MJ6b4cd7R-eSYJUU9a9QNZUjs3eX18motmH4ewajVjYh02sdqq6XreNEJ0q9Uc0zS7ZRAxKOO43pjNn0jBP4lPXwYM2LKSdrimdgzD5ZaNgugqmYXzBSqrepqhwluAjidLo-uYWIPqqLqKxbpfdci7WjUAVznBvAc4na7iF1US0oDKDLCj9",
          icon: GraduationCap,
          features: ["Custom LMS Platforms", "School Administration Tools", "Virtual Learning Environments"]
        },
        {
          title: "Agriculture",
          description: "Precision in the Field",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7tZL6ZwTmr2G_5Ko4BCGZ4xLWb8j9aImYNc88ZJFPNouOavyES11BjFEIA6NPITxN1M-kV6IHMHEWaiCGboeHJIOHe3Mlx1iXIaiSgtMppJ4LL0CEsIEGgKLhiIepw9o2CjIIvMfLrnXrm9cXaSD3bLCQ7DTI4ql9sKj1PrCdtoygKrouEJfwW8Eg_1U7RrWfyZ5twP8QD1lrDKENa11RogAbxY42-xeXPBWa5rxnXEHx54o-IgzpZbpt9TFNJ04yWy-ZJEljOHMe",
          icon: Tractor,
          features: ["IoT Sensor Integration", "Smart Supply Chain Tracking", "Yield Analytics Dashboards"]
        },
        {
          title: "Manufacturing",
          description: "Optimizing Production",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATGcoXpK1lqcPeUO0pfWst3ScL02sBFqrbwjo9OLspGmkXsOxkNamrqn5L5qkZoTAH6U5KoT-7v0Xwbe8mhrt6EdBljE3wwxRhY9G2VhHSG-PFqGjCIYpMq4fUGPWfSPGjJp7ahEcD_bPd2QtGDkTHgk11_AGzKyBr6Mu_Sx7N5Oh1JL0tDuFxlsKd-pF_kn8Hy5pIOEme3DJokIVRUV6MCaVMLXCpGyjsHICfjzEyIy3rza-d49fNFQquOukCu3eW27pX6BOmQt4K",
          icon: Factory,
          features: ["Industry 4.0 ERP Systems", "Predictive Maintenance AI", "Inventory Control Tech"]
        },
        {
          title: "NGOs & Government",
          description: "Impact at Scale",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArya-YUUBmyFyfxTOSLC8mQL4GWgCfKfL8_GQ4nCL7X-nOUClQ1sbXuTWc-G9KMZuHj2RE4VI0qNJJiGjWockOytleMTllEWPROmuugQ4w7ehyA_rU9wt58xx4jETMj3AYdWNihGS7ZICdHFDkqfnfvjFkmn5-JsyExp5skz9ywkHORE4QYp0eE3MBzG28sZWGYR7FwrwXOG1xInuBYUzeoIgpkNTo_yMdYXdzXBb_DeIVnTJu-9F0IZ_j6ouTi3tiB03lp6DIvmOL",
          icon: Landmark,
          features: ["Transparent Reporting Tools", "Grant Management Systems", "Citizen Portals & CRM"]
        }
    ],
    whyUs: {
        title: "Why Leaders Choose Vexel Systems",
        description: "We combine local market expertise with global engineering standards to deliver unmatched digital solutions.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Z-A4uY18ndm1mCluNvYfHMuWS0NYIyPzGU8hzKnJVP8C3zQgui_OD1fIxddbNTl2Wf8W8omh4FBEJxYlXvutiRIPQQUpNEBV6AG_usk8xMe0CdgeRV4GsUIrjjS28OTAVcLmlPMmS4PRkSoG7IgI3p2Pfn-DSWYlN8AFlXCHRQ3wYvezpYTpBPNucxE3bvi-LMtqGh41a6t6_X60iN6bZdLbfgVbiUYv9zjbNE5X9Mqu8C3IlpRBsd9PjrUf8k3gKbyKVpNLbTsi",
        points: [
            {
                title: "Local Expertise",
                description: "Deep understanding of regional market dynamics, local languages, and specific industry regulations.",
                icon: MapPin
            },
            {
                title: "Global Standards",
                description: "Adherence to international security protocols (HIPAA, GDPR) and world-class coding benchmarks.",
                icon: Globe
            },
            {
                title: "Scalable Design",
                description: "Future-proof architecture that grows seamlessly from small pilots to enterprise-wide deployments.",
                icon: TrendingUp
            }
        ]
    },
    caseStudies: [
      {
        title: "Automotive Plant Automation",
        category: "Manufacturing",
        stat: "40%",
        statDescription: "Increase in production efficiency",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3nO-93270HYhXunFD2KNeX3FOd4yV-ErS3229sJMEr0FzVTtqn2b3T3sGveOHfJ2Uh83l2beK_fHcI50OjBhzTvkhaGH6LNs2JezoIqt21Ilex7D9RhyVGmkOXCYoHmVRLuyF7I7nlJsOU-bjvb64anAAMSoXo9G59bq-gdOOvc7OGnJUBSdHpj-r26vUwlEE_4QZx2nSZdW0tjTgzQ4cvhqTV3l0AszTqZQa6Rkj0tLn1ZuV6_uCzU96gcFSfhrH9iLc3d0RSqRA"
      },
      {
        title: "Multi-State EHR Integration",
        category: "Healthcare",
        stat: "2min",
        statDescription: "Average patient record retrieval time",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1MwOy_xOF-5JF-Lf9CQhO0vMakd2OHEuYYYbvDuYoeipjttzlGUzkA-JNvZXJAHPiqXWjomRhgIZo_W6vlfVB0yFHCbe3e2xS3o74VsWTXgl9RK0Eyxjtz3a43IGFojiAihRVVMnacnTR_HS9J4ve9MJ8zhOg86Ix_3L_PLAnkPN0J36Jaby-jROcZUSNwwdhNQpVIUldXppqpDBq66FmKkhRT-G-_IafipvoUBKxNOb3kmQPhDxJGJZf1PmwnoE-xilzEJ7WkmY"
      }
    ],
    techStack: []
  },
  {
    slug: "iot-solutions",
    title: "Smart IoT Solutions for Connected Businesses",
    subtitle: "Connected Future",
    description: "Monitor, control, and automate your devices using intelligent IoT systems designed for scalability and security.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYS4J9jnSS-LzmsKY3yA_W2sHi9COhlNKvZMH9PfTAN6v9kojhxcwANwBcQjix-bWN12EuHieahEzT8MS14tQ2zZ-_lK9Jv2PsMqbh9jZBPikOVl_cLKvAKwlDFk8RyR9q3Zng4VseK656sf2AJRmpN66u5lAb7KumZ_9AHNm0NrGq4h1kQMA3N1NYICWtRLDKE1YmAZjPQu6gudDt42G_hK8dWGhb1DlHJQCJpHFTN29-hy2mYCFdt7VS1cPrgSuuJGzpxwZw5hIe",
    subServices: [
        {
          title: "Device Integration",
          description: "Connecting legacy hardware and modern sensors seamlessly.",
          icon: Settings
        },
        {
          title: "Sensor Systems",
          description: "End-to-end data collection and environmental monitoring.",
          icon: Radio
        },
        {
          title: "Monitoring Dashboards",
          description: "Real-time data visualization with intuitive user interfaces.",
          icon: LayoutDashboard
        },
        {
          title: "Real-time Analytics",
          description: "AI/ML powered insights to predict failures and optimize flows.",
          icon: TrendingUp
        },
        {
          title: "Cloud IoT Platforms",
          description: "Native AWS, Azure, and Google Cloud connectivity.",
          icon: Cloud
        }
    ],
    industries: [
        {
            name: "Smart Offices",
            description: "Automated lighting, climate, and occupancy tracking.",
            icon: Building2
        },
        {
            name: "Industrial Automation",
            description: "Predictive maintenance and production line monitoring.",
            icon: Factory
        },
        {
            name: "Smart Agriculture",
            description: "Soil moisture sensing and precision irrigation.",
            icon: Tractor
        },
        {
            name: "Smart Retail",
            description: "Inventory tracking and personalized customer flow.",
            icon: Store
        }
    ],
    techStack: ["ARDUINO", "RASPBERRY_PI", "MQTT", "AWS_IOT", "NODE_PYTHON"]
  },
  {
    slug: "it-consulting",
    title: "Transform Your Business with Smart IT Consulting",
    subtitle: "IT Consulting Expertise",
    description: "Strategic technology solutions tailored for business growth, efficiency, and future-proof digital transformation.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpi7fuoDGEljXy0sn-TGeuI8U-lxBia1--_-QAq5tFu01pZVBh6yq8r8ojTO8n1msjFl_WkT5VBD98G-AXrxJBwsm43jxLdmI0q-IOdHr2RXyTAgUtoqwmvopB4GPdWF75RK3lZhq1HYaJT0FVZ7G5YxAQJSoOVPAKpp22zU2cxuwjP-ud0KMmdys2htnsZSTzTsX31Un3EOCpxLsGXEzsfTmXXeDKTL_8JmGXxPkB-97n_UkrLVSXQCLeNQF5HayOPOn5mWocaMsR",
    subServices: [
        {
          title: "IT Strategy Planning",
          description: "Aligning technology investments with your long-term business goals for maximum ROI.",
          icon: TrendingUp
        },
        {
          title: "Digital Transformation",
          description: "Seamlessly integrating cloud, AI, and data solutions into your daily operations.",
          icon: Sparkles
        },
        {
          title: "System Modernization",
          description: "Upgrading legacy infrastructure for improved speed, scale, and modern efficiency.",
          icon: RefreshCw
        },
        {
          title: "Technology Audits",
          description: "Comprehensive security and performance analysis for your entire technology stack.",
          icon: Shield
        }
    ],
    process: [
        {
            title: "Initial Assessment",
            description: "We perform a deep-dive analysis of your current IT infrastructure and business challenges."
        },
        {
            title: "Strategic Roadmap",
            description: "Developing a phased implementation plan that prioritizes high-impact technological upgrades."
        },
        {
            title: "Seamless Implementation",
            description: "Our team manages the full execution, ensuring minimal disruption and immediate value."
        }
    ],
    testimonial: {
        quote: "Vexel Systems didn't just provide us with software; they completely reimagined our digital workflow. Our operational efficiency increased by 40% within the first six months.",
        author: "Sarah Jenkins",
        role: "CTO, NexaCorp Global"
    },
    techStack: []
  },
  {
    slug: "it-maintenance-support",
    title: "Reliable IT Support You Can Trust",
    subtitle: "IT Maintenance & Support",
    description: "24/7 monitoring, proactive updates, and expert technical support to keep your business-critical systems running at peak performance.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBB3413pbz_6DiPNQqQDtTUPb2WJM_tswUDpZSLXKQX-Bccuo4YDxePjfgEo7MwobONXYopRvJHALSJtFk8VZYuqI-HB29lMq7DGWttbOg-kt9uD6Ns0KTF3cOlTqzPfMejxvC8dYXJHGPsRMHxAGleB_KCAMV2h_dLH5NPxwjYl10Hz_5jl3IML18X9Wjk9mtr9e4LtM8L_t_20Ktor_Skiw9BdnP2SNnFSEBn1bs6iNY970YoWtX-xbl8pGC0nti6WszH2m3niO3",
    subServices: [
        {
          title: "Application Maintenance",
          description: "Consistent updates and feature enhancements to keep your applications current and competitive.",
          icon: LayoutGrid
        },
        {
          title: "Server Monitoring",
          description: "Proactive uptime tracking and resource management with 99.9% availability guarantees.",
          icon: Server
        },
        {
          title: "Bug Fixes",
          description: "Rapid resolution of technical glitches and critical issues with a dedicated incident response team.",
          icon: Bug
        },
        {
          title: "Performance Tuning",
          description: "Speed and efficiency tuning for legacy systems to reduce latency and improve user experience.",
          icon: Gauge
        }
    ],
    process: [
        {
            title: "Submit Ticket",
            description: "Reach out via portal, email, or Slack integrations instantly."
        },
        {
            title: "Expert Assignment",
            description: "A dedicated specialist reviews and prioritizes your request."
        },
        {
            title: "Fast Resolution",
            description: "Rapid development or server-side fixes applied in real-time."
        },
        {
            title: "Quality Assurance",
            description: "Final testing and verification before closing the ticket."
        }
    ],
    techStack: ["AWS", "AZURE", "DOCKER", "KUBERNETES", "LINUX", "PYTHON"]
  },
  {
    slug: "local-seo",
    title: "Get Found by Local Customers",
    subtitle: "Local SEO Services",
    description: "Dominate local search and drive more foot traffic with Vexel Systems' expert Google Business Optimization and strategic Local SEO.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5RIRRo87f_8jyeUeupbyJcJCeMmOaoqbu4O1VblMxIxHXxHZae4hFREskqs80BTtc0AR6d4WG5eZi02rD_NLVQhPi94M-PjjDSl8op7mah7r_SkzwuW6iN9_JrFpjkg89bUB77W7Ey1ggQHod4Ud0tFjSS24ULfwAmudB4WJb3LFps99qPsJg4J6D-HZ53692ZRqVYno2mnQfNw-nXodbk5TyS4HYvAd8-M9-thnZ_y6Kv_H4MPbZ3xihdItcqrFIhDh2jyrfYGmF",
    subServices: [
        {
          title: "Google Business Profile",
          description: "Full optimization of your GMB listing for maximum visibility in the Map Pack.",
          icon: Store
        },
        {
          title: "Local Citations",
          description: "Consistent NAP (Name, Address, Phone) data across all top web directories.",
          icon: FileText
        },
        {
          title: "Review Management",
          description: "Build customer trust with automated review collection and monitoring systems.",
          icon: Star
        },
        {
          title: "Local Keyword Strategy",
          description: "Target precise geo-located keywords to capture high-intent local searchers.",
          icon: Map
        }
    ],
    whyUs: {
        title: "Visualize Your Success",
        description: "This is what happens when you dominate the 'Local Pack'. We help you climb the rankings so you're the first choice for customers searching in your area.",
        image: "https://lh3.googleusercontent.com/PWDhHsDW_3fWJgP84b4h7p-1454556485/AB6AXuC40fIoBj2euWSyKwhGlBAbqeMhFG5W9KXQz_DADzIYAj6ueEjjKeGvnUPwknPjBAkzl9KW-ARONV_21ervVHrzJbdhn3dt5R2BiKKV2MNlRSP7NQNAs49o_vXMK-ss52md2Du3d6L0JlJiYdsDHt6MrWhKgQuyzh5w9OV5VrFJcFfkw46F2Br-U2Rz1A6wobt1gZGSxw_dlGxRRML7k3PFllWNFo5PbOhEOgN-iM2-TZUNRXF71XVe4Kzdte4VR-NSiRViW5hff2ir", // Placeholder or relevant SEO dashboard
        points: [
            {
                title: "Top 3 Map Ranking",
                description: "Guaranteed growth in local search visibility.",
                icon: MapPin
            },
            {
                title: "Optimized GMB Content",
                description: "High-quality imagery and posts to engage customers.",
                icon: Store
            },
            {
                title: "Direct Tracking",
                description: "Call & Website click tracking for measurable ROI.",
                icon: Search
            }
        ]
    },
    benefits: [
        {
            title: "Increased Store Visits",
            description: "76% of people who search nearby visit a business within a day.",
            icon: Users
        },
        {
            title: "Higher Trust",
            description: "Businesses with high rankings and positive reviews are perceived as more trustworthy.",
            icon: ShieldCheck
        },
        {
            title: "Mobile Search Dominance",
            description: "We ensure your business is the hero of mobile search results.",
            icon: Smartphone
        }
    ],
    techStack: ["GOOGLE_MAPS", "GOOGLE_ANALYTICS", "SEMRUSH", "AHREFS", "MOZ", "YEXT"]
  },
  {
    slug: "machine-learning-solutions",
    title: "Machine Learning Solutions That Drive Decisions",
    subtitle: "Next-Gen Intelligence",
    description: "Turn vast amounts of complex data into actionable insights using advanced ML models engineered for performance and scale.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA4U80GFDPNJBHKQ2ag1s_dPbCpJfrjHcu5kY7lqXjRuaBsnhEiF-cQrNFTIOmLV-ndQJMqQjdvYm73jpC1UBksUjmGZ3oGt8rFQQjLYSLM-M4j4ZIiIqlTWFftdM1c5vtcfyJGZlMgbOLazVs59LCas5v1FXENoMgzb4-OXGyUOwVR2QN8vMVrYkIbv9UqGHOY8zsNcBNhVzK61miULMwV5nre8yv4S4_w6WJfpOneeivS3zclyVdXvp-9_pfPrTze2EeZAQJiF-K",
    subServices: [
        {
          title: "Predictive Analytics",
          description: "Forecast future trends, customer behaviors, and market shifts with statistical accuracy.",
          icon: TrendingUp
        },
        {
          title: "Recommendation Systems",
          description: "Boost conversion rates by delivering hyper-personalized content and product experiences.",
          icon: Sparkles
        },
        {
          title: "Image & Video Analysis",
          description: "Automate visual inspections, object detection, and biometric security systems.",
          icon: Eye
        },
        {
          title: "NLP Solutions",
          description: "Sentiment analysis, chatbots, and automated documentation processing at scale.",
          icon: MessageSquare
        },
        {
          title: "Fraud Detection",
          description: "Protect your operations with real-time anomaly detection and risk scoring models.",
          icon: Shield
        }
    ],
    whyUs: {
        title: "Impact Analysis",
        description: "Case study: 240% ROI for Global FinTech Partner. We help you climb the rankings so you're the first choice for customers searching in your area.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_i5FiAkDzmb--HxxxyWZTe0ittzdV6CblDbXRF6FY0Cj-zqRJhST4OOjEx1gT0jL01yJ5ar3_SyPkgA7hsr_CR6MCnolAKZH98ddElJP_bzA6gBY1Jbj7SB3NrFzAWJx8yxq4zGGMPrRTNrE9Ulij01WLiJpxBoG4wIEM-BmubKKzBIJKw2e7GdVx6KjiHptpHV0Uipnl2GjAkF__Y02gT-cIRlfV_JtLJ0Auv4ZU3lyXPuZF0nxGDxFKnxDCRLiZzvpNdm95Hdck", 
        points: [
            {
                title: "Data-Driven Decisions",
                description: "Eliminate guesswork with real-time insights.",
                icon: Database
            },
            {
                title: "Improved Accuracy",
                description: "99.9% prediction reliability on core models.",
                icon: CheckCircle
            },
            {
                title: "Business Intelligence",
                description: "Uncover hidden operational patterns.",
                icon: BarChart3
            },
            {
                title: "Automation",
                description: "Reduce manual labor by up to 70%.",
                icon: Bot
            }
        ]
    },
    industries: [
        {
            name: "Healthcare",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfhn7FIM3RMKeHej6M4k52vqZGIqarXpAgY4AI_XGn1Jbwlf7s1RQHlQ7_Ln3HhQK7vFgvTnwlTlg5mOQ_4zLa2SEPbrDvNr-dlUK5dlSCsP25RPwUnnIMoON2Hgd2TZr8TFwQdVKuDRHJYKI0fmM9TNIlwNUg0XgRDvnEDqI5VgLBaf2c3KD-O6XMCBdOGpR9y_65esXZFy4uoDrVwPxdcL0qCEmYsKmKz3_8psoPMpV_0ZfDJ3lUMQ6xrH-Cg_lxK5UIkJEgUORN"
        },
        {
            name: "Retail",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0sMyiDVbMEJmzQl0KlgJq20cFu7hbEnOnOK1NYGx7HkYnv2BwiEPigjAxAGQBVbTgUvkCMiC-NXQuUgRpL-AafPILNFiWPPWxHoSi-7eS0nnr_6ooGthVlM88VBLHsuXsWii0dFPGYkKAJaxeunL7Ul3ecqqDMRjI2RdRqbtG8Lj3LXRfmHpzkBR7kQR9IJwjDKyL4VifYX4BD0RN83ZwUxrwnOvPj0W22LFs7bT3VNHMcCKQhJvmKASkpz2h6THsN3nG-iqihft9"
        },
        {
            name: "Finance",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdfQOyoMxYpu_ZSTzK3eBSWC1wGu6QOvffpLrlphW1xZDyosG2MATc57apNZPlHV9q2Dehf8r-FpZ-ntrE9i_dsrPY0NZLhHGoZQPHPeHlb-kzuMbzYYtH7xJ_9GySKUiAedu7MQBVd3Y5lax7VkoFXHcllym-Qn0E7RMJXY7V2DBlSp3AH80CcBCR7azHjiXlm_HLlVLl0A0lNsKsPTKnlcPWVr4_P34u5urY9iGWGJjkyx41Qpq1FcciFmjFB8ZVt5qw9VigVvGo"
        },
        {
            name: "Manufacturing",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO9r-sfvxZMIWlqh8atKPhcoGn19arjZojyUhq1mMZE-G8SQY_IXI64GirN9QpExlELBPrAIUE5tH80es_PRqGzXJJSXNkckD9W8E6n4g2DP4n7fnpl7TYH_sv6AhQrklRFEL0ebDSEL3ZWZPVrDtt9ttDGWKk4EVCLQTjiu8bbxayCrl4O0YG2XqW_dpOeqaAVeo-VH6FPI2YVKmv5m1rEJDpV42IruCu5HWCTeQxKaNmckO7W_LuhzZHTNAylNKfZo-pbNnz7Kh0"
        }
    ],
    techStack: ["PYTHON", "TENSORFLOW", "PYTORCH", "SCIKIT_LEARN", "OPENCV"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Apps That Power Your Business",
    subtitle: "Mobile App Development",
    description: "We develop intuitive, high-performance mobile applications for Android and iOS tailored to your unique business needs. From concept to deployment, we build tools that scale.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJpdBE3o6aXjjMqPUXT5hoYCDcVYZRNWHeEe_rSkfqw9bmjkkluA38qRJG0gJ-PqosKc5dvn-ACg2yPrQB-3eeCStLn9GSiTogfIZc5Zvxhc0sWdtPKKaayf2k8nwEcK8AhEzeKhG-5ZgFv1-v2mnPs9wApLdlmsxJC4R_OskOvxCjehGL2eZHNeBu5GaPhJkQ0pTFyFfMpzuDjOTSYldQ6ZDcXUDSdrAQaWXwQdZAuFVmQVjEgA3ZT1tWfZZNO6Xw2uuVtJSmGJUS",
    subServices: [
        {
          title: "UI/UX Design",
          description: "User-centric interfaces designed for seamless navigation and visual impact across all screen sizes.",
          icon: Palette
        },
        {
          title: "Native Development",
          description: "High-performance apps built specifically for iOS or Android to leverage device-specific hardware.",
          icon: Code2
        },
        {
          title: "Cross-Platform",
          description: "Single codebase solutions with Flutter or React Native that work perfectly on both platforms.",
          icon: MonitorSmartphone
        },
        {
          title: "Maintenance",
          description: "Post-launch support, security updates, and performance optimization to keep your app running smoothly.",
          icon: Settings
        }
    ],
    benefits: [
        {
            title: "High Performance",
            description: "Optimized for speed and fluid animations.",
            icon: Zap
        },
        {
            title: "Secure Auth",
            description: "Enterprise-grade security and authentication protocols.",
            icon: Lock
        },
        {
            title: "Cloud Integration",
            description: "Seamless syncing with AWS, Azure, or Firebase.",
            icon: CloudCog
        },
        {
            title: "API Connectivity",
            description: "Robust integration with any external REST/GraphQL APIs.",
            icon: Webhook
        }
    ],
    process: [
        {
            title: "Idea Validation",
            description: "Analysis & strategy"
        },
        {
            title: "Design",
            description: "Prototyping & UX"
        },
        {
            title: "Development",
            description: "Sprints & coding"
        },
        {
            title: "Testing",
            description: "QA & Beta testing"
        },
        {
            title: "Deployment",
            description: "App Store release"
        }
    ],
    techStack: ["SWIFT", "KOTLIN", "FLUTTER", "REACT_NATIVE", "FIREBASE"]
  },
  {
    slug: "qa-testing",
    title: "Deliver Bug-Free Software with Professional Testing",
    subtitle: "QA & Testing",
    description: "Ensure performance, security, and reliability through our comprehensive QA methodologies. We catch what others miss.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz6MbpM7nwhfBuUADb83QWVrJEkJkOWu2A7GZam6MpGmhJEhTOvtucQ1CN67SBi0n44apc42zXnqsaC29dUoyZVVmSN4iyqO785ijwkp4k1zs-mgUtlPNQ-GhJ0BAFoC34F_q9SdgLPJAlW-pQgJCVpqNbnUP4aZONQJlecO5UgX_XzvonmD2WjcnlvWEmiC8q6hQc6iZIN-fPQ32kNPObpEtrQnYmSU2wBzGrUD3EXRfnU1z6gqCf41bXS3l6vWEfbyTo-w_5xmTf",
    subServices: [
        {
          title: "Manual Testing",
          description: "Human-centric UX and exploratory testing to ensure your software feels as good as it looks.",
          icon: MousePointerClick
        },
        {
          title: "Automated Testing",
          description: "Speed and efficiency for CI/CD pipelines using industry-standard automation frameworks.",
          icon: Terminal
        },
        {
          title: "Performance Testing",
          description: "Stress and load management to ensure stability and responsiveness under peak traffic.",
          icon: Zap
        },
        {
          title: "Security Testing",
          description: "Comprehensive vulnerability and penetration checks to protect your data and reputation.",
          icon: ShieldCheck
        }
    ],
    benefits: [
        {
            title: "Enhanced UX",
            description: "Create frictionless experiences that users love and recommend.",
            icon: Laugh
        },
        {
            title: "Reduced Costs",
            description: "Fixing bugs early is 10x cheaper than post-release patching.",
            icon: PiggyBank
        },
        {
            title: "Faster Launch",
            description: "Predictable release cycles with automated regression testing.",
            icon: Rocket
        },
        {
            title: "Trust & Security",
            description: "Build a reputation for rock-solid, secure enterprise software.",
            icon: Shield
        }
    ],
    techStack: ["SELENIUM", "POSTMAN", "JMETER", "APPIUM"]
  },
  {
    slug: "seo-services",
    title: "Rank Higher. Get More Traffic. Grow Your Business.",
    subtitle: "SEO Services",
    description: "Data-driven SEO strategies tailored for Vexel Systems clients to dominate search results and crush the competition.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuYYtUwmlSwv0f_3PfljJO3Zzj3l-dHaJJpWj44j2XO-8_ToKOhOzV5omjo9pmi0FApJ25HZ8FP48Olo6M-_FnReZhZGwuO-4xktZiZ6aq3eruk8hu8bxheatTJFIx6o0wh7sNZEgId-Lo3qGLSWfRvRly5roPegHoyMR9UJt7rMA1ghJlgG8sy_Qf5kK4FQZ50OjNydquICQ0DPxp7AKEwYTV9n2po31505-ZhtN9l3d33MmnYlIvmLofQiF7pbyKHn5_0_vy6dRM",
    subServices: [
        {
          title: "Keyword Research",
          description: "Target high-value, high-intent terms that your customers are actually searching for.",
          icon: Search
        },
        {
          title: "On-page SEO",
          description: "Comprehensive optimization of your site's structure, meta data, and internal linking.",
          icon: Globe
        },
        {
          title: "Technical SEO",
          description: "Fixing crawl errors, improving page speed, and ensuring a healthy site architecture.",
          icon: Settings2
        },
        {
          title: "Local SEO",
          description: "Dominate local search results and attract more customers in your specific geographic area.",
          icon: MapPin
        },
        {
          title: "Content Optimization",
          description: "Creating and optimizing engaging, high-quality copy that ranks and converts.",
          icon: FileText
        },
        {
          title: "Link Building",
          description: "Strategic authority building through high-quality, relevant backlink acquisition.",
          icon: LinkIcon
        }
    ],
    benefits: [
        {
            title: "Higher Google Rankings",
            description: "Climb to the first page for keywords that drive revenue, not just clicks.",
            icon: TrendingUp
        },
        {
            title: "Increased Organic Traffic",
            description: "Attract a steady stream of qualified visitors who are ready to purchase.",
            icon: Users
        },
        {
            title: "More Leads & Sales",
            description: "Turn search visibility into tangible business growth and loyal customers.",
            icon: PieChart
        }
    ],
    whyUs: {
        title: "Sustainable Growth",
        description: "94% First Page Results. We don't just chase vanity metrics. We focus on the data points that directly impact your bottom line.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0pGSnBe9fiUUS_oiaiEBeBybf6aBGtUJLhTpOO-9NSLj1Ef0tSiJ_V8foJkG_aviuH4KVSKwESWP_UzHRsWzB22ogHnoZlI9qF4kpx6UZ9mSyX0TPXTLk-FhiCnb5tGiZX6MlvDdkQ7jSlX7opZBLTJlD5ffLKGHH-ADc8b5jqy1xYtIvMxzuUVL3g6kqHWa6c70MKElMZEREP12QuYiQ1ohGn_qldBfRO3tFQbI7ybNfBrDyG5Pw6rHzXYDHy069Jg62nwQVig7v",
        points: [
            {
                title: "Google My Business",
                description: "Setup & Optimization",
                icon: MapPin
            },
            {
                title: "Local Targeting",
                description: "City/Region Specific Keywords",
                icon: Map
            },
            {
                title: "Citation Management",
                description: "Consistent NAP across directories",
                icon: List
            }
        ]
    },
    techStack: ["GOOGLE_ANALYTICS", "SEARCH_CONSOLE", "AHREFS", "SEMRUSH"]
  },
  {
    slug: "social-media-marketing",
    title: "Grow Your Brand on Social Media",
    subtitle: "Social Media Marketing",
    description: "Engage your audience and turn followers into customers with our expert digital marketing solutions. Data-driven, ROI-focused.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3FWPfo26U1ayEPkO64LQVIJwc09sCrQMJ-jyRbPyPSuQNslWf_D4Rn3rlR3PpLUhTEbGtfX1gQ2ykBrvSDG_DvoYc16X_eVdJZrrwBlTzXdwAHS9-PZO3h2IQXzNj8hOLZ1mXPs1vU4F0rr7FaS3AmZFi27muJsMposbLAXrcfFx6D-KskQV7rO53RhOKrzuoHCMG5pPGuAU8iBLXVFgFNIad7Lo6KXZG41YPqzmYyESRmI1E19RmAuaQ5hZT1SejPprIFnLE-HJw",
    subServices: [
        {
          title: "Account Setup & Optimization",
          description: "Perfectly aligned profiles that reflect your brand identity and utilize platform-specific SEO best practices.",
          icon: Settings
        },
        {
          title: "Content Creation",
          description: "Stunning visuals, high-conversion copy, and viral-ready video content designed to stop the scroll.",
          icon: Video
        },
        {
          title: "Post Scheduling",
          description: "Strategic publishing at peak audience activity times to maximize reach and engagement consistency.",
          icon: Calendar
        },
        {
          title: "Audience Engagement",
          description: "Proactive community management, comment replies, and lead nurturing to build brand loyalty.",
          icon: MessageCircle
        },
        {
          title: "Paid Social Ads",
          description: "Hyper-targeted ad campaigns with constant A/B testing to ensure maximum ROI on every dollar spent.",
          icon: Click
        }
    ],
    benefits: [
        {
            title: "ROI-Focused Strategy",
            description: "We don't just chase likes; we focus on conversions, sales, and sustainable brand growth.",
            icon: TrendingUp
        },
        {
            title: "Data-Driven Campaigns",
            description: "Every post and ad is backed by real-time analytics to ensure optimal performance.",
            icon: BarChart3
        },
        {
            title: "Certified Experts",
            description: "A team of platform-certified professionals staying ahead of every algorithm change.",
            icon: Award
        }
    ],
    process: [
        {
            title: "Strategy",
            description: "Deep audit and competitor roadmap development."
        },
        {
            title: "Content",
            description: "Production of high-impact creative assets."
        },
        {
            title: "Execution",
            description: "Precise scheduling and active management."
        },
        {
            title: "Analysis",
            description: "Review, iterate, and optimize for growth."
        }
    ],
    techStack: ["FACEBOOK", "INSTAGRAM", "LINKEDIN", "TWITTER", "TIKTOK"]
  },
  {
    slug: "software-solutions",
    title: "Our Solutions: Built for Growth, Scaled for Excellence",
    subtitle: "Software Solutions",
    description: "From advanced retail point-of-sale systems to complex enterprise ERPs, we deliver the technology that powers modern businesses.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCijaeS4VmoWDggyjCumw4VKPZMqd60HrrHbXHVzwOl7uhGxBOgVAjkeCRCLr44AF4EeIZA_SIkVxsn_Xg4z5qMnw3TttsVMqdY5Z1Celm9M8cLj-QIPL5UsRng53cz3iBeFiDCP1SRbEG6-XwGBechpg2fH2HDC4bKFAZ4hHUyg-1FjotUpaUQF6BHeOEub41OD6SJPPn5An9NaCmYDlpMlQmUnOmnCVv1c-NW-2O47GeX8xbbtoVYmXrhvgdURmCgiecBxj9f2Ty0",
    subServices: [
        {
          title: "Vexel Retail POS",
          description: "A high-performance retail management engine designed for speed and reliability. Whether you're a single boutique or a national chain, Vexel POS scales with you.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCijaeS4VmoWDggyjCumw4VKPZMqd60HrrHbXHVzwOl7uhGxBOgVAjkeCRCLr44AF4EeIZA_SIkVxsn_Xg4z5qMnw3TttsVMqdY5Z1Celm9M8cLj-QIPL5UsRng53cz3iBeFiDCP1SRbEG6-XwGBechpg2fH2HDC4bKFAZ4hHUyg-1FjotUpaUQF6BHeOEub41OD6SJPPn5An9NaCmYDlpMlQmUnOmnCVv1c-NW-2O47GeX8xbbtoVYmXrhvgdURmCgiecBxj9f2Ty0",
          icon: PointOfSale,
          features: ["Multi-terminal syncing", "Inventory alerts", "Loyalty programs", "Offline mode support"]
        },
        {
          title: "Nexus Business ERP",
          description: "The backbone of your enterprise. Integrate finance, HR, supply chain, and CRM into one unified platform with AI-driven insights.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB33SjRy2wFuNsYBMJg3RjvsDl7U5l9X2xK8A9-SY9jlO69Rpn9Oi-tH_XNECr8_CropyRr2RrAsuLfPQMHXNBDk1lrarmsmjrSFRWiRl8sxTjagu_3xfOFFqDZtqoqr_fU7ZtspdS4cqEP-4iYFjd6ipz9YQIjnQUSX-716Ls8G4e9xuSlrWzfb1kpTMrcwMYIDOAzJGwujVtIGTWH0b9EvoDyOoOwadkRnUi6-_quv94RZIz8EkjRwqeacb1qboqwQiqZT5fL1ngv",
          icon: CorporateFare,
          features: ["Automated Accounting", "HR & Payroll engine", "Supply Chain Tracker", "Custom KPI dashboards"]
        },
        {
            title: "Custom App Development",
            description: "Mobile and web applications built from scratch using modern frameworks like React and Flutter.",
            icon: Code2
        },
        {
            title: "Cloud Transformation",
            description: "Move your legacy infrastructure to AWS or Azure with zero downtime and optimized operational costs.",
            icon: CloudSync
        },
        {
            title: "SaaS Product Design",
            description: "We partner with founders to design and build scalable Software-as-a-Service platforms for global users.",
            icon: Hub
        }
    ],
    benefits: [
        {
            title: "Efficiency Gain",
            description: "Average 70% increase in operational efficiency.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC00fIoBj2euWSyKwhGlBAbqeMhFG5W9KXQz_DADzIYAj6ueEjjKeGvnUPwknPjBAkzl9KW-ARONV_21ervVHrzJbdhn3dt5R2BiKKV2MNlRSP7NQNAs49o_vXMK-ss52md2Du3d6L0JlJiYdsDHt6MrWhKgQuyzh5w9OV5VrFJcFfkw46F2Br-U2Rz1A6wobt1gZGSxw_dlGxRRML7k3PFllWNFo5PbOhEOgN-iM2-TZUNRXF71XVe4Kzdte4VR-NSiRViW5hff2ir"
        }
    ],
    techStack: ["REACT", "FLUTTER", "AWS", "AZURE", "TYPESCRIPT", "NODE.JS"]
  },
  {
    slug: "cybersecurity-solutions",
    title: "Protect Your Digital Assets with Advanced Cybersecurity",
    subtitle: "Next-Gen Threat Mitigation",
    description: "Secure applications, servers, and data from modern threats. Vexel provides military-grade defense for the evolving digital landscape.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJE_H7y0WJrzPVuQoemAKrPonaWnW7y6bPUmqxODiXogCPdkKrfEbMYWZrH_vTfVrJST-FkY9i-6_l-dJ3swRmXNMeOJUWeLBcY_Gd5P1Q3-jtsb8bbQyq6MfVVWG3fXS0Wyl2MSt5Pi7nWpOKYqgp8SutFnVcmRIuFxcbli6dzgM9tEwWoCTaASeiTT6KCWb62k2ZANe_qM-tfOPXzqwxflGq-z-yQegk5p32k8Hgt0YW5TmH3DF2_DDd4Hjg7FQKwG4QRumMaMdA",
    subServices: [
        {
          title: "Application Security Testing",
          description: "Rigorous penetration testing and automated scanning to identify and mitigate risks in your proprietary code.",
          icon: Shield
        },
        {
          title: "Network Security",
          description: "Fortify your infrastructure perimeter with managed firewalls, IDS/IPS, and secure architecture design.",
          icon: Globe
        },
        {
          title: "Data Encryption",
          description: "End-to-end military-grade protection for sensitive data at rest and in transit across all systems.",
          icon: Lock
        },
        {
          title: "Vulnerability Assessment",
          description: "Continuous real-time scanning and threat intelligence to stay ahead of emerging zero-day vulnerabilities.",
          icon: Search
        },
        {
          title: "Security Audits",
          description: "Comprehensive compliance mapping and deep-dive risk analysis for regulatory requirements.",
          icon: ScanSearch
        },
        {
          title: "Custom Solutions",
          description: "Need a tailored security framework? Contact our experts.",
          icon: PlusCircle
        }
    ],
    certifications: [
        { title: "ISO 27001", icon: BadgeCheck },
        { title: "SOC2 TYPE II", icon: ShieldLock },
        { title: "HIPAA", icon: HeartPulse },
        { title: "PCI DSS", icon: CreditCard },
        { title: "GDPR", icon: Gavel }
    ],
    industries: [
        {
            name: "Finance",
            description: "Strict compliance and fraud prevention for banking and fintech leaders.",
            icon: CorporateFare,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyxQZBJqnEv9wGQwhYkGx3u2coSZ5M9MmMdDc7jbONOAaWnGbsJkwOi3SfTbomHf1sb9BG9edPo3hbChZk8Pl91_DRqEDqD7A2Wg2bh6B_yskXslIi5MbKJbsItF1EoaGNmIAPyHOyE4AmroNGWsZIKPqJJTdBHO9G0nvKAGKgwVXSy4BpU6JK6nD4MM5F8VbLdOFzvSzDrds0ajNg19a6MenHOBF1tH7oMICb0mYVR3MC3RKW4SthPkFhzXNixZTLLyfWgXK8xWQQ"
        },
        {
            name: "Healthcare",
            description: "HIPAA-aligned data privacy solutions for clinics and health systems.",
            icon: HeartPulse,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsjamKLWuSjZQd6v6FCFuC5BsDzXLEnGICYs_PCH7BWy12dLzT55GA0ZXNNoVeQ0uDTCgxeg82mtFrDSmeIX4BBUEUZgu-6PeecAebPxLeKLRcq8feFFDaCBKWFRa6nlq-HTSmtEzfmU6WbeOPk1Q0Wemw5aQw_qXiBO-L6Fe7wXZ87UqEKT2LG-RLjR0veFLIioIAZZNJ6bdd6EpIQRSS50GX2KlLgInk6e8sRl2t5XVPdcWPfqs-RIYJhQJudx-E7PhgDtqbE-Nn"
        },
        {
            name: "E-commerce",
            description: "Secure PCI-DSS payment gateways and global supply chain protection.",
            icon: Store,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwcKOxd-ljvHmEMc53ebiHAWNcaq6qWKLGq1t2RgzYsZ4dX95jYKHZFDGl3bPvBeqKh71K9cGuYrNpsIZUswAeiDG_UFT98VGIobRGZ-u_rVJL6XS2mLIATuA_25TD9ymAfF87KFQD5Hp5sGWNZGSzUZ6F6R4TzY8JMUVREeWPaLD56T0bzD6W5g08JTZ068ImVelyu9JBDwxBcHQYb4IGrrd2LLojR-2XdgmPL2f_giDl-qFb8C8L1UbH_7q44Zcv1BrMTk-qlzBj"
        },
        {
            name: "Enterprises",
            description: "Scalable threat mitigation for global firms and government agencies.",
            icon: Building2,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRrIg1yuMIntKKjHDblyHIgV9yHzli4ALSXn3etMbQx_Wc8RdDlWMAMFVZWgng_9d9d-3XcydX0bat3Jujv7QKEUCg6_07O_BD-WIiIBooGgRs6MzFMrpTMQI1zxL7GrVH4oQ7O3oaChAmAYkW3-jC0Kny4jJ2v-8PwXFwaABRIeSaeXwyT5fVoJCLx_ZlcB-2vG9AIqKtuBGQkg9yXYx4_JG6Ahz7MopChMOn9_UTn43yvJ7ipEk0fZi6vOV3mqC_ZWQ8Fu4f7i0W"
        }
    ],
    techStack: []
  },
  {
    slug: "web-development",
    title: "Professional Web Development That Grows Your Business",
    subtitle: "Next-Gen Web Solutions",
    description: "High-performance, scalable web solutions tailored for your brand's success. We turn complex ideas into digital realities.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuALk4v_UBi9vG_uNRt8xu6ynVzXzLTnfQRe2dAwFXxXdPg0ac97LQqicrG55o_XyEm0rgUWZiu2Vf5qJmJwrDS0Vnb1Im3wK01LOeTzmIrWfq-0xKNSUGHtzLs52OdHJGn4-rI75YjmFJIqPMCAm_MHjPk8ckmSAcQirV0y5BH_Y4p45fz7jkqO0Ki_eGDAaexHZWcL3JGM4BRYJM5_adCC4kLizWp5UzAOd6oJVpHIr4D-KU714njcoKnzJu5jUIjEbN9ZkYAXsraE",
    subServices: [
        {
          title: "Custom Websites",
          description: "Performance-focused brand presence built with cutting-edge front-end technologies.",
          icon: Languages
        },
        {
          title: "E-Commerce",
          description: "Conversion-ready online stores with seamless payment integrations and UX flow.",
          icon: ShoppingCart
        },
        {
          title: "Web Apps",
          description: "Scalable logic and cloud infrastructure for complex business requirements.",
          icon: DataObject
        },
        {
          title: "CMS",
          description: "Customized content management systems giving you full control over your media.",
          icon: EditDocument
        }
    ],
    process: [
        { title: "Analysis", description: "Defining goals and technical requirements." },
        { title: "Design", description: "UI/UX prototyping and system architecture." },
        { title: "Development", description: "Clean code and robust implementation." },
        { title: "Testing", description: "QA, security audits, and performance optimization." },
        { title: "Support", description: "Deployment and 24/7 technical maintenance." }
    ],
    techStack: ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "TAILWIND CSS", "POSTGRESQL", "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "TAILWIND CSS", "POSTGRESQL"], // Doubled for marquee
    faq: [
        {
            question: "How long does a typical project take?",
            answer: "A standard custom website usually takes between 4 to 8 weeks from initial analysis to launch. Complex web applications or large e-commerce platforms may take 12+ weeks depending on feature requirements."
        },
        {
            question: "What is the average cost of development?",
            answer: "Pricing is project-dependent. Basic informational sites start at $3,500, while custom web applications and specialized e-commerce platforms typically range from $10,000 to $50,000+. We provide fixed-price quotes after initial scoping."
        },
        {
            question: "Do you provide hosting and maintenance?",
            answer: "Yes, we offer premium managed hosting on AWS and Google Cloud infrastructure. Our maintenance packages include 24/7 monitoring, regular security updates, and performance optimization."
        }
    ]
  },
  {
    slug: "infrastructure-integrations",
    title: "A to Z Digital Infrastructure & Integrations",
    subtitle: "Complete Digital Foundation",
    description: "Your complete A to Z digital ecosystem. We handle everything from domain registration and hosting to complex API integrations, ensuring your business runs on a solid, connected foundation.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYvtiuz2smY6tfKA2fh9xGPOIRqoIuIKlUF7wJVGJhFoE_76M8SX59Zf-adFgvpoZ1HxuU4u4pR-lnvbrLdatQfTS_hNPCjIBh4Kx-EekkCIEmcQdFAPU33Hf46aIyYoYTxjPriPs1GbpRcidkXt6QP2Ne6qmMiq9QRTetb9C3id_Jf9ocKTt7gMvusiQo0UEONkNMayzdQ1zglbb8VA4vo105gsL9BYzo1ctoTUn65_ACjpBcW0alTpzVSOcd6cROhDF2aSaudnjF", 
    subServices: [
        {
          title: "Domain & Hosting",
          description: "Secure domain registration and high-performance business hosting setups.",
          icon: Globe
        },
        {
            title: "SMS & Communication",
            description: "Instant SMS alerts, OTPs, and WhatsApp Business API integrations.",
            icon: MessageCircle
        },
        {
            title: "Payment Gateways",
            description: "Secure local and international payment processing (Stripe, PayHere, etc).",
            icon: DollarSign
        },
        {
            title: "Server Management",
            description: "VPS config, Linux administration, and 24/7 server monitoring.",
            icon: Server
        },
        {
            title: "API Connections",
            description: "Connecting your software to 3rd party tools like CRMs, ERPs, and more.",
            icon: Workflow
        }
    ],
    benefits: [
        {
            title: "One-Stop Solution",
            description: "No need to juggle 5 different vendors. We handle your entire tech stack."
        },
        {
            title: "Maximum Uptime",
            description: "Enterprise-grade infrastructure ensures your business is always online."
        },
        {
            title: "Seamless Flow",
            description: "Integrated systems mean data flows automatically between your tools."
        }
    ],
    techStack: ["LINUX", "AWS", "TWILIO", "STRIPE", "WHATSAPP API", "NGINX"]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}
