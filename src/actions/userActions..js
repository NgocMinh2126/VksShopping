import { userService } from "../services/userService";
import { appActions } from "./appActions";
import { constant } from "../constants";
function checkPhone(info) {
  return (dispatch) => {
    userService.checkPhone(info).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(info.phone));
        if (res.is_registered) {
          dispatch(appActions.changePopup(constant.LOGIN_POPUP));
        } else {
          dispatch(appActions.changePopup(constant.REGIS_POPUP));
        }
      }
    });
  };
  function success(phone) {
    return { type: constant.REQUEST_PHONE_CHECK, phone };
  }
}
export const userActions = {
  checkPhone,
};
