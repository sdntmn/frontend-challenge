import React from "react";

function Card({ card }) {
  const cardStyle = { backgroundImage: `url(${card.url})` };

  return (
    <li className='card'>
      <div className='card__image' style={cardStyle}>
        <button
          className='card__button card__button-is-active'
          type='button'></button>
      </div>
    </li>
  );
}

export default Card;
