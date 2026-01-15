"use client";

import React, { useState } from 'react';
import { Palette, Settings, Cloud, Code2, Database, Shield, Brain, Smartphone } from 'lucide-react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiMui, SiFigma, SiCanva,
  SiNodedotjs, SiPython, SiPhp, 
  SiExpress, SiNestjs, SiFlask, SiFastapi, SiLaravel, SiSpringboot,
  SiGraphql, SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, 
  SiOpenai, SiLangchain, SiHuggingface, SiAnthropic,
  SiOpencv, SiSpacy, SiPandas, SiNumpy, SiJupyter,
  SiFlutter, SiExpo, SiIonic, SiSwift, SiKotlin,
  SiFirebase, SiSupabase, 
  SiMysql, SiPostgresql, SiOracle, SiMongodb, SiRedis, SiElasticsearch,
  SiVercel, SiGooglecloud, 
  SiDocker, SiKubernetes, SiGithubactions, SiGitlab,
  SiJest, SiPytest, SiSwagger, SiNotion,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const techStackCategories = [
  { id: 'frontend', name: 'Frontend & UI', icon: <Palette className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-500' },
  { id: 'backend', name: 'Backend & API', icon: <Settings className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-500' },
  { id: 'ai_ml', name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" />, color: 'bg-fuchsia-500/10 text-fuchsia-500' },
  { id: 'mobile', name: 'Mobile Development', icon: <Smartphone className="w-6 h-6" />, color: 'bg-cyan-500/10 text-cyan-500' },
  { id: 'database', name: 'Database & Storage', icon: <Database className="w-6 h-6" />, color: 'bg-orange-500/10 text-orange-500' },
  { id: 'devops', name: 'Cloud & DevOps', icon: <Cloud className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-500' },
  { id: 'qa_design', name: 'QA & Design', icon: <Shield className="w-6 h-6" />, color: 'bg-red-500/10 text-red-500' }
];

const techItems = {
  frontend: [
    { 
      name: "Core Languages", 
      level: "Expert", 
      items: [
        { name: "HTML5", desc: "Page structure", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", desc: "Styling & layouts", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript (ES6+)", desc: "Logic & interactivity", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", desc: "Type-safe development", icon: <SiTypescript className="text-blue-500" /> }
      ]
    },
    { 
      name: "Frameworks", 
      level: "Primary", 
      items: [
        { name: "React.js", desc: "Component-based UI", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", desc: "SSR & SEO Optimized", icon: <SiNextdotjs className="text-foreground" /> }
      ]
    },
    { 
      name: "Styling Tech", 
      level: "Creative", 
      items: [
        { name: "Tailwind CSS", desc: "Utility-first CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "CSS Modules", desc: "Scoped styling", icon: <SiCss3 className="text-blue-500" /> },
        { name: "Material UI", desc: "System design components", icon: <SiMui className="text-blue-600" /> }
      ]
    },
    { 
      name: "UI/UX Tools", 
      level: "Design", 
      items: [
        { name: "Figma", desc: "Interface design", icon: <SiFigma className="text-pink-500" /> },
        { name: "Canva", desc: "Visual storytelling", icon: <SiCanva className="text-cyan-600" /> }
      ]
    }
  ],
  backend: [
    { 
      name: "Server Languages", 
      level: "Polyglot", 
      items: [
        { name: "Node.js", desc: "Scalable JS runtime", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Python", desc: "Data & logic", icon: <SiPython className="text-blue-500" /> },
        { name: "Java", desc: "Enterprise scale", icon: <FaJava className="text-red-500" /> },
        { name: "PHP", desc: "Web foundation", icon: <SiPhp className="text-indigo-500" /> }
      ]
    },
    { 
      name: "Frameworks", 
      level: "Robust", 
      items: [
        { name: "Express.js", desc: "Fast & unopinionated", icon: <SiExpress className="text-foreground" /> },
        { name: "NestJS", desc: "Modular architecture", icon: <SiNestjs className="text-red-600" /> },
        { name: "Flask", desc: "Lightweight & flexible", icon: <SiFlask className="text-foreground" /> },
        { name: "FastAPI", desc: "High performance Async", icon: <SiFastapi className="text-teal-600" /> },
        { name: "Laravel", desc: "Elegant PHP framework", icon: <SiLaravel className="text-red-500" /> },
        { name: "Spring Boot", desc: "Microservices ready", icon: <SiSpringboot className="text-green-500" /> }
      ]
    },
    { 
      name: "API Types", 
      level: "Scale", 
      items: [
        { name: "REST API", desc: "Distributed systems", icon: <Code2 className="w-4 h-4 text-orange-500" /> },
        { name: "GraphQL", desc: "Flexible data fetching", icon: <SiGraphql className="text-pink-600" /> },
        { name: "WebSockets", desc: "Real-time sync", icon: <Cloud className="w-4 h-4 text-blue-400" /> }
      ]
    }
  ],
  ai_ml: [
    { 
      name: "AI & Machine Learning", 
      level: "Advanced", 
      items: [
        { name: "TensorFlow", desc: "Deep learning models", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "PyTorch", desc: "Research & production AI", icon: <SiPytorch className="text-red-500" /> },
        { name: "Scikit-learn", desc: "Classical ML algorithms", icon: <SiScikitlearn className="text-orange-600" /> },
        { name: "Keras", desc: "Neural network API", icon: <SiKeras className="text-red-600" /> }
      ]
    },
    { 
      name: "AI Tools & Services", 
      level: "Integration", 
      items: [
        { name: "OpenAI API", desc: "GPT integration", icon: <SiOpenai className="text-green-600" /> },
        { name: "LangChain", desc: "LLM orchestration", icon: <SiLangchain className="text-green-700" /> },
        { name: "Hugging Face", desc: "Model deployment", icon: <SiHuggingface className="text-yellow-500" /> },
        { name: "Anthropic Claude", desc: "AI assistant API", icon: <SiAnthropic className="text-purple-500" /> }
      ]
    },
    { 
      name: "Computer Vision & NLP", 
      level: "Specialized", 
      items: [
        { name: "OpenCV", desc: "Image processing", icon: <SiOpencv className="text-red-500" /> },
        { name: "YOLO", desc: "Object detection", icon: <EyeIcon className="text-blue-500" /> },
        { name: "spaCy", desc: "NLP processing", icon: <SiSpacy className="text-blue-400" /> },
        { name: "NLTK", desc: "Text analysis", icon: <Code2 className="w-4 h-4 text-green-500" /> }
      ]
    },
    { 
      name: "Data Science", 
      level: "Analytics", 
      items: [
        { name: "Pandas", desc: "Data manipulation", icon: <SiPandas className="text-purple-900 dark:text-purple-400" /> },
        { name: "NumPy", desc: "Numerical computing", icon: <SiNumpy className="text-blue-400" /> },
        { name: "Jupyter", desc: "Interactive notebooks", icon: <SiJupyter className="text-orange-500" /> }
      ]
    }
  ],
  mobile: [
    { 
      name: "Cross-Platform", 
      level: "Hybrid", 
      items: [
        { name: "React Native", desc: "JavaScript mobile apps", icon: <SiReact className="text-cyan-400" /> },
        { name: "Flutter", desc: "Beautiful native UI", icon: <SiFlutter className="text-cyan-500" /> },
        { name: "Expo", desc: "React Native framework", icon: <SiExpo className="text-foreground" /> },
        { name: "Ionic", desc: "Web-based mobile apps", icon: <SiIonic className="text-blue-500" /> }
      ]
    },
    { 
      name: "Native Development", 
      level: "Platform", 
      items: [
        { name: "Swift (iOS)", desc: "Apple ecosystem", icon: <SiSwift className="text-orange-500" /> },
        { name: "Kotlin (Android)", desc: "Modern Android dev", icon: <SiKotlin className="text-purple-500" /> },
        { name: "SwiftUI", desc: "Declarative iOS UI", icon: <SiSwift className="text-blue-500" /> },
        { name: "Jetpack Compose", desc: "Modern Android UI", icon: <SiKotlin className="text-green-500" /> }
      ]
    },
    { 
      name: "Mobile Backend", 
      level: "Cloud", 
      items: [
        { name: "Firebase", desc: "Real-time sync", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "AWS Amplify", desc: "Full-stack mobile", icon: <FaAws className="text-orange-500" /> },
        { name: "Supabase", desc: "Open-source backend", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "Parse", desc: "Mobile BaaS", icon: <Cloud className="w-4 h-4 text-cyan-500" /> }
      ]
    },
    { 
      name: "Mobile Tools", 
      level: "DevOps", 
      items: [
        { name: "Fastlane", desc: "CI/CD automation", icon: <Settings className="w-4 h-4 text-green-500" /> },
        { name: "App Center", desc: "Testing & distribution", icon: <Settings className="w-4 h-4 text-purple-500" /> },
        { name: "TestFlight", desc: "iOS beta testing", icon: <Smartphone className="w-4 h-4 text-blue-500" /> }
      ]
    }
  ],
  database: [
    { 
      name: "Relational (SQL)", 
      level: "Managed", 
      items: [
        { name: "MySQL", desc: "Standard app DB", icon: <SiMysql className="text-blue-600" /> },
        { name: "PostgreSQL", desc: "Advanced data types", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "Oracle", desc: "Enterprise banking", icon: <SiOracle className="text-red-600" /> }
      ]
    },
    { 
      name: "NoSQL", 
      level: "Dynamic", 
      items: [
        { name: "MongoDB", desc: "Document-based", icon: <SiMongodb className="text-green-500" /> },
        { name: "Firebase", desc: "Real-time DB", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "DynamoDB", desc: "Serverless scaling", icon: <FaAws className="text-orange-500" /> }
      ]
    },
    { 
      name: "Cache & Search", 
      level: "Performance", 
      items: [
        { name: "Redis", desc: "In-memory speed", icon: <SiRedis className="text-red-600" /> },
        { name: "Elasticsearch", desc: "Deep log search", icon: <SiElasticsearch className="text-yellow-400" /> }
      ]
    }
  ],
  devops: [
    { 
      name: "Cloud & Hosting", 
      level: "Scalable", 
      items: [
        { name: "AWS", desc: "Global infra", icon: <FaAws className="text-orange-500" /> },
        { name: "Vercel", desc: "Edge deployment", icon: <SiVercel className="text-foreground" /> },
        { name: "Google Cloud", desc: "AI & Data platform", icon: <SiGooglecloud className="text-blue-500" /> }
      ]
    },
    { 
      name: "Containers", 
      level: "Portable", 
      items: [
        { name: "Docker", desc: "System isolation", icon: <SiDocker className="text-blue-500" /> },
        { name: "Kubernetes", desc: "Fleet management", icon: <SiKubernetes className="text-blue-600" /> }
      ]
    },
    { 
      name: "CI / CD", 
      level: "Automated", 
      items: [
        { name: "GitHub Actions", desc: "Workflow automation", icon: <SiGithubactions className="text-blue-600 dark:text-white" /> },
        { name: "GitLab CI", desc: "Pipeline security", icon: <SiGitlab className="text-orange-600" /> }
      ]
    }
  ],
  qa_design: [
    { 
      name: "Testing", 
      level: "Rigorous", 
      items: [
        { name: "Playwright", desc: "E2E testing", icon: <Shield className="w-4 h-4 text-green-500" /> },
        { name: "Jest / PyTest", desc: "Unit reliability", icon: <SiJest className="text-red-700" /> }
      ]
    },
    { 
      name: "Systems", 
      level: "Arch", 
      items: [
        { name: "Microservices", desc: "Decoupled logic", icon: <Settings className="w-4 h-4 text-blue-500" /> },
        { name: "Serverless", desc: "Cost-efficient ops", icon: <Cloud className="w-4 h-4 text-orange-500" /> }
      ]
    },
    { 
      name: "Docs & Collab", 
      level: "Agile", 
      items: [
        { name: "Swagger", desc: "API documentation", icon: <SiSwagger className="text-green-600" /> },
        { name: "Notion", desc: "Knowledge sync", icon: <SiNotion className="text-foreground" /> }
      ]
    }
  ]
};
// Helper for fallback icons
function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

/**
 * TECH STACK SECTION
 * 
 * Functional Overview:
 * - State: Manages `activeTab` to filter and display technology categories (Frontend, Backend, AI/ML, etc.).
 * - Data Structure: Complex nested object `techItems` mapping categories to specific tools/levels.
 * - Interaction: Filter buttons update the view, triggering a re-render of the grid content.
 */

export const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="py-24 bg-transparent overflow-hidden" id="tech-stack">
      <div className="container w-[90%] md:w-[80%] mx-auto max-w-[1920px]">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Our Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">DNA</span></h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            We don't just use tools; we master them. Explore the enterprise-grade stack we use to build high-performance digital assets.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Tabbed Navigation */}
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 p-3 bg-primary/5 rounded-2xl max-w-full">
              {techStackCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === cat.id 
                      ? 'bg-primary text-white shadow-xl scale-105 z-10' 
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="shrink-0">{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
            <div className="relative">
              {techStackCategories.filter(s => s.id === activeTab).map((section) => (
                <div 
                  key={section.id} 
                  className="w-full"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/3 space-y-8">
                      <div className={`size-20 rounded-[24px] ${section.color} flex items-center justify-center text-4xl shadow-inner`}>
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{section.name}</h3>
                        <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
                          We leverage industry-leading standards to build resilient, ultra-fast, and future-proof digital products.
                        </p>
                      </div>
                      <div className="pt-8 border-t border-primary/10">
                         <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Principles</h4>
                         <ul className="space-y-3">
                            {["Performance First", "Security by Design", "Maintenance-Ready Code"].map(p => (
                              <li key={p} className="flex items-center gap-2 text-sm font-bold text-foreground/80">
                                 <span className="size-1.5 rounded-full bg-primary"></span> {p}
                              </li>
                            ))}
                         </ul>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {techItems[section.id as keyof typeof techItems]?.map((tech, i) => (
                        <div 
                          key={i}
                          className="group p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[32px] hover:border-primary/40 transition-all shadow-sm overflow-hidden duration-300"
                        >
                          <div className="flex justify-between items-start mb-6">
                            <h4 className="text-2xl font-black group-hover:text-primary transition-colors">{tech.name}</h4>
                            <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-primary/10 text-primary rounded-full shrink-0 ml-4">
                              {tech.level}
                            </span>
                          </div>
                          <div className="flex flex-col gap-4 mb-8">
                            {tech.items.map((item: any, subIdx: number) => (
                              <div key={subIdx} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  {item.icon ? (
                                    <div className="text-lg shrink-0">
                                      {item.icon}
                                    </div>
                                  ) : (
                                    <span className="size-1.5 rounded-full bg-primary shrink-0"></span>
                                  )}
                                  <span className="text-sm font-bold text-foreground/80">{item.name}</span>
                                </div>
                                <p className="text-xs text-foreground/70 font-medium pl-3.5 leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="h-1.5 flex-1 bg-primary/10 rounded-full overflow-hidden">
                                <div 
                                   style={{ width: "85%" }}
                                   className="h-full bg-primary"
                                ></div>
                             </div>
                             <span className="text-[10px] font-black opacity-30">PRO</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};
