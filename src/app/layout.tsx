import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { LenisProvider } from "@/components/ui/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURUM | Haute Joaillerie & Fine Jewelry",
  description: "Explore Aurum's curated vaults of handcrafted luxury jewelry. Discover GIA-certified diamond solitaires, natural emerald pendants, and bespoke gold heirlooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-obsidian text-ivory selection:bg-gold selection:text-black"
        suppressHydrationWarning
      >
        <CartProvider>
          <LenisProvider>
            <Header />
            <div className="flex-1 flex flex-col pt-[72px] md:pt-[80px]">
              {children}
            </div>
            <CartDrawer />
            <Footer />
          </LenisProvider>
        </CartProvider>
      </body>
    </html>
  );
}
