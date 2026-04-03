import { Link, useLocation } from "wouter";
import { LayoutDashboard, FileText, Settings, Users, Calendar, MessageSquare, LogOut } from "lucide-react";

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
            <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === '/admin' ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </a>
          </Link>
          <Link href="/admin/bookings">
            <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === '/admin/bookings' ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <Calendar className="w-4 h-4" />
              <span>Bookings</span>
            </a>
          </Link>
          <Link href="/admin/contacts">
            <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === '/admin/contacts' ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <MessageSquare className="w-4 h-4" />
              <span>Inquiries</span>
            </a>
          </Link>
          <Link href="/admin/blogs">
            <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === '/admin/blogs' ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <FileText className="w-4 h-4" />
              <span>Content Manager</span>
            </a>
          </Link>
          <Link href="/admin/settings">
            <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === '/admin/settings' ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <Settings className="w-4 h-4" />
              <span>Site Configuration</span>
            </a>
          </Link>
          <Link href="/admin/users">
            <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === '/admin/users' ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <Users className="w-4 h-4" />
              <span>Team Access</span>
            </a>
          </Link>
          
          <div className="mt-auto border-t border-gray-800 pt-4">
            <button onClick={handleLogout} className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-all font-bold">
              <LogOut className="w-4 h-4" />
              <span>Sign Out securely</span>
            </button>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto w-full md:w-auto mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}
