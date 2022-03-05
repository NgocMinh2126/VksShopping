import { constant } from "../constants";
import { cartService } from "../services/cartService";
function getCartInfo() {
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
export const cartActions = {
  getCartInfo,
};
