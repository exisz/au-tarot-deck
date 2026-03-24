// Rich descriptions for all 56 Minor Arcana cards
// Based on traditional Rider-Waite-Smith interpretations

export interface MinorArcanaDetail {
  description: string;
  upright: string;
  reversed: string;
  keywords: string[];
  zodiac?: string;
}

type CardKey = string; // e.g. "ace-of-wands"

export const MINOR_ARCANA_DETAILS: Record<CardKey, MinorArcanaDetail> = {
  // ============ WANDS (Fire) ============
  "ace-of-wands": {
    description: "A hand emerges from a cloud, grasping a living wand that sprouts fresh green leaves — a symbol of raw creative power waiting to be channeled. The landscape below is fertile but untamed, with a distant castle representing the structures you will build from this spark of inspiration. The Ace of Wands is the purest expression of fire energy: the initial flash of an idea, the surge of passion that ignites new ventures. Unlike the mental clarity of Swords or the emotional depth of Cups, this ace operates on pure instinct and enthusiasm. When it appears, the universe is handing you a torch — what you do with it is up to you. This is the moment to say yes to new projects, creative endeavors, and bold risks. The energy is raw and powerful, but it needs direction to become something lasting.",
    upright: "New creative spark, inspiration, bold beginnings, passion, potential",
    reversed: "Delays, lack of motivation, creative blocks, missed opportunities",
    keywords: ["inspiration", "creativity", "new venture", "passion", "spark"],
    zodiac: "Fire signs (Aries, Leo, Sagittarius)",
  },
  "two-of-wands": {
    description: "A man stands on a castle battlement, holding a globe in one hand and a wand in the other, gazing out over a vast landscape of sea and mountains. A second wand is fixed to the wall behind him. He has already achieved something — the castle is built, the first wand is planted — but now he looks beyond, planning his next move. The Two of Wands represents the moment between conception and action, when you hold the world in your hands and must decide which direction to take. This is the card of planning, vision, and bold ambition. Unlike the Ace's raw spark, the Two asks you to think strategically. The globe symbolizes global thinking, expanded horizons, and the courage to look beyond your comfort zone. When this card appears, you are being called to make a decision about your future path — one that may take you far from familiar territory.",
    upright: "Future planning, progress, decisions, discovery, personal power",
    reversed: "Fear of the unknown, lack of planning, playing it safe, impatience",
    keywords: ["planning", "vision", "decisions", "ambition", "discovery"],
  },
  "three-of-wands": {
    description: "A figure stands on a cliff overlooking the sea, watching ships sail toward distant shores. Three wands are planted firmly in the ground beside them, and the golden sky suggests a prosperous outlook. Where the Two of Wands held the globe in contemplation, the Three has already set plans in motion — the ships represent ventures launched, investments made, and seeds planted. This card speaks to the expansion phase of any creative project: the initial vision has taken form, and now you watch as your efforts begin to bear fruit in the wider world. The Three of Wands encourages patience with confidence — your ships are coming in, but they need time to cross the ocean. It also suggests collaboration and trade, reminding you that growth often requires reaching beyond your own borders. When this card appears, your foresight is paying off. Keep your eyes on the horizon.",
    upright: "Expansion, foresight, overseas opportunities, growth, leadership",
    reversed: "Delays in plans, frustration, obstacles to progress, playing small",
    keywords: ["expansion", "foresight", "progress", "trade", "leadership"],
  },
  "four-of-wands": {
    description: "Four wands form a canopy decorated with flowers and garlands, creating a welcoming archway. In the background, a castle or great house suggests stability and achievement, while figures in the foreground celebrate with raised bouquets. This is one of the most joyful cards in the tarot — a moment of celebration, homecoming, and communal harmony. The Four of Wands marks a milestone: a wedding, a graduation, a housewarming, or the completion of an important phase. Unlike the restless energy of other Wands cards, the Four invites you to pause, appreciate what you have built, and share your joy with others. The solid structure of four wands planted in the earth suggests that this happiness has a stable foundation — it is earned, not fleeting. When this card appears, celebration is warranted. Gather your people, mark the occasion, and let yourself feel the warmth of belonging.",
    upright: "Celebration, harmony, homecoming, community, milestone",
    reversed: "Lack of harmony, transition, feeling unwelcome, personal celebration",
    keywords: ["celebration", "harmony", "home", "community", "milestone"],
  },
  "five-of-wands": {
    description: "Five young people brandish wands against each other in what appears to be a chaotic skirmish — yet look closer, and no one is truly being harmed. This is competition, not combat; debate, not destruction. Each person holds their wand differently, representing diverse approaches, opinions, and styles clashing in the same arena. The Five of Wands embodies the creative friction that arises when passionate people come together. It may manifest as workplace disagreements, competitive environments, sports rivalries, or the internal conflict of too many ideas fighting for attention. While uncomfortable, this energy is not destructive — it sharpens your skills, clarifies your position, and forces you to fight for what matters. When this card appears, expect challenges to your ideas and approach. Rather than avoiding the conflict, lean into it. The best ideas are forged in the fire of healthy competition.",
    upright: "Competition, conflict, disagreements, creative tension, challenges",
    reversed: "Avoidance of conflict, inner conflict, resolution, compromise",
    keywords: ["competition", "conflict", "debate", "challenge", "diversity"],
  },
  "six-of-wands": {
    description: "A rider on a white horse moves through a crowd, a laurel wreath adorning both horse and rider's wand. The surrounding figures raise their own wands in salute — this is a victory parade, a public recognition of achievement. The Six of Wands is the card of triumph, acclaim, and the sweet moment when your efforts are acknowledged by others. Unlike private satisfaction, this card specifically points to public success: winning the award, getting the promotion, receiving the standing ovation. The white horse symbolizes purity of effort and the nobility of your achievement. The crowd's raised wands suggest that your victory inspires others rather than diminishing them. When this card appears, step into the spotlight with confidence. You have earned this recognition. Accept praise gracefully, but remember that true leadership means lifting others as you rise.",
    upright: "Victory, public recognition, progress, self-confidence, acclaim",
    reversed: "Ego, fall from grace, lack of recognition, private achievement",
    keywords: ["victory", "recognition", "success", "confidence", "triumph"],
  },
  "seven-of-wands": {
    description: "A figure stands on high ground, wielding a wand defensively against six wands rising from below. Their footing is uneven — one shoe doesn't match the other — suggesting they were caught off guard and had to scramble to defend their position. The Seven of Wands is the card of standing your ground against opposition. You have achieved something (the high ground), and now others challenge your position. This is the inevitable consequence of the Six's success: visibility attracts challengers. The card asks whether you have the courage and stamina to defend what you believe in, even when outnumbered. The mismatched shoes remind us that defending our position is rarely comfortable or elegant — it requires improvisation, determination, and grit. When this card appears, don't back down. The challenges you face are a sign that you are doing something worth fighting for. Hold your ground.",
    upright: "Perseverance, defensive, maintaining control, standing your ground",
    reversed: "Giving up, overwhelmed, yielding, admitting defeat",
    keywords: ["defense", "perseverance", "challenge", "courage", "competition"],
  },
  "eight-of-wands": {
    description: "Eight wands fly through a clear blue sky above a flowing river and green landscape — no human figures, no obstacles, just pure momentum. This is the only Wands card without a person in it, because the Eight represents energy that has been released and is now moving under its own power. The Eight of Wands is the card of swift action, rapid communication, and things falling into place with sudden speed. After the defensive struggle of the Seven, the Eight brings a rush of forward motion: messages arrive, plans accelerate, travel beckons, and delays dissolve. The wands fly in parallel, suggesting alignment and focus — everything is moving in the same direction. The clear sky indicates no obstacles in sight. When this card appears, prepare for a burst of activity. Respond quickly, seize opportunities as they arise, and ride the wave of momentum. This energy is fast but brief — make the most of it while it lasts.",
    upright: "Swift action, movement, quick decisions, air travel, momentum",
    reversed: "Delays, frustration, waiting, holding off, internal alignment needed",
    keywords: ["speed", "movement", "communication", "travel", "momentum"],
  },
  "nine-of-wands": {
    description: "A weary, bandaged figure leans on a wand, standing before a fence of eight others planted firmly in the ground. Their posture speaks of exhaustion and vigilance in equal measure — they have been through battles and bear the scars, yet they remain upright, ready for one more challenge. The Nine of Wands is the card of resilience, perseverance, and the determination that comes from having survived everything life has thrown at you so far. You are close to the finish line, but the final stretch is testing your endurance. The eight wands behind the figure represent the obstacles already overcome — proof that you are tougher than you think. The bandage on the head suggests mental fatigue as much as physical wear. When this card appears, it acknowledges your weariness while urging you not to give up now. You have come too far to quit. Draw on your reserves, remember what you are fighting for, and push through. The finish line is closer than it seems.",
    upright: "Resilience, courage, persistence, test of faith, nearly there",
    reversed: "Exhaustion, giving up, overwhelmed, paranoia, stubbornness",
    keywords: ["resilience", "persistence", "courage", "endurance", "boundaries"],
  },
  "ten-of-wands": {
    description: "A figure struggles to carry ten heavy wands, bent forward under their weight as they approach a distant town. The burden is clearly too much for one person, yet they press on, determined to reach their destination. The Ten of Wands speaks to the weight of responsibility, overcommitment, and the price of success. You took on the creative fire of the Ace, competed through the Five, triumphed in the Six, defended your ground in the Seven — and now the accumulated responsibilities threaten to crush you. The town in the distance represents your goal: relief, completion, delegation. The card does not say you will fail — you will arrive — but it asks at what cost. When this card appears, it is time to examine what you are carrying and whether all of it is truly yours to bear. Delegate, prioritize, set down what is not essential. Success means nothing if you burn out before you can enjoy it.",
    upright: "Burden, responsibility, hard work, stress, accomplishment",
    reversed: "Inability to delegate, overstressed, collapse, learning to say no",
    keywords: ["burden", "responsibility", "overwork", "stress", "completion"],
  },
  "page-of-wands": {
    description: "A young person stands in a barren landscape, holding a wand and gazing at it with fascination and curiosity. Their tunic is decorated with salamanders — creatures of fire mythology — and they wear a jaunty hat that speaks to their adventurous spirit. The Page of Wands is the messenger of creative fire: a young, enthusiastic energy that approaches the world with wonder and boldness. Unlike the other Pages who are more cautious, the Page of Wands is eager to explore, experiment, and leap before looking. They bring news of creative opportunities, travel possibilities, and exciting new directions. This figure represents the part of you that is unafraid to try new things, that gets excited about possibilities, and that sees the world as an adventure waiting to happen. When this card appears, embrace your inner explorer. Say yes to the invitation, sign up for the class, book the trip. Your enthusiasm is your greatest asset right now.",
    upright: "Exploration, excitement, free spirit, new ideas, discovery",
    reversed: "Lack of direction, procrastination, creating conflict, hasty decisions",
    keywords: ["exploration", "enthusiasm", "creativity", "adventure", "messages"],
    zodiac: "Fire signs",
  },
  "knight-of-wands": {
    description: "A knight in golden armor rides a rearing horse through a desert landscape, his wand raised high and his cloak billowing with salamander patterns. Three pyramids rise in the distance — exotic lands to conquer and explore. The Knight of Wands is the most impulsive and passionate of the four Knights, charging forward with unstoppable energy and boundless confidence. Where the Page dreams and plans, the Knight acts — immediately, boldly, and sometimes recklessly. This is the energy of the entrepreneur who launches without a business plan, the traveler who books a one-way ticket, the lover who declares their feelings without calculating the risk. The Knight's strength is their courage and charisma; their weakness is impatience and a tendency to start more than they finish. When this card appears, it signals a time of bold action, rapid change, and passionate pursuit. Channel this fire energy wisely — it can build empires or burn bridges.",
    upright: "Energy, passion, adventure, impulsiveness, bold action",
    reversed: "Haste, scattered energy, delays in travel, frustration, burnout",
    keywords: ["passion", "adventure", "action", "courage", "impulsiveness"],
    zodiac: "Sagittarius",
  },
  "queen-of-wands": {
    description: "A queen sits confidently on her throne, flanked by lions and sunflowers, holding a wand in one hand and a sunflower in the other. A black cat sits at her feet — a symbol of her connection to the mysterious and intuitive realms alongside her fiery, outgoing nature. The Queen of Wands embodies warm, generous, magnetic energy — she is the person who lights up every room she enters, who inspires loyalty through genuine care and radiant confidence. Unlike the King who leads through authority, the Queen leads through warmth, creativity, and an infectious enthusiasm for life. She is deeply passionate about her projects and people, fiercely protective of those she loves, and unafraid to be bold and visible. The black cat suggests she also possesses a private, intuitive side that she reveals only to those she trusts. When this card appears, channel your inner Queen of Wands: be bold, be warm, be unapologetically yourself. Your confidence and creativity are needed now.",
    upright: "Courage, confidence, independence, warmth, determination",
    reversed: "Selfishness, jealousy, insecurity, demanding, temperamental",
    keywords: ["confidence", "warmth", "creativity", "charisma", "independence"],
    zodiac: "Leo",
  },
  "king-of-wands": {
    description: "A king sits on his throne, which is adorned with lions and salamanders — symbols of fire, strength, and transformation. He holds a living, sprouting wand and wears a crown of flames. A small salamander at his feet faces its own tail, forming a symbol of infinity and the completion of creative cycles. The King of Wands is the mature master of fire energy: a natural leader who inspires through vision, charisma, and decisive action. Unlike the impulsive Knight, the King has learned to harness passion with wisdom. He is the entrepreneur who builds lasting enterprises, the creative director who turns vision into reality, the leader who motivates teams through enthusiasm and bold direction. He takes risks, but they are calculated. He is passionate, but channeled. When this card appears, step into your leadership role with confidence. You have the vision, the skills, and the fire to make things happen. Lead boldly, inspire others, and trust your ability to navigate whatever challenges arise.",
    upright: "Natural-born leader, vision, entrepreneur, honor, bold decisions",
    reversed: "Impulsiveness, haste, ruthless, high expectations, tyrannical",
    keywords: ["leadership", "vision", "entrepreneurship", "charisma", "mastery"],
    zodiac: "Aries",
  },

  // ============ CUPS (Water) ============
  "ace-of-cups": {
    description: "A great chalice overflows with five streams of water, held aloft by a hand emerging from a cloud. A dove descends into the cup bearing a communion wafer marked with a cross — the union of spirit and matter. Lotus blossoms float on the water below, symbols of spiritual awakening and purity emerging from murky depths. The Ace of Cups is the purest expression of emotional and spiritual energy: new love, deep compassion, creative inspiration that flows from the heart rather than the mind. Where the Ace of Wands ignites with fire, the Ace of Cups opens with water — receptive, nurturing, and deeply feeling. The five streams represent the five senses being awakened to beauty and love. When this card appears, your heart is being opened to receive. A new relationship, a spiritual awakening, a creative project born from genuine emotion, or simply a profound sense of inner peace and joy. Open your heart and let the waters flow.",
    upright: "New love, compassion, creativity, overwhelming emotion, spiritual gift",
    reversed: "Emotional loss, blocked creativity, emptiness, unrequited love",
    keywords: ["love", "compassion", "creativity", "emotion", "spirituality"],
    zodiac: "Water signs (Cancer, Scorpio, Pisces)",
  },
  "two-of-cups": {
    description: "Two figures face each other, each holding a cup, exchanging vows or pledges beneath a winged lion's head and a caduceus — the staff of Hermes, symbol of commerce, negotiation, and healing. The winged lion above represents the passion and strength that elevates partnership beyond mere convenience. The Two of Cups is the card of mutual attraction, partnership, and the beautiful alchemy that occurs when two beings connect authentically. While often associated with romantic love, this card equally represents any relationship built on mutual respect, shared values, and genuine affection: a business partnership, a deep friendship, or a reconciliation. Unlike the fantasy of some love cards, the Two of Cups is grounded and reciprocal — both figures give and receive equally. When this card appears, a meaningful connection is forming or deepening. Honor it with honesty, presence, and the willingness to be vulnerable. True partnership requires both cups to be offered freely.",
    upright: "Partnership, unity, love, mutual attraction, connection",
    reversed: "Imbalance, broken communication, tension, separation",
    keywords: ["partnership", "love", "connection", "unity", "attraction"],
  },
  "three-of-cups": {
    description: "Three women dance in a circle, raising their cups high in a joyful toast. The ground around them is abundant with fruits and flowers — the harvest of shared effort and mutual support. Their garlands and flowing robes suggest celebration, friendship, and the pure delight of being together. The Three of Cups is the card of friendship, community, and celebration — the joy that multiplies when shared with kindred spirits. After the intimate connection of the Two, the Three expands love outward into a circle of belonging. This card often appears when social gatherings, reunions, or creative collaborations are on the horizon. It celebrates the networks of support, sisterhood/brotherhood, and communal joy that sustain us through life's challenges. When this card appears, reach out to your people. Celebrate accomplishments together, support each other's dreams, and remember that happiness shared is happiness multiplied. You do not have to journey alone.",
    upright: "Celebration, friendship, creativity, community, joy",
    reversed: "Overindulgence, gossip, isolation, stifled creativity",
    keywords: ["celebration", "friendship", "community", "joy", "creativity"],
  },
  "four-of-cups": {
    description: "A young person sits beneath a tree, arms crossed, staring at three cups on the ground before them with an expression of boredom or dissatisfaction. A fourth cup is being offered by a hand emerging from a cloud — a divine gift — but they seem too absorbed in their own discontent to notice. The Four of Cups is the card of apathy, contemplation, and the blindness that comes from taking our blessings for granted. It speaks to the emotional stagnation that sets in when we become so focused on what we lack that we cannot see what is being offered. The three cups represent what you already have; the fourth represents the new opportunity you are ignoring. This card is not a harsh judgment — sometimes we need to withdraw and reflect. But it is a gentle warning: if you stay in this state too long, you will miss the very thing that could reignite your passion. When this card appears, look up. What opportunity are you refusing to see?",
    upright: "Apathy, contemplation, disconnection, reevaluation, missed opportunity",
    reversed: "Awareness, acceptance, moving forward, new perspective",
    keywords: ["apathy", "contemplation", "withdrawal", "reevaluation", "opportunity"],
  },
  "five-of-cups": {
    description: "A cloaked figure stands in mourning, head bowed, before three spilled cups. Red and green liquid pools on the ground — passion and growth wasted. Yet behind the figure, two cups remain standing, unnoticed. A bridge in the distance leads to a secure castle, suggesting a path forward. The Five of Cups is the card of grief, loss, and regret — the painful moment when something precious has been lost and the sorrow feels all-consuming. This card does not minimize your pain; the three spilled cups represent a real and significant loss. But its deeper message lies in the two cups that still stand: not everything is lost, even when it feels that way. The bridge behind you leads somewhere new, if you can find the courage to turn around. When this card appears, allow yourself to grieve — but set a time limit on mourning. Look at what remains. The path forward exists; you simply need to shift your gaze from what was lost to what still stands.",
    upright: "Loss, grief, disappointment, regret, focusing on the negative",
    reversed: "Acceptance, moving on, finding peace, forgiveness",
    keywords: ["loss", "grief", "regret", "disappointment", "perspective"],
  },
  "six-of-cups": {
    description: "In a quaint village square, a young boy offers a cup filled with flowers to a smaller girl. Five other cups, also brimming with blossoms, are arranged nearby. An older figure walks away in the background, suggesting the retreat of adult concerns and a return to simpler times. The Six of Cups is the card of nostalgia, innocence, and the sweetness of childhood memories. It often appears when the past is calling — perhaps through reunions with old friends, revisiting childhood places, or reconnecting with activities that once brought pure, uncomplicated joy. The exchange between the children symbolizes generosity, kindness, and love given without expectation of return. This card can also represent gifts, inheritance, or support from family. When this card appears, honor your past without being trapped by it. Reconnect with the innocence and wonder you once felt, and let those memories inform — but not replace — the present moment. Sometimes healing comes from remembering who you were before the world made you complicated.",
    upright: "Nostalgia, childhood memories, innocence, joy, generosity",
    reversed: "Living in the past, unrealistic expectations, naivety, moving forward",
    keywords: ["nostalgia", "innocence", "memories", "generosity", "childhood"],
  },
  "seven-of-cups": {
    description: "A silhouetted figure stands before seven cups floating in clouds, each containing a different vision: a castle (ambition), jewels (wealth), a wreath (victory), a dragon (fear), a head (ego), a snake (temptation), and a glowing figure (spiritual ideal). The scene is dreamlike, shifting, hallucinatory. The Seven of Cups is the card of illusion, fantasy, and the overwhelming paralysis of too many choices. Each cup offers something enticing, but the clouds warn that not everything is as it appears — some visions are mirages, some are traps, and only careful discernment can tell which is which. This card often appears when you are daydreaming instead of deciding, when fantasy substitutes for action, or when an array of options leaves you unable to commit to any single path. When this card appears, it is time to ground yourself. Not all that glitters is gold. Choose one cup — the one aligned with your deepest values — and commit to making that vision real. The others will either wait or dissolve, and either way, you will be better off for having chosen.",
    upright: "Fantasy, illusion, wishful thinking, choices, imagination",
    reversed: "Clarity, reality check, making a choice, alignment with values",
    keywords: ["illusion", "choices", "fantasy", "temptation", "discernment"],
  },
  "eight-of-cups": {
    description: "A cloaked figure walks away from eight neatly stacked cups, heading toward barren mountains under an eclipsing moon. The cups are arranged carefully — nothing is spilled or broken — and the figure leaves them deliberately, knowingly. The Eight of Cups is the card of conscious departure: choosing to walk away from something that appears complete but no longer fulfills you. This is not the loss of the Five (where cups are spilled) but a voluntary abandonment of what no longer serves your soul's growth. The eclipsing moon suggests a transition between phases — something is ending so something new can begin. The mountains ahead represent the challenging but necessary journey toward deeper meaning. When this card appears, you may be feeling a restless dissatisfaction with something that looks fine on paper but feels hollow inside. Trust that feeling. It takes more courage to walk away from comfortable emptiness than to stay and pretend. The next chapter requires you to leave this one behind.",
    upright: "Walking away, disillusionment, leaving behind, seeking deeper meaning",
    reversed: "Fear of change, stagnation, drifting, avoidance, clinging",
    keywords: ["departure", "disillusionment", "searching", "courage", "transition"],
  },
  "nine-of-cups": {
    description: "A well-fed, contented figure sits on a wooden bench with arms crossed in satisfaction. Behind them, nine golden cups are arranged in a proud arc on a draped shelf — a display of emotional abundance and fulfilled wishes. The figure's expression is one of deep contentment and quiet pride. The Nine of Cups is traditionally known as the 'wish card' — the card of dreams fulfilled, emotional satisfaction, and the luxurious pleasure of having everything you desire. After the searching journey of the Eight, the Nine represents arrival: you found what you were looking for, or perhaps what you were looking for found you. This card speaks to sensual pleasure, material comfort, and the happiness that comes from appreciating what you have. When this card appears, your wish is being granted — or is about to be. Enjoy the bounty. Savor the moment. You have worked hard and deserve this satisfaction. Just remember that true fulfillment includes gratitude and generosity, not just acquisition.",
    upright: "Wishes fulfilled, satisfaction, gratitude, luxury, emotional fulfillment",
    reversed: "Greed, dissatisfaction, materialism, overindulgence",
    keywords: ["satisfaction", "wishes", "fulfillment", "contentment", "pleasure"],
  },
  "ten-of-cups": {
    description: "A couple stands with arms raised toward a rainbow of ten cups arcing across a bright sky, while two children dance joyfully beside them. A peaceful home with trees and a river completes the idyllic scene. The Ten of Cups is the ultimate card of emotional fulfillment — lasting happiness, harmonious family life, and the deep contentment that comes from love freely given and received. Where the Nine of Cups represents personal satisfaction, the Ten expands that joy into family and community. The rainbow is a covenant — a promise of enduring peace after the storms of life. This card represents the emotional 'happily ever after' — not as naive fantasy, but as the genuine reward of emotional maturity, commitment, and the work of building a life of love. When this card appears, take a moment to appreciate the love that surrounds you. This is what all the heartache and growth was for. The rainbow is real, and you have found your place beneath it.",
    upright: "Harmony, happiness, alignment, family, emotional fulfillment",
    reversed: "Broken family, disharmony, misaligned values, domestic conflict",
    keywords: ["harmony", "family", "happiness", "fulfillment", "love"],
  },
  "page-of-cups": {
    description: "A young person in elaborate clothing stands by the sea, holding a cup from which a small fish emerges — surprising them with its unexpected appearance. The Page of Cups represents the beginning of emotional and creative exploration: the first stirrings of intuition, the surprise of unexpected feelings, and the childlike wonder of discovering the depths within. This is the daydreamer, the young poet, the person who sees magic in ordinary moments. The fish emerging from the cup symbolizes messages from the subconscious — intuitive insights, creative ideas, and emotional truths that surface when you least expect them. Unlike the fiery Page of Wands who charges forward, the Page of Cups is gentle, receptive, and quietly amazed by the mysteries of the inner world. When this card appears, pay attention to your dreams, your feelings, and the quiet whispers of your imagination. A creative or emotional opportunity is presenting itself in an unexpected form.",
    upright: "Creative opportunities, intuitive messages, curiosity, possibility",
    reversed: "Emotional immaturity, creative blocks, escapism, unrealistic",
    keywords: ["creativity", "intuition", "surprise", "imagination", "sensitivity"],
    zodiac: "Water signs",
  },
  "knight-of-cups": {
    description: "A knight in shining armor rides a white horse at a gentle walk, holding a cup before him like a holy grail. Unlike the charging Knight of Wands, this knight moves with grace and purpose — he is the romantic quester, the artist, the idealist who follows his heart wherever it leads. His winged helmet and fish-decorated armor connect him to Hermes (the messenger) and the element of water. The Knight of Cups is the card of romantic pursuit, creative inspiration acted upon, and the courage to follow your emotions into unknown territory. This knight is charming, diplomatic, and deeply feeling — but can also be prone to moodiness, unrealistic idealism, and following fantasy over reality. When this card appears, romance, a creative proposal, or an invitation that appeals to your heart may be approaching. Follow your heart, but keep one foot on the ground. The most beautiful quests require both passion and practicality to reach their destination.",
    upright: "Romance, charm, imagination, beauty, creative offer",
    reversed: "Moodiness, unrealistic, jealousy, disappointment, deception",
    keywords: ["romance", "charm", "creativity", "idealism", "invitation"],
    zodiac: "Pisces",
  },
  "queen-of-cups": {
    description: "A queen sits on a throne at the edge of the sea, holding an elaborate covered cup — the only queen whose cup is sealed, suggesting depths of emotion and intuition she does not reveal to the world. Cherubs and sea creatures adorn her throne, and colorful pebbles line the water's edge. Her feet rest on the stones rather than in the water, showing that despite her deep emotional nature, she remains grounded. The Queen of Cups is the master of emotional intelligence — deeply intuitive, compassionate, and nurturing, yet wise enough to maintain boundaries. She feels everything but is not overwhelmed. She sees through deception because her empathy gives her insight into others' true motives. She is the healer, the counselor, the person whose presence makes others feel safe enough to open up. When this card appears, trust your intuition — it is sharper than you realize. Care for others, but remember the sealed cup: you do not have to pour yourself empty to be of service.",
    upright: "Compassion, calm, comfort, emotional security, intuition",
    reversed: "Emotional insecurity, codependency, martyrdom, manipulation",
    keywords: ["compassion", "intuition", "nurturing", "empathy", "emotional depth"],
    zodiac: "Cancer",
  },
  "king-of-cups": {
    description: "A king sits on a stone throne floating on a turbulent sea, wearing a golden cup amulet and holding a cup in one hand and a scepter in the other. A fish leaps from the waves to his right, and a ship sails steadily to his left — commerce and intuition in balance. Despite the churning water all around him, the king remains calm and composed. The King of Cups is the master of emotional balance — he has achieved the rare ability to feel deeply without being controlled by his emotions. He is the leader who makes wise decisions informed by both reason and compassion. In the outer world, he represents a person of authority who is genuinely kind, diplomatically skilled, and emotionally available. He may be a counselor, healer, artist, or leader in any field where emotional intelligence is the key to success. When this card appears, lead with your heart and your head in equal measure. The turbulent waters around you cannot shake your inner peace if you have done the work of emotional mastery.",
    upright: "Emotional balance, compassion, diplomacy, wisdom, calm authority",
    reversed: "Emotional manipulation, moodiness, volatility, coldness",
    keywords: ["balance", "diplomacy", "compassion", "wisdom", "emotional mastery"],
    zodiac: "Scorpio",
  },

  // ============ SWORDS (Air) ============
  "ace-of-swords": {
    description: "A hand emerges from a cloud gripping a great sword, its tip crowned with a golden wreath and olive and palm branches — symbols of victory and peace through mental clarity. Mountains rise in the background, and wisps of cloud surround the blade. The Ace of Swords represents the purest form of mental energy: a breakthrough idea, a moment of absolute clarity, or a truth that cuts through confusion like a blade through fog. This is the 'aha moment,' the flash of insight that changes everything. Unlike the gradual understanding of study, the Ace arrives suddenly and completely. It can represent a new intellectual pursuit, a just decision, or the courage to speak a difficult truth. The double-edged nature of the sword reminds us that truth and clarity carry responsibility — the same blade that liberates can also wound if wielded carelessly. When this card appears, a moment of mental clarity is at hand. Trust your insight, but wield it with compassion and precision.",
    upright: "Breakthrough, clarity, sharp mind, truth, new idea",
    reversed: "Confusion, brutality, chaos, misinformation, misuse of power",
    keywords: ["clarity", "truth", "breakthrough", "intellect", "justice"],
    zodiac: "Air signs (Gemini, Libra, Aquarius)",
  },
  "two-of-swords": {
    description: "A blindfolded woman sits before a calm sea, holding two crossed swords in perfect balance. The crescent moon behind her illuminates the scene with pale, uncertain light. Her posture is rigid, her expression tense — she is stuck at a crossroads, unable or unwilling to choose. The Two of Swords represents the paralysis of indecision: a situation where two options seem equally valid (or equally threatening), and the mind freezes rather than committing to either. The blindfold suggests willful avoidance — perhaps she could see the answer if she removed it, but she is not ready to face what she might find. The crossed swords create a temporary barrier against the world, but they cannot be held forever. When this card appears, you are avoiding a decision. The blindfold is self-imposed — the information you need is available if you are willing to look. Remove the blindfold, set down the swords, and choose. Any decision is better than this frozen state.",
    upright: "Indecision, stalemate, blocked emotions, avoidance, difficult choices",
    reversed: "Indecision becoming overwhelming, information overload, lesser of two evils",
    keywords: ["indecision", "stalemate", "avoidance", "balance", "choice"],
  },
  "three-of-swords": {
    description: "Three swords pierce a bright red heart, and rain pours from heavy grey clouds. There is no human figure, no landscape — just the stark image of heartbreak against a stormy sky. The Three of Swords is perhaps the most viscerally painful card in the tarot: it represents heartbreak, grief, sorrow, and the piercing pain of emotional wounds. Each sword represents a different aspect of suffering — betrayal, loss, and the harsh truths we wish we never had to face. Yet this card is also profoundly honest. The rain will eventually stop. The clouds will part. And the heart, though wounded, continues to beat. In many traditions, the Three of Swords is considered a necessary card — the pain it represents is the price of having loved, cared, and been vulnerable enough to be hurt. When this card appears, do not try to suppress the pain. Feel it fully, express it honestly, and trust that sorrow — like rain — is temporary, but the heart's capacity to heal is infinite.",
    upright: "Heartbreak, emotional pain, sorrow, grief, separation",
    reversed: "Recovery, forgiveness, releasing pain, moving past grief",
    keywords: ["heartbreak", "sorrow", "pain", "grief", "truth"],
  },
  "four-of-swords": {
    description: "A knight lies in repose on a stone tomb inside a quiet church. Three swords hang on the wall above, while a fourth lies beneath the figure. Stained glass behind the figure depicts a scene of blessing and peace. The knight is not dead — they are resting, recovering, retreating from the battles of the world to heal and gather strength. The Four of Swords is the card of rest, contemplation, and strategic withdrawal. After the pain of the Three, this card prescribes the medicine: stop, be still, and allow yourself to heal. In our action-obsessed culture, this card is a radical reminder that rest is not laziness — it is a necessary phase of any cycle. The church setting suggests that this rest has a sacred quality; it is meditation, not merely sleep. When this card appears, your mind and body are telling you to slow down. Step back from the conflict, the work, the worry. The swords on the wall will still be there when you wake, but you will be better equipped to handle them after you have rested.",
    upright: "Rest, recovery, contemplation, solitude, meditation, mental retreat",
    reversed: "Restlessness, burnout, need for recovery, stagnation",
    keywords: ["rest", "recovery", "meditation", "contemplation", "retreat"],
  },
  "five-of-swords": {
    description: "A figure stands with a smug expression, holding three swords while two others lie on the ground. In the background, two defeated figures walk away in shame and sorrow under a stormy sky. The victor has won the battle — but at what cost? The Five of Swords is the card of conflict, defeat, and pyrrhic victory. Someone wins, but the victory feels hollow because the methods used — deception, aggression, or ruthless competition — have destroyed the relationships and trust that once existed. This card asks a hard question: is it worth winning if everyone loses respect for you? It can also represent being on the losing side, walking away from a battle you cannot win. Sometimes the wisest move is to pick up your remaining swords and leave with your dignity intact. When this card appears, examine the conflicts in your life. Are you fighting battles worth winning? Are you winning in ways you can be proud of? Sometimes surrender is the true victory, and sometimes the bully's triumph is their own punishment.",
    upright: "Conflict, defeat, winning at all costs, betrayal, intimidation",
    reversed: "Reconciliation, making amends, moving on, choosing battles wisely",
    keywords: ["conflict", "defeat", "betrayal", "ego", "hollow victory"],
  },
  "six-of-swords": {
    description: "A cloaked figure and a small child sit in a boat being ferried across calm water, leaving troubled waters behind. Six swords stand upright in the bow of the boat — the mental baggage they carry with them into the next chapter. The far shore is peaceful, the near shore turbulent. The Six of Swords is the card of transition, moving on, and the bittersweet journey from difficulty toward calmer waters. This is not a joyful departure — the cloaked figure's posture suggests sadness and resignation. They are leaving something behind, and the swords they carry remind us that you cannot leave your thoughts, memories, and lessons behind entirely. But the direction of travel is clear: away from pain, toward peace. When this card appears, a necessary transition is underway. It may not feel triumphant — you may be leaving with grief in your heart — but you are moving in the right direction. Trust the ferryman, trust the current, and know that calmer waters lie ahead.",
    upright: "Transition, moving on, leaving behind, travel, mental recovery",
    reversed: "Resistance to change, unfinished business, unable to move on",
    keywords: ["transition", "moving on", "travel", "recovery", "leaving behind"],
  },
  "seven-of-swords": {
    description: "A figure tiptoes away from a military camp carrying five swords, having left two behind still planted in the ground. They look back over their shoulder with a sly, self-satisfied expression — they believe they are getting away with something. The camp in the background is unaware of the theft. The Seven of Swords is the card of deception, stealth, and strategic thinking that crosses the line into dishonesty. Someone is not playing fair — it could be you, or it could be someone in your life. The card can represent anything from white lies to outright betrayal, from clever strategy to sneaky manipulation. But notice: the figure could not carry all seven swords. The two left behind suggest that deception always leaves evidence, and the truth eventually surfaces. When this card appears, examine where dishonesty — your own or others' — may be at play. Are you being fully transparent? Is someone hiding something from you? Sometimes this card simply advises strategic thinking and discretion, but its shadow side warns: stolen swords are hard to keep.",
    upright: "Deception, trickery, strategy, sneakiness, getting away with it",
    reversed: "Coming clean, getting caught, conscience, confession",
    keywords: ["deception", "strategy", "stealth", "cunning", "dishonesty"],
  },
  "eight-of-swords": {
    description: "A woman stands blindfolded and loosely bound, surrounded by eight swords planted in the mud. Water pools at her feet, and a castle sits on a distant cliff. Despite her apparent imprisonment, the bindings are loose, the swords form a fence but not a cage, and the blindfold could be removed with effort. The Eight of Swords reveals that the prison is largely self-created. The Eight of Swords is the card of self-imposed limitation, victimhood, and the mental traps we build for ourselves. Fear, negative self-talk, and limiting beliefs create invisible walls more confining than any physical barrier. The woman could free herself — but first she must recognize that the cage exists in her mind. The castle in the distance represents the help and resources available to her if she could see past her fear. When this card appears, ask yourself: what beliefs are keeping you trapped? What would you do if you were not afraid? The swords around you are thoughts, not walls. Remove the blindfold, untie the ropes, and walk free.",
    upright: "Self-imposed restriction, victim mentality, imprisonment, helplessness",
    reversed: "Self-acceptance, new perspective, freedom, releasing limiting beliefs",
    keywords: ["restriction", "self-imposed", "fear", "helplessness", "liberation"],
  },
  "nine-of-swords": {
    description: "A figure sits up in bed in the middle of the night, face buried in their hands, nine swords hanging on the wall behind them. The quilt is decorated with roses (desire) and astrological symbols (fate), and a carving on the bed frame shows one person defeating another. The Nine of Swords is the card of anxiety, nightmares, and the 3 AM spiral of worry that feels inescapable in the dark. This is the mind at war with itself — replaying fears, imagining worst-case scenarios, and turning molehills into mountains. The nine swords on the wall are not attacking the figure; they hang in the background, representing fears and worries that feel overwhelming but may be more perception than reality. The carving on the bed suggests that you have the power to overcome these fears — you have done it before. When this card appears, your anxiety is real but your fears may be exaggerated. Seek support, practice grounding, and remember: the darkest hour is just before dawn. The swords on the wall cannot hurt you unless you let them.",
    upright: "Anxiety, worry, fear, nightmares, depression, despair",
    reversed: "Recovery, learning to cope, facing fears, seeking help",
    keywords: ["anxiety", "nightmares", "worry", "fear", "mental anguish"],
  },
  "ten-of-swords": {
    description: "A figure lies face down on the ground with ten swords plunged into their back. The sky is black above, but on the horizon, a golden dawn breaks over calm waters. The scene is dramatic — arguably overly so — and that excess is part of the card's message. The Ten of Swords represents the absolute end: the worst has happened, the final blow has been struck, and there is nowhere to go but up. This card often appears when you feel utterly defeated, when betrayal or loss has left you prostrate. But look at the horizon: dawn is breaking. The Ten of Swords is actually a card of hope disguised as devastation, because it marks the end of a painful cycle. You cannot be stabbed again — all ten swords are already used. The only direction from rock bottom is up. When this card appears, acknowledge the ending. Grieve the loss. Then lift your eyes to the horizon, because a new dawn is already beginning. This ending is also a beginning.",
    upright: "Painful ending, deep wounds, betrayal, loss, crisis, hitting bottom",
    reversed: "Recovery, regeneration, resisting an inevitable end, fear of ruin",
    keywords: ["ending", "betrayal", "rock bottom", "dawn", "release"],
  },
  "page-of-swords": {
    description: "A young person stands on uneven ground, holding a sword aloft with both hands as wind whips through their hair and clouds race across the sky. Birds fly in the turbulent air behind them, and their stance is alert, watchful, ready. The Page of Swords is the youngest expression of air energy — curious, mentally agile, and intensely observant, but sometimes lacking the experience to know what to do with all the information they gather. This is the student, the researcher, the person who asks 'why?' relentlessly and is not satisfied with superficial answers. They are quick-witted and communicative but can be gossipy, argumentative, or cutting with words they have not yet learned to temper. When this card appears, a new intellectual challenge or piece of information is coming your way. Approach it with curiosity and an open mind, but think before you speak — the Page's greatest lesson is learning that truth without tact is cruelty. Use your sharp mind to understand, not just to win arguments.",
    upright: "Curiosity, mental energy, new ideas, communication, vigilance",
    reversed: "Deception, manipulation, all talk, cynicism, gossip",
    keywords: ["curiosity", "communication", "vigilance", "intellect", "truth"],
    zodiac: "Air signs",
  },
  "knight-of-swords": {
    description: "A knight charges forward on a powerful horse, sword raised high, cape streaming behind them. The sky is turbulent with storm clouds, trees bend in the wind, and the horse's mane flies wildly — everything in this card speaks of speed, urgency, and unstoppable mental force. The Knight of Swords is the most intense and single-minded of the four Knights. When they identify a goal, they pursue it with razor focus and relentless energy, cutting through obstacles and opposition with the force of pure will. They are brilliant, articulate, and fearless — but they can also be ruthless, tactless, and so focused on their objective that they trample everything in their path. When this card appears, swift, decisive action is needed — but temper your charge with awareness. The Knight of Swords wins the battle but sometimes destroys the peace. Speak your truth, pursue your goals, but remember that the most effective sword is wielded with precision, not just force.",
    upright: "Ambition, action, drive, determination, swift change",
    reversed: "Impulsive, burnout, no direction, restless, unfocused aggression",
    keywords: ["ambition", "determination", "speed", "focus", "aggression"],
    zodiac: "Gemini",
  },
  "queen-of-swords": {
    description: "A queen sits on a stone throne carved with butterflies and cherubs, holding a sword in her right hand and extending her left toward the horizon. Her crown is topped with butterflies — symbols of transformation — and a single cloud hovers near her head, suggesting the realm of higher thought. Her expression is stern but not unkind; she has the face of someone who has suffered, learned, and emerged wiser. The Queen of Swords is the master of clear perception and honest communication. She has known loss and pain (often she is associated with widowhood or solitude), and these experiences have sharpened rather than hardened her. She sees through pretense, speaks uncomfortable truths with grace, and makes decisions with her head while remaining aware of her heart. When this card appears, channel the Queen's clarity. Set aside sentiment and see the situation as it truly is. Speak your truth directly but kindly. Make decisions based on what is, not what you wish were true. The Queen's greatest gift is her ability to hold wisdom and compassion in the same hand as her sword.",
    upright: "Clarity, independence, honest communication, unbiased judgment",
    reversed: "Cruelty, bitterness, cold-heartedness, overly critical",
    keywords: ["clarity", "independence", "truth", "perception", "wisdom"],
    zodiac: "Libra",
  },
  "king-of-swords": {
    description: "A king sits on a throne carved with butterflies, angels, and crescent moons, holding an upright sword in his right hand. His expression is serious and authoritative, his gaze direct and unflinching. Trees sway gently in the background, and the sky is partly cloudy — suggesting a mind that is clear but acknowledges complexity. The King of Swords represents intellectual mastery, ethical authority, and the ability to make fair, objective decisions even in difficult circumstances. He is the judge, the strategist, the leader who governs through intelligence and principle rather than force or emotion. He values truth above all and demands it from himself and others. His weakness is emotional distance — he can become so identified with logic that he loses touch with compassion. When this card appears, approach your situation with intellectual rigor and moral clarity. Make decisions based on evidence and principle, not fear or desire. Lead with integrity, communicate with precision, and remember that the highest use of the sword is justice, not punishment.",
    upright: "Intellectual power, authority, truth, clarity, ethical leadership",
    reversed: "Manipulation, cruelty, abuse of power, dishonesty, cold judgment",
    keywords: ["authority", "intellect", "truth", "justice", "clarity"],
    zodiac: "Aquarius",
  },

  // ============ PENTACLES (Earth) ============
  "ace-of-pentacles": {
    description: "A hand emerges from a cloud, offering a single golden pentacle above a lush garden. An archway of hedges opens onto a path leading to distant mountains — the road of material prosperity. White lilies bloom in abundance. The Ace of Pentacles is the purest expression of earth energy: a new opportunity for material growth, financial gain, or physical manifestation. Where the Ace of Wands offers creative fire and the Ace of Cups offers emotional depth, the Ace of Pentacles offers something tangible — money, a job opportunity, a business idea, a health improvement, or a chance to build something real in the physical world. The garden below represents the fertile ground waiting for your seed; the path through the archway represents the journey of turning potential into prosperity. When this card appears, a material opportunity is presenting itself. Plant the seed, nurture it with consistent effort, and watch it grow into something solid and lasting.",
    upright: "New financial opportunity, prosperity, abundance, manifestation",
    reversed: "Lost opportunity, poor planning, lack of foresight, scarcity mindset",
    keywords: ["opportunity", "prosperity", "manifestation", "abundance", "new venture"],
    zodiac: "Earth signs (Taurus, Virgo, Capricorn)",
  },
  "two-of-pentacles": {
    description: "A young person dances while juggling two pentacles connected by an infinity symbol, their movements fluid and playful despite the challenge of keeping everything in balance. Behind them, two ships ride high waves — the ups and downs of life continue regardless of our efforts to maintain equilibrium. The Two of Pentacles is the card of balance, adaptability, and the art of keeping multiple priorities in motion without dropping any. This card often appears when you are managing competing demands — work and home, saving and spending, multiple projects or responsibilities. The infinity symbol connecting the pentacles suggests that perfect balance is not a static state but a continuous, dynamic dance. The key is flexibility, not rigidity. When this card appears, embrace the juggle rather than fighting it. Stay light on your feet, be willing to shift your weight as circumstances change, and trust in your ability to adapt. If the dance feels exhausting, it may also be time to ask: do you really need to juggle all these things, or can you set one down?",
    upright: "Balance, adaptability, time management, juggling priorities",
    reversed: "Overwhelmed, disorganized, financial instability, overcommitted",
    keywords: ["balance", "adaptability", "juggling", "flexibility", "priorities"],
  },
  "three-of-pentacles": {
    description: "Inside a grand cathedral, a stonemason stands on a bench discussing plans with a monk and a noble — three figures from different walks of life collaborating on a shared project. The mason holds tools and looks up at the arched ceiling where three pentacles are carved into the stonework, evidence of skilled craftsmanship already applied. The Three of Pentacles is the card of teamwork, skilled work, and the early stages of building something meaningful through collaboration. It recognizes that great achievements require both individual mastery and collective effort — the mason's skill, the monk's spiritual vision, and the patron's resources must all come together. This card often appears when you are in the planning or early execution phase of a project, when gathering feedback, or when your skills are being recognized by others. When this card appears, value collaboration and constructive feedback. Share your expertise generously, welcome input from those with different perspectives, and commit to the highest quality in your work. Mastery is built one stone at a time.",
    upright: "Teamwork, collaboration, craftsmanship, skill, planning",
    reversed: "Lack of teamwork, disregard for skill, poor workmanship, conflict",
    keywords: ["teamwork", "craftsmanship", "collaboration", "skill", "planning"],
  },
  "four-of-pentacles": {
    description: "A figure sits on a stone bench outside a city, clutching a pentacle to their chest while balancing one on their head and standing on two more. Their grip is tight, their posture rigid, their expression anxious. The city behind them suggests community and commerce, but they have withdrawn to guard their possessions alone. The Four of Pentacles is the card of security, control, and the fear that drives us to cling to what we have. On one hand, it represents healthy financial management — saving, investing, building a safety net. On the other, it warns against the misery of excessive attachment to material things. The figure has achieved stability but at the cost of freedom and connection — they cannot embrace anyone or anything because their hands are full of pentacles. When this card appears, examine your relationship with security. Are you saving wisely or hoarding fearfully? Are you protecting your resources or imprisoning yourself with them? True security comes not from what you grip but from knowing that you can always create more.",
    upright: "Security, control, conservation, stability, possessiveness",
    reversed: "Greed, materialism, letting go, financial insecurity, generosity",
    keywords: ["security", "control", "possessiveness", "stability", "hoarding"],
  },
  "five-of-pentacles": {
    description: "Two impoverished figures trudge through snow outside a brightly lit church window depicting five golden pentacles. One limps on crutches; the other is barefoot and wrapped in a thin shawl. They are clearly suffering — cold, injured, destitute — yet they pass by the warm church without entering. The Five of Pentacles is the card of hardship, loss, and the isolation that accompanies financial or physical difficulty. The snow represents the cold reality of material loss; the crutches represent the toll it takes on body and spirit. But the illuminated church window is the card's hidden message: help is available, warmth is within reach, community and spiritual support exist — if you are willing to ask for them. When this card appears, you may be going through a difficult period. The hardship is real, but so is the help you are too proud, ashamed, or exhausted to seek. Look up from the snow. The door is open. You do not have to endure this alone.",
    upright: "Financial loss, poverty, isolation, worry, hardship, insecurity",
    reversed: "Recovery, charity, improvement, spiritual poverty, turning the corner",
    keywords: ["hardship", "loss", "isolation", "poverty", "help available"],
  },
  "six-of-pentacles": {
    description: "A wealthy merchant stands between two kneeling beggars, distributing coins from one hand while holding a balanced scale in the other. Six pentacles hover above the scene, suggesting abundance being circulated. The merchant's fine clothing contrasts with the beggars' humble attire, yet the scale indicates his generosity is measured and fair, not random. The Six of Pentacles is the card of generosity, charity, and the dynamic flow of giving and receiving. It reminds us that prosperity is not a static possession but a flowing energy that must circulate to remain healthy. The scale represents fairness and discernment in giving — not enablement, not stinginess, but thoughtful generosity that helps others while maintaining your own stability. When this card appears, consider both sides of the coin: if you are in a position of abundance, share with grace and without superiority. If you are in need, accept help without shame. The roles of giver and receiver are temporary — today's benefactor may need support tomorrow.",
    upright: "Generosity, charity, giving, receiving, sharing wealth, fairness",
    reversed: "Strings attached, inequality, selfishness, debt, one-sided charity",
    keywords: ["generosity", "charity", "balance", "giving", "receiving"],
  },
  "seven-of-pentacles": {
    description: "A young farmer leans on his hoe, contemplating a bush heavy with seven pentacles — the fruit of his labor. His posture suggests both fatigue and thoughtful evaluation: is this harvest worth the effort? Should he continue tending this crop or invest his energy elsewhere? The Seven of Pentacles is the card of assessment, patience, and the moment when you step back to evaluate whether your investments — of time, money, energy, love — are yielding the returns you hoped for. This is not the moment of harvest but the moment of reflection before harvest: examining growth, assessing progress, and deciding whether to continue, pivot, or walk away. The card does not judge the answer; it simply insists that you ask the question honestly. When this card appears, take stock of where you have been investing your energy. Are you seeing growth? Is the direction still right? Patience may be required — some crops take longer to bear fruit — but blind persistence without evaluation is just stubbornness.",
    upright: "Assessment, patience, long-term view, sustainable results, reflection",
    reversed: "Impatience, poor returns, wasted effort, lack of growth, short-term thinking",
    keywords: ["assessment", "patience", "investment", "reflection", "growth"],
  },
  "eight-of-pentacles": {
    description: "A craftsman sits at his workbench, carefully carving a pentacle with focused dedication. Six completed pentacles hang in a row beside him, and one more sits at his feet — evidence of consistent, quality work. A town is visible in the distance, but the craftsman is absorbed in his task, removed from distraction. The Eight of Pentacles is the card of diligence, skill development, and the deep satisfaction of mastering a craft through patient, repetitive practice. This is the card of the apprentice, the student, the professional who understands that excellence is not a gift but a habit built through deliberate effort. Each pentacle is identical yet individually crafted — quality maintained across repetition. When this card appears, dedicate yourself to your craft. Whether you are learning a new skill, deepening an existing one, or simply committing to excellence in your daily work, the Eight of Pentacles rewards focused, consistent effort. There are no shortcuts to mastery, but the journey itself is deeply fulfilling.",
    upright: "Diligence, skill, craftsmanship, dedication, hard work, mastery",
    reversed: "Perfectionism, lack of motivation, shortcuts, sloppy work",
    keywords: ["diligence", "craftsmanship", "skill", "dedication", "mastery"],
  },
  "nine-of-pentacles": {
    description: "An elegant woman stands alone in a vineyard heavy with golden grapes and pentacles. She wears a richly embroidered gown and a falcon — a symbol of intellectual and spiritual mastery — perches on her gloved hand. A snail crawls at her feet, symbolizing the slow, steady path to the abundance she now enjoys. A large estate is visible in the background — this is her home, earned through her own effort and discipline. The Nine of Pentacles is the card of luxury, self-sufficiency, and the refined pleasure of enjoying the fruits of your labor in your own way, on your own terms. This is not inherited wealth but earned abundance — the financial independence and personal freedom that come from years of smart work, wise investment, and disciplined living. When this card appears, take time to enjoy what you have built. You have earned this moment of luxury and independence. The Nine of Pentacles also reminds you that true wealth is not just financial — it includes the freedom to spend your time as you choose, surrounded by beauty, in the company you prefer.",
    upright: "Luxury, self-sufficiency, financial independence, abundance, discipline",
    reversed: "Over-investment in work, superficial values, setbacks, dependence",
    keywords: ["luxury", "independence", "abundance", "discipline", "self-sufficiency"],
  },
  "ten-of-pentacles": {
    description: "An elderly patriarch sits beneath an archway, wrapped in a richly embroidered robe decorated with grapevines and ten pentacles arranged in the Tree of Life pattern. Two dogs rest at his feet, and in the courtyard beyond, a younger couple and a child go about their lives — three generations connected by shared prosperity. A grand estate forms the backdrop, suggesting enduring wealth built over generations. The Ten of Pentacles is the card of legacy, inheritance, and the culmination of material success that extends beyond the individual to benefit family and community. This is not just personal wealth but dynastic prosperity — the home that houses generations, the business that supports a family, the values and traditions passed from grandparent to grandchild. When this card appears, think long-term. How are you building not just for yourself but for those who come after? The Ten of Pentacles celebrates the kind of wealth that endures — not just money, but the wisdom, values, and structures that sustain a family across time.",
    upright: "Legacy, inheritance, family wealth, establishment, long-term success",
    reversed: "Financial failure, family disputes, instability, short-term thinking",
    keywords: ["legacy", "inheritance", "family", "wealth", "establishment"],
  },
  "page-of-pentacles": {
    description: "A young person stands in a green meadow, holding a single pentacle up before their eyes with careful, fascinated attention. Unlike the Pages of Wands and Swords who look outward, the Page of Pentacles gazes at the pentacle itself — studying it, analyzing it, learning its nature. Freshly plowed fields stretch behind them, and distant mountains promise future growth. The Page of Pentacles represents the beginning of a material or educational journey: the student who falls in love with a subject, the apprentice who discovers their vocation, or the saver who makes their first investment. This is grounded, practical curiosity — not the fiery enthusiasm of Wands or the dreamy imagination of Cups, but the steady, reliable interest that leads to real skill and tangible results. When this card appears, a new opportunity for learning, earning, or building is presenting itself. Approach it with the Page's focused attention and practical dedication. Great oaks grow from small acorns — and this acorn is worth planting.",
    upright: "Ambition, diligence, new opportunity, desire to learn, manifestation",
    reversed: "Lack of progress, procrastination, learning from failure, immaturity",
    keywords: ["study", "opportunity", "diligence", "manifestation", "ambition"],
    zodiac: "Earth signs",
  },
  "knight-of-pentacles": {
    description: "A knight sits motionless on a heavy black horse in the middle of a plowed field, holding a single pentacle and gazing at it with patient determination. Unlike the other Knights who charge, gallop, or trot, this Knight stands still — but his stillness is not passivity; it is the focused patience of someone who understands that lasting achievement requires steady, methodical effort. The plowed field represents work already done; the Knight's solid presence promises more to come. The Knight of Pentacles is the most reliable, hardworking, and patient of the four Knights. Where the Knight of Wands charges and the Knight of Swords races, this Knight plods — but he always arrives, and what he builds endures. He represents dedication, routine, and the willingness to do unglamorous work because it needs to be done. When this card appears, embrace the virtue of patience and consistency. Not every quest requires speed. Sometimes the most heroic thing you can do is show up every day, do the work, and trust the process.",
    upright: "Hard work, routine, productivity, patience, conservatism",
    reversed: "Boredom, laziness, feeling stuck, perfectionism, obsession with detail",
    keywords: ["patience", "dedication", "hard work", "reliability", "routine"],
    zodiac: "Virgo",
  },
  "queen-of-pentacles": {
    description: "A queen sits on a stone throne in a lush garden, cradling a golden pentacle in her lap with tender, possessive care. Roses bloom around her, a rabbit hops at her feet (fertility and abundance), and her throne is carved with fruit and goat heads — symbols of earthly prosperity and nurturing. She is surrounded by natural beauty yet sits in composed, practical dignity. The Queen of Pentacles is the master of creating abundance in the physical world while maintaining warmth, generosity, and grace. She is the financial manager who never forgets that money serves people, not the reverse. She creates beautiful, comfortable homes; she nourishes bodies and spirits; she builds wealth not through aggression but through practical wisdom and steady care. When this card appears, channel the Queen's ability to be both prosperous and generous, practical and nurturing. Take care of the material details — the budget, the home, the body — while never losing sight of what truly matters. The best investments are those made with love.",
    upright: "Nurturing, practical, providing, abundance, security, warmth",
    reversed: "Financial insecurity, smothering, work-home imbalance, neglecting self",
    keywords: ["nurturing", "abundance", "practicality", "security", "generosity"],
    zodiac: "Taurus",
  },
  "king-of-pentacles": {
    description: "A king sits on a throne carved with bull heads, wearing a robe embroidered with grapevines and pentacles. He holds a scepter in one hand and a golden pentacle in the other, his feet resting on a foundation of carved rams. Behind him, a prosperous castle rises above abundant gardens. The King of Pentacles is the master of material success — the builder who has turned vision into empire, not through luck but through decades of discipline, strategic thinking, and practical wisdom. He represents the entrepreneur who built the company, the investor who grew the portfolio, the patriarch who secured his family's prosperity for generations. He is generous but shrewd, comfortable but not complacent, wealthy but grounded. When this card appears, you are being called to embody the King's practical mastery. Think long-term, invest wisely, build structures that endure, and share your prosperity with those who helped you earn it. True kingship in the material world means using wealth as a tool for creation, not just accumulation.",
    upright: "Wealth, business, leadership, security, discipline, abundance",
    reversed: "Financially inept, obsessed with wealth, stubborn, materialistic",
    keywords: ["wealth", "leadership", "discipline", "abundance", "security"],
    zodiac: "Capricorn",
  },
};
