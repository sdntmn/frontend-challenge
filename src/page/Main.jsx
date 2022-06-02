import React from "react";
import Card from "../components/Card";

function Main({ cards }) {
  return (
    <section className='main__section page__section'>
      <ul className='main__list'>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <h2 className='main__text'>... загружаем еще котиков ...</h2>
    </section>
  );
}

export default Main;
