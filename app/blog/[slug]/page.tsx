import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { generateDynamicMetadata, generateArticleSchema, BASE_URL } from '@/lib/seo';
import { Calendar, User, Clock, ChevronLeft, Share2, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { SnapCarousel } from "@/components/ui/SnapCarousel";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {};
  }

  // Use the actual blog post title for both page title and Open Graph
  return generateDynamicMetadata({
    title: post.title, // This will be used as-is for Open Graph, with company name appended for page title
    description: post.excerpt,
    keywords: [post.category, 'Blog', 'Insights', post.author, 'Vexel Systems'],
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    author: post.author,
    section: post.category,
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-primary font-bold hover:underline">Back to Hub</Link>
      </div>
    );
  }

  // Related posts (random 3 excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="container w-[90%] md:w-[80%] mx-auto max-w-7xl flex flex-col gap-12 pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema({
            title: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: post.author,
            url: `${BASE_URL}/blog/${post.slug}`,
          }))
        }}
      />
      
      {/* Back Button */}
      <div>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary font-bold transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
        {/* Main Content */}
        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest self-start">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-foreground/40 uppercase tracking-widest pb-8 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                  {post.author.charAt(0)}
                </div>
                <span className="text-foreground/80">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                {post.readTime} Read
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-[40px] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">

            
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/### (.*)/g, '<h3>$1</h3>') }} />
          </div>

          {/* Sharing */}
          <div className="flex flex-col gap-6 py-12 border-t border-black/5 dark:border-white/5 mt-12">
            <h4 className="font-bold uppercase tracking-widest text-foreground/40 text-xs">Share this insight:</h4>
            <SnapCarousel scrollContainerClassName="md:flex md:flex-wrap md:gap-4">
              {[
                { icon: <Facebook size={20} />, label: 'Facebook', bg: 'hover:bg-[#1877F2]' },
                { icon: <Twitter size={20} />, label: 'Twitter', bg: 'hover:bg-[#1DA1F2]' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', bg: 'hover:bg-[#0A66C2]' },
                { icon: <MessageCircle size={20} />, label: 'WhatsApp', bg: 'hover:bg-[#25D366]' },
              ].map((social) => (
                <button 
                  key={social.label}
                  className={`min-w-fit flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 font-bold text-sm transition-all hover:text-white ${social.bg} hover:border-transparent snap-center`}
                >
                  {social.icon}
                  {social.label}
                </button>
              ))}
            </SnapCarousel>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="flex flex-col gap-12">
          {/* Related Stories */}
          <div className="p-8 bg-black/5 dark:bg-white/5 rounded-[32px] border border-black/5 dark:border-white/5">
            <h4 className="text-xl font-bold mb-8">Related Insights</h4>
            <SnapCarousel scrollContainerClassName="md:flex md:flex-col md:gap-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="min-w-[80vw] md:min-w-0 snap-center group flex flex-col gap-3">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-2">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h5 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h5>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    <span>{rp.date}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>{rp.readTime}</span>
                  </div>
                </Link>
              ))}
            </SnapCarousel>
          </div>

          {/* Newsletter / CTA */}
          <div className="p-8 bg-primary rounded-[32px] text-white shadow-2xl shadow-primary/20">
            <h4 className="text-2xl font-bold mb-4">Stay Informed</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Get the latest insights on business automation and POS trends delivered to your inbox weekly.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:bg-white/20 transition-all placeholder:text-white/40"
              />
              <button 
                className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:brightness-105 transition-all text-sm"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
