import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Edit2, Trash2, Globe, Eye, FileText, 
  Settings, Image as ImageIcon, Tag, Clock, ChevronRight, 
  Save, X, Check, Layout, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MarkdownRenderer } from "../../components/blog/MarkdownRenderer";
import { useToast } from "@/hooks/use-toast";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  status: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  tags?: string;
  publishedAt?: string;
}

export function BlogsEditor() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Blog> | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();
  
  const getBlogImageUrl = (url: string) => {
    if (!url) return "";
    
    // Handle Google Drive links (convert View/Open to Direct)
    if (url.includes("drive.google.com")) {
      const driveIdMatch = url.match(/\/d\/([^\/]+)/) || url.match(/id=([^\&]+)/);
      if (driveIdMatch && driveIdMatch[1]) {
        return `https://drive.google.com/uc?id=${driveIdMatch[1]}`;
      }
    }

    if (url.startsWith('http') || url.startsWith('/')) return url;
    
    // Resolve relative paths from the base URL to prevent /admin/ prepending
    const baseUrl = import.meta.env.BASE_URL || "/";
    return `${baseUrl}${url.startsWith('/') ? url.slice(1) : url}`;
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs");
      if (res.ok) setBlogs(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    
    // Simple validation
    if (!editing.title || !editing.slug || !editing.content) {
      toast({ title: "Error", description: "Title, Slug, and Content are required.", variant: "destructive" });
      return;
    }

    const method = editing.id ? "PUT" : "POST";
    const endpoint = editing.id ? `/api/admin/blogs/${editing.id}` : "/api/admin/blogs";
    
    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing)
      });
      
      if (res.ok) {
        toast({ title: "Success", description: "Blog post saved successfully!" });
        setEditing(null);
        fetchBlogs();
      } else {
        throw new Error("Failed to save");
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to save blog post.", variant: "destructive" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) return;
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast({ title: "Deleted", description: "Blog post has been removed." });
        fetchBlogs();
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to delete blog post.", variant: "destructive" });
    }
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  if (loading && !blogs.length) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="max-w-[1400px] mx-auto p-4 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              {editing.id ? <Edit2 className="w-8 h-8 text-orange-500" /> : <Plus className="w-8 h-8 text-green-500" />}
              {editing.id ? 'Edit Article' : 'Compose New Post'}
            </h1>
            <p className="text-gray-500 mt-1">Craft high-quality spiritual content for your community.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" onClick={() => setEditing(null)} className="flex-1 md:flex-none">
              <X className="w-4 h-4 mr-2" /> Cancel
            </Button>
            <Button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg flex-1 md:flex-none">
              <Save className="w-4 h-4 mr-2" /> {editing.id ? 'Update Post' : 'Publish Article'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50/50 border-b">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-400" /> Content Editor
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Post Title</Label>
                    <Input 
                      placeholder="e.g. Benefits of Satyanarayan Puja" 
                      value={editing.title || ""} 
                      onChange={e => {
                        const val = e.target.value;
                        setEditing({...editing, title: val, slug: editing.id ? editing.slug : generateSlug(val)});
                      }}
                      className="text-lg font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">URL Slug</Label>
                    <div className="flex items-center">
                      <span className="bg-gray-100 border border-r-0 px-3 py-2 rounded-l-md text-gray-500 text-sm">/blog/</span>
                      <Input 
                        value={editing.slug || ""} 
                        onChange={e => setEditing({...editing, slug: e.target.value})}
                        className="rounded-l-none font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-semibold flex items-center gap-2">
                      Body Content <Badge variant="outline" className="font-normal text-[10px]">Markdown Supported</Badge>
                    </Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowPreview(!showPreview)}
                      className={showPreview ? "text-orange-500 bg-orange-50" : ""}
                    >
                      {showPreview ? <><Eye className="w-3.5 h-3.5 mr-1.5" /> Editing</> : <><Layout className="w-3.5 h-3.5 mr-1.5" /> Preview</>}
                    </Button>
                  </div>
                  
                  {showPreview ? (
                    <div className="min-h-[500px] p-6 border rounded-md bg-gray-50/30 prose prose-sm max-w-none prose-orange overflow-y-auto">
                      <MarkdownRenderer content={editing.content || ""} />
                    </div>
                  ) : (
                    <Textarea 
                      placeholder="Write your article here using Markdown..." 
                      value={editing.content || ""} 
                      onChange={e => setEditing({...editing, content: e.target.value})}
                      className="min-h-[500px] font-mono text-sm leading-relaxed p-4 resize-none focus:ring-orange-500/20"
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50/50 border-b">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-400" /> Search Optimization (SEO)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider font-bold text-gray-500">Meta Title</Label>
                  <Input 
                    placeholder="SEO Title | Brand Name" 
                    value={editing.metaTitle || ""} 
                    onChange={e => setEditing({...editing, metaTitle: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider font-bold text-gray-500">Meta Description</Label>
                  <Textarea 
                    placeholder="Short summary for Google (160 characters)..." 
                    value={editing.metaDescription || ""} 
                    onChange={e => setEditing({...editing, metaDescription: e.target.value})}
                    className="h-20"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider font-bold text-gray-500">Primary Keyword</Label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="e.g. Satyanarayan Puja Vidhi" 
                      value={editing.primaryKeyword || ""} 
                      onChange={e => setEditing({...editing, primaryKeyword: e.target.value})}
                    />
                    <Button variant="outline" className="gap-2 shrink-0">
                      <Sparkles className="w-4 h-4 text-orange-500" /> Suggest
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          /* Sidebar Controls */
          <div className="space-y-6">
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50/50 border-b">
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-gray-500">Publishing Status</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <Select value={editing.status || "draft"} onValueChange={val => setEditing({...editing, status: val})}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" /> Draft (Internal Only)
                      </div>
                    </SelectItem>
                    <SelectItem value="published">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" /> Published (Live)
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                {editing.publishedAt && (
                  <div className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                    <Clock className="w-3 h-3" /> Published on {new Date(editing.publishedAt).toLocaleDateString()}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50/50 border-b">
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-gray-500">Post Metadata</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Layout className="w-4 h-4 text-primary" /> Category
                  </Label>
                  <Select value={editing.category || ""} onValueChange={val => setEditing({...editing, category: val})}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Puja Guides">Puja Guides</SelectItem>
                      <SelectItem value="Muhurat & Dates">Muhurat & Dates</SelectItem>
                      <SelectItem value="Astro Wisdom">Astro Wisdom</SelectItem>
                      <SelectItem value="Booking Guide">Booking Guide</SelectItem>
                      <SelectItem value="Traditions">Traditions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" /> Read Time
                  </Label>
                  <Input 
                    placeholder="e.g. 5 min read" 
                    value={editing.readTime || ""} 
                    onChange={e => setEditing({...editing, readTime: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-primary" /> Featured Image URL
                  </Label>
                  <Input 
                    placeholder="/images/blog/example.png" 
                    value={editing.image || ""} 
                    onChange={e => setEditing({...editing, image: e.target.value})}
                  />
                  {editing.image && (
                    <div className="mt-2 rounded-lg overflow-hidden border bg-gray-100 aspect-video flex items-center justify-center">
                      <img src={getBlogImageUrl(editing.image)} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" /> Excerpt (Short Bio)
                  </Label>
                  <Textarea 
                    placeholder="Brief intro for the listing page..." 
                    value={editing.excerpt || ""} 
                    onChange={e => setEditing({...editing, excerpt: e.target.value})}
                    className="h-24 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" /> Tags
                  </Label>
                  <Input 
                    placeholder="e.g. Puja, Vidhi, Ritual" 
                    value={editing.tags || ""} 
                    onChange={e => setEditing({...editing, tags: e.target.value})}
                  />
                  <p className="text-[10px] text-gray-400">Separate with commas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Blog Manager</h1>
          <p className="text-gray-500 mt-1">Total {blogs.length} articles found in your database.</p>
        </div>
        <Button onClick={() => setEditing({ title: '', slug: '', content: '', status: 'draft', category: 'Puja Guides', readTime: '5 min read' })} className="bg-orange-500 hover:bg-orange-600 text-white shadow-md">
          <Plus className="w-4 h-4 mr-2" /> New Article
        </Button>
      </div>

      <Card className="shadow-sm border-gray-200 overflow-hidden">
        <div className="p-4 border-b bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search articles by title..." className="pl-10 bg-white" />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2 text-sm text-gray-400 px-3 py-1 bg-white border rounded-full">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100">{blogs.filter(b => b.status === 'published').length} Live</Badge>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-100">{blogs.filter(b => b.status === 'draft').length} Drafts</Badge>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider border-b">
              <tr>
                <th className="px-6 py-4">Article Details</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 w-32 text-center">Status</th>
                <th className="px-6 py-4 w-32 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {blogs.map(blog => (
                <tr key={blog.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {blog.image ? (
                        <div className="w-12 h-12 rounded-lg border overflow-hidden shrink-0 hidden sm:block">
                          <img src={getBlogImageUrl(blog.image)} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg border bg-gray-100 flex items-center justify-center shrink-0 hidden sm:block">
                          <ImageIcon className="w-5 h-5 text-gray-300" />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">{blog.title}</p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">/blog/{blog.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="font-medium text-gray-600 border-gray-200">
                      {blog.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge className={blog.status === 'published' ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100" : "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100"}>
                      {blog.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" onClick={() => setEditing(blog)} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(blog.id)} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-3">
                      <FileText className="w-12 h-12 text-gray-200" />
                      <p className="text-lg font-medium">No articles yet</p>
                      <Button onClick={() => setEditing({ title: '', slug: '', content: '', status: 'draft' })} variant="outline">
                        Write your first post
                      </Button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
