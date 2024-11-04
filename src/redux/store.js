import { configureStore } from "@reduxjs/toolkit";
import GameReducer from "./GameSlice";

export const store = configureStore({
  reducer: {
    game: GameReducer,
  },
});
