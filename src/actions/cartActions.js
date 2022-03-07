import { constant } from "../constants";
import { cartService } from "../services/cartService";
function getCartInfo() {
  console.log("hihi");
  return (dispacth) => {
    cartService.getCartInfo().then((res) => {
      if (res.status === constant.SUCCESS) {
        dispacth(success(res.data));
      } else {
        dispacth(failure());
      }
    });
  };
  function success(data) {
    localStorage.setItem("cartInfo", JSON.stringify(data));
    return { type: constant.GET_CART_SUCCESS, data };
  }
  function failure() {
    return { type: constant.GET_CART_FAILURE };
  }
}
function addCart(product) {
  return (dispatch) => {
    cartService.addCart(product).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
      }
    });
  };
  function success(data) {
    localStorage.setItem("cartInfo", JSON.stringify(data));
    return { type: constant.ADD_CART_SUCCESS, data };
  }
  function failure() {}
}
export const cartActions = {
  getCartInfo,
  addCart,
};
