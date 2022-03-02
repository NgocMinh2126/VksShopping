import { userService } from "../services/userService";
import { appActions } from "./appActions";
import { constant } from "../constants";
function phoneCheck(phone) {
  return (dispatch) => {
    userService.checkPhone(phone).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(phone));
        if (!res.is_registered) {
          dispatch(appActions.changePopup(constant.REGIS_POPUP));
        } else {
          dispatch(appActions.changePopup(constant.LOGIN_POPUP));
        }
      }
    });
  };
  function success(phone) {
    return { type: constant.REQUEST_PHONE_CHECK, phone };
  }
}
