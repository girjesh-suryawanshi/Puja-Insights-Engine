import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, Award, Users, Heart, CheckCircle, Phone } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Families Served" },
  { value: "15+ Years", label: "Combined Experience" },
  { value: "50+", label: "Pandit Partners" },
  { value: "33+", label: "Puja Services" },
];

const pandits = [
  {
    name: "Pt. Ramesh Sharma",
    role: "Senior Pandit",
    experience: "20 Years Experience",
    specialty: "Griha Pravesh, Vivah, Rudrabhishek",
    origin: "Varanasi, UP",
    rating: 4.9,
  },
  {
    name: "Pt. Suresh Mishra",
    role: "Vedic Specialist",
    experience: "15 Years Experience",
    specialty: "Navgraha Puja, Dosh Nivaran, Havan",
    origin: "Haridwar, Uttarakhand",
    rating: 4.8,
  },
  {
    name: "Pt. Anil Tiwari",
    role: "Karmakanda Expert",
    experience: "12 Years Experience",
    specialty: "Satyanarayan Katha, Navratri, Sundarkand",
    origin: "Mathura, UP",
    rating: 4.9,
  },
];

const values = [
  {
    icon: Heart,
    title: "Devotion First",
    description: "Every puja we perform is approached with genuine devotion — not just as a service, but as a sacred duty."
  },
  {
    icon: CheckCircle,
    title: "Scriptural Authenticity",
    description: "We follow Vedic scriptures precisely. No shortcuts, no abbreviations — complete vidhi as prescribed by our ancient texts."
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "We understand the North Indian community in Bangalore — our pandits know your regional traditions, dialects, and customs."
  },
  {
    icon: Award,
    title: "Experience You Can Trust",
    description: "Our pandit network comprises priests with 10–25 years of experience, trained at institutions in Varanasi, Haridwar, and Mathura."
  }
];

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 via-amber-50 to-orange-50 py-20 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            🙏 About VedicPuja
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Best Pandit Service for<br />
            <span className="text-primary">North Indian Families in Bangalore</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VedicPuja was founded with one simple mission: to ensure that North Indian families living in Bangalore never have to compromise on the authenticity of their sacred rituals. We bring experienced, Hindi-speaking pandits from the Varanasi and Haridwar traditions directly to your doorstep.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  VedicPuja was born out of a personal experience. Our founder — a North Indian professional who had moved to Bangalore for work — was planning his Griha Pravesh puja in his new Whitefield apartment. He called multiple local puja services but found that most pandits were South Indian and performed the ceremony in a way that felt unfamiliar to his family visiting from Varanasi.
                </p>
                <p>
                  That day, he realized that thousands of North Indian families in Bangalore faced the same challenge — the desire to maintain authentic Vedic traditions but struggling to find pandits who understood North Indian rituals, could recite the Satyanarayan Katha in proper Hindi, or knew the regional variations of different ceremonies.
                </p>
                <p>
                  VedicPuja was built to solve this problem. We partner exclusively with experienced North Indian pandits — trained in Varanasi, Haridwar, Mathura, and Ayodhya traditions — who are based in Bangalore and serve all major residential areas of the city.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-white border border-border rounded-2xl shadow-sm"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Pandits */}
      <div className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Meet Our Pandits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our pandits are handpicked from the most respected Vedic traditions in North India. Each has undergone rigorous training and has years of practical experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pandits.map((pandit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  🙏
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{pandit.name}</h3>
                <div className="text-primary text-sm font-medium mb-1">{pandit.role}</div>
                <div className="text-muted-foreground text-xs mb-3">{pandit.origin}</div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(pandit.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">{pandit.rating}</span>
                </div>
                <div className="text-xs text-muted-foreground bg-primary/5 rounded-lg p-2.5 mb-2">
                  <span className="font-medium text-foreground">Specializes in:</span> {pandit.specialty}
                </div>
                <div className="text-xs font-medium text-primary">{pandit.experience}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "You Book", desc: "Fill our simple booking form with puja type, date, and your Bangalore address." },
              { step: "2", title: "We Confirm", desc: "Our team calls within 2 hours to confirm pandit details and any special requirements." },
              { step: "3", title: "Pandit Arrives", desc: "On the day, your Hindi pandit arrives on time with all samagri and ritual materials." },
              { step: "4", title: "Divine Blessings", desc: "Complete puja performed with authentic Vedic vidhi. Prasad distributed. Ashirvad given." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold font-display mx-auto mb-4 shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">We Serve All of Bangalore</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Our pandits are stationed across Bangalore for quick response times in every area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {["Whitefield", "Electronic City", "Marathahalli", "BTM Layout", "Indiranagar", "HSR Layout", "Yelahanka", "Hebbal", "Sarjapur Road", "Koramangala", "JP Nagar", "Jayanagar", "Banashankari", "Rajajinagar", "Malleshwaram"].map(area => (
              <div key={area} className="text-center py-3 px-4 bg-primary/5 rounded-xl text-sm text-foreground hover:bg-primary/10 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Book a Pandit?</h2>
          <p className="text-muted-foreground mb-8">Join 10,000+ North Indian families in Bangalore who trust VedicPuja for their sacred rituals.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book" className="px-8 py-3.5 rounded-full font-semibold bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Book a Pandit Now
            </Link>
            <a href="tel:+919876543210" className="px-8 py-3.5 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
