"use client";

import { useState, useEffect } from "react";
import { ALL_CARDS, DeckConfig } from "@/lib/tarot-data";
import { getDecks, saveDeck, deleteDeck } from "@/lib/storage";
import Link from "next/link";

export default function DecksPage() {
  const [decks, setDecks] = useState<DeckConfig[]>([]);
  const [editing, setEditing] = useState<DeckConfig | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDecks(getDecks());
  }, []);

  const refreshDecks = () => setDecks(getDecks());

  const createDeck = () => {
    const deck: DeckConfig = {
      id: crypto.randomUUID(),
      name: "New Deck",
      description: "",
      cardIds: [],
      created: Date.now(),
      modified: Date.now(),
    };
    saveDeck(deck);
    refreshDecks();
    setEditing(deck);
  };

  const handleDelete = (id: string) => {
    deleteDeck(id);
    refreshDecks();
    if (editing?.id === id) setEditing(null);
  };

  const toggleCard = (cardId: number) => {
    if (!editing) return;
    const ids = editing.cardIds.includes(cardId)
      ? editing.cardIds.filter((id) => id !== cardId)
      : [...editing.cardIds, cardId];
    const updated = { ...editing, cardIds: ids, modified: Date.now() };
    setEditing(updated);
    saveDeck(updated);
    refreshDecks();
  };

  const filteredCards = ALL_CARDS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.nameZh.includes(search)
  );

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
          ← Back to Reading
        </Link>
        <h1 className="text-3xl font-bold text-purple-100 mt-2">🃏 Deck Builder</h1>
        <p className="text-purple-300/60">
          Balatro-style — build custom decks, include only the cards you want
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Deck list */}
        <div className="space-y-3">
          <button onClick={createDeck} className="btn btn-sm bg-purple-600 text-white border-0 w-full">
            + New Deck
          </button>
          {decks.map((deck) => (
            <div
              key={deck.id}
              onClick={() => setEditing(deck)}
              className={`cursor-pointer rounded-xl p-4 border transition-all ${
                editing?.id === deck.id
                  ? "bg-purple-900/60 border-purple-500/50 glow"
                  : "bg-purple-950/40 border-purple-500/15 hover:border-purple-500/30"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="font-semibold text-purple-100">{deck.name}</div>
                {deck.id !== "default" && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(deck.id); }}
                    className="btn btn-xs btn-ghost text-red-400/60"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="text-sm text-purple-400">{deck.cardIds.length} cards</div>
            </div>
          ))}
        </div>

        {/* Card picker */}
        <div className="md:col-span-2">
          {editing ? (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  className="input input-bordered w-full bg-purple-900/30 border-purple-500/30 text-purple-100 text-lg font-bold"
                  value={editing.name}
                  onChange={(e) => {
                    const updated = { ...editing, name: e.target.value, modified: Date.now() };
                    setEditing(updated);
                    saveDeck(updated);
                    refreshDecks();
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search cards..."
                  className="input input-sm input-bordered w-full bg-purple-900/20 border-purple-500/20 text-purple-100"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="text-sm text-purple-400 mb-3">
                {editing.cardIds.length} / 78 cards selected · Click to toggle
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[60vh] overflow-y-auto">
                {filteredCards.map((card) => {
                  const selected = editing.cardIds.includes(card.id);
                  return (
                    <div
                      key={card.id}
                      onClick={() => toggleCard(card.id)}
                      className={`cursor-pointer rounded-lg p-2 text-center text-sm border transition-all ${
                        selected
                          ? "bg-amber-900/30 border-amber-500/40 text-amber-200"
                          : "bg-purple-950/30 border-purple-500/10 text-purple-300/60 hover:border-purple-500/30"
                      }`}
                    >
                      <div className="text-lg">{card.symbol}</div>
                      <div className="text-xs font-medium truncate">{card.name}</div>
                      <div className="text-xs text-purple-400/50">{card.nameZh}</div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-16 text-purple-400/60">
              <div className="text-5xl mb-4">🃏</div>
              <p>Select a deck to edit, or create a new one</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
