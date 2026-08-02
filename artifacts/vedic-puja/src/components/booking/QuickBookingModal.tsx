import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateBooking } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { trackBookingSuccess } from "@/lib/analytics";
import { Calendar, User, Phone, Sparkles, Send } from "lucide-react";

const quickBookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid 10-digit phone is required"),
  pujaType: z.string().min(1, "Please select a Puja type"),
  date: z.string().optional(),
  city: z.string().optional()
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

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPujaType?: string;
}

export function QuickBookingModal({ isOpen, onClose, defaultPujaType }: QuickBookingModalProps) {
  const { toast } = useToast();
  const createBooking = useCreateBooking();

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof quickBookingSchema>>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      pujaType: defaultPujaType || "",
      city: "Bangalore"
    }
  });

  const onSubmit = (data: z.infer<typeof quickBookingSchema>) => {
    const fullBookingData = {
      name: data.name,
      email: `${data.phone}@radheradhepuja.com`, // Auto-generated email fallback
      phone: data.phone,
      pujaType: data.pujaType,
      date: data.date || new Date().toISOString().split("T")[0],
      address: "Instant Phone Booking Request",
      city: data.city || "Bangalore",
      message: "Quick Booking Modal Request"
    };

    createBooking.mutate(
      { data: fullBookingData },
      {
        onSuccess: () => {
          trackBookingSuccess(data.pujaType);
          reset();
          onClose();
          window.location.href = `/thank-you?puja=${encodeURIComponent(data.pujaType)}`;
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description: "There was an issue processing your request. Please try calling directly.",
            variant: "destructive"
          });
        }
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md rounded-3xl p-6 md:p-8 bg-white border border-orange-100 shadow-2xl">
        <DialogHeader className="text-left mb-4">
          <div className="w-12 h-12 bg-orange-100 text-primary rounded-2xl flex items-center justify-center mb-3 shadow-inner">
            <Sparkles className="w-6 h-6" />
          </div>
          <DialogTitle className="text-2xl font-display font-bold text-gray-900">
            Quick Puja Booking
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Book an experienced Acharya ji in under 60 seconds. We'll call back immediately!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                {...register("name")}
                placeholder="E.g. Ramesh Kumar"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                {...register("phone")}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Select Puja Ceremony *
            </label>
            <select
              {...register("pujaType")}
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none"
            >
              <option value="">-- Select Ceremony --</option>
              {PUJA_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.pujaType && <p className="text-red-500 text-xs mt-1">{errors.pujaType.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Preferred Date (Optional)
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="date"
                {...register("date")}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary to-orange-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? "Submitting Request..." : "Confirm & Get Instant Callback"}</span>
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default QuickBookingModal;
