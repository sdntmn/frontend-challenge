import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFavoriteCard } from "../store/saveData/saveDataSelector";
import {
  addInFavoriteArray,
  removeIsFavoriteArray,
} from "../store/saveData/saveDataActions";

function Card({ card }) {
  let locations = useLocation();
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
        {locations.pathname === "/" && (
          <button
            className={cardStyleFavorite}
            type='button'
            onClick={onClick}></button>
        )}
        {locations.pathname === "/favorites" && (
          <button
            className='card__button card__button-is-active'
            type='button'
            onClick={onClick}></button>
        )}
      </div>
    </li>
  );
}

export default Card;
