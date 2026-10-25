import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Flame, Heart, Home as HomeIcon, Sparkles, BookOpen, 
  CalendarDays, MapPin, Star, Send, Phone, Mail, Clock, ChevronRight
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pujas } from "@/data/pujas";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { MetaTags } from "@/components/seo/MetaTags";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

import { useState } from "react";
import { QuickBookingModal } from "@/components/booking/QuickBookingModal";
import { trackBookingSuccess } from "@/lib/analytics";

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};


const steps = [
  { icon: BookOpen, title: "Select a Puja", desc: "Browse our comprehensive list of Vedic ceremonies and choose the one you need." },
  { icon: CalendarDays, title: "Book Date & Time", desc: "Pick a date and enter your location details through our simple booking form." },
  { icon: MapPin, title: "Pandit Arrives", desc: "Our verified Pandit will arrive at your home with all necessary puja samagri." },
];

const testimonials = [
  { name: "Suresh Hegde", city: "HSR Layout, Bangalore", text: "Pandit Diwakar Pandey ji conducted our Griha Pravesh ceremony with such devotion. His explanation of every mantra in Hindi was very helpful for our family.", rating: 5 },
  { name: "Priya Nair", city: "Whitefield, Bangalore", text: "Finding a North Indian Pandit in Bangalore was difficult until we found Radhe Radhe Puja. Pandit ji was very professional and brought all the samagri.", rating: 5 },
  { name: "Amit Kulkarni", city: "Indiranagar, Bangalore", text: "Very prompt service. Pandit Diwakar ji is highly knowledgeable. The Satyanarayan Puja was performed beautifully with traditional Vedic rituals.", rating: 5 },
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

export default function Home() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmitContact = (data: z.infer<typeof contactSchema>) => {
    contactMutation.mutate(
      { data },
      {
        onSuccess: () => {
          trackBookingSuccess(data.subject);
          toast({
            title: "Message Sent!",
            description: "We will get back to you shortly.",
          });
          reset();
          window.location.href = `/thank-you?puja=${encodeURIComponent(data.subject)}`;
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive"
          });
        }
      }
    );
  };

  return (
    <div className="overflow-hidden">
      <QuickBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <MetaTags 
        title="North Indian Pandit in Bangalore | Hindi Pandit for Griha Pravesh & Puja"
        description="Book verified North Indian Pandit in Bangalore for Griha Pravesh Puja, Satyanarayan Puja, Rudrabhishek & Marriage. Hindi-speaking Pandit Ji with complete Pooja Samagri available across Whitefield, HSR Layout, Electronic City & all Bengaluru areas."
        keywords="north indian pandit in bangalore, hindi pandit in bangalore, pandit in bangalore, pandit for griha pravesh puja in bangalore, pandit for puja in bangalore, pandit ji in bangalore, book pandit in bangalore, pandit for satyanarayan puja in bangalore, north indian pandit for griha pravesh puja in bangalore, north indian pandit for puja in bangalore, griha pravesh puja pandit in bangalore, best pandit in bangalore, griha pravesh puja in bangalore, north pandit in bangalore, north indian pandit ji in bangalore, griha pravesh pooja bangalore, satyanarayan puja pandit in bangalore, satyanarayan puja in bangalore, pooja services in bangalore, north indian pandit in bangalore for marriage, hindi pandit bangalore, rudrabhishek puja in bangalore, hindu pandit in bangalore, pandit for griha pravesh in bangalore, pandit for marriage in bangalore, best hindi pandit in bangalore, griha pravesh puja bangalore, griha pravesh bangalore, pooja in bangalore, pandit for shradh puja in bangalore, puja bangalore, rudrabhishek in bangalore, bangalore puja, shradh puja in bangalore, bengaluru puja, pooja samagri bangalore"
        canonical="/"
      />
      <LocalBusinessSchema />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              srcSet={`${import.meta.env.BASE_URL}images/hero-bg.webp`}
              type="image/webp"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
              alt="Traditional Vedic puja ceremony background with sacred flowers and lamps"
              className="w-full h-full object-cover opacity-90"
              loading="eager"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span variants={fadeIn} className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
                🕉️ Trusted by 10,000+ Families
              </motion.span>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
                Divine Blessings at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Your Doorstep</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                Book Pandit Diwakar Pandey, an experienced, verified North Indian Pandit for authentic Radhe Radhe Pujas and rituals right at your home.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer"
                >
                  Book a Pandit Now
                </button>
                <a 
                  href="#services" 
                  className="px-8 py-4 rounded-xl font-bold text-lg bg-white border-2 border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
                >
                  Explore Services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Verified Pandit", value: "Verified", desc: "Rigorous background checks" },
              { label: "Experience", value: "20+ Yrs", desc: "Deep Vedic knowledge" },
              { label: "Transparent Pricing", value: "100%", desc: "No hidden charges" },
              { label: "Samagri Included", value: "Optional", desc: "We can bring everything" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-bold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Sacred Services" 
            subtitle="Authentic Vedic rituals tailored to your spiritual and astrological needs." 
          />
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {pujas.map((puja) => (
              <motion.div key={puja.slug} variants={fadeIn}>
                <Link href={`/puja/${puja.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${puja.image.replace(/^\//, "")}`}
                        alt={puja.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-xs text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {puja.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{puja.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 flex-grow line-clamp-2">{puja.tagline}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm font-bold text-primary">{puja.price}</span>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Details <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background image */}
        <div className="absolute right-0 top-0 w-1/3 opacity-5 pointer-events-none">
          <img src={`${import.meta.env.BASE_URL}images/puja-items.png`} alt="" className="w-full object-cover" loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="How to Book" subtitle="Simple, transparent, and hassle-free booking process." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANDIT PROFILES */}
      <section id="pandits" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Esteemed Vedic Acharya & Spiritual Guide" subtitle="A highly qualified scholar with deep roots in Varanasi's Vedic traditions." />
          
          <div className="flex flex-col items-center">
            {[
              { 
                img: "pandit-1.png", 
                name: "Pandit Diwakar Pandey", 
                exp: "20+ Years", 
                spec: "All Vedic Pujas, Vastu & Havan", 
                location: "Bangalore",
                bio: "Acharya Diwakar Pandey is the spiritual cornerstone of Radhe Radhe Puja, bringing generations of Vedic wisdom from Varanasi to the families of Bangalore. Specialist in conducting traditional ceremonies with complete scriptural purity, he has personally performed over 5,000+ rituals, becoming a trusted guide for the North Indian community in Karnataka."
              },
            ].map((pandit, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary/10 group hover:shadow-orange-500/10 transition-all max-w-5xl mx-auto flex flex-col md:flex-row items-stretch">
                <div className="w-full md:w-2/5 h-80 md:h-auto overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${pandit.img}`} 
                    alt={pandit.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 md:hidden">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-wider">Vedic Acharya & Spiritual Guide</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="hidden md:block">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Vedic Acharya & Spiritual Guide</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{pandit.name}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" /> {pandit.exp}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {pandit.location}</span>
                    <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-accent fill-accent" /> 5.0 (450+ Reviews)</span>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {pandit.bio}
                    </p>
                    <p className="text-foreground/80 font-medium italic border-l-4 border-primary pl-4 py-1">
                      "Radhe Radhe Puja is not just a service, it's our commitment to keeping your ancestral traditions alive, even far from home."
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center gap-6">
                    <div>
                      <p className="text-xs uppercase font-bold text-muted-foreground mb-1 tracking-widest">Expertise</p>
                      <p className="text-sm font-semibold">{pandit.spec}</p>
                    </div>
                    <Link href="/book" className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Book with {pandit.name.split(' ')[1]} Ji <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageGallery />
      
      {/* TESTIMONIALS */}
      <section className="py-20 bg-primary text-primary-foreground relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Devotees Say" subtitle="Read the experiences of families we've served." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{test.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{test.name}</div>
                    <div className="text-sm opacity-80">{test.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Get in Touch" subtitle="Have questions about a specific puja or need customized services? Send us a message." align="left" />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us 24/7</div>
                    <div className="font-bold text-lg">+91 95463 08950</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="font-bold text-lg">radhepujabangalore@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              <form id="lead-contact-form" onSubmit={handleSubmit(onSubmitContact)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input 
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input 
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Inquiry about..."
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {contactMutation.isPending ? "Sending..." : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
