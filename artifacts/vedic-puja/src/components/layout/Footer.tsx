import { Flame, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { pujas } from "@/data/pujas";
import { locations } from "@/data/locations";

export function Footer() {
  const popularPujas = pujas.filter(p => ["satyanarayan-puja", "ganesh-puja", "griha-pravesh", "rudrabhishek", "navratri-puja", "diwali-lakshmi-puja", "vivah-puja", "namkaran-ceremony", "havan-puja", "kaal-sarp-dosh-puja"].includes(p.slug));

  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Radhe Radhe<span className="text-primary">Puja</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Bringing authentic Vedic rituals to North Indian families across Bangalore. Hindi-speaking pandits from Varanasi & Haridwar traditions, available 24/7.
            </p>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="tel:+919546308950" className="hover:text-primary transition-colors">+91 95463 08950</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:radhepujabangalore@gmail.com" className="hover:text-primary transition-colors">radhepujabangalore@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Serving all areas of Bangalore</span>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-white">Puja Services</h3>
            <ul className="space-y-2">
              {popularPujas.slice(0, 8).map(puja => (
                <li key={puja.slug}>
                  <Link href={`/puja/${puja.slug}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {puja.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {locations.map(loc => (
                <li key={loc.slug}>
                  <Link href={`/location/${loc.slug}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    Pandit in {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors text-sm">Puja Blog</Link></li>
              <li><Link href="/book" className="text-gray-400 hover:text-primary transition-colors text-sm">Book a Pandit</Link></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors text-sm">All Services</a></li>
              <li><a href="/#pandits" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Pandits</a></li>
              <li><a href="/#how-it-works" className="text-gray-400 hover:text-primary transition-colors text-sm">How It Works</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>

            <h3 className="font-display font-bold text-base mt-6 mb-3 text-white">Popular Blogs</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/griha-pravesh-muhurat-2026" className="text-gray-400 hover:text-primary transition-colors text-sm">Griha Pravesh Muhurat 2026</Link></li>
              <li><Link href="/blog/satyanarayan-puja-vidhi" className="text-gray-400 hover:text-primary transition-colors text-sm">Satyanarayan Puja Vidhi</Link></li>
              <li><Link href="/blog/pandit-cost-bangalore" className="text-gray-400 hover:text-primary transition-colors text-sm">Pandit Cost in Bangalore</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Radhe Radhe Puja Services. All rights reserved. | North Indian Pandit Service in Bangalore</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
