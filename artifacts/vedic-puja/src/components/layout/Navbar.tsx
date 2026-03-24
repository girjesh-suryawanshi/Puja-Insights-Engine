import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Pandits", href: "/#pandits" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || location !== "/"
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">
              Vedic<span className="text-primary">Puja</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/book"
              className="px-6 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Pandit
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-lg text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-center rounded-xl font-semibold bg-primary text-white shadow-md"
              >
                Book a Pandit Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
