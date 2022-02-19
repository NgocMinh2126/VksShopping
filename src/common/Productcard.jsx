export default function ProductCard(props) {
  let { name, price, sold, discount, image } = props;

  //let star_arr = Array.from(new Array(danhgia), () => 0);
  //let nonstar_arr = Array.from(new Array(5 - danhgia), () => 0);
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
        {/* <div className="star">
          {star_arr.map((v, i) => {
            return <i className="fas fa-star yellow_star" key={i}></i>;
          })}
          {nonstar_arr.map((v, i) => {
            return <i className="fas fa-star" key={5 - i}></i>;
          })}
        </div> */}
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