import { useState } from "react"
import { helper } from "../../../helper"
export default function CartItem(props) {
  //let {id,img,name,price}=props;
  let info = {
    name: "Surface Book 2 15 Inch Core I7 Ram 16Gb 512Gb (New) - Hàng chính hãng",
    img: "https://i.ibb.co/RvCmfq7/8fcbd6abc1ac716d07b3593f9b97f53b.jpg",
    amount: 2,
    after_discount_price: 58000000,
    quantity: 10
  }

  const [selectNumber, setQuantity] = useState(info.amount);
  function descreaseQuantity() {
    if (selectNumber > 1) {
      setQuantity(selectNumber - 1);
    }
  }
  function increaseQuantity() {
    if (selectNumber < info.quantity) {
      setQuantity(selectNumber + 1);
    }
  }
  return (
    <div className="cartitem-container flex">
      <div className="img">
        <div className="img-container">
          <img src={info.img} alt="" />
        </div>
      </div>
      <a className="title" href={"/product/" + info.id}>{info.name}</a>
      <div className="price">{helper.priceBreak(info.after_discount_price)}₫ </div>
      <div className="flex amount">
        {selectNumber > 1 ?
          <button onClick={descreaseQuantity}>-</button> :
          <button onClick={descreaseQuantity} disabled="true">-</button>}
        <input type="number" value={selectNumber} />
        {selectNumber < info.quantity ?
          <button onClick={increaseQuantity}>+</button> :
          <button onClick={increaseQuantity} disabled="true">+</button>}
      </div>
      <button className="delete-btn"><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}