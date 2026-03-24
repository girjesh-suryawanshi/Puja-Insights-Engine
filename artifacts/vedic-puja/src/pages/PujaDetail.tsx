import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  Clock, IndianRupee, CheckCircle2, Sparkles, BookOpen,
  ChevronRight, Phone, CalendarDays, Star, ArrowLeft, Users
} from "lucide-react";
import { getPujaBySlug, pujas } from "@/data/pujas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateBooking } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  date: z.string().min(1, "Date is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional(),
});

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function PujaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const puja = getPujaBySlug(slug || "");
  const { toast } = useToast();
  const bookingMutation = useCreateBooking();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
  });

  if (!puja) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Puja not found</h1>
        <Link href="/" className="text-primary underline">Go back home</Link>
      </div>
    );
  }

  const relatedPujas = pujas.filter((p) => p.slug !== puja.slug).slice(0, 3);

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    bookingMutation.mutate(
      { data: { ...data, pujaType: puja.name, message: data.message || "" } },
      {
        onSuccess: () => {
          toast({ title: "Booking Confirmed!", description: "Our team will call you shortly to confirm the details." });
          reset();
        },
        onError: () => {
          toast({ title: "Error", description: "Failed to submit booking. Please try again.", variant: "destructive" });
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{puja.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}${puja.image.replace(/^\//, "")}`}
            alt={puja.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to all services
            </Link>
            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              {puja.deity}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">{puja.name}</h1>
            <p className="text-lg text-muted-foreground mb-8">{puja.tagline}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow-sm border border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{puja.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow-sm border border-border">
                <IndianRupee className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{puja.price}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow-sm border border-border">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                <span className="text-sm font-medium ml-1">5.0</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#book-now" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                <CalendarDays className="w-5 h-5" /> Book This Puja
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-white text-foreground border border-border px-7 py-3.5 rounded-xl font-bold text-base hover:bg-muted/50 transition-all">
                <Phone className="w-5 h-5 text-primary" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left — Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" /> About {puja.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">{puja.description}</p>
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm font-semibold text-primary flex items-center gap-2">
                    <Users className="w-4 h-4" /> Best For:
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{puja.bestFor}</p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" /> Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {puja.benefits.map((b) => (
                    <motion.div key={b} variants={fadeIn} className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Rituals & Samagri */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-2xl p-7 shadow-sm border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Rituals Performed</h3>
                  <ul className="space-y-2">
                    {puja.rituals.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">{i + 1}.</span> {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-2xl p-7 shadow-sm border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Puja Samagri Included</h3>
                  <ul className="space-y-2">
                    {puja.samagri.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Right — Booking Sidebar */}
            <div className="lg:col-span-1">
              <div id="book-now" className="sticky top-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                  <div className="bg-primary px-6 py-5">
                    <h3 className="text-white text-lg font-bold">Book {puja.name}</h3>
                    <p className="text-white/80 text-sm mt-1">Fill in your details to confirm</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Full Name *</label>
                      <input {...register("name")} placeholder="Your full name" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Phone *</label>
                      <input {...register("phone")} placeholder="+91 98765 43210" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" />
                      {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Email *</label>
                      <input {...register("email")} placeholder="your@email.com" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Preferred Date *</label>
                      <input type="date" {...register("date")} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" />
                      {errors.date && <p className="text-xs text-destructive mt-1">{errors.date.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">City *</label>
                      <input {...register("city")} placeholder="Your city" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background" />
                      {errors.city && <p className="text-xs text-destructive mt-1">{errors.city.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Full Address *</label>
                      <textarea {...register("address")} rows={2} placeholder="Your complete address" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background resize-none" />
                      {errors.address && <p className="text-xs text-destructive mt-1">{errors.address.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Special Requirements</label>
                      <textarea {...register("message")} rows={2} placeholder="Any special instructions..." className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background resize-none" />
                    </div>
                    <button type="submit" disabled={bookingMutation.isPending} className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all disabled:opacity-60 shadow-md shadow-primary/20">
                      {bookingMutation.isPending ? "Submitting..." : "Confirm Booking"}
                    </button>
                    <p className="text-xs text-muted-foreground text-center">We'll call you within 2 hours to confirm</p>
                  </form>
                </motion.div>

                {/* Contact Card */}
                <div className="mt-4 bg-primary/5 rounded-2xl border border-primary/10 p-5 text-center">
                  <p className="text-sm font-semibold text-foreground mb-2">Need help choosing?</p>
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-primary font-bold text-base">
                    <Phone className="w-5 h-5" /> +91 98765 43210
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Pujas */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Other Pujas You May Need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPujas.map((related) => (
                <Link key={related.slug} href={`/puja/${related.slug}`}>
                  <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${related.image.replace(/^\//, "")}`}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">{related.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{related.tagline}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-primary font-semibold">{related.price}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{related.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
