// All business information lives here — edit once, updates everywhere.

export const site = {
  name: "TechWave Cellular",
  legalName: "TECHWAVE CELLULAR MOBILE PHONES AND ACCESSORIES TRADING L.L.C",
  tagline: "Trusted Source for Wholesale Used iPhones",
  description:
    "We specialize in providing high-quality, affordable used iPhones at wholesale prices. Whether you are a retailer, reseller, or simply looking to buy iPhones in bulk, we have the perfect solutions to meet your needs.",
  categories: ["Cell Phone Store", "Wholesaler", "Wholesale market"],
  url: "https://techwave-cellular-mobile.grexa.site",

  address: "78F4+X3 - Deira, Dubai",
  city: "Deira, Dubai, United Arab Emirates",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=TECHWAVE+CELLULAR+MOBILE+PHONES+AND+ACCESSORIES+TRADING+L.L.C%2C+78F4%2BX3+-+Deira%2C+Dubai&query_place_id=ChIJ5xw_QXhDXz4Roxf7MNjnEbU",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=TECHWAVE+CELLULAR+MOBILE+PHONES+AND+ACCESSORIES+TRADING+L.L.C%2C+78F4%2BX3+-+Deira%2C+Dubai&destination_place_id=ChIJ5xw_QXhDXz4Roxf7MNjnEbU",
  mapEmbed:
    "https://maps.google.com/maps?q=TECHWAVE%20CELLULAR%20MOBILE%20PHONES%20AND%20ACCESSORIES%20TRADING%20L.L.C%2C%2078F4%2BX3%20-%20Deira%2C%20Dubai&output=embed",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJ5xw_QXhDXz4Roxf7MNjnEbU",

  phone: "+971 54 433 8737",
  whatsapp: "971544338737", // digits only — used for all WhatsApp buttons
  email: "", // optional, e.g. "sales@techwave.ae"

  rating: 5.0,
  reviewCount: "4+",
};

// Dubai time. Two sessions a day, Monday–Saturday. Sunday: not provided.
export const hours: { day: string; sessions: [string, string][] }[] = [
  { day: "Monday", sessions: [["12:00", "15:00"], ["17:00", "23:30"]] },
  { day: "Tuesday", sessions: [["12:00", "15:00"], ["17:00", "23:30"]] },
  { day: "Wednesday", sessions: [["12:00", "15:00"], ["17:00", "23:30"]] },
  { day: "Thursday", sessions: [["12:00", "15:00"], ["17:00", "23:30"]] },
  { day: "Friday", sessions: [["12:00", "15:00"], ["17:00", "23:30"]] },
  { day: "Saturday", sessions: [["12:00", "15:00"], ["17:00", "23:30"]] },
  { day: "Sunday", sessions: [] },
];

export const reviews = [
  {
    name: "Mohammed Asif Uddin",
    date: "March 7, 2026",
    text: "Great place to buy mobile phones and accessories. The staff are very friendly and helpful. Prices are reasonable and service is fast. Highly recommended for anyone looking for quality phones.",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjW4y2nXNRHPdbeOZVgG0qsbFZShZs3ttzPnQeDLmhhIYsLS_Fp1=s120-c-rp-mo-br100",
  },
  {
    name: "Ahmat Massar Oumar",
    date: "June 22, 2026",
    text: "Good quality phones.",
    original: "Bon qualité des téléphones",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUfXzTfpiYhEschg0AQkQ24gyBhClrheomJY6hW9a2AlOjZKX7h=s120-c-rp-mo-br100",
  },
  {
    name: "Akram Hossain",
    date: "October 29, 2025",
    text: "Have good quality phone.",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUvZDhDnjJtd2nqSZIXF5DuWANDm5gJrnoxEwGgxidViTXudV4h=s120-c-rp-mo-br100",
  },
];

const g = (id: string) => `https://lh3.googleusercontent.com/${id}`;

// Local photos (from the store video) always load. Google photos are added after them;
// any Google photo that fails to load hides itself automatically.
export const gallery: { src: string; full: string; alt: string; tall?: boolean }[] = [
  { src: "/images/store-1.jpg", full: "/images/store-1.jpg", alt: "TechWave Cellular sign inside the Deira store", tall: true },
  { src: "/images/store-2.jpg", full: "/images/store-2.jpg", alt: "Boxed used iPhones in wholesale lots", tall: true },
  { src: "/images/store-3.jpg", full: "/images/store-3.jpg", alt: "TechWave Cellular showroom counter and shelves", tall: true },
  { src: "/images/store-4.jpg", full: "/images/store-4.jpg", alt: "Cartons of graded iPhones ready for buyers", tall: true },
  { src: "/images/store-5.jpg", full: "/images/store-5.jpg", alt: "Labelled iPhone stock packed for wholesale", tall: true },
  ...[
    "9yKPMslY9OWJE1P8ZQrhhGvNRYVFGpxEfMVKIunnjmfxZ-xQ7r4c-jY-Kf_6OkrttnCXvql0rSyrVc0o",
    "mAN8WukRCwCsl4UMSL-JBef8bbJkXBaq_-rQTcWyC9rdSxHACkL9tSyTWV3nS_QFeUPkQ-2XxZrBj796",
    "nIxwgAyd7r-W_gSB8Axk2_V28XkcqCRTJObIgOnWJSKRsDS9P1KF5MEnF4h3pRQCUYJTcIWofn5Ptd1S",
    "jauq6S6xKdqOLD5j6Q7N_MN8V9Ya8BMF9J_kwaEbOl2IpZlJk3XTqU9KQnpUQVdS7WtTzffSA61mpUGE",
    "dMFhYtOdr9kd0J_GwE6BQ_25CkA90x4SC7MZeP0cyvbeotoyPv853yzJhXkb4FTYmyBzf1MPtnKreT3s",
    "wVj1uNOTuER2AeUAbNgvWBiUtgAmm8pbJKTOXN4kN7h0WrCMxzWPZNDtfkY05O4eMH13s7x4-Dqow1gF",
    "U8u7pqvROIGirsBwj6Z_JQhl31UUgmQTzryDb6SLzS1jG8CZustF9AmN93r2K7nER-kS2iJtuS0R8O98",
  ].map((id, i) => ({ src: g(id), full: g(id), alt: `TechWave Cellular store photo ${i + 1}` })),
];

export const services = [
  {
    title: "Wholesale Used iPhones",
    text: "High-quality pre-owned iPhones at true wholesale prices — sourced, checked and graded for resale.",
    icon: "phone",
  },
  {
    title: "Bulk Orders",
    text: "Volume supply for retailers, resellers and traders. Tell us the models and quantities you need.",
    icon: "boxes",
  },
  {
    title: "Mobile Accessories",
    text: "Chargers, cables, cases and essentials to complete every sale, available alongside your handsets.",
    icon: "plug",
  },
  {
    title: "Walk-in Store",
    text: "Visit our shop in Deira to see stock in person, compare devices and buy single units.",
    icon: "store",
  },
];

export const faqs = [
  {
    q: "Do you sell to individual buyers or only to businesses?",
    a: "Both. We specialise in wholesale supply for retailers and resellers, and you are also welcome to visit the store to buy single phones and accessories.",
  },
  {
    q: "How do I get your latest prices?",
    a: "Prices move with the market every day, so the fastest way is WhatsApp: message +971 54 433 8737 and we'll send the current list for the models and quantities you need.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "Tell us the quantity you have in mind on WhatsApp — we work with single-unit walk-in buyers as well as bulk buyers, and we'll advise the best pricing for your volume.",
  },
  {
    q: "Can I check the phones before buying?",
    a: "Yes. You're welcome to visit our store in Deira during business hours to inspect the devices in person before you confirm.",
  },
  {
    q: "What should I include in my enquiry?",
    a: "Let us know the models, storage, condition grades and quantities you're interested in, plus any dates or preferences that matter. This helps us give you an accurate quote quickly.",
  },
  {
    q: "Where can I find the business?",
    a: "We are located at 78F4+X3, Deira, Dubai. Use the Get Directions button to open the exact location in Google Maps.",
  },
  {
    q: "What are the opening hours?",
    a: "Monday to Saturday, 12pm–3pm and 5pm–11:30pm (Dubai time). Planning a visit for a specific date? Contact us to find a convenient time.",
  },
];

export const wa = (text = "Hello TechWave, I'd like today's wholesale iPhone price list.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Models commonly traded — real availability changes daily; customers are asked to confirm on WhatsApp.
export const models = [
  { name: "iPhone 16 Series", variants: "16 · 16 Plus · 16 Pro · 16 Pro Max" },
  { name: "iPhone 15 Series", variants: "15 · 15 Plus · 15 Pro · 15 Pro Max" },
  { name: "iPhone 14 Series", variants: "14 · 14 Plus · 14 Pro · 14 Pro Max" },
  { name: "iPhone 13 Series", variants: "13 · 13 mini · 13 Pro · 13 Pro Max" },
  { name: "iPhone 12 Series", variants: "12 · 12 mini · 12 Pro · 12 Pro Max" },
  { name: "iPhone 11 & SE", variants: "11 · 11 Pro · 11 Pro Max · SE" },
];

export const grades = [
  { g: "A+", t: "Like New", d: "Near-flawless body and screen. Ideal for premium retail shelves." },
  { g: "A", t: "Excellent", d: "Very light signs of use, invisible at arm's length. Our best seller." },
  { g: "B", t: "Good", d: "Visible light scratches or marks. Fully functional, sharper price." },
  { g: "C", t: "Fair", d: "Noticeable wear. Best value for budget markets and refurbishers." },
];

export const steps = [
  { t: "Message us on WhatsApp", d: "Tell us the models, storage, grades and quantities you need." },
  { t: "Get today's price list", d: "We reply with current stock and wholesale prices for your volume." },
  { t: "Inspect & confirm", d: "Visit our Deira store to check the devices in person, or confirm by chat." },
  { t: "Collect your order", d: "Packed and ready for pickup — fast turnaround so you can sell sooner." },
];

export const quickMessages = [
  "Send me today's wholesale price list",
  "I want to buy iPhones in bulk",
  "Do you have iPhone 15 / 16 Pro Max in stock?",
  "I'd like to visit the store",
];
