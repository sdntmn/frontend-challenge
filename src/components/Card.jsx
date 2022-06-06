import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCard } from "../store/stateData/catsDataSelector";

function Card({ card }) {
  const cardStyle = { backgroundImage: `url(${card.url})` };
  const cardCats = useSelector(selectAllCard);
  console.log(card);
  console.log(cardCats);

  const [cardId, setCardId] = useState("");

  const onClick = () => {
    setCardId(card.id);
  };

  return (
    <li className='card'>
      <div className='card__image' style={cardStyle}>
        <button
          className='card__button card__button-is-active'
          type='button'
          onClick={onClick}></button>
      </div>
    </li>
  );
}

export default Card;

//https://dev.to/link2twenty/react-redux-and-localstorage-2lih
