import { useEffect } from "react";

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
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title.includes("Radhe Radhe") ? title : `${title} | Radhe Radhe Puja Services`;
    }

    // Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical.startsWith('http') ? canonical : `https://radheradhepuja.com${canonical}`);
    }

    // Update Open Graph Tags
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

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl]);

  return null; // This component doesn't render any UI
}
