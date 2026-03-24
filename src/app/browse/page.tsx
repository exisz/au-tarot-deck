"use client";

import { useState } from "react";
import { ALL_CARDS, TarotCard } from "@/lib/tarot-data";
import Link from "next/link";
import Image from "next/image";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "major" | "wands" | "cups" | "swords" | "pentacles">("all");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = ALL_CARDS.filter((c) => {
    if (filter === "major" && c.arcana !== "major") return false;
    if (filter !== "all" && filter !== "major" && c.suit !== filter) return false;
    if (search) {
      const s = search.toLowerCase();
      return c.name.toLowerCase().includes(s) || c.nameZh.includes(s);
    }
    return true;
  });

  const sortedCards = [...filtered].sort((a, b) => a.id - b.id);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
          ← Back to Reading
        </Link>
        <h1 className="text-3xl font-bold text-purple-100 mt-2">📚 Card Reference</h1>
        <p className="text-purple-300/60">All 78 cards — meanings, descriptions, and symbolism</p>
      </header>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered flex-1 bg-purple-900/30 border-purple-500/30 text-purple-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-1">
          {(["all", "major", "wands", "cups", "swords", "pentacles"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn btn-sm ${filter === f ? "bg-purple-600 text-white border-0" : "btn-ghost text-purple-300"}`}
            >
              {f === "all" ? "All" : f === "major" ? "Major Arcana" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-purple-400 mb-3">{sortedCards.length} cards</div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setView("grid")} className={`btn btn-sm ${view === "grid" ? "bg-purple-600 text-white border-0" : "btn-ghost text-purple-300"}`}>▦ Grid</button>
        <button onClick={() => setView("list")} className={`btn btn-sm ${view === "list" ? "bg-purple-600 text-white border-0" : "btn-ghost text-purple-300"}`}>☰ List</button>
      </div>

      {/* Card Display */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortedCards.map((card) => (
            <Link key={card.id} href={`/card/${card.slug}`} className="group">
              <div className="bg-purple-950/40 rounded-xl border border-purple-500/15 hover:border-purple-500/40 transition-all overflow-hidden">
                {card.image ? (
                  <div className="relative w-full aspect-[2/3]">
                    <Image src={card.image} alt={card.name} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(max-width:640px) 50vw,(max-width:1024px) 25vw,20vw" unoptimized />
                  </div>
                ) : (
                  <div className="w-full aspect-[2/3] flex items-center justify-center bg-purple-900/30 text-4xl">{card.symbol}</div>
                )}
                <div className="p-2 text-center">
                  <div className="text-sm font-semibold text-purple-100 truncate">{card.name}</div>
                  <div className="text-xs text-purple-400">{card.nameZh}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {sortedCards.map((card) => (
            <CardRow key={card.id} card={card} expanded={expanded === card.id} onClick={() => setExpanded(expanded === card.id ? null : card.id)} />
          ))}
        </div>
      )}

      <footer className="text-center mt-12 text-purple-400/50 text-sm">
        <p>
          A{" "}
          <a href="https://rollersoft.com.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">
            Rollersoft
          </a>{" "}
          project
        </p>
      </footer>
    </div>
  );
}

function CardRow({ card, expanded, onClick }: { card: TarotCard; expanded: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border transition-all ${
        expanded
          ? "bg-purple-900/40 border-purple-500/30 p-5"
          : "bg-purple-950/30 border-purple-500/10 p-3 hover:border-purple-500/20"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl w-10 text-center">{card.symbol}</span>
        <div className="flex-1">
          <span className="font-semibold text-purple-100">{card.name}</span>
          <span className="text-purple-400 text-sm ml-2">{card.nameZh}</span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded bg-purple-800/30 text-purple-400">
          {card.arcana === "major" ? "Major" : card.suit}
        </span>
      </div>
      {expanded && (
        <div className="mt-3 ml-13 space-y-2">
          <p className="text-sm text-purple-200/80">{card.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-amber-300 font-semibold text-xs">UPRIGHT</div>
              <div className="text-purple-200/80">{card.upright}</div>
            </div>
            <div>
              <div className="text-red-300 font-semibold text-xs">REVERSED</div>
              <div className="text-purple-200/80">{card.reversed}</div>
            </div>
          </div>
          <Link href={`/card/${card.slug}`} className="inline-block mt-3 text-sm text-amber-400 hover:text-amber-300 underline" onClick={(e) => e.stopPropagation()}>
            View full details →
          </Link>
        </div>
      )}
    </div>
  );
}
