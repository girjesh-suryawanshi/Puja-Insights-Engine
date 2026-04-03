import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "@/pages/not-found";
import { AuthProvider } from "./providers/AuthProvider";
import { SettingsProvider } from "./providers/SettingsProvider";
import React, { Suspense } from "react";

// Code Splitting for non-initial routes
const Book = React.lazy(() => import("./pages/Book"));
const PujaDetail = React.lazy(() => import("./pages/PujaDetail"));
const LocationPage = React.lazy(() => import("./pages/LocationPage").then(m => ({ default: m.LocationPage })));
const BlogPostPage = React.lazy(() => import("./pages/BlogPost").then(m => ({ default: m.BlogPostPage })));
const BlogList = React.lazy(() => import("./pages/BlogList").then(m => ({ default: m.BlogList })));
const About = React.lazy(() => import("./pages/About").then(m => ({ default: m.About })));

const AdminApp = React.lazy(() => import("./pages/admin/AdminApp"));

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/book">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><Book /></Suspense>
          </Route>
          <Route path="/puja/:slug">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><PujaDetail /></Suspense>
          </Route>
          <Route path="/location/:slug">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><LocationPage /></Suspense>
          </Route>
          <Route path="/blog">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><BlogList /></Suspense>
          </Route>
          <Route path="/blog/:slug">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><BlogPostPage /></Suspense>
          </Route>
          <Route path="/about">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><About /></Suspense>
          </Route>
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
