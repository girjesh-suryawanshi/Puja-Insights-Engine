import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import PujaDetail from "./pages/PujaDetail";
import { LocationPage } from "./pages/LocationPage";
import { BlogPostPage } from "./pages/BlogPost";
import { BlogList } from "./pages/BlogList";
import { About } from "./pages/About";
import NotFound from "@/pages/not-found";
import { AuthProvider } from "./providers/AuthProvider";
import { SettingsProvider } from "./providers/SettingsProvider";
import React, { Suspense } from "react";

const AdminApp = React.lazy(() => import("./pages/admin/AdminApp"));

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/book" component={Book} />
          <Route path="/puja/:slug" component={PujaDetail} />
          <Route path="/location/:slug" component={LocationPage} />
          <Route path="/blog" component={BlogList} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route path="/about" component={About} />
          <Route path="/admin">
            <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading Admin Panel...</div>}>
              <AdminApp />
            </Suspense>
          </Route>
          <Route path="/admin/*rest">
            <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading Admin Panel...</div>}>
              <AdminApp />
            </Suspense>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;
