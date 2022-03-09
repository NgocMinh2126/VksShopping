import React from "react"
import { useSelector } from "react-redux";
import Footer from "../../common/Footer";
import Header from "../../common/Header"
import CartItem from "./child/CartItem";
import Popup from "../../common/Popup/Popup"
export default function CartInfoPage(props) {
  const cartInfo = useSelector(store => store.cart.cartInfo);
  function createCardItem(items, items_in_time) {
    if (items.length === 0) {
      return <div style={{ textAlign: "center" }}>Chưa có sản phẩm trong giỏ hàng</div>
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
  return (
    <React.Fragment>
      <Header />
      <div className="bg">
        <div className="page" style={{ paddingTop: "10px" }}>
          {createCardItem(cartInfo.items, cartInfo.items_in_time)}
        </div>
        <Popup />
      </div>
      <Footer />
    </React.Fragment>
  );
}