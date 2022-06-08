import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { selectAllFavoriteCard } from "../store/saveData/saveDataSelector";

function Favorites() {
  const arrayFavoriteCard = useSelector(selectAllFavoriteCard);

  return (
    <div className='content'>
      <section className='main__section page__section'>
        <ul className='main__list'>
          {arrayFavoriteCard.map((card) => (
            <Card key={card.id} card={card} like={{ like: true }} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
