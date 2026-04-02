import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  status: string;
  metaTitle: string;
}

export function BlogsEditor() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Blog> | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/blogs");
    if (res.ok) setBlogs(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    
    const method = editing.id ? "PUT" : "POST";
    const endpoint = editing.id ? `/api/admin/blogs/${editing.id}` : "/api/admin/blogs";
    
    await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing)
    });
    
    setEditing(null);
    fetchBlogs();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this blog post completely?")) return;
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    fetchBlogs();
  };

  if (loading && !blogs.length) return <div>Loading Blogs...</div>;

  if (editing) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{editing.id ? 'Edit Blog' : 'New Blog'}</h1>
          <button onClick={() => setEditing(null)} className="text-gray-500 hover:underline">Cancel</button>
        </div>
        <form onSubmit={handleSave} className="bg-white p-6 rounded shadow-sm border">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input type="text" value={editing.title || ""} onChange={e => setEditing({...editing, title: e.target.value})} className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
              <input type="text" value={editing.slug || ""} onChange={e => setEditing({...editing, slug: e.target.value})} className="w-full border p-2 rounded" required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title (Meta)</label>
            <input type="text" value={editing.metaTitle || ""} onChange={e => setEditing({...editing, metaTitle: e.target.value})} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Content (HTML allowed)</label>
            <textarea value={editing.content || ""} onChange={e => setEditing({...editing, content: e.target.value})} rows={12} className="w-full border p-2 rounded font-mono text-sm leading-relaxed" required></textarea>
          </div>
          <div className="flex justify-between items-center">
            <select value={editing.status || "draft"} onChange={e => setEditing({...editing, status: e.target.value})} className="border p-2 rounded">
              <option value="draft">Draft (Hidden)</option>
              <option value="published">Published</option>
            </select>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <button onClick={() => setEditing({ title: '', slug: '', content: '', status: 'draft' })} className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <span>+ Create Post</span>
        </button>
      </div>

      <div className="bg-white rounded shadow-sm border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Slug</th>
              <th className="p-3 w-32">Status</th>
              <th className="p-3 w-32 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(b => (
              <tr key={b.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="p-3 font-medium">{b.title}</td>
                <td className="p-3 text-gray-500 font-mono text-xs">/{b.slug}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs ${b.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-3 text-right space-x-3">
                  <button onClick={() => setEditing(b)} className="text-blue-500 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(b.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-gray-500 border-b">No blogs found. Go create one!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
