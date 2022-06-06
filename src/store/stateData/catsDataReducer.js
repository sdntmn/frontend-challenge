import { SET_DATA_CATS, SET_LOADING, SET_ERROR } from "./catsDataActions";

const initialState = {
  status: false,
  list: [],
  error: null,
};

export const cardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA_CATS:
      return {
        ...state,
        list: payload,
        status: true,
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    default:
      return state;
  }
};
