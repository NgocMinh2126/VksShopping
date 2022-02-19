import { constant } from "../constants";

const initialState = {
  listProduct: {
    status: constant.LOADING,
  },
};
export function product(state = initialState, action) {
  switch (action.type) {
    case constant.GET_PURCHASED_PRODUCTS_SUCCESS: {
      return {
        ...state,
        listProduct: {
          status: constant.SUCCESS,
          data: action.data,
        },
      };
    }
    case constant.GET_PURCHASED_PRODUCTS_FAILURE: {
      return {
        ...state,
        listProduct: {
          status: constant.FAILURE,
          data: [],
        },
      };
    }
    default:
      return state;
  }
}
