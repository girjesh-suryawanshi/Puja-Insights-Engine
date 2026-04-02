import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      window.location.href = "/admin";
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        {error && <div className="mb-4 text-sm text-red-500 bg-red-50 p-2 rounded">{error}</div>}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input className="w-full border border-gray-300 p-2 rounded focus:ring-orange-500 focus:border-orange-500" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input className="w-full border border-gray-300 p-2 rounded focus:ring-orange-500 focus:border-orange-500" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 font-medium transition" type="submit">Login</button>
      </form>
    </div>
  );
}
