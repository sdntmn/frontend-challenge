import { combineReducers } from "redux";
import { cardsReducer } from "./stateData/catsDataReducer";
import { filters } from "./filters/filtersReducer";
import { favoriteCards } from "./saveData/saveDataReducer";

export const rootReducer = combineReducers({
  allCard: cardsReducer,
  filters: filters,
  favoriteCards: favoriteCards,
});
