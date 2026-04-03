import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Flame, ChevronDown, ChevronRight, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { pujas } from "@/data/pujas";
import { locations } from "@/data/locations";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { InstallGuide } from "@/components/pwa/InstallGuide";

const categoryLabels: Record<string, string> = {
  puja: "Puja Services",
  "life-event": "Life Events",
  dosh: "Dosh & Shanti",
  havan: "Havan & Yajna"
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isInstallable, isIOS, isStandalone, handleInstall } = usePWAInstall();
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleInstallClick = async () => {
    if (isInstallable) {
      await handleInstall();
    } else {
      // Fallback for iOS or when native prompt isn't ready
      setIsGuideOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  const pujasByCategory = Object.entries(categoryLabels).map(([cat, label]) => ({
    category: cat,
    label,
    items: pujas.filter(p => p.category === cat)
  }));

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", dropdown: "services" },
    { name: "Locations", dropdown: "locations" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const isOnLightBg = isScrolled || isMobileMenuOpen || location !== "/";

  return (
    <header
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOnLightBg ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">
              Radhe Radhe<span className="text-primary">Puja</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown!)}
                    className="flex items-center gap-1 font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl border border-border overflow-hidden"
                        style={{ minWidth: item.dropdown === "services" ? "640px" : "320px" }}
                      >
                        {item.dropdown === "services" && (
                          <div className="p-4 grid grid-cols-2 gap-2">
                            {pujasByCategory.map(({ category, label, items }) => (
                              <div key={category}>
                                <div className="px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wider">{label}</div>
                                {items.slice(0, 5).map(puja => (
                                  <Link key={puja.slug} href={`/puja/${puja.slug}`}>
                                    <div className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">
                                      {puja.name}
                                    </div>
                                  </Link>
                                ))}
                                {items.length > 5 && (
                                  <Link href="/#services">
                                    <div className="px-3 py-1.5 text-xs text-primary font-medium hover:underline cursor-pointer">
                                      +{items.length - 5} more →
                                    </div>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {item.dropdown === "locations" && (
                          <div className="p-3">
                            <div className="px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">Bangalore Areas</div>
                            <div className="grid grid-cols-2 gap-1">
                              {locations.map(loc => (
                                <Link key={loc.slug} href={`/location/${loc.slug}`}>
                                  <div className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">
                                    {loc.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <Link href="/locations" onClick={() => setActiveDropdown(null)}>
                              <div className="px-3 py-2 mt-1 text-xs text-primary font-bold hover:underline cursor-pointer flex items-center gap-1">
                                View All Areas <ChevronRight className="w-3 h-3" />
                              </div>
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              href="/book"
              className="px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              Book a Pandit
            </Link>
            {!isStandalone && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap group"
              >
                <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Install App
              </button>
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <InstallGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} isIOS={isIOS} />

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="font-medium text-lg text-foreground hover:text-primary transition-colors py-2 block">Home</a>
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "services-mobile" ? null : "services-mobile")}
                  className="flex items-center justify-between w-full font-medium text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === "services-mobile" ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === "services-mobile" && (
                  <div className="pl-4 space-y-1 mb-2">
                    {pujasByCategory.map(({ category, label, items }) => (
                      <div key={category} className="mb-3">
                        <div className="text-xs font-bold text-primary uppercase tracking-wider py-1">{label}</div>
                        {items.map(puja => (
                          <Link key={puja.slug} href={`/puja/${puja.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                            <a className="py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors block">{puja.name}</a>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "locations-mobile" ? null : "locations-mobile")}
                  className="flex items-center justify-between w-full font-medium text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  <span>Locations</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === "locations-mobile" ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === "locations-mobile" && (
                  <div className="pl-4 grid grid-cols-2 gap-1 mb-2">
                    {locations.map(loc => (
                      <Link key={loc.slug} href={`/location/${loc.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <a className="py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors block">{loc.name}</a>
                      </Link>
                    ))}
                    <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)}>
                      <a className="py-2 text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                        View All Areas <ChevronRight className="w-3 h-3" />
                      </a>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="font-medium text-lg text-foreground hover:text-primary transition-colors py-2 block">Blog</a>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <a className="font-medium text-lg text-foreground hover:text-primary transition-colors py-2 block">About</a>
              </Link>
              <Link
                href="/book"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a className="px-6 py-3 text-center rounded-xl font-semibold bg-primary text-white shadow-md mt-2 block">
                  Book a Pandit Now
                </a>
              </Link>
              {!isStandalone && (
                <button
                  onClick={() => {
                    handleInstallClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200 mt-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Install Radhe Puja App
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
