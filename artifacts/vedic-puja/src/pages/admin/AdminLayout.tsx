import { Link, useLocation } from "wouter";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 flex-col md:flex-row overflow-hidden fixed top-0 left-0 right-0 bottom-0 z-50">
      <aside className="w-full md:w-64 bg-white border-r shadow-sm flex flex-col h-full">
        <div className="p-6 text-xl font-bold border-b text-orange-600">Puja Admin</div>
        <nav className="p-4 flex flex-col gap-2 flex-grow">
          <Link href="/admin">
            <a className={`block p-2 rounded font-medium ${location === '/admin' ? 'bg-orange-50 text-orange-700' : 'text-gray-600 hover:bg-gray-100'}`}>Dashboard</a>
          </Link>
          <Link href="/admin/blogs">
            <a className={`block p-2 rounded font-medium ${location === '/admin/blogs' ? 'bg-orange-50 text-orange-700' : 'text-gray-600 hover:bg-gray-100'}`}>Blogs Editor</a>
          </Link>
          <Link href="/admin/settings">
            <a className={`block p-2 rounded font-medium ${location === '/admin/settings' ? 'bg-orange-50 text-orange-700' : 'text-gray-600 hover:bg-gray-100'}`}>Site Settings</a>
          </Link>
          <div className="mt-auto">
            <button onClick={handleLogout} className="w-full text-left p-2 font-medium text-red-600 hover:bg-red-50 rounded">Sign Out</button>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto w-full md:w-auto mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}
