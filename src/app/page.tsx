"use client";

import { useState, useCallback } from "react";
import { ALL_CARDS, SPREAD_POSITIONS, TarotCard, DrawnCard, Reading } from "@/lib/tarot-data";
import { saveReading, getDecks } from "@/lib/storage";
import Link from "next/link";

type SpreadType = "single" | "three" | "celtic";

function drawCards(count: number, deckCardIds?: number[]): DrawnCard[] {
  const pool = deckCardIds
    ? ALL_CARDS.filter((c) => deckCardIds.includes(c.id))
    : ALL_CARDS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const spreadKey: SpreadType = count === 1 ? "single" : count === 3 ? "three" : "celtic";
  const positions = SPREAD_POSITIONS[spreadKey];
  return shuffled.slice(0, count).map((card, i) => ({
    card,
    position: positions[i],
    reversed: Math.random() < 0.3,
  }));
}

function CardDisplay({ drawn, revealed }: { drawn: DrawnCard; revealed: boolean }) {
  return (
    <div className="card-flip w-40 h-60 mx-auto cursor-pointer">
      <div className={`card-flip-inner relative w-full h-full ${revealed ? "flipped" : ""}`}>
        {/* Back */}
        <div className="card-front absolute inset-0 rounded-xl bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-500/50 glow flex items-center justify-center">
          <div className="text-4xl">🔮</div>
        </div>
        {/* Front */}
        <div className={`card-back absolute inset-0 rounded-xl border-2 p-3 flex flex-col items-center justify-between text-center ${drawn.reversed ? "bg-gradient-to-br from-red-950 to-purple-950 border-red-500/50" : "bg-gradient-to-br from-purple-950 to-indigo-950 border-amber-500/50 glow-gold"}`}>
          <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
            {drawn.position}
          </div>
          <div className={`text-4xl ${drawn.reversed ? "rotate-180" : ""}`}>
            {drawn.card.symbol}
          </div>
          <div>
            <div className="text-sm font-bold text-amber-300">
              {drawn.card.name}
              {drawn.reversed && <span className="text-red-400 text-xs ml-1">↓R</span>}
            </div>
            <div className="text-xs text-purple-300">{drawn.card.nameZh}</div>
          </div>
          <div className="text-xs text-purple-200/80 leading-tight">
            {drawn.reversed ? drawn.card.reversed : drawn.card.upright}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [spread, setSpread] = useState<SpreadType>("three");
  const [question, setQuestion] = useState("");
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>([]);
  const [saved, setSaved] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState("default");

  const handleDraw = useCallback(() => {
    const decks = getDecks();
    const deck = decks.find((d) => d.id === selectedDeck);
    const count = spread === "single" ? 1 : spread === "three" ? 3 : 10;
    const drawn = drawCards(count, deck?.cardIds);
    setCards(drawn);
    setRevealed(new Array(drawn.length).fill(false));
    setSaved(false);
  }, [spread, selectedDeck]);

  const revealCard = (index: number) => {
    setRevealed((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const revealAll = () => setRevealed(new Array(cards.length).fill(true));

  const handleSave = () => {
    if (cards.length === 0) return;
    const reading: Reading = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      question: question || "(No question)",
      spread,
      cards,
      notes: "",
    };
    saveReading(reading);
    setSaved(true);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
          ✦ Arcana Deck ✦
        </h1>
        <p className="text-purple-300/70 mt-2">
          Draw · Build · Journal — Your Tarot, Gamified
        </p>
        <div className="mt-3 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-900/30 to-purple-900/30 border border-amber-500/20">
          <span className="text-amber-300 text-sm font-medium">🃏 Balatro-inspired Deck Building</span>
          <span className="text-purple-300/60 text-sm"> — Customize your deck, track every reading</span>
        </div>

        {/* Balatro Tutorial */}
        <div className="mt-6 bg-gradient-to-br from-amber-950/30 to-purple-950/30 rounded-2xl p-6 border border-amber-500/15 text-left max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-amber-300 mb-3">🎮 How Deck Building Works</h2>
          <p className="text-purple-200/80 text-sm mb-4">
            Inspired by <span className="text-amber-300">Balatro</span>, Arcana Deck lets you build custom tarot decks — keep only the cards that resonate with you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/10">
              <div className="text-2xl mb-2">1️⃣</div>
              <div className="text-sm font-semibold text-purple-100">Create a Deck</div>
              <div className="text-xs text-purple-400 mt-1">Go to 🃏 Decks and tap &quot;+ New Deck&quot;</div>
            </div>
            <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/10">
              <div className="text-2xl mb-2">2️⃣</div>
              <div className="text-sm font-semibold text-purple-100">Pick Your Cards</div>
              <div className="text-xs text-purple-400 mt-1">Toggle cards in/out — focus on themes that matter to you</div>
            </div>
            <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/10">
              <div className="text-2xl mb-2">3️⃣</div>
              <div className="text-sm font-semibold text-purple-100">Draw & Journal</div>
              <div className="text-xs text-purple-400 mt-1">Select your deck above, draw cards, save to your journal</div>
            </div>
          </div>
        </div>
        <nav className="flex justify-center gap-4 mt-4">
          <Link href="/journal" className="btn btn-sm btn-outline border-purple-500/50 text-purple-300 hover:bg-purple-900">
            📖 Journal
          </Link>
          <Link href="/decks" className="btn btn-sm btn-outline border-amber-500/50 text-amber-300 hover:bg-amber-900/30">
            🃏 Decks
          </Link>
          <Link href="/browse" className="btn btn-sm btn-outline border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/30">
            📚 Browse All
          </Link>
        </nav>
      </header>

      {/* Controls */}
      <div className="bg-purple-950/50 rounded-2xl p-6 border border-purple-500/20 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="label text-purple-300 text-sm">Your Question</label>
            <input
              type="text"
              placeholder="What guidance do I need today?"
              className="input input-bordered w-full bg-purple-900/30 border-purple-500/30 text-purple-100 placeholder:text-purple-400/50"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div>
            <label className="label text-purple-300 text-sm">Spread</label>
            <select
              className="select select-bordered bg-purple-900/30 border-purple-500/30 text-purple-100"
              value={spread}
              onChange={(e) => setSpread(e.target.value as SpreadType)}
            >
              <option value="single">Single Card</option>
              <option value="three">Past · Present · Future</option>
              <option value="celtic">Celtic Cross (10)</option>
            </select>
          </div>
          <div>
            <label className="label text-purple-300 text-sm">Deck</label>
            <DeckSelect selected={selectedDeck} onChange={setSelectedDeck} />
          </div>
          <button onClick={handleDraw} className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 hover:from-purple-500 hover:to-indigo-500 glow">
            🔮 Draw Cards
          </button>
        </div>
      </div>

      {/* Cards */}
      {cards.length > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-purple-200">Your Reading</h2>
            <div className="flex gap-2">
              <button onClick={revealAll} className="btn btn-sm btn-ghost text-purple-300">
                Reveal All
              </button>
              <button
                onClick={handleSave}
                disabled={saved}
                className="btn btn-sm bg-amber-600/80 text-white border-0 hover:bg-amber-500"
              >
                {saved ? "✓ Saved" : "💾 Save to Journal"}
              </button>
            </div>
          </div>
          <div className={`grid gap-4 ${cards.length === 1 ? "grid-cols-1 max-w-xs mx-auto" : cards.length <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-2 md:grid-cols-5"}`}>
            {cards.map((drawn, i) => (
              <div key={i} onClick={() => revealCard(i)}>
                <CardDisplay drawn={drawn} revealed={revealed[i]} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Card Details */}
      {cards.length > 0 && revealed.some(Boolean) && (
        <div className="bg-purple-950/30 rounded-2xl p-6 border border-purple-500/10">
          <h3 className="text-lg font-semibold text-amber-300 mb-4">Card Details</h3>
          <div className="space-y-4">
            {cards.map(
              (drawn, i) =>
                revealed[i] && (
                  <div key={i} className="border-b border-purple-500/10 pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{drawn.card.symbol}</span>
                      <span className="font-bold text-purple-100">{drawn.card.name}</span>
                      <span className="text-purple-400 text-sm">{drawn.card.nameZh}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-purple-800/50 text-purple-300">
                        {drawn.position}
                      </span>
                      {drawn.reversed && (
                        <span className="text-xs px-2 py-0.5 rounded bg-red-900/50 text-red-300">
                          Reversed
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-purple-200/80">{drawn.card.description}</p>
                    <p className="text-sm text-amber-200/80 mt-1">
                      <strong>{drawn.reversed ? "Reversed" : "Upright"}:</strong>{" "}
                      {drawn.reversed ? drawn.card.reversed : drawn.card.upright}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-12 text-purple-400/50 text-sm">
        <p>Arcana Deck — Tarot for the modern seeker</p>
        <p className="mt-1">78 cards · Rider-Waite tradition · Public domain imagery</p>
        <p className="mt-2">
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

function DeckSelect({ selected, onChange }: { selected: string; onChange: (v: string) => void }) {
  const [decks, setDecks] = useState<{ id: string; name: string }[]>([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded && typeof window !== "undefined") {
    const d = getDecks();
    setDecks(d.map((dk) => ({ id: dk.id, name: dk.name })));
    setLoaded(true);
  }

  return (
    <select
      className="select select-bordered bg-purple-900/30 border-purple-500/30 text-purple-100"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {decks.map((d) => (
        <option key={d.id} value={d.id}>
          {d.name}
        </option>
      ))}
    </select>
  );
}
