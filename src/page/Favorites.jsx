import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { selectAllFavoriteCard } from "../store/saveData/saveDataSelector";

function Favorites() {
  const arrayFavoriteCard = useSelector(selectAllFavoriteCard);
  const cl = `card__button card__button-is-active`;
  return (
    <div className='content'>
      <section className='main__section page__section'>
        <ul className='main__list'>
          {arrayFavoriteCard.map((card) => (
            <Card key={card.id} card={card} className={cl} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
