import { useEffect } from "react";
import { CheckCircle2, Phone, MessageCircle, Home, Calendar } from "lucide-react";
import { trackBookingSuccess, trackWhatsAppClick, trackPhoneCallClick } from "@/lib/analytics";

export function ThankYou() {
  const urlParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const pujaType = urlParams.get("puja") || "Puja Ceremony";

  useEffect(() => {
    trackBookingSuccess(pujaType);
  }, [pujaType]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-orange-50/50 to-background flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-lg border border-orange-100 w-full relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-100/50 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Booking Confirmed!
        </h1>
        
        <div className="bg-orange-50/80 border border-orange-200/60 rounded-2xl p-4 mb-6 text-left">
          <div className="flex items-center gap-3 text-orange-900 font-semibold mb-1">
            <Calendar className="w-5 h-5 text-primary shrink-0" />
            <span>{pujaType}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Our team & Acharya ji will contact you within 15–30 minutes to confirm Muhurat, Samagri list, and Pandit allocation.
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          Need immediate confirmation or custom requests? Feel free to reach out to us directly:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href="https://wa.me/919546308950?text=Namaste%2C%20I%20just%20submitted%20a%20puja%20booking."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("thank_you_page")}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#20bd5a] transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="tel:+919546308950"
            onClick={() => trackPhoneCallClick("thank_you_page")}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Pandit ji</span>
          </a>
        </div>

        <button
          onClick={() => window.location.href = "/"}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary font-medium transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
