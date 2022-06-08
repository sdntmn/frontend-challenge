import { combineReducers } from "redux";
import { cardsReducer } from "./stateData/catsDataReducer";
import { favoriteCards } from "./saveData/saveDataReducer";

export const rootReducer = combineReducers({
  allCard: cardsReducer,
  favoriteCards: favoriteCards,
});
