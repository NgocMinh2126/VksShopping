import { useState } from "react";
import { helper } from "../../../helper";
export default function MainInfo(props) {
  let { name, image, rating, luotdanhgia, sold, priceafter, pricebefore, quantity } = props;


  const [selectnumber, setAmount] = useState(1);
  function increaseAmount() {
    if (selectnumber <= quantity) {
      return setAmount(selectnumber + 1);
    }
  }
  function descreaseAmount() {
    if (selectnumber > 1) {
      return setAmount(selectnumber - 1);
    }
  }
  return (
    <div>
      <div className="maininfo-container flex ">
        <div className="image">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="flex moreinfo">
            <div className="star">
              {helper.createYellowstar(rating)}
              {helper.createNonstar(rating)}
            </div>
            <div className="number-of-rating">({luotdanhgia} đánh giá)</div>
            <div className="sold">Đã bán {sold}</div>
          </div>
          {helper.discount(pricebefore, priceafter) > 0 ? (
            <div className="price-container">
              <div className="price-after-discount">{helper.priceBreak(priceafter)} ₫</div>
              <div className="flex discount-container">
                <div className="price-before-discount">{helper.priceBreak(pricebefore)} ₫</div>
                <div className="discount">{helper.discount(pricebefore, priceafter)}%</div>
              </div>
            </div>
          ) : (
            <div className="price-container">
              <div className="price-after-discount no-discount">{helper.priceBreak(priceafter)} ₫</div>
            </div>
          )}
          <div className="cart-action">
            Số lượng <br />
            <div className="flex">
              {selectnumber <= 1 ? (
                <button onClick={descreaseAmount} disabled={true}>-</button>
              ) : (
                <button onClick={descreaseAmount}>-</button>
              )}
              <input type="number" value={selectnumber} />
              {selectnumber >= quantity ? (
                <button onClick={increaseAmount} disabled={true}>+</button>
              ) : (
                <button onClick={increaseAmount} >+</button>
              )}
            </div>
            <button id="add-cart-btn">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}