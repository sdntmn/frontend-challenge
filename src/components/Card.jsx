import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFavoriteCard } from "../store/saveData/saveDataSelector";
import {
  addInFavoriteArray,
  removeIsFavoriteArray,
} from "../store/saveData/saveDataActions";

function Card({ card }) {
  const cardStyle = { backgroundImage: `url(${card.url})` };
  const dispatch = useDispatch();
  const arrayFavoriteCard = useSelector(selectAllFavoriteCard);
  const [like, setLike] = useState(false);

  const onClick = () => {
    const favorite = arrayFavoriteCard.some((cardId) => cardId.id === card.id);
    if (!favorite) {
      setLike(true);
      dispatch(addInFavoriteArray(card));
    } else {
      dispatch(removeIsFavoriteArray(card.id));
      setLike(false);
    }
  };

  const cardStyleFavorite = `card__button ${
    like ? "card__button-is-active" : ""
  }`;

  return (
    <li className='card'>
      <div className='card__image' style={cardStyle}>
        <button
          className={cardStyleFavorite}
          type='button'
          onClick={onClick}></button>
      </div>
    </li>
  );
}

export default Card;

//https://dev.to/link2twenty/react-redux-and-localstorage-2lih
// `card__button ${like ? "" : "card__button-is-active"}`
