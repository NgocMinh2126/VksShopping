import React from "react"
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../common/Footer";
import Header from "../../common/Header"
import CartItem from "./child/CartItem";
import Popup from "../../common/Popup/Popup"
import Address from "./child/Address";
import PaymentMethod from "./child/PaymentMethod";
import PriceInfo from "./child/PriceInfo";
import { appActions } from "../../actions/appActions";
import { constant } from "../../constants";
export default function CartInfoPage(props) {
  const dispatch = useDispatch();
  const cartInfo = useSelector(store => store.cart.cartInfo);
  function createCardItem(items, items_in_time) {
    if (items.length === 0) {
      return <div style={{ textAlign: "center", fontSize: "18px" }}>Chưa có sản phẩm trong giỏ hàng</div>
    } else {
      return items.map((v, i) => {
        return (
          <CartItem
            key={v._id}
            _id={v._id}
            name={v.name}
            amount={items_in_time[i].quantity}
            quantity={v.quantity}
            img={v.images}
            after_discount_price={v.after_discount_price}
            items_in_time_id={items_in_time[i]._id} />
        );
      })
    }
  }
  function handleLogin() {
    dispatch(appActions.changePopup(constant.PHONE_POPUP));
  }
  return (
    <React.Fragment>
      <Header />
      <div className="bg">
        <div className="page" style={{ padding: "20px 0 20px 0" }}>
          {cartInfo.items.length !== 0 ? (
            <div className="flex">
              <div className="cart-item">
                {createCardItem(cartInfo.items, cartInfo.items_in_time)}
              </div>
              <div className="other">
                <Address />
                <PaymentMethod />
                <PriceInfo />
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center" }} className="cartinfo-error">
              <img src="/img/oops.png" alt="" />
              <div className="msg">
                Bạn chưa đăng nhập!! Vui lòng đăng nhập để xem giỏ hàng
              </div>
              <button onClick={handleLogin}>Đăng nhập</button>
            </div>
          )}
        </div>
        <Popup />
      </div>
      <Footer />
    </React.Fragment>
  );
}