import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, BookOpen, Tag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { blogPosts as staticBlogs } from "../data/blogs";

interface Blog {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate?: string;
  publishedAt?: string;
  excerpt: string;
  image: string;
  content: string;
}

export function BlogList() {
  const { data: blogs = [], isLoading, error } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      return res.json();
    }
  });

  // Merge static blogs with dynamic blogs, avoiding duplicates by slug
  const allBlogs = [...blogs];
  const dynamicSlugs = new Set(blogs.map(b => b.slug));
  
  staticBlogs.forEach(sb => {
    if (!dynamicSlugs.has(sb.slug)) {
      allBlogs.push({
        ...sb,
        publishedAt: sb.publishDate // approximation
      } as Blog);
    }
  });

  if (isLoading && allBlogs.length === 0) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground animate-pulse font-medium">Gathering spiritual wisdom...</p>
      </div>
    );
  }

  // If loading but we have static blogs, we can show a small indicator instead of blocking
  const LoadingIndicator = isLoading ? (
    <div className="fixed top-20 left-0 w-full h-1 bg-primary/20 z-50">
      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-full bg-primary"
      />
    </div>
  ) : null;

  if (error) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-bold text-red-500">Failed to load articles</h2>
        <p className="text-muted-foreground mt-2">Please try refreshing the page.</p>
      </div>
    );
  }

  const categories = Array.from(new Set(allBlogs.map(b => b.category || "General")));
  const featuredPost = allBlogs[0];
  const gridPosts = allBlogs.slice(1);

  if (allBlogs.length === 0) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" />
          Knowledge Center
        </div>
        <h1 className="text-3xl font-bold">No articles published yet</h1>
        <p className="text-muted-foreground mt-2">Come back soon for spiritual guides and Vedic wisdom.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {LoadingIndicator}
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 via-amber-50 to-orange-50 py-16 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Knowledge Center
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Puja Guides & Spiritual Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything North Indian families in Bangalore need to know about pujas, muhurat, rituals, and Vedic traditions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group cursor-pointer bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden min-h-[200px] md:min-h-[300px]">
                    {featuredPost.image ? (
                      <img
                        src={featuredPost.image.startsWith('http') || featuredPost.image.startsWith('/') ? featuredPost.image : `${import.meta.env.BASE_URL}${featuredPost.image.replace(/^\//, "")}`}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-orange-100 flex items-center justify-center text-orange-300">
                        <BookOpen className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-primary text-xs font-semibold shadow-sm">
                        {featuredPost.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.publishDate || (featuredPost.publishedAt ? new Date(featuredPost.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "Recently")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Read Article</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">All Articles</span>
          {categories.map(cat => (
            <span key={cat} className="px-4 py-2 rounded-full bg-white border border-border text-muted-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-pointer">
              {cat}
            </span>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group cursor-pointer bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image.startsWith('http') || post.image.startsWith('/') ? post.image : `${import.meta.env.BASE_URL}${post.image.replace(/^\//, "")}`}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-orange-100 flex items-center justify-center text-orange-200">
                        <BookOpen className="w-8 h-8" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">{post.publishDate || (post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Recently")}</span>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Read</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Ready to Book a Pandit in Bangalore?</h2>
          <p className="text-white/80 mb-6">Hindi-speaking pandits available across Whitefield, Electronic City, HSR Layout, BTM, Marathahalli & all Bangalore areas.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book" className="px-6 py-3 rounded-full font-semibold bg-white text-primary hover:bg-orange-50 transition-colors">
              Book Pandit Now
            </Link>
            <a href="tel:+919546308950" className="px-6 py-3 rounded-full font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-colors">
              Call: +91 95463 08950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
