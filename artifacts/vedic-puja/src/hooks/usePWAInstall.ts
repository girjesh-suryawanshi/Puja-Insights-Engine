import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function usePWAInstall() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent;
    const ios = (/iPad|iPhone|iPod/.test(userAgent)) && !(window as any).MSStream;
    setIsIOS(ios);

    // Detect Standalone (already installed)
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPrompt(e);
      setIsInstallable(true);
      console.log('✅ PWA Install Prompt captured');
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setInstallPrompt(null);
      setIsStandalone(true);
      console.log('🎉 PWA Installed successfully');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      console.warn('❌ No install prompt available');
      return false;
    }
    
    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      console.log(`👤 User choice: ${outcome}`);
      
      if (outcome === 'accepted') {
        setIsInstallable(false);
        setInstallPrompt(null);
        return true;
      }
    } catch (err) {
      console.error('❌ Install prompt error:', err);
    }
    return false;
  };

  return { isInstallable, isIOS, isStandalone, handleInstall };
}
