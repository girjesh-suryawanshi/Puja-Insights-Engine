import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle, ChevronRight, Star } from "lucide-react";
import { getLocationBySlug } from "../data/locations";
import { pujas } from "../data/pujas";

export function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug || "");

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Location not found</h1>
          <Link href="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const popularPujaObjects = location.popularPujas
    .map(name => pujas.find(p => p.name === name))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 via-amber-50 to-orange-50 py-16 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{location.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider">Pandit Service</p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Pandit in {location.name}
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">{location.metaDescription}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/book"
              className="px-6 py-3 rounded-full font-semibold bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Pandit in {location.name}
            </a>
            <a
              href="tel:+919876543210"
              className="px-6 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Intro */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                North Indian Pandit Service in {location.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{location.intro}</p>
            </motion.section>

            {/* About Service */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Coverage in {location.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{location.about}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {location.areas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 rounded-lg px-3 py-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Why Choose VedicPuja in {location.name}?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Hindi-speaking pandits who understand your traditions",
                  "Complete samagri included — no need to shop",
                  "Experienced pandits with 10+ years in Vedic rituals",
                  "Available across all areas of " + location.name,
                  "Transparent pricing with no hidden charges",
                  "Same-day and advance booking available",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-border rounded-xl shadow-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Popular Pujas */}
            {popularPujaObjects.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Popular Pujas in {location.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {popularPujaObjects.map((puja: any) => (
                    <Link key={puja.slug} href={`/puja/${puja.slug}`}>
                      <div className="flex items-center gap-4 p-4 bg-white border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={puja.image}
                            alt={puja.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight">{puja.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{puja.price} · {puja.duration}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {/* FAQ */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — {location.name}
              </h2>
              <div className="space-y-4">
                {location.faq.map((item, idx) => (
                  <details key={idx} className="group border border-border rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-primary/5 transition-colors">
                      <span className="font-medium text-foreground pr-4">{item.q}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-2 bg-primary/5">
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-primary rounded-2xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-display font-bold mb-2">
                Book Pandit in {location.name}
              </h3>
              <p className="text-white/80 text-sm mb-6">Hindi-speaking pandits available today</p>
              <div className="space-y-3">
                <a
                  href="/book"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-white text-primary hover:bg-orange-50 transition-colors"
                >
                  Book Online
                </a>
                <a
                  href="tel:+919876543210"
                  className="block w-full text-center py-3 rounded-xl font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-colors"
                >
                  Call: +91 98765 43210
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                {[
                  "Hindi-speaking pandits",
                  "Samagri included",
                  "Same-day booking",
                  "10+ years experience",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">4.9 · 1,200+ reviews</span>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-foreground mb-4">Other Bangalore Areas</h3>
              <div className="space-y-2">
                {["Whitefield", "Electronic City", "Marathahalli", "BTM Layout", "HSR Layout", "Indiranagar", "Yelahanka", "Hebbal", "Sarjapur"]
                  .filter(a => a !== location.name && a !== location.fullName.split(",")[0])
                  .slice(0, 6)
                  .map(area => {
                    const areaSlug = area.toLowerCase().replace(/ /g, "-");
                    return (
                      <Link key={area} href={`/location/${areaSlug}`} className="flex items-center justify-between py-2 border-b border-border last:border-0 text-sm hover:text-primary transition-colors group">
                        <span>{area}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
