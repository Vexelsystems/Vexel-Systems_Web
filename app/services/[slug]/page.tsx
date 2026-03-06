import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { generateDynamicMetadata } from "@/lib/seo";
import {
  Search,
  Target,
  Terminal,
  Code2,
  HelpCircle,
  Rocket,
  Zap,
  Star,
  Activity,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  BarChart3,
  Settings,
  Monitor,
  Bot,
  BrainCircuit,
  Shield,
  Lock,
  Users,
  Palette,
  HeartPulse,
  LayoutGrid,
  Server,
  Network,
  Workflow,
  Database,
  Cloud,
  Layers,
  ShoppingCart,
  Megaphone,
  Mail,
  Share2,
} from "lucide-react";
import type { Metadata } from "next";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { TechCard } from "@/components/ui/TechCard";
import { HeroBackground } from "@/components/hero/HeroBackground";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return generateDynamicMetadata({
    title: `${service.title} Services in Sri Lanka`,
    description: "Vexel Systems",
    keywords: [
      service.title,
      ...(service.techStack?.map((t) => t.name) || []),
      ...(service.keywords || []),
      "Vexel Systems",
      "Software Solutions",
    ],
    path: `/services/${service.slug}`,
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-transparent relative selection:bg-primary/20 font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <HeroBackground />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <MotionWrapper type="slideUp" duration={1}>
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] w-fit border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Our Specialized Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] sm:leading-[1.0] tracking-tighter uppercase text-foreground">
                {service.title.split(" ").map((word, i) => (
                  <span key={i} className={i === 0 ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-black hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 active:scale-95">
                    Get Started <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-foreground/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-black hover:bg-foreground/5 transition-all text-foreground active:scale-95">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/50 px-4 sm:px-6 lg:px-20 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
              Why <span className="text-primary">Choose</span> Us
            </h2>
            <p className="text-foreground/50 text-base sm:text-lg font-medium">
              We build high-quality solutions that help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Reliable Quality",
                desc: "We test everything carefully to make sure your software works perfectly every time.",
                icon: ShieldCheck,
              },
              {
                title: "Experienced Team",
                desc: `Our experts know the best ways to build ${service.title} for your specific needs.`,
                icon: Zap,
              },
              {
                title: "Latest Technology",
                desc: "We use the best tools and modern code to build fast and secure systems for you.",
                icon: Code2,
              },
            ].map((adv, idx) => (
              <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-black/[0.03] dark:border-white/[0.03] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group h-full">
                  <div className="shrink-0 size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <adv.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-3 text-foreground uppercase tracking-tight">
                      {adv.title}
                    </h4>
                    <p className="text-foreground/50 text-sm sm:text-base leading-relaxed font-medium">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-foreground/50 text-base sm:text-lg font-medium">
              Complete solutions designed to solve your problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.subServices.map((sub, idx) => {
              const Icon = sub.icon || Monitor;
              return (
                <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                  <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/[0.05] dark:border-white/[0.05] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all group h-full flex flex-col">
                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-foreground uppercase tracking-tighter leading-none">
                      {sub.title}
                    </h3>
                    <p className="text-foreground/50 text-sm sm:text-base font-medium leading-relaxed mb-8 flex-1">
                      {sub.description}
                    </p>
                    <ul className="space-y-3">
                      {sub.features?.map((feat, fidx) => (
                        <li
                          key={fidx}
                          className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-foreground/40 group-hover:text-primary transition-colors"
                        >
                          <div className="size-1.5 bg-primary rounded-full" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.1 OUR TECHNOLOGIES */}
      {service.techStack && (
        <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 px-4 sm:px-6 lg:px-20 overflow-hidden relative border-t border-foreground/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-12 sm:mb-16 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
                Our <span className="text-primary italic">Technologies</span>
              </h2>
              <p className="text-foreground/50 text-base sm:text-lg font-medium">
                We use the latest tools to build your project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {service.techStack.map((tech, idx) => (
                <TechCard
                  key={idx}
                  name={tech.name}
                  iconName={tech.iconName}
                  explanation={tech.explanation || ""}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. HOW WE WORK */}
      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/30 px-4 sm:px-6 lg:px-20 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
            How We <span className="text-primary italic">Work</span>
          </h2>
          <p className="text-foreground/50 text-base sm:text-lg font-medium">
            We follow simple steps to deliver the best results.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process?.map((item, idx) => {
            const stepNum = (idx + 1).toString().padStart(2, "0");
            const icons = [Search, Terminal, Rocket, Zap, Settings, Activity];
            const ProcessIcon = icons[idx % icons.length];

            return (
              <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <ProcessIcon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-black text-xl mb-3 text-foreground uppercase tracking-tight">
                    <span className="text-primary font-black">{stepNum}.</span>{" "}
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-foreground/50 max-w-[200px] leading-relaxed">
                    {"description" in item ? item.description : ""}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </section>

      {/* 4.1 OUR RESULTS */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-white dark:bg-zinc-900 border-b border-foreground/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-16 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground mb-4 uppercase tracking-tighter">
                Our <span className="text-primary italic">Results.</span>
              </h2>
              <p className="text-foreground/50 text-lg sm:text-xl font-medium">
                Real examples of how we help our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {service.caseStudies.map((study, idx) => (
                <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                  <div className="p-8 sm:p-10 rounded-[3rem] bg-zinc-50 dark:bg-zinc-900/50 border border-foreground/5 flex flex-col h-full hover:border-primary/20 transition-all">
                    <div className="mb-6">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tighter block mb-2">
                        {study.stat}
                      </span>
                      <span className="text-foreground/40 text-xs sm:text-sm font-black uppercase tracking-[0.2em]">
                        {study.statDescription}
                      </span>
                    </div>
                    <div className="mb-6">
                      <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                        {study.category}
                      </div>
                      <h4 className="text-2xl font-black text-foreground uppercase tracking-tight mb-2">
                        {study.title}
                      </h4>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 text-primary font-black text-xs sm:text-sm uppercase tracking-[0.2em] group/link"
                    >
                      Contact Us For Details{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-2 transition-transform"
                      />
                    </Link>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4.2 YOUR BENEFITS */}
      {service.benefits && (
        <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/50 px-4 sm:px-6 lg:px-20 border-b border-foreground/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-16 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
                Your <span className="text-primary italic">Benefits</span>
              </h2>
              <p className="text-foreground/50 text-base sm:text-lg font-medium">
                What you get when you work with us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {service.benefits.map((benefit, idx) => {
                const BenefitIcon = benefit.icon || Star;
                return (
                  <MotionWrapper key={idx} type="slideUp" delay={idx * 0.1}>
                    <div className="h-full p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/[0.05] dark:border-white/[0.05] hover:border-primary/20 transition-all group">
                      <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <BenefitIcon size={28} />
                      </div>
                      <h4 className="font-black text-xl mb-4 text-foreground uppercase tracking-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-foreground/50 text-sm sm:text-base font-medium leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. PRICING SECTION */}
      {service.pricing && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">
              Simple <span className="text-primary italic">Pricing</span>
            </h2>
            <p className="text-foreground/50 text-base sm:text-lg font-medium">
              Choose the right plan for your business.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {service.pricing.options.map((p, idx) => (
              <MotionWrapper key={idx} type="scale" delay={idx * 0.1}>
                <div
                  className={`h-full p-8 sm:p-10 rounded-[3rem] border ${
                    idx === 1
                      ? "border-primary bg-primary/[0.02] shadow-2xl shadow-primary/10"
                      : "border-foreground/10 bg-white dark:bg-zinc-900"
                  } flex flex-col relative group`}
                >
                  {idx === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                      Popular
                    </div>
                  )}
                  <h4 className="font-black text-2xl text-foreground uppercase tracking-tight mb-2">
                    {p.name}
                  </h4>

                  <div className="mb-10 mt-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tighter">
                      {p.price}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-12 flex-1">
                    {p.features.map((feat, fidx) => (
                      <li
                        key={fidx}
                        className="flex items-center gap-3 text-sm font-bold text-foreground/70"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-primary shrink-0"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 sm:py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all ${
                      idx === 1
                        ? "bg-primary text-white shadow-xl shadow-primary/40 hover:scale-[1.02]"
                        : "border border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>
      )}

      {/* 6. FAQ SECTION */}
      {service.faq && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-zinc-50 dark:bg-zinc-900/50 border-y border-foreground/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-black text-foreground mb-12 sm:mb-16 text-center uppercase tracking-tighter">
              Common <span className="text-primary italic">Questions</span>
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <MotionWrapper key={idx} type="slideUp" delay={idx * 0.05}>
                  <details className="group bg-white dark:bg-zinc-900 border border-black/[0.05] dark:border-white/[0.05] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <summary className="flex justify-between items-center p-6 sm:p-8 cursor-pointer list-none font-black text-foreground uppercase tracking-tight text-base sm:text-lg selection:bg-transparent">
                      {item.question}
                      <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary shrink-0">
                        <ArrowRight className="rotate-90 group-open:-rotate-90 transition-transform" />
                      </span>
                    </summary>
                    <div className="p-6 sm:p-8 pt-0 text-foreground/60 text-sm sm:text-base leading-relaxed font-medium border-t border-black/[0.03] dark:border-white/[0.03] italic">
                      {item.answer}
                    </div>
                  </details>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FINAL CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
        <MotionWrapper type="scale">
          <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 lg:py-24 lg:px-24 text-center text-white relative overflow-hidden shadow-[0_20px_80px_rgba(0,119,237,0.4)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter leading-none">
                Ready to <span className="text-white/40">Start</span> Your
                Project?
              </h2>
              <p className="text-sm sm:text-base opacity-80 mb-10 sm:mb-12 font-medium leading-relaxed max-w-2xl mx-auto italic">
                Contact us today for a free consultation. Let's discuss how
                Vexel Systems can help your business grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-white/90 hover:scale-105 transition-all shadow-2xl">
                    Get a Quote
                  </button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-white/10 hover:scale-105 transition-all backdrop-blur-sm">
                    Talk to Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </section>
    </main>
  );
}
