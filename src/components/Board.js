import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";

function Board() {
  const cards = useSelector((state) => state.game.cards);
  return (
    <div className="board">
      {cards.map((card) => (
        <Cards key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Board;
