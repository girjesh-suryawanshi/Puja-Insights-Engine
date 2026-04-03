import { Route, Switch, useLocation, Link } from "wouter";
import { useAuth } from "../../providers/AuthProvider";
import { AdminLayout } from "./AdminLayout";
import { LoginPage } from "./Login";
import { SettingsEditor } from "./SettingsEditor";
import { BlogsEditor } from "./BlogsEditor";
import { UsersEditor } from "./UsersEditor";
import { BookingsManager } from "./BookingsManager";
import { InquiriesManager } from "./InquiriesManager";

export default function AdminApp() {
  const { user, loading } = useAuth();
  const [location] = useLocation();

  if (loading) return null;

  const isLoginRoute = location === "/admin/login";

  if (!user && !isLoginRoute) {
    window.location.href = "/admin/login";
    return null;
  }

  if (!user && isLoginRoute) {
    return <LoginPage />;
  }

  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin" component={() => (
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Overview</h1>
            <p className="text-gray-500 text-lg mb-10">Welcome to Puja Panel, {user?.email}.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/admin/bookings">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer group">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Bookings</h3>
                  <p className="text-gray-500 text-sm">Monitor spiritual service requests and schedules.</p>
                </div>
              </Link>

              <Link href="/admin/contacts">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Inquiries</h3>
                  <p className="text-gray-500 text-sm">Access and download customer message history.</p>
                </div>
              </Link>

              <Link href="/admin/blogs">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer group">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Content Manager</h3>
                  <p className="text-gray-500 text-sm">Publish and edit SEO optimized blog posts.</p>
                </div>
              </Link>
            </div>
          </div>
        )} />
        <Route path="/admin/bookings" component={BookingsManager} />
        <Route path="/admin/contacts" component={InquiriesManager} />
        <Route path="/admin/settings" component={SettingsEditor} />
        <Route path="/admin/users" component={UsersEditor} />
        <Route path="/admin/blogs" component={BlogsEditor} />
        <Route path="/admin/login" component={() => { window.location.href="/admin"; return null; }} />
      </Switch>
    </AdminLayout>
  );
}
