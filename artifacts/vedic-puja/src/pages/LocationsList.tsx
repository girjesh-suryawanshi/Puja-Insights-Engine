import { motion } from "framer-motion";
import { Link } from "wouter";
import { locations } from "@/data/locations";
import { MapPin, ChevronRight, Sparkles } from "lucide-react";

export function LocationsList() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            📍 Service Areas
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Pandit Services Across <span className="text-primary">Bangalore</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Radhe Radhe Puja provides experienced North Indian pandits for all Vedic rituals across all major residential areas of Bangalore.
          </motion.p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/location/${loc.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${loc.image.replace(/^\//, "")}`}
                        alt={`Pandit in ${loc.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-lg">{loc.name}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                        {loc.metaDescription}
                      </p>
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" /> Book Pandit
                        </span>
                        <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-display font-bold mb-6">Don't see your area listed?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide services across all of Bangalore. Contact us directly to book a pandit for your specific location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-3.5 rounded-full font-bold bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Now
            </Link>
            <a
              href="tel:+919546308950"
              className="px-8 py-3.5 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200"
            >
              Call Pandit ji
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
