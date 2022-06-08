import { ADD_CARD, REMOVE_CARD } from "./saveDataConst.js";

export const favoriteCards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD: {
      return [...state, action.card];
    }

    case REMOVE_CARD: {
      return state.filter((card) => card.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
