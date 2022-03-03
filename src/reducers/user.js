import { constant } from "../constants";
const userInfo = localStorage.getItem("userInfo");
const token = localStorage.getItem("token");
const initialState = {
  phone: "",
  userInfo: userInfo ? JSON.parse(userInfo) : null,
  token: token ? JSON.parse(token) : null,
  message: "",
};
export function user(state = initialState, action) {
  switch (action.type) {
    case constant.REQUEST_PHONE_CHECK: {
      return {
        ...state,
        phone: action.phone,
      };
    }
    case constant.REGIS_SUCCESS:
    case constant.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.token,
      };
    }
    case constant.REGIS_FAILURE:
    case constant.LOGIN_FAILURE: {
      return {
        ...state,
        message: action.message,
      };
    }
    default:
      return state;
  }
}
