import { constant } from "../constants";
const cartInfo = localStorage.getItem("cartInfo");
const initialState = {
  cartInfo: cartInfo
    ? {
        ...JSON.parse(cartInfo),
      }
    : {
        status: constant.LOADING,
        items: [],
      },
};
export function cart(state = initialState, action) {
  switch (action.type) {
    case constant.GET_CART_SUCCESS:
      return {
        ...state,
        cartInfo: {
          status: constant.SUCCESS,
          ...action.data,
        },
      };
    case constant.GET_CART_FAILURE:
      return {
        ...state,
        cartInfo: {
          items: [],
          status: constant.FAILURE,
        },
      };
    case constant.ADD_CART_SUCCESS:
      return {
        ...state,
        cartInfo: action.data,
      };
    default:
      return state;
  }
}
