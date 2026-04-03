import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, Award, Users, Heart, CheckCircle, Phone } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Families Served" },
  { value: "20+ Years", label: "Teaching Experience" },
  { value: "100%", label: "Authentic Vidhi" },
  { value: "33+", label: "Puja Services" },
];

const pandits = [
  {
    name: "Pt. Diwakar Pandey",
    role: "Vedic Acharya & Spiritual Guide",
    experience: "20 Years Experience",
    specialty: "Vastu, Griha Pravesh, All Vedic Rituals",
    origin: "Serving All Bangalore",
    rating: 5.0,
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
    description: "Our Vedic Acharya & Spiritual Guide, Pandit Diwakar Pandey, has over 20 years of experience, trained at prestigious institutions in Varanasi."
  }
];

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 via-amber-50 to-orange-50 py-20 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            🙏 About Radhe Radhe Puja
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Best Pandit Service for<br />
            <span className="text-primary">North Indian Families in Bangalore</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Radhe Radhe Puja was founded with one simple mission: to ensure that North Indian families living in Bangalore never have to compromise on the authenticity of their sacred rituals. We bring experienced, Hindi-speaking pandits from the Varanasi and Haridwar traditions directly to your doorstep.
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
                  Radhe Radhe Puja was born out of a personal experience. Our founder — a North Indian professional who had moved to Bangalore for work — was planning his Griha Pravesh puja in his new Whitefield apartment. He called multiple local puja services but found that most pandits were South Indian and performed the ceremony in a way that felt unfamiliar to his family visiting from Varanasi.
                </p>
                <p>
                  That day, he realized that thousands of North Indian families in Bangalore faced the same challenge — the desire to maintain authentic Vedic traditions but struggling to find pandits who understood North Indian rituals, could recite the Satyanarayan Katha in proper Hindi, or knew the regional variations of different ceremonies.
                </p>
                <p>
                  Radhe Radhe Puja was built to solve this problem. Our lead acharya, Pt. Diwakar Pandey — highly trained in the Varanasi tradition — is based in Bangalore and serves all major residential areas of the city.
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
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Vedic Acharya & Spiritual Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pandit Diwakar Pandey is an esteemed Vedic scholar from Varanasi, personally ensuring every ritual is performed with complete authenticity.
            </p>
          </div>
          <div className="flex justify-center">
            {pandits.map((pandit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl border border-primary/10 shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl mb-4 shadow-inner">
                    🙏
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">{pandit.name}</h3>
                  <div className="text-primary font-semibold mb-4">{pandit.role}</div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {pandit.experience}
                  </div>
                </div>
                
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h4 className="text-xs uppercase font-bold text-primary tracking-[0.2em] mb-4">Spiritual Leadership</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    Pt. Diwakar Pandey serves as the Vedic Acharya & Spiritual Guide of Radhe Radhe Puja, overseeing the scriptural accuracy and devotional quality of every ritual performed under our name. Born in Varanasi and trained in the ancient Vedic traditions, he brings a level of authenticity and linguistic clarity that is rare to find.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 p-1 rounded-md"><CheckCircle className="w-4 h-4 text-primary" /></div>
                      <div>
                        <span className="font-bold block text-foreground">Varanasi Tradition</span>
                        <span className="text-muted-foreground">Traditional Kashi training in Vedic rituals.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 p-1 rounded-md"><CheckCircle className="w-4 h-4 text-primary" /></div>
                      <div>
                        <span className="font-bold block text-foreground">Complete Samagri Control</span>
                        <span className="text-muted-foreground">Ensures all materials are pure and as per vidhi.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100 italic text-muted-foreground text-sm leading-relaxed">
                    "Our mission at Radhe Radhe Puja is to ensure that every North Indian family in Bangalore feels the same spiritual connection they would feel at their ancestral home in the North. We don't just chant mantras; we invoke the divine with heart and precision."
                  </div>
                </div>
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
              { step: "3", title: "Pandit Arrives", desc: "On the day, Pt. Diwakar Pandey arrives on time with all samagri and ritual materials." },
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
            Pandit Diwakar Pandey travels to all residential and commercial areas across Bangalore to perform authentic Vedic rituals.
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
          <p className="text-muted-foreground mb-8">Join 10,000+ North Indian families in Bangalore who trust Radhe Radhe Puja for their sacred rituals.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book" className="px-8 py-3.5 rounded-full font-semibold bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Book a Pandit Now
            </Link>
            <a href="tel:+919546308950" className="px-8 py-3.5 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 95463 08950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
