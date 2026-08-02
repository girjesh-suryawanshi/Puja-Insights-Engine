import { useEffect } from "react";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string[];
  id?: string;
}

/**
 * ServiceSchema — injects Service JSON-LD schema per puja page.
 * Helps AI search engines (Gemini, ChatGPT, Perplexity) and Google
 * clearly understand the service offering, location, and provider.
 */
export function ServiceSchema({
  serviceName,
  description,
  url,
  areaServed = ["Bangalore"],
  id = "service-schema",
}: ServiceSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "serviceType": "Vedic Puja Service",
      "description": description,
      "url": url,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://radheradhepuja.com/#organization",
        "name": "Radhe Radhe Puja Services",
        "telephone": "+919546308950",
      },
      "areaServed": areaServed.map((area) => ({
        "@type": area === "Bangalore" ? "City" : "AdministrativeArea",
        "name": area,
      })),
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": url,
      },
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
  }, [serviceName, description, url, id, areaServed]);

  return null;
}
