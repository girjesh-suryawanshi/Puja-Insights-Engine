import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Settings, Users, Calendar, MessageSquare, LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/admin", icon: LayoutDashboard, label: "Overview" },
    { href: "/admin/bookings", icon: Calendar, label: "Bookings" },
    { href: "/admin/contacts", icon: MessageSquare, label: "Inquiries" },
    { href: "/admin/blogs", icon: FileText, label: "Content Manager" },
    { href: "/admin/settings", icon: Settings, label: "Site Configuration" },
    { href: "/admin/users", icon: Users, label: "Team Access" },
  ];

  return (
    <div className="flex h-screen w-screen bg-gray-50 overflow-hidden relative">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 text-white fixed top-0 w-full z-40 border-b border-gray-800 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-red-600"></div>
          <span className="font-bold tracking-tight">PujaPanel</span>
        </div>
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-1.5 rounded-md hover:bg-gray-800 transition-colors"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar Overlay (Mobile only) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar (Desktop Persistent / Mobile Drawer) */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-gray-300 border-r border-gray-800 shadow-xl flex flex-col h-full
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-6 text-2xl font-black border-b border-gray-800 tracking-tight text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 shadow-lg shadow-orange-500/30 shrink-0"></div>
          <span className="truncate">Puja<span className="text-orange-500 font-medium">Panel</span></span>
        </div>
        
        <nav className="p-4 flex flex-col gap-1.5 flex-grow font-medium overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-medium ${location === link.href ? 'bg-orange-500/10 text-orange-500 shadow-sm border border-orange-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            </Link>
          ))}
          
          <div className="mt-auto border-t border-gray-800 pt-4">
            <button onClick={handleLogout} className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-all font-bold">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full relative overflow-y-auto pt-16 md:pt-0">
        <div className="p-4 md:p-8 max-w-full overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
