import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const loadLocal = () => {
  try {
    const savedState = localStorage.getItem("saveCard");

    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

export const saveLocal = (state) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem("saveCard", stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};

export const store = createStore(
  rootReducer,
  loadLocal(),
  applyMiddleware(thunk)
);

store.subscribe(() =>
  saveLocal({ favoriteCards: store.getState().favoriteCards })
);
