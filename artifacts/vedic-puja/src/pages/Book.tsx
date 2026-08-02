import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateBooking } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { trackBookingSuccess } from "@/lib/analytics";
import { MetaTags } from "@/components/seo/MetaTags";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  pujaType: z.string().min(1, "Please select a Puja type"),
  date: z.string().min(1, "Date is required"),
  address: z.string().min(10, "Full address is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional()
});

const PUJA_TYPES = [
  "Satyanarayan Puja",
  "Griha Pravesh",
  "Ganesh Puja",
  "Navratri Puja",
  "Diwali Puja",
  "Shiv Puja",
  "Marriage Ceremony",
  "Mundan Ceremony",
  "Vastu Puja"
];

export default function Book() {
  const { toast } = useToast();
  const createBooking = useCreateBooking();
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    createBooking.mutate(
      { data },
      {
        onSuccess: () => {
          trackBookingSuccess(data.pujaType);
          window.location.href = `/thank-you?puja=${encodeURIComponent(data.pujaType)}`;
        },
        onError: (err) => {
          toast({
            title: "Booking Failed",
            description: "There was an error submitting your booking. Please try again.",
            variant: "destructive"
          });
        }
      }
    );
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-background flex flex-col items-center justify-center px-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md border border-border w-full">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Booking Received!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for booking with us. Our team will contact you shortly to confirm the details and assign a Pandit.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="px-8 py-3 rounded-xl font-bold bg-primary text-white shadow-md hover:shadow-lg transition-all"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <MetaTags
        title="Book Pandit in Bangalore | Online Puja Booking | Radhe Radhe Puja"
        description="Book a verified North Indian Pandit in Bangalore online. Instant confirmation for Griha Pravesh, Satyanarayan Puja, Marriage Puja, Rudrabhishek & all Vedic ceremonies. Hindi-speaking Pandits with complete Samagri across all Bangalore areas."
        keywords="book pandit in bangalore, book hindi pandit bangalore, pandit booking bangalore, online puja booking bangalore, book pandit online, pandit for puja in bangalore"
        canonical="/book"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-center text-white relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10">
              <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Book a Pandit</h1>
              <p className="text-lg opacity-90">Fill in the details below to schedule your sacred ceremony.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8">
            
            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-bold border-b border-border pb-2 mb-4 text-primary">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input 
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    placeholder="E.g. Ramesh Kumar"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input 
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    placeholder="ramesh@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input 
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    placeholder="+91 95463 08950"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Puja Details */}
            <div>
              <h3 className="text-xl font-bold border-b border-border pb-2 mb-4 text-primary">Ceremony Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Puja Type *</label>
                  <select 
                    {...register("pujaType")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none"
                  >
                    <option value="">-- Choose a Ceremony --</option>
                    {PUJA_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.pujaType && <p className="text-red-500 text-sm mt-1">{errors.pujaType.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date *</label>
                  <input 
                    type="date"
                    {...register("date")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-bold border-b border-border pb-2 mb-4 text-primary">Location Details</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Address *</label>
                  <textarea 
                    {...register("address")}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                    placeholder="Flat/House No, Building, Street..."
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">City *</label>
                  <input 
                    {...register("city")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    placeholder="E.g. Delhi"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-semibold mb-2">Any Special Requirements? (Optional)</label>
              <textarea 
                {...register("message")}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                placeholder="E.g. Need samagri, particular muhurat timing..."
              />
            </div>

            <button 
              type="submit"
              disabled={createBooking.isPending}
              className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-secondary text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {createBooking.isPending ? "Submitting Booking..." : "Confirm Booking Request"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
