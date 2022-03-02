import { constant } from "../constants";

function changePopup(popupType, message) {
  console.log(popupType);
  return (dispatch) => {
    dispatch({
      popupType,
      message,
      type: constant.CHANGE_POPUP,
    });
  };
}
export const appActions = {
  changePopup,
};
