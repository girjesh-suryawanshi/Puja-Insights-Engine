import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { getBlogBySlug, blogPosts } from "../data/blogs";

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(<h1 key={key++} className="text-3xl font-display font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-display font-bold text-foreground mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-display font-semibold text-foreground mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("| ")) {
      // Table - find all table lines
      const tableLines = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith("| ")) {
        tableLines.push(lines[j]);
        j++;
      }
      i = j - 1;

      const rows = tableLines.filter(l => !l.includes("---"));
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-border rounded-lg overflow-hidden text-sm">
            {rows.map((row, ri) => {
              const cells = row.split("|").filter(c => c.trim());
              return ri === 0 ? (
                <thead key={ri}><tr className="bg-primary/10">{cells.map((c, ci) => <th key={ci} className="p-3 text-left font-semibold text-foreground border-b border-border">{c.trim()}</th>)}</tr></thead>
              ) : (
                <tbody key={ri}><tr className="border-b border-border hover:bg-muted/50">{cells.map((c, ci) => <td key={ci} className="p-3 text-muted-foreground">{c.trim()}</td>)}</tr></tbody>
              );
            })}
          </table>
        </div>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 rounded-r-lg italic text-muted-foreground">
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      // Collect list items
      const items = [];
      let j = i;
      while (j < lines.length && (lines[j].startsWith("- ") || lines[j].startsWith("* "))) {
        items.push(lines[j].slice(2));
        j++;
      }
      i = j - 1;
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1.5 my-3 text-muted-foreground pl-2">
          {items.map((item, ii) => {
            const boldMatch = item.match(/^\*\*(.+?)\*\*(.*)$/);
            return (
              <li key={ii} className="leading-relaxed">
                {boldMatch ? <><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</> : item}
              </li>
            );
          })}
        </ul>
      );
    } else if (/^\d+\. /.test(line)) {
      const items = [];
      let j = i;
      while (j < lines.length && /^\d+\. /.test(lines[j])) {
        items.push(lines[j].replace(/^\d+\. /, ""));
        j++;
      }
      i = j - 1;
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-1.5 my-3 text-muted-foreground pl-2">
          {items.map((item, ii) => {
            const boldMatch = item.match(/^\*\*(.+?)\*\*(.*)$/);
            return (
              <li key={ii} className="leading-relaxed">
                {boldMatch ? <><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</> : item}
              </li>
            );
          })}
        </ol>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Regular paragraph — handle inline formatting
      const formatted = line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline font-medium">$1</a>');
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
    }
  }

  return <div className="prose-content">{elements}</div>;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || "");
  const relatedPosts = blogPosts.filter(b => b.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 via-amber-50 to-orange-50 py-12 border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Tag className="w-3 h-3" />
            {post.category}
          </div>

          <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <MarkdownRenderer content={post.content} />
            </motion.article>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

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
              <a href="tel:+919876543210" className="block w-full text-center py-3 mt-2 rounded-xl font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-colors text-sm">
                Call: +91 98765 43210
              </a>
            </div>

            {/* Related Posts */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
