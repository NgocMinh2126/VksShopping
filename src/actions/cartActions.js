import { constant } from "../constants";
import { cartService } from "../services/cartService";
import { appActions } from "./appActions";
import { toast } from "react-toastify";
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
function addCart(product) {
  return (dispatch) => {
    cartService.addCart(product).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
        toast.success(" Đã thêm vào giỏ hàng", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  function success(data) {
    localStorage.setItem("cartInfo", JSON.stringify(data));
    return { type: constant.ADD_CART_SUCCESS, data };
  }
  function failure() {}
}
function changeQuantity(product) {
  return (dispatch) => {
    cartService.changeQuantity(product).then((res) => {
      if (res.status === constant.SUCCESS) {
        dispatch(success(res.data));
        if (product.quantity === 0) {
          dispatch(
            appActions.changePopup(
              constant.MESSAGE_POPUP,
              "Đã xóa sản phẩm khỏi giỏ hàng"
            )
          );
        }
      }
    });
  };
  function success(data) {
    localStorage.setItem("cartInfo", JSON.stringify(data));

    return { type: constant.ADD_CART_SUCCESS, data };
  }
}
export const cartActions = {
  getCartInfo,
  addCart,
  changeQuantity,
};
