export interface Puja {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  benefits: string[];
  rituals: string[];
  samagri: string[];
  bestFor: string;
  image: string;
  deity: string;
}

export const pujas: Puja[] = [
  {
    slug: "satyanarayan-puja",
    name: "Satyanarayan Puja",
    tagline: "For peace, prosperity & removal of life's difficulties",
    description: "Satyanarayan Puja is one of the most popular Hindu pujas, performed to seek the blessings of Lord Vishnu (Satyanarayan). It is believed that performing this puja with devotion fulfills all desires, brings prosperity, and removes sorrows from life. The puja involves the recitation of the Satyanarayan Katha and offering of panchamrit and prasad.",
    duration: "2–3 Hours",
    price: "₹2,100 onwards",
    benefits: [
      "Brings peace, prosperity & happiness",
      "Resolves financial difficulties",
      "Strengthens family bonds",
      "Removes negativity from the home",
      "Fulfillment of sincere wishes"
    ],
    rituals: [
      "Ganesh Puja & Kalash Sthapana",
      "Satyanarayan Katha recitation",
      "Panchamrit Abhishek",
      "Aarti & Prasad distribution",
      "Mantra chanting with Havana"
    ],
    samagri: ["Panchamrit", "Flowers", "Incense", "Ghee", "Fruits", "Suji Halwa (Prasad)"],
    bestFor: "New beginnings, housewarming, business success, monthly observance",
    image: "/images/pujas/satyanarayan-puja.png",
    deity: "Lord Vishnu (Satyanarayan)"
  },
  {
    slug: "ganesh-puja",
    name: "Ganesh Puja",
    tagline: "Remove obstacles & invite success into every new endeavour",
    description: "Ganesh Puja is performed to invoke the blessings of Lord Ganesha, the remover of obstacles and the deity of wisdom. It is traditionally conducted before starting any new venture, event, or phase of life. Regular Ganesh puja is believed to bring intellect, good fortune and success in all undertakings.",
    duration: "1–2 Hours",
    price: "₹1,500 onwards",
    benefits: [
      "Removes obstacles from life",
      "Brings wisdom and intellect",
      "Ensures success in new ventures",
      "Protects from negative energies",
      "Grants prosperity and good luck"
    ],
    rituals: [
      "Ganesh Avahan & Sthapana",
      "Shodashopachara Puja",
      "Durva and Modak offering",
      "Ganesh Mantra recitation",
      "Aarti and Prasad"
    ],
    samagri: ["Modak", "Durva grass", "Red flowers", "Sindoor", "Coconut", "Incense"],
    bestFor: "New business, exams, new home, weddings, any auspicious start",
    image: "/images/pujas/ganesh-puja.png",
    deity: "Lord Ganesha"
  },
  {
    slug: "griha-pravesh",
    name: "Griha Pravesh",
    tagline: "Purify your new home & invite divine blessings",
    description: "Griha Pravesh is a sacred Hindu ceremony performed before entering a new home for the first time. It purifies the home of any negative energies and invites positive divine energy into the living space. The ceremony is traditionally performed on a muhurat (auspicious time) selected by the pandit, involving Vastu Puja, Havana and prayers.",
    duration: "3–4 Hours",
    price: "₹5,100 onwards",
    benefits: [
      "Purifies the home of negative energy",
      "Invites peace and prosperity",
      "Ensures wellbeing of all family members",
      "Vastu doshas are corrected",
      "Divine protection for the new residence"
    ],
    rituals: [
      "Muhurat selection by Pandit",
      "Ganesh Puja & Navagraha Puja",
      "Vastu Puja & Havana",
      "Purnahuti offering",
      "Kalash Puja & home entry ritual"
    ],
    samagri: ["Havan samagri", "Ghee", "Mango leaves", "Coconut", "Kalash", "Red cloth"],
    bestFor: "Moving into a new house or flat for the first time",
    image: "/images/pujas/griha-pravesh.png",
    deity: "Lord Ganesha & Vastu Devata"
  },
  {
    slug: "rudrabhishek",
    name: "Rudrabhishek",
    tagline: "The ultimate offering to Lord Shiva for divine grace",
    description: "Rudrabhishek is one of the most powerful Vedic rituals dedicated to Lord Shiva. It involves ritual bathing (Abhishek) of the Shivalinga with sacred substances like milk, honey, curd, ghee, and water while chanting the Rudrashtadhyayi and Namakam-Chamakam mantras. It is said to bestow immense blessings and dissolve sins.",
    duration: "3–5 Hours",
    price: "₹4,100 onwards",
    benefits: [
      "Divine grace and blessings of Lord Shiva",
      "Liberation from sins and past karma",
      "Health, wealth and longevity",
      "Relief from Rahu-Ketu doshas",
      "Peace of mind and spiritual growth"
    ],
    rituals: [
      "Shivalinga Panchopachara Puja",
      "Panchamrit Abhishek",
      "Chanting of Namakam-Chamakam",
      "Bilva leaf offering",
      "Maha Aarti & Prasad"
    ],
    samagri: ["Milk", "Honey", "Ghee", "Curd", "Bilva leaves", "Bhasma", "Rudraksha"],
    bestFor: "Health issues, Shiva devotees, Shravan month, Mahashivratri",
    image: "/images/pujas/rudrabhishek.png",
    deity: "Lord Shiva"
  },
  {
    slug: "navratri-puja",
    name: "Navratri Puja",
    tagline: "Celebrate the nine nights of Goddess Durga's power",
    description: "Navratri Puja spans nine auspicious nights dedicated to worshipping the nine forms of Goddess Durga. It is one of the most celebrated festivals in North India, observed in October/November (Sharad Navratri) and March/April (Chaitra Navratri). The puja involves Kalash Sthapana, Durga Saptashati recitation, and daily aartis.",
    duration: "9 Days / Daily 1–2 Hours",
    price: "₹7,500 onwards",
    benefits: [
      "Blessings of all nine forms of Goddess Durga",
      "Strength, courage and spiritual power",
      "Victory over enemies and obstacles",
      "Protection of the family",
      "Fulfillment of heartfelt desires"
    ],
    rituals: [
      "Kalash Sthapana on Day 1",
      "Daily Durga Saptashati recitation",
      "Kanya Puja on Ashtami/Navami",
      "Havan & Purnahuti",
      "Visarjan on Day 9"
    ],
    samagri: ["Durga idol/photo", "Red flowers", "Kalash", "Akhand diya", "Sweets for Kanya Puja"],
    bestFor: "Navratri festival season, seeking Devi blessings, protection",
    image: "/images/pujas/navratri-puja.png",
    deity: "Goddess Durga (Nine Forms)"
  },
  {
    slug: "diwali-lakshmi-puja",
    name: "Diwali Lakshmi Puja",
    tagline: "Welcome Goddess Lakshmi for wealth & abundance",
    description: "Diwali Lakshmi Puja is performed on the night of Diwali to invite Goddess Lakshmi, the deity of wealth, into the home and business. Conducted at an auspicious muhurat after sunset, the puja involves detailed Lakshmi Puja along with worship of Kubera and Ganesha. It is believed Goddess Lakshmi visits clean, illuminated homes on this night.",
    duration: "2–3 Hours",
    price: "₹2,500 onwards",
    benefits: [
      "Blessings of Goddess Lakshmi for wealth",
      "Prosperity and abundance for the family",
      "Success in business and career",
      "Removes financial obstacles",
      "Brings light and positivity into the home"
    ],
    rituals: [
      "Kalash Puja & Lakshmi Avahan",
      "Ganesh Puja & Kubera Puja",
      "Lakshmi Ashtottara Shatanama Puja",
      "Lakshmi Aarti",
      "Fireworks and prasad distribution"
    ],
    samagri: ["Lotus flowers", "Gold coins", "Kheel-batasha", "Diyas", "Sweets", "Incense"],
    bestFor: "Diwali festival, business owners, new financial year beginnings",
    image: "/images/pujas/diwali-lakshmi-puja.png",
    deity: "Goddess Lakshmi"
  },
  {
    slug: "durga-puja",
    name: "Durga Puja",
    tagline: "Invoke the fierce grace of Goddess Durga",
    description: "Durga Puja is a grand celebration of Goddess Durga's victory over the demon Mahishasura, symbolizing the triumph of good over evil. The puja is performed with elaborate rituals, devotional hymns from the Durga Saptashati (Devi Mahatmyam), and ceremonial offerings. It bestows strength, courage, and divine protection on devotees.",
    duration: "2–4 Hours",
    price: "₹3,500 onwards",
    benefits: [
      "Strength and courage from Goddess Durga",
      "Victory over enemies and adversity",
      "Protection from evil and negative forces",
      "Fulfillment of desires",
      "Health, wealth and happiness"
    ],
    rituals: [
      "Devi Avahan & Shodashopachara",
      "Durga Saptashati Paath",
      "Kumkum Archana",
      "Havan with beej mantras",
      "Maha Aarti & Prasad"
    ],
    samagri: ["Red flowers", "Kumkum", "Sindoor", "Red cloth", "Coconut", "Sweets"],
    bestFor: "Overcoming challenges, protection, festivals, Navratri",
    image: "/images/pujas/durga-puja.png",
    deity: "Goddess Durga"
  },
  {
    slug: "shiv-puja",
    name: "Shiv Puja",
    tagline: "Connect with the supreme consciousness of Lord Shiva",
    description: "Shiv Puja is the daily or special worship of Lord Shiva, one of the principal deities of Hinduism. It is performed with offerings of Bilva leaves, water, milk and white flowers, accompanied by chanting of Om Namah Shivaya and other Shiva mantras. Mondays are especially auspicious for Shiv Puja, as is the month of Shravan.",
    duration: "1–2 Hours",
    price: "₹1,800 onwards",
    benefits: [
      "Blessings of Lord Shiva for spiritual growth",
      "Relief from suffering and illness",
      "Attainment of moksha (liberation)",
      "Success in marriage and relationships",
      "Mental peace and clarity"
    ],
    rituals: [
      "Shivalinga Abhishek with Jal and Milk",
      "Bilva Ashtakam recitation",
      "Om Namah Shivaya Jaap",
      "Panchamrit Abhishek",
      "Shiv Aarti"
    ],
    samagri: ["Bilva leaves", "White flowers", "Milk", "Water", "Bhasma", "Rudraksha beads"],
    bestFor: "Mondays, Shravan month, Mahashivratri, marriage blessings",
    image: "/images/pujas/shiv-puja.png",
    deity: "Lord Shiva"
  },
  {
    slug: "kali-puja",
    name: "Kali Puja",
    tagline: "Seek the transformative power of Goddess Kali",
    description: "Kali Puja is the worship of Goddess Kali, the fierce form of Goddess Durga. She is the destroyer of evil and the protector of devotees. The puja is especially popular in Bengal and is performed on the night of Diwali (Kali Puja) and during Navratri. It involves midnight rituals, animal sacrifices (symbolic), and Tantric mantras.",
    duration: "2–4 Hours",
    price: "₹3,000 onwards",
    benefits: [
      "Protection from black magic and evil eye",
      "Courage and fearlessness",
      "Destruction of enemies",
      "Spiritual liberation",
      "Divine protection of the family"
    ],
    rituals: [
      "Kali Avahan at midnight",
      "Shodashopachara Puja",
      "Kali Sahasranama Archana",
      "Tantric mantra recitation",
      "Aarti & Prasad"
    ],
    samagri: ["Hibiscus flowers", "Blue cloth", "Coconut", "Incense", "Black sesame"],
    bestFor: "Protection from negative forces, spiritual seekers, festivals",
    image: "/images/pujas/kali-puja.png",
    deity: "Goddess Kali"
  },
  {
    slug: "vastu-puja",
    name: "Vastu Puja",
    tagline: "Harmonize your living space with cosmic energies",
    description: "Vastu Puja is performed to correct Vastu doshas (architectural defects) in a home or office and to create harmony with the five elements — earth, water, fire, air and space. It involves worship of the Vastu Purush (deity of land) and is often combined with Navgraha Puja. It is ideal before construction, renovation, or moving into any space.",
    duration: "2–3 Hours",
    price: "₹3,500 onwards",
    benefits: [
      "Corrects Vastu doshas of the property",
      "Brings peace and harmony to the home",
      "Improves health, wealth and relationships",
      "Removes negative energies from the space",
      "Ensures smooth progress and prosperity"
    ],
    rituals: [
      "Vastu Purush Puja",
      "Navgraha Havan",
      "Panchabhoota Puja",
      "Kalash Puja",
      "Aarti and Prasad"
    ],
    samagri: ["Havan samagri", "Navdhanya", "Mango leaves", "Coconut", "Ghee", "Camphor"],
    bestFor: "New homes, renovation, business premises, resolving family disputes",
    image: "/images/pujas/vastu-puja.png",
    deity: "Vastu Purush & Navagraha"
  },
  {
    slug: "namkaran-ceremony",
    name: "Namkaran Ceremony",
    tagline: "Give your newborn a blessed & auspicious name",
    description: "Namkaran (Naming Ceremony) is one of the sixteen Samskaras (sacred rites of passage) in Hinduism, performed on the 11th or 12th day after the birth of a child. The pandit calculates the child's birth rashi and nakshatra to suggest auspicious name letters. The ceremony blesses the child with a long, healthy and prosperous life.",
    duration: "1–2 Hours",
    price: "₹2,100 onwards",
    benefits: [
      "Divine blessings for the newborn",
      "Auspicious name selection based on horoscope",
      "Protection of the child",
      "Long, healthy and prosperous life",
      "Family bonding celebration"
    ],
    rituals: [
      "Janam Kundali preparation",
      "Ganesh Puja",
      "Nakshatranama & Vyavaharika Nama",
      "Graha Shanti Puja",
      "Aarti & Prasad"
    ],
    samagri: ["Flowers", "Fruits", "Sweets", "New clothes for baby", "Gold/silver coin"],
    bestFor: "Naming ceremony on day 11/12 or 100 days after birth",
    image: "/images/pujas/namkaran-ceremony.png",
    deity: "Lord Ganesha & Navagraha"
  },
  {
    slug: "mundan-ceremony",
    name: "Mundan Ceremony",
    tagline: "First haircut ritual for your child's health & wellbeing",
    description: "Mundan (also called Chudakarana) is the sacred ceremony of a child's first haircut, usually performed when the child is 1, 3 or 5 years old. It is believed that removing the birth hair cleanses the child of any past-life karma and promotes healthy growth of strong, thick hair. The ceremony is performed with Vedic mantras and blessings.",
    duration: "1–2 Hours",
    price: "₹1,800 onwards",
    benefits: [
      "Removes past-life karma from the child",
      "Promotes healthy growth of hair",
      "Blessings for a long, healthy life",
      "Spiritual purification of the child",
      "Auspicious transition into new life stage"
    ],
    rituals: [
      "Ganesh Puja & Graha Shanti",
      "Mrigashira Nakshatra selection",
      "Sacred head-shaving ritual",
      "Kesh Dan (donation of hair)",
      "Aarti and Prasad"
    ],
    samagri: ["New razor/scissors", "Curd", "Milk", "Flowers", "New clothes for child"],
    bestFor: "Boys and girls aged 1, 3, or 5 years",
    image: "/images/pujas/mundan-ceremony.png",
    deity: "Lord Ganesha & Lord Vishnu"
  },
  {
    slug: "janeu-ceremony",
    name: "Janeu / Thread Ceremony",
    tagline: "The sacred initiation into Vedic learning & brahmacharya",
    description: "Janeu (Upanayana or Yagyopavit Sanskara) is the sacred thread ceremony marking a young boy's formal initiation into Vedic studies and brahmacharya (student life). The pandit ties the sacred thread (yagyopavit) on the boy's body and teaches him the Gayatri Mantra. It is one of the most important Samskaras in Hinduism.",
    duration: "3–4 Hours",
    price: "₹4,500 onwards",
    benefits: [
      "Initiation into Vedic knowledge",
      "Spiritual growth and discipline",
      "Guru-shishya relationship established",
      "Second birth into spiritual life",
      "Family honor and cultural continuity"
    ],
    rituals: [
      "Muhurat and Kundali Puja",
      "Maunjibandhana (sacred grass belt)",
      "Yagyopavit Dharan",
      "Gayatri Mantra Upadesham",
      "Bhiksha & Aarti"
    ],
    samagri: ["Sacred thread (yagyopavit)", "Deer skin mat", "Staff", "Flowers", "Sesame"],
    bestFor: "Boys aged 7–16, Brahmin/Kshatriya/Vaishya families",
    image: "/images/pujas/janeu-ceremony.png",
    deity: "Lord Ganesha & Gayatri Mata"
  },
  {
    slug: "vivah-puja",
    name: "Vivah Puja",
    tagline: "Authentic Vedic wedding rituals for a blissful marriage",
    description: "Vivah Puja (Hindu Marriage Ceremony) is one of the most sacred Samskaras, uniting two souls in the presence of sacred fire (Agni) and the divine. Our experienced pandits perform all the traditional rituals including Kanyadaan, Saptapadi (seven steps), Mangalsutra and Sindoor ceremonies with proper Vedic mantras and blessings.",
    duration: "4–6 Hours",
    price: "₹11,000 onwards",
    benefits: [
      "Sacred union blessed by divine forces",
      "Long, happy and prosperous married life",
      "Fertility and family blessings",
      "Alignment of stars and destinies",
      "A memorable, authentic ceremony"
    ],
    rituals: [
      "Ganesh Puja & Navagraha Puja",
      "Kanyadaan ritual",
      "Saptapadi (Seven Sacred Steps)",
      "Mangalsutra & Sindoor ceremony",
      "Laja Homa & Ashirvad"
    ],
    samagri: ["Havan kund", "Ghee", "Mango wood", "Flowers", "Mangalsutra", "Sindoor"],
    bestFor: "Hindu weddings, Sagan, engagement pujas",
    image: "/images/pujas/vivah-puja.png",
    deity: "Lord Agni & Lord Vishnu"
  },
  {
    slug: "birthday-puja",
    name: "Birthday Puja",
    tagline: "Begin each year of life with divine blessings",
    description: "Birthday Puja (Jayanti Puja) is performed on a person's birthday to seek divine blessings for health, happiness, and success in the coming year. The pandit performs puja based on the individual's Janam Kundali (birth chart) and conducts Graha Shanti for any unfavorable planetary positions to ensure a smooth and prosperous year ahead.",
    duration: "1–2 Hours",
    price: "₹1,500 onwards",
    benefits: [
      "Divine blessings for the year ahead",
      "Correction of unfavorable planetary positions",
      "Health, happiness and success",
      "Longevity and protection",
      "Family harmony and joy"
    ],
    rituals: [
      "Janam Kundali review by Pandit",
      "Ganesh Puja",
      "Graha Shanti Puja",
      "Abhishek and Archana",
      "Aarti & Birthday Prasad"
    ],
    samagri: ["Flowers", "Fruits", "Sweets", "Incense", "New clothes", "Diya"],
    bestFor: "Children and adults, annual birthday ritual",
    image: "/images/pujas/birthday-puja.png",
    deity: "Lord Ganesha & Navagraha"
  }
];

export const getPujaBySlug = (slug: string): Puja | undefined =>
  pujas.find((p) => p.slug === slug);
