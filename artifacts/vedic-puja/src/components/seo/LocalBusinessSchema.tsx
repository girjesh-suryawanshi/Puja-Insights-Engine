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
  description = "Radhe Radhe Puja Services is Bangalore's most trusted North Indian Pandit and Vedic Puja service. Led by Acharya Pt. Diwakar Pandey with 20+ years of experience in Vedic traditions from Varanasi and Haridwar. Specializing in Griha Pravesh Puja, Satyanarayan Katha, Rudrabhishek, Vivah Puja, Shradh Puja, and all Vedic ceremonies for North Indian families across Whitefield, Electronic City, HSR Layout, Indiranagar, Marathahalli, and all of Bangalore.",
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
      "alternateName": "North Indian Pandit Services Bangalore",
      "description": description,
      "image": `https://radheradhepuja.com${image}`,
      "@id": "https://radheradhepuja.com/#organization",
      "url": url,
      "telephone": phone,
      "email": "radhepujabangalore@gmail.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "₹₹",
      "keywords": [
        "north indian pandit in bangalore",
        "hindi pandit in bangalore",
        "pandit in bangalore",
        "pandit for griha pravesh puja in bangalore",
        "pandit for satyanarayan puja in bangalore",
        "north indian pandit for griha pravesh puja in bangalore",
        "pooja services in bangalore",
        "pooja samagri bangalore",
        "rudrabhishek puja in bangalore",
        "pandit for marriage in bangalore"
      ],
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "AdministrativeArea", "name": "Whitefield" },
        { "@type": "AdministrativeArea", "name": "Electronic City" },
        { "@type": "AdministrativeArea", "name": "HSR Layout" },
        { "@type": "AdministrativeArea", "name": "Indiranagar" },
        { "@type": "AdministrativeArea", "name": "Marathahalli" },
        { "@type": "AdministrativeArea", "name": "BTM Layout" },
        { "@type": "AdministrativeArea", "name": "Koramangala" },
        { "@type": "AdministrativeArea", "name": "Bellandur" }
      ],
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
        "latitude": 12.9339,
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
