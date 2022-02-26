import { constant } from "../constants";

const initialState = {
  listProduct: {
    status: constant.LOADING,
  },
  productInfo: {
    status: constant.LOADING,
  },
  productRating: {
    status: constant.LOADING,
  },
};
export function product(state = initialState, action) {
  switch (action.type) {
    case constant.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        listProduct: {
          status: constant.SUCCESS,
          data: action.data,
          total_page: action.total_page,
        },
      };
    }
    case constant.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        listProduct: {
          status: constant.FAILURE,
          total_page: action.total_page,
          data: [],
        },
      };
    }
    case constant.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        productInfo: {
          status: constant.SUCCESS,
          data: action.data,
        },
      };
    }
    case constant.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        productInfo: {
          status: constant.FAILURE,
          data: {},
        },
      };
    }
    case constant.GET_PRODUCT_REVIEW_SUCCESS: {
      return {
        ...state,
        productRating: {
          status: constant.SUCCESS,
          data: action.data,
        },
      };
    }
    case constant.GET_PRODUCT_REVIEW_FAILURE: {
      return {
        ...state,
        productRating: {
          status: constant.FAILURE,
          data: [],
        },
      };
    }
    default:
      return state;
  }
}
