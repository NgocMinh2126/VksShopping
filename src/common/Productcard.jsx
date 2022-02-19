export default function ProductCard(props) {
  let { name, price, sold, discount, image } = props;

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
  function priceafterdiscount(price, discount) {
    if (discount > 0) {
      price = (price * discount) / 100;
    }
    return price;
  }
  return (
    <div className="product-card">
      <div className="image">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="name">{name}</div>
      <div className="row">
        <div className="sold">Đã bán {sold}</div>
      </div>
      <div className="row">
        {discount > 0 ? (
          <div className="price_red">
            {price_break(priceafterdiscount(price, discount))}đ
          </div>
        ) : (
          <div className="price">
            {price_break(priceafterdiscount(price, discount))}đ
          </div>
        )}
        {discount !== 0 && <div className="discount">{discount}%</div>}
      </div>
    </div>
  );
}