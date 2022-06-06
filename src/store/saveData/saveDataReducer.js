import {
  SET_SAVE_DATA,
  SET_SAVE_LOADING,
  SET_SAVE_ERROR,
} from "./saveDataActions";

const initialState = {
  status: false,
  listSave: [],
  error: null,
};

export const setSaveCard = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SAVE_DATA:
      return {
        ...state,
        list: payload,
        status: true,
      };
    case SET_SAVE_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_SAVE_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    default:
      return state;
  }
};
