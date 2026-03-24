"use client";

import { useState, useEffect } from "react";
import { Reading } from "@/lib/tarot-data";
import { getReadings, deleteReading } from "@/lib/storage";
import Link from "next/link";

export default function JournalPage() {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setReadings(getReadings());
  }, []);

  const filtered = readings.filter(
    (r) =>
      r.question.toLowerCase().includes(search.toLowerCase()) ||
      r.cards.some((c) => c.card.name.toLowerCase().includes(search.toLowerCase()))
  );

  const handleDelete = (id: string) => {
    deleteReading(id);
    setReadings(getReadings());
  };

  const handleExport = () => {
    const data = readings.map((r) => ({
      date: new Date(r.timestamp).toISOString(),
      question: r.question,
      spread: r.spread,
      cards: r.cards.map((c) => `${c.card.name}${c.reversed ? " (R)" : ""} — ${c.position}`).join("; "),
    }));
    const lines = [
      "Date,Question,Spread,Cards",
      ...data.map((d) => `"${d.date}","${d.question.replace(/"/g, '""')}","${d.spread}","${d.cards.replace(/"/g, '""')}"`),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `arcana-journal-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
          ← Back to Reading
        </Link>
        <div className="flex items-center justify-between mt-2">
          <div>
            <h1 className="text-3xl font-bold text-purple-100">📖 Reading Journal</h1>
            <p className="text-purple-300/60">Your tarot history — track patterns over time</p>
          </div>
          {readings.length > 0 && (
            <button onClick={handleExport} className="btn btn-sm bg-amber-600/80 text-white border-0 hover:bg-amber-500">
              📥 Export CSV
            </button>
          )}
        </div>
      </header>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by question or card name..."
          className="input input-bordered w-full bg-purple-900/30 border-purple-500/30 text-purple-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-purple-400/60">
          <div className="text-5xl mb-4">📖</div>
          <p>No readings yet. Go draw some cards!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((reading) => (
            <div
              key={reading.id}
              className="bg-purple-950/40 rounded-xl p-5 border border-purple-500/15"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-sm text-purple-400">
                    {new Date(reading.timestamp).toLocaleString()} ·{" "}
                    <span className="capitalize">{reading.spread}</span> spread
                  </div>
                  <div className="text-lg text-purple-100 font-medium mt-1">
                    {reading.question}
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(reading.id)}
                  className="btn btn-xs btn-ghost text-red-400/60 hover:text-red-400"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {reading.cards.map((drawn, i) => (
                  <div
                    key={i}
                    className={`px-3 py-1.5 rounded-lg text-sm ${
                      drawn.reversed
                        ? "bg-red-900/30 border border-red-500/20 text-red-300"
                        : "bg-purple-900/30 border border-purple-500/20 text-purple-200"
                    }`}
                  >
                    <span className="mr-1">{drawn.card.symbol}</span>
                    {drawn.card.name}
                    {drawn.reversed && <span className="text-red-400 ml-1">↓</span>}
                    <span className="text-purple-400/60 ml-1 text-xs">{drawn.position}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center text-purple-400/40 text-sm">
        {readings.length} reading{readings.length !== 1 ? "s" : ""} recorded
      </div>
    </div>
  );
}
