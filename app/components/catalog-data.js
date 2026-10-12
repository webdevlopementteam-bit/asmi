/* Full catalogue from the Asmi housekeeping & industrial brochures. Images live in /public/catalog.
   Plain data module (no "use client") so both server pages and client components can import it. */

export const SOAP_SCENTS = ["Lemon", "Pineapple", "Rose", "Lavender", "Peach", "Sandal", "Aloe Vera", "Neem", "Aqua"];
const FLOOR_SCENTS = ["Lemon", "Rose", "Lavender", "Neem"];
const AIR_SCENTS = ["Lemon", "Pineapple", "Lemon Grass", "Rose", "Rose Oudh", "Lavender", "Peach", "Sandal", "Mr. X", "Oudh", "Jasmine", "Mogra", "Citro", "Hugo Boss", "Aqua", "Spice Man"];
const IND_PACKS = ["5 kg", "25 kg", "50 kg"];

export const CATALOG = [
  {
    id: "housekeeping",
    label: "Housekeeping",
    blurb: "Ready-to-use cleaners in retail bottles and 5 L cans.",
    cats: [
      { id: "personal", label: "Personal Care", icon: "hand", items: [
        { name: "Hand Wash", img: "hand-wash", alt: "hand-wash-5l", packs: ["250 ml", "500 ml", "1 L", "5 L"], scents: SOAP_SCENTS },
        { name: "Foam Hand Wash", img: "foam-hand-wash", packs: ["250 ml", "1 L"] },
        { name: "Shower Gel", img: "shower-gel", alt: "shower-gel-5l", packs: ["250 ml", "500 ml", "5 L"], scents: SOAP_SCENTS },
        { name: "Shampoo", img: "shampoo-5l", packs: ["5 L"], scents: SOAP_SCENTS },
      ] },
      { id: "kitchen", label: "Kitchen & Laundry", icon: "utensils", items: [
        { name: "Dish Wash", img: "dish-wash", packs: ["250 ml", "500 ml"] },
        { name: "Liquid Detergent", img: "liquid-detergent", alt: "liquid-detergent-5l", packs: ["500 ml", "1 L", "5 L"] },
        { name: "Fabric Whitener", img: "fabric-whitener", alt: "fabric-whitener-5l", packs: ["500 ml", "5 L"] },
        { name: "Kitchen Chimney Cleaner", img: "kitchen-chimney-cleaner", packs: ["5 L"], note: "Heavy-duty degreasing formula for chimneys and hoods." },
      ] },
      { id: "toilet", label: "Toilet & Bathroom", icon: "bath", items: [
        { name: "Toilet Cleaner", img: "toilet-cleaner", alt: "toilet-cleaner-5l", packs: ["250 ml", "500 ml", "1 L", "5 L"] },
        { name: "Hard Stain Toilet Cleaner", img: "hard-stain-toilet-cleaner-5l", packs: ["5 L"] },
        { name: "Toilet Bleach", img: "toilet-bleach-5l", packs: ["5 L"] },
        { name: "Bathroom Cleaner", img: "bathroom-cleaner", alt: "bathroom-cleaner-5l", packs: ["500 ml", "1 L", "5 L"] },
        { name: "Tap Cleaner", img: "tap-cleaner", alt: "tap-cleaner-5l", packs: ["500 ml", "5 L"] },
        { name: "Tile Cleaner", img: "tile-cleaner", alt: "tile-cleaner-5l", packs: ["500 ml", "1 L", "5 L"] },
      ] },
      { id: "floor", label: "Floor Care", icon: "home", items: [
        { name: "Floor Cleaner", img: "floor-cleaner-5l", alt: "floor-cleaner", altLabel: "All sizes", packs: ["500 ml", "1 L", "2 L", "5 L"], scents: FLOOR_SCENTS },
        { name: "White Floor Cleaner (Phenyl)", img: "white-phenyl", alt: "white-phenyl-5l", packs: ["1 L", "5 L"] },
        { name: "Black Floor Cleaner (Black Phenyl)", img: "black-phenyl", alt: "black-phenyl-5l", packs: ["1 L", "5 L"] },
        { name: "Phenyl Concentrate", img: "phenyl-concentrate", packs: ["200 ml", "500 ml", "1 L"] },
      ] },
      { id: "surface", label: "Glass, Polish & Air", icon: "sparkles", items: [
        { name: "Glass Cleaner", img: "glass-cleaner", packs: ["500 ml"] },
        { name: "Steel Polish", img: "steel-polish", alt: "steel-polish-5l", packs: ["500 ml", "1 L", "5 L"] },
        { name: "Wood Polish", img: "wood-polish", alt: "wood-polish-5l", packs: ["500 ml", "1 L", "5 L"] },
        { name: "Air Freshener", img: "air-freshener", alt: "air-freshener-5l", packs: ["200 ml", "500 ml", "5 L"], scents: AIR_SCENTS },
      ] },
      { id: "car", label: "Car Care", icon: "car", items: [
        { name: "Car Polish", img: "car-polish", alt: "car-polish-5l", packs: ["500 ml", "1 L", "5 L"] },
        { name: "Car Foam Wash", img: "car-foam-wash", packs: ["1 L"] },
        { name: "Snow Foam Wash", img: "snow-foam-wash-5l", packs: ["5 L"] },
      ] },
    ],
  },
  {
    id: "concentrates",
    label: "Concentrates",
    blurb: "50 L concentrates — dilute with DM water for the best cost per litre.",
    cats: [
      { id: "conc", label: "50 L Concentrates", icon: "drop", items: [
        { code: "A-6", name: "Toilet Cleaner Concentrate", img: "toilet-cleaner-concentrate", packs: ["50 L"], note: "Dilution 1:4" },
        { code: "AH-1", name: "Hand Wash Concentrate", img: "hand-wash-concentrate", packs: ["50 L"], note: "Dilution 1:3" },
        { code: "A-3", name: "Glass Cleaner Concentrate", img: "glass-cleaner-concentrate", packs: ["50 L"], note: "Dilution 1:25" },
        { code: "A-11", name: "Dish Wash Concentrate", img: "dish-wash-concentrate", packs: ["50 L"], note: "Dilution 1:3" },
        { code: "A-8", name: "Liquid Detergent Concentrate", img: "liquid-detergent-concentrate", packs: ["50 L"], note: "Dilution 1:4" },
        { code: "A-2", name: "Floor Cleaner Concentrate", img: "floor-cleaner-concentrate", packs: ["50 L"], note: "Dilution 1:7" },
        { code: "A-7", name: "Metal Cleaner Concentrate", img: "metal-cleaner-concentrate", packs: ["50 L"], note: "Dilution 1:3" },
        { code: "A-4", name: "Polish Concentrate", img: "polish-concentrate", packs: ["50 L"], note: "Dilution 1:2" },
        { code: "A-10", name: "Phenyl Concentrate", img: "phenyl-concentrate-50l", packs: ["50 L"], note: "Dilution 1:25 – 1:35" },
      ] },
    ],
  },
  {
    id: "industrial",
    label: "Industrial Chemicals",
    blurb: "Water treatment and process chemicals for boilers, cooling towers and RO plants.",
    cats: [
      { id: "boiler", label: "Boiler Chemicals", icon: "factory", items: [
        { code: "1001", name: "Boiler pH Booster", img: "1001", packs: IND_PACKS },
        { code: "1002", name: "Sludge Conditioner", img: "1002", packs: IND_PACKS },
        { code: "1003", name: "Oxygen Scavenger", img: "1003", packs: IND_PACKS },
        { code: "1005", name: "Multifunctional – Soft Water", img: "1005", packs: IND_PACKS },
        { code: "1006", name: "Multifunctional – Raw Water", img: "1006", packs: IND_PACKS },
      ] },
      { id: "cooling", label: "Cooling Tower", icon: "drop", items: [
        { code: "2001", name: "Multifunctional – Soft Water", img: "2001", packs: IND_PACKS },
        { code: "2002", name: "Multifunctional – Raw Water", img: "2002", packs: IND_PACKS },
        { code: "2003", name: "Anti-Scalant", img: "2003", packs: IND_PACKS, note: "Keeps hardness salts in suspension to stop scale. 10–50 ppm." },
        { code: "2004", name: "Anti-Corrosion", img: "2004", packs: IND_PACKS, note: "Forms a protective film on steel, copper and aluminium. 20–100 ppm." },
        { code: "2005", name: "Alkalinity Reducer", img: "2005", packs: IND_PACKS },
        { code: "2006", name: "Dispersant", img: "2006", packs: IND_PACKS },
        { code: "2008", name: "Biocide – Stable Chlorine Based", img: "2008", packs: IND_PACKS },
        { code: "2010", name: "Biocide – Oxidizing", img: "2010", packs: IND_PACKS },
        { code: "2012", name: "Bio-Dispersant", img: "2012", packs: IND_PACKS, note: "Controls biofilm, algae and microbial deposits. 10–50 ppm." },
        { code: "2014", name: "Biocide – Non-Oxidizing", img: "2014", packs: IND_PACKS },
      ] },
      { id: "descaling", label: "Descaling", icon: "flask", items: [
        { code: "3001", name: "De-Scale – Liquid", img: "3001", packs: IND_PACKS },
        { code: "3002", name: "De-Scale – Silica", img: "3002", packs: IND_PACKS },
        { code: "3004", name: "Passivation – Alkaline", img: "3004", packs: IND_PACKS, note: "Cleans fouling, then forms a protective passivation layer. 1–2% solution." },
        { code: "3005", name: "Boil Out", img: "3005", packs: IND_PACKS },
      ] },
      { id: "ro", label: "RO Plant", icon: "shield", items: [
        { code: "5001", name: "RO Anti-Scalant", img: "5001", packs: IND_PACKS },
        { code: "5003", name: "RO De-Scalant", img: "5003", packs: IND_PACKS, note: "Removes calcium, magnesium and iron scale from membranes. 1–2% solution." },
        { code: "5004", name: "RO Descaling – Alkaline", img: "5004", packs: IND_PACKS, note: "Lifts organic, oily and microbial fouling from membranes. 1–2% solution." },
      ] },
      { id: "fire", label: "Fire Treatment", icon: "sparkles", items: [
        { code: "6001", name: "Combustion Improver – Bagasse / Rice Husk / Wood", img: "6001", packs: IND_PACKS, note: "Better burn, less clinker. 50–200 g per ton of fuel." },
        { code: "6003", name: "Combustion Improver – Coal", img: "6003", packs: IND_PACKS, note: "Reduces unburnt carbon and clinker. 50–200 g per ton of coal." },
        { code: "6004", name: "Combustion Improver – Pet Coke", img: "6004", packs: IND_PACKS, note: "Improves flame stability and heat transfer. 50–200 ml per ton." },
      ] },
    ],
  },
];

export const CATALOG_COUNT = CATALOG.reduce((n, g) => n + g.cats.reduce((m, c) => m + c.items.length, 0), 0);

// One-line overview shown on each product page, per category.
export const CATEGORY_INFO = {
  personal: "Mild, foaming personal-care formulas for hands, body and hair — in retail bottles and 5 L refill cans.",
  kitchen: "Kitchen and laundry cleaners that cut grease and lift stains, for homes, restaurants and laundries.",
  toilet: "Toilet, tap, tile and bathroom cleaners that remove hard stains and keep washrooms fresh.",
  floor: "Floor cleaners and phenyls for everyday mopping of homes, offices, hospitals and institutions.",
  surface: "Glass cleaners, steel and wood polishes, and long-lasting air fresheners.",
  car: "Car polish and foam wash for a clean, glossy finish at home or at the car-care centre.",
  conc: "50 L concentrates — dilute with DM water at the stated ratio for the lowest cost per litre.",
  boiler: "Boiler water-treatment chemicals for pH control, sludge conditioning and oxygen scavenging.",
  cooling: "Cooling-tower chemicals that control scale, corrosion and microbial growth.",
  descaling: "Descaling and passivation chemicals for cleaning heat exchangers, pipelines and plant equipment.",
  ro: "RO plant chemicals that prevent and remove scale and fouling on membranes.",
  fire: "Combustion improvers that help boiler and furnace fuels burn more completely.",
};

const slugify = (t) => t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Give every product a stable URL slug, e.g. "toilet-cleaner" or "2003-anti-scalant".
for (const g of CATALOG) for (const c of g.cats) for (const it of c.items) it.slug = slugify(it.code ? `${it.code} ${it.name}` : it.name);

export const ALL_PRODUCTS = CATALOG.flatMap((g) => g.cats.flatMap((c) => c.items.map((item) => ({ item, group: g, cat: c }))));

export const getProduct = (slug) => ALL_PRODUCTS.find((p) => p.item.slug === slug);

// Label used in the quote form's product dropdown.
export const productLabel = (it) => (it.code ? `${it.code} · ${it.name}` : it.name);
