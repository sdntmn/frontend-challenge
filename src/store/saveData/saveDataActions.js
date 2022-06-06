export const SET_SAVE_DATA = "@@saveData/SET_SAVE_DATA";
export const SET_SAVE_LOADING = "@@saveData/SET_SAVE_LOADING";
export const SET_SAVE_ERROR = "@@saveData/SET_SAVE_ERROR";

const setSaveCard = (cards) => ({
  type: SET_SAVE_DATA,
  payload: cards,
});

const setSaveLoading = () => ({
  type: SET_SAVE_LOADING,
});

const setSaveError = (err) => ({
  type: SET_SAVE_ERROR,
  payload: err,
});

export const saveCardData = () => (dispatch) => {
  dispatch(setSaveLoading());

  dispatch(setSaveCard());

  dispatch(setSaveError());
};
