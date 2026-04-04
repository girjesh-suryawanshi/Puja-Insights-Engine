import { useEffect, useState } from "react";
import { Plus, Trash2, Power, Globe, Shield, Code } from "lucide-react";

interface Setting {
  id: number;
  type: string;
  key: string;
  value: string;
  injectionLocation: string | null;
  isActive: boolean;
}

export function SettingsEditor() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newType, setNewType] = useState("general_config");
  const [newLocation, setNewLocation] = useState("head");

  const fetchSettings = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/settings");
    if (res.ok) {
      setSettings(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: newKey, value: newValue, type: newType,
        injectionLocation: newType === 'tracking_script' ? newLocation : null
      })
    });
    setNewKey(""); setNewValue("");
    fetchSettings();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    await fetch(`/api/admin/settings/${id}`, { method: "DELETE" });
    fetchSettings();
  };

  const toggleActive = async (setting: Setting) => {
    await fetch(`/api/admin/settings/${setting.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...setting, isActive: !setting.isActive })
    });
    fetchSettings();
  };

  const presetKeys = [
    { key: "google_site_verification", label: "Google Search Console (v1)", type: "general_config" },
    { key: "google_analytics_id", label: "Google Analytics (G-XXXX)", type: "tracking_script" },
    { key: "site_title_suffix", label: "Title Suffix", type: "general_config" },
  ];

  if (loading) return <div className="p-12 text-center text-muted-foreground animate-pulse">Loading core configurations...</div>;

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-black tracking-tight text-gray-900 mb-2">Platform Configuration</h1>
        <p className="text-gray-500 text-lg">Manage SEO tags, tracking scripts, and global site behavior.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <form onSubmit={handleAdd} className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-orange-500" />
              New Entry
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Config Type</label>
                <select value={newType} onChange={e=>setNewType(e.target.value)} className="w-full border-gray-200 border p-3 rounded-xl focus:ring-2 focus:ring-orange-500/20 transition-all font-medium">
                  <option value="general_config">General Config (SEO/Text)</option>
                  <option value="tracking_script">Tracking Script (JS)</option>
                  <option value="meta_tag">Custom Meta Tag</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Identifier Key</label>
                <input type="text" value={newKey} onChange={e=>setNewKey(e.target.value)} placeholder="e.g. google_verification" className="w-full border-gray-200 border p-3 rounded-xl font-mono text-sm" required />
                <div className="flex flex-wrap gap-1 mt-2">
                  {presetKeys.map(p => (
                    <button key={p.key} type="button" onClick={() => {setNewKey(p.key); setNewType(p.type);}} className="text-[10px] bg-gray-100 hover:bg-orange-100 hover:text-orange-600 px-2 py-0.5 rounded transition-colors text-gray-500">
                      +{p.label}
                    </button>
                  ))}
                </div>
              </div>

              {newType === "tracking_script" && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Placement</label>
                  <select value={newLocation} onChange={e=>setNewLocation(e.target.value)} className="w-full border-gray-200 border p-3 rounded-xl font-medium">
                    <option value="head">Header (Verification/Stats)</option>
                    <option value="body">Footer (Chat/Pixels)</option>
                  </select>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Config Value</label>
                <textarea value={newValue} onChange={e=>setNewValue(e.target.value)} rows={4} className="w-full border-gray-200 border p-3 rounded-xl font-mono text-sm focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder="Enter value or script..." required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl translate-y-0 active:scale-95">
                Apply Change Sync
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50/50 border-b border-gray-100">
                  <tr>
                    <th className="p-4 font-black text-gray-900 uppercase text-[10px] tracking-widest">Key Configuration</th>
                    <th className="p-4 font-black text-gray-900 uppercase text-[10px] tracking-widest">Value Trace</th>
                    <th className="p-4 font-black text-gray-900 uppercase text-[10px] tracking-widest">Status</th>
                    <th className="p-4 font-black text-gray-900 uppercase text-[10px] tracking-widest w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {settings.map(s => (
                    <tr key={s.id} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${s.type === 'tracking_script' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                            {s.type === 'tracking_script' ? <Code className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-sm font-mono">{s.key}</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase">{s.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="max-w-[200px] truncate font-mono text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                          {s.value}
                        </div>
                      </td>
                      <td className="p-4">
                        <button onClick={() => toggleActive(s)} className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all flex items-center gap-1.5 ${s.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                          <Power className="w-3 h-3" />
                          {s.isActive ? "Live" : "Paused"}
                        </button>
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => handleDelete(s.id)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {settings.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-12 text-center text-gray-400 italic font-medium">No custom sync rules established.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
