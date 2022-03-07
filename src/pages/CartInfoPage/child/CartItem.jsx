import { useState } from "react"
import { helper } from "../../../helper"
export default function CartItem(props) {
  let { _id, img, name, after_discount_price, quantity, amount } = props;
  console.log(amount);

  const [selectNumber, setQuantity] = useState(amount);
  function descreaseQuantity() {
    if (selectNumber > 1) {
      setQuantity(selectNumber - 1);
    }
  }
  function increaseQuantity() {
    if (selectNumber < quantity) {
      setQuantity(selectNumber + 1);
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
        <input type="number" value={selectNumber} />
        {selectNumber < quantity ?
          <button onClick={increaseQuantity}>+</button> :
          <button onClick={increaseQuantity} disabled={true}>+</button>}
      </div>
      <button className="delete-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}