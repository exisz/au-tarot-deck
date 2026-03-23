export interface TarotCard {
  id: number;
  slug: string;
  name: string;
  nameZh: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  number?: number;
  upright: string;
  reversed: string;
  description: string;
  symbol: string;
  image?: string;
  element?: string;
  zodiac?: string;
  keywords?: string[];
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

// Rider-Waite-Smith images from Wikimedia Commons (public domain, published 1909)
const RWS = "https://upload.wikimedia.org/wikipedia/commons/thumb";

const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 0, slug: "the-fool", name: "The Fool", nameZh: "愚者", arcana: "major",
    upright: "New beginnings, innocence, spontaneity, free spirit",
    reversed: "Recklessness, risk-taking, holding back, foolishness",
    description: "The Fool stands at the edge of a cliff, gazing upward at the sky with a small white dog at their feet. Numbered zero, the Fool exists outside the normal sequence of the Major Arcana — both the beginning and end of the journey. They carry a small knapsack containing everything they need, yet they travel light, unburdened by worldly concerns. The white rose in their hand symbolizes purity and innocence, while the mountains behind represent the challenges ahead. This card represents the leap of faith we all must take when embarking on a new path. The Fool teaches us that sometimes wisdom lies in embracing uncertainty, trusting the universe, and stepping forward even when we cannot see where we will land. In a reading, the Fool invites you to release your fears and embrace new adventures with childlike wonder.",
    symbol: "🃏",
    image: `${RWS}/9/90/RWS_Tarot_00_Fool.jpg/300px-RWS_Tarot_00_Fool.jpg`,
    element: "Air", zodiac: "Uranus",
    keywords: ["beginnings", "innocence", "leap of faith", "adventure", "potential"],
  },
  {
    id: 1, slug: "the-magician", name: "The Magician", nameZh: "魔术师", arcana: "major",
    upright: "Willpower, creation, manifestation, resourcefulness",
    reversed: "Manipulation, poor planning, untapped talents, deception",
    description: "The Magician stands before a table bearing the four symbols of the tarot suits — a cup, pentacle, sword, and wand — representing mastery over all elements. One hand points to the sky while the other directs energy toward the earth, embodying the Hermetic axiom 'As above, so below.' The infinity symbol hovers above their head, suggesting unlimited potential and the eternal cycle of creation. Red roses and white lilies bloom at their feet, symbolizing the union of desire and purity. The Magician is the archetype of focused will and conscious creation. When this card appears, it signals that you have all the tools and resources you need — the power to manifest your desires lies within. Channel your energy with intention, align your actions with your goals, and watch as the universe conspires to support your vision.",
    symbol: "🎩",
    image: `${RWS}/d/de/RWS_Tarot_01_Magician.jpg/300px-RWS_Tarot_01_Magician.jpg`,
    element: "Air", zodiac: "Mercury",
    keywords: ["manifestation", "willpower", "skill", "concentration", "action"],
  },
  {
    id: 2, slug: "the-high-priestess", name: "The High Priestess", nameZh: "女祭司", arcana: "major",
    upright: "Intuition, mystery, inner knowledge, the subconscious",
    reversed: "Secrets, withdrawal, silence, repressed intuition",
    description: "The High Priestess sits between two pillars — one black (Boaz) and one white (Jachin) — at the entrance to Solomon's Temple. Behind her, a veil decorated with pomegranates conceals the mysteries of the inner sanctum. A crescent moon rests at her feet, linking her to the cycles of nature and feminine intuition. She holds the Torah scroll, partially hidden, suggesting knowledge that reveals itself only to those who seek with patience. The High Priestess embodies the divine feminine — the keeper of sacred wisdom that transcends logic and reason. She represents the power of stillness, the wisdom found in silence, and the truth that emerges when we look inward rather than outward. When she appears in a reading, she calls you to trust your intuition, honor your inner knowing, and pay attention to your dreams and subconscious messages.",
    symbol: "🌙",
    image: `${RWS}/8/88/RWS_Tarot_02_High_Priestess.jpg/300px-RWS_Tarot_02_High_Priestess.jpg`,
    element: "Water", zodiac: "Moon",
    keywords: ["intuition", "mystery", "wisdom", "silence", "subconscious"],
  },
  {
    id: 3, slug: "the-empress", name: "The Empress", nameZh: "女皇", arcana: "major",
    upright: "Abundance, nurturing, fertility, nature, sensuality",
    reversed: "Dependence, smothering, emptiness, creative block",
    description: "The Empress reclines on luxurious cushions in a lush, verdant garden — a field of golden wheat ripening at her feet and a forest of trees behind her. She wears a crown of twelve stars representing her connection to the mystical realm and the twelve months of the year. Her robe is adorned with pomegranates, the fruit of fertility and abundance. A heart-shaped shield bearing the symbol of Venus rests beside her, affirming her dominion over love, beauty, and the creative arts. The Empress is the Great Mother archetype — she represents the creative force that brings life into being. Whether through art, relationships, or new ventures, she encourages you to nurture what you love and trust in the natural process of growth. When this card appears, abundance is flowing toward you — open your arms to receive it.",
    symbol: "👑",
    image: `${RWS}/d/d2/RWS_Tarot_03_Empress.jpg/300px-RWS_Tarot_03_Empress.jpg`,
    element: "Earth", zodiac: "Venus",
    keywords: ["abundance", "fertility", "nurturing", "nature", "creativity"],
  },
  {
    id: 4, slug: "the-emperor", name: "The Emperor", nameZh: "皇帝", arcana: "major",
    upright: "Authority, structure, control, fatherhood, stability",
    reversed: "Tyranny, rigidity, coldness, excessive control",
    description: "The Emperor sits upon a stone throne carved with four rams' heads, symbolizing his connection to Aries and the power of determination. He wears a suit of armor beneath his royal robes, always ready to defend his domain. In one hand he holds an ankh — the Egyptian symbol of life — and in the other, an orb representing the world over which he rules. Behind him rise barren mountains, a stark landscape that reflects the austere discipline through which he has built his empire. The Emperor represents the masculine principle of order, structure, and authority. He is the builder, the father, the lawmaker. Where the Empress creates through love and nurturing, the Emperor shapes the world through will and discipline. When this card appears, it calls you to bring structure to chaos, to set boundaries, and to lead with both strength and wisdom.",
    symbol: "🏛️",
    image: `${RWS}/c/c3/RWS_Tarot_04_Emperor.jpg/300px-RWS_Tarot_04_Emperor.jpg`,
    element: "Fire", zodiac: "Aries",
    keywords: ["authority", "structure", "control", "leadership", "stability"],
  },
  {
    id: 5, slug: "the-hierophant", name: "The Hierophant", nameZh: "教皇", arcana: "major",
    upright: "Tradition, conformity, morality, spiritual guidance",
    reversed: "Rebellion, subversiveness, new approaches, freedom",
    description: "The Hierophant sits between two grey pillars within a sacred temple, wearing the triple crown of the three worlds — conscious, subconscious, and superconscious. Two acolytes kneel before him, representing the transmission of sacred knowledge from teacher to student. He raises his right hand in a gesture of blessing, two fingers pointing skyward and two toward earth. In his left hand he holds the triple cross of the papal office. The crossed keys at his feet represent the keys to heaven — the balance of conscious and subconscious understanding. The Hierophant is the bridge between heaven and earth, the keeper of spiritual traditions and conventional wisdom. He represents established institutions, formal education, and the guidance we seek from mentors and traditions. When this card appears, consider what traditions serve you and which ones need to be questioned.",
    symbol: "📿",
    image: `${RWS}/8/8d/RWS_Tarot_05_Hierophant.jpg/300px-RWS_Tarot_05_Hierophant.jpg`,
    element: "Earth", zodiac: "Taurus",
    keywords: ["tradition", "education", "guidance", "conformity", "spirituality"],
  },
  {
    id: 6, slug: "the-lovers", name: "The Lovers", nameZh: "恋人", arcana: "major",
    upright: "Love, harmony, relationships, choices, alignment",
    reversed: "Disharmony, imbalance, misalignment, bad choices",
    description: "The Lovers depicts a man and woman standing beneath the angel Raphael, who blesses them from a radiant cloud. Behind the woman stands the Tree of Knowledge with the serpent coiled around it, while behind the man stands the Tree of Life bearing twelve flames. The volcanic mountain between them represents the eruption of passion and desire. This card echoes the Garden of Eden — innocence, temptation, and the profound choices that shape our lives. While often associated with romantic love, the Lovers card at its core is about choice — the kind of choice that defines who we are. It speaks to the alignment of values, the harmony that comes from choosing authentically, and the courage required to follow your heart even when the path is uncertain. When this card appears, a significant choice awaits — one that demands you honor your deepest truth.",
    symbol: "💕",
    image: `${RWS}/3/3a/RWS_Tarot_06_Lovers.jpg/300px-RWS_Tarot_06_Lovers.jpg`,
    element: "Air", zodiac: "Gemini",
    keywords: ["love", "choice", "union", "harmony", "values"],
  },
  {
    id: 7, slug: "the-chariot", name: "The Chariot", nameZh: "战车", arcana: "major",
    upright: "Determination, willpower, triumph, self-discipline",
    reversed: "Lack of direction, aggression, no control, defeat",
    description: "The Chariot depicts a warrior standing in a chariot pulled by two sphinxes — one black and one white — representing the duality of forces that must be mastered. The warrior wears armor decorated with crescent moons and alchemical symbols, and a crown topped with a star. A canopy of six-pointed stars stretches above, representing celestial influence and divine will. The city walls behind him show that he has left the comfort of civilization to venture into the unknown. The Chariot represents victory through will and determination. Unlike brute force, this is the triumph that comes from mastering opposing forces within yourself — emotion and reason, fear and courage, rest and action. The sphinxes pull in different directions, yet the charioteer moves forward through sheer force of will. When this card appears, it is time to harness your inner conflicts and channel them toward your goal.",
    symbol: "⚔️",
    image: `${RWS}/9/9b/RWS_Tarot_07_Chariot.jpg/300px-RWS_Tarot_07_Chariot.jpg`,
    element: "Water", zodiac: "Cancer",
    keywords: ["determination", "willpower", "victory", "control", "ambition"],
  },
  {
    id: 8, slug: "strength", name: "Strength", nameZh: "力量", arcana: "major",
    upright: "Inner strength, courage, patience, compassion",
    reversed: "Self-doubt, weakness, insecurity, raw emotion",
    description: "A woman gently holds open the jaws of a lion, not through force but through patience and inner strength. The infinity symbol floats above her head — the same symbol seen above the Magician — connecting these two cards as expressions of will. But where the Magician's power is active and directed, Strength's power is quiet and enduring. She wears a white robe symbolizing purity of spirit, and a garland of flowers adorns her waist and the lion's mane. The lion represents our primal desires, fears, and passions — the raw animal nature within each of us. Strength teaches that true power comes not from dominating these forces but from befriending them. It is the courage to face our shadows with compassion rather than fear. When this card appears, it reminds you that gentleness is not weakness — the strongest force in the universe is patient, persistent love.",
    symbol: "🦁",
    image: `${RWS}/f/f5/RWS_Tarot_08_Strength.jpg/300px-RWS_Tarot_08_Strength.jpg`,
    element: "Fire", zodiac: "Leo",
    keywords: ["courage", "patience", "compassion", "inner strength", "influence"],
  },
  {
    id: 9, slug: "the-hermit", name: "The Hermit", nameZh: "隐者", arcana: "major",
    upright: "Soul searching, introspection, guidance, solitude",
    reversed: "Isolation, loneliness, withdrawal, anti-social",
    description: "The Hermit stands alone atop a mountain, cloaked in grey, holding a lantern containing a six-pointed star. The mountain represents accomplishment and spiritual elevation — he has climbed to the peak not to escape the world but to gain perspective on it. His lantern illuminates only the next few steps, teaching us that wisdom comes one step at a time. The staff in his other hand represents his authority and the support of his hard-won knowledge. The Hermit is the archetype of the wise elder, the spiritual seeker who withdraws from noise to find truth in silence. He has walked the path before and now serves as a guide for those who follow. When this card appears, it is an invitation to step back from the busyness of life, to seek answers within rather than without. Solitude is not loneliness — it is the fertile ground where self-knowledge grows.",
    symbol: "🏔️",
    image: `${RWS}/4/4d/RWS_Tarot_09_Hermit.jpg/300px-RWS_Tarot_09_Hermit.jpg`,
    element: "Earth", zodiac: "Virgo",
    keywords: ["solitude", "introspection", "guidance", "wisdom", "contemplation"],
  },
  {
    id: 10, slug: "wheel-of-fortune", name: "Wheel of Fortune", nameZh: "命运之轮", arcana: "major",
    upright: "Change, cycles, fate, luck, destiny, turning point",
    reversed: "Bad luck, resistance to change, breaking cycles",
    description: "A great wheel turns in the sky, inscribed with the letters T-A-R-O (or R-O-T-A, the Latin word for wheel) and the alchemical symbols for mercury, sulfur, water, and salt. Three figures cling to the wheel: a serpent descending on the left (the Egyptian god Set, representing evil), Anubis rising on the right (representing wisdom and resurrection), and a sphinx at the top holding a sword of discernment. In the four corners, four winged creatures read books — the angel, eagle, lion, and bull of the four fixed zodiac signs. The Wheel of Fortune represents the eternal cycle of change — the understanding that nothing in life is permanent. Fortune rises and falls, seasons change, and what seems like disaster may be the turning point toward something better. This card teaches acceptance of life's natural rhythms and the wisdom to know that this too shall pass.",
    symbol: "🎡",
    image: `${RWS}/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/300px-RWS_Tarot_10_Wheel_of_Fortune.jpg`,
    element: "Fire", zodiac: "Jupiter",
    keywords: ["destiny", "change", "cycles", "luck", "karma"],
  },
  {
    id: 11, slug: "justice", name: "Justice", nameZh: "正义", arcana: "major",
    upright: "Fairness, truth, law, cause and effect, accountability",
    reversed: "Unfairness, lack of accountability, dishonesty",
    description: "Justice sits upon her throne between two pillars, holding a sword in her right hand and balanced scales in her left. Unlike the traditional blindfolded figure, the Rider-Waite Justice looks directly forward with clear, unflinching eyes — she sees all and judges with full awareness. Her crown bears a small square, the symbol of well-ordered thought. The purple veil behind her conceals the mysteries of karmic law. The double-edged sword represents the power of reason and consequence — it cuts both ways, reminding us that our actions have outcomes we must face. Justice is the card of karma, accountability, and truth. It represents the universal law of cause and effect — every action has a consequence, every choice leads somewhere. When Justice appears, it asks you to examine your actions honestly, take responsibility for your past, and trust that fairness will ultimately prevail.",
    symbol: "⚖️",
    image: `${RWS}/e/e0/RWS_Tarot_11_Justice.jpg/300px-RWS_Tarot_11_Justice.jpg`,
    element: "Air", zodiac: "Libra",
    keywords: ["justice", "truth", "fairness", "karma", "accountability"],
  },
  {
    id: 12, slug: "the-hanged-man", name: "The Hanged Man", nameZh: "倒吊人", arcana: "major",
    upright: "Surrender, letting go, new perspective, sacrifice",
    reversed: "Stalling, resistance, indecision, needless sacrifice",
    description: "A man hangs upside down from a living tree, suspended by one foot. Yet his expression is serene, even illuminated — a golden halo surrounds his head. His free leg crosses behind the bound one, forming an inverted figure four, a symbol of earthly limitation transcended through spiritual understanding. His arms are folded behind his back, forming a triangle — the number of spiritual completion. The tree itself is a T-shaped cross, alive and green, suggesting that this sacrifice leads to growth rather than death. The Hanged Man represents voluntary surrender — the paradox that sometimes we gain by giving up, we find clarity by pausing, and we move forward by standing still. He teaches that not every problem can be solved through action; some require us to shift our perspective entirely. When this card appears, consider what you might gain by releasing control and seeing your situation from an entirely different angle.",
    symbol: "🙃",
    image: `${RWS}/2/2b/RWS_Tarot_12_Hanged_Man.jpg/300px-RWS_Tarot_12_Hanged_Man.jpg`,
    element: "Water", zodiac: "Neptune",
    keywords: ["surrender", "perspective", "sacrifice", "patience", "letting go"],
  },
  {
    id: 13, slug: "death", name: "Death", nameZh: "死神", arcana: "major",
    upright: "Transformation, endings, change, transition, release",
    reversed: "Resistance to change, stagnation, fear of endings",
    description: "Death rides a pale white horse through a field where a king has fallen. A bishop prays, a maiden kneels, and a child offers flowers — death comes to all regardless of status, age, or virtue. Yet in the background, the sun rises between two towers, promising that dawn follows every night. The black armor represents the invincibility of death — not physical death, but the unstoppable force of change. The banner bears a five-petaled white rose on black, the Mystic Rose of transformation, symbolizing beauty that persists through destruction. Death is perhaps the most misunderstood card in the tarot. It rarely signifies physical death; instead, it represents the necessary endings that precede new beginnings. Like autumn clearing the way for spring, Death clears away what no longer serves us. When this card appears, something in your life is ending — embrace the transformation, for what emerges will be more authentic than what you release.",
    symbol: "💀",
    image: `${RWS}/d/d7/RWS_Tarot_13_Death.jpg/300px-RWS_Tarot_13_Death.jpg`,
    element: "Water", zodiac: "Scorpio",
    keywords: ["transformation", "endings", "change", "rebirth", "release"],
  },
  {
    id: 14, slug: "temperance", name: "Temperance", nameZh: "节制", arcana: "major",
    upright: "Balance, moderation, patience, purpose, harmony",
    reversed: "Imbalance, excess, lack of long-term vision",
    description: "An angel stands with one foot on land and one in water, pouring liquid between two cups in an endless flow. This angel is Michael, the archangel of balance and healing, whose name means 'who is like God.' The triangle on the angel's robe represents the trinity of body, mind, and spirit, enclosed within a square of earthly existence. Irises bloom at the water's edge — named for the Greek goddess who served as messenger between gods and humanity. A golden path winds from the water toward twin peaks illuminated by a radiant crown of light — the path of balance leading to enlightenment. Temperance teaches the art of the middle way — the wisdom that comes from blending extremes into harmony. After the dramatic transformation of Death, Temperance offers healing through patience and moderation. When this card appears, it calls for balance in all things and reminds you that the best results come from measured, thoughtful action.",
    symbol: "🏺",
    image: `${RWS}/f/f8/RWS_Tarot_14_Temperance.jpg/300px-RWS_Tarot_14_Temperance.jpg`,
    element: "Fire", zodiac: "Sagittarius",
    keywords: ["balance", "moderation", "patience", "harmony", "healing"],
  },
  {
    id: 15, slug: "the-devil", name: "The Devil", nameZh: "恶魔", arcana: "major",
    upright: "Bondage, materialism, shadow self, attachment",
    reversed: "Release, exploring dark thoughts, detachment, freedom",
    description: "A horned, bat-winged figure crouches atop a black pedestal where two naked human figures stand chained. Yet look closely — the chains around their necks are loose enough to lift over their heads. They could free themselves at any time but choose not to. The Devil holds an inverted torch in his left hand, its flame pointing downward, representing the destructive use of power. The inverted pentagram above his head symbolizes the triumph of matter over spirit. The man's tail ends in flames (desire), the woman's in a cluster of grapes (addiction to pleasure). The Devil represents the shadow self — the parts of our nature we prefer to deny. It speaks of addiction, materialism, and the bondage we willingly submit to out of fear, comfort, or habit. Yet this card is ultimately empowering: it reveals that our chains are of our own making. The first step toward freedom is recognizing what holds us captive.",
    symbol: "😈",
    image: `${RWS}/5/55/RWS_Tarot_15_Devil.jpg/300px-RWS_Tarot_15_Devil.jpg`,
    element: "Earth", zodiac: "Capricorn",
    keywords: ["shadow", "bondage", "materialism", "attachment", "temptation"],
  },
  {
    id: 16, slug: "the-tower", name: "The Tower", nameZh: "塔", arcana: "major",
    upright: "Sudden change, upheaval, revelation, awakening",
    reversed: "Avoidance of disaster, fear of change, delaying the inevitable",
    description: "Lightning strikes a tall tower built upon a rocky peak, blowing off its golden crown. Two figures — one crowned, one not — fall headlong through the air as flames burst from the windows. Twenty-two flames (representing the 22 paths of the Tree of Life and the 22 Major Arcana) rain down in the shape of the Hebrew letter Yod, the hand of God. The Tower is one of the most dramatic cards in the tarot, yet its destruction serves a sacred purpose. The tower was built on false foundations — ego, illusion, materialism — and the lightning of truth exposes what was always unstable. This is the moment of revelation that shatters comfortable lies. While the experience may be shocking and painful, the Tower ultimately liberates. What falls away was never truly solid. When this card appears, brace for sudden change — but trust that what remains after the storm will be built on truth.",
    symbol: "🗼",
    image: `${RWS}/5/53/RWS_Tarot_16_Tower.jpg/300px-RWS_Tarot_16_Tower.jpg`,
    element: "Fire", zodiac: "Mars",
    keywords: ["upheaval", "revelation", "awakening", "sudden change", "liberation"],
  },
  {
    id: 17, slug: "the-star", name: "The Star", nameZh: "星星", arcana: "major",
    upright: "Hope, faith, renewal, serenity, inspiration",
    reversed: "Lack of faith, despair, disconnection, discouragement",
    description: "A naked woman kneels beside a pool, pouring water from two jugs — one onto the land and one into the water. Above her, eight stars shine brightly, with one large central star surrounded by seven smaller ones. The large star represents the core self; the seven smaller stars correspond to the chakras and the planets. A bird perches in a tree behind her — the ibis of Thoth, god of wisdom. The woman's nakedness represents vulnerability, authenticity, and the stripping away of pretense. After the devastation of the Tower, the Star brings quiet, healing light. The Star is the card of hope reborn — the calm certainty that comes after crisis, when the worst is over and healing begins. She pours the waters of life freely, nourishing both the material world and the spiritual realm. When this card appears, trust that you are being renewed. Inspiration is flowing to you. Have faith in the process, even if you cannot yet see where it leads.",
    symbol: "⭐",
    image: `${RWS}/d/db/RWS_Tarot_17_Star.jpg/300px-RWS_Tarot_17_Star.jpg`,
    element: "Air", zodiac: "Aquarius",
    keywords: ["hope", "faith", "renewal", "inspiration", "serenity"],
  },
  {
    id: 18, slug: "the-moon", name: "The Moon", nameZh: "月亮", arcana: "major",
    upright: "Illusion, fear, anxiety, subconscious, intuition",
    reversed: "Release of fear, repressed emotion, clarity",
    description: "A full moon hangs between two towers, its face both serene and unsettling. Below, a winding path leads from a pool of water — the subconscious — through a landscape guarded by a wolf and a dog, the wild and domesticated aspects of our nature. A crayfish emerges from the pool, representing the earliest stirrings of consciousness rising from the deep. Fifteen droplets of light fall from the moon — yods, the same divine sparks that rained from the Tower. The Moon illuminates a world of shadows, dreams, and deception. Nothing is quite what it seems under moonlight — shapes shift, shadows deceive, and our deepest fears surface. Yet the Moon is also the realm of intuition, creativity, and the subconscious wisdom that speaks through dreams. When this card appears, trust your instincts but verify your perceptions. Navigate with caution, honor your fears without being ruled by them, and remember that the path through darkness eventually leads to dawn.",
    symbol: "🌕",
    image: `${RWS}/7/7f/RWS_Tarot_18_Moon.jpg/300px-RWS_Tarot_18_Moon.jpg`,
    element: "Water", zodiac: "Pisces",
    keywords: ["illusion", "fear", "intuition", "subconscious", "dreams"],
  },
  {
    id: 19, slug: "the-sun", name: "The Sun", nameZh: "太阳", arcana: "major",
    upright: "Joy, success, vitality, positivity, abundance",
    reversed: "Temporary depression, lack of success, sadness",
    description: "A radiant sun shines in a bright blue sky, its face beaming with warmth and benevolence. Below, a naked child rides a white horse with arms outstretched in pure joy, symbolizing the innocence and freedom that come with enlightenment. Four sunflowers grow tall behind a grey wall — they represent the four suits of the tarot and the four elements, all thriving under the Sun's nurturing light. The red banner the child carries represents vitality, passion, and the life force. After the illusions of the Moon, the Sun brings total clarity. The Sun is the most unambiguously positive card in the tarot. It represents the triumph of light over darkness, clarity over confusion, joy over despair. Like the actual sun, this card's energy is generous, warm, and life-giving. When the Sun appears in a reading, it promises success, happiness, and the simple but profound pleasure of being alive. Celebrate — you have earned this moment of radiance.",
    symbol: "☀️",
    image: `${RWS}/1/17/RWS_Tarot_19_Sun.jpg/300px-RWS_Tarot_19_Sun.jpg`,
    element: "Fire", zodiac: "Sun",
    keywords: ["joy", "success", "vitality", "optimism", "clarity"],
  },
  {
    id: 20, slug: "judgement", name: "Judgement", nameZh: "审判", arcana: "major",
    upright: "Rebirth, inner calling, absolution, renewal",
    reversed: "Self-doubt, refusal of self-examination, stagnation",
    description: "The archangel Gabriel blows a great trumpet from the clouds, and below, the dead rise from their coffins — men, women, and children lifting their arms toward the sky in response to the divine call. The flag on Gabriel's trumpet bears a red cross on white, the symbol of resurrection. Snow-capped mountains line the horizon, representing the immovable truth of divine judgment. The grey-blue figures represent the soul stripped of earthly disguise, standing naked before the final reckoning. Judgement represents the moment of awakening — the inner call that demands we rise to our highest potential. It is not judgment in the punitive sense but rather a moment of profound self-reflection, where we assess our lives honestly and answer the call to become who we are truly meant to be. When this card appears, a moment of reckoning is at hand. Listen to your inner calling, forgive yourself and others, and prepare to step into a renewed version of your life.",
    symbol: "📯",
    image: `${RWS}/d/dd/RWS_Tarot_20_Judgement.jpg/300px-RWS_Tarot_20_Judgement.jpg`,
    element: "Fire", zodiac: "Pluto",
    keywords: ["rebirth", "calling", "absolution", "reflection", "renewal"],
  },
  {
    id: 21, slug: "the-world", name: "The World", nameZh: "世界", arcana: "major",
    upright: "Completion, integration, accomplishment, wholeness",
    reversed: "Incompletion, stagnation, lack of closure, shortcuts",
    description: "A dancing figure floats within a great laurel wreath, holding two wands — echoing the Magician but now in a state of effortless mastery rather than focused will. A purple scarf wraps around the figure, concealing and revealing simultaneously. The four creatures from the Wheel of Fortune appear again in the corners — the angel, eagle, lion, and bull — but now they are fully integrated, each in harmony with the others. The wreath forms an oval, the shape of the cosmic egg from which all creation springs, bound by two red ribbons forming infinity symbols. The World is the final card of the Major Arcana — the moment when the Fool's journey reaches completion. Every lesson has been learned, every challenge overcome, every aspect of the self integrated into a harmonious whole. When this card appears, a major cycle in your life is reaching its fulfillment. Celebrate your accomplishments, honor how far you have come, and prepare — for the Fool's journey begins again.",
    symbol: "🌍",
    image: `${RWS}/f/ff/RWS_Tarot_21_World.jpg/300px-RWS_Tarot_21_World.jpg`,
    element: "Earth", zodiac: "Saturn",
    keywords: ["completion", "wholeness", "accomplishment", "integration", "travel"],
  },
];

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function generateMinorArcana(): TarotCard[] {
  const suits: { suit: TarotCard["suit"]; symbol: string; element: string; theme: string; themeZh: string }[] = [
    { suit: "wands", symbol: "🪄", element: "Fire", theme: "passion, creativity, action", themeZh: "权杖" },
    { suit: "cups", symbol: "🏆", element: "Water", theme: "emotions, relationships, intuition", themeZh: "圣杯" },
    { suit: "swords", symbol: "🗡️", element: "Air", theme: "intellect, conflict, truth", themeZh: "宝剑" },
    { suit: "pentacles", symbol: "🪙", element: "Earth", theme: "material, wealth, health", themeZh: "星币" },
  ];

  const ranks = [
    { num: 1, name: "Ace", upright: "New opportunity", reversed: "Missed chance", nameZh: "A" },
    { num: 2, name: "Two", upright: "Balance, partnership", reversed: "Imbalance, indecision", nameZh: "2" },
    { num: 3, name: "Three", upright: "Growth, collaboration", reversed: "Overextension, delays", nameZh: "3" },
    { num: 4, name: "Four", upright: "Stability, foundation", reversed: "Stagnation, rigidity", nameZh: "4" },
    { num: 5, name: "Five", upright: "Conflict, challenge", reversed: "Resolution, compromise", nameZh: "5" },
    { num: 6, name: "Six", upright: "Harmony, giving", reversed: "Disharmony, selfishness", nameZh: "6" },
    { num: 7, name: "Seven", upright: "Reflection, assessment", reversed: "Confusion, deception", nameZh: "7" },
    { num: 8, name: "Eight", upright: "Movement, progress", reversed: "Stagnation, resistance", nameZh: "8" },
    { num: 9, name: "Nine", upright: "Nearing completion", reversed: "Setbacks, delays", nameZh: "9" },
    { num: 10, name: "Ten", upright: "Completion, fulfillment", reversed: "Excess, burden", nameZh: "10" },
    { num: 11, name: "Page", upright: "Curiosity, new message", reversed: "Immaturity, insecurity", nameZh: "侍从" },
    { num: 12, name: "Knight", upright: "Action, adventure", reversed: "Recklessness, haste", nameZh: "骑士" },
    { num: 13, name: "Queen", upright: "Nurturing mastery", reversed: "Insecurity, dependence", nameZh: "王后" },
    { num: 14, name: "King", upright: "Leadership, authority", reversed: "Tyranny, manipulation", nameZh: "国王" },
  ];

  const cards: TarotCard[] = [];
  let id = 22;

  for (const s of suits) {
    for (const r of ranks) {
      const suitName = s.suit!.charAt(0).toUpperCase() + s.suit!.slice(1);
      const fullName = `${r.name} of ${suitName}`;
      cards.push({
        id: id++,
        slug: generateSlug(fullName),
        name: fullName,
        nameZh: `${s.themeZh}${r.nameZh}`,
        arcana: "minor",
        suit: s.suit,
        number: r.num,
        upright: `${r.upright} in ${s.theme}`,
        reversed: `${r.reversed} in ${s.theme}`,
        description: `The ${r.name} of ${suitName} brings ${s.element} energy — ${s.theme}.`,
        symbol: s.symbol,
        element: s.element,
        keywords: [r.name.toLowerCase(), s.suit!, s.element.toLowerCase()],
      });
    }
  }

  return cards;
}

export const ALL_CARDS: TarotCard[] = [...MAJOR_ARCANA, ...generateMinorArcana()];

export function getCardById(id: number): TarotCard | undefined {
  return ALL_CARDS.find((c) => c.id === id);
}

export function getCardBySlug(slug: string): TarotCard | undefined {
  return ALL_CARDS.find((c) => c.slug === slug);
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
