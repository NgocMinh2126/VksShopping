import { constant } from "../constants";
import { productService } from "../services/productService";
function getProduct(page) {
  return (dispatch) => {
    productService.getProduct(page).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data, res.total_page));
      } else dispatch(failure(res.code, res.msg));
    });
  };
  function success(data, page) {
    return { type: constant.GET_PRODUCTS_SUCCESS, data, total_page: page };
  }
  function failure(code, msg) {
    return { type: constant.GET_PRODUCTS_FAILURE, code, msg };
  }
}
function getProductInfo(id) {
  return (dispatch) => {
    productService.getProductInfo(id).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
      } else dispatch(failure(res.code, res.msg));
    });
  };
  function success(data) {
    return { type: constant.GET_PRODUCT_SUCCESS, data };
  }
  function failure(code, msg) {
    return { type: constant.GET_PRODUCT_FAILURE, code, msg };
  }
}
function getProductRating(id) {
  return (dispatch) => {
    productService.getProductRating(id).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
      } else dispatch(failure(res.code, res.msg));
    });
  };
  function success(data) {
    return { type: constant.GET_PRODUCT_REVIEW_SUCCESS, data };
  }
  function failure(code, msg) {
    return { type: constant.GET_PRODUCT_REVIEW_FAILURE, code, msg };
  }
}
function getSimilarProduct(productid) {
  return (dispatch) => {
    productService.getSimilarProduct(productid).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
      } else dispatch(failure(res.code, res.msg));
    });
  };
  function success(data) {
    return { type: constant.GET_SIMILAR_PRODUCTS_SUCCESS, data };
  }
  function failure(code, msg) {
    return { type: constant.GET_SIMILAR_PRODUCTS_FAILURE, code, msg };
  }
}
export const productActions = {
  getProduct,
  getProductInfo,
  getProductRating,
  getSimilarProduct,
};
