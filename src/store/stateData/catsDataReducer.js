import { SET_DATA_CATS, SET_ERROR } from "./catsDataActions";

const initialState = {
  list: [],
  error: null,
};

export const cardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA_CATS: {
      return {
        ...state,
        list: payload,
      };
    }

    case SET_ERROR:
      return {
        ...state,

        error: payload,
      };
    default:
      return state;
  }
};
