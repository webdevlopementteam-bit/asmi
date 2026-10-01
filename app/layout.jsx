import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "Asmi Enterprises — Hand Wash, Cleaners & Air Fresheners Manufacturer, New Delhi",
  description:
    "Manufacturer & wholesaler of liquid hand wash, hand wash gel, shower gel, dish wash, toilet & tap cleaners, air fresheners and industrial chemicals. Bulk orders & instant quotes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
