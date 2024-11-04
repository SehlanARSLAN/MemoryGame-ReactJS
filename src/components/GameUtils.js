export function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

export const initialState = {
  cards: shuffleCards([
    { id: 1, emoji: "👻", isMatched: false },
    { id: 2, emoji: "👻", isMatched: false },
    { id: 3, emoji: "🐲", isMatched: false },
    { id: 4, emoji: "🐲", isMatched: false },
    { id: 5, emoji: "🔥", isMatched: false },
    { id: 6, emoji: "🔥", isMatched: false },
    { id: 7, emoji: "🌟", isMatched: false },
    { id: 8, emoji: "🌟", isMatched: false },
    { id: 9, emoji: "🍎", isMatched: false },
    { id: 10, emoji: "🍎", isMatched: false },
    { id: 11, emoji: "⚡", isMatched: false },
    { id: 12, emoji: "⚡", isMatched: false },
    { id: 13, emoji: "💧", isMatched: false },
    { id: 14, emoji: "💧", isMatched: false },
    { id: 15, emoji: "🌙", isMatched: false },
    { id: 16, emoji: "🌙", isMatched: false },
    { id: 17, emoji: "🌈", isMatched: false },
    { id: 18, emoji: "🌈", isMatched: false },
    { id: 19, emoji: "⭐", isMatched: false },
    { id: 20, emoji: "⭐", isMatched: false },
  ]),
  score: 0,
  flippedCards: [],
};
