import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Flower2, Flame, Heart, Home as HomeIcon, Sparkles, BookOpen, 
  CalendarDays, MapPin, CheckCircle2, Star, Send, Phone, Mail, Clock
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const services = [
  { icon: Flame, name: "Satyanarayan Puja", desc: "For peace, prosperity, and resolving life's difficulties." },
  { icon: HomeIcon, name: "Griha Pravesh", desc: "Auspicious entry into a new home to remove negative energy." },
  { icon: Heart, name: "Marriage Ceremony", desc: "Authentic Vedic rituals for a blissful marital journey." },
  { icon: Flower2, name: "Ganesh Puja", desc: "To remove obstacles before starting any new venture." },
  { icon: Sparkles, name: "Navratri Puja", desc: "Invoke the blessings of Goddess Durga for strength." },
  { icon: BookOpen, name: "Namkaran & Mundan", desc: "Traditional ceremonies for your child's prosperous future." },
];

const steps = [
  { icon: BookOpen, title: "Select a Puja", desc: "Browse our comprehensive list of Vedic ceremonies and choose the one you need." },
  { icon: CalendarDays, title: "Book Date & Time", desc: "Pick a date and enter your location details through our simple booking form." },
  { icon: MapPin, title: "Pandit Arrives", desc: "Our verified Pandit will arrive at your home with all necessary puja samagri." },
];

const testimonials = [
  { name: "Rahul Sharma", city: "Delhi", text: "The pandit ji was highly knowledgeable and explained the significance of every mantra during the Satyanarayan Puja. Very satisfied.", rating: 5 },
  { name: "Priya Desai", city: "Mumbai", text: "Booked them for our Griha Pravesh. Everything was handled professionally. They even brought all the samagri. Highly recommended!", rating: 5 },
  { name: "Amit Verma", city: "Bangalore", text: "Very prompt service and the pricing is completely transparent. The Diwali Puja was conducted beautifully.", rating: 5 },
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
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmitContact = (data: z.infer<typeof contactSchema>) => {
    contactMutation.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent!",
            description: "We will get back to you shortly.",
          });
          reset();
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
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Divine Background" 
            className="w-full h-full object-cover opacity-90"
          />
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
                Book experienced, verified North Indian Pandits for authentic Vedic Pujas and rituals right at your home.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/book" 
                  className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Book a Pandit Now
                </Link>
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
              { label: "Verified Pandits", value: "500+", desc: "Rigorous background checks" },
              { label: "Experience", value: "15+ Yrs", desc: "Deep Vedic knowledge" },
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">{service.name}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/book" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Book Now <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background image */}
        <div className="absolute right-0 top-0 w-1/3 opacity-5 pointer-events-none">
          <img src={`${import.meta.env.BASE_URL}images/puja-items.png`} alt="" className="w-full object-cover" />
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
          <SectionHeading title="Our Esteemed Acharyas" subtitle="Highly qualified pandits with deep roots in Vedic traditions." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "pandit-1.png", name: "Acharya Vishnu Datt", exp: "20+ Years", spec: "Vastu & Marriage" },
              { img: "pandit-2.png", name: "Pandit Ramakant", exp: "15+ Years", spec: "Satyanarayan & Griha Pravesh" },
              { img: "pandit-1.png", name: "Shastri Shivam", exp: "12+ Years", spec: "Astrology & Navratri Puja" },
            ].map((pandit, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${pandit.img}`} 
                    alt={pandit.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground">{pandit.name}</h3>
                  <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {pandit.exp}</span>
                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" /> 5.0</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm"><strong>Expertise:</strong> {pandit.spec}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    <div className="font-bold text-lg">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="font-bold text-lg">blessings@vedicpuja.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmitContact)} className="space-y-4">
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
