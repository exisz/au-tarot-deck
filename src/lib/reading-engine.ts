/**
 * Algorithmic Tarot Reading Engine
 * Generates personalized interpretations based on card data, position, and history.
 * Zero API cost — runs entirely client-side.
 */

import { TarotCard, DrawnCard } from "./tarot-data";
import { getReadings } from "./storage";

interface ReadingContext {
  card: TarotCard;
  reversed: boolean;
  position?: string;
  question?: string;
}

const LIFE_AREAS = [
  "personal growth", "relationships", "career", "creativity",
  "spiritual development", "emotional healing", "self-discovery",
  "decision-making", "transformation", "inner wisdom"
];

const TIMING_PHRASES = [
  "This is a pivotal moment for",
  "The energy around you is shifting towards",
  "You are entering a phase of",
  "Now is the time to focus on",
  "The universe is inviting you to explore",
];

const REVERSED_OPENERS = [
  "When reversed, this card asks you to examine",
  "The reversed energy here suggests an internal process of",
  "There may be a blockage or resistance around",
  "Consider what is being held back regarding",
  "This reversal illuminates shadow work in",
];

const UPRIGHT_OPENERS = [
  "This card radiates with the energy of",
  "You are aligned with the vibration of",
  "The upright position affirms your connection to",
  "There is a clear channel opening for",
  "Embrace the gift of",
];

function seededRandom(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
    h = Math.imul(h ^ (h >>> 13), 0x45d9f3b);
    h = (h ^ (h >>> 16)) >>> 0;
    return h / 4294967296;
  };
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function getRecentThemes(): string[] {
  try {
    const readings = getReadings();
    const recent = readings.slice(-5);
    const themes = new Set<string>();
    for (const r of recent) {
      for (const c of r.cards) {
        if (c.card.keywords) {
          c.card.keywords.slice(0, 2).forEach((k: string) => themes.add(k.toLowerCase()));
        }
      }
    }
    return Array.from(themes).slice(0, 4);
  } catch {
    return [];
  }
}

export function generateReading(ctx: ReadingContext): string {
  const { card, reversed, position, question } = ctx;
  const seed = `${card.id}-${reversed}-${new Date().toISOString().slice(0, 10)}`;
  const rng = seededRandom(seed);

  const paragraphs: string[] = [];

  // Para 1: Opening interpretation
  const openers = reversed ? REVERSED_OPENERS : UPRIGHT_OPENERS;
  const keyword = reversed
    ? (card.reversed?.split(",")[0]?.trim() || "introspection")
    : (card.upright?.split(",")[0]?.trim() || "growth");
  const area = pick(LIFE_AREAS, rng);
  paragraphs.push(
    `${pick(openers, rng)} ${keyword.toLowerCase()}. In the context of ${area}, ${card.name} (${card.nameZh}) speaks to a deep truth about your current path. ${reversed ? "The reversed position suggests this energy is internalized or blocked — take time to understand what resistance you feel." : "The upright position shows this energy is flowing freely and available to you."}`
  );

  // Para 2: Position-specific or question-based
  if (position && position !== "Daily Guidance") {
    paragraphs.push(
      `As the "${position}" card in your spread, ${card.name} specifically illuminates ${pick(TIMING_PHRASES, rng).toLowerCase()} ${keyword.toLowerCase()}. This position asks you to consider how ${card.description?.slice(0, 100) || "this archetype"} relates to the ${position.toLowerCase()} aspect of your situation.`
    );
  } else if (question && question !== "Daily Card") {
    paragraphs.push(
      `Regarding your question, ${card.name} offers a clear signal: ${pick(TIMING_PHRASES, rng).toLowerCase()} ${keyword.toLowerCase()}. ${card.description?.slice(0, 150) || ""}`
    );
  } else {
    paragraphs.push(
      `As your daily card, ${card.name} sets the tone for today. ${pick(TIMING_PHRASES, rng).toLowerCase()} ${keyword.toLowerCase()}. Let this energy guide your decisions and interactions throughout the day.`
    );
  }

  // Para 3: Historical context
  const themes = getRecentThemes();
  if (themes.length >= 2) {
    paragraphs.push(
      `Looking at your recent readings, themes of ${themes.slice(0, 3).join(", ")} have been emerging. ${card.name} ${reversed ? "in reverse asks you to reconcile" : "affirms"} these patterns. There is a narrative forming in your journey — pay attention to recurring symbols and feelings.`
    );
  }

  // Para 4: Actionable guidance
  const actions = reversed
    ? [
        `Reflect on where you might be resisting ${keyword.toLowerCase()} in your life.`,
        `Journal about any fears or blocks that arise when you think about ${keyword.toLowerCase()}.`,
        `Consider what needs to be released before you can fully embrace ${keyword.toLowerCase()}.`,
      ]
    : [
        `Take one concrete step today that aligns with the energy of ${keyword.toLowerCase()}.`,
        `Share the spirit of ${keyword.toLowerCase()} with someone in your life.`,
        `Set an intention around ${keyword.toLowerCase()} and revisit it tomorrow.`,
      ];
  paragraphs.push(
    `**Guidance:** ${pick(actions, rng)} ${card.keywords ? `Meditate on the keywords: ${card.keywords.slice(0, 3).join(", ")}.` : ""}`
  );

  return paragraphs.join("\n\n");
}

export function generateSpreadReading(cards: DrawnCard[], question?: string): string {
  const sections: string[] = [];
  
  sections.push(`## 🔮 Spread Interpretation${question ? `\n*Question: "${question}"*` : ""}\n`);

  for (const drawn of cards) {
    sections.push(`### ${drawn.position}: ${drawn.card.name} ${drawn.reversed ? "↓ Reversed" : ""}`);
    sections.push(generateReading({
      card: drawn.card,
      reversed: drawn.reversed,
      position: drawn.position,
      question,
    }));
  }

  // Synthesis
  if (cards.length > 1) {
    const majorCount = cards.filter(c => c.card.id < 22).length;
    const reversedCount = cards.filter(c => c.reversed).length;
    const synthesis: string[] = ["### ✨ Synthesis"];
    
    if (majorCount > cards.length / 2) {
      synthesis.push("A strong presence of Major Arcana cards indicates major life forces at play. This is not a trivial matter — the universe is speaking clearly.");
    }
    if (reversedCount > cards.length / 2) {
      synthesis.push("Multiple reversed cards suggest a period of internal work. External action may need to wait while you process and integrate these energies.");
    } else if (reversedCount === 0) {
      synthesis.push("All cards appearing upright is a strong positive signal — the energy is flowing freely and the path ahead is clear.");
    }
    
    const allKeywords = cards.flatMap(c => c.card.keywords || []).slice(0, 6);
    if (allKeywords.length > 0) {
      synthesis.push(`Key themes across this reading: **${[...new Set(allKeywords)].join(", ")}**.`);
    }
    
    sections.push(synthesis.join(" "));
  }

  return sections.join("\n\n");
}
