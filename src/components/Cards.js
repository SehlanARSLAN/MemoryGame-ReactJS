import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { flipCards, hideFlippedCards } from "../redux/GameSlice";
import "./card.css";

function Cards({ card }) {
  const dispatch = useDispatch();
  const flippedCards = useSelector((state) => state.game.flippedCards);
  const shouldHideCards = useSelector((state) => state.game.shouldHideCards);
  const isFlipped =
    (flippedCards && flippedCards.includes(card.id)) || card.isMatched;

  const handleClick = () => {
    if (!isFlipped && flippedCards.length < 2) {
      dispatch(flipCards(card.id));
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2 && shouldHideCards) {
      const timer = setTimeout(() => {
        dispatch(hideFlippedCards());
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [flippedCards, dispatch, shouldHideCards]);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      {isFlipped ? card.emoji : "❓"}
    </div>
  );
}

export default Cards;
