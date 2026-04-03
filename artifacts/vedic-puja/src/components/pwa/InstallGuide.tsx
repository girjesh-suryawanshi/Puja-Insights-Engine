import { motion, AnimatePresence } from "framer-motion";
import { X, Share, PlusSquare, Smartphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS: boolean;
}

export function InstallGuide({ isOpen, onClose, isIOS }: InstallGuideProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            {/* Design detail: Decorative top accent */}
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-6" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="text-center mb-8 sm:mb-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl shadow-primary/20 rotate-3">
                <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2 sm:mb-3 leading-tight">Install Radhe Puja</h2>
              <p className="text-base sm:text-lg text-muted-foreground">Add to home screen for the best spiritual experience.</p>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {isIOS ? (
                <>
                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Share className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base sm:text-lg">Step 1: Tap Share</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Tap the Share icon at the bottom of your Safari browser.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base sm:text-lg">Step 2: Add to Home Screen</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Scroll down and tap <span className="font-bold text-primary">'Add to Home Screen'</span>.</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <div className="flex flex-col gap-0.5">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <div className="w-1 h-1 bg-primary rounded-full" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base sm:text-lg">Step 1: Tap the Menu</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Tap the three dots (⋮) in the top right corner of Chrome.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base sm:text-lg">Step 2: Install App</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Tap <span className="font-bold text-primary">'Install App'</span> or 'Add to Home screen'.</p>
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg">Step 3: Confirm</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Tap 'Add' or 'Install' to finish and see Radhe Puja on your home screen.</p>
                </div>
              </div>
            </div>

            <Button
              onClick={onClose}
              className="w-full py-6 sm:py-7 rounded-xl sm:rounded-[1.25rem] font-bold text-base sm:text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            >
              Got it, thanks!
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
