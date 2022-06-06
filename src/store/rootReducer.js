import { combineReducers } from "redux";
import { cardsReducer } from "./stateData/catsDataReducer";
import { setSaveCard } from "./saveData/saveDataReducer";

export const rootReducer = combineReducers({
  allCard: cardsReducer,
  saveCard: setSaveCard,
});
