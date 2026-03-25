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

// --- Streak Tracking ---
const STREAK_KEY = "arcana-streak";

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastReadingDate: string; // YYYY-MM-DD
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function getStreak(): StreakData {
  if (typeof window === "undefined") return { currentStreak: 0, longestStreak: 0, lastReadingDate: "" };
  const raw = localStorage.getItem(STREAK_KEY);
  if (!raw) return { currentStreak: 0, longestStreak: 0, lastReadingDate: "" };
  const data: StreakData = JSON.parse(raw);
  // If last reading was before yesterday, streak is broken
  const today = todayStr();
  const yesterday = yesterdayStr();
  if (data.lastReadingDate !== today && data.lastReadingDate !== yesterday) {
    return { currentStreak: 0, longestStreak: data.longestStreak, lastReadingDate: data.lastReadingDate };
  }
  return data;
}

export function recordDailyReading(): StreakData {
  const streak = getStreak();
  const today = todayStr();
  if (streak.lastReadingDate === today) return streak; // Already recorded today
  const newStreak = streak.lastReadingDate === yesterdayStr()
    ? streak.currentStreak + 1
    : 1;
  const updated: StreakData = {
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, streak.longestStreak),
    lastReadingDate: today,
  };
  localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  return updated;
}
