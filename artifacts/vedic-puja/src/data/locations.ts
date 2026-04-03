export interface Location {
  slug: string;
  name: string;
  fullName: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  about: string;
  popularPujas: string[];
  areas: string[];
  famousFor: string;
  faq: { q: string; a: string }[];
}

export const locations: Location[] = [
  {
    slug: "whitefield",
    name: "Whitefield",
    fullName: "Whitefield, Bangalore",
    primaryKeyword: "pandit in whitefield",
    metaTitle: "Pandit in Whitefield Bangalore | Hindi Pandit for Puja | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi-speaking pandit in Whitefield, Bangalore. Available for all pujas — Griha Pravesh, Satyanarayan, Navratri, Havan. Same-day booking available.",
    intro: "Whitefield — the heart of Bangalore's IT corridor — is home to thousands of North Indian families who have relocated here for work at companies in ITPL, Bagmane Tech Park, and Embassy Tech Village. Despite the corporate life, the desire to maintain our traditions and perform pujas with authenticity never fades. That's why our North Indian pandit service in Whitefield was created — to ensure that every family in Prestige Shantiniketan, Varthur Road, ITPL Main Road, or Hope Farm can have a proper Hindi-speaking pandit at their doorstep without any hassle.",
    about: "Our pandit service in Whitefield, Bangalore covers all major residential areas and apartments including Prestige Shantiniketan, Brigade Meadows, Daffodil Apartments, and all gated communities along Whitefield Main Road, ITPL Main Road, Kadugodi, and Varthur Road. We have a team of dedicated Hindi and Sanskrit pandits based in and around Whitefield who specialize in North Indian puja traditions. All pujas are performed with complete samagri, proper muhurat calculation, and authentic Vedic vidhi.",
    popularPujas: ["Griha Pravesh", "Satyanarayan Puja", "Ganesh Puja", "Navratri Puja", "Birthday Puja", "Namkaran Ceremony"],
    areas: ["ITPL Main Road", "Prestige Shantiniketan", "Varthur Road", "Hope Farm", "Kadugodi", "Brookefield"],
    famousFor: "IT Hub, Large North Indian Community",
    faq: [
      { q: "Is a Hindi-speaking pandit available in Whitefield?", a: "Yes, we have dedicated Hindi-speaking pandits based in the Whitefield area who are available for all types of pujas at your home or apartment." },
      { q: "How quickly can a pandit arrive in Whitefield for an emergency puja?", a: "For urgent requirements like Antim Sanskar or last-minute pujas, our pandit can reach most parts of Whitefield within 1–2 hours." },
      { q: "Do you cover all apartment complexes in Whitefield?", a: "Yes, we serve all apartment complexes and gated communities in Whitefield including Prestige Shantiniketan, Adarsh Palm Retreat, Brigade Lakefront, and all others." },
      { q: "What is the minimum booking notice for a pandit in Whitefield?", a: "We prefer 24 hours notice for planning, but we accommodate same-day bookings for most puja types subject to availability. Call us directly for urgent requirements." },
      { q: "Are there any extra travel charges for Whitefield?", a: "No extra travel charges apply within Whitefield and its immediate surroundings. Standard pricing applies for all puja services." }
    ]
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    fullName: "Electronic City, Bangalore",
    primaryKeyword: "pandit in electronic city",
    metaTitle: "Pandit in Electronic City Bangalore | Hindi Puja Pandit | Radhe Radhe Puja",
    metaDescription: "Book Hindi-speaking pandit in Electronic City, Bangalore. All puja services including Griha Pravesh, Satyanarayan, Havan. Phase 1 and Phase 2 covered. Same-day booking.",
    intro: "Electronic City — Bangalore's largest IT hub — is home to a massive North Indian population working at Infosys, Wipro, Biocon, and thousands of other tech companies. Our pandit service in Electronic City understands the unique challenge of maintaining North Indian traditions while living in South Bangalore's busiest tech corridor. Whether you're in Phase 1 or Phase 2, Neeladri Road or Hebbagodi, our Hindi pandits come to your home for all types of pujas — from daily Satyanarayan Puja to grand Griha Pravesh ceremonies.",
    about: "Our pandit service covers all of Electronic City including Phase 1, Phase 2, Neeladri Road, Hebbagodi, Huskur Road, and all gated communities including Prestige Sunrise Park, Sobha City, and Purva Silversands. We have pandits stationed in the Electronic City area for quick response times.",
    popularPujas: ["Griha Pravesh", "Satyanarayan Puja", "Vastu Puja", "Navratri Puja", "Havan", "Lakshmi Puja"],
    areas: ["Electronic City Phase 1", "Electronic City Phase 2", "Neeladri Road", "Hebbagodi", "Huskur Road", "Chandapura"],
    famousFor: "Largest IT Hub, Mixed North-South India Community",
    faq: [
      { q: "Is a North Indian pandit available in Electronic City for puja?", a: "Yes, we have experienced Hindi-speaking pandits available in Electronic City for all types of North Indian pujas." },
      { q: "Do you cover both Phase 1 and Phase 2 of Electronic City?", a: "Yes, both Phase 1 and Phase 2 of Electronic City are within our service area. We also cover Hebbagodi and surrounding areas." },
      { q: "Can puja be arranged in large apartment complexes in Electronic City?", a: "Yes, we regularly perform pujas in large apartment complexes in Electronic City. Our pandit coordinates with the building office for any specific requirements." },
      { q: "What are the most popular pujas booked in Electronic City?", a: "Griha Pravesh (housewarming) and Satyanarayan Puja are the most popular, followed by Vastu Puja and Navratri Puja." },
      { q: "Can I book a pandit for a morning slot in Electronic City on a workday?", a: "Yes, many of our clients in Electronic City book early morning pujas (before office hours) or weekend pujas. We accommodate all timing preferences." }
    ]
  },
  {
    slug: "marathahalli",
    name: "Marathahalli",
    fullName: "Marathahalli, Bangalore",
    primaryKeyword: "pandit in marathahalli",
    metaTitle: "Pandit in Marathahalli Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit in Marathahalli Bangalore. All puja services — Satyanarayan, Griha Pravesh, Havan, Namkaran. Outer Ring Road, Devarabisanahalli area covered.",
    intro: "Marathahalli has transformed into one of Bangalore's most vibrant North Indian communities, with families from UP, Bihar, MP, and Rajasthan calling this locality home. With its proximity to major tech parks and affordable housing, Marathahalli has a strong demand for authentic North Indian pandit services. Our pandits in Marathahalli are familiar with every building complex and gated community from the junction to Outer Ring Road, and are ready to serve your puja needs with complete samagri and authentic Vedic rituals.",
    about: "Our service in Marathahalli covers the main junction, Outer Ring Road stretches, Devarabisanahalli, Kadubeesanahalli, Iblur Junction, and all residential areas including Sobha Quartz, NCC Urban Gardenia, and Prestige Lakeside Habitat.",
    popularPujas: ["Satyanarayan Puja", "Ganesh Puja", "Griha Pravesh", "Sundarkand Path", "Birthday Puja"],
    areas: ["Marathahalli Junction", "Outer Ring Road", "Devarabisanahalli", "Kadubeesanahalli", "Iblur", "Varthur"],
    famousFor: "Tech Corridor, Active North Indian Community",
    faq: [
      { q: "Are Hindi pandits available for home puja in Marathahalli?", a: "Yes, we have experienced Hindi pandits available throughout Marathahalli and surrounding areas on the Outer Ring Road." },
      { q: "Can you perform Griha Pravesh in a new apartment in Marathahalli?", a: "Yes, Griha Pravesh is one of our most frequently performed pujas in Marathahalli. We handle everything from muhurat selection to complete ceremony." },
      { q: "Do you cover Kadubeesanahalli and Devarabisanahalli areas?", a: "Yes, all areas from Marathahalli junction through Kadubeesanahalli and Devarabisanahalli are covered by our service." },
      { q: "How much does a pandit cost in Marathahalli?", a: "Pricing starts from ₹1,500 for basic puja. Our pricing is transparent and consistent across all Bangalore locations including Marathahalli." },
      { q: "Can you do pujas in gated communities in Marathahalli?", a: "Yes, we regularly perform pujas in all gated communities in Marathahalli. Our pandit handles the security/visitor registration process." }
    ]
  },
  {
    slug: "btm-layout",
    name: "BTM Layout",
    fullName: "BTM Layout, Bangalore",
    primaryKeyword: "pandit in btm",
    metaTitle: "Pandit in BTM Layout Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book Hindi-speaking pandit in BTM Layout, Bangalore. All pujas — Satyanarayan, Navratri, Havan, Griha Pravesh. Stages 1 and 2 covered. Same-day booking.",
    intro: "BTM Layout — named after Bangalore-Tumkur-Mysore roads — has long been one of the most diverse and vibrant localities in South Bangalore. With a significant North Indian population spread across Stages 1 and 2, BTM has a strong demand for authentic Hindi pandit services. Whether you're in a PG accommodation, a rented flat, or your own home in BTM, our pandits are available for all puja requirements — from a simple Hanuman Chalisa recitation on Tuesday to a full Griha Pravesh ceremony.",
    about: "Our BTM Layout service covers both Stages 1 and 2, Jayanagar 7th Block, Bannerghatta Road junction, and all surrounding areas. We have pandits stationed in South Bangalore for quick response to BTM Layout and neighboring areas.",
    popularPujas: ["Satyanarayan Puja", "Navratri Puja", "Sundarkand Path", "Birthday Puja", "Havan Puja"],
    areas: ["BTM Layout Stage 1", "BTM Layout Stage 2", "Madivala", "JP Nagar", "Jayanagar", "Bannerghatta Road"],
    famousFor: "Student and Working Professional Hub, South Bangalore",
    faq: [
      { q: "Can pandits perform puja in rented flats and PGs in BTM?", a: "Yes, our pandits perform pujas in rented flats, PG accommodations, and independent houses throughout BTM Layout. We bring all samagri and require minimal space." },
      { q: "Do you cover BTM Stage 1 and Stage 2?", a: "Yes, both BTM Stage 1 and Stage 2 are fully covered. We also serve Madivala, Silk Board, and the JP Nagar junction area." },
      { q: "Can I book a Tuesday Hanuman puja in BTM Layout?", a: "Yes, Tuesday and Saturday Sundarkand Path or Hanuman Puja bookings are available. Book by Saturday for Tuesday puja slots." },
      { q: "Are pandits available for late evening pujas in BTM?", a: "Yes, we offer evening puja slots (up to 9 PM) in BTM Layout. For Kali Puja or midnight rituals, special arrangements are made in advance." },
      { q: "What is the cost of pandit in BTM Layout?", a: "Puja starts from ₹1,500. All our pricing is transparent and consistent across Bangalore. No additional charges for BTM Layout." }
    ]
  },
  {
    slug: "indiranagar",
    name: "Indiranagar",
    fullName: "Indiranagar, Bangalore",
    primaryKeyword: "pandit in indiranagar",
    metaTitle: "Pandit in Indiranagar Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit in Indiranagar, Bangalore. All puja services — Satyanarayan, Griha Pravesh, Havan, Wedding puja. Available across all stages.",
    intro: "Indiranagar — one of Bangalore's most upscale and well-connected localities — is home to professionals, expats, and North Indian families who want the best of both worlds: cosmopolitan Bangalore life with roots deeply connected to their cultural traditions. Our pandit service in Indiranagar brings exactly that — experienced, English and Hindi-speaking pandits who are comfortable in high-end apartments, explain rituals clearly for younger generations, and perform every ceremony with the authenticity your parents and grandparents would recognize.",
    about: "Our Indiranagar service covers 100 Feet Road, CMH Road, HAL Stage 1 and 2, Domlur, Koramangala junction, and all residential areas. We regularly serve premium apartments and independent houses throughout Indiranagar.",
    popularPujas: ["Griha Pravesh", "Satyanarayan Puja", "Birthday Puja", "Vivah Puja", "Navratri Puja"],
    areas: ["100 Feet Road", "CMH Road", "HAL Stage 1", "HAL Stage 2", "Domlur", "Koramangala"],
    famousFor: "Premium Locality, Professional Community",
    faq: [
      { q: "Do your pandits speak English in addition to Hindi in Indiranagar?", a: "Yes, many of our pandits in Indiranagar are comfortable explaining rituals in both Hindi and English — ideal for younger generations or mixed families." },
      { q: "Can you perform pujas in luxury apartments in Indiranagar?", a: "Absolutely. We regularly perform pujas in premium apartments and independent villas throughout Indiranagar. Our pandits are respectful of premium property settings." },
      { q: "Are wedding pandits available in Indiranagar for venue pujas?", a: "Yes, we coordinate with all major event venues and banquet halls in Indiranagar for wedding and engagement pujas." },
      { q: "Do you also perform pujas at the office in Indiranagar?", a: "Yes, office pujas (Vastu Puja, Lakshmi Puja, Ganesh Puja for new office inauguration) are regularly performed in Indiranagar's commercial areas." },
      { q: "Can you do early morning pujas in Indiranagar?", a: "Yes, early morning slots (6 AM onwards) are available in Indiranagar for auspicious occasions requiring specific muhurat times." }
    ]
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    fullName: "HSR Layout, Bangalore",
    primaryKeyword: "pandit in hsr layout",
    metaTitle: "Pandit in HSR Layout Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book Hindi-speaking pandit in HSR Layout, Bangalore. All puja services — Griha Pravesh, Satyanarayan, Navratri, Havan. Sectors 1-7 fully covered. Same-day booking.",
    intro: "HSR Layout — Bangalore's thriving startup hub and residential paradise — has one of the most active North Indian communities in South Bangalore. With Sectors 1 through 7 filled with tech professionals and young families, the demand for accessible, authentic Hindi pandit services in HSR is higher than ever. Our pandits in HSR Layout are specifically chosen for their ability to make complex rituals accessible for young families while maintaining complete scriptural authenticity.",
    about: "Our HSR Layout service covers all 7 Sectors, BDA Complex, Agara Lake Road, Haralur Road, and Sarjapur Road junction. We have a strong presence in HSR's residential towers and independent houses.",
    popularPujas: ["Satyanarayan Puja", "Ganesh Puja", "Namkaran Ceremony", "Birthday Puja", "Griha Pravesh", "Navratri Puja"],
    areas: ["HSR Sector 1", "HSR Sector 2", "HSR Sector 3", "Agara", "Haralur Road", "Sarjapur Road junction"],
    famousFor: "Startup Hub, Young Professional Community",
    faq: [
      { q: "Are pandits available for pujas on weekends in HSR Layout?", a: "Yes, weekend bookings are our most popular in HSR Layout. Book early as Saturday and Sunday slots fill quickly." },
      { q: "Can pandits perform Namkaran ceremony for newborns in HSR Layout?", a: "Yes, Namkaran ceremony is one of our most frequently requested services in HSR Layout's young family communities." },
      { q: "Do you cover all 7 sectors of HSR Layout?", a: "Yes, all HSR Layout sectors (1 through 7) are fully covered. We also serve Agara and the Haralur Road stretch." },
      { q: "Is Navratri puja available in apartment complexes in HSR?", a: "Yes, we offer community Navratri puja arrangements for apartment complexes in HSR Layout. Contact us for group bookings." },
      { q: "Can I book a pandit for a small Tuesday Hanuman puja in HSR?", a: "Yes, small weekly pujas (Hanuman Chalisa, Satyanarayan, Shiv puja on Mondays) can be arranged with minimum 1 day advance booking in HSR Layout." }
    ]
  },
  {
    slug: "yelahanka",
    name: "Yelahanka",
    fullName: "Yelahanka, Bangalore",
    primaryKeyword: "pandit in yelahanka",
    metaTitle: "Pandit in Yelahanka Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book Hindi-speaking pandit in Yelahanka, Bangalore. All puja services available — Griha Pravesh, Satyanarayan, Navratri, Havan. New Town and Old Town covered.",
    intro: "Yelahanka — North Bangalore's rapidly growing residential hub — has seen an explosion of North Indian families moving in as new apartment projects along Yelahanka New Town, Jakkur, and Kogilu emerge. With its clean, spacious environment and close proximity to the airport, Yelahanka is becoming a preferred destination for North Indian families in Bangalore. Our pandit service in Yelahanka ensures that every new and established North Indian family in this area has access to authentic Hindi-speaking pandits for all their spiritual needs.",
    about: "Our Yelahanka service covers Yelahanka Old Town, Yelahanka New Town, Jakkur, Kogilu, Sahakar Nagar, Hebbal flyover area, and all residential projects from Devanahalli Road to Bellary Road.",
    popularPujas: ["Griha Pravesh", "Bhumi Pujan", "Satyanarayan Puja", "Navratri Puja", "Ganesh Puja"],
    areas: ["Yelahanka Old Town", "Yelahanka New Town", "Jakkur", "Kogilu", "Sahakar Nagar", "Bellary Road"],
    famousFor: "North Bangalore Growth Hub, Airport Proximity",
    faq: [
      { q: "Are Hindi pandits available for Griha Pravesh in new apartments in Yelahanka?", a: "Yes, Griha Pravesh puja is our most common booking in Yelahanka's rapidly growing new apartment communities." },
      { q: "Do you cover Jakkur and Kogilu areas near Yelahanka?", a: "Yes, Jakkur, Kogilu, and all areas around Yelahanka up to the Bellary Road are fully within our service area." },
      { q: "Can pandits come early morning before airport travel from Yelahanka?", a: "Yes, our pandits can be arranged for early morning pujas (from 5:30 AM) in Yelahanka for families with early flights or travel plans." },
      { q: "Is Bhumi Pujan available for new construction in Yelahanka?", a: "Yes, Bhumi Pujan is regularly performed for new residential and commercial construction projects in the Yelahanka area." },
      { q: "How much does a pandit cost in Yelahanka?", a: "Our standard pricing applies to Yelahanka. Pujas start from ₹1,500. No extra travel charges within Yelahanka." }
    ]
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    fullName: "Hebbal, Bangalore",
    primaryKeyword: "pandit in hebbal",
    metaTitle: "Pandit in Hebbal Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book Hindi-speaking pandit in Hebbal, Bangalore. All puja services — Satyanarayan, Griha Pravesh, Havan, Navratri. Outer Ring Road and Bellary Road areas covered.",
    intro: "Hebbal — with its famous flyover and beautiful lake — is one of North Bangalore's key residential and commercial hubs. The Outer Ring Road stretch through Hebbal is lined with apartment complexes housing thousands of North Indian families. Our pandit service in Hebbal is designed to serve this growing community with quick response times, experienced Hindi pandits, and complete samagri for all types of pujas.",
    about: "Our Hebbal service covers the Hebbal flyover area, Outer Ring Road stretch, Ballari Road, Jakkur Road, RT Nagar, and all major residential complexes in North Bangalore from Hebbal to Nagawara.",
    popularPujas: ["Satyanarayan Puja", "Griha Pravesh", "Navratri Puja", "Ganesh Puja", "Havan Puja"],
    areas: ["Hebbal Main", "Outer Ring Road", "Ballari Road", "Nagawara", "RT Nagar", "Jakkur Road"],
    famousFor: "North Bangalore Hub, IT Corridor Gateway",
    faq: [
      { q: "Are North Indian pandits available in Hebbal?", a: "Yes, we have experienced Hindi-speaking pandits available throughout Hebbal and surrounding North Bangalore areas." },
      { q: "Do you cover the RT Nagar and Nagawara areas near Hebbal?", a: "Yes, RT Nagar, Nagawara, and all areas from Hebbal through Thanisandra are within our service coverage." },
      { q: "Can puja be arranged in large apartment towers in Hebbal?", a: "Yes, we regularly perform pujas in large residential towers along the Outer Ring Road in Hebbal. Our pandit handles all security and parking arrangements." },
      { q: "Is same-day pandit booking possible in Hebbal?", a: "Same-day booking is possible for most puja types in Hebbal. Call us directly for urgent requirements." },
      { q: "Are there any specific pujas popular in the Hebbal community?", a: "Satyanarayan Puja, Griha Pravesh, and Navratri puja are the most booked in Hebbal's North Indian community." }
    ]
  },
  {
    slug: "sarjapur",
    name: "Sarjapur",
    fullName: "Sarjapur Road, Bangalore",
    primaryKeyword: "pandit in sarjapur",
    metaTitle: "Pandit in Sarjapur Bangalore | Hindi Puja Service | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit in Sarjapur Road, Bangalore. All puja services — Griha Pravesh, Satyanarayan, Havan. Marathahalli to Attibele stretch fully covered.",
    intro: "Sarjapur Road — stretching from Marathahalli to Attibele — has become one of Bangalore's most sought-after residential corridors with massive apartment projects housing lakhs of North Indian IT professionals. The demand for North Indian pandit services in Sarjapur Road has grown exponentially as this corridor developed. Our pandits in Sarjapur are experienced in serving large apartment community events as well as intimate home pujas for individual families.",
    about: "Our Sarjapur Road service covers the entire stretch from Iblur junction through Carmelaram, Bellandur, Haralur, Hosa Road, and Attibele. We serve all major residential projects including Prestige Ferns, Purva Seasons, Brigade Orchards, and all gated communities.",
    popularPujas: ["Griha Pravesh", "Satyanarayan Puja", "Vastu Puja", "Navratri Puja", "Ganesh Puja"],
    areas: ["Iblur", "Carmelaram", "Bellandur", "Haralur Road", "Hosa Road", "Attibele"],
    famousFor: "Largest Residential Corridor, Massive IT Community",
    faq: [
      { q: "Are pandits available across the entire Sarjapur Road stretch?", a: "Yes, we cover the complete Sarjapur Road corridor from Iblur junction to Attibele including all sub-areas and residential projects." },
      { q: "Can community pujas be arranged for apartment complexes in Sarjapur?", a: "Yes, we regularly arrange community pujas for apartment complexes along Sarjapur Road — Navratri, Diwali Lakshmi Puja, and Satyanarayan Pujas for 50–500+ attendees." },
      { q: "How quickly can a pandit arrive in Sarjapur in an emergency?", a: "We aim for 1–2 hour response for emergencies on Sarjapur Road. Due to traffic, advance booking is highly recommended." },
      { q: "Do you cover Bellandur and Carmelaram areas?", a: "Yes, both Bellandur and Carmelaram are within our Sarjapur service area. These are among our busiest locations." },
      { q: "Can Bhumi Pujan be done for a new plot in Sarjapur?", a: "Yes, Bhumi Pujan for new plots and construction projects is regularly performed throughout the Sarjapur Road corridor." }
    ]
  }
];

export const getLocationBySlug = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
