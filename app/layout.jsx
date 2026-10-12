import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, FloatingContact, RevealOnScroll } from "./components/site";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: {
    default: "Asmi Enterprises — Hand Wash, Cleaners & Air Fresheners Manufacturer, New Delhi",
    template: "%s | Asmi Enterprises",
  },
  description:
    "Manufacturer & wholesaler of liquid hand wash, hand wash gel, shower gel, dish wash, toilet & tap cleaners, air fresheners and industrial chemicals. Bulk orders & instant quotes.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} scroll-smooth`}>
      <body>
        <div className="overflow-x-clip bg-cream font-sans text-ink antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </div>
        <RevealOnScroll />
      </body>
    </html>
  );
}
