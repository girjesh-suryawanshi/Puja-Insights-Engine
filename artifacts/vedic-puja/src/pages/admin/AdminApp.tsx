import { Route, Switch, useLocation } from "wouter";
import { useAuth } from "../../providers/AuthProvider";
import { AdminLayout } from "./AdminLayout";
import { LoginPage } from "./Login";
import { SettingsEditor } from "./SettingsEditor";
import { BlogsEditor } from "./BlogsEditor";

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
          <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600 leading-relaxed">
              Welcome to your dedicated Admin Portal. Select an option from the sidebar to manage your content and configurations.
            </p>
          </div>
        )} />
        <Route path="/admin/settings" component={SettingsEditor} />
        <Route path="/admin/blogs" component={BlogsEditor} />
        <Route path="/admin/login" component={() => { window.location.href="/admin"; return null; }} />
      </Switch>
    </AdminLayout>
  );
}
