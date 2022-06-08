import { SET_FILTER } from "./filtersConst";

export const filters = (state = false, action) => {
  switch (action) {
    case SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};
