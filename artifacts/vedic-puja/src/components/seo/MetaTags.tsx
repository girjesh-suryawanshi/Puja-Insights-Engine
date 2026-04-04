import { useEffect, useState } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

interface Setting {
  id: number;
  type: string;
  key: string;
  value: string;
  injectionLocation: string | null;
  isActive: boolean;
}

export function MetaTags({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}: MetaTagsProps) {
  const [settings, setSettings] = useState<Setting[]>([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings/public");
        if (res.ok) {
          setSettings(await res.json());
        }
      } catch (err) {
        console.error("Failed to fetch settings for meta tags", err);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    // 1. Update Basic Meta Tags
    if (title) {
      const titleSuffix = settings.find(s => s.key === "site_title_suffix")?.value || "Radhe Radhe Puja Services";
      document.title = title.includes("Radhe Radhe") ? title : `${title} | ${titleSuffix}`;
    }

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // 2. Dynamic Settings Injection (Google Verification)
    settings.forEach(setting => {
      if (!setting.isActive) return;

      if (setting.key === "google_site_verification") {
        setMeta("google-site-verification", setting.value);
      }

      if (setting.type === "meta_tag") {
        // Handle generic meta tags if needed
      }

      if (setting.type === "tracking_script") {
        const id = `script-sync-${setting.id}`;
        if (!document.getElementById(id)) {
          const script = document.createElement("script");
          script.id = id;
          script.innerHTML = setting.value;
          if (setting.injectionLocation === "head") {
            document.head.appendChild(script);
          } else {
            document.body.appendChild(script);
          }
        }
      }
    });

    // 3. Update Canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical.startsWith('http') ? canonical : `https://radheradhepuja.com${canonical}`);
    }

    // 4. Update Open Graph Tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (ogTitle || title) updateOGTag('og:title', ogTitle || title || "");
    if (ogDescription || description) updateOGTag('og:description', ogDescription || description || "");
    if (ogImage) updateOGTag('og:image', ogImage);
    if (ogUrl || canonical) updateOGTag('og:url', ogUrl || canonical || "");
    updateOGTag('og:type', 'website');

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, settings]);

  return null;
}
