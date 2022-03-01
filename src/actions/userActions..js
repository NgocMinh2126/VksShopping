import { userService } from "../services/userService";
import { constant } from "../constants";
function phoneCheck(phone) {
  return (dispatch) => {
    userService.checkPhone(phone).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(phone));
      }
    });
  };
  function success(phone) {
    return { type: constant.REQUEST_PHONE_CHECK, phone };
  }
}
