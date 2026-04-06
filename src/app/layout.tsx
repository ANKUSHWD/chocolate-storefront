import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/CartDrawer";
import { StoreHydration } from "@/components/StoreHydration";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura | Luxury Chocolates",
  description: "Experience craving-first, tactile digital storefront for luxury chocolates.",
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
      <body className="min-h-full flex flex-col pt-0 m-0 bg-[#050505] text-[#F5EFE6]">
        <StoreHydration />
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
