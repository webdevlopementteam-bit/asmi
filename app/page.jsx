"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ───────────────────────────── Business data (edit here) ───────────────────────────── */

const CONTACT = {
  company: "Asmi Enterprises",
  ceo: "Tejpal (CEO)",
  phone: "+918860849739",
  phoneDisplay: "+91 88608 49739",
  whatsapp: "918860849739",
  otherPhones: [
    { tel: "+919560818449", display: "+91 95608 18449" },
    { tel: "+917011750312", display: "+91 70117 50312" },
  ],
  email: "asmienterprises39@gmail.com",
  address: "H No-51, Street No-15-II, Brahampuri, New Delhi - 110053, Delhi, India",
  maps: "https://maps.google.com?q=28.68276800,77.26541300",
  gst: "07CLAPP6525Q1ZI",
  iec: "CLAPP6525Q",
  site: "https://www.asmi-enterprises.in/",
};

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Asmi Enterprises, I'd like a quote for your products.")}`;

const NAV = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Fragrances", href: "#fragrances" },
  { label: "Industries", href: "#industries" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

function Categories() {
  const categories = [
    { icon: "hand", title: "Personal Care", desc: "Hand wash, hand wash gel, shower gel, liquid soap & sanitizer.", color: "bg-emerald-50 text-emerald-700" },
    { icon: "utensils", title: "Kitchen Care", desc: "Dish wash gel, kitchen cleaner and liquid detergent.", color: "bg-yellow-50 text-yellow-700" },
    { icon: "bath", title: "Bathroom Care", desc: "Toilet cleaner, tap cleaner, tile & bathroom cleaners, phenyl.", color: "bg-sky-50 text-sky-700" },
    { icon: "home", title: "Home & Air", desc: "Floor cleaner, glass cleaner, room & air fresheners.", color: "bg-pink-50 text-pink-700" },
    { icon: "car", title: "Automotive", desc: "Car polish and automotive cleaning solutions.", color: "bg-orange-50 text-orange-700" },
    { icon: "flask", title: "Industrial", desc: "Boiler, cooling tower, descaling, pH booster & fire treatment chemicals.", color: "bg-violet-50 text-violet-700" },
  ];

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Shop by category" title="One manufacturer. Every corner covered." sub="From the kitchen sink to the boiler room — 30+ product lines under one roof." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a key={category.title} href="#range" data-reveal style={{ transitionDelay: `${index * 70}ms` }} className="group relative overflow-hidden rounded-3xl border border-ink/5 bg-white p-8 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(11,27,58,.3)]">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${category.color}`}>
                <Icon name={category.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-ink">{category.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/60">{category.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                View range <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  { name: "Air Freshener Spray", brand: "ASMI", cat: "Home Care", img: "/products/air-freshener.png", note: "5 long-lasting fragrances", size: "Trigger spray", tint: "from-sky-100 to-violet-100" },
  { name: "Tap Cleaner Disinfectant", brand: "ASMI", cat: "Bathroom", img: "/products/tap-cleaner.png", note: "10× ultra clean, lifts hard stains", size: "500 ml", tint: "from-blue-100 to-cyan-50" },
  { name: "Dish Wash Gel", brand: "ASMI", cat: "Kitchen", img: "/products/dish-wash.png", note: "Power of 100 lemons, anti-smell", size: "250 ml · 500 ml", tint: "from-yellow-100 to-lime-50" },
  { name: "Foaming Hand Wash – Neem Lemon", brand: "AMEPRODIN", cat: "Personal Care", img: "/products/hand-wash-5l.png", note: "Foam boosters, emollient formula", size: "5 Ltr", tint: "from-lime-100 to-yellow-50" },
  { name: "Toilet Cleaner – Aqua", brand: "ASMI", cat: "Bathroom", img: "/products/toilet-cleaner-blue.png", note: "20× better clean, kills 99.9% germs", size: "5 Ltr", tint: "from-blue-100 to-indigo-50" },
  { name: "Kitchen Chimney cleaner", brand: "ASMI", cat: "Kitchen", img: "/products/kitchen-chimney-cleaner.png", note: "Premium thick formula", size: "5 Ltr", tint: "from-indigo-100 to-slate-100" },
  { name: "Shower Gel – Neem Tulsi", brand: "ASMI", cat: "Personal Care", img: "/products/shower-gel-neem.png", note: "Feel soft like a feather", size: "300 ml", tint: "from-emerald-100 to-teal-50" },
  { name: "Shower Gel – Fresh Peach", brand: "AMEPRODIN", cat: "Personal Care", img: "/products/shower-gel-peach.png", note: "Moisturizing, foam boosted", size: "5 Ltr", tint: "from-orange-100 to-rose-50" },
];

// Fragrance names are placeholders — rename to match your actual variants.
const FRAGRANCES = [
  { name: "Ocean Breeze", color: "#5BB8F0", glow: "rgba(91,184,240,.45)", notes: "Marine · Cool mint · Clean musk", mood: "Crisp & airy — perfect for living rooms and offices." },
  { name: "Rose Garden", color: "#F47FA0", glow: "rgba(244,127,160,.45)", notes: "Damask rose · Peony · Soft woods", mood: "Romantic and warm — ideal for bedrooms and lobbies." },
  { name: "Green Tea", color: "#8FD37A", glow: "rgba(143,211,122,.45)", notes: "Green tea · Cucumber · Bamboo", mood: "Calm, spa-like freshness for washrooms and clinics." },
  { name: "Citrus Burst", color: "#F8A94A", glow: "rgba(248,169,74,.45)", notes: "Orange peel · Lemon zest · Neroli", mood: "Energising — great for kitchens and reception areas." },
  { name: "Lavender Dream", color: "#8B6CF0", glow: "rgba(139,108,240,.45)", notes: "French lavender · Violet · Vanilla", mood: "Relaxing evenings, hotel rooms and guest spaces." },
];

const FULL_RANGE = [
  "Liquid Hand Wash", "Hand Wash Gel", "Tap Cleaner", "Toilet Cleaner Concentrate", "Toilet Cleaners",
  "Shower Gel", "Liquid Floor Cleaner", "Kitchen Cleaner", "Liquid Detergent", "Boiler Chemicals",
  "Car Polish", "Dishwash Liquid", "Cooling Tower Chemicals", "Air Freshener", "Bathroom Cleaner",
  "Liquid Glass Cleaner", "Tile Cleaner", "Glass Cleaner Concentrate", "Floor Cleaner Concentrate",
  "Liquid Soaps", "Glass Cleaner", "PH Booster Chemical", "Fire Treatment Chemicals", "Descaling Chemicals",
  "Hand Sanitizer", "Black Phenyl", "Automotive Cleaners", "Industrial Chemical", "Room Freshener", "Phenyl Concentrate",
];

const FAQS = [
  { q: "Do you supply in bulk for businesses?", a: "Yes. Asmi Enterprises is a manufacturer and wholesaler, so we supply retail-ready bottles as well as 5 L, 50 L and concentrate packs for hotels, hospitals, facility managers, distributors and institutions." },
  { q: "Can I get private labelling or custom fragrances?", a: "Share your requirement — fragrance, colour, pack size and quantity — and our team will get back to you with feasibility and a quote." },
  { q: "What pack sizes are available?", a: "Most products come from 250 ml retail bottles up to 5 L cans, with concentrates and select products available in larger 50 L packs." },
  { q: "How do I get the latest price?", a: "Prices depend on product, quantity and pack size. Use the quote form below or call us and we'll send you the price right away." },
  { q: "Where are you located and do you deliver outside Delhi?", a: "We manufacture in Brahampuri, New Delhi. Contact us with your delivery location and order size to confirm dispatch options." },
];

/* ───────────────────────────── Icons (no extra deps) ───────────────────────────── */

const PATHS = {
  sparkles: "M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5",
  leaf: "M5 21c0-9 6-15 16-16-1 10-7 16-16 16zM5 21l7-7",
  flask: "M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10",
  truck: "M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  pin: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  check: "M5 12l5 5L20 7",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  arrow: "M5 12h14M13 6l6 6-6 6",
  plus: "M12 5v14M5 12h14",
  menu: "M4 7h16M4 12h16M4 17h16",
  x: "M6 6l12 12M18 6L6 18",
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  factory: "M3 21V10l6 4V10l6 4V6h6v15zM3 21h18",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14l-1.5 7 5-3 5 3-1.5-7",
  tag: "M3 12V3h9l9 9-9 9zM7.5 7.5h.01",
  building: "M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M3 21h18",
  briefcase: "M3 8h18v12H3zM9 8V5h6v3M3 13h18",
  bed: "M3 19V7M3 14h18v5M21 14v-2a3 3 0 0 0-3-3h-7v5M7 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  hospital: "M4 21V5h16v16M12 8v6M9 11h6M3 21h18",
  utensils: "M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 2-3 5s1 4 3 4v9",
  school: "M12 4L2 9l10 5 10-5zM6 11v5c3 2 9 2 12 0v-5",
  car: "M5 16l1.5-5h11L19 16M3 16h18v3H3zM7 19v2M17 19v2",
  home: "M3 11l9-7 9 7v10H3zM9 21v-6h6v6",
  hand: "M8 13V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V5.5a1.5 1.5 0 0 1 3 0V14c0 4-3 7-7 7-3 0-5-2-6.5-4.5L2 13.5a1.5 1.5 0 0 1 2.5-1.5L8 15",
  bath: "M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM6 12V5a2 2 0 0 1 4 0M7 20l-1 2M17 20l1 2",
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}

/* ───────────────────────────── Helpers ───────────────────────────── */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "border-white/15 bg-white/5 text-lemon" : "border-ink/10 bg-white text-ink/70"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-lemon" />
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub, dark = false, center = true, plain = false, wide = false, titleClassName = "" }) {
  return (
    <div data-reveal className={`${center ? "mx-auto text-center" : ""} ${wide ? "" : "max-w-2xl"}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 leading-[1.05] tracking-tight ${titleClassName || "text-4xl sm:text-5xl"} ${plain ? "font-sans font-bold" : "font-display"} ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/65" : "text-ink/60"}`}>{sub}</p>}
    </div>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.25 0 11.35-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02z" />
    </svg>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a href={`tel:${CONTACT.phone}`} aria-label={`Call ${CONTACT.phoneDisplay}`} className="group flex items-center gap-3">
        <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Call {CONTACT.phoneDisplay}
        </span>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-aqua to-aqua-deep text-white shadow-xl shadow-aqua-deep/40 transition group-hover:scale-110">
          <Icon name="phone" className="h-6 w-6" />
        </span>
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="group flex items-center gap-3">
        <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/40 transition group-hover:scale-110">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 [animation-duration:2s]" />
          <WhatsAppIcon className="relative h-7 w-7" />
        </span>
      </a>
    </div>
  );
}

/* ───────────────────────────── 1. Navbar ───────────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <div className="bg-ink text-center text-xs font-medium tracking-wide text-white/80">
        <p className="px-4 py-2">
          <span className="text-lemon">●</span> Manufacturer & wholesaler since 2017 · Bulk orders & custom labels —{" "}
          <a href="#quote" className="font-semibold text-white underline decoration-lemon underline-offset-4">get an instant quote</a>
        </p>
      </div>
      <nav className={`transition-all duration-500 ${scrolled ? "bg-cream/80 shadow-[0_10px_40px_-20px_rgba(11,27,58,.35)] backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center" aria-label="Asmi Enterprises home">
            <Image src="/logo.png" alt="Asmi Enterprises" width={2109} height={745} priority className="h-10 w-auto sm:h-12" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:bg-ink/5 hover:text-ink">{n.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Icon name="phone" className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90">
              Get Quote <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white lg:hidden" aria-label="Toggle menu">
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>

        {open && (
          <div className="mx-4 mb-4 rounded-3xl bg-white p-4 shadow-2xl lg:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium text-ink hover:bg-cream">{n.label}</a>
            ))}
            <a href="#quote" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-lemon px-4 py-3 text-center font-semibold text-ink">Get a Quote</a>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ───────────────────────────── 2. Hero ───────────────────────────── */

function Hero() {
  return (
    <section>
      <picture>
        <source media="(max-width: 767px)" srcSet="/products/mobilebanner.png" />
        <img src="/products/desktopbanner.png" alt="" className="block h-auto w-full" />
      </picture>
    </section>
  );
}

/* ───────────────────────────── 3. Marquee strip ───────────────────────────── */

function Marquee() {
  const items = ["Hand Wash", "Shower Gel", "Dish Wash Gel", "Toilet Cleaner", "Tap Cleaner", "Air Freshener", "Floor Cleaner", "Glass Cleaner", "Liquid Detergent", "Black Phenyl", "Car Polish", "Boiler Chemicals"];
  const row = [...items, ...items];
  return (
    <section className="relative -rotate-1 overflow-hidden bg-ink py-5">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl text-white/90 sm:text-3xl">
            {t} <Icon name="sparkles" className="h-5 w-5 text-lemon" />
          </span>
        ))}
      </div>
    </section>
  );
}

function CounterStat({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element || !("IntersectionObserver" in window)) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const startedAt = performance.now();
      const duration = 1400;
      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setCount(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, value]);

  return (
    <div ref={setElement} className="border-ink/10 px-4 text-center first:border-l-0 sm:border-l">
      <p className="font-display text-3xl text-ink sm:text-4xl">{count}{suffix}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink/50">{label}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: 30, suffix: "+", label: "Products" },
    { value: 500, suffix: "+", label: "Cities served" },
    { value: 97, suffix: "%", label: "Repeat orders" },
    { value: 100, suffix: "%", label: "safe & effective" },
  ];

  return (
    <section aria-label="Asmi at a glance" className="bg-white py-10 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <CounterStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function About() {
  const ranges = [
    { icon: "home", title: "Home care", desc: "Liquid detergents, toilet and tile cleaners, air fresheners" },
    { icon: "hand", title: "Personal care", desc: "Hand wash gel and hand wash soap" },
    { icon: "flask", title: "Industrial cleaning", desc: "Boiler chemicals and heavy-duty cleaning products" },
  ];
  const principles = ["Quality products", "Ethical business practices", "Transparent transactions"];
  const facts = [
    { label: "Founded", value: "2017" },
    { label: "Based in", value: "New Delhi" },
    { label: "What we do", value: "Manufacturing & wholesale" },
    { label: "GSTIN", value: CONTACT.gst },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-15">
      <div className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-aqua/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-lemon/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: factory image */}
          <div data-reveal className="relative">
            <div className="absolute -inset-3 hidden rounded-[2.75rem] border border-ink/10 sm:block lg:-inset-4" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-40px_rgba(11,27,58,.55)] ring-1 ring-ink/10">
              <Image src="/aboutimage.png" alt="Asmi Enterprises manufacturing unit in New Delhi" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-[1.5s] hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-16 sm:p-8 sm:pt-28">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lemon sm:text-xs">Our facility</p>
                <p className="mt-1 font-display text-lg leading-snug text-white sm:text-2xl">Manufacturing unit · Brahampuri, New Delhi</p>
              </div>
            </div>

            {/* Floating badge: year */}
            <div className="absolute left-3 top-3 rounded-2xl bg-ink/90 px-3.5 py-2.5 text-white shadow-2xl backdrop-blur sm:-left-6 sm:top-10 sm:rounded-3xl sm:bg-ink sm:px-6 sm:py-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60 sm:text-[10px]">Since</p>
              <p className="font-display text-2xl leading-none text-lemon sm:text-4xl">2017</p>
            </div>

            {/* Floating badge: verified */}
            <div className="absolute -right-6 bottom-32 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-ink">GST registered</span>
                <span className="block text-xs text-ink/55">Manufacturer & wholesaler</span>
              </span>
            </div>
          </div>

          {/* Right: story */}
          <div>
            <div data-reveal>
              <Eyebrow>About Asmi</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Built on trust <span className="italic text-aqua-deep">since 2017.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                Asmi Enterprises makes and supplies cleaning products for homes, for personal care and for
                industry, from our base in New Delhi.
              </p>
              <p className="mt-3 leading-relaxed text-ink/60">
                We work to meet our customers’ expectations with quality products, ethical business
                practices and transparent transactions, building healthy relationships along the way.
              </p>
            </div>

            {/* Product ranges */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {ranges.map((r, i) => (
                <div key={r.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="group rounded-2xl border border-ink/5 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(11,27,58,.35)]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-lemon transition group-hover:bg-aqua-deep group-hover:text-white">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-base text-ink">{r.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Principles */}
            <ul data-reveal className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-lemon text-ink">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Acknowledgement */}
            <figure data-reveal className="mt-6 flex items-start gap-4 rounded-2xl bg-ink/[0.03] p-4 ring-1 ring-ink/5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-aqua to-ink font-display text-white">T</span>
              <div>
                <blockquote className="text-sm leading-relaxed text-ink/70">
                  We are grateful to Mr. Tejpal for the continued guidance and support that have helped Asmi
                  Enterprises grow in the market.
                </blockquote>
                <figcaption className="mt-2 text-sm font-semibold text-ink">
                  Mr. Tejpal <span className="font-normal text-ink/50">· CEO, Asmi Enterprises</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        {/* Facts strip */}
        <dl data-reveal className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className={`px-6 py-7 sm:px-8 ${i % 2 ? "border-l border-white/10" : ""} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">{f.label}</dt>
              <dd className="mt-2 break-words font-display text-lg text-white sm:text-xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ───────────────────────────── 5. Product showcase ───────────────────────────── */

function Products() {
  return (
    <section id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead wide titleClassName="whitespace-nowrap text-[clamp(1rem,4.6vw,3rem)]" eyebrow="Featured products" title="Crafted to clean. Designed to delight." sub="Retail-ready packs and bulk cans from the ASMI and AMEPRODIN lines." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-aqua/50 hover:shadow-[0_20px_45px_-24px_rgba(11,27,58,.35)]">
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.tint}`}>
                <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-contain p-7 transition duration-500 group-hover:scale-105" />


              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl leading-snug text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{p.note}</p>
                <div className="mt-auto pt-5">
                  <a href="#quote" className="flex items-center justify-between border-t border-ink/10 pt-4 text-sm font-semibold text-ink transition group-hover:text-aqua-deep">
                    Get best price <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 6. Fragrance spotlight ───────────────────────────── */

function Fragrances() {
  const [active, setActive] = useState(0);
  const f = FRAGRANCES[active];

  return (
    <section id="fragrances" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-700" style={{ background: f.glow }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHead dark center={false} titleClassName="whitespace-nowrap text-[clamp(1.4rem,6.2vw,2.5rem)] lg:text-[clamp(1.75rem,3.1vw,2.35rem)]" eyebrow="Signature collection" title="Five moods. One spritz away." sub="The ASMI Air Freshener range — fine-mist trigger sprays that leave rooms smelling fresh long after you've left." />

          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            {FRAGRANCES.map((fr, i) => (
              <button key={fr.name} onClick={() => setActive(i)} className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition ${i === active ? "border-white bg-white text-ink" : "border-white/15 text-white/70 hover:border-white/40"}`}>
                <span className="h-3.5 w-3.5 rounded-full ring-2 ring-white/40" style={{ background: fr.color }} />
                {fr.name}
              </button>
            ))}
          </div>

          <div key={f.name} className="mt-10 animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Scent notes</p>
            <p className="mt-2 whitespace-nowrap font-display text-[clamp(1rem,4.2vw,1.875rem)] lg:text-[clamp(1.35rem,2.1vw,1.875rem)]" style={{ color: f.color }}>{f.notes}</p>
            <p className="mt-4 text-white/70">{f.mood}</p>
            <a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lemon px-6 py-3 font-semibold text-ink">
              Order {f.name} <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div data-reveal className="relative">
          <div className="relative aspect-[1517/1037] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)] ring-8 ring-white/5 sm:rounded-[2.5rem]">
            <Image src="/products/air-freshener.png" alt="ASMI air freshener lineup" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white p-1.5 shadow-2xl sm:-bottom-6 sm:gap-2 sm:p-2">
            {FRAGRANCES.map((fr, i) => (
              <button key={fr.name} onClick={() => setActive(i)} aria-label={fr.name} className={`h-7 rounded-full transition-all duration-500 sm:h-8 ${i === active ? "w-14 sm:w-16" : "w-7 sm:w-8"}`} style={{ background: fr.color }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 9. Process ───────────────────────────── */

const PROCESS_CSS = `
@keyframes p-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
@keyframes p-travel-x { 0% { left: 0%; opacity: 0; } 10%, 90% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
@keyframes p-travel-y { 0% { top: 0%; opacity: 0; } 10%, 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
@keyframes p-progress { from { width: 0%; } to { width: 100%; } }
.p-bob { animation: p-bob 3s ease-in-out infinite; }
.p-travel-x { animation: p-travel-x 4s ease-in-out infinite; }
.p-travel-y { animation: p-travel-y 5s ease-in-out infinite; }
.p-progress { animation: p-progress 2.8s linear both; }
.p-fill-x { transform: scaleX(0); transform-origin: left; transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s; }
.p-fill-y { transform: scaleY(0); transform-origin: top; transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s; }
.is-visible .p-fill-x { transform: scaleX(1); }
.is-visible .p-fill-y { transform: scaleY(1); }
@media (prefers-reduced-motion: reduce) { .p-fill-x, .p-fill-y { transform: none; } }
`;

function Process() {
  const steps = [
    { icon: "leaf", title: "Source", desc: "Quality raw materials, surfactants and fragrances selected for performance.", tags: ["Raw materials", "Fragrances"], grad: "from-emerald-400 to-teal-600", glow: "shadow-emerald-500/40" },
    { icon: "flask", title: "Formulate", desc: "Balanced formulas tuned for cleaning power, fragrance and skin comfort.", tags: ["Cleaning power", "Skin comfort"], grad: "from-aqua to-aqua-deep", glow: "shadow-sky-500/40" },
    { icon: "drop", title: "Fill & Seal", desc: "Filled into leak-proof bottles, cans and drums with tamper-safe caps.", tags: ["Leak-proof", "Tamper-safe"], grad: "from-violet-400 to-indigo-600", glow: "shadow-indigo-500/40" },
    { icon: "truck", title: "Dispatch", desc: "Packed and shipped to homes, businesses and distributors.", tags: ["Homes", "Businesses"], grad: "from-amber-400 to-orange-500", glow: "shadow-orange-500/40" },
  ];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 2800);
    return () => clearInterval(id);
  }, [paused, steps.length]);

  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-32">
      <style>{PROCESS_CSS}</style>

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(11,27,58,.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-aqua/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-lemon/25 blur-3xl [animation-delay:-9s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="How it's made" title="From formula to your doorstep." sub="Four careful steps between our factory floor and your shelf." />

        <ol data-reveal className="relative mt-12 grid gap-4 sm:mt-20 sm:gap-8 lg:grid-cols-4 lg:gap-6" onMouseLeave={() => setPaused(false)}>
          {/* Connector — desktop (horizontal) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-1 -translate-y-1/2 rounded-full bg-ink/10 lg:block">
            <div className="p-fill-x h-full rounded-full bg-gradient-to-r from-emerald-400 via-aqua to-orange-400" />
            <span className="p-travel-x absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lemon shadow-[0_0_16px_4px_rgba(247,208,70,.7)]" />
          </div>
          {/* Connector — mobile (vertical) */}
          <div className="absolute bottom-7 left-7 top-7 w-1 -translate-x-1/2 rounded-full bg-ink/10 sm:bottom-10 sm:left-10 sm:top-10 lg:hidden">
            <div className="p-fill-y h-full w-full rounded-full bg-gradient-to-b from-emerald-400 via-aqua to-orange-400" />
            <span className="p-travel-y absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lemon shadow-[0_0_16px_4px_rgba(247,208,70,.7)]" />
          </div>

          {steps.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title} onMouseEnter={() => { setActive(i); setPaused(true); }} className="group relative flex gap-4 sm:gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                {/* Icon node */}
                <div className="relative z-10 h-14 w-14 shrink-0 sm:h-20 sm:w-20">
                  {on && <span className="absolute inset-0 animate-ping rounded-full bg-aqua/25" />}
                  <div className={`relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${s.grad} text-white shadow-xl ring-4 ring-cream sm:h-20 sm:w-20 sm:ring-8 transition duration-500 ${on ? `scale-110 ${s.glow}` : "shadow-ink/10"}`}>
                    <span className="p-bob" style={{ animationDelay: `${i * 0.4}s` }}>
                      <Icon name={s.icon} className="h-6 w-6 sm:h-8 sm:w-8" />
                    </span>
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-ink text-[10px] font-bold text-lemon ring-2 ring-cream sm:-right-1 sm:-top-1 sm:h-7 sm:w-7 sm:text-[11px] sm:ring-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className={`relative flex-1 overflow-hidden rounded-2xl bg-white/90 p-4 ring-1 sm:rounded-3xl sm:p-6 backdrop-blur transition duration-500 lg:mt-10 lg:w-full ${on ? "-translate-y-1.5 shadow-[0_30px_60px_-25px_rgba(11,27,58,.35)] ring-aqua/40" : "shadow-sm ring-ink/5"}`}>
                  <span className={`pointer-events-none absolute -right-1 -top-2 font-display text-6xl leading-none sm:-right-2 sm:-top-4 sm:text-8xl transition duration-500 ${on ? "text-aqua/15" : "text-ink/[0.04]"}`}>
                    {i + 1}
                  </span>
                  <p className="relative text-[10px] font-semibold uppercase tracking-[0.25em] text-aqua-deep sm:text-[11px]">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="relative mt-1 font-display text-xl text-ink sm:mt-2 sm:text-2xl">{s.title}</h3>
                  <p className="relative mt-1 text-sm leading-relaxed text-ink/60 sm:mt-2">{s.desc}</p>
                  <div className="relative mt-4 hidden flex-wrap gap-2 sm:flex lg:justify-center">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink/70">{t}</span>
                    ))}
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-ink/5">
                    {on && <span key={`${active}-${paused}`} className={`block h-full bg-gradient-to-r ${s.grad} ${paused ? "w-full" : "p-progress"}`} />}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>

        <div data-reveal className="mt-10 flex justify-center sm:mt-14">
          <a href="#quote" className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-5 text-left text-xs sm:pr-6 sm:text-sm font-semibold text-white shadow-xl shadow-ink/20 transition hover:-translate-y-0.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lemon text-ink">
              <Icon name="sparkles" className="h-4 w-4" />
            </span>
            Need a custom formula or private label? Talk to us
            <Icon name="arrow" className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 10. Industries ───────────────────────────── */

function Industries() {
  const list = [
    { icon: "bed", name: "Hotels & Hospitality", uses: "Hand wash, air fresheners, toilet & floor cleaners", grad: "from-sky-400 to-blue-600", glow: "bg-sky-500", text: "group-hover:text-sky-300", ring: "group-hover:ring-sky-400/40" },
    { icon: "hospital", name: "Hospitals & Clinics", uses: "Disinfectants, sanitizer, phenyl & tile cleaners", grad: "from-rose-400 to-pink-600", glow: "bg-rose-500", text: "group-hover:text-rose-300", ring: "group-hover:ring-rose-400/40" },
    { icon: "briefcase", name: "Corporate Offices", uses: "Glass & floor cleaners, room fresheners", grad: "from-violet-400 to-indigo-600", glow: "bg-violet-500", text: "group-hover:text-violet-300", ring: "group-hover:ring-violet-400/40" },
    { icon: "school", name: "Schools & Institutions", uses: "Bulk hand wash, phenyl & washroom care", grad: "from-amber-300 to-orange-500", glow: "bg-amber-500", text: "group-hover:text-amber-300", ring: "group-hover:ring-amber-400/40" },
    { icon: "utensils", name: "Restaurants & Cafés", uses: "Dish wash gel, kitchen & chimney cleaners", grad: "from-lime-300 to-green-600", glow: "bg-lime-500", text: "group-hover:text-lime-300", ring: "group-hover:ring-lime-400/40" },
    { icon: "factory", name: "Factories & Plants", uses: "Boiler, cooling tower & descaling chemicals", grad: "from-slate-300 to-slate-600", glow: "bg-slate-400", text: "group-hover:text-slate-200", ring: "group-hover:ring-slate-300/40" },
    { icon: "car", name: "Car Care & Garages", uses: "Car polish & automotive cleaners", grad: "from-red-400 to-orange-600", glow: "bg-red-500", text: "group-hover:text-red-300", ring: "group-hover:ring-red-400/40" },
    { icon: "home", name: "Homes & Retailers", uses: "Retail-ready packs across every category", grad: "from-teal-300 to-cyan-600", glow: "bg-teal-500", text: "group-hover:text-teal-300", ring: "group-hover:ring-teal-400/40" },
  ];

  return (
    <section id="industries" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 animate-blob rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead dark eyebrow="Industries we serve" title="Trusted wherever clean matters." sub="From five-star lobbies to factory floors — the right formula, in the right pack size, for every space." />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((l, i) => (
            <a
              key={l.name}
              href="#quote"
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`group relative flex min-h-[15rem] flex-col overflow-hidden rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:bg-white/[0.07] ${l.ring}`}
            >
              {/* Hover glow */}
              <span className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${l.glow} opacity-0 blur-3xl transition duration-700 group-hover:opacity-40`} />

              <div className="relative flex items-start justify-between">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${l.grad} text-white shadow-lg shadow-black/30 transition duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                  <Icon name={l.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-sm text-white/25">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="relative mt-auto pt-8 font-display text-xl leading-snug text-white">{l.name}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/55">{l.uses}</p>

              <span className={`relative mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition ${l.text}`}>
                Get a quote <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div data-reveal className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-6 ring-1 ring-white/10 sm:flex-row sm:px-8">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lemon text-ink">
              <Icon name="sparkles" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg text-white">Don&apos;t see your industry?</p>
              <p className="text-sm text-white/55">We supply bulk and custom orders for any business that needs to stay clean.</p>
            </div>
          </div>
          <a href="#quote" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-lemon px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
            Talk to us <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 13. Testimonials ───────────────────────────── */

// PLACEHOLDER reviews — replace with real customer reviews from your Google, Facebook and Instagram pages before going live.
const TESTIMONIALS = [
  { platform: "google", who: "Hotel purchase manager", place: "New Delhi", text: "Consistent quality batch after batch. The hand wash and air freshener are now standard across all our rooms." },
  { platform: "facebook", who: "Distributor", place: "Uttar Pradesh", text: "Factory pricing, on-time dispatch and good margins. Our retailers keep coming back for the toilet cleaner." },
  { platform: "instagram", who: "Café owner", place: "Gurugram", text: "The lemon dish wash gel cuts through grease easily and the fragrance stays. Great value in 5 L packs." },
  { platform: "google", who: "Facility manager", place: "Noida", text: "We switched our office floor and glass cleaners to Asmi. Same results, much better price for bulk orders." },
  { platform: "facebook", who: "Clinic administrator", place: "Delhi", text: "Reliable disinfectant cleaners for our washrooms and a team that responds quickly on every order." },
  { platform: "instagram", who: "Home customer", place: "Faridabad", text: "Love the Neem Tulsi shower gel — soft on skin and smells fresh. The whole family uses it now." },
  { platform: "google", who: "School administrator", place: "Ghaziabad", text: "Bulk hand wash and phenyl at the right price. Delivery has always been on schedule." },
  { platform: "facebook", who: "Car wash owner", place: "Delhi", text: "Car polish gives a great shine and the automotive cleaners are tough on dirt. Good repeat supplier." },
];

function PlatformIcon({ platform, className = "h-6 w-6" }) {
  if (platform === "google")
    return (
      <svg viewBox="0 0 48 48" className={className} aria-label="Google">
        <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
      </svg>
    );
  if (platform === "facebook")
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Facebook">
        <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
      </svg>
    );
  return (
    <span className={`grid place-items-center rounded-[30%] bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 ${className}`} aria-label="Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" className="h-[62%] w-[62%]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="white" />
      </svg>
    </span>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z" /></svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  const label = { google: "Google review", facebook: "Facebook review", instagram: "Instagram" }[t.platform];
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-3xl bg-white p-6 shadow-[0_20px_50px_-30px_rgba(11,27,58,.35)] ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,27,58,.45)] sm:w-[22rem]">
      <div className="flex items-center justify-between">
        <Stars />
        <PlatformIcon platform={t.platform} className="h-7 w-7" />
      </div>
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink/75">“{t.text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-aqua to-ink text-sm font-semibold text-white">
          {t.who.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-ink">{t.who}</span>
          <span className="block text-xs text-ink/50">{t.place} · {label}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-aqua/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Customer love" title="Loved by businesses and homes." sub="What our customers say about us on Google, Facebook and Instagram." />
        <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["google", "facebook", "instagram"].map((p) => (
            <span key={p} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold capitalize text-ink shadow-sm ring-1 ring-ink/5">
              <PlatformIcon platform={p} className="h-5 w-5" /> {p}
            </span>
          ))}
        </div>
      </div>

      <div className="group relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 py-2 pr-5 [animation-duration:60s] group-hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 14. FAQ ───────────────────────────── */

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-lemon/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead center={false} eyebrow="FAQ" title="Questions, answered." sub="Everything you need to know about ordering from Asmi." />

          <div data-reveal className="relative mt-10 overflow-hidden rounded-3xl bg-ink p-7 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua/30 blur-2xl" />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-lemon text-ink">
              <Icon name="phone" className="h-5 w-5" />
            </span>
            <p className="relative mt-5 font-display text-2xl">Still have questions?</p>
            <p className="relative mt-1 text-white/60">Talk to our team directly — we usually reply the same day.</p>
            <div className="relative mt-6 flex flex-wrap gap-3">
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full bg-lemon px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
                <Icon name="phone" className="h-4 w-4" /> {CONTACT.phoneDisplay}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-reveal style={{ transitionDelay: `${i * 60}ms` }} className={`overflow-hidden rounded-3xl transition duration-500 ${isOpen ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(11,27,58,.6)]" : "bg-cream text-ink hover:bg-[#f5efe2]"}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center gap-5 px-6 py-5 text-left sm:px-7 sm:py-6" aria-expanded={isOpen}>
                  <span className={`font-display text-sm transition ${isOpen ? "text-lemon" : "text-ink/35"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-display text-lg sm:text-xl">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-500 ${isOpen ? "rotate-45 bg-lemon text-ink" : "bg-white text-ink shadow-sm"}`}>
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-7 pl-[3.75rem] pr-6 leading-relaxed text-white/70 sm:pl-[4.25rem] sm:pr-16">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 15. Quote / Contact ───────────────────────────── */

function Quote() {
  const [sent, setSent] = useState(false);
  const packs = ["250 ml", "500 ml", "5 Ltr", "50 Ltr", "Concentrate"];

  // TODO: connect this to your API route, email service or CRM.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Enquiry:", data);
    setSent(true);
  };

  const [lat, lng] = CONTACT.maps.split("q=")[1].split(",");
  const contacts = [
    { icon: "phone", label: "Call us", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}`, wide: true },
    { icon: "mail", label: "Email us", value: CONTACT.email, href: `mailto:${CONTACT.email}`, wide: true },
    { icon: "pin", label: "Visit our unit", value: CONTACT.address, href: CONTACT.maps, wide: true },
    { icon: "shield", label: `GSTIN · ${CONTACT.ceo}`, value: CONTACT.gst, wide: true },
  ];

  return (
    <section id="quote" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-aqua/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Get instant quote" title="Let's talk about your order." sub="Tell us what you need — we'll send the best price right away." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Left: contact details + map */}
          <div data-reveal className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#12306b] to-aqua-deep p-7 text-white sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lemon/25 blur-3xl" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-lemon">Reach us</p>
              <p className="relative mt-2 font-display text-3xl">We&apos;re one call away.</p>
              <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {contacts.map((c) => {
                  const Tag = c.href ? "a" : "div";
                  return (
                    <Tag key={c.label} {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})} className={`group flex items-start gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition hover:bg-white/10 ${c.wide ? "sm:col-span-2" : ""}`}>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lemon transition group-hover:bg-lemon group-hover:text-ink">
                        <Icon name={c.icon} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-white/55">{c.label}</span>
                        <span className="block break-words font-semibold leading-snug">{c.value}</span>
                      </span>
                    </Tag>
                  );
                })}
              </div>
              <p className="relative mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
                <span>Also call:</span>
                {CONTACT.otherPhones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="font-semibold text-white/85 underline decoration-white/25 underline-offset-4 hover:text-lemon">{p.display}</a>
                ))}
              </p>
            </div>

            <div className="relative min-h-[16rem] flex-1 overflow-hidden rounded-[2rem] ring-1 ring-ink/10">
              <iframe
                title="Asmi Enterprises location"
                src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                className="absolute inset-0 h-full w-full grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg transition hover:-translate-y-0.5">
                <Icon name="pin" className="h-4 w-4 text-aqua-deep" /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div data-reveal className="rounded-[2rem] bg-white p-7 shadow-[0_40px_80px_-40px_rgba(11,27,58,.35)] ring-1 ring-ink/5 sm:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="relative grid h-20 w-20 place-items-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-lemon/40" />
                  <span className="relative grid h-20 w-20 place-items-center rounded-full bg-lemon text-ink"><Icon name="check" className="h-8 w-8" /></span>
                </span>
                <h3 className="mt-8 font-display text-3xl text-ink">Enquiry received!</h3>
                <p className="mt-2 text-ink/60">Our team will get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-aqua-deep underline underline-offset-4">Send another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <p className="font-display text-2xl text-ink">Request a quote</p>
                  <p className="mt-1 text-sm text-ink/55">Fields marked * are required.</p>
                </div>
                <Field label="Full name" name="name" required />
                <Field label="Mobile number" name="phone" type="tel" required />
                <Field label="Company / Business" name="company" />
                <Field label="Delivery city" name="city" />
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-ink/70">Product</span>
                  <select name="product" className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3.5 text-ink outline-none transition focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/15">
                    {FULL_RANGE.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </label>
                <fieldset className="sm:col-span-2">
                  <legend className="mb-2 block text-sm font-medium text-ink/70">Pack size</legend>
                  <div className="flex flex-wrap gap-2">
                    {packs.map((p, i) => (
                      <label key={p} className="cursor-pointer">
                        <input type="radio" name="pack" value={p} defaultChecked={i === 2} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-ink/10 bg-cream px-4 py-2 text-sm font-medium text-ink/70 transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-aqua/30 hover:border-ink/30">{p}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-ink/70">Requirement</span>
                  <textarea name="message" rows={4} placeholder="Quantity, fragrance, custom label…" className="w-full resize-none rounded-2xl border border-ink/10 bg-cream px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/15" />
                </label>
                <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white shadow-xl shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-ink/90 sm:col-span-2">
                  Send Enquiry
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-lemon text-ink transition group-hover:translate-x-1">
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </button>
                <p className="flex items-center justify-center gap-2 text-xs text-ink/45 sm:col-span-2">
                  <Icon name="shield" className="h-4 w-4" /> Your details are only used to reply to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }) {
  return (
    <label className={className}>
      <span className="mb-1.5 block text-sm font-medium text-ink/70">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3.5 text-ink outline-none transition focus:border-aqua focus:bg-white focus:ring-4 focus:ring-aqua/15" />
    </label>
  );
}

/* ───────────────────────────── 16. Footer ───────────────────────────── */

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <p className="font-display text-[18vw] leading-none tracking-tighter text-white/[0.06] sm:text-[12vw]">asmi</p>
        <div className="-mt-6 grid gap-12 pb-14 sm:-mt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl">Freshness, manufactured.</p>
            <p className="mt-3 max-w-md text-white/55">Manufacturer and wholesaler of hand wash, shower gel, dish wash, toilet & tap cleaners, air fresheners and industrial chemicals.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-lemon">Explore</p>
            <ul className="mt-4 space-y-2.5 text-white/65">
              {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-lemon">Contact</p>
            <ul className="mt-4 space-y-2.5 text-white/65">
              <li><a href={`tel:${CONTACT.phone}`} className="hover:text-white">{CONTACT.phoneDisplay}</a> <span className="text-white/40">(WhatsApp)</span></li>
              {CONTACT.otherPhones.map((p) => (
                <li key={p.tel}><a href={`tel:${p.tel}`} className="hover:text-white">{p.display}</a></li>
              ))}
              <li><a href={`mailto:${CONTACT.email}`} className="break-all hover:text-white">{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
              <li>GST: {CONTACT.gst}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {CONTACT.company}. All rights reserved.</p>
          <p>*Germ-protection claims as stated on product labels.</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────── Page ───────────────────────────── */

export default function Home() {
  useReveal();
  return (
    <main className="overflow-x-hidden bg-cream font-sans text-ink antialiased">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
  
      <Products />
      <Fragrances />
      <Process />
      <Industries />
      <Testimonials />
      <Faq />
      <Quote />
      <Footer />
      <FloatingContact />
    </main>
  );
}
