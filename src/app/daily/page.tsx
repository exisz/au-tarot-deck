"use client";

import { useState, useEffect } from "react";
import { ALL_CARDS, DrawnCard } from "@/lib/tarot-data";
import { saveReading, getStreak, recordDailyReading } from "@/lib/storage";
import { generateReading } from "@/lib/reading-engine";
import Link from "next/link";
import Image from "next/image";

const DAILY_KEY = "arcana-daily-card";

interface DailyData {
  date: string;
  cardId: number;
  reversed: boolean;
}

function getDailyCard(): DailyData {
  const today = new Date().toISOString().slice(0, 10);
  const raw = localStorage.getItem(DAILY_KEY);
  if (raw) {
    const data: DailyData = JSON.parse(raw);
    if (data.date === today) return data;
  }
  // Seed from date for deterministic daily card
  const seed = today.split("-").join("");
  const idx = parseInt(seed, 10) % ALL_CARDS.length;
  const reversed = (parseInt(seed, 10) % 7) < 2;
  const data: DailyData = { date: today, cardId: idx, reversed };
  localStorage.setItem(DAILY_KEY, JSON.stringify(data));
  return data;
}

export default function DailyPage() {
  const [daily, setDaily] = useState<DailyData | null>(null);
  const [streak, setStreak] = useState({ currentStreak: 0, longestStreak: 0, lastReadingDate: "" });
  const [revealed, setRevealed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [aiReading, setAiReading] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const d = getDailyCard();
    setDaily(d);
    setStreak(getStreak());
    // Check if already revealed today
    const today = new Date().toISOString().slice(0, 10);
    const s = getStreak();
    if (s.lastReadingDate === today) {
      setRevealed(true);
    }
  }, []);

  const handleReveal = () => {
    setRevealed(true);
    const updated = recordDailyReading();
    setStreak(updated);
  };

  const handleSave = () => {
    if (!daily) return;
    const card = ALL_CARDS[daily.cardId];
    const reading = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      question: "Daily Card",
      spread: "single" as const,
      cards: [{ card, position: "Daily Guidance", reversed: daily.reversed }],
      notes: "",
    };
    saveReading(reading);
    setSaved(true);
  };

  if (!daily) return <div className="min-h-screen flex items-center justify-center text-purple-300">Loading...</div>;

  const card = ALL_CARDS[daily.cardId];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">← Back to Readings</Link>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300 bg-clip-text text-transparent mt-4">
          ☀️ Daily Card
        </h1>
        <p className="text-purple-300/70 mt-2">Your daily guidance from the Arcana</p>
      </header>

      {/* Streak Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 to-purple-950/40 rounded-2xl p-4 border border-amber-500/20 mb-8 text-center">
        <div className="flex justify-center items-center gap-8">
          <div>
            <div className="text-3xl font-bold text-amber-300">
              {streak.currentStreak}
              <span className="text-lg ml-1">🔥</span>
            </div>
            <div className="text-xs text-purple-400">Current Streak</div>
          </div>
          <div className="w-px h-10 bg-purple-500/20" />
          <div>
            <div className="text-3xl font-bold text-purple-300">
              {streak.longestStreak}
              <span className="text-lg ml-1">⭐</span>
            </div>
            <div className="text-xs text-purple-400">Best Streak</div>
          </div>
        </div>
        {streak.currentStreak >= 7 && (
          <div className="mt-2 text-xs text-amber-400">🏆 7+ day streak! The cards reward consistency.</div>
        )}
      </div>

      {/* Card */}
      <div className="flex justify-center mb-8">
        <div
          className="card-flip w-56 h-80 cursor-pointer"
          onClick={!revealed ? handleReveal : undefined}
        >
          <div className={`card-flip-inner relative w-full h-full ${revealed ? "flipped" : ""}`}>
            <div className="card-front absolute inset-0 rounded-xl bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-500/50 glow flex flex-col items-center justify-center gap-3">
              <div className="text-5xl">🔮</div>
              <div className="text-purple-300 text-sm">Tap to reveal</div>
            </div>
            <div className={`card-back absolute inset-0 rounded-xl border-2 p-4 flex flex-col items-center justify-between text-center ${daily.reversed ? "bg-gradient-to-br from-red-950 to-purple-950 border-red-500/50" : "bg-gradient-to-br from-purple-950 to-indigo-950 border-amber-500/50 glow-gold"}`}>
              <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                Daily Guidance
              </div>
              {card.image ? (
                <Image src={card.image} alt={card.name} width={100} height={160} className={`rounded ${daily.reversed ? "rotate-180" : ""}`} />
              ) : (
                <div className={`text-5xl ${daily.reversed ? "rotate-180" : ""}`}>{card.symbol}</div>
              )}
              <div>
                <div className="text-lg font-bold text-amber-300">
                  {card.name}
                  {daily.reversed && <span className="text-red-400 text-xs ml-1">↓ Reversed</span>}
                </div>
                <div className="text-sm text-purple-300">{card.nameZh}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      {revealed && (
        <div className="space-y-6">
          <div className="bg-purple-950/30 rounded-2xl p-6 border border-purple-500/10">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">
              {daily.reversed ? "Reversed Meaning" : "Upright Meaning"}
            </h3>
            <p className="text-purple-200/80 leading-relaxed">{card.description}</p>
            <p className="text-amber-200/80 mt-3">
              <strong>Keywords:</strong> {daily.reversed ? card.reversed : card.upright}
            </p>
            {card.keywords && (
              <div className="flex flex-wrap gap-2 mt-3">
                {card.keywords.map((kw: string) => (
                  <span key={kw} className="text-xs px-2 py-1 rounded-full bg-purple-800/40 text-purple-300">{kw}</span>
                ))}
              </div>
            )}
            <div className="mt-4 flex gap-2">
              <button onClick={handleSave} disabled={saved} className="btn btn-sm bg-amber-600/80 text-white border-0 hover:bg-amber-500">
                {saved ? "✓ Saved" : "💾 Save to Journal"}
              </button>
              <Link href={`/card/${card.slug || card.id}`} className="btn btn-sm btn-outline border-purple-500/50 text-purple-300">
                📖 Full Details
              </Link>
            </div>
          </div>

          {/* AI Reading */}
          <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/50 rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Free Beta
            </div>
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">
              🤖 AI Deep Reading
            </h3>
            <p className="text-purple-200/70 text-sm mb-4">
              Get a personalized interpretation of your daily card based on its meaning,
              position, and your reading history.
            </p>
            {aiReading ? (
              <div className="bg-indigo-900/30 rounded-xl p-4 border border-indigo-500/10 mb-4">
                {aiReading.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-purple-200/80 leading-relaxed mb-3 last:mb-0"
                     dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-300">$1</strong>') }} />
                ))}
              </div>
            ) : (
              <div className="bg-indigo-900/30 rounded-xl p-4 border border-indigo-500/10 mb-4">
                <div className="text-xs text-indigo-400 mb-2">Preview:</div>
                <div className="text-sm text-purple-200/60 italic">
                  &quot;{card.name} appearing as your daily card suggests a time for {daily.reversed ? "introspection about challenges in" : "embracing"} {card.upright?.split(",")[0]?.toLowerCase() || "transformation"}.
                  Combined with your recent readings, there&apos;s a pattern emerging around personal growth...&quot;
                </div>
              </div>
            )}
            <button
              onClick={() => {
                setAiLoading(true);
                // Small delay for UX feel
                setTimeout(() => {
                  const reading = generateReading({ card, reversed: daily.reversed, position: "Daily Guidance" });
                  setAiReading(reading);
                  setAiLoading(false);
                }, 800);
              }}
              disabled={aiLoading || !!aiReading}
              className={`btn btn-sm border-0 ${aiReading ? "bg-emerald-600/50 text-emerald-200 cursor-default" : aiLoading ? "bg-indigo-600/50 text-indigo-200 cursor-wait" : "bg-indigo-600 text-white hover:bg-indigo-500"}`}
            >
              {aiReading ? "✨ Reading Complete" : aiLoading ? "🔮 Channeling..." : "🔮 Get AI Reading — Free"}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-12 text-purple-400/50 text-sm">
        <p>Come back every day for a new card 🌙</p>
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
