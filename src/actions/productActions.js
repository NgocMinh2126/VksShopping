import { constant } from "../constants";
import { productService } from "../services/productService";
function getProduct() {
  return (dispatch) => {
    productService.getProduct().then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
      } else dispatch(failure(res.code, res.msg));
    });
  };
  function success(data) {
    return { type: constant.GET_PURCHASED_PRODUCTS_SUCCESS, data };
  }
  function failure(code, msg) {
    return { type: constant.GET_PURCHASED_PRODUCTS_FAILURE, code, msg };
  }
}
export const productActions = {
  getProduct,
};
