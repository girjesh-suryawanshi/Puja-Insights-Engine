import { useEffect, useState } from "react";

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
  const [newType, setNewType] = useState("tracking_script");
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl max-auto">
      <h1 className="text-3xl font-bold mb-6">Site Settings & Tracking scripts</h1>
      
      <form onSubmit={handleAdd} className="bg-white p-6 rounded shadow-sm border mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Setting</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select value={newType} onChange={e=>setNewType(e.target.value)} className="w-full border p-2 rounded">
              <option value="tracking_script">Tracking Script (GTM/Pixel)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Key / Identifier</label>
            <input type="text" value={newKey} onChange={e=>setNewKey(e.target.value)} placeholder="e.g. phone_number or google_ads" className="w-full border p-2 rounded" required />
          </div>
        </div>
        
        {newType === "tracking_script" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Script Injection Location</label>
            <select value={newLocation} onChange={e=>setNewLocation(e.target.value)} className="w-full border p-2 rounded">
              <option value="head">&lt;head&gt; section</option>
              <option value="body">&lt;body&gt; section (end)</option>
            </select>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Value / Script Content</label>
          <textarea value={newValue} onChange={e=>setNewValue(e.target.value)} rows={3} className="w-full border p-2 rounded font-mono text-sm" required></textarea>
        </div>
        
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Add Setting</button>
      </form>

      <div className="bg-white rounded shadow-sm border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3">Key</th>
              <th className="p-3">Type</th>
              <th className="p-3">Value Preview</th>
              <th className="p-3 w-32">Status</th>
              <th className="p-3 w-24">Actions</th>
            </tr>
          </thead>
          <tbody>
            {settings.map(s => (
              <tr key={s.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="p-3 font-medium">{s.key}</td>
                <td className="p-3 text-gray-500">{s.type}{s.type === 'tracking_script' ? ` (${s.injectionLocation})` : ''}</td>
                <td className="p-3 font-mono text-xs text-gray-500 truncate max-w-xs">{s.value.substring(0, 50)}{s.value.length > 50 ? '...' : ''}</td>
                <td className="p-3">
                  <button onClick={() => toggleActive(s)} className={`px-2 py-1 rounded text-xs ${s.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {s.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="p-3">
                  <button onClick={() => handleDelete(s.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {settings.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">No settings found. Add one above.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
