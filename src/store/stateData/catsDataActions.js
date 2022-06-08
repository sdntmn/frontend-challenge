import axios from "axios";
import { ALL_DATA, config } from "../../utils/config";

export const SET_DATA_CATS = "@@stateData/SET_DATA_CATS";

export const SET_ERROR = "@@stateData/SET_ERROR";

const setDataCats = (cards) => ({
  type: SET_DATA_CATS,
  payload: cards,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCardData = () => (dispatch) => {
  axios
    .get(ALL_DATA, config)
    .then((response) => {
      dispatch(setDataCats(response.data));
    })
    .catch((err) => dispatch(setError(err.message)));
};
