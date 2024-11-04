import { createSlice } from "@reduxjs/toolkit";
import { shuffleCards, initialState } from "../components/GameUtils";

export const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    flipCards(state, action) {
      const cardId = action.payload;
      const flippedCard = state.cards.find((card) => card.id === cardId);

      if (!flippedCard || state.flippedCards.includes(cardId)) return;
      state.flippedCards.push(cardId);

      if (state.flippedCards.length === 2) {
        const [firstId, secondId] = state.flippedCards;
        const firstCard = state.cards.find((card) => card.id === firstId);
        const secondCard = state.cards.find((card) => card.id === secondId);

        if (firstCard.emoji === secondCard.emoji) {
          state.score += 50;
          firstCard.isMatched = true;
          secondCard.isMatched = true;
          state.flippedCards = [];
        } else {
          state.score -= 10;
          state.shouldHideCards = true;
        }
      }
    },
    resetGame(state) {
      state.cards = shuffleCards(
        initialState.cards.map((card) => ({ ...card, isMatched: false }))
      );
      state.score = 0;
      state.flippedCards = [];
      state.shouldHideCards = false;
    },
    hideFlippedCards(state) {
        const [firstId, secondId] = state.flippedCards;
      state.cards = state.cards.map((card) => {
        if (card.id === firstId || card.id === secondId) {
          return { ...card, isFlipped: false };
        }
        return card;
      });
        state.flippedCards = [];
        state.shouldHideCards = false;
      },
  },
});

export const { flipCards, resetGame, hideFlippedCards  } = GameSlice.actions;
export default GameSlice.reducer;
