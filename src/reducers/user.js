import { constant } from "../constants";

const initialState = {
  phone: "",
};
export function user(state = initialState, action) {
  switch (action.type) {
    case constant.REQUEST_PHONE_CHECK: {
      return {
        ...state,
        phone: action.phone,
      };
    }

    default:
      return state;
  }
}
