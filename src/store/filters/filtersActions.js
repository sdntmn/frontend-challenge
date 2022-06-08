import { SET_FILTER } from "./filtersConst";
// export const SET_SAVE_ERROR = "@@saveData/SET_SAVE_ERROR";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
