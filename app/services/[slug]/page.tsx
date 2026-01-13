import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, services } from "@/lib/services";
import { generateDynamicMetadata, generateServiceSchema, BASE_URL } from "@/lib/seo";
import { CheckCircle, ArrowRight, ShieldCheck, Megaphone } from "lucide-react";
import type { Metadata } from "next";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {};
  }

  // Use the actual service title for Open Graph and page title
  return generateDynamicMetadata({
    title: service.title, // e.g., "AI-Powered Automation for Smarter Businesses"
    description: service.description,
    keywords: [
      ...service.techStack,
      service.subtitle,
      'Service',
      'Vexel Systems',
    ],
    path: `/services/${service.slug}`,
    image: service.heroImage,
    type: 'website',
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema({
            name: service.title,
            description: service.description,
            url: `${BASE_URL}/services/${service.slug}`,
            image: service.heroImage,
          }))
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden py-20 bg-background-light dark:bg-background-dark">
        <div className="absolute top-24 left-6 md:left-10 z-20">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-primary transition-all hover:gap-3 bg-white/50 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-foreground/5 shadow-sm">
                <ArrowRight className="rotate-180" size={16} /> Back to Services
            </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,164,236,0.08),transparent_70%)]"></div>
          <div className="absolute inset-0 opacity-20">
             <Image 
                src={service.heroImage} 
                alt={service.title}
                fill
                sizes="100vw"
                className="object-cover object-center"
             />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {service.subtitle}
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 max-w-4xl mx-auto text-foreground">
             {service.title.split(" ").map((word, i, arr) => {
                if (word.toLowerCase() === "automation" || word.toLowerCase() === "smarter" || word.toLowerCase() === "businesses") {
                   return <span key={i} className="text-primary">{word} </span>
                }
                 return word + " ";
             })}
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:shadow-[0_0_30px_rgba(19,164,236,0.5)] transition-all">
              Automate Your Business
            </Link>
            <a 
              href={`https://wa.me/94740968108?text=${encodeURIComponent(`Hi, I am interested in learning more about ${service.title} services.`)}`}
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
            >
               WhatsApp
            </a>
            <Link href="#services" className="w-full sm:w-auto px-8 py-4 border border-foreground/10 bg-foreground/5 font-bold rounded-xl text-lg hover:bg-foreground/10 transition-all text-foreground">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges / Certifications */}
      {service.certifications && service.certifications.length > 0 && (
        <section className="py-12 border-y border-foreground/5 bg-foreground/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-10">Trusted & Certified By Global Standards</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-all cursor-default">
                    {service.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xl font-bold italic text-foreground">
                            <cert.icon className="text-primary" size={24} />
                            {cert.title}
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* Sub-Services Grid */}
      <section className="py-24 bg-foreground/5" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Capabilities</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <SnapCarousel>
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center p-8 rounded-xl transition-all group bg-white dark:bg-card border border-gray-100 dark:border-gray-800 hover:border-primary/40 hover:bg-primary/5 shadow-sm hover:shadow-lg flex flex-col">
                {sub.image && (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                         <Image 
                            src={sub.image} 
                            alt={sub.title} 
                            fill 
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}
                {!sub.image && (
                    <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <sub.icon size={32} />
                    </div>
                )}
                
                {sub.image && (
                     <div className="flex items-center gap-3 mb-3 text-primary">
                        <sub.icon size={28} />
                        <h3 className="text-xl font-bold text-foreground">{sub.title}</h3>
                     </div>
                )}
                {!sub.image && <h3 className="text-xl font-bold mb-3 text-foreground">{sub.title}</h3>}
                
                <p className="text-foreground/60 leading-relaxed mb-4">{sub.description}</p>

                {sub.features && (
                   <ul className="mt-auto space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                     {sub.features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                         {feature}
                       </li>
                     ))}
                   </ul>
                )}
              </div>
            ))}
          </SnapCarousel>
        </div>
      </section>

      {/* Why Us Section */}
      {service.whyUs && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-primary/20 aspect-4/5 shadow-2xl">
                 <Image 
                    src={service.whyUs.image} 
                    alt="Why Us" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 right-6 bg-primary p-6 rounded-xl shadow-xl">
                    <p className="text-background-dark font-black text-4xl">10X</p>
                    <p className="text-background-dark/80 text-xs font-bold uppercase tracking-wider">Average ROI Scale</p>
                </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{service.whyUs.title}</h2>
                    <p className="text-foreground/60">{service.whyUs.description}</p>
                </div>
                <div className="space-y-6">
                    {service.whyUs.points.map((point, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="shrink-0 text-primary">
                                <point.icon size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-foreground">{point.title}</h4>
                                <p className="text-sm text-foreground/60">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-24 bg-foreground/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
             <div className="flex justify-between items-end mb-10">
                <div>
                   <h2 className="text-3xl font-black mb-2 text-foreground">Proven Impact</h2>
                   <p className="text-foreground/60">Real results for our partners across the globe.</p>
                </div>
             </div>
             <SnapCarousel>
                {service.caseStudies.map((study, idx) => (
                   <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center group relative bg-black/10 dark:bg-black/40 rounded-2xl overflow-hidden aspect-video">
                      <Image 
                         src={study.image} 
                         alt={study.title} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                         sizes="(max-width: 768px) 85vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                         <span className="bg-primary px-3 py-1 rounded text-[10px] font-bold text-background-dark uppercase w-fit mb-3">{study.category}</span>
                         <h3 className="text-white text-2xl font-bold mb-2">{study.title}</h3>
                         <p className="text-primary text-3xl font-black">{study.stat} <span className="text-white/80 text-sm font-normal ml-2">{study.statDescription}</span></p>
                      </div>
                   </div>
                ))}
            </SnapCarousel>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-24" id="benefits">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-foreground">The Benefits of <span className="text-primary">Transformation</span></h2>
                <p className="text-foreground/60 text-lg mb-10">Modernizing your business with Vexel Systems isn't just about new tech—it's about measurable ROI and operational freedom.</p>
                <SnapCarousel scrollContainerClassName="sm:grid sm:grid-cols-2 gap-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="min-w-[75vw] sm:min-w-0 snap-center flex flex-col gap-4">
                      {benefit.image && (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
                          <Image 
                            src={benefit.image} 
                            alt={benefit.title} 
                            fill 
                            className="object-cover"
                            sizes="(max-width: 768px) 75vw, 50vw"
                          />
                        </div>
                      )}
                      
                      <div className="flex gap-4">
                        {!benefit.image && (
                            <div className="shrink-0 text-primary">
                                {benefit.icon ? <benefit.icon size={24} /> : <CheckCircle size={24} />}
                            </div>
                        )}
                        <div>
                          <h4 className="font-bold text-lg mb-1 text-foreground">{benefit.title}</h4>
                          <p className="text-sm text-foreground/60">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </SnapCarousel>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
                  <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00fIoBj2euWSyKwhGlBAbqeMhFG5W9KXQz_DADzIYAj6ueEjjKeGvnUPwknPjBAkzl9KW-ARONV_21ervVHrzJbdhn3dt5R2BiKKV2MNlRSP7NQNAs49o_vXMK-ss52md2Du3d6L0JlJiYdsDHt6MrWhKgQuyzh5w9OV5VrFJcFfkw46F2Br-U2Rz1A6wobt1gZGSxw_dlGxRRML7k3PFllWNFo5PbOhEOgN-iM2-TZUNRXF71XVe4Kzdte4VR-NSiRViW5hff2ir"
                      alt="High-tech dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black p-6 rounded-xl border border-primary/30 max-w-[200px] shadow-lg">
                  <p className="text-3xl font-bold text-primary mb-1">70%</p>
                  <p className="text-xs uppercase tracking-tighter text-foreground/60">Average Efficiency Gain</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Grid */}
      <section className="py-16 border-y border-foreground/5 bg-foreground/5" id="tech">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-foreground/40 mb-10">Powered by Leading Tech</p>
          <div className="overflow-hidden">
             <div className="flex tech-scroll whitespace-nowrap">
                {/* Set 1 */}
                <div className="flex items-center gap-20 px-10">
                    {service.techStack.map((tech, idx) => (
                        <div key={idx} className="text-xl font-bold italic tracking-tighter text-foreground/50 hover:text-foreground transition-colors">{tech}</div>
                    ))}
                </div>
                {/* Set 2 (Duplicated for seamless scroll if needed, though techStack in data is already doubled for some) */}
                 <div className="flex items-center gap-20 px-10">
                    {service.techStack.map((tech, idx) => (
                        <div key={`dup-${idx}`} className="text-xl font-bold italic tracking-tighter text-foreground/50 hover:text-foreground transition-colors">{tech}</div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      {service.industries && service.industries.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Versatile Solutions for Every Sector</h2>
              <p className="text-foreground/60 max-w-xl mx-auto">Vexel Systems adapts its automation engine to the unique constraints and requirements of your industry.</p>
            </div>
            <SnapCarousel>
              {service.industries.map((ind, idx) => (
                  <div key={idx} className="min-w-[40vw] md:min-w-0 snap-center group relative overflow-hidden rounded-xl bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 transition-all hover:scale-[1.02]">
                      {ind.image ? (
                          <>
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={ind.image}
                                    alt={ind.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 40vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 mb-1 text-white">
                                        {ind.icon && <ind.icon className="text-primary" size={20} />}
                                        <h3 className="font-bold text-lg">{ind.name}</h3>
                                    </div>
                                    {ind.description && (
                                        <p className="text-white/80 text-xs leading-relaxed">{ind.description}</p>
                                    )}
                                </div>
                            </div>
                          </>
                      ) : (
                          <div className="p-6 text-center">
                              <div className="mb-3 flex justify-center">
                                  {ind.icon && <ind.icon className="text-primary" size={32} />}
                              </div>
                              <p className="font-medium text-foreground">{ind.name}</p>
                              {ind.description && (
                                  <p className="text-xs text-foreground/60 mt-2">{ind.description}</p>
                              )}
                          </div>
                      )}
                  </div>
              ))}
            </SnapCarousel>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-24 bg-foreground/5 text-foreground" id="process">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Simplified Process</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">From concept to deployment, we handle the technical heavy lifting.</p>
            </div>
            <div className="relative flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-8 md:gap-12 pb-12 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0">
              {service.process.map((step, idx) => (
                <div key={idx} className="min-w-[70vw] md:min-w-0 snap-center relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold mb-6 text-white">{idx + 1}</div>
                  <h5 className="text-xl font-bold mb-2">{step.title}</h5>
                  <p className="text-sm text-foreground/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-24" id="faq">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
              <p className="text-foreground/60">Everything you need to know about starting your project with us.</p>
            </div>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <details key={idx} className="group border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/20 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-lg text-foreground">{item.question}</h3>
                    <div className="text-primary group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </summary>
                  <p className="mt-4 text-foreground/60 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {service.testimonial && (
        <section className="py-24 border-y border-foreground/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="mb-8 text-primary flex justify-center">
                    <Megaphone className="text-primary -rotate-12" size={48} />
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium leading-snug mb-10 text-foreground">
                    "{service.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {service.testimonial.author[0]}
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-foreground">{service.testimonial.author}</p>
                        <p className="text-xs text-primary uppercase tracking-wider">{service.testimonial.role}</p>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Privacy Section */}
      {service.privacy && (
        <section className="py-20" id="privacy">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-primary/5 rounded-3xl p-10 md:p-16 border border-primary/10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                  <ShieldCheck className="text-primary" size={24} />
                  <span className="text-primary font-bold tracking-wide uppercase text-xs">Security & Privacy First</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">You provide the data and goal - we build the AI.</h2>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  {service.privacy.description}
                </p>
              </div>
              <div className="w-full max-w-[280px] grid grid-cols-2 gap-4">
                {service.privacy.features.map((feature, idx) => (
                  <div key={idx} className="aspect-square bg-white dark:bg-black/20 rounded-xl flex flex-col items-center justify-center p-4 text-center shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="mb-2 text-primary">
                        <feature.icon size={32} />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-foreground/60">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lead Capture */}
      <section className="py-24 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="p-10 lg:p-16 rounded-2xl border border-primary/20 bg-white/50 dark:bg-black/40 backdrop-blur-md">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Let's Build the Future Together</h2>
                <p className="text-foreground/60 mb-8 leading-relaxed">Book a free consultation to discuss your automation goals. Our architects will help you identify the highest ROI opportunities.</p>
                <ul className="space-y-4">
                    {["Full architectural assessment", "Feasibility study", "Custom implementation roadmap"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                            <span className="size-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <CheckCircle size={14} className="text-primary" />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground/50 mb-2">Name</label>
                  <input className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="John Doe" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground/50 mb-2">Email Address</label>
                  <input className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="john@company.com" type="email"/>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground/50 mb-2">Automation Goals</label>
                  <textarea className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="Describe your current bottleneck..." rows={4}></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(19,164,236,0.4)] transition-all" type="submit">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
