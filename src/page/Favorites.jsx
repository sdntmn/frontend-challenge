import React from "react";
import Card from "../components/Card";

function Favorites({ cards }) {
  return (
    <div className='content'>
      <section className='main__section page__section'>
        <ul className='main__list'>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
