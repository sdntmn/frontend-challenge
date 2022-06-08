import { ADD_CARD, REMOVE_CARD } from "./saveDataConst.js";

export const addInFavoriteArray = (card) => ({
  type: ADD_CARD,
  card: card,
});

export const removeIsFavoriteArray = (id) => ({
  type: REMOVE_CARD,
  id,
});
