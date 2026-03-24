import { Flame, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Vedic<span className="text-primary">Puja</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing divine blessings and authentic Vedic rituals to your doorstep. Our experienced pandits ensure every ceremony is performed with utmost devotion and scriptural accuracy.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="/#pandits" className="text-gray-400 hover:text-primary transition-colors">Our Pandits</a></li>
              <li><a href="/#how-it-works" className="text-gray-400 hover:text-primary transition-colors">How It Works</a></li>
              <li><Link href="/book" className="text-gray-400 hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Delhi NCR</li>
              <li>Mumbai</li>
              <li>Bangalore</li>
              <li>Pune</li>
              <li>Hyderabad</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>blessings@vedicpuja.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>108 Spiritual Lane, Kashi Vishwanath Road, Varanasi, UP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Vedic Puja Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
