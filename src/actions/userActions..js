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
function register(userInfo) {
  return (dispatch) => {
    userService.register(userInfo).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.token, res.data));
      } else dispatch(failure(res.msg));
    });
  };
  function success(token, userInfo) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.reload();
    return { type: constant.REGIS_SUCCESS, token };
  }
  function failure(message) {
    return { type: constant.REGIS_FAILURE, message };
  }
}
function login(userInfo) {
  return (dispatch) => {
    userService.login(userInfo).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.token, res.data));
      } else {
        dispatch(failure(res.msg));
      }
    });
  };
  function success(token, userInfo) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.reload();
    return { type: constant.LOGIN_SUCCESS, token };
  }
  function failure(message) {
    return { type: constant.LOGIN_FAILURE, message };
  }
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  return (dispatch) => {
    dispatch({ type: constant.LOGOUT });
    window.location.reload();
  };
}
export const userActions = {
  checkPhone,
  register,
  login,
  logout,
};
