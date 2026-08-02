import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  id?: string;
}

/**
 * BreadcrumbSchema — injects BreadcrumbList JSON-LD schema.
 * Enables Google Breadcrumb rich results and helps AI engines
 * understand page hierarchy and site structure.
 */
export function BreadcrumbSchema({ items, id = "breadcrumb-schema" }: BreadcrumbSchemaProps) {
  useEffect(() => {
    if (!items || items.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url.startsWith("http")
          ? item.url
          : `https://radheradhepuja.com${item.url}`,
      })),
    };

    const scriptId = `schema-${id}`;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [items, id]);

  return null;
}
