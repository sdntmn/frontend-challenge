import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./page/Main";
import Favorites from "./page/Favorites";
import NotFoundPage from "./page/NotFoundPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <div className='page page__content'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
