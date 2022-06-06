import { SET_SAVE_DATA, SET_SAVE } from "./saveDataActions";

const initialState = {
  status: false,
  listSave: [],
};

export const setSaveCard = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SAVE_DATA:
      return {
        ...state,
        list: payload,
        status: false,
      };
    case SET_SAVE:
      return {
        ...state,
        status: "true",
      };

    default:
      return state;
  }
};
