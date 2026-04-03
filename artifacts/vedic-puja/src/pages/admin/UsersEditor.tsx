import { useEffect, useState } from "react";

interface UserInfo {
  id: number;
  email: string;
  role: string;
  createdAt: string;
}

export function UsersEditor() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("editor");

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/users");
    if (res.ok) {
      setUsers(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newEmail, password: newPassword, role: newRole })
    });
    
    if (res.ok) {
      setNewEmail("");
      setNewPassword("");
      fetchUsers();
    } else {
      alert("Failed to create user");
    }
  };

  if (loading && users.length === 0) return <div className="text-gray-500">Loading Users...</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-500 mt-2">Create and manage access levels for your administrative team.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Invite New Member
        </h2>
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={newEmail} onChange={e=>setNewEmail(e.target.value)} placeholder="editor@pujainsights.com" className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Temporary Password</label>
            <input type="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">System Role</label>
            <select value={newRole} onChange={e=>setNewRole(e.target.value)} className="w-full border border-gray-300 p-2 rounded-lg outline-none cursor-pointer">
              <option value="editor">Editor (Blogs & Settings)</option>
              <option value="admin">Administrator (Full Access)</option>
            </select>
          </div>
          <div>
            <button type="submit" className="w-full bg-orange-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-700 transition shadow-sm">
              Create User
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Account ID</th>
              <th className="p-4 font-semibold text-gray-700">Email Address</th>
              <th className="p-4 font-semibold text-gray-700">Access Level</th>
              <th className="p-4 font-semibold text-gray-700">Member Since</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.id} className={`${i !== users.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-orange-50/30 transition`}>
                <td className="p-4 font-mono text-gray-500">#{u.id}</td>
                <td className="p-4 font-medium text-gray-900">{u.email}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                    {u.role.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-gray-500">
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
