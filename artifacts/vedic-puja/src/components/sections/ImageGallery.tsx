import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const galleryImages = [
  {
    src: "images/gallery/user_enhanced/1.png",
    alt: "Vedic Altar with Deities and Flowers",
    title: "Vedic Mandap"
  },
  {
    src: "images/gallery/user_enhanced/2.png",
    alt: "Traditional Altar with Ganesha and Shiva-Parvati",
    title: "Divine Altar"
  },
  {
    src: "images/gallery/user_enhanced/3.png",
    alt: "Sacred Puja Ritual Items",
    title: "Pooja Vidhi"
  },
  {
    src: "images/gallery/user_enhanced/4.jpg",
    alt: "Traditional Puja Decoration",
    title: "Vedic Decor"
  },
  {
    src: "images/gallery/user_enhanced/5.png",
    alt: "Ganesh Puja with Vibrant Garlands",
    title: "Ganesh Vandana"
  },
  {
    src: "images/gallery/user_enhanced/6.png",
    alt: "Satyanarayan Puja Decoration",
    title: "Sacred Altar"
  },
  {
    src: "images/gallery/user_enhanced/7.jpg",
    alt: "Havan and Ritual Preparation",
    title: "Homa Rituals"
  },
  {
    src: "images/gallery/user_enhanced/8.png",
    alt: "Vibrant Puja Offerings",
    title: "Traditional Rituals"
  },
  {
    src: "images/gallery/user_enhanced/9.png",
    alt: "Spiritual Altar with Multiple Deities",
    title: "Divine Presence"
  }
];

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
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function ImageGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="A Glimpse of Sacred Rituals" 
          subtitle="Real photography of traditional puja setups and Vedic ceremonies conducted with complete devotion."
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <img
                src={`${import.meta.env.BASE_URL}${image.src}`}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 transform -rotate-1">
                  Vedic Tradition
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-1 drop-shadow-md">
                  {image.title}
                </h3>
                <p className="text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                   Authentic North Indian Vidhi in Bangalore
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
