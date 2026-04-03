import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, X, RefreshCw } from 'lucide-react';

export function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needUpdate: [needUpdate, setNeedUpdate],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log('SW Registered: ', r);
    },
    onRegisterError(error: any) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedUpdate(false);
  };

  return (
    <AnimatePresence>
      {(offlineReady || needUpdate) && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[90vw] max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 p-5 flex flex-col gap-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {offlineReady ? (
                    <UploadCloud className="w-5 h-5 text-primary" />
                  ) : (
                    <RefreshCw className="w-5 h-5 text-primary animate-spin-slow" />
                  )}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground leading-tight">
                    {offlineReady ? 'App Ready Offline' : 'Update Available'}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {offlineReady 
                      ? 'Radhe Radhe Puja is now available offline.' 
                      : 'New content is available. Refresh to update the app.'}
                  </p>
                </div>
              </div>
              <button 
                onClick={close}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="flex gap-3 mt-1">
              {needUpdate && (
                <Button 
                  onClick={() => updateServiceWorker(true)}
                  className="flex-1 rounded-xl h-10 text-sm font-bold shadow-lg shadow-primary/20"
                >
                  Update Now
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={close}
                className="flex-1 rounded-xl h-10 text-sm font-semibold border-border hover:bg-muted"
              >
                {needUpdate ? 'Maybe Later' : 'Got it'}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
