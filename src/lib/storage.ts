import { Reading, DeckConfig } from "./tarot-data";

const READINGS_KEY = "arcana-readings";
const DECKS_KEY = "arcana-decks";

export function getReadings(): Reading[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(READINGS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveReading(reading: Reading): void {
  const readings = getReadings();
  readings.unshift(reading);
  localStorage.setItem(READINGS_KEY, JSON.stringify(readings));
}

export function deleteReading(id: string): void {
  const readings = getReadings().filter((r) => r.id !== id);
  localStorage.setItem(READINGS_KEY, JSON.stringify(readings));
}

export function getDecks(): DeckConfig[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(DECKS_KEY);
  if (!raw) {
    // Default: full 78-card deck
    const defaultDeck: DeckConfig = {
      id: "default",
      name: "Standard 78",
      description: "Full Rider-Waite deck — all 78 cards",
      cardIds: Array.from({ length: 78 }, (_, i) => i),
      created: Date.now(),
      modified: Date.now(),
    };
    localStorage.setItem(DECKS_KEY, JSON.stringify([defaultDeck]));
    return [defaultDeck];
  }
  return JSON.parse(raw);
}

export function saveDeck(deck: DeckConfig): void {
  const decks = getDecks();
  const idx = decks.findIndex((d) => d.id === deck.id);
  if (idx >= 0) {
    decks[idx] = deck;
  } else {
    decks.push(deck);
  }
  localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
}

export function deleteDeck(id: string): void {
  if (id === "default") return;
  const decks = getDecks().filter((d) => d.id !== id);
  localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
}
