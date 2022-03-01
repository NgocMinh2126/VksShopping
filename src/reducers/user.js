import { constant } from "../constants";

const innitialState = {
  phone: "",
};
export function user(state = innitialState, action) {
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
