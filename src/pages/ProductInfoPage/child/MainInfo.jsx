import { useState } from "react";
export default function MainInfo(props) {
  let { name, image, rating, luotdanhgia, sold, priceafter, pricebefore, quantity } = props;

  let star_arr = Array.from(new Array(rating), () => 0);
  let nonstar_arr = Array.from(new Array(5 - rating), () => 0);
  function price_break(price) {
    price = price.toString();
    let giatien = "";
    let count = price.length % 3;
    for (let i = 0; i < price.length; i++) {
      giatien += price[i];
      count--;
      if (count % 3 === 0 && i < price.length - 1) {
        giatien += ".";
      }
    }
    return giatien;
  }
  function discount(pricebefore, priceafter) {
    let kq = 0;
    if (pricebefore !== priceafter) {
      kq = Math.round(((pricebefore - priceafter) / pricebefore) * 100);
    }
    return kq;
  }
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
              {star_arr.map((v, i) => {
                return <i className="fas fa-star yellow_star" key={i}></i>;
              })}
              {nonstar_arr.map((v, i) => {
                return <i className="fas fa-star" key={5 - i}></i>;
              })}
            </div>
            <div className="number-of-rating">({luotdanhgia} đánh giá)</div>
            <div className="sold">Đã bán {sold}</div>
          </div>
          {discount(pricebefore, priceafter) > 0 ? (
            <div className="price-container">
              <div className="price-after-discount">{price_break(priceafter)} ₫</div>
              <div className="flex discount-container">
                <div className="price-before-discount">{price_break(pricebefore)} ₫</div>
                <div className="discount">{discount(pricebefore, priceafter)}%</div>
              </div>
            </div>
          ) : (
            <div className="price-container">
              <div className="price-after-discount no-discount">{price_break(priceafter)} ₫</div>
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