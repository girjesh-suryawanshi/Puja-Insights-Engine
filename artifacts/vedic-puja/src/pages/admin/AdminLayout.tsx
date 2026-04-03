import { Link, useLocation } from "wouter";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 flex-col md:flex-row overflow-hidden fixed top-0 left-0 right-0 bottom-0 z-50">
      <aside className="w-full md:w-64 bg-gray-900 text-gray-300 border-r shadow-xl flex flex-col h-full">
        <div className="p-6 text-2xl font-black border-b border-gray-800 tracking-tight text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 shadow-lg shadow-orange-500/30"></div>
          Puja<span className="text-orange-500 font-medium">Panel</span>
        </div>
        <nav className="p-4 flex flex-col gap-1.5 flex-grow font-medium">
          <Link href="/admin">
            <a className={`block px-4 py-2.5 rounded-lg transition-all ${location === '/admin' ? 'bg-orange-500/10 text-orange-400' : 'hover:bg-gray-800 hover:text-white'}`}>Overview</a>
          </Link>
          <Link href="/admin/blogs">
            <a className={`block px-4 py-2.5 rounded-lg transition-all ${location === '/admin/blogs' ? 'bg-orange-500/10 text-orange-400' : 'hover:bg-gray-800 hover:text-white'}`}>Content Manager</a>
          </Link>
          <Link href="/admin/settings">
            <a className={`block px-4 py-2.5 rounded-lg transition-all ${location === '/admin/settings' ? 'bg-orange-500/10 text-orange-400' : 'hover:bg-gray-800 hover:text-white'}`}>Site Configuration</a>
          </Link>
          <Link href="/admin/users">
            <a className={`block px-4 py-2.5 rounded-lg transition-all ${location === '/admin/users' ? 'bg-orange-500/10 text-orange-400' : 'hover:bg-gray-800 hover:text-white'}`}>Team Access</a>
          </Link>
          
          <div className="mt-auto border-t border-gray-800 pt-4">
            <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-red-400 hover:bg-red-500/10 rounded-lg transition-all">Sign Out securely</button>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto w-full md:w-auto mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}
