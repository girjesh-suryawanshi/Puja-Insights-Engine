import { useEffect } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSchemaProps {
  faq: FAQItem[];
  id?: string;
}

/**
 * FAQSchema — injects FAQPage JSON-LD schema for Google AI Overviews,
 * Featured Snippets, People Also Ask, and voice search results.
 */
export function FAQSchema({ faq, id = "faq-schema" }: FAQSchemaProps) {
  useEffect(() => {
    if (!faq || faq.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a,
        },
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
  }, [faq, id]);

  return null;
}
