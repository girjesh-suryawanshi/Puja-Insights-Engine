import { Route, Switch, useLocation } from "wouter";
import { useAuth } from "../../providers/AuthProvider";
import { AdminLayout } from "./AdminLayout";
import { LoginPage } from "./Login";
import { SettingsEditor } from "./SettingsEditor";
import { BlogsEditor } from "./BlogsEditor";
import { UsersEditor } from "./UsersEditor";

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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Content Manager</h3>
                <p className="text-gray-500 text-sm">Publish and edit SEO optimized blog posts.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Site Configuration</h3>
                <p className="text-gray-500 text-sm">Control global tracking IDs and business numbers.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Team Access</h3>
                <p className="text-gray-500 text-sm">Onboard new admins and manage dashboard roles.</p>
              </div>
            </div>
          </div>
        )} />
        <Route path="/admin/settings" component={SettingsEditor} />
        <Route path="/admin/users" component={UsersEditor} />
        <Route path="/admin/blogs" component={BlogsEditor} />
        <Route path="/admin/login" component={() => { window.location.href="/admin"; return null; }} />
      </Switch>
    </AdminLayout>
  );
}
