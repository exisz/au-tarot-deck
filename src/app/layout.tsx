import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcana Deck — Online Tarot with Deck Building & Journal",
  description:
    "Draw tarot cards, build your personal deck, and track your readings over time. A gamified tarot experience inspired by Balatro.",
  keywords: [
    "tarot",
    "online tarot",
    "tarot reading",
    "deck building",
    "tarot journal",
    "balatro",
    "arcana",
  ],
  openGraph: {
    title: "Arcana Deck — Online Tarot",
    description: "Draw cards, build decks, journal your readings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Arcana Deck",
    description: "Draw tarot cards, build your personal deck, and track your readings. A gamified tarot experience with Balatro-inspired deck building.",
    url: "https://tarot.rollersoft.com.au",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    author: { "@type": "Organization", name: "Rollersoft", url: "https://rollersoft.com.au" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
  };

  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen bg-[#0f0a1a] text-purple-100">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
