import { constant } from "../constants";

const initialState = {
  message: "",
  popup: {
    message: "",
    type: constant.NO_POPUP,
    additionalInfo: {},
  },
  homeInfo: {
    status: constant.LOADING,
  },
};
export function app(state = initialState, action) {
  switch (action.type) {
    case constant.CHANGE_POPUP:
      return {
        ...state,
        popup: {
          message: action.message,
          type: action.popupType,
          additionalInfo: action.additionalInfo,
        },
      };
    case constant.GET_HOME_SUCCESS:
      return {
        ...state,
        homeInfo: {
          status: constant.SUCCESS,
          data: action.data,
        },
      };
    case constant.GET_HOME_FAILURE:
      return {
        ...state,
        homeInfo: {
          status: constant.FAILURE,
          message: action.msg,
        },
      };
    default:
      return state;
  }
}
