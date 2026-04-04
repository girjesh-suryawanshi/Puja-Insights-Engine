import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  phone?: string;
  url?: string;
  image?: string;
}

export function LocalBusinessSchema({
  name = "Radhe Radhe Puja Services",
  description = "Professional North Indian Pandit and Vedic Pooja services in Bangalore. Expert Hindi Pandits for Griha Pravesh, Satyanarayan Puja, and more.",
  address = "Koramangala 4th Block",
  city = "Bangalore",
  region = "Karnataka",
  postalCode = "560034",
  phone = "+91 95463 08950",
  url = "https://radheradhepuja.com",
  image = "/images/logo.png",
}: LocalBusinessSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": name,
      "image": image,
      "@id": url,
      "url": url,
      "telephone": phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address,
        "addressLocality": city,
        "addressRegion": region,
        "postalCode": postalCode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9339, // Koramangala coordinates
        "longitude": 77.6231
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://wa.me/919546308950"
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-schema";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("local-business-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [name, description, address, city, region, postalCode, phone, url, image]);

  return null;
}
