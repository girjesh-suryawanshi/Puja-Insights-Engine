import { motion } from "framer-motion";
import { MetaTags } from "@/components/seo/MetaTags";

export function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <MetaTags 
        title="Privacy Policy | Radhe Radhe Puja Services"
        description="Privacy Policy for Radhe Radhe Puja Services. Learn how we handle your booking and personal information."
        canonical="/privacy"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
            <p>Last updated: April 03, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>Welcome to Radhe Radhe Puja Services. Respecting your privacy and protecting your personal data is important to us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
              <p>We collect information you provide directly to us when booking a puja, including your name, email address, phone number, and puja location.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
              <p>We use the information to process your bookings, communicate with you about your ceremonies, and improve our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Trust & Security</h2>
              <p>We do not sell your personal data to third parties. We use industry-standard security measures to protect your information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at +91 95463 08950.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
