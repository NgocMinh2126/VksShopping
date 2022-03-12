import { constant } from "../constants";
import { appService } from "../services/appService";

function changePopup(popupType, message, additionalInfo) {
  console.log(popupType);
  return (dispatch) => {
    dispatch({
      popupType,
      message,
      type: constant.CHANGE_POPUP,
      additionalInfo,
    });
  };
}
function getHomeInfo() {
  return (dispatch) => {
    appService.getHomeInfo().then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
      } else dispatch(failure(res.msg));
    });
  };
  function success(data) {
    return { type: constant.GET_HOME_SUCCESS, data };
  }
  function failure(msg) {
    return { type: constant.GET_HOME_FAILURE, msg };
  }
}
export const appActions = {
  changePopup,
  getHomeInfo,
};
