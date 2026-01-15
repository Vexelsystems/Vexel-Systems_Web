/**
 * BLOG CLIENT COMPONENT
 * 
 * Functional Overview:
 * - Filtering: Implements dual filtering by 'Category' AND 'Search Query' (matches title or excerpt).
 * - State: Manages active category and search input state locally.
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Search, Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Technology', 'Business', 'POS', 'Guides'] as const;

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic: Combines category check with text search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container w-[90%] md:w-[80%] mx-auto max-w-7xl flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden rounded-[40px] bg-black text-white">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent"></div>
        <div className="relative z-10 px-12">
          <div 
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 border border-primary/30 uppercase tracking-widest">
              Knowledge Hub
            </span>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Insights for the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Next Generation</span> of Business.</h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Explore the latest trends in POS technology, retail growth strategies, and digital transformation tailored for the modern entrepreneur.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-primary/50 focus:bg-white/20 transition-all backdrop-blur-md text-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Content */}
      <section className="flex flex-col gap-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-foreground/70 font-bold uppercase text-xs tracking-widest mr-4">Filter By Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                : 'bg-black/5 dark:bg-white/5 text-foreground/80 border-transparent hover:border-black/10 dark:hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div
              key={post.slug}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group block h-full bg-white dark:bg-white/5 rounded-[32px] border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                  <div className="flex items-center gap-4 text-xs font-bold text-foreground/70 mb-4 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-primary" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-foreground/80">{post.author}</span>
                    </div>
                    <div className="text-primary transition-transform">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-black/5 dark:bg-white/5 rounded-[40px] border border-dashed border-black/10 dark:border-white/10">
            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
            <p className="text-foreground/70 max-w-md mx-auto">
              We couldn't find any articles matching your search query. Try using different keywords or categories.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
