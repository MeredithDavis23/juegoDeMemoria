import React from 'react';
import PropTypes from 'prop-types'
import './Board.css'


export default function Card({
  handleClick,
  id,
  type,
  flipped,
  height,
  width,
  disabled,
  solved
}) {
  return (
    <div
      className={`memory-card ${flipped ? "flipped" : ""}`}
      style={{
        width,
        height
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={
            flipped || solved
              ? `/img/${type}.png`
              : "https://www.flaticon.com/svg/static/icons/svg/361/361998.svg"
          }
          alt=""
        ></img>
      </div>
    </div>
  );
}

Card.propTypes = {
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};