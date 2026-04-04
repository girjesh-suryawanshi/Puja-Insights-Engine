import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { MarkdownRenderer } from "../components/blog/MarkdownRenderer";
import { getBlogBySlug as getStaticBlogBySlug } from "../data/blogs";

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
  metaTitle?: string;
  metaDescription?: string;
  tags?: string | string[];
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery<Blog>({
    queryKey: ["/api/blogs", slug],
    queryFn: async () => {
      const res = await fetch(`/api/blogs/${slug}`);
      if (!res.ok) throw new Error("Blog not found");
      return res.json();
    },
    enabled: !!slug
  });

  const staticPost = !post ? getStaticBlogBySlug(slug || "") : null;
  const currentPost = post || (staticPost ? {
    ...staticPost,
    publishedAt: staticPost.publishDate
  } as Blog : null);

  const { data: allBlogs = [] } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      if (!res.ok) return [];
      return res.json();
    }
  });

  const relatedPosts = allBlogs.filter(b => b.slug !== slug).slice(0, 3);

  if (isLoading && !currentPost) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground animate-pulse font-medium">Opening sacred texts...</p>
      </div>
    );
  }

  // Small background loading indicator
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

  if (error && !staticPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  if (!currentPost) return null;

  const tags = Array.isArray(currentPost.tags) ? currentPost.tags : (currentPost.tags ? currentPost.tags.split(',').map(t => t.trim()) : []);

  return (
    <div className="min-h-screen pt-20">
      {LoadingIndicator}
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {currentPost.image ? (
            <img
              src={(() => {
                let url = currentPost.image;
                if (url.includes("drive.google.com")) {
                  const driveIdMatch = url.match(/\/d\/([^\/]+)/) || url.match(/id=([^\&]+)/);
                  if (driveIdMatch && driveIdMatch[1]) {
                    return `https://drive.google.com/uc?id=${driveIdMatch[1]}`;
                  }
                }
                return url.startsWith('http') || url.startsWith('/') ? url : `${import.meta.env.BASE_URL}${url.replace(/^\//, "")}`;
              })()}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-orange-100" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground line-clamp-1">{currentPost.title}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 backdrop-blur shadow-sm border border-primary/20">
              <Tag className="w-3 h-3" />
              {currentPost.category}
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              {currentPost.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{currentPost.publishDate || (currentPost.publishedAt ? new Date(currentPost.publishedAt).toLocaleDateString() : "Recently")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{currentPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <MarkdownRenderer content={currentPost.content} />
            </motion.article>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white">
              <h3 className="text-xl font-display font-bold mb-2">Book a Hindi Pandit in Bangalore</h3>
              <p className="text-white/80 text-sm mb-4">Experienced pandits available across all Bangalore areas. Complete samagri included.</p>
              <Link href="/book" className="inline-block px-6 py-2.5 rounded-full font-semibold bg-white text-primary hover:bg-orange-50 transition-colors text-sm">
                Book Pandit Now
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Book Pandit */}
            <div className="bg-primary rounded-2xl p-6 text-white sticky top-24">
              <h3 className="text-lg font-display font-bold mb-2">Need a Pandit?</h3>
              <p className="text-white/80 text-sm mb-4">Hindi-speaking pandits available today across Bangalore.</p>
              <Link href="/book" className="block w-full text-center py-3 rounded-xl font-semibold bg-white text-primary hover:bg-orange-50 transition-colors text-sm">
                Book Now
              </Link>
              <a href="tel:+919546308950" className="block w-full text-center py-3 mt-2 rounded-xl font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-colors text-sm">
                Call: +91 95463 08950
              </a>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white border border-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-foreground mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(related => (
                    <Link key={related.slug} href={`/blog/${related.slug}`}>
                      <div className="group cursor-pointer py-3 border-b border-border last:border-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">{related.title}</p>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
