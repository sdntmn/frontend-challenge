import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state.favoriteCards);
//     localStorage.setItem("favoriteCards", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("favoriteCards");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

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
