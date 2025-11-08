import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Space Cowboy Production - Création vidéo professionnelle avec IA",
  description: "Découvrez Space Cowboy Production, votre partenaire en création vidéo professionnelle alliant expertise humaine et intelligence artificielle pour des résultats exceptionnels.",
  keywords: "vidéo, production, IA, intelligence artificielle, entreprise, documentaire, événementiel, motion design",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth bg-[#0a0a0a]">
      <body className={`${inter.variable} font-sans bg-[#0a0a0a] text-white antialiased`}>
        <Header />
        <main className="bg-[#0a0a0a]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
