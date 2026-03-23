import { ALL_CARDS, getCardBySlug } from "@/lib/tarot-data";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return ALL_CARDS.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) return { title: "Card Not Found" };
  return {
    title: `${card.name} (${card.nameZh}) — Tarot Card Meaning | Arcana Deck`,
    description: `${card.name} tarot card meaning. Upright: ${card.upright}. Reversed: ${card.reversed}. ${card.description.slice(0, 200)}`,
    keywords: [card.name, card.nameZh, "tarot meaning", "tarot card", ...(card.keywords || []), card.arcana === "major" ? "major arcana" : `${card.suit} suit`],
    openGraph: {
      title: `${card.name} — Tarot Meaning`,
      description: card.description.slice(0, 200),
      images: card.image ? [{ url: card.image, alt: card.name }] : undefined,
    },
  };
}

export default async function CardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getCardBySlug(slug);

  if (!card) {
    return <div className="min-h-screen flex items-center justify-center text-purple-300">Card not found</div>;
  }

  const cardIndex = ALL_CARDS.findIndex((c) => c.id === card.id);
  const prev = cardIndex > 0 ? ALL_CARDS[cardIndex - 1] : null;
  const next = cardIndex < ALL_CARDS.length - 1 ? ALL_CARDS[cardIndex + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: `${card.name} Tarot Card Meaning`,
    headline: `${card.name} (${card.nameZh}) — Tarot Card Meaning`,
    description: card.description.slice(0, 200),
    image: card.image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tarot.rollersoft.com.au/card/${card.slug}`,
    },
    author: { "@type": "Organization", name: "Arcana Deck" },
    keywords: card.keywords?.join(", "),
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-6">
        <Link href="/browse" className="text-purple-400 hover:text-purple-300 text-sm">
          ← All Cards
        </Link>
      </nav>

      <div className="bg-purple-950/50 rounded-2xl p-8 border border-purple-500/20">
        <div className="text-center mb-6">
          {card.image ? (
            <div className="relative w-48 h-80 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg shadow-purple-900/50">
              <Image
                src={card.image}
                alt={`${card.name} - Rider-Waite-Smith Tarot`}
                fill
                className="object-cover"
                sizes="192px"
                unoptimized
              />
            </div>
          ) : (
            <div className="text-6xl mb-4">{card.symbol}</div>
          )}
          <h1 className="text-3xl font-bold text-purple-100">{card.name}</h1>
          <p className="text-xl text-purple-400 mt-1">{card.nameZh}</p>
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-purple-800/50 text-purple-300">
              {card.arcana === "major" ? "Major Arcana" : `${card.suit!.charAt(0).toUpperCase() + card.suit!.slice(1)}`}
            </span>
            {card.element && (
              <span className="text-xs px-3 py-1 rounded-full bg-purple-800/50 text-purple-300">
                {card.element}
              </span>
            )}
            {card.zodiac && (
              <span className="text-xs px-3 py-1 rounded-full bg-purple-800/50 text-purple-300">
                {card.zodiac}
              </span>
            )}
            {card.number !== undefined && (
              <span className="text-xs px-3 py-1 rounded-full bg-purple-800/50 text-purple-300">
                #{card.number}
              </span>
            )}
          </div>
        </div>

        <p className="text-purple-200/80 text-center mb-8 leading-relaxed">{card.description}</p>

        {card.keywords && card.keywords.length > 0 && (
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {card.keywords.map((kw) => (
              <span key={kw} className="text-xs px-2 py-1 rounded bg-purple-900/50 text-purple-400 border border-purple-700/30">
                {kw}
              </span>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-900/20 rounded-xl p-5 border border-amber-500/20">
            <h2 className="text-amber-300 font-bold mb-2 text-sm uppercase tracking-wider">☀️ Upright Meaning</h2>
            <p className="text-purple-100">{card.upright}</p>
          </div>
          <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
            <h2 className="text-red-300 font-bold mb-2 text-sm uppercase tracking-wider">🌙 Reversed Meaning</h2>
            <p className="text-purple-100">{card.reversed}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        {prev ? (
          <Link href={`/card/${prev.slug}`} className="text-purple-400 hover:text-purple-300 text-sm">
            ← {prev.name}
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/card/${next.slug}`} className="text-purple-400 hover:text-purple-300 text-sm">
            {next.name} →
          </Link>
        ) : <div />}
      </div>

      <footer className="text-center mt-12 text-purple-400/50 text-sm">
        <p>
          Part of <Link href="/" className="underline hover:text-purple-300">Arcana Deck</Link> — a{" "}
          <a href="https://rollersoft.com.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">
            Rollersoft
          </a>{" "}
          project
        </p>
      </footer>
    </div>
  );
}
