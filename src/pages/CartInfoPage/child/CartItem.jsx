import { useState } from "react"
import { useDispatch } from "react-redux";
import { appActions } from "../../../actions/appActions";
import { constant } from "../../../constants";
import { helper } from "../../../helper";
import { cartActions } from "../../../actions/cartActions";
export default function CartItem(props) {
  let { _id, img, name, after_discount_price, quantity, amount, items_in_time_id } = props;
  const dispatch = useDispatch();
  const [selectNumber, setSelectNumber] = useState(amount);
  let product = {
    id: items_in_time_id,
    quantity: 0,
  }
  function descreaseQuantity() {
    if (selectNumber > 1) {
      if (selectNumber - 1 !== amount) {
        product.quantity = selectNumber - 1;
        dispatch(cartActions.changeQuantity(product));
      }
      setSelectNumber(selectNumber - 1);
    }
  }
  function increaseQuantity() {
    if (selectNumber < quantity) {
      if (selectNumber - 1 !== amount) {
        product.quantity = selectNumber + 1;
        dispatch(cartActions.changeQuantity(product));
      }
      setSelectNumber(selectNumber + 1);
    }
  }
  function handleDeleteProduct() {
    dispatch(appActions.changePopup(constant.SELECT_POPUP, "", {
      id: items_in_time_id,
      quantity: 0,
      action: function action(data, setErrMsg) {
        setErrMsg("Vui lòng chờ...");
        dispatch(cartActions.changeQuantity(data));
      }
    }));
  }
  function handleInputChange(e) {
    let number = 0;
    if (e.target.value) {
      number = parseInt(e.target.value);
      if (number !== amount) {
        if (number === 0) {
          handleDeleteProduct();
          setSelectNumber(number);
          return;
        }
        product.quantity = number;
        dispatch(cartActions.changeQuantity(product));
        setSelectNumber(number);
      }
    } else {
      setSelectNumber(number);
    }
  }
  return (
    <div className="cartitem-container flex">
      <div className="img">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
      </div>
      <a className="title" href={"/product/" + _id}>{name}</a>
      <div className="price">{helper.priceBreak(after_discount_price)}₫ </div>
      <div className="flex amount">
        {selectNumber > 1 ?
          <button onClick={descreaseQuantity}>-</button> :
          <button onClick={descreaseQuantity} disabled={true}>-</button>}
        <input
          onChange={handleInputChange}
          type="number"
          value={selectNumber} />
        {selectNumber < quantity ?
          <button onClick={increaseQuantity}>+</button> :
          <button onClick={increaseQuantity} disabled={true}>+</button>}
      </div>
      <button
        onClick={handleDeleteProduct}
        className="delete-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}