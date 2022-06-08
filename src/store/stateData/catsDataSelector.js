export const selectAllCard = (state) => state.allCard;

export const selectFavoriteCard = (state, filter) => {
  switch (filter) {
    case false: {
      return state.allCard;
    }
    case true: {
      return state.allCard.filter((card) => card.status);
    }
    default: {
      return state.allCard;
    }
  }
};
