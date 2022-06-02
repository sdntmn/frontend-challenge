import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { loadData } from "./utils/api";

import Main from "./page/Main";
import Favorites from "./page/Favorites";
import NotFoundPage from "./page/NotFoundPage";
import { Layout } from "./components/Layout";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    loadData()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))

      .finally(() => {});
  }, []);
  console.log(cards);

  return (
    <>
      <div className='page page__content'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main cards={cards} />} />
            <Route path='favorites' element={<Favorites cards={cards} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
