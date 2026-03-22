export interface TarotCard {
  id: number;
  name: string;
  nameZh: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  number?: number;
  upright: string;
  reversed: string;
  description: string;
  symbol: string;
}

export interface Reading {
  id: string;
  timestamp: number;
  question: string;
  spread: "single" | "three" | "celtic";
  cards: DrawnCard[];
  notes: string;
}

export interface DrawnCard {
  card: TarotCard;
  position: string;
  reversed: boolean;
}

export interface DeckConfig {
  id: string;
  name: string;
  description: string;
  cardIds: number[];
  created: number;
  modified: number;
}

const MAJOR_ARCANA: TarotCard[] = [
  { id: 0, name: "The Fool", nameZh: "愚者", arcana: "major", upright: "New beginnings, innocence, spontaneity", reversed: "Recklessness, risk-taking, holding back", description: "The Fool represents new beginnings and the start of a journey. With infinite potential ahead, this card encourages taking a leap of faith.", symbol: "🃏" },
  { id: 1, name: "The Magician", nameZh: "魔术师", arcana: "major", upright: "Willpower, creation, manifestation", reversed: "Manipulation, poor planning, untapped talents", description: "The Magician channels the power of the universe through focused will. All four elements are at their disposal.", symbol: "🎩" },
  { id: 2, name: "The High Priestess", nameZh: "女祭司", arcana: "major", upright: "Intuition, mystery, inner knowledge", reversed: "Secrets, withdrawal, silence", description: "The High Priestess sits at the threshold of the conscious and subconscious, guarding hidden wisdom.", symbol: "🌙" },
  { id: 3, name: "The Empress", nameZh: "女皇", arcana: "major", upright: "Abundance, nurturing, fertility", reversed: "Dependence, smothering, emptiness", description: "The Empress embodies the fertile, life-giving Mother. She represents abundance in all forms.", symbol: "👑" },
  { id: 4, name: "The Emperor", nameZh: "皇帝", arcana: "major", upright: "Authority, structure, control", reversed: "Tyranny, rigidity, coldness", description: "The Emperor represents structure, authority, and the power to shape the world through discipline.", symbol: "🏛️" },
  { id: 5, name: "The Hierophant", nameZh: "教皇", arcana: "major", upright: "Tradition, conformity, morality", reversed: "Rebellion, subversiveness, new approaches", description: "The Hierophant represents spiritual wisdom, tradition, and conformity to social structures.", symbol: "📿" },
  { id: 6, name: "The Lovers", nameZh: "恋人", arcana: "major", upright: "Love, harmony, relationships, choices", reversed: "Disharmony, imbalance, misalignment", description: "The Lovers represent perfect union, harmony, and the choices we make in pursuit of love.", symbol: "💕" },
  { id: 7, name: "The Chariot", nameZh: "战车", arcana: "major", upright: "Determination, willpower, triumph", reversed: "Lack of direction, aggression, no control", description: "The Chariot charges forward with unwavering determination, conquering obstacles through sheer will.", symbol: "⚔️" },
  { id: 8, name: "Strength", nameZh: "力量", arcana: "major", upright: "Inner strength, courage, patience", reversed: "Self-doubt, weakness, insecurity", description: "Strength represents the quiet power of the human spirit — courage tempered with compassion.", symbol: "🦁" },
  { id: 9, name: "The Hermit", nameZh: "隐者", arcana: "major", upright: "Soul searching, introspection, guidance", reversed: "Isolation, loneliness, withdrawal", description: "The Hermit withdraws from the world to seek inner truth, carrying a lantern to light the way.", symbol: "🏔️" },
  { id: 10, name: "Wheel of Fortune", nameZh: "命运之轮", arcana: "major", upright: "Change, cycles, fate, luck", reversed: "Bad luck, resistance to change, breaking cycles", description: "The Wheel turns eternally — what goes up must come down, and fortune favors the adaptable.", symbol: "🎡" },
  { id: 11, name: "Justice", nameZh: "正义", arcana: "major", upright: "Fairness, truth, law, cause and effect", reversed: "Unfairness, lack of accountability, dishonesty", description: "Justice weighs all actions impartially. Truth and fairness will prevail.", symbol: "⚖️" },
  { id: 12, name: "The Hanged Man", nameZh: "倒吊人", arcana: "major", upright: "Surrender, letting go, new perspective", reversed: "Stalling, resistance, indecision", description: "The Hanged Man sees the world from a different angle, finding enlightenment through surrender.", symbol: "🙃" },
  { id: 13, name: "Death", nameZh: "死神", arcana: "major", upright: "Transformation, endings, change", reversed: "Resistance to change, stagnation, fear", description: "Death is not the end but a transformation. Old must fall away for new life to emerge.", symbol: "💀" },
  { id: 14, name: "Temperance", nameZh: "节制", arcana: "major", upright: "Balance, moderation, patience", reversed: "Imbalance, excess, lack of long-term vision", description: "Temperance blends opposites into harmony, finding the golden mean through patience.", symbol: "🏺" },
  { id: 15, name: "The Devil", nameZh: "恶魔", arcana: "major", upright: "Bondage, materialism, shadow self", reversed: "Release, exploring dark thoughts, detachment", description: "The Devil represents the chains we forge ourselves — attachments, addictions, and self-imposed limitations.", symbol: "😈" },
  { id: 16, name: "The Tower", nameZh: "塔", arcana: "major", upright: "Sudden change, upheaval, revelation", reversed: "Avoidance of disaster, fear of change", description: "The Tower crashes down in lightning, destroying false structures to reveal truth beneath.", symbol: "🗼" },
  { id: 17, name: "The Star", nameZh: "星星", arcana: "major", upright: "Hope, faith, renewal, serenity", reversed: "Lack of faith, despair, disconnection", description: "The Star pours healing waters under a canopy of light, bringing hope after destruction.", symbol: "⭐" },
  { id: 18, name: "The Moon", nameZh: "月亮", arcana: "major", upright: "Illusion, fear, anxiety, subconscious", reversed: "Release of fear, repressed emotion, clarity", description: "The Moon illuminates the path between two towers, revealing fears and illusions in its silver light.", symbol: "🌕" },
  { id: 19, name: "The Sun", nameZh: "太阳", arcana: "major", upright: "Joy, success, vitality, positivity", reversed: "Temporary depression, lack of success", description: "The Sun radiates warmth and vitality. Everything it touches thrives with joy and abundance.", symbol: "☀️" },
  { id: 20, name: "Judgement", nameZh: "审判", arcana: "major", upright: "Rebirth, inner calling, absolution", reversed: "Self-doubt, refusal of self-examination", description: "Judgement calls the dead to rise — a moment of reckoning, reflection, and ultimate renewal.", symbol: "📯" },
  { id: 21, name: "The World", nameZh: "世界", arcana: "major", upright: "Completion, integration, accomplishment", reversed: "Incompletion, stagnation, lack of closure", description: "The World dances within a wreath of victory — the journey is complete, the cycle fulfilled.", symbol: "🌍" },
];

function generateMinorArcana(): TarotCard[] {
  const suits: { suit: TarotCard["suit"]; symbol: string; element: string; theme: string }[] = [
    { suit: "wands", symbol: "🪄", element: "Fire", theme: "passion, creativity, action" },
    { suit: "cups", symbol: "🏆", element: "Water", theme: "emotions, relationships, intuition" },
    { suit: "swords", symbol: "🗡️", element: "Air", theme: "intellect, conflict, truth" },
    { suit: "pentacles", symbol: "🪙", element: "Earth", theme: "material, wealth, health" },
  ];

  const ranks = [
    { num: 1, name: "Ace", upright: "New opportunity", reversed: "Missed chance" },
    { num: 2, name: "Two", upright: "Balance, partnership", reversed: "Imbalance, indecision" },
    { num: 3, name: "Three", upright: "Growth, collaboration", reversed: "Overextension, delays" },
    { num: 4, name: "Four", upright: "Stability, foundation", reversed: "Stagnation, rigidity" },
    { num: 5, name: "Five", upright: "Conflict, challenge", reversed: "Resolution, compromise" },
    { num: 6, name: "Six", upright: "Harmony, giving", reversed: "Disharmony, selfishness" },
    { num: 7, name: "Seven", upright: "Reflection, assessment", reversed: "Confusion, deception" },
    { num: 8, name: "Eight", upright: "Movement, progress", reversed: "Stagnation, resistance" },
    { num: 9, name: "Nine", upright: "Nearing completion", reversed: "Setbacks, delays" },
    { num: 10, name: "Ten", upright: "Completion, fulfillment", reversed: "Excess, burden" },
    { num: 11, name: "Page", upright: "Curiosity, new message", reversed: "Immaturity, insecurity" },
    { num: 12, name: "Knight", upright: "Action, adventure", reversed: "Recklessness, haste" },
    { num: 13, name: "Queen", upright: "Nurturing mastery", reversed: "Insecurity, dependence" },
    { num: 14, name: "King", upright: "Leadership, authority", reversed: "Tyranny, manipulation" },
  ];

  const cards: TarotCard[] = [];
  let id = 22;

  for (const s of suits) {
    for (const r of ranks) {
      cards.push({
        id: id++,
        name: `${r.name} of ${s.suit!.charAt(0).toUpperCase() + s.suit!.slice(1)}`,
        nameZh: `${s.suit === "wands" ? "权杖" : s.suit === "cups" ? "圣杯" : s.suit === "swords" ? "宝剑" : "星币"}${r.name === "Ace" ? "A" : r.name === "Page" ? "侍从" : r.name === "Knight" ? "骑士" : r.name === "Queen" ? "王后" : r.name === "King" ? "国王" : r.num}`,
        arcana: "minor",
        suit: s.suit,
        number: r.num,
        upright: `${r.upright} in ${s.theme}`,
        reversed: `${r.reversed} in ${s.theme}`,
        description: `The ${r.name} of ${s.suit!.charAt(0).toUpperCase() + s.suit!.slice(1)} brings ${s.element} energy — ${s.theme}.`,
        symbol: s.symbol,
      });
    }
  }

  return cards;
}

export const ALL_CARDS: TarotCard[] = [...MAJOR_ARCANA, ...generateMinorArcana()];

export function getCardById(id: number): TarotCard | undefined {
  return ALL_CARDS.find((c) => c.id === id);
}

export const SPREAD_POSITIONS = {
  single: ["Guidance"],
  three: ["Past", "Present", "Future"],
  celtic: [
    "Present",
    "Challenge",
    "Past",
    "Future",
    "Above (Goal)",
    "Below (Foundation)",
    "Advice",
    "External Influences",
    "Hopes & Fears",
    "Outcome",
  ],
};
