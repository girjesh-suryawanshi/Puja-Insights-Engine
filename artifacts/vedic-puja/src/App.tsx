import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { MessageCircle } from "lucide-react";
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
const LocationsList = React.lazy(() => import("./pages/LocationsList").then(m => ({ default: m.LocationsList })));
const Privacy = React.lazy(() => import("./pages/legal/Privacy").then(m => ({ default: m.Privacy })));
const Terms = React.lazy(() => import("./pages/legal/Terms").then(m => ({ default: m.Terms })));
const AdminApp = React.lazy(() => import("./pages/admin/AdminApp"));
import { ReloadPrompt } from "./components/pwa/ReloadPrompt";
import { MetaTags } from "./components/seo/MetaTags";
import { LocalBusinessSchema } from "./components/seo/LocalBusinessSchema";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
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
          <Route path="/locations">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><LocationsList /></Suspense>
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
          <Route path="/privacy">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><Privacy /></Suspense>
          </Route>
          <Route path="/terms">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading...</div>}><Terms /></Suspense>
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

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919546308950?text=Namaste%2C%20I%20would%20like%20to%20book%20a%20puja."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 group flex items-center justify-center animate-in fade-in zoom-in duration-500"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-xl text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-gray-100/50 backdrop-blur-sm">
          Chat with Pandit ji
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white animate-pulse" />
      </a>
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
