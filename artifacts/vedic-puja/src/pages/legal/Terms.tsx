import { motion } from "framer-motion";
import { MetaTags } from "@/components/seo/MetaTags";

export function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <MetaTags 
        title="Terms and Conditions | Radhe Radhe Puja Services"
        description="Terms and Conditions for Radhe Radhe Puja Services. Review our booking and service policy."
        canonical="/terms"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
            <p>Last updated: April 03, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By using our website and pooja services, you agree to these Terms and Conditions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Provided</h2>
              <p>We provide professional North Indian Pandit services and pooja samagri for religious ceremonies in Bangalore. Our services are based on Vedic traditions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Booking & Confirmation</h2>
              <p>Bookings are confirmed only after you receive a message from our team. We reserve the right to decline any booking in case of unavailability.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cancellations & Refunds</h2>
              <p>Cancellations should be made at least 24 hours before the ceremony. We follow a transparent refund policy for prepaid services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
              <p>For any queries regarding these terms, please contact us at +91 95463 08950.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
