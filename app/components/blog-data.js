/* Blog posts. Plain data module so server pages (static params, metadata) and client components can both use it.
   Body blocks: { h: "Heading" } | { p: "Paragraph" } | { list: [...] } | { table: { head: [...], rows: [[...]] } } | { note: "Callout" }
   `products` lists catalogue slugs shown as "Products in this article". */

export const POSTS = [
  {
    slug: "concentrate-dilution-guide",
    title: "Concentrate dilution guide: get the most from every 50 L can",
    excerpt: "Exact mixing ratios for all nine Asmi housekeeping concentrates, plus the safety rules printed on every can.",
    category: "Housekeeping",
    date: "2026-10-10",
    readTime: "4 min read",
    cover: "toilet-cleaner-concentrate",
    tint: "from-sky-100 to-violet-100",
    products: ["a-6-toilet-cleaner-concentrate", "ah-1-hand-wash-concentrate", "a-2-floor-cleaner-concentrate", "a-10-phenyl-concentrate"],
    body: [
      { p: "Our 50 L concentrates are made to be diluted with DM (demineralised) water before use. Diluting correctly gives you ready-to-use product at a much lower cost per litre — but only if you follow the ratio for each product." },
      { h: "Dilution ratios at a glance" },
      { table: { head: ["Code", "Product", "Ratio", "How to mix"], rows: [
        ["A-6", "Toilet Cleaner Concentrate", "1:4", "1 L concentrate + 3 L DM water"],
        ["AH-1", "Hand Wash Concentrate", "1:3", "1 L concentrate + 2 L DM water"],
        ["A-3", "Glass Cleaner Concentrate", "1:25", "1 L concentrate + 24 L DM water"],
        ["A-11", "Dish Wash Concentrate", "1:3", "1 L concentrate + 2 L DM water"],
        ["A-8", "Liquid Detergent Concentrate", "1:4", "1 L concentrate + 3 L DM water"],
        ["A-2", "Floor Cleaner Concentrate", "1:7", "1 L concentrate + 6 L DM water"],
        ["A-7", "Metal Cleaner Concentrate", "1:3", "1 L concentrate + 2 L DM water"],
        ["A-4", "Polish Concentrate", "1:2", "1 L concentrate + 1 L DM water"],
        ["A-10", "Phenyl Concentrate", "1:25 – 1:35", "1 L concentrate + 24 L DM water"],
      ] } },
      { note: "The ratio is total parts: 1:4 means 1 part concentrate in 4 parts of finished product — so 1 L concentrate goes into 3 L of water." },
      { h: "How to mix" },
      { list: [
        "Use DM water only, as printed on the can.",
        "Add the measured concentrate to the water and mix it well.",
        "Fill into clean, labelled bottles or dispensers.",
      ] },
      { h: "Safety rules from the label" },
      { list: [
        "For external use only.",
        "Do not mix with any other household cleaner or acid.",
        "Keep out of reach of children.",
        "Avoid contact with eyes.",
        "Best before 24 months from the date of manufacture.",
      ] },
      { p: "Need help working out how many cans you need for a month? Send us your daily usage and we'll calculate it for you." },
    ],
  },
  {
    slug: "cooling-tower-water-treatment",
    title: "Cooling tower water treatment: controlling scale, corrosion and microbes",
    excerpt: "What anti-scalants, anti-corrosion chemicals, biocides and bio-dispersants do in a cooling tower — and typical dosages.",
    category: "Industrial",
    date: "2026-10-06",
    readTime: "5 min read",
    cover: "2003",
    tint: "from-blue-100 to-cyan-50",
    products: ["2003-anti-scalant", "2004-anti-corrosion", "2012-bio-dispersant", "2008-biocide-stable-chlorine-based"],
    body: [
      { p: "A cooling tower constantly evaporates water, which concentrates hardness salts, dissolved oxygen and microbes in what is left. Left untreated, that leads to three problems: scale, corrosion and biological fouling. Each one needs a different chemical." },
      { h: "1. Scale — Anti-Scalant (2003)" },
      { p: "Asmi 2003 Anti-Scalant prevents scale formed by hardness salts such as calcium and magnesium. It keeps scale-forming minerals in suspension, which keeps heat transfer efficient, reduces maintenance and extends equipment life." },
      { note: "Typical dosage: 10–50 ppm in the cooling tower water, depending on water hardness and fouling level." },
      { h: "2. Corrosion — Anti-Corrosion (2004)" },
      { p: "Asmi 2004 Anti-Corrosion protects metal surfaces such as steel, copper and aluminium from corrosion caused by water, oxygen and dissolved salts. It forms a thin protective film on the metal, extending equipment life and maintaining efficient heat transfer." },
      { note: "Typical dosage: 20–100 ppm in the cooling tower water, depending on the metals and conditions in your system." },
      { h: "3. Microbes — biocides and bio-dispersant" },
      { p: "Biocides kill microbes, while Asmi 2012 Bio-Dispersant controls biofilm, algae and microbial growth by keeping particles dispersed, so sticky deposits don't form and the system stays clean." },
      { list: [
        "2008 — Biocide, stable chlorine based",
        "2010 — Biocide, oxidizing",
        "2014 — Biocide, non-oxidizing",
        "2012 — Bio-Dispersant (10–50 ppm, depending on fouling level and system size)",
      ] },
      { h: "Other cooling tower chemicals" },
      { p: "We also supply multifunctional treatments for soft water (2001) and raw water (2002), an alkalinity reducer (2005) and a dispersant (2006). All are available in 5 kg, 25 kg and 50 kg packs." },
      { p: "Dosage depends on your water analysis and system size. Share your details and we'll recommend a programme." },
    ],
  },
  {
    slug: "ro-plant-membrane-cleaning",
    title: "RO plant membrane care: anti-scalant, de-scalant and alkaline cleaning",
    excerpt: "How to prevent scale on RO membranes, and how to clean off scale and organic fouling when it does build up.",
    category: "Industrial",
    date: "2026-10-01",
    readTime: "4 min read",
    cover: "5003",
    tint: "from-emerald-100 to-teal-50",
    products: ["5001-ro-anti-scalant", "5003-ro-de-scalant", "5004-ro-descaling-alkaline", "3004-passivation-alkaline"],
    body: [
      { p: "RO membranes lose flow and efficiency when minerals or organic matter build up on them. The fix is a combination of prevention and periodic cleaning." },
      { h: "Prevent: RO Anti-Scalant (5001)" },
      { p: "An anti-scalant dosed into the feed water helps stop scale from forming on the membranes in the first place." },
      { h: "Remove mineral scale: RO De-Scalant (5003)" },
      { p: "Asmi 5003 removes scale deposits such as calcium, magnesium, iron and other mineral salts from RO membranes, safely dissolving hard deposits to improve membrane life, water flow and system efficiency." },
      { note: "Use a 1–2% solution (10–20 ml per litre of cleaning water). Circulate for 30–40 minutes until the scale loosens and the pH stays in the recommended range." },
      { h: "Remove organic fouling: RO Descaling – Alkaline (5004)" },
      { p: "Asmi 5004 is a mildly alkaline cleaner that removes organic, oily, greasy and microbial fouling from RO membranes without damaging them." },
      { note: "Use a 1–2% solution (10–20 ml per litre of cleaning water). Run the cleaning for 30–40 minutes at around pH 10–11." },
      { h: "Protect pipelines: Passivation – Alkaline (3004)" },
      { p: "After cleaning, Asmi 3004 removes remaining organic and greasy fouling and forms a protective layer on the metal surfaces of pipelines and equipment, helping prevent corrosion and improving the life of the RO system. Use a 1–2% solution, run for 30–40 minutes, then allow a short soak so the passivation layer can form." },
      { p: "All RO chemicals are available in 5 kg, 25 kg and 50 kg packs." },
    ],
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
