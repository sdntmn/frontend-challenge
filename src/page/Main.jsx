import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { loadCardData } from "../store/stateData/catsDataActions";
import { useDispatch, useSelector } from "react-redux";

import { selectAllCard } from "../store/stateData/catsDataSelector";

function Main() {
  const dispatch = useDispatch();
  const cardCats = useSelector(selectAllCard);

  useEffect(() => {
    dispatch(loadCardData());
  }, [dispatch]);

  return (
    <section className='main__section page__section'>
      <ul className='main__list'>
        {cardCats.list.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <h2 className='main__text'>... загружаем еще котиков ...</h2>
    </section>
  );
}

export default Main;
