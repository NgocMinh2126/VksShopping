import { constant } from "../constants";

const initialState = {
  message: "",
  popup: {
    message: "",
    type: constant.NO_POPUP,
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
        },
      };
    default:
      return state;
  }
}
