export interface FAQ {
  q: string;
  a: string;
}

export interface Puja {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  description: string;
  duration: string;
  price: string;
  benefits: string[];
  rituals: string[];
  samagri: string[];
  bestFor: string;
  image: string;
  deity: string;
  category: "puja" | "life-event" | "dosh" | "havan";
  whyImportant: string[];
  process: { step: string; desc: string }[];
  faq: FAQ[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  areas: string[];
}

export const pujas: Puja[] = [
  // ─── MAIN PUJA SERVICES ────────────────────────────────────────────────────
  {
    slug: "satyanarayan-puja",
    name: "Satyanarayan Puja",
    tagline: "For peace, prosperity & removal of life's difficulties",
    metaTitle: "Satyanarayan Puja in Bangalore | Book Hindi Pandit | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi-speaking pandit for Satyanarayan Puja in Bangalore. Complete puja with samagri included. Available in Whitefield, BTM, HSR Layout, Electronic City & all areas.",
    primaryKeyword: "satyanarayan puja bangalore",
    intro: "Living away from home in Bangalore doesn't mean missing the blessings that matter most. Satyanarayan Puja — one of the most beloved Vishnu pujas in North Indian households — brings peace, prosperity and good fortune into your life. Whether you've just moved to Whitefield, settled in HSR Layout, or have been in Electronic City for years, this puja reconnects your family with divine grace. Our Hindi-speaking pandits make this puja feel just like home — same mantras, same rituals, same blessings that your parents and grandparents grew up with. Book your Satyanarayan Puja pandit in Bangalore today and let the divine blessings flow.",
    description: "Satyanarayan Puja is one of the most popular Hindu pujas, performed to seek the blessings of Lord Vishnu (Satyanarayan). It is believed that performing this puja with devotion fulfills all desires, brings prosperity, and removes sorrows from life. The puja involves the recitation of the Satyanarayan Katha and offering of panchamrit and prasad.",
    duration: "2–3 Hours",
    price: "Contact for pricing",
    benefits: ["Brings peace, prosperity & happiness", "Resolves financial difficulties", "Strengthens family bonds", "Removes negativity from the home", "Fulfillment of sincere wishes"],
    whyImportant: ["Lord Vishnu's blessings protect the entire family throughout the year", "Satyanarayan Katha resolves ongoing life problems and removes obstacles", "Performing this puja monthly is considered one of the most auspicious practices in Hinduism", "It is traditionally performed at new beginnings — new home, new job, marriage — to invite divine grace"],
    rituals: ["Ganesh Puja & Kalash Sthapana", "Satyanarayan Katha recitation", "Panchamrit Abhishek", "Aarti & Prasad distribution", "Mantra chanting with Havana"],
    samagri: ["Panchamrit", "Flowers", "Incense", "Ghee", "Fruits", "Suji Halwa (Prasad)"],
    bestFor: "New beginnings, housewarming, business success, monthly observance",
    image: "/images/pujas/satyanarayan-puja.png",
    deity: "Lord Vishnu (Satyanarayan)",
    category: "puja",
    process: [
      { step: "Book Online or Call", desc: "Select Satyanarayan Puja, choose your preferred date, and enter your address in Bangalore." },
      { step: "Pandit Confirmation", desc: "Within 2 hours, our team calls you to confirm the pandit details and muhurat." },
      { step: "Puja Day", desc: "Pandit arrives with all samagri. You can optionally arrange for your family and neighbours." },
      { step: "Prasad & Blessings", desc: "Puja concludes with aarti, distribution of suji halwa prasad, and the pandit's ashirvad." }
    ],
    faq: [
      { q: "How much does Satyanarayan Puja cost in Bangalore?", a: "Our Satyanarayan Puja starts from Contact for Pricing and the price may vary based on the size of the puja and whether you need samagri included. We maintain transparent pricing with no hidden charges." },
      { q: "How long does the Satyanarayan Puja take?", a: "The puja typically takes 2–3 hours including the Katha recitation, all rituals, and aarti. The exact time may vary depending on the scale of the puja." },
      { q: "Do you bring puja samagri for Satyanarayan Puja?", a: "Yes, we offer a samagri-included package where our pandit brings all required items including panchamrit, flowers, diyas, and suji for prasad. You can also arrange samagri yourself if preferred." },
      { q: "Is the puja performed in Hindi?", a: "Absolutely. All our pandits are Hindi-speaking and from North Indian tradition. Mantras are chanted in Sanskrit while explanations are given in Hindi, just like home." },
      { q: "Can you book last-minute for tomorrow?", a: "Yes, we offer same-day and next-day bookings subject to pandit availability. Call us or WhatsApp for urgent bookings in Bangalore." }
    ],
    areas: ["Whitefield", "BTM Layout", "HSR Layout", "Electronic City", "Marathahalli", "Indiranagar", "Hebbal", "Yelahanka"]
  },
  {
    slug: "ganesh-puja",
    name: "Ganesh Puja",
    tagline: "Remove obstacles & invite success into every new endeavour",
    metaTitle: "Ganesh Puja Pandit in Bangalore | Book Hindi Pandit | Radhe Radhe Puja",
    metaDescription: "Hire experienced pandit for Ganesh Puja in Bangalore. Complete Ganesh puja at home with samagri. Available in all Bangalore areas including Whitefield, Indiranagar, BTM, HSR.",
    primaryKeyword: "ganesh puja pandit bangalore",
    intro: "Starting something new — a business, a new home, a child's education, or even a new job? Then Ganesh Puja is the auspicious first step every North Indian family takes. Lord Ganesha is the remover of all obstacles, and his blessings at the start of any venture ensure smooth sailing ahead. For North Indian families in Bangalore — whether in Marathahalli, BTM Layout, or Indiranagar — our pandit for Ganesh Puja brings authentic North Indian vidhi with Hindi mantras, creating a home environment that reminds you of your roots. Book a pandit for Ganesh Puja in Bangalore and begin your new chapter on the most auspicious note possible.",
    description: "Ganesh Puja is performed to invoke the blessings of Lord Ganesha, the remover of obstacles and the deity of wisdom. It is traditionally conducted before starting any new venture, event, or phase of life. Regular Ganesh puja is believed to bring intellect, good fortune and success in all undertakings.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Removes obstacles from life", "Brings wisdom and intellect", "Ensures success in new ventures", "Protects from negative energies", "Grants prosperity and good luck"],
    whyImportant: ["Ganesha is worshipped first before any other deity or ritual in Hindu tradition", "His blessings are said to remove the most stubborn obstacles from your life path", "Regular Ganesh puja increases mental clarity and decision-making ability", "Ganesh Chaturthi puja done with proper vidhi brings year-long blessings"],
    rituals: ["Ganesh Avahan & Sthapana", "Shodashopachara Puja", "Durva and Modak offering", "Ganesh Mantra recitation", "Aarti and Prasad"],
    samagri: ["Modak", "Durva grass", "Red flowers", "Sindoor", "Coconut", "Incense"],
    bestFor: "New business, exams, new home, weddings, any auspicious start",
    image: "/images/pujas/ganesh-puja.png",
    deity: "Lord Ganesha",
    category: "puja",
    process: [
      { step: "Book the Puja", desc: "Share your date, location in Bangalore, and any special requirements while booking." },
      { step: "Pandit Assigned", desc: "We assign an experienced Hindi pandit from our verified network and confirm within 2 hours." },
      { step: "Puja Performed", desc: "Pandit arrives on time with samagri and performs Ganesh Puja with complete Shodashopachara vidhi." },
      { step: "Conclusion", desc: "Aarti, modak prasad distribution, and the pandit's blessings for your new venture." }
    ],
    faq: [
      { q: "What is the cost of Ganesh Puja in Bangalore?", a: "Ganesh Puja starts from Contact for Pricing for a basic puja. Pricing depends on the duration, samagri requirements, and additional rituals. All prices are transparent." },
      { q: "On which days is Ganesh Puja most auspicious?", a: "Wednesday and Chaturthi (4th lunar day) of every month are most auspicious for Ganesh Puja. Our pandit can advise the best muhurat based on your requirements." },
      { q: "Can you perform Ganesh Puja for Ganesh Chaturthi?", a: "Yes, we have special Ganesh Chaturthi packages with full 10-day Ganapati puja service. Book early as slots fill fast during the festival." },
      { q: "Do you provide Ganesha idol for the puja?", a: "Yes, we can provide a clay Ganesha idol as part of our samagri package. Alternatively, you can arrange your own idol and we will perform the puja with it." },
      { q: "Is Hindi pandit available for Ganesh Puja in Whitefield or Electronic City?", a: "Yes, our Hindi pandits are available across all Bangalore locations including Whitefield, Electronic City, Marathahalli, BTM, HSR Layout, and Indiranagar." }
    ],
    areas: ["Whitefield", "Electronic City", "Marathahalli", "BTM Layout", "HSR Layout", "Indiranagar"]
  },
  {
    slug: "griha-pravesh",
    name: "Griha Pravesh Puja",
    tagline: "Purify your new home & invite divine blessings",
    metaTitle: "Griha Pravesh Pandit in Bangalore | Housewarming Puja | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Griha Pravesh puja in Bangalore. Complete housewarming puja with muhurat, Vastu puja, and havan. Available across all Bangalore areas.",
    primaryKeyword: "griha pravesh pandit bangalore",
    intro: "Moving into your new home is one of life's most joyful moments — and in North Indian tradition, no home truly begins without Griha Pravesh puja. Whether you've bought your first flat in Whitefield or finally moved into your dream apartment in HSR Layout, the right entry into your new home sets the tone for everything that follows. A properly performed Griha Pravesh removes any Vastu doshas, cleanses the energy of the space, and invites Goddess Lakshmi and Lord Ganesha's blessings into every corner. Our Hindi-speaking Griha Pravesh pandits in Bangalore understand every nuance of North Indian housewarming rituals — from Kalash Sthapana to Havan. Let us make your new house truly feel like home.",
    description: "Griha Pravesh is a sacred Hindu ceremony performed before entering a new home for the first time. It purifies the home of any negative energies and invites positive divine energy into the living space. The ceremony is performed on a muhurat (auspicious time) selected by the pandit, involving Vastu Puja, Havana and prayers.",
    duration: "3–4 Hours",
    price: "Contact for pricing",
    benefits: ["Purifies the home of negative energy", "Invites peace and prosperity", "Ensures wellbeing of all family members", "Vastu doshas are corrected", "Divine protection for the new residence"],
    whyImportant: ["A new home carries the energy of all previous occupants — Griha Pravesh clears and resets this energy", "Vastu Puja as part of Griha Pravesh corrects any architectural Vastu doshas present in the property", "The auspicious muhurat selected by the pandit ensures the family enters the home under favorable planetary positions", "Griha Pravesh is one of the 16 Samskaras and its omission is considered inauspicious in Vedic tradition"],
    rituals: ["Muhurat selection by Pandit", "Ganesh Puja & Navagraha Puja", "Vastu Puja & Havana", "Purnahuti offering", "Kalash Puja & home entry ritual"],
    samagri: ["Havan samagri", "Ghee", "Mango leaves", "Coconut", "Kalash", "Red cloth"],
    bestFor: "Moving into a new house or flat for the first time",
    image: "/images/pujas/griha-pravesh.png",
    deity: "Lord Ganesha & Vastu Devata",
    category: "puja",
    process: [
      { step: "Share Property Details", desc: "Provide your new address, possession date, and any Vastu concerns while booking." },
      { step: "Muhurat Calculation", desc: "Our pandit calculates the most auspicious entry time based on your family's birth details." },
      { step: "Full Puja Performed", desc: "Pandit arrives early to set up. Ganesh Puja, Vastu Puja, Havan, and Kalash ritual are performed sequentially." },
      { step: "First Entry Ritual", desc: "The family enters the new home with the Kalash, cow, and fire lamp as per tradition, amid the pandit's mantras." }
    ],
    faq: [
      { q: "How much does Griha Pravesh puja cost in Bangalore?", a: "Griha Pravesh puja starts from Contact for Pricing and can go up based on the extent of Havan, number of pujaris, and samagri included. We provide clear quotes before confirming." },
      { q: "Do we need to be present for the full puja?", a: "The main members of the household should ideally be present for the key rituals — especially the first entry ritual. Our pandit will guide you on who should be present and when." },
      { q: "Can you select the muhurat for Griha Pravesh?", a: "Yes, our pandits calculate the muhurat (auspicious time) based on the owner's janam kundali and the date of possession. We provide 2-3 auspicious date options for you to choose from." },
      { q: "What items should we keep ready for Griha Pravesh?", a: "Our samagri-included package covers everything. If you're arranging yourself, you'll need a Kalash, mango leaves, coconut, milk, rice, and a new clay pot. Our pandit will send a full list." },
      { q: "Is Griha Pravesh performed for rented flats too?", a: "Yes, Griha Pravesh can be performed when moving into a rented flat too. Our pandit performs a suitable vidhi that cleanses the space and invites positive energy regardless of ownership status." }
    ],
    areas: ["Whitefield", "Electronic City", "HSR Layout", "Marathahalli", "BTM Layout", "Sarjapur", "Hebbal", "Yelahanka", "Indiranagar"]
  },
  {
    slug: "rudrabhishek",
    name: "Rudrabhishek Puja",
    tagline: "The ultimate offering to Lord Shiva for divine grace",
    metaTitle: "Rudrabhishek Pandit in Bangalore | Shiv Puja at Home | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Rudrabhishek puja in Bangalore. Complete Shiv Abhishek with panchamrit, Rudrashtadhyayi chanting. Available across all Bangalore areas.",
    primaryKeyword: "rudrabhishek pandit bangalore",
    intro: "Of all the Shiva pujas, Rudrabhishek holds the highest place — it is the complete, ceremonial bathing of the Shivalinga with sacred substances while the powerful Rudrashtadhyayi is recited. For North Indian Shiva devotees living in Bangalore, performing Rudrabhishek at home with a proper Hindi pandit who knows every verse and vidhi can be a deeply transformative spiritual experience. Whether you seek health, liberation from Rahu-Ketu doshas, or simply the grace of Mahadev, Rudrabhishek puja in Bangalore with our experienced pandit will bring that divine connection right to your home — in Indiranagar, Marathahalli, or anywhere across the city.",
    description: "Rudrabhishek is one of the most powerful Vedic rituals dedicated to Lord Shiva. It involves ritual bathing (Abhishek) of the Shivalinga with sacred substances like milk, honey, curd, ghee, and water while chanting the Rudrashtadhyayi and Namakam-Chamakam mantras.",
    duration: "3–5 Hours",
    price: "Contact for pricing",
    benefits: ["Divine grace and blessings of Lord Shiva", "Liberation from sins and past karma", "Health, wealth and longevity", "Relief from Rahu-Ketu doshas", "Peace of mind and spiritual growth"],
    whyImportant: ["Rudrabhishek is considered the most powerful Shiva ritual for removing planetary doshas", "The Namakam-Chamakam recited during abhishek is one of the most sacred Vedic hymns", "Offering milk and bilva leaves to Shivalinga during Rudrabhishek is said to grant a thousand times more merit than regular puja", "Mondays, Pradosh, and Mahashivratri are the most auspicious times for Rudrabhishek"],
    rituals: ["Shivalinga Panchopachara Puja", "Panchamrit Abhishek", "Chanting of Namakam-Chamakam", "Bilva leaf offering", "Maha Aarti & Prasad"],
    samagri: ["Milk", "Honey", "Ghee", "Curd", "Bilva leaves", "Bhasma", "Rudraksha"],
    bestFor: "Health issues, Shiva devotees, Shravan month, Mahashivratri",
    image: "/images/pujas/rudrabhishek.png",
    deity: "Lord Shiva",
    category: "puja",
    process: [
      { step: "Book & Share Details", desc: "Book your Rudrabhishek date. Share family details for Sankalp and any specific wishes." },
      { step: "Pandit Arrives with Samagri", desc: "Our pandit arrives with all required samagri — panchamrit, bilva leaves, bhasma, flowers." },
      { step: "Rudrabhishek Performed", desc: "The abhishek is performed with each panchamrit substance in sequence, accompanied by Namakam-Chamakam chanting." },
      { step: "Aarti & Prasad", desc: "Maha Aarti is performed followed by distribution of prasad and the pandit's shiv ashirvad." }
    ],
    faq: [
      { q: "What is the cost of Rudrabhishek in Bangalore?", a: "Rudrabhishek starts from Contact for Pricing for a standard puja. Laghu Rudrabhishek (shorter version) is available from Contact for Pricing. Extended Rudrabhishek with full havan is available at Contact for Pricing." },
      { q: "What is the difference between Rudrabhishek and Shiv Puja?", a: "Shiv Puja is a simpler daily worship. Rudrabhishek is a more elaborate ritual involving systematic abhishek of the Shivalinga with five sacred substances while chanting the complete Rudrashtadhyayi — it is considered far more powerful." },
      { q: "Which day is best for Rudrabhishek in Bangalore?", a: "Mondays, Pradosh (13th lunar day), Mahashivratri, and the month of Shravan are most auspicious for Rudrabhishek. Our pandit can suggest the best upcoming date for maximum benefit." },
      { q: "Do I need a Shivalinga at home for Rudrabhishek?", a: "Yes, a Shivalinga is required. If you don't have one, we can provide a Parad (mercury) or Spatik Shivalinga as part of our package for an additional cost." },
      { q: "Can Rudrabhishek help with health problems?", a: "Yes, Rudrabhishek is traditionally performed for restoration of health, longevity, and recovery from illness. It is especially recommended when someone in the family is going through prolonged health issues." }
    ],
    areas: ["Whitefield", "Marathahalli", "Indiranagar", "HSR Layout", "BTM Layout", "Electronic City"]
  },
  {
    slug: "navratri-puja",
    name: "Navratri Puja",
    tagline: "Celebrate the nine nights of Goddess Durga's power",
    metaTitle: "Navratri Puja Pandit in Bangalore | Durga Puja Booking | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Navratri puja in Bangalore. Complete 9-day puja with Kalash Sthapana, Durga Saptashati, and Kanya Puja. All Bangalore areas covered.",
    primaryKeyword: "navratri puja bangalore",
    intro: "Navratri — the nine sacred nights of Goddess Durga — is perhaps the most spiritually charged festival in the North Indian calendar. For North Indian families living in Bangalore, celebrating Navratri the right way with Kalash Sthapana, daily Durga Saptashati, and Kanya Puja on Ashtami is what makes this festival truly meaningful. Our Hindi pandits for Navratri puja in Bangalore are well-versed in every regional tradition — whether you follow UP, Bihar, Rajasthan, or Delhi-style Navratri rituals. Book your Navratri puja pandit in Bangalore now for Chaitra or Sharad Navratri and let the divine energy of Ma Durga fill your home.",
    description: "Navratri Puja spans nine auspicious nights dedicated to worshipping the nine forms of Goddess Durga. It is one of the most celebrated festivals in North India, observed in October/November (Sharad Navratri) and March/April (Chaitra Navratri).",
    duration: "9 Days / Daily 1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Blessings of all nine forms of Goddess Durga", "Strength, courage and spiritual power", "Victory over enemies and obstacles", "Protection of the family", "Fulfillment of heartfelt desires"],
    whyImportant: ["Navratri is considered the most auspicious time for Devi worship in the entire Hindu calendar", "Worshipping all nine forms of Durga during Navratri is believed to grant wishes that remain unfulfilled throughout the year", "Kanya Puja on Ashtami is considered equivalent to worshipping the Goddess herself", "Akhand Jyoti (continuous lamp) maintained during Navratri brings divine presence into the home"],
    rituals: ["Kalash Sthapana on Day 1", "Daily Durga Saptashati recitation", "Kanya Puja on Ashtami/Navami", "Havan & Purnahuti", "Visarjan on Day 9"],
    samagri: ["Durga idol/photo", "Red flowers", "Kalash", "Akhand diya", "Sweets for Kanya Puja"],
    bestFor: "Navratri festival season, seeking Devi blessings, protection",
    image: "/images/pujas/navratri-puja.png",
    deity: "Goddess Durga (Nine Forms)",
    category: "puja",
    process: [
      { step: "Pre-Navratri Booking", desc: "Book at least 7 days in advance for Navratri. Share your home address and regional puja preferences." },
      { step: "Kalash Sthapana (Day 1)", desc: "Pandit performs Kalash Sthapana on the first day to establish the divine presence of Ma Durga for nine days." },
      { step: "Daily Durga Saptashati", desc: "Pandit visits or provides recorded guided puja for daily recitation and aarti throughout the nine days." },
      { step: "Kanya Puja & Havan", desc: "On Ashtami or Navami, Kanya Puja with 9 young girls, followed by havan and Durga visarjan." }
    ],
    faq: [
      { q: "How much does Navratri puja cost in Bangalore?", a: "Navratri puja packages start from Contact for Pricing for the full 9-day service. Single-day Navratri puja (just Kalash Sthapana or Ashtami puja) starts from Contact for Pricing." },
      { q: "Can the pandit come every day during Navratri?", a: "Yes, we offer a full 9-day daily pandit service. We can also arrange a package where the pandit comes on Day 1 (Kalash Sthapana) and Day 8/9 (Kanya Puja and Havan) while providing guidance for daily aarti in between." },
      { q: "What is Kanya Puja and how is it arranged?", a: "Kanya Puja involves worshipping 9 young girls (kanjaks) as representations of the 9 forms of Durga. You can invite young girls from your neighbourhood — our pandit handles the full ritual and guides you on what gifts to give them." },
      { q: "Which version of Navratri vidhi do you follow?", a: "Our pandits are familiar with North Indian regional traditions including UP, Bihar, Rajasthan, Punjab, and Delhi-style Navratri rituals. Please mention your preference while booking." },
      { q: "Do you offer Navratri puja in apartments and flats in Bangalore?", a: "Absolutely. Navratri puja is very commonly performed in apartments across Bangalore. Our pandit arranges everything within your flat space with minimal setup." }
    ],
    areas: ["Whitefield", "Indiranagar", "HSR Layout", "BTM Layout", "Electronic City", "Hebbal", "Marathahalli"]
  },
  {
    slug: "diwali-lakshmi-puja",
    name: "Diwali Lakshmi Puja",
    tagline: "Welcome Goddess Lakshmi for wealth & abundance",
    metaTitle: "Lakshmi Puja Pandit Bangalore | Diwali Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Lakshmi Puja in Bangalore on Diwali. Complete Lakshmi-Ganesh puja with Kubera puja, samagri included. All Bangalore areas available.",
    primaryKeyword: "lakshmi puja pandit bangalore",
    intro: "Diwali without Lakshmi Puja is like a festival without its heart. For North Indian families in Bangalore, performing Lakshmi Puja at the right muhurat on Diwali night is a deeply sacred family tradition. Whether you live in Sarjapur Road, Hebbal, or BTM Layout, our Hindi pandits come to your home and perform the complete Lakshmi Puja vidhi — including Ganesh Puja, Kubera Puja, and the traditional aarti — to invite Goddess Lakshmi's blessings of wealth and abundance. Book your Diwali Lakshmi Puja pandit in Bangalore before slots run out!",
    description: "Diwali Lakshmi Puja is performed on the night of Diwali to invite Goddess Lakshmi into the home and business. Conducted at an auspicious muhurat after sunset, the puja involves Lakshmi Puja along with Kubera and Ganesha worship.",
    duration: "2–3 Hours",
    price: "Contact for pricing",
    benefits: ["Blessings of Goddess Lakshmi for wealth", "Prosperity and abundance for the family", "Success in business and career", "Removes financial obstacles", "Brings light and positivity into the home"],
    whyImportant: ["Goddess Lakshmi is believed to visit illuminated, clean homes on Diwali night", "A properly performed Lakshmi Puja at the right muhurat invites year-long prosperity", "Business owners performing Chopda Puja (account book worship) alongside Lakshmi Puja see business blessings", "Not performing Lakshmi Puja on Diwali is considered inauspicious in North Indian tradition"],
    rituals: ["Kalash Puja & Lakshmi Avahan", "Ganesh Puja & Kubera Puja", "Lakshmi Ashtottara Shatanama Puja", "Lakshmi Aarti", "Fireworks and prasad distribution"],
    samagri: ["Lotus flowers", "Gold coins", "Kheel-batasha", "Diyas", "Sweets", "Incense"],
    bestFor: "Diwali festival, business owners, new financial year beginnings",
    image: "/images/pujas/diwali-lakshmi-puja.png",
    deity: "Goddess Lakshmi",
    category: "puja",
    process: [
      { step: "Book Before Diwali", desc: "Book at least 10 days before Diwali as slots fill very fast. Share your address and business details if Chopda Puja is required." },
      { step: "Muhurat Confirmed", desc: "Our pandit confirms the exact Lakshmi Puja muhurat based on the Diwali timings for that year." },
      { step: "Puja Performed at Muhurat", desc: "Pandit arrives before the muhurat and performs complete Lakshmi-Ganesha-Kubera puja with aarti." },
      { step: "Prasad & Aarti", desc: "Prasad is distributed, traditional Lakshmi aarti is sung, and the pandit gives blessings for the coming year." }
    ],
    faq: [
      { q: "What is the exact muhurat for Lakshmi Puja on Diwali?", a: "The Lakshmi Puja muhurat changes every year based on the Pradosh Kaal and Nishita Kaal timings. Our pandit will confirm the exact muhurat for the current year when you book." },
      { q: "Can you do Diwali puja for businesses and offices in Bangalore?", a: "Yes, we offer Lakshmi Puja and Chopda Puja for homes, shops, and offices across Bangalore. Please mention if it's a business location while booking." },
      { q: "Do you provide the diyas and decorations for Lakshmi Puja?", a: "Our samagri package includes all puja items. Decorations like diyas, rangoli, and lights are typically arranged by the family. We bring the puja samagri, flowers, and prasad items." },
      { q: "How many family members should be present for Lakshmi Puja?", a: "Ideally all family members should be present during the puja. However, at minimum the head of the household or the woman of the house should perform the puja." },
      { q: "Is Lakshmi Puja different for Dhanteras and Diwali?", a: "Yes, Dhanteras Puja is simpler and focuses on Dhanvantari and Kuber puja with new item purchases. Diwali Lakshmi Puja is the main elaborate puja performed on Diwali night." }
    ],
    areas: ["Whitefield", "Sarjapur", "BTM Layout", "Hebbal", "Electronic City", "Indiranagar", "Marathahalli", "HSR Layout"]
  },
  {
    slug: "durga-puja",
    name: "Durga Puja",
    tagline: "Invoke the fierce grace of Goddess Durga",
    metaTitle: "Durga Puja Pandit Bangalore | Durga Saptashati Paath | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Durga Puja in Bangalore. Durga Saptashati paath, kumkum archana, havan. Available in Whitefield, Electronic City, HSR Layout & all areas.",
    primaryKeyword: "durga puja bangalore",
    intro: "When life feels overwhelming — challenges at work, health concerns, family struggles — the fierce grace of Goddess Durga cuts through all obstacles like a sword. Durga Puja, especially the powerful Durga Saptashati (Devi Mahatmyam) recitation, is one of the most potent spiritual interventions in Hinduism. For North Indian families in Bangalore, booking a pandit for Durga Puja at home means experiencing the same devotion and vibrancy that you'd find in any home back in UP, MP or Rajasthan. Our Hindi pandits bring complete knowledge of the Durga Saptashati and perform all 13 chapters with proper vidhi.",
    description: "Durga Puja is a grand celebration of Goddess Durga's victory over the demon Mahishasura. The puja is performed with elaborate rituals, devotional hymns from the Durga Saptashati, and ceremonial offerings. It bestows strength, courage, and divine protection on devotees.",
    duration: "2–4 Hours",
    price: "Contact for pricing",
    benefits: ["Strength and courage from Goddess Durga", "Victory over enemies and adversity", "Protection from evil and negative forces", "Fulfillment of desires", "Health, wealth and happiness"],
    whyImportant: ["Durga Saptashati (700 verses) recitation is considered one of the most powerful spiritual acts", "Goddess Durga removes the deepest-rooted problems that other remedies cannot resolve", "Kumkum Archana with 108 names pleases the Goddess and invites her specific blessings", "Performing Durga Puja during Navratri multiplies the benefits manifold"],
    rituals: ["Devi Avahan & Shodashopachara", "Durga Saptashati Paath", "Kumkum Archana", "Havan with beej mantras", "Maha Aarti & Prasad"],
    samagri: ["Red flowers", "Kumkum", "Sindoor", "Red cloth", "Coconut", "Sweets"],
    bestFor: "Overcoming challenges, protection, festivals, Navratri",
    image: "/images/pujas/durga-puja.png",
    deity: "Goddess Durga",
    category: "puja",
    process: [
      { step: "Book Your Date", desc: "Book Durga Puja for any day, especially during Navratri or on special personal occasions." },
      { step: "Pandit Confirmed", desc: "We assign a pandit experienced in Durga Saptashati recitation and confirm all details with you." },
      { step: "Puja with Paath", desc: "Pandit performs full Durga Puja with Saptashati recitation, kumkum archana, and offerings." },
      { step: "Havan & Aarti", desc: "Puja concludes with havan for purification and Durga Aarti with all family members present." }
    ],
    faq: [
      { q: "How much does Durga Puja cost in Bangalore?", a: "Durga Puja starts from Contact for Pricing for basic puja with Kumkum Archana. With full Saptashati Paath and Havan, it is Contact for Pricing." },
      { q: "How long does Durga Saptashati Paath take?", a: "Full Durga Saptashati Paath (all 700 verses across 13 chapters) takes 4–5 hours. We also offer shorter versions like Devi Mahatmya Shloka paath (1.5–2 hours) for smaller ceremonies." },
      { q: "Can Durga Puja be performed for specific wishes?", a: "Yes, Durga Puja with specific Sankalp (intention) and corresponding beej mantras is performed for specific wishes — health, protection, success, removing obstacles, or winning legal disputes." },
      { q: "Is Durga Puja the same as Navratri Puja?", a: "Durga Puja can be performed any day as a standalone ritual. Navratri Puja is the 9-day festival-specific puja. Both involve Durga worship but have different structures and scale." },
      { q: "Do you perform Durga Puja in apartment complexes in Bangalore?", a: "Yes, Durga Puja is regularly performed in apartments across Bangalore. Many apartment communities also book us for community Navratri pujas." }
    ],
    areas: ["Whitefield", "Electronic City", "HSR Layout", "Hebbal", "Marathahalli", "BTM Layout"]
  },
  {
    slug: "shiv-puja",
    name: "Shiv Puja",
    tagline: "Connect with the supreme consciousness of Lord Shiva",
    metaTitle: "Shiv Puja Pandit in Bangalore | Shivalinga Abhishek at Home | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Shiv Puja and Shivalinga Abhishek in Bangalore. Mondays, Shravan, Mahashivratri puja service. All Bangalore areas covered.",
    primaryKeyword: "shiv puja bangalore",
    intro: "Lord Shiva — Mahadev, the Great God — is one of the most widely worshipped deities among North Indian families. A regular Shiv Puja, especially on Mondays or during the holy month of Shravan, is a deeply rooted tradition that our community carries from generation to generation. If you're a Shiva devotee living in Bangalore — in Indiranagar, Yelahanka, or anywhere else in the city — our Hindi pandits for Shiv Puja bring the authentic North Indian Shiv Puja experience to your home, complete with bilva archana, panchamrit abhishek, and the soulful Om Namah Shivaya jaap.",
    description: "Shiv Puja is the daily or special worship of Lord Shiva. It is performed with offerings of Bilva leaves, water, milk and white flowers, accompanied by chanting of Om Namah Shivaya and other Shiva mantras. Mondays are especially auspicious for Shiv Puja.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Blessings of Lord Shiva for spiritual growth", "Relief from suffering and illness", "Attainment of moksha (liberation)", "Success in marriage and relationships", "Mental peace and clarity"],
    whyImportant: ["Shiva is the Supreme consciousness — worshipping him is said to dissolve the ego and bring true inner peace", "Offering bilva leaves to Shivalinga is said to be equivalent to offering one lakh flowers", "Regular Shiv Puja on Mondays is linked in tradition to improved marriage prospects and marital harmony", "Shravan month Shiv Puja is considered 100 times more powerful than puja performed at other times"],
    rituals: ["Shivalinga Abhishek with Jal and Milk", "Bilva Ashtakam recitation", "Om Namah Shivaya Jaap", "Panchamrit Abhishek", "Shiv Aarti"],
    samagri: ["Bilva leaves", "White flowers", "Milk", "Water", "Bhasma", "Rudraksha beads"],
    bestFor: "Mondays, Shravan month, Mahashivratri, marriage blessings",
    image: "/images/pujas/shiv-puja.png",
    deity: "Lord Shiva",
    category: "puja",
    process: [
      { step: "Book for Monday/Shravan", desc: "Book your preferred date — Mondays and Shravan days are most auspicious. We have dedicated Shravan packages." },
      { step: "Pandit Arrives with Samagri", desc: "Pandit brings bilva leaves, milk, flowers, bhasma, and dhatura (if available) for complete abhishek." },
      { step: "Abhishek & Paath", desc: "Shivalinga abhishek with panchamrit is performed with Bilva Ashtakam and Om Namah Shivaya jaap." },
      { step: "Shiv Aarti & Prasad", desc: "Concludes with the beautiful Shiv Aarti and distribution of prasad to all family members." }
    ],
    faq: [
      { q: "What is the cost of Shiv Puja in Bangalore?", a: "Shiv Puja starts from Contact for Pricing for a basic Monday puja. Rudrabhishek (more elaborate Shiv puja) starts from Contact for Pricing. Mahashivratri full-night puja packages are also available." },
      { q: "What items are offered in Shiv Puja?", a: "Shiva is offered bilva leaves, milk, water, dhatura, white flowers, bhasma, and rudraksha. Our pandit brings all these. Each offering has a specific spiritual significance that the pandit explains during the puja." },
      { q: "Can Shiv Puja be performed every Monday?", a: "Yes, we offer a monthly recurring Shiv Puja service for devoted Shiva worshippers. Book once and we'll send a pandit every Monday to your home in Bangalore." },
      { q: "Is Shiv Puja good for marriage-related problems?", a: "Yes, Shiv Puja and especially Rudrabhishek are traditionally performed for delayed marriages, marital disharmony, and Manglik dosh. Our pandit can advise the specific ritual for your requirement." },
      { q: "Do you perform Shiv Puja on Mahashivratri night in Bangalore?", a: "Yes, we have special Mahashivratri puja packages including night-long jagraan with Rudrabhishek every 3 hours. Book 2–3 weeks in advance as these slots fill very fast." }
    ],
    areas: ["Indiranagar", "Yelahanka", "BTM Layout", "HSR Layout", "Whitefield", "Hebbal", "Electronic City"]
  },
  {
    slug: "kali-puja",
    name: "Kali Puja",
    tagline: "Seek the transformative power of Goddess Kali",
    metaTitle: "Kali Puja Pandit in Bangalore | Tantrik Kali Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Kali Puja in Bangalore. Midnight Kali puja, Shodashopachara, Kali Sahasranama archana. Protection puja performed across Bangalore.",
    primaryKeyword: "kali puja bangalore",
    intro: "Goddess Kali — in her fierce, powerful form — is the ultimate destroyer of negativity and protector of her devotees. For North Indian families who worship Ma Kali for protection from evil eye (nazar), black magic, or during times of extreme difficulty, our pandits perform authentic Kali Puja in Bangalore with full Tantric-Puranic vidhi. Midnight Kali Puja on Diwali or during Navratri is especially powerful, and our experienced pandits who specialize in Kali worship ensure every mantra is recited correctly for maximum protective effect.",
    description: "Kali Puja is the worship of Goddess Kali, the fierce form of Goddess Durga. She is the destroyer of evil and the protector of devotees. The puja involves midnight rituals and Tantric mantras for protection and liberation.",
    duration: "2–4 Hours",
    price: "Contact for pricing",
    benefits: ["Protection from black magic and evil eye", "Courage and fearlessness", "Destruction of enemies", "Spiritual liberation", "Divine protection of the family"],
    whyImportant: ["Goddess Kali is worshipped specifically for protection against dark energies and evil forces", "Kali Puja on Diwali night (Kali Chaturdashi) is particularly powerful for removing negative influences", "Her midnight worship is said to destroy all fears and enemies of the devotee", "Tantric Kali puja with proper mantras creates a protective shield around the entire household"],
    rituals: ["Kali Avahan at midnight", "Shodashopachara Puja", "Kali Sahasranama Archana", "Tantric mantra recitation", "Aarti & Prasad"],
    samagri: ["Hibiscus flowers", "Blue cloth", "Coconut", "Incense", "Black sesame"],
    bestFor: "Protection from negative forces, spiritual seekers, festivals",
    image: "/images/pujas/kali-puja.png",
    deity: "Goddess Kali",
    category: "puja",
    process: [
      { step: "Book & Share Intention", desc: "Share the purpose of your Kali Puja — protection, nazar removal, spiritual growth, or festival observance." },
      { step: "Pandit Assigned", desc: "A pandit experienced in Shakta tradition and Kali worship is assigned specifically for this puja." },
      { step: "Midnight or Evening Puja", desc: "Kali Puja is performed at midnight (most powerful) or evening. All Tantric and Puranic vidhi is followed." },
      { step: "Protection Ritual", desc: "Special protective mantras are chanted for the household's protection and welfare as part of the concluding ritual." }
    ],
    faq: [
      { q: "What is the cost of Kali Puja in Bangalore?", a: "Kali Puja starts from Contact for Pricing for an evening puja. Midnight Kali Puja with full Tantric vidhi starts from Contact for Pricing due to the specialized nature of the ritual." },
      { q: "Is Kali Puja safe to perform at home?", a: "Yes, Kali Puja performed by an experienced pandit with proper Puranic vidhi is completely safe and auspicious. Our pandits follow the scriptural method which is protective in nature." },
      { q: "Can Kali Puja remove evil eye (nazar) and black magic?", a: "Yes, Kali Puja is specifically recommended for removing nazar (evil eye), black magic, and other negative influences. Our pandit performs specific protective mantras and rituals for this purpose." },
      { q: "When is the best time for Kali Puja?", a: "Diwali night (Kali Chaturdashi), Amavasya (new moon night), and Navratri are the most powerful times for Kali Puja. However, Kali can be worshipped on any day for protection." },
      { q: "Do you need animal sacrifice for Kali Puja?", a: "No, our pandits perform Kali Puja with symbolic offerings (coconut, red flowers) as per Puranic tradition without any animal sacrifice. This is the standard practice for home pujas." }
    ],
    areas: ["Whitefield", "BTM Layout", "Marathahalli", "Electronic City", "HSR Layout", "Hebbal"]
  },
  {
    slug: "vastu-puja",
    name: "Vastu Puja",
    tagline: "Harmonize your living space with cosmic energies",
    metaTitle: "Vastu Puja Pandit Bangalore | Vastu Shanti Puja | Radhe Radhe Puja",
    metaDescription: "Book experienced pandit for Vastu Puja and Vastu Shanti in Bangalore. Correct Vastu doshas in home and office. Complete Vastu puja with Navgraha havan. All Bangalore areas.",
    primaryKeyword: "vastu puja bangalore",
    intro: "Have you been experiencing unexplained health issues, frequent arguments at home, financial setbacks, or difficulty sleeping since moving into your current home or office? These could be signs of Vastu doshas — imbalances in the five elements (Pancha Bhuta) of your space. Vastu Puja and Vastu Shanti puja performed by our experienced Hindi pandits in Bangalore corrects these doshas without requiring any structural changes to your property. Whether you're in a flat in Sarjapur Road or an office in Electronic City, Vastu correction through proper Vedic ritual can transform the energy of your space significantly.",
    description: "Vastu Puja is performed to correct Vastu doshas in a home or office and to create harmony with the five elements. It involves worship of the Vastu Purush and is often combined with Navgraha Puja.",
    duration: "2–3 Hours",
    price: "Contact for pricing",
    benefits: ["Corrects Vastu doshas of the property", "Brings peace and harmony to the home", "Improves health, wealth and relationships", "Removes negative energies from the space", "Ensures smooth progress and prosperity"],
    whyImportant: ["Vastu doshas in the home directly affect the health, wealth, and harmony of the residents", "North-east corner imbalances affect mental health; South-west issues affect stability and finances", "Vastu Puja is a non-invasive way to correct doshas without construction or demolition", "It is mandatory as part of Griha Pravesh and recommended for any property with recurring problems"],
    rituals: ["Vastu Purush Puja", "Navgraha Havan", "Panchabhoota Puja", "Kalash Puja", "Aarti and Prasad"],
    samagri: ["Havan samagri", "Navdhanya", "Mango leaves", "Coconut", "Ghee", "Camphor"],
    bestFor: "New homes, renovation, business premises, resolving family disputes",
    image: "/images/pujas/vastu-puja.png",
    deity: "Vastu Purush & Navagraha",
    category: "puja",
    process: [
      { step: "Share Property Details", desc: "Share the floor plan or direction details of your property, and describe the issues you've been experiencing." },
      { step: "Vastu Assessment", desc: "Our pandit assesses the main Vastu doshas based on the property direction and provides recommendations." },
      { step: "Vastu Puja & Havan", desc: "Pandit performs Vastu Purush Puja, Navgraha havan, and specific remedial rituals for identified doshas." },
      { step: "Remedies Suggested", desc: "Pandit provides additional Vastu remedies (placement of items, colors, plants) alongside the puja for long-term correction." }
    ],
    faq: [
      { q: "How much does Vastu Puja cost in Bangalore?", a: "Vastu Puja starts from Contact for Pricing. Vastu Shanti Puja with full Navgraha havan and remedies consultation is Contact for Pricing depending on the property size." },
      { q: "Can Vastu Puja be done in a rented flat?", a: "Yes, Vastu Puja can and should be done in rented flats too. Since you can't make structural changes, Vastu Puja is the most practical way to correct energy imbalances in a rented space." },
      { q: "How is Vastu Puja different from Griha Pravesh?", a: "Griha Pravesh is done when entering a new home for the first time and includes Vastu Puja as part of it. Vastu Shanti Puja is done independently — usually for existing homes facing problems or after renovation." },
      { q: "Can Vastu Puja fix problems without changing the house structure?", a: "Yes, Vastu Puja through proper Vedic ritual can neutralize the negative effects of Vastu doshas without requiring any construction changes. It works on the energy level of the space." },
      { q: "Do you also offer Vastu consultation for offices in Bangalore?", a: "Yes, we offer Vastu Puja for both residential and commercial properties across Bangalore including offices, shops, factories, and co-working spaces." }
    ],
    areas: ["Sarjapur", "Electronic City", "Whitefield", "BTM Layout", "Marathahalli", "HSR Layout", "Indiranagar"]
  },
  {
    slug: "navgrah-shanti-puja",
    name: "Navgrah Shanti Puja",
    tagline: "Balance planetary energies & remove Graha Doshas",
    metaTitle: "Navgraha Puja Pandit Bangalore | Graha Shanti Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Navgraha Shanti Puja in Bangalore. Complete 9-planet puja with individual graha mantras, havan. Dosh Nivaran puja available. All Bangalore areas.",
    primaryKeyword: "navgraha puja bangalore",
    intro: "The nine planets (Navagrahas) in Vedic astrology govern every aspect of our lives — career, health, marriage, wealth, and mental peace. When certain planets are unfavorably placed in your birth chart (kundali), you experience specific difficulties in those areas of life. Navgrah Shanti Puja — the comprehensive worship of all nine planetary deities — corrects these imbalances and brings all planets into harmony. Our pandits in Bangalore who specialize in Navgrah puja perform this ritual with the correct beej mantras for each of the nine planets. If your jyotishi has recommended Navgrah Shanti, book your pandit in Bangalore today.",
    description: "Navgrah Shanti Puja involves the worship and appeasement of all nine planets in the Vedic system — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. It corrects planetary imbalances and removes graha doshas affecting various life areas.",
    duration: "2–3 Hours",
    price: "Contact for pricing",
    benefits: ["Balances all nine planetary energies", "Removes Graha Doshas from horoscope", "Improves career, health and relationships", "Reduces malefic planetary effects", "Strengthens benefic planetary influences"],
    whyImportant: ["Navgraha doshas are the most common cause of recurring problems in career, marriage, and health", "Beej mantras for each planet are scientifically designed to correct specific energy imbalances", "Navgrah Shanti before marriage, job change, or new venture is strongly recommended in North Indian tradition", "Shani (Saturn), Rahu, and Ketu doshas can cause prolonged suffering if left unaddressed"],
    rituals: ["Kalash Sthapana & Ganesh Puja", "Individual puja for each of 9 planets with beej mantras", "Navgrah Havan with specific havan samagri for each planet", "Planetary gemstone energization", "Aarti & Ashirvad"],
    samagri: ["Navdhanya (9 grains)", "9 different flowers", "9 different incenses", "Ghee", "Specific items for each planet"],
    bestFor: "Horoscope doshas, career problems, marriage delays, health issues, new ventures",
    image: "/images/pujas/navgrah-shanti-puja.png",
    deity: "Navagraha Devatas",
    category: "puja",
    process: [
      { step: "Share Kundali Details", desc: "Share your birth details (date, time, place) for the pandit to assess which graha doshas need to be addressed." },
      { step: "Dosh Assessment", desc: "Our pandit analyzes the specific Navgraha positions and recommends the appropriate puja or upay." },
      { step: "Full Navgrah Puja", desc: "Each of the 9 planets is worshipped with specific flowers, colors, foods, and beej mantras in sequence." },
      { step: "Havan & Blessings", desc: "Havan with specific samagri for each planet concludes the puja for complete planetary harmony." }
    ],
    faq: [
      { q: "How much does Navgrah Shanti Puja cost in Bangalore?", a: "Navgrah Shanti Puja starts from Contact for Pricing for a standard puja. Full Navgrah Havan with beej mantra jaap for each planet is Contact for Pricing." },
      { q: "How is Navgrah Puja different from individual planet pujas like Shani Puja?", a: "Individual planet pujas (like Shani Puja, Mangal Puja) target one specific planet. Navgrah Shanti Puja appease all nine planets simultaneously for comprehensive graha balance." },
      { q: "Which planets require special attention in Navgrah Puja?", a: "Shani (Saturn), Rahu, and Ketu are considered the most challenging planets and require specific attention. Our pandit will identify which planets are most malefic in your chart and give extra mantra recitations for them." },
      { q: "Can Navgrah Puja fix delayed marriage in the horoscope?", a: "Yes, if marriage delay is caused by planetary doshas (Manglik, Shani aspecting 7th house, or Rahu-Ketu in marriage house), Navgrah Shanti Puja combined with specific remedies can significantly help." },
      { q: "How often should Navgrah Shanti Puja be performed?", a: "Once per year on your birthday (Janam Nakshatra) is ideal. For severe doshas, our pandit may recommend a specific schedule based on planetary transit periods." }
    ],
    areas: ["Whitefield", "BTM Layout", "Electronic City", "HSR Layout", "Marathahalli", "Indiranagar"]
  },
  {
    slug: "bhumi-pujan",
    name: "Bhumi Pujan",
    tagline: "Seek blessings of Mother Earth before beginning construction",
    metaTitle: "Bhumi Pujan Pandit Bangalore | Land Puja for Construction | Radhe Radhe Puja",
    metaDescription: "Book experienced pandit for Bhumi Pujan in Bangalore. Foundation stone puja, land puja before construction. Complete bhumi puja with havan and Vastu rituals.",
    primaryKeyword: "bhoomi pujan pandit bangalore",
    intro: "Before breaking ground on any construction — your dream home, an office building, or a commercial property — Bhumi Pujan is the essential Vedic ritual that seeks the permission and blessings of Mother Earth (Bhoomi Devi). This ritual is performed with full Vedic vidhi to ensure the construction proceeds smoothly without accidents, the building brings prosperity to its occupants, and the Vastu of the structure is auspicious from the very beginning. Our pandits in Bangalore perform Bhumi Pujan at residential plots, commercial sites, and apartment foundation ceremonies across the city.",
    description: "Bhumi Pujan (also called Bhoomi Pujan or Foundation Puja) is the Vedic ritual performed before beginning any construction. It involves worship of Bhoomi Devi (Mother Earth), Vastu Devata, and Navagrahas to ensure a smooth, accident-free construction and a prosperous outcome.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Blessings of Mother Earth for the construction", "Protection from construction accidents", "Vastu-aligned foundation for the building", "Smooth, timely completion of construction", "Prosperity for all who will occupy the building"],
    whyImportant: ["Bhumi Pujan acknowledges that the land belongs to Mother Earth and seeks her permission for construction", "It is considered inauspicious to begin any construction without this ritual in North Indian tradition", "Vastu Devata puja during Bhumi Pujan sets the Vastu alignment of the entire building correctly", "Proper Bhumi Pujan protects against accidents, delays, and financial problems during construction"],
    rituals: ["Kalash Sthapana & Ganesh Puja", "Bhoomi Devi Puja & Prarthana", "Vastu Devata Puja", "Havan & Purnahuti", "First digging ritual (Khodai)"],
    samagri: ["Havan samagri", "Silver coin", "Navdhanya", "Ghee", "Flowers", "Coconut"],
    bestFor: "New construction, house, office, plot development",
    image: "/images/pujas/bhumi-pujan.png",
    deity: "Bhoomi Devi & Vastu Devata",
    category: "puja",
    process: [
      { step: "Share Site Details", desc: "Provide the plot address and direction details. Share the construction start date for muhurat calculation." },
      { step: "Muhurat Selected", desc: "Our pandit selects the most auspicious muhurat for Bhumi Pujan based on current planetary positions." },
      { step: "Puja at Site", desc: "Pandit performs full Bhoomi Devi puja, Vastu Devata puja, and havan at the construction site." },
      { step: "First Khodai Ritual", desc: "The owner/builder performs the first symbolic digging at the north-east corner while the pandit chants blessings." }
    ],
    faq: [
      { q: "How much does Bhumi Pujan cost in Bangalore?", a: "Bhumi Pujan starts from Contact for Pricing for a residential plot. Commercial property Bhumi Pujan with larger havan starts from Contact for Pricing." },
      { q: "Who should be present for Bhumi Pujan?", a: "The owner or main builder should be present. It's ideal to have key family members or partners present. The more people who witness and participate, the stronger the collective intention." },
      { q: "Can Bhumi Pujan be performed at an apartment site?", a: "Yes, Bhumi Pujan (or Foundation Stone ceremony) is regularly performed for apartments and commercial complexes. We coordinate with the builder or society for the appropriate location at the site." },
      { q: "What should I keep ready at the site for Bhumi Pujan?", a: "Our pandit brings all samagri. You should ensure the site is clean and accessible. A small area for the havan kund (3x3 feet) should be kept clear. Silver or copper coins for the khodai ritual are customary." },
      { q: "Is Bhumi Pujan necessary if we're building in a gated community in Bangalore?", a: "Yes, even if the builder performs a community foundation ceremony, individual Bhumi Pujan for your specific plot or flat unit is recommended for personalized blessings and Vastu alignment." }
    ],
    areas: ["Whitefield", "Sarjapur", "Yelahanka", "Hebbal", "Electronic City", "Marathahalli"]
  },
  {
    slug: "maha-mrityunjaya-jaap",
    name: "Maha Mrityunjaya Jaap",
    tagline: "The most powerful Shiva mantra for health & longevity",
    metaTitle: "Maha Mrityunjaya Jaap Pandit Bangalore | Health Puja | Radhe Radhe Puja",
    metaDescription: "Book experienced pandit for Maha Mrityunjaya Jaap in Bangalore. 1.25 lakh jaap, havan for health, illness recovery and longevity. Hindi pandit available across Bangalore.",
    primaryKeyword: "maha mrityunjaya jaap pandit",
    intro: "When someone in the family is going through a serious illness, surgery, or a period of extreme danger, the Maha Mrityunjaya Mantra — Om Tryambakam Yajamahe — becomes the most powerful spiritual lifeline in Hinduism. This is the mantra of Lord Shiva that conquers death and grants healing, longevity, and liberation. Our pandits in Bangalore perform the Maha Mrityunjaya Jaap with full 1.25 lakh (125,000) mantra recitations as prescribed in the Vedic texts, followed by Havan for maximum benefit. For North Indian families seeking this powerful remedy, our pandit service in Bangalore ensures the jaap is performed with complete scriptural accuracy.",
    description: "Maha Mrityunjaya Jaap is the Vedic ritual of reciting the Maha Mrityunjaya Mantra — the most powerful healing mantra in Hinduism — in prescribed numbers (1.25 lakh or more) for the restoration of health, removal of death fears, and divine protection of the person for whom it is performed.",
    duration: "8–12 Hours (full jaap)",
    price: "Contact for pricing",
    benefits: ["Recovery from serious illness", "Protection from accidents and premature death", "Longevity and good health", "Relief from fear and anxiety", "Healing of chronic health conditions"],
    whyImportant: ["Maha Mrityunjaya is described in the Rig Veda as the most powerful mantra for conquering death", "1.25 lakh recitations create a powerful Sankalp Shakti (intentional energy) around the person it is performed for", "Doctors and medical science have documented cases of unexpected recovery of patients after this jaap", "It is recommended for anyone undergoing surgery, serious illness, or extreme danger"],
    rituals: ["Sankalp with person's name & gotra", "1.25 lakh Maha Mrityunjaya Mantra jaap", "Havan with bilva leaves and ghee", "Abhishek of Shivalinga", "Final aarti and prasad"],
    samagri: ["Bilva leaves (1.25 lakh)", "Ghee", "Sesame", "Havan samagri", "Milk for abhishek"],
    bestFor: "Serious illness, surgery recovery, accident prevention, longevity rituals",
    image: "/images/pujas/maha-mrityunjaya-jaap.png",
    deity: "Lord Shiva (Mrityunjaya Form)",
    category: "puja",
    process: [
      { step: "Share Person's Details", desc: "Provide the name, gotra, and birth details of the person for whom the jaap is being performed." },
      { step: "Schedule the Jaap Day", desc: "Full 1.25 lakh jaap is typically done over 1–3 days. We can also arrange for multiple pandits to complete it in one day." },
      { step: "Jaap Performed", desc: "Pandits perform the complete mantra recitation with proper Sankalp, maintaining ritual purity throughout." },
      { step: "Havan & Purnahuti", desc: "Havan with bilva leaves and ghee is performed as Dashansh (10% of jaap count) to complete the ritual." }
    ],
    faq: [
      { q: "How much does Maha Mrityunjaya Jaap cost in Bangalore?", a: "1.25 lakh Maha Mrityunjaya Jaap starts from Contact for Pricing with 2 pandits over 1–2 days. Ekadashi Mrityunjaya Jaap (11,000 recitations) starts from Contact for Pricing." },
      { q: "Does the person need to be physically present for the jaap?", a: "No, the jaap is performed with the person's name and Sankalp (intention). The person can be anywhere — even in a hospital — and receives the benefit of the jaap." },
      { q: "How many pandits do you provide for the jaap?", a: "For 1.25 lakh jaap, we provide 2–4 pandits. More pandits are needed if the jaap is to be completed in a single day. We customize based on your requirement and budget." },
      { q: "Can Maha Mrityunjaya Jaap be done for someone who is not Hindu?", a: "The jaap is offered for the wellbeing of any person. The intent is universal — health and life protection — regardless of religion." },
      { q: "How often should Maha Mrityunjaya Jaap be performed?", a: "For immediate health crises, it is performed once with 1.25 lakh jaap. For ongoing health maintenance or protection, we recommend performing it annually on the person's birthday or Mahashivratri." }
    ],
    areas: ["Whitefield", "Electronic City", "HSR Layout", "BTM Layout", "Marathahalli", "Indiranagar", "Hebbal"]
  },
  {
    slug: "sundarkand-path",
    name: "Sundarkand Path",
    tagline: "Hanuman ji's devotion — the chapter of victory and hope",
    metaTitle: "Sundarkand Path Pandit Bangalore | Hanuman Paath | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Sundarkand Path in Bangalore. Complete Sundarkand Paath from Ramcharitmanas with Hanuman Chalisa. Available every Tuesday and Saturday.",
    primaryKeyword: "sundarkand path bangalore",
    intro: "Sundarkand — the fifth chapter of the Ramcharitmanas — is the beautiful chapter of Hanuman ji's devotion, determination, and ultimate success. For North Indian families in Bangalore, Sundarkand Path is one of the most beloved and comforting spiritual practices, especially when facing seemingly impossible situations, long-standing obstacles, or during periods of hopelessness. When Hanuman ji crossed the ocean with unwavering devotion to find Ma Sita, he showed us that no obstacle is too great with faith. Our Hindi pandits in Bangalore perform Sundarkand Path every Tuesday and Saturday — the most auspicious days for Hanuman puja — in your home.",
    description: "Sundarkand Path is the recitation of the fifth chapter of the Ramcharitmanas by Goswami Tulsidas, which narrates Hanuman ji's journey to Lanka, his meeting with Sita Mata, and his victory over Ravana's forces. It is one of the most popular devotional recitations in North Indian households.",
    duration: "3–4 Hours",
    price: "Contact for pricing",
    benefits: ["Removal of obstacles from all life areas", "Restoration of hope in difficult situations", "Blessings of Lord Hanuman for strength and courage", "Positive energy and peace in the household", "Success in pending tasks and long-delayed goals"],
    whyImportant: ["Sundarkand is the chapter of victory — listening to it creates powerful vibrations of success and hope", "Tuesdays and Saturdays are Hanuman ji's special days — Sundarkand on these days brings maximum benefit", "Regular Sundarkand Path in the home prevents negativity from entering and strengthens family bonds", "It is especially recommended for those going through court cases, property disputes, or career obstacles"],
    rituals: ["Ganesh Puja & Hanuman Avahan", "Complete Sundarkand recitation (all dohas and choupais)", "Hanuman Chalisa recitation", "Prasad offering (besan ke laddoo or motichoor)", "Aarti & Ashirvad"],
    samagri: ["Sindoor", "Jasmine flowers", "Sesame oil lamp", "Besan laddoo", "Red cloth"],
    bestFor: "Obstacles, court cases, career setbacks, Tuesday/Saturday worship",
    image: "/images/pujas/sundarkand-path.png",
    deity: "Lord Hanuman",
    category: "puja",
    process: [
      { step: "Book for Tuesday or Saturday", desc: "These are the most auspicious days for Hanuman ji. Book at least 2 days in advance to confirm a pandit." },
      { step: "Pandit Arrives with Samagri", desc: "Pandit brings sindoor, flowers, laddoo prasad, and the Ramcharitmanas for the path." },
      { step: "Sundarkand Paath", desc: "The complete Sundarkand is recited melodiously, with brief explanations of key passages for the family." },
      { step: "Aarti & Prasad", desc: "Hanuman ji's aarti is performed followed by distribution of besan laddoo prasad and pandit's blessings." }
    ],
    faq: [
      { q: "How long does Sundarkand Path take?", a: "Complete Sundarkand Path takes 3–4 hours. We also offer a shorter version (Sundarkand Saar) that takes 1.5–2 hours if time is limited." },
      { q: "Can Sundarkand be done on any day?", a: "Sundarkand can be done any day but Tuesdays and Saturdays are most auspicious for Hanuman ji worship. Full moon (Purnima) is also very auspicious." },
      { q: "Is Sundarkand Path done in Hindi?", a: "Yes, Sundarkand is from the Ramcharitmanas, which is written in Awadhi (a form of Hindi). Our pandits recite it in the original language with proper pronunciation and melody." },
      { q: "Can Sundarkand be performed for court case success?", a: "Yes, Sundarkand is specifically recommended for court cases and legal disputes. Hanuman ji's victory over obstacles makes this an especially appropriate ritual for legal matters." },
      { q: "Do you offer regular weekly Sundarkand service in Bangalore?", a: "Yes, we offer a monthly package where our pandit visits your home every Tuesday or Saturday for Sundarkand Path. This creates a powerful spiritual practice for your family." }
    ],
    areas: ["Whitefield", "Marathahalli", "Indiranagar", "HSR Layout", "BTM Layout", "Electronic City", "Hebbal", "Yelahanka"]
  },
  {
    slug: "ramayan-path",
    name: "Ramayan Path",
    tagline: "The complete epic of righteousness, devotion & victory",
    metaTitle: "Ramayan Path Pandit Bangalore | Ram Katha | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Ramayan Path in Bangalore. Complete Ramcharitmanas recitation, Ram Katha, Navah Parayan. Available for home and community programs.",
    primaryKeyword: "ramayan path pandit bangalore",
    intro: "The Ramcharitmanas — Goswami Tulsidas's immortal retelling of Lord Rama's story — is the sacred scripture of millions of North Indian households. Ramayan Path, whether a single sitting or a full 9-day Navah Parayan, is one of the most auspicious activities a family can undertake. For North Indian families in Bangalore who want to organize a Ramayan Path at home — for a family occasion, a memorial, or simply out of devotion — our experienced Hindi pandits bring the same warmth and spiritual depth that you'd find in any Ram Katha back home. Our pandits are trained in melodious recitation and can explain the story in simple Hindi for all generations to enjoy.",
    description: "Ramayan Path is the organized recitation of the Ramcharitmanas (or Valmiki Ramayana) by one or more pandits. It can be a single-day recitation or a full Navah Parayan (9-day recitation of all 7 Kands). It is performed for auspicious occasions, memorials, and devotional purposes.",
    duration: "1 Day or 9 Days",
    price: "Contact for pricing",
    benefits: ["Immense spiritual merit for the entire family", "Peace and positivity in the household", "Blessings of Lord Rama and all his devotees", "Purification of the home environment", "Cultural enrichment for children and family"],
    whyImportant: ["The Ramcharitmanas is said to be equal to a sacred pilgrimage when recited completely at home", "Ram's story teaches righteousness (Dharma) — essential values for all generations", "Navah Parayan (9-day Ram path) creates a powerfully positive spiritual environment in the home", "In North Indian tradition, Ramayan Path at memorial services is considered one of the highest tributes"],
    rituals: ["Ram Parivar Puja & Sankalp", "Sequential recitation of all 7 Kands", "Daily Ram Aarti after each session", "Sundar Kand special recitation on Hanuman Jayanti (if during the path)", "Final Aarti and prasad distribution"],
    samagri: ["Ramcharitmanas book", "Ram parivar photos/idols", "Tulsi", "Flowers", "Prasad items"],
    bestFor: "Devotional occasions, memorials, anniversaries, community events",
    image: "/images/pujas/ramayan-path.png",
    deity: "Lord Rama",
    category: "puja",
    process: [
      { step: "Choose Duration & Date", desc: "Decide between single-day Ram path, 3-day, or full 9-day Navah Parayan. Share your occasion and expected audience size." },
      { step: "Pandit Team Assigned", desc: "We assign a team of experienced pandits trained in melodious Ramayan recitation." },
      { step: "Daily Sessions", desc: "Each session follows a set schedule — recitation, aarti, brief discourse for the audience." },
      { step: "Grand Conclusion", desc: "The final day includes Havan, Ram Lalla Puja, and the full ceremonial aarti with all attendees." }
    ],
    faq: [
      { q: "How much does Ramayan Path cost in Bangalore?", a: "Single-day Ram path starts from Contact for Pricing. Full 9-day Navah Parayan with multiple pandits starts from Contact for Pricing, depending on the number of pandits and samagri." },
      { q: "How many pandits are needed for Ramayan Path?", a: "For a single-day path, 1–2 pandits suffice. For 9-day Navah Parayan, 2–4 pandits are ideal for maintaining energy and rotating recitation roles." },
      { q: "Can Ramayan Path be organized in an apartment community hall in Bangalore?", a: "Yes, we regularly organize community Ramayan Paths in apartment clubs and common halls. We handle all arrangements including PA system, seating, and samagri." },
      { q: "Is Ramayan Path appropriate for memorial services (Shraadh)?", a: "Yes, Ramayan Path is one of the highest forms of tribute to a departed soul in North Indian tradition. It brings peace to the departed and merit to the performing family." },
      { q: "Can children understand the Ramayan Path?", a: "Our pandits narrate key episodes in simple Hindi that children can follow and enjoy. Many families book Ramayan Path specifically for cultural education of their children." }
    ],
    areas: ["Whitefield", "Marathahalli", "BTM Layout", "HSR Layout", "Electronic City", "Indiranagar", "Hebbal", "Yelahanka"]
  },
  // ─── LIFE EVENT PAGES ───────────────────────────────────────────────────────
  {
    slug: "namkaran-ceremony",
    name: "Namkaran Ceremony",
    tagline: "Give your newborn a blessed & auspicious name",
    metaTitle: "Namkaran Pandit Bangalore | Baby Naming Ceremony | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Namkaran ceremony in Bangalore. Auspicious name selection, Janam Kundali, Graha Shanti. Available for all Bangalore areas.",
    primaryKeyword: "namkaran pandit bangalore",
    intro: "Your baby's first name is one of the most important gifts you'll give them — and in North Indian tradition, Namkaran (naming ceremony) is the sacred Samskara that makes this moment complete. Performed on the 11th or 12th day after birth (or on a mutually chosen auspicious date), the Namkaran ceremony involves our pandit calculating your child's birth Rashi and Nakshatra, suggesting auspicious name letters, and performing a puja to bless the child for a long, healthy, and prosperous life. For North Indian families in Bangalore, this ceremony creates that cherished memory that the child will look back on for years to come.",
    description: "Namkaran (Naming Ceremony) is one of the sixteen Samskaras in Hinduism, performed on the 11th or 12th day after the birth of a child. The pandit calculates the child's birth rashi and nakshatra to suggest auspicious name letters.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Divine blessings for the newborn", "Auspicious name selection based on horoscope", "Protection of the child", "Long, healthy and prosperous life", "Family bonding celebration"],
    whyImportant: ["In Vedic tradition, a child's name carries vibrations that shape their entire life journey", "Names aligned with the birth Nakshatra create a harmonic resonance that supports the child's destiny", "Namkaran is the formal introduction of the child to the family and divine powers", "It is traditionally the first social ceremony of the child's life in North Indian culture"],
    rituals: ["Janam Kundali preparation", "Ganesh Puja", "Nakshatranama & Vyavaharika Nama", "Graha Shanti Puja", "Aarti & Prasad"],
    samagri: ["Flowers", "Fruits", "Sweets", "New clothes for baby", "Gold/silver coin"],
    bestFor: "Naming ceremony on day 11/12 or 100 days after birth",
    image: "/images/pujas/namkaran-ceremony.png",
    deity: "Lord Ganesha & Navagraha",
    category: "life-event",
    process: [
      { step: "Share Baby's Birth Details", desc: "Share the exact birth date, time, and place of birth for Janam Kundali and Nakshatra calculation." },
      { step: "Name Letter Suggestions", desc: "Pandit provides auspicious first letter options for the name based on the birth Nakshatra and Rashi." },
      { step: "Namkaran Ceremony", desc: "On the chosen day, pandit performs Namkaran puja with Graha Shanti and formally announces the child's name." },
      { step: "Aarti & Family Celebration", desc: "Ceremony concludes with aarti, blessings for the child, and distribution of sweets to family members." }
    ],
    faq: [
      { q: "When should Namkaran ceremony be performed?", a: "Traditionally on the 11th or 12th day after birth. However, many families perform it on the 21st day, 1 month, or 3 months. Our pandit selects a good muhurat for any date you choose." },
      { q: "Does the pandit prepare the baby's birth chart (kundali)?", a: "Yes, our pandit prepares a basic Janam Kundali for the baby and uses it to determine the auspicious name letters, Rashi, and Nakshatra." },
      { q: "Can the name be in any language?", a: "The name should have an auspicious starting letter based on the birth Nakshatra. Within that letter, the name can be in any language — Hindi, Sanskrit, or English." },
      { q: "Can Namkaran be performed at a hospital?", a: "It is preferred to perform Namkaran at home after the mother and baby have returned from the hospital. However, we can arrange a simple version if needed." },
      { q: "What is the difference between Namkaran and Naamkaran puja?", a: "They are the same — Namkaran and Naamkaran both refer to the baby naming ceremony. Regional spellings vary but the ceremony is identical." }
    ],
    areas: ["Whitefield", "Sarjapur", "BTM Layout", "HSR Layout", "Electronic City", "Indiranagar", "Marathahalli", "Hebbal"]
  },
  {
    slug: "mundan-ceremony",
    name: "Mundan Ceremony",
    tagline: "First haircut ritual for your child's health & wellbeing",
    metaTitle: "Mundan Ceremony Pandit Bangalore | First Haircut Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Mundan ceremony in Bangalore. Complete Chudakarana Samskara with Graha Shanti. Available for home ceremonies across all Bangalore areas.",
    primaryKeyword: "mundan puja pandit bangalore",
    intro: "A child's first haircut is much more than a grooming event in North Indian culture — it is the sacred Mundan ceremony (Chudakarana Samskara), one of the 16 essential life rituals of Hinduism. Believed to remove past-life karma, purify the child, and promote healthy physical and spiritual growth, the Mundan ceremony is one of the most joyful family gatherings in our community. Whether you're planning your child's Mundan at 1 year, 3 years, or 5 years, our Hindi pandits in Bangalore perform the complete Chudakarana vidhi with the right muhurat and all traditional rituals.",
    description: "Mundan (Chudakarana) is the sacred ceremony of a child's first haircut, usually performed when the child is 1, 3 or 5 years old. It is believed to remove past-life karma and promote healthy growth.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Removes past-life karma from the child", "Promotes healthy growth of hair", "Blessings for a long, healthy life", "Spiritual purification of the child", "Auspicious transition into new life stage"],
    whyImportant: ["Birth hair carries the energy of past lives — Mundan removes this connection and gives the child a fresh spiritual start", "The first hair grown after Mundan is said to be stronger, thicker, and healthier", "Mundan at odd years (1st, 3rd, 5th) is considered more auspicious in North Indian tradition", "It is traditionally performed at sacred sites or the family home with full ritual honors"],
    rituals: ["Ganesh Puja & Graha Shanti", "Mrigashira Nakshatra selection", "Sacred head-shaving ritual", "Kesh Dan (donation of hair)", "Aarti and Prasad"],
    samagri: ["New razor/scissors", "Curd", "Milk", "Flowers", "New clothes for child"],
    bestFor: "Boys and girls aged 1, 3, or 5 years",
    image: "/images/pujas/mundan-ceremony.png",
    deity: "Lord Ganesha & Lord Vishnu",
    category: "life-event",
    process: [
      { step: "Choose Age & Date", desc: "Inform us of the child's age and your preferred date. Pandit selects an auspicious muhurat." },
      { step: "Pandit Arranges Ritual Setup", desc: "The ceremonial setup with flowers, curd, coconut, and the sacred items is arranged at your home." },
      { step: "Mundan Ritual", desc: "Pandit performs Ganesh Puja, Graha Shanti, and then conducts the ceremonial first cut of the child's hair." },
      { step: "Kesh Dan & Prasad", desc: "The cut hair is offered to a river or sacred place (symbolically). Aarti is performed and sweets are distributed." }
    ],
    faq: [
      { q: "What is the best age for Mundan ceremony?", a: "Mundan is most auspicious at 1 year, 3 years, or 5 years of age. Odd years are preferred in most North Indian regional traditions." },
      { q: "Can a barber come home for the Mundan?", a: "Yes, many families arrange for a trusted barber to come home for the actual hair cutting, with our pandit performing all the rituals. We can help coordinate this if needed." },
      { q: "Where should the cut hair be disposed of?", a: "Traditionally the hair is offered in a river (like Haridwar or nearby water body). Symbolically in Bangalore, many families wrap it in a cloth and immerse it in a water body or give it to the pandit who disposes of it appropriately." },
      { q: "Can Mundan be performed at a temple in Bangalore?", a: "Yes, some Bangalore temples allow Mundan ceremonies on their premises. Our pandit can perform the ritual both at temples and at home." },
      { q: "Is Mundan ceremony performed for girls too?", a: "Yes, in many North Indian communities, Mundan is performed for girls too. It is equally auspicious for girls as for boys. Our pandit follows the appropriate vidhi for girls." }
    ],
    areas: ["Whitefield", "BTM Layout", "Electronic City", "Sarjapur", "HSR Layout", "Indiranagar", "Marathahalli"]
  },
  {
    slug: "annaprashan-puja",
    name: "Annaprashan Puja",
    tagline: "Baby's first food ceremony — a joyful milestone puja",
    metaTitle: "Annaprashan Puja Pandit Bangalore | First Rice Ceremony | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Annaprashan puja in Bangalore. Complete first rice ceremony with Graha Shanti and career selection ritual. All Bangalore areas covered.",
    primaryKeyword: "annaprashan puja pandit",
    intro: "Your baby's first taste of solid food is a milestone worthy of celebration — and in North Indian tradition, Annaprashan is the sacred puja that marks this moment with divine blessings. Performed when the baby is 6 months old (for boys) or 5 months old (for girls), Annaprashan involves a beautiful ritual where the father or a family elder feeds the baby the first mouthful of kheer or rice, while the pandit chants Vedic blessings for the child's health, intelligence, and prosperity. The charming 'career selection' tradition — where the baby chooses from various objects placed before them — makes this ceremony one of the most photographed family moments!",
    description: "Annaprashan is the Hindu baby's first solid food ceremony — one of the important Samskaras. It is performed when the baby is 6 months old and involves feeding the first solid food with Vedic blessings and rituals for the child's health and prosperity.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Blessings for baby's healthy digestion and growth", "Divine blessings for intelligence and prosperity", "Career selection ritual (fun and auspicious)", "Family gathering occasion", "Protection of the baby"],
    whyImportant: ["Annaprashan is the formal initiation of the child into the eating of solid food with divine blessings", "The Vedic mantras chanted during Annaprashan are specifically for promoting brain development and healthy growth", "The career selection ritual (books, coins, soil, pen, etc.) is a beloved North Indian tradition", "It marks the beginning of the child's connection to the earth's nourishment and community"],
    rituals: ["Ganesh Puja & Navgraha Invocation", "Kheer or sweet rice preparation", "Annaprashan mantra recitation", "Father/family elder feeds first morsel", "Career selection (Bournvita) ritual"],
    samagri: ["Sweet rice/kheer", "Silver plate and spoon", "Flowers", "Career selection items", "Sweets for prasad"],
    bestFor: "6-month-old babies (boys), 5-month-old (girls), first solid food",
    image: "/images/pujas/annaprashan-puja.png",
    deity: "Lord Ganesha & Annapurna Devi",
    category: "life-event",
    process: [
      { step: "Book & Share Baby Details", desc: "Share the baby's date of birth and preferred ceremony date for our pandit to calculate the appropriate muhurat." },
      { step: "Setup at Home", desc: "Arrange a beautiful space with the silver plate, career selection objects, and flowers. Our pandit handles all puja items." },
      { step: "Annaprashan Puja", desc: "Pandit performs Ganesh Puja and specific Annaprashan mantras while the family gathers around the baby." },
      { step: "First Feeding & Career Selection", desc: "The first morsel is fed with ceremony, followed by the fun career selection ritual. Aarti and photos conclude the celebration." }
    ],
    faq: [
      { q: "At what age should Annaprashan be performed?", a: "Traditionally at 6 months for boys and 5 months for girls. However, the exact timing depends on the baby's readiness for solid food — our pandit selects the best auspicious date." },
      { q: "What is the career selection ritual in Annaprashan?", a: "Objects representing different life paths (book for education, pen for writing, soil for farming, coin for business, etc.) are placed before the baby, and whatever the baby touches first is considered an indication of future inclination." },
      { q: "What food is traditionally given in Annaprashan?", a: "Kheer (sweet rice pudding) or halwa is the traditional first food in North Indian Annaprashan. Our pandit will guide you on the preparation and specific additions (ghee, honey) based on your family tradition." },
      { q: "Can Annaprashan be performed at a restaurant or venue?", a: "Yes, many families in Bangalore host Annaprashan in restaurants or banquet halls. Our pandit performs the ritual at the venue — just ensure there is a space for the puja setup." },
      { q: "Do you provide the silver plate and spoon for Annaprashan?", a: "We recommend families arrange a silver or stainless steel plate and spoon as they are often kept as family heirlooms. We provide all other puja samagri." }
    ],
    areas: ["Whitefield", "HSR Layout", "Indiranagar", "BTM Layout", "Electronic City", "Sarjapur", "Marathahalli"]
  },
  {
    slug: "godh-bharai",
    name: "Godh Bharai",
    tagline: "Blessed baby shower celebration in North Indian tradition",
    metaTitle: "Godh Bharai Pandit Bangalore | Baby Shower Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Godh Bharai (baby shower puja) in Bangalore. Complete Satyanarayan puja, Goddess blessings for mother and child. All Bangalore areas covered.",
    primaryKeyword: "godh bharai pandit bangalore",
    intro: "Godh Bharai — the North Indian baby shower — is one of the most joyful and colorful celebrations in our culture. More than just a party, it is a sacred occasion where the mother-to-be is seated in the lap (godh) of the family's elders, blessed with gifts, and the puja is performed for the health and safety of both mother and child during the final stretch of pregnancy. For North Indian families in Bangalore, Godh Bharai with a proper Hindi pandit combines the spiritual blessing with the fun cultural traditions — from the gift-giving to the saree draping and the mango eating ritual. We make this occasion complete.",
    description: "Godh Bharai is the North Indian equivalent of a baby shower, performed in the 7th or 9th month of pregnancy. It includes a puja for the blessings and protection of the mother and unborn child, followed by traditional gift-giving ceremonies.",
    duration: "1–2 Hours (puja portion)",
    price: "Contact for pricing",
    benefits: ["Divine protection for mother and unborn child", "Easy and safe delivery blessings", "Health and prosperity for the new baby", "Family bonding occasion", "Removal of nazar (evil eye) from mother"],
    whyImportant: ["The 7th and 9th months of pregnancy are considered particularly sensitive — Godh Bharai's rituals protect both mother and child", "The puja includes special mantras for safe delivery and healthy birth", "Nazar (evil eye) removal is an essential part of the ritual for the vulnerable mother", "It is one of the most anticipated family celebrations that bring all women of the family together"],
    rituals: ["Satyanarayan Puja or Goddess Puja", "Nazar Utarna ritual for mother", "Godh Bharna (lap filling) ceremony", "Mango and fruit feeding ritual", "Aarti and blessings from elders"],
    samagri: ["Flowers", "Fruits", "Saree & bangles for mother", "Mango pieces", "Sweets"],
    bestFor: "7th or 9th month of pregnancy, first pregnancy especially",
    image: "/images/pujas/godh-bharai.png",
    deity: "Goddess Parvati & Santoshi Mata",
    category: "life-event",
    process: [
      { step: "Book the Ceremony", desc: "Share the expected date (7th or 9th month of pregnancy) and your guest list size for setup planning." },
      { step: "Pandit Performs Puja", desc: "Satyanarayan puja or Goddess puja is performed for the health and safety of mother and child." },
      { step: "Traditional Rituals", desc: "Nazar Utarna, Godh Bharna, fruit feeding, and saree ceremony are performed with the pandit's guidance." },
      { step: "Family Celebration", desc: "After the puja, the family celebration with gifts, food, and blessings continues in a joyful atmosphere." }
    ],
    faq: [
      { q: "When should Godh Bharai be performed?", a: "Traditionally in the 7th month of pregnancy (sometimes 9th month). Most families choose an auspicious day during this period." },
      { q: "Can the Godh Bharai puja and celebration be at the same venue?", a: "Yes, many families hold the puja followed immediately by the party. Our pandit is comfortable performing the ritual in party venues, gardens, or banquet halls across Bangalore." },
      { q: "Is Godh Bharai only for first pregnancy?", a: "Traditionally, Godh Bharai is most commonly performed for the first pregnancy. Some families perform it for subsequent pregnancies too — it depends on regional and family customs." },
      { q: "What gifts are traditional for Godh Bharai?", a: "Traditional gifts include sarees, bangles, bangles, mango, coconut, and items for the baby. Our pandit will provide a complete gift list as per North Indian tradition." },
      { q: "Can you organize the complete Godh Bharai event along with the puja?", a: "We specialize in the puja portion. For event planning, decoration, and catering, we can recommend trusted vendors in Bangalore who specialize in North Indian Godh Bharai events." }
    ],
    areas: ["Whitefield", "Indiranagar", "HSR Layout", "BTM Layout", "Marathahalli", "Sarjapur", "Electronic City"]
  },
  {
    slug: "engagement-puja",
    name: "Engagement Puja",
    tagline: "Auspicious start to your journey of love & commitment",
    metaTitle: "Engagement Puja Pandit Bangalore | Ring Ceremony Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for engagement puja and ring ceremony in Bangalore. Complete Sagan puja, Ganesh puja, muhurat selection. All Bangalore areas covered.",
    primaryKeyword: "engagement puja pandit",
    intro: "The engagement ceremony — Sagan or Ring Ceremony — is the beautiful beginning of a couple's official journey together in North Indian tradition. Before the ring exchange and all the excitement, the Engagement Puja performed by our Hindi pandit blesses the couple and both families, seeks Lord Ganesha's blessings for the removal of all obstacles from their upcoming marriage, and makes the moment spiritually complete. Whether your engagement is a small intimate affair in BTM Layout or a grand event in a Whitefield venue, our pandit for engagement puja in Bangalore ensures the ceremony begins on the most auspicious note.",
    description: "Engagement Puja (Sagan Puja) is performed at the engagement or ring ceremony to seek divine blessings for the couple and their upcoming marriage. It includes Ganesh Puja, couple's blessings, and exchange of sacred tokens.",
    duration: "1 Hour",
    price: "Contact for pricing",
    benefits: ["Divine blessings for the couple's future", "Removal of obstacles from the marriage path", "Family bonding of both sides", "Auspicious beginning to the marriage journey", "Protection from evil eye on the couple"],
    whyImportant: ["The engagement marks the formal union of two families — a puja consecrates this moment with divine witness", "Ganesh Puja ensures all obstacles are removed before the engagement proceeds", "The muhurat selected by the pandit for the ring exchange is considered especially auspicious", "Nazar Utarna performed on the couple protects them from any negative energies on this joyful day"],
    rituals: ["Ganesh Puja for obstacle removal", "Navgrah Invocation", "Ring exchange at auspicious muhurat", "Couple's tika ceremony", "Aarti and blessings from elders"],
    samagri: ["Flowers", "Sindoor", "Tilak", "Coconut", "Sweets", "Fruits"],
    bestFor: "Engagement ceremony, ring ceremony, Sagan",
    image: "/images/pujas/engagement-puja.png",
    deity: "Lord Ganesha",
    category: "life-event",
    process: [
      { step: "Share Couple's Details", desc: "Share the engagement date, venue in Bangalore, and birth details of the couple for muhurat calculation." },
      { step: "Muhurat for Ring Exchange", desc: "Pandit calculates the exact auspicious time for the ring exchange during the ceremony." },
      { step: "Engagement Puja", desc: "Ganesh Puja and couple's blessing ritual is performed at the start of the ceremony." },
      { step: "Ring Exchange & Blessings", desc: "Rings are exchanged at the muhurat moment while the pandit chants blessings, followed by aarti." }
    ],
    faq: [
      { q: "How much does engagement puja cost in Bangalore?", a: "Engagement puja starts from Contact for Pricing for a basic Ganesh puja with muhurat. A complete Sagan ceremony puja package is Contact for Pricing." },
      { q: "What is the difference between Sagan and engagement puja?", a: "Sagan is a broader term for the auspicious pre-wedding ceremony. Engagement puja specifically refers to the ring exchange ceremony. Our pandit performs the appropriate ritual for whichever stage you're at." },
      { q: "Can engagement puja be performed in a hotel or venue in Bangalore?", a: "Yes, our pandit travels to any venue in Bangalore for the engagement puja. Please ensure there is a small space for the puja setup at the venue." },
      { q: "Does the pandit stay for the entire engagement ceremony?", a: "Our pandit typically performs the puja (1 hour) and the ring exchange muhurat, then concludes. If you need the pandit present throughout the function, we can arrange for an extended booking." },
      { q: "Is horoscope matching done as part of engagement puja?", a: "Horoscope matching (Kundali Milan) is typically done before the engagement is finalized. Our pandits offer this service separately. Mention it while booking if you need both services." }
    ],
    areas: ["Whitefield", "Indiranagar", "BTM Layout", "HSR Layout", "Marathahalli", "Sarjapur"]
  },
  {
    slug: "vivah-puja",
    name: "Vivah Puja",
    tagline: "Authentic Vedic wedding rituals for a blissful marriage",
    metaTitle: "Marriage Pandit Bangalore | Vivah Puja Hindi Pandit | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Hindu wedding in Bangalore. Complete Vivah puja with Saptapadi, Kanyadaan, Mangalsutra ceremony. Available across all Bangalore areas.",
    primaryKeyword: "marriage pandit bangalore",
    intro: "Your wedding day is the most sacred moment of your life — and it deserves a pandit who performs every ritual with authenticity, devotion, and clear explanation that all your guests can follow. For North Indian families marrying in Bangalore, our Hindi pandits bring the complete North Indian wedding experience — from the Baraat welcome Ganesh Puja to the final Saptapadi (seven vows), Kanyadaan, and Sindoor ceremony. We know that weddings in Bangalore often have guests from across India — so our pandits explain every ritual in Hindi so all family members feel included and connected to the sacred proceedings.",
    description: "Vivah Puja (Hindu Marriage Ceremony) is one of the most sacred Samskaras, uniting two souls in the presence of sacred fire (Agni) and the divine. Our experienced pandits perform all the traditional rituals including Kanyadaan, Saptapadi, Mangalsutra and Sindoor ceremonies.",
    duration: "4–6 Hours",
    price: "Contact for pricing",
    benefits: ["Sacred union blessed by divine forces", "Long, happy and prosperous married life", "Fertility and family blessings", "Alignment of stars and destinies", "A memorable, authentic ceremony"],
    whyImportant: ["The Saptapadi (7 steps) is the legally and spiritually binding moment of Hindu marriage", "Kanyadaan is considered one of the highest acts of giving (Dan) a father can perform", "Sacred fire (Agni) is the divine witness to all the vows of Hindu marriage", "Proper Vivah Samskara creates a spiritual bond between the couple that extends beyond this lifetime"],
    rituals: ["Ganesh Puja & Navagraha Puja", "Kanyadaan ritual", "Saptapadi (Seven Sacred Steps)", "Mangalsutra & Sindoor ceremony", "Laja Homa & Ashirvad"],
    samagri: ["Havan kund", "Ghee", "Mango wood", "Flowers", "Mangalsutra", "Sindoor"],
    bestFor: "Hindu weddings, Sagan, engagement pujas",
    image: "/images/pujas/vivah-puja.png",
    deity: "Lord Agni & Lord Vishnu",
    category: "life-event",
    process: [
      { step: "Book 30+ Days in Advance", desc: "Share the wedding date, venue, and both families' birth details for muhurat selection and pandit assignment." },
      { step: "Muhurat & Ritual Schedule", desc: "Pandit prepares a complete wedding ritual schedule with exact auspicious timings for each ritual." },
      { step: "Wedding Day Puja", desc: "Pandit performs all rituals from Ganesh Puja through Saptapadi, Sindoor, and Pheras in sequence." },
      { step: "Ashirvad & Conclusion", desc: "Wedding concludes with the pandit's ashirvad, saptendriya mantra, and the couple's bow to family elders." }
    ],
    faq: [
      { q: "How much does a wedding pandit cost in Bangalore?", a: "Hindu wedding puja starts from Contact for Pricing for a standard ceremony. For elaborate ceremonies with multiple rituals and longer duration, cost can be Contact for Pricing–25,000. Please contact us for a personalized quote." },
      { q: "How far in advance should we book a wedding pandit?", a: "We strongly recommend booking at least 30–60 days before the wedding date, especially for peak wedding season (November–March). Weekend dates fill up fastest." },
      { q: "Do you perform the puja in Hindi or Sanskrit?", a: "Mantras are recited in Sanskrit (as per Vedic tradition) while our pandit explains every ritual in Hindi so all family members can follow and participate meaningfully." },
      { q: "Can you coordinate with the wedding venue in Bangalore?", a: "Yes, our pandit coordinates with your venue regarding the havan kund setup, seating arrangement, and timing. We work with all major Bangalore wedding venues and banquet halls." },
      { q: "Do you also help with horoscope matching (Kundali Milan) before the wedding?", a: "Yes, we offer horoscope matching (Kundali Milan / Ashtakoota Milan) as a separate service. Ideally, this should be done before the engagement. Book it while discussing your wedding booking." }
    ],
    areas: ["Whitefield", "Indiranagar", "HSR Layout", "BTM Layout", "Electronic City", "Sarjapur", "Marathahalli", "Hebbal", "Yelahanka"]
  },
  {
    slug: "janeu-ceremony",
    name: "Janeu / Thread Ceremony",
    tagline: "The sacred initiation into Vedic learning & brahmacharya",
    metaTitle: "Janeu Thread Ceremony Pandit Bangalore | Upanayana | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Janeu ceremony (Upanayana Samskara) in Bangalore. Complete sacred thread ceremony with Gayatri Mantra upadesham. All Bangalore areas.",
    primaryKeyword: "janeu ceremony pandit bangalore",
    intro: "The Janeu ceremony — also called Upanayana or Yagyopavit Samskara — is one of the most important rites of passage for young boys in Brahmin, Kshatriya, and Vaishya families. It marks the boy's second birth into spiritual life and initiates him into the Gayatri Mantra, which becomes his daily practice and lifelong protection. For North Indian families in Bangalore whose sons are approaching this age, our Hindi pandits perform the complete Janeu ceremony with all traditional rituals — from Maunjibandhana to the formal Gayatri Upadesham — creating a ceremony that the family will treasure for generations.",
    description: "Janeu (Upanayana or Yagyopavit Sanskara) is the sacred thread ceremony marking a young boy's formal initiation into Vedic studies and brahmacharya. The pandit ties the sacred thread and teaches the Gayatri Mantra.",
    duration: "3–4 Hours",
    price: "Contact for pricing",
    benefits: ["Initiation into Vedic knowledge", "Spiritual growth and discipline", "Guru-shishya relationship established", "Second birth into spiritual life", "Family honor and cultural continuity"],
    whyImportant: ["The Gayatri Mantra given during Janeu is the most powerful Vedic mantra — daily recitation protects and guides throughout life", "Upanayana marks the official beginning of spiritual education in Hindu tradition", "The sacred thread (Yagyopavit) is a constant reminder of the boy's duties and spiritual identity", "Without Janeu, a boy cannot perform many important Vedic rituals in his adult life"],
    rituals: ["Muhurat and Kundali Puja", "Maunjibandhana (sacred grass belt)", "Yagyopavit Dharan", "Gayatri Mantra Upadesham", "Bhiksha & Aarti"],
    samagri: ["Sacred thread (yagyopavit)", "Deer skin mat", "Staff", "Flowers", "Sesame"],
    bestFor: "Boys aged 7–16, Brahmin/Kshatriya/Vaishya families",
    image: "/images/pujas/janeu-ceremony.png",
    deity: "Lord Ganesha & Gayatri Mata",
    category: "life-event",
    process: [
      { step: "Book & Share Boy's Details", desc: "Share the boy's birth details and family gotra for the pandit to calculate the most auspicious muhurat." },
      { step: "Preparation Rituals", desc: "Day before or morning of: Keshant (haircut), Ubtana (body paste), and preparation for the ceremony." },
      { step: "Janeu Ceremony", desc: "Yagyopavit is worn while the pandit performs Upanayana rituals and formally teaches Gayatri Mantra." },
      { step: "Bhiksha & Blessings", desc: "The boy performs symbolic Bhiksha (begging) from family members — a reminder of student humility. Final aarti and ashirvad." }
    ],
    faq: [
      { q: "At what age should Janeu ceremony be performed?", a: "Traditionally between age 7–16 for boys. The ideal age varies by community — Brahmins often do it at 7–8, others at 11–13. Our pandit recommends the most auspicious age based on your family tradition." },
      { q: "How much does Janeu ceremony cost in Bangalore?", a: "Janeu ceremony starts from Contact for Pricing for a basic ceremony. Larger ceremonies with multiple family members, elaborate havan, and 2-day celebrations are priced accordingly." },
      { q: "Does the boy need to follow special rules after Janeu?", a: "Yes, after Upanayana, the boy is expected to wear the Yagyopavit daily and recite Gayatri Mantra three times a day. Our pandit explains all the post-ceremony duties and traditions to the family." },
      { q: "Can the Janeu ceremony be combined with another puja?", a: "Yes, many families combine Janeu with a family puja like Satyanarayan on the same day to make it a grand family occasion. Our pandit can coordinate both." },
      { q: "Do you provide the sacred thread (Yagyopavit) for the ceremony?", a: "Yes, we provide the sacred thread (Janeu/Yagyopavit) as part of our samagri. The thread is traditionally made of cotton and consists of three strands symbolizing three debts." }
    ],
    areas: ["Whitefield", "BTM Layout", "HSR Layout", "Electronic City", "Indiranagar", "Marathahalli"]
  },
  {
    slug: "birthday-puja",
    name: "Birthday Puja",
    tagline: "Begin each year of life with divine blessings",
    metaTitle: "Birthday Puja Pandit Bangalore | Janamdin Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for birthday puja in Bangalore. Graha Shanti, Navgraha puja on birthday with Janam Kundali review. Available for all ages across Bangalore.",
    primaryKeyword: "birthday puja pandit",
    intro: "In North Indian tradition, a birthday is not just about cake and celebrations — it's a sacred moment to pause, perform a birthday puja, and seek divine blessings for the year ahead. Performed on the Janam Nakshatra (birth star day) or the English calendar birthday, our Birthday Puja service includes a Graha Shanti for any unfavorable planetary transits in the coming year, a personalized kundali review, and specific mantras for the person's protection and prosperity. Whether it's for a child's first birthday in Whitefield or your parents' milestone birthday in Electronic City — our pandit is there.",
    description: "Birthday Puja (Jayanti Puja) is performed on a person's birthday to seek divine blessings for health, happiness, and success in the coming year. The pandit performs puja based on the individual's Janam Kundali and conducts Graha Shanti.",
    duration: "1–2 Hours",
    price: "Contact for pricing",
    benefits: ["Divine blessings for the year ahead", "Correction of unfavorable planetary positions", "Health, happiness and success", "Longevity and protection", "Family harmony and joy"],
    whyImportant: ["The birthday (especially Janam Nakshatra) is one of the most powerful personal energy days of the year", "Graha Shanti performed on birthday corrects upcoming negative planetary transits before they affect life", "Starting the birthday with puja rather than worldly celebrations sets a powerful spiritual intention", "Elders performing birthday puja is a beloved North Indian family tradition that creates lasting memories"],
    rituals: ["Janam Kundali review by Pandit", "Ganesh Puja", "Graha Shanti Puja", "Abhishek and Archana", "Aarti & Birthday Prasad"],
    samagri: ["Flowers", "Fruits", "Sweets", "Incense", "New clothes", "Diya"],
    bestFor: "Children and adults, annual birthday ritual",
    image: "/images/pujas/birthday-puja.png",
    deity: "Lord Ganesha & Navagraha",
    category: "life-event",
    process: [
      { step: "Share Birth Details", desc: "Share the person's birth date, time, and place for Janam Kundali review and upcoming transit assessment." },
      { step: "Pandit's Kundali Review", desc: "Pandit reviews planetary positions for the coming year and advises specific mantras or upay." },
      { step: "Birthday Puja", desc: "Ganesh Puja, Graha Shanti, and personalized Archana with the person's name and Sankalp are performed." },
      { step: "Aarti & Blessings", desc: "Family aarti, birthday prasad distribution, and the pandit's special ashirvad for the year ahead." }
    ],
    faq: [
      { q: "Can birthday puja be performed on any day of the week?", a: "Yes, birthday puja can be performed on the English calendar birthday. For enhanced benefit, our pandit can also identify the Janam Nakshatra birthday date for the current year." },
      { q: "Is birthday puja only for children?", a: "Absolutely not — birthday puja is for all ages and is especially meaningful for milestone birthdays (1st, 21st, 50th, 60th, 75th birthdays have special significance in Hindu tradition)." },
      { q: "What is Sashtiabdhapoorthi?", a: "Sashtiabdhapoorthi is the 60th birthday celebration, a major milestone in South and North Indian tradition. We offer a special expanded puja package for this occasion." },
      { q: "Can you combine birthday puja with a birthday party in Bangalore?", a: "Yes, many families invite us to perform the puja in the morning before the birthday party. The puja creates a beautiful, meaningful start to the celebration." },
      { q: "What is Janam Nakshatra puja and is it better than birthday puja?", a: "Janam Nakshatra puja is performed on the day when the moon is in the same nakshatra as at birth — this is the most powerful personal day. It can be done alongside or instead of the English birthday puja for maximum benefit." }
    ],
    areas: ["Whitefield", "BTM Layout", "Electronic City", "HSR Layout", "Indiranagar", "Marathahalli", "Sarjapur", "Hebbal", "Yelahanka"]
  },
  // ─── DOSH & SHANTI ──────────────────────────────────────────────────────────
  {
    slug: "pitra-dosh-puja",
    name: "Pitra Dosh Puja",
    tagline: "Seek peace for your ancestors & remove Pitra Dosh",
    metaTitle: "Pitra Dosh Puja Pandit Bangalore | Pitru Shanti Puja | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Pitra Dosh Puja in Bangalore. Complete Pitru Shanti puja, Narayan Bali, and Tarpan. All Bangalore areas covered.",
    primaryKeyword: "pitra dosh puja bangalore",
    intro: "Are you experiencing recurring obstacles in career growth, unexplained health issues in the family, difficulty in having children, or financial setbacks despite hard work? These could be manifestations of Pitra Dosh — the disharmony caused by unsatisfied ancestral souls. Pitra Dosh is one of the most commonly mentioned doshas in Vedic astrology, and it affects generations if left unaddressed. Our pandits in Bangalore perform the complete Pitru Shanti puja including Tarpan, Pind Daan, and Narayan Bali to bring peace to your ancestors and dissolve this dosh.",
    description: "Pitra Dosh Puja is performed to seek peace for one's ancestors (Pitru) and remove the dosha caused by their unmet desires or improper last rites. It includes Tarpan, Pind Daan, and Narayan Bali rituals.",
    duration: "3–5 Hours",
    price: "Contact for pricing",
    benefits: ["Peace for ancestral souls", "Removal of recurring family obstacles", "Improved chances of conception", "Career and financial progress", "Family harmony restored"],
    whyImportant: ["Pitra Dosh in the horoscope indicates unsatisfied ancestral souls who need specific rituals to attain peace", "Once Pitru Dosh is resolved, many long-standing family problems resolve seemingly on their own", "Annual Pitru Paksha (Shraadh) is the prescribed time for this, but specific pujas can be done anytime", "Narayan Bali is particularly powerful for cases where ancestors died violently or without proper last rites"],
    rituals: ["Kalash Sthapana & Ganesh Puja", "Pitru Tarpan at nearby water body", "Pind Daan with sesame and barley", "Narayan Bali ritual (if required)", "Brahmin feast & donation"],
    samagri: ["Black sesame", "Barley", "Kusha grass", "Water", "Ghee", "Til (sesame)"],
    bestFor: "Pitra Dosh in horoscope, Pitru Paksha, recurring family problems",
    image: "/images/pujas/pitra-dosh-puja.png",
    deity: "Pitru Devatas & Lord Vishnu",
    category: "dosh",
    process: [
      { step: "Share Kundali Details", desc: "Share birth details for Pitra Dosh assessment. Our pandit identifies the specific dosh and recommends the appropriate ritual." },
      { step: "Ritual Planning", desc: "Pandit plans the complete ritual including Tarpan location (river or water body in Bangalore), Pind Daan, and havan." },
      { step: "Pitru Shanti Puja", desc: "Complete ritual performed with Tarpan, Pind Daan, and specific mantras for ancestral peace." },
      { step: "Brahmin Bhojan", desc: "Brahmin feast (or equivalent food donation) is performed as the final offering for ancestral satisfaction." }
    ],
    faq: [
      { q: "What are the signs of Pitra Dosh in the horoscope?", a: "Recurring marriage delays, childbirth issues, unexplained health problems, financial stagnation, and family disputes are common signs. Our pandit checks your kundali for specific Pitra Dosh yoga." },
      { q: "Where is Tarpan performed in Bangalore?", a: "Tarpan can be performed at any water body. In Bangalore, we typically go to Hesaraghatta Lake, Ulsoor Lake, or the Vrishabhavathi river. We can also arrange travel to Gaya for Pind Daan if required." },
      { q: "What is the difference between Shraadh and Pitra Dosh Puja?", a: "Shraadh is the annual ritual done during Pitru Paksha for all ancestors. Pitra Dosh Puja is a specific remedial ritual for a diagnosed dosh in the horoscope. Both are beneficial but serve different purposes." },
      { q: "How much does Pitra Dosh Puja cost in Bangalore?", a: "Pitra Dosh Puja starts from Contact for Pricing. With Narayan Bali and extended rituals at a water body, the cost is Contact for Pricing. Travel charges apply for river locations outside Bangalore." },
      { q: "Can Pitra Dosh Puja be done without going to Gaya?", a: "Yes, Pitra Dosh Puja can be performed at home or a local water body in Bangalore. While Gaya Pind Daan is considered the most powerful, the home-based ritual is also very effective when performed with proper vidhi." }
    ],
    areas: ["Whitefield", "HSR Layout", "BTM Layout", "Electronic City", "Marathahalli", "Indiranagar", "Hebbal"]
  },
  {
    slug: "manglik-dosh-puja",
    name: "Manglik Dosh Puja",
    tagline: "Remove Mangal Dosh for a happy, obstacle-free marriage",
    metaTitle: "Mangal Dosh Puja Bangalore | Manglik Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Manglik Dosh Puja in Bangalore. Complete Kumbh Vivah, Mars dosh remedies. Available across all Bangalore areas.",
    primaryKeyword: "mangal dosh puja",
    intro: "Manglik Dosh — one of the most feared doshas in Indian astrology — is caused by Mars (Mangal) being placed in specific houses in the birth chart. It is said to cause delay in marriage, marital discord, and in severe cases, loss of spouse. For North Indian families in Bangalore where marriage is imminent and Manglik Dosh has been identified, our pandits perform the prescribed remedies — from Mangal Shanti Puja to the symbolic Kumbh Vivah (marrying a peepal tree or pot first). Don't let fear cloud this joyful occasion — our experienced pandits have helped hundreds of Manglik individuals in Bangalore have happy, long, blessed marriages.",
    description: "Manglik Dosh Puja is performed to neutralize the malefic effects of Mars (Mangal) in the birth chart that can create obstacles in marriage. Remedies include Mangal Shanti Puja, Kumbh Vivah, and specific Mars mantra recitation.",
    duration: "2–4 Hours",
    price: "Contact for pricing",
    benefits: ["Neutralizes Mangal Dosh effects", "Removes marriage obstacles", "Protection of spouse's health", "Marital harmony and happiness", "Peace of mind for both families"],
    whyImportant: ["Manglik Dosh affects approximately 40% of the population — its effects vary widely based on the exact placement", "Timely remedies before marriage significantly reduce the dosh's impact on marital life", "Kumbh Vivah is a powerful ritual that symbolically neutralizes the dosh before the actual marriage", "Mars mantras and specific gemstone recommendations alongside puja provide comprehensive protection"],
    rituals: ["Mangal Yantra Sthapana", "Mangal Mantra Jaap (10,000 recitations)", "Kumbh Vivah ritual (if severe dosh)", "Red coral and Mars havan offering", "Aarti & Ashirvad"],
    samagri: ["Red cloth", "Red flowers", "Coral beads", "Ghee", "Jaggery", "Masoor dal"],
    bestFor: "Pre-marriage Manglik Dosh removal, marriage obstacles",
    image: "/images/pujas/manglik-dosh-puja.png",
    deity: "Lord Mars (Mangal Devata) & Lord Shiva",
    category: "dosh",
    process: [
      { step: "Kundali Analysis", desc: "Share birth details for our pandit to assess the exact nature and severity of the Manglik Dosh." },
      { step: "Remedy Recommendation", desc: "Pandit recommends the appropriate remedy — Mangal Shanti Puja, Kumbh Vivah, or combined approach." },
      { step: "Puja Performed", desc: "Mangal Shanti Puja with Mars mantra jaap and havan is performed to neutralize the dosh." },
      { step: "Ongoing Remedies", desc: "Pandit provides ongoing remedies — specific gems, Tuesday fasting, Mars mantra for daily recitation." }
    ],
    faq: [
      { q: "Is Manglik Dosh really dangerous for marriage?", a: "Manglik Dosh's severity varies greatly based on its exact position, aspects, and other chart factors. Many people with Manglik Dosh lead perfectly happy married lives — especially after appropriate remedies. Our pandit assesses the actual severity before recommending any ritual." },
      { q: "What is Kumbh Vivah and when is it required?", a: "Kumbh Vivah is a ritual where the Manglik person symbolically 'marries' a peepal tree or an earthen pot before the actual marriage, absorbing the dosh into the symbolic union. It is recommended only in severe Manglik Dosh cases." },
      { q: "Can two Manglik people marry without any issue?", a: "Yes, according to Vedic astrology, if both partners are Manglik, the doshas cancel each other and the marriage can proceed without the remedies. Our pandit can assess your specific situation." },
      { q: "How much does Manglik Dosh Puja cost in Bangalore?", a: "Mangal Shanti Puja starts from Contact for Pricing. Kumbh Vivah ritual costs Contact for Pricing. Combined package is Contact for Pricing." },
      { q: "Can Manglik Dosh remedies be done online?", a: "The puja requires the presence of the individual for maximum benefit. However, we can arrange the puja with a proxy (another person performing on your behalf with Sankalp) if you cannot be physically present." }
    ],
    areas: ["Whitefield", "BTM Layout", "Indiranagar", "HSR Layout", "Electronic City", "Marathahalli"]
  },
  {
    slug: "shradh-puja",
    name: "Shradh / Pind Daan",
    tagline: "Honor your ancestors during Pitru Paksha",
    metaTitle: "Shradh Pandit Bangalore | Pind Daan | Pitru Paksha Puja | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Shradh and Pind Daan in Bangalore. Complete Pitru Paksha puja with tarpan and brahmin bhojan. Available across all Bangalore areas.",
    primaryKeyword: "shradh pandit bangalore",
    intro: "Pitru Paksha — the 16-day lunar fortnight dedicated to our ancestors — is the most sacred time to perform Shraadh, Tarpan, and Pind Daan for the peace and liberation of our departed loved ones. For North Indian families living in Bangalore, performing these rituals away from home can feel challenging — but our experienced Hindi pandits ensure that every aspect of the Shraadh is performed with complete scriptural accuracy, using the correct Sankalp, Tarpan, and food offerings specific to your family tradition. We travel to water bodies in Bangalore for Tarpan and arrange all samagri for Brahmin bhojan.",
    description: "Shraadh (Shradh/Shraddha) and Pind Daan are the ancestral rites performed during Pitru Paksha (the 16 days in the lunar month of Bhadrapada) or on specific death anniversaries for the peace and liberation of departed ancestors.",
    duration: "2–3 Hours",
    price: "Contact for pricing",
    benefits: ["Peace and liberation for ancestral souls", "Removal of Pitra Dosh", "Blessings from satisfied ancestors", "Family prosperity and wellbeing", "Merit for the performing family"],
    whyImportant: ["Performing Shraadh during Pitru Paksha is considered a sacred duty (Dharma) for every Hindu family", "Ancestors who receive Shraadh attain liberation and in turn bless their descendants", "Failing to perform Shraadh creates Pitra Dosh that affects generations", "The Bhagavad Gita and Vishnu Purana describe Shraadh as one of the highest meritorious acts"],
    rituals: ["Sankalp with ancestor's name and gotra", "Tarpan at water body", "Pind Daan with sesame and barley", "Brahmin bhojan (or food donation)", "Final prayers for ancestral liberation"],
    samagri: ["Black sesame", "Barley", "Kusha grass", "Ghee", "Water", "Pind items"],
    bestFor: "Pitru Paksha, death anniversaries, Pitra Dosh remedy",
    image: "/images/pujas/shradh-puja.png",
    deity: "Pitru Devatas & Lord Vishnu",
    category: "dosh",
    process: [
      { step: "Share Ancestor Details", desc: "Provide the name, relationship, and gotra of the ancestor for whom Shraadh is being performed." },
      { step: "Tarpan Location", desc: "Our pandit performs Tarpan at a nearby water body in Bangalore (or we arrange travel to a more sacred location)." },
      { step: "Pind Daan & Puja", desc: "Pind Daan with sesame and barley is performed with Vedic mantras for the ancestor's peace and liberation." },
      { step: "Brahmin Bhojan", desc: "Prasad and Brahmin bhojan (food offering to Brahmins on behalf of the ancestor) concludes the ritual." }
    ],
    faq: [
      { q: "When should Shraadh be performed during Pitru Paksha?", a: "Shraadh is performed on the Tithi (lunar date) corresponding to the date of the ancestor's death. Our pandit identifies the correct Pitru Paksha Tithi for each ancestor you wish to honor." },
      { q: "Can Shraadh be performed if we don't know the exact death date?", a: "Yes, Sarvapitri Amavasya (the last day of Pitru Paksha) is for all those ancestors whose death dates are unknown. We perform a combined Shraadh for all unknown ancestors on this day." },
      { q: "Where is Pind Daan performed in Bangalore?", a: "In Bangalore, Tarpan is typically done at Hesaraghatta Lake, Ulsoor Lake, or the Vrishabhavathi river. For proper Gaya Pind Daan, we can arrange travel to Gaya, Haridwar, or Nashik." },
      { q: "Is Brahmin bhojan mandatory for Shraadh?", a: "In the traditional sense, yes — feeding Brahmins (or an equivalent food donation to the needy) is an integral part of Shraadh. We arrange for 1–3 Brahmin pandits as part of our service." },
      { q: "Can women perform Shraadh?", a: "In North Indian tradition, Shraadh is primarily performed by male family members. However, widows and women who are the only descendants may perform it. Our pandit guides the appropriate family member." }
    ],
    areas: ["Whitefield", "HSR Layout", "BTM Layout", "Electronic City", "Marathahalli", "Indiranagar", "Hebbal"]
  },
  {
    slug: "antim-sanskar",
    name: "Antim Sanskar",
    tagline: "Last rites performed with dignity, love & Vedic tradition",
    metaTitle: "Antim Sanskar Pandit Bangalore | Funeral Pandit | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Antim Sanskar (last rites) in Bangalore. Immediate 24/7 availability. Complete North Indian funeral rituals including Shraddh and Teravih. All Bangalore areas.",
    primaryKeyword: "antim sanskar pandit bangalore",
    intro: "Losing a loved one is the most difficult moment in any family's life. In those hours of grief, the last thing you want to worry about is finding the right pandit for the last rites. Our 24/7 Antim Sanskar pandit service in Bangalore is always available — because we understand that these rituals cannot wait. Whether you need a pandit for Antim Yatra, Mukhagni, Pind Daan, or Teravih puja, our experienced Hindi pandits are available across Bangalore at any hour to perform the complete North Indian funeral rituals with the utmost respect, care, and scriptural accuracy.",
    description: "Antim Sanskar (Last Rites) refers to the complete set of Hindu funeral rituals including Mukhagni (cremation fire), Pind Daan, and the subsequent Shraddh rituals performed over 13 days. Our pandits are available 24/7 for this service.",
    duration: "Ongoing (13 days)",
    price: "Contact for pricing",
    benefits: ["Peaceful transition of the departed soul", "Proper Vedic last rites for liberation", "Support for the grieving family", "Complete 13-day ritual guidance", "Peace of mind at a difficult time"],
    whyImportant: ["Proper Antim Sanskar helps the departed soul transition peacefully to the next realm", "Without proper last rites, the soul is said to remain unsettled — causing problems for the family", "The 13-day ritual sequence is a systematic process of honoring and releasing the departed", "Family performing the last rites correctly is considered the highest expression of love and duty"],
    rituals: ["Mukhagni (funeral fire lighting)", "Asthi Visarjan (immersion of ashes)", "Pind Daan on 10th day", "Sapindi Karma on 12th day", "Teravih Shradh on 13th day"],
    samagri: ["All funeral items provided", "Kusha grass", "Sesame", "Barley", "Water"],
    bestFor: "Immediate need, 24/7 availability",
    image: "/images/pujas/antim-sanskar.png",
    deity: "Lord Yama & Lord Vishnu",
    category: "dosh",
    process: [
      { step: "Call Immediately", desc: "Call our 24/7 helpline. A pandit is dispatched within the hour anywhere in Bangalore." },
      { step: "Antim Yatra & Cremation", desc: "Pandit performs Antim Yatra rituals, Mukhagni, and all cremation ceremonies at the crematorium." },
      { step: "13-Day Ritual Schedule", desc: "Pandit guides the family through the complete 13-day ritual sequence including daily Pind Daan." },
      { step: "Teravih & Beyond", desc: "Teravih (13th day) Shraadh completes the immediate ritual. Pandit advises on Varshik Shradh for subsequent years." }
    ],
    faq: [
      { q: "Is your Antim Sanskar service available 24/7 in Bangalore?", a: "Yes, we provide 24/7 Antim Sanskar pandit service across all of Bangalore. Death does not follow a schedule and neither do we. Call our emergency number at any time." },
      { q: "Which crematoriums in Bangalore do your pandits serve?", a: "Our pandits serve all major crematoriums in Bangalore including Shivajinagar, Jayanagar, Banashankari, Hebbal, Marathahalli, and others. We are familiar with all procedures at each crematorium." },
      { q: "Can you perform the complete 13-day ritual sequence?", a: "Yes, we provide a comprehensive package covering all rituals from Mukhagni through Teravih (13th day Shraadh). We guide the family through each step." },
      { q: "What is the cost of Antim Sanskar pandit in Bangalore?", a: "Due to the sensitive and variable nature of this service, we provide personalized quotes. Please call us — we ensure the cost is reasonable and transparent even during this difficult time." },
      { q: "Can you perform Antim Sanskar if there is no male family member present?", a: "Yes, in cases where no male family member is available, our pandit can perform the rituals with whichever family member is present, following appropriate scriptural provisions." }
    ],
    areas: ["Whitefield", "BTM Layout", "Electronic City", "HSR Layout", "Marathahalli", "Indiranagar", "Hebbal", "Yelahanka", "Sarjapur"]
  },
  {
    slug: "kaal-sarp-dosh-puja",
    name: "Kaal Sarp Dosh Puja",
    tagline: "Break free from the serpent's grip on your destiny",
    metaTitle: "Kaal Sarp Dosh Puja Bangalore | Sarp Dosh Nivaran | Radhe Radhe Puja",
    metaDescription: "Book Hindi pandit for Kaal Sarp Dosh Puja in Bangalore. Complete Nag Puja, Rahu-Ketu remedies, Sarpa Dosh Nivaran. All Bangalore areas covered.",
    primaryKeyword: "kaal sarp dosh puja bangalore",
    intro: "Kaal Sarp Dosh — formed when all planets in the birth chart are placed between Rahu and Ketu — is one of the most discussed doshas in Vedic astrology. People with this dosh often experience recurring struggles in multiple life areas simultaneously, feeling as if an invisible force is holding them back from their true potential. Our pandits in Bangalore who specialize in Rahu-Ketu remedies perform a comprehensive Kaal Sarp Dosh Puja that includes specific mantras for Rahu and Ketu, Nag Puja, and a powerful Sarpa Havan to break the cycle of obstacles and open new pathways of success.",
    description: "Kaal Sarp Dosh Puja is performed to neutralize the effects of the Kaal Sarp Yoga in the birth chart, where all planets are hemmed between Rahu and Ketu. It includes Nag Puja, Rahu-Ketu mantras, and a specific Sarpa Havan.",
    duration: "3–4 Hours",
    price: "Contact for pricing",
    benefits: ["Neutralizes Kaal Sarp Dosh effects", "Removes multi-area life obstacles simultaneously", "Career and financial breakthrough", "Improved health and mental clarity", "Relief from recurring bad luck"],
    whyImportant: ["Kaal Sarp Dosh amplifies obstacles in all areas where the hemmed planets are placed", "Rahu and Ketu represent karmic debts — their remediation accelerates overall spiritual and material progress", "Nag Puja is specifically prescribed for Kaal Sarp Dosh as serpents (Nagas) are associated with Rahu-Ketu energy", "Puja at special Nag temples (like Kukke Subramanya near Bangalore) combined with home puja gives maximum results"],
    rituals: ["Kundali assessment for Kaal Sarp type", "Nag Puja with milk offering", "Rahu-Ketu Beej Mantra Jaap (18,000 times)", "Sarpa Havan with specific offerings", "Mrit Sanjivani mantra for dosh removal"],
    samagri: ["Milk", "Flowers for Nag Puja", "Blue cloth", "Black sesame", "Camphor", "Havan samagri"],
    bestFor: "Kaal Sarp Yoga in horoscope, multiple life obstacles, Nag Panchami",
    image: "/images/pujas/kaal-sarp-dosh-puja.png",
    deity: "Naga Devata, Rahu & Ketu",
    category: "dosh",
    process: [
      { step: "Kundali Analysis", desc: "Share birth details for Kaal Sarp Dosh assessment — pandit identifies the specific type (Anant, Kulik, etc.) and severity." },
      { step: "Remedy Plan", desc: "Pandit recommends the appropriate ritual combination — home puja, Nag temple visit, or both." },
      { step: "Kaal Sarp Dosh Puja", desc: "Nag Puja, Rahu-Ketu mantra jaap, and Sarpa Havan performed in sequence." },
      { step: "Ongoing Remedies", desc: "Rahu-Ketu mantra for daily recitation, specific dietary recommendations, and Nag Panchami annual observance." }
    ],
    faq: [
      { q: "Is Kaal Sarp Dosh always bad?", a: "Not necessarily. Many highly successful people have Kaal Sarp Yoga. The dosh creates challenges but also heightened focus when the energies are channeled correctly. Our pandit assesses whether it's beneficial or malefic in your specific chart." },
      { q: "Can Kaal Sarp Dosh Puja be done at home in Bangalore?", a: "Yes, the home puja is effective and our pandit comes to your home. For severe cases, a visit to Kukke Subramanya temple (6 hours from Bangalore) is also recommended — we can coordinate this." },
      { q: "How much does Kaal Sarp Dosh Puja cost in Bangalore?", a: "Kaal Sarp Dosh Puja at home starts from Contact for Pricing. If you wish to perform it at a Nag temple in or near Bangalore, additional travel and temple charges apply." },
      { q: "Is Nag Panchami a good time for Kaal Sarp Dosh Puja?", a: "Yes, Nag Panchami is the most auspicious time for Kaal Sarp Dosh Puja and Nag Puja. We recommend booking 2–3 weeks in advance for Nag Panchami slots." },
      { q: "Does Kaal Sarp Dosh affect marriage?", a: "Yes, if the 7th house lord or Venus is within the Rahu-Ketu axis, marriage delays or issues can occur. Our pandit performs specific Shukra (Venus) remedies alongside Kaal Sarp Dosh Puja for marriage-related cases." }
    ],
    areas: ["Whitefield", "BTM Layout", "Electronic City", "HSR Layout", "Marathahalli", "Indiranagar"]
  },
  // ─── HAVAN PUJAS ────────────────────────────────────────────────────────────
  {
    slug: "havan-puja",
    name: "Havan Puja",
    tagline: "Sacred fire ritual for purification & divine blessings",
    metaTitle: "Havan Pandit Bangalore | Hawan at Home | Radhe Radhe Puja",
    metaDescription: "Book experienced Hindi pandit for Havan at home in Bangalore. Complete Vedic havan puja with havan samagri. Available for all purposes across Bangalore.",
    primaryKeyword: "havan pandit bangalore",
    intro: "Havan — the sacred fire ritual — is the most direct form of communication with the divine in Vedic tradition. When you perform Havan, the fire (Agni) acts as a messenger carrying your prayers and offerings directly to the gods. The purifying properties of havan smoke are also scientifically documented — it cleanses the environment of bacteria, reduces stress, and creates a powerfully positive atmosphere. Our Hindi pandits in Bangalore perform Havan for all purposes — purification, prosperity, protection, and any specific intention you may have. From a simple Gayatri Havan to a full Maha Rudra Havan, we have the pandit expertise and complete samagri for every scale of havan.",
    description: "Havan (also called Homa or Yajna) is the ancient Vedic fire ritual where specific offerings (ghee, herbs, grains) are made into the sacred fire while chanting mantras. It purifies the environment, pleases the divine, and creates blessings for specific intentions.",
    duration: "1–4 Hours (depending on scale)",
    price: "Contact for pricing",
    benefits: ["Purification of home and environment", "Removal of negative energies", "Specific blessings based on havan type", "Mental clarity and reduced stress", "Divine protection for the family"],
    whyImportant: ["Havan is described in the Vedas as the highest form of worship and the most direct offering to the divine", "The smoke of properly performed havan contains antiseptic and purifying properties recognized by modern science", "Agni (fire) is the eternal witness — Havan performed with pure intention reaches directly to divine consciousness", "It is recommended at the start of any new venture, after moving to a new home, or simply as regular home purification"],
    rituals: ["Kalash Sthapana & Ganesh Puja", "Havan Kund preparation", "Specific mantra recitation per havan type", "Ghee, herbs, and grain offerings", "Purnahuti & Aarti"],
    samagri: ["Havan Kund", "Mango wood", "Ghee", "Havan samagri kit", "Camphor", "Herbs"],
    bestFor: "Home purification, new beginnings, regular spiritual practice, all occasions",
    image: "/images/pujas/havan-puja.png",
    deity: "Lord Agni & respective deities",
    category: "havan",
    process: [
      { step: "Choose Havan Type", desc: "Decide the purpose of the havan — purification, prosperity, health, protection, or a specific deity. We'll recommend the appropriate type." },
      { step: "Pandit and Samagri Arranged", desc: "Pandit arrives with the complete havan kit. You need only provide a suitable outdoor or semi-outdoor space (or an indoor space with good ventilation)." },
      { step: "Havan Performed", desc: "Havan Kund is set up, fire lit with mango wood, and offerings made with specific mantras for your chosen intention." },
      { step: "Purnahuti & Prasad", desc: "The final grand offering (Purnahuti) concludes the havan, followed by aarti and distribution of prasad." }
    ],
    faq: [
      { q: "Can Havan be performed inside an apartment in Bangalore?", a: "Yes, havan can be performed in apartments with a well-ventilated space — a balcony, open area, or room with windows. We use havan kund that minimizes smoke. Many apartment societies in Bangalore regularly host havans." },
      { q: "How much does Havan cost in Bangalore?", a: "Basic Havan starts from Contact for Pricing including samagri. Larger havans with multiple pandits and extended rituals are Contact for Pricing–Contact for Pricing depending on scale and duration." },
      { q: "What is the difference between Havan and Puja?", a: "Puja is worship through idol/image with flowers, incense, and food offerings. Havan is worship through fire — offerings are made directly into the sacred fire. Havan is considered more powerful and purifying." },
      { q: "What items are offered in Havan?", a: "Ghee, sesame, barley, rice, specific herbs (like guggul, neem, bilva), sugar, camphor, and specific items based on the deity being invoked. Our samagri kit includes everything." },
      { q: "Can Havan be done regularly at home in Bangalore?", a: "Yes, many devotional families perform small daily Agnihotra (home havan) every day at sunrise and sunset. Our pandit can teach you how to perform this simple daily ritual independently." }
    ],
    areas: ["Whitefield", "Indiranagar", "BTM Layout", "HSR Layout", "Electronic City", "Marathahalli", "Hebbal", "Yelahanka", "Sarjapur"]
  },
  {
    slug: "chandi-havan",
    name: "Chandi Havan",
    tagline: "The most powerful Devi havan for protection & victory",
    metaTitle: "Chandi Havan Pandit Bangalore | Durga Havan | Radhe Radhe Puja",
    metaDescription: "Book experienced pandit for Chandi Havan in Bangalore. Complete Chandi Path with Havan, Durga Saptashati homan. Available for home and community programs.",
    primaryKeyword: "chandi havan pandit",
    intro: "Chandi Havan is one of the most powerful and auspicious fire rituals in all of Hinduism. Performed with the complete recitation of the Durga Saptashati (700 verses of Devi Mahatmyam) combined with a full havan with specific offerings, Chandi Havan creates a phenomenal level of divine energy and protection. It is the supreme ritual for invoking Goddess Chandika (the fierce warrior form of Durga) for victory, protection from enemies, removal of all obstacles, and the fulfillment of difficult desires. Our pandits who specialize in Chandi Havan in Bangalore are trained in the proper Tantric-Puranic method of this powerful ritual.",
    description: "Chandi Havan combines the recitation of Durga Saptashati with a complete Havan, creating a supremely powerful ritual for invoking Goddess Chandika's blessings. It is performed for victory, protection, and the removal of the most difficult obstacles.",
    duration: "6–8 Hours",
    price: "Contact for pricing",
    benefits: ["Supreme divine protection from Goddess Chandi", "Victory in legal disputes and conflicts", "Removal of most difficult life obstacles", "Business growth and financial breakthrough", "Protection from enemies and negativity"],
    whyImportant: ["Chandi Havan is described in the Devi Bhagavatam as one of the most meritorious rituals a family can perform", "The combination of Saptashati recitation and havan creates a uniquely powerful double-action ritual", "It is recommended for court cases, business disputes, severe Pitra Dosh, and spiritual protection", "Navratri Chandi Havan is especially powerful and creates year-long divine protection"],
    rituals: ["Ganesh Puja & Kalash Sthapana", "Complete Durga Saptashati recitation", "Chandi Havan with specific offerings", "108 Ahutis for each chapter", "Purnahuti with all offerings"],
    samagri: ["Ghee", "Red flowers", "Bilva leaves", "Specific herbs for Chandi", "Havan samagri", "Kumkum"],
    bestFor: "Severe obstacles, court cases, Navratri, maximum divine protection",
    image: "/images/pujas/chandi-havan.png",
    deity: "Goddess Chandika (Chandi)",
    category: "havan",
    process: [
      { step: "Book 14+ Days in Advance", desc: "Chandi Havan requires advance planning, multiple experienced pandits, and large quantity samagri. Book early." },
      { step: "Sankalp Planning", desc: "Share your specific Sankalp (wish/intention) and the names of all family members to be included in the blessings." },
      { step: "Full Day Ritual", desc: "The Chandi Havan is an all-day event. Saptashati recitation with havan proceeds chapter by chapter with regular ahuti offerings." },
      { step: "Grand Purnahuti", desc: "The grand Purnahuti concludes the havan, followed by Aarti and distribution of prasad to all attendees." }
    ],
    faq: [
      { q: "How many pandits are needed for Chandi Havan?", a: "Typically 4–7 pandits are used for Chandi Havan to maintain continuous recitation and havan. We provide the complete team." },
      { q: "How long does Chandi Havan take?", a: "A full Chandi Havan takes 6–8 hours. It is typically an all-day event. We also offer partial Chandi Havan (specific chapters only) in 3–4 hours." },
      { q: "Can Chandi Havan be done at home in Bangalore?", a: "Yes, Chandi Havan is done at home. You need a large outdoor or well-ventilated space for the havan kund setup. Terrace, garden, or large balcony areas in apartments work well." },
      { q: "How much does Chandi Havan cost in Bangalore?", a: "Chandi Havan starts from Contact for Pricing for a standard ceremony with 4 pandits. Extended ceremonies with 7+ pandits are Contact for Pricing." },
      { q: "Can Chandi Havan be performed for business success?", a: "Yes, Chandi Havan is specifically recommended for business owners facing severe obstacles, competition, or stagnation. The Goddess's fierce energy clears business obstacles powerfully." }
    ],
    areas: ["Whitefield", "Indiranagar", "BTM Layout", "Electronic City", "Marathahalli", "HSR Layout"]
  },
  {
    slug: "gayatri-havan",
    name: "Gayatri Havan",
    tagline: "The sacred fire of divine intelligence & enlightenment",
    metaTitle: "Gayatri Havan Pandit Bangalore | Gayatri Mantra Puja | Radhe Radhe Puja",
    metaDescription: "Book experienced pandit for Gayatri Havan in Bangalore. Complete Gayatri Mantra havan for students, intelligence, and spiritual growth. All Bangalore areas.",
    primaryKeyword: "gayatri havan pandit",
    intro: "The Gayatri Mantra — Om Bhur Bhuva Swaha, Tat Savitur Varenyam... — is the most sacred mantra in all of the Vedas, and Gayatri Havan is the fire ritual that amplifies its divine energy manifold. Performed specifically for students before exams, for families seeking intellectual clarity, for spiritual seekers, and for anyone beginning a period of education or spiritual learning, Gayatri Havan creates a powerful field of divine intelligence and illumination. For North Indian families in Bangalore where children are preparing for competitive exams (JEE, NEET, IAS), Gayatri Havan is a beloved tradition that combines spiritual support with family blessings.",
    description: "Gayatri Havan is the Vedic fire ritual performed with repetitive recitation of the Gayatri Mantra (minimum 1,008 times) combined with ghee and specific herb offerings. It is the supreme ritual for education, intelligence, clarity, and spiritual growth.",
    duration: "2–3 Hours",
    price: "Contact for pricing",
    benefits: ["Enhanced intelligence and memory", "Divine illumination for students and seekers", "Success in exams and education", "Spiritual growth and meditation quality", "Mental clarity and focus"],
    whyImportant: ["The Gayatri Mantra is said to be a direct channel to divine intelligence (Savitur) — the source of all light and knowledge", "Gayatri Havan performed before exams or academic challenges creates a powerful Sankalp field", "108 or 1,008 Gayatri recitations into fire are equivalent to thousands of regular recitations", "Gayatri is the mother of the Vedas — her worship in fire form is one of the most auspicious acts in Hinduism"],
    rituals: ["Kalash Sthapana & Ganesh Puja", "Gayatri Mata Avahan", "1,008 Gayatri Mantra Ahutis in Havan", "Savitri Homa offerings", "Aarti & Prasad"],
    samagri: ["Ghee", "Sesame", "Barley", "Havan samagri", "Flowers for Gayatri"],
    bestFor: "Students before exams, spiritual seekers, new learning journeys, Janeu ceremony",
    image: "/images/pujas/gayatri-havan.png",
    deity: "Gayatri Mata",
    category: "havan",
    process: [
      { step: "Share Occasion Details", desc: "Share the purpose — student exam prep, Janeu ceremony havan, spiritual practice, or general blessings." },
      { step: "Havan Setup at Home", desc: "Pandit arrives with havan kund and all samagri. A clean, ventilated space of 6x6 feet is needed." },
      { step: "Gayatri Havan", desc: "1,008 Gayatri Mantra ahutis are offered into the havan fire with ghee and specific herbs." },
      { step: "Purnahuti & Prasad", desc: "Final offering and aarti concludes the havan. Pandit offers specific blessing for education/spiritual goals." }
    ],
    faq: [
      { q: "Who should perform Gayatri Havan?", a: "Gayatri Havan is traditionally performed by those who have had their Janeu (Upanayana) ceremony. However, the havan can be arranged by anyone for the benefit of a specific family member." },
      { q: "Is Gayatri Havan good for students before competitive exams?", a: "Yes, Gayatri Havan is one of the most highly recommended rituals for students before JEE, NEET, UPSC, or any major examination. It is performed for intellectual clarity, memory, and reduced exam stress." },
      { q: "How often should Gayatri Havan be performed?", a: "Monthly or quarterly Gayatri Havan creates a continuous spiritual atmosphere of learning and clarity. Many families perform it on Ekadashi or full moon days for regular spiritual nourishment." },
      { q: "Can Gayatri Havan be performed at school or college premises?", a: "Yes, we have performed Gayatri Havan at school premises, college campuses, and coaching centers in Bangalore for student batches before exam season. Contact us for group arrangements." },
      { q: "How much does Gayatri Havan cost in Bangalore?", a: "Gayatri Havan starts from Contact for Pricing for a home puja with 1,008 mantra ahutis. Extended Gayatri Havan with 10,000 mantras and multiple pandits is Contact for Pricing." }
    ],
    areas: ["Whitefield", "BTM Layout", "HSR Layout", "Electronic City", "Indiranagar", "Marathahalli", "Hebbal"]
  },
  {
    slug: "lakshmi-kubera-havan",
    name: "Lakshmi Kubera Havan",
    tagline: "The ultimate wealth havan for financial prosperity",
    metaTitle: "Lakshmi Kubera Havan Pandit Bangalore | Dhan Puja Havan | Radhe Radhe Puja",
    metaDescription: "Book experienced pandit for Lakshmi Kubera Havan in Bangalore. Complete wealth havan with Lakshmi Sahasranama and Kubera mantra. All Bangalore areas covered.",
    primaryKeyword: "kubera havan pandit",
    intro: "Goddess Lakshmi is the bestower of wealth and Kubera is the treasurer of the gods — when both are invoked together in a Havan, the result is a powerfully auspicious ritual for financial prosperity, business growth, and the removal of financial obstacles. Lakshmi Kubera Havan is especially popular among business owners, entrepreneurs, and families working to build financial stability. Our pandits in Bangalore who specialize in wealth havans perform this ritual with Lakshmi Sahasranama (1,000 names of Lakshmi), Kubera mantra jaap, and specific offerings designed to invoke the energy of abundance.",
    description: "Lakshmi Kubera Havan is a combined fire ritual invoking both Goddess Lakshmi and Lord Kubera for wealth, financial prosperity, business growth, and removal of financial obstacles. It includes Lakshmi Sahasranama and Kubera mantra jaap.",
    duration: "3–4 Hours",
    price: "Contact for pricing",
    benefits: ["Financial prosperity and wealth growth", "Business expansion and new opportunities", "Removal of financial obstacles and debts", "Kubera's divine wealth protection", "Abundance of all material and spiritual blessings"],
    whyImportant: ["Combining Lakshmi and Kubera worship creates the most powerful wealth-attracting energy in Vedic ritual", "Diwali and Akshaya Tritiya are the most auspicious times for this havan", "Business owners who perform this havan annually report sustained business growth", "It is specifically recommended for those starting new businesses, seeking loans, or recovering from financial losses"],
    rituals: ["Ganesh Puja & Lakshmi Avahan", "Kubera Yantra Puja", "Lakshmi Sahasranama Archana", "Kubera Mantra Havan (1,008 ahutis)", "Purnahuti with lotus flowers and gold"],
    samagri: ["Lotus flowers", "Gold coin", "Saffron", "Ghee", "Kheel-batasha", "Kubera Yantra"],
    bestFor: "Business owners, financial growth, Diwali, Akshaya Tritiya, new ventures",
    image: "/images/pujas/lakshmi-kubera-havan.png",
    deity: "Goddess Lakshmi & Lord Kubera",
    category: "havan",
    process: [
      { step: "Book for Auspicious Dates", desc: "Book for Diwali, Akshaya Tritiya, Dhanteras, or any Friday for maximum wealth blessing." },
      { step: "Setup Wealth Yantra", desc: "Pandit sets up Kubera Yantra and Lakshmi Yantra alongside the havan kund for enhanced effect." },
      { step: "Lakshmi Kubera Havan", desc: "Sahasranama archana and Kubera mantra jaap with 1,008 ahutis offered into the wealth-specific fire." },
      { step: "Aarti & Energized Yantra", desc: "After havan, the Yantra is energized and given to you to place in your puja room or business premises for ongoing blessings." }
    ],
    faq: [
      { q: "When is the best time for Lakshmi Kubera Havan?", a: "Diwali (Lakshmi Puja night), Akshaya Tritiya, Dhanteras, and Fridays are most auspicious. Our pandit can also select an auspicious muhurat based on your horoscope." },
      { q: "Can Lakshmi Kubera Havan be done at a business office?", a: "Yes, we regularly perform Lakshmi Kubera Havan at offices, shops, factories, and business premises in Bangalore. This is especially recommended when opening a new office or for annual wealth blessings." },
      { q: "How much does Lakshmi Kubera Havan cost in Bangalore?", a: "Lakshmi Kubera Havan starts from Contact for Pricing for a home puja. For business premises with extended havan and more pandits, cost is Contact for Pricing–Contact for Pricing." },
      { q: "Do you provide the Kubera Yantra?", a: "Yes, we provide an energized Kubera Yantra as part of our premium package. This is placed in your puja room or locker for ongoing wealth blessings after the havan." },
      { q: "Is Lakshmi Kubera Havan good for clearing debts?", a: "Yes, specifically for clearing debts and financial obligations, we combine the Lakshmi Kubera Havan with specific Rinn Mukti (debt freedom) mantras and offerings." }
    ],
    areas: ["Whitefield", "Indiranagar", "BTM Layout", "Electronic City", "HSR Layout", "Sarjapur", "Marathahalli", "Hebbal"]
  }
];

export const getPujaBySlug = (slug: string): Puja | undefined =>
  pujas.find((p) => p.slug === slug);

export const getPujasByCategory = (category: Puja["category"]): Puja[] =>
  pujas.filter((p) => p.category === category);
