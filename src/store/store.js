import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

function saveToLocalStorage(state) {
  console.log(state);
  try {
    const serialisedState = JSON.stringify(state.saveCard);
    localStorage.setItem("saveList", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("saveList");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));
