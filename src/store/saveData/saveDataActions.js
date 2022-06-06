export const SET_SAVE_DATA = "@@saveData/SET_SAVE_DATA";
export const SET_SAVE = "@@saveData/SET_SAVE";
// export const SET_SAVE_ERROR = "@@saveData/SET_SAVE_ERROR";

const setSaveCard = (cards) => ({
  type: SET_SAVE_DATA,
  payload: cards,
});

const setSave = () => ({
  type: SET_SAVE,
});

// const setSaveError = (err) => ({
//   type: SET_SAVE_ERROR,
//   payload: err,
// });

export const saveCardData = () => (dispatch) => {
  dispatch(setSaveCard());
  dispatch(setSave());
};
