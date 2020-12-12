import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import './Board.css'

export default function BoardPractice({
  disabled,
  dimension,
  cards,
  flipped,
  handleClick,
  solved
}) {
  return (
    <div className="memory-game">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.5}
          height={dimension / 6}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          //can't click if it's disabled or has already been solved
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
}


// eslint-disable-next-line react/no-typos
BoardPractice.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};


