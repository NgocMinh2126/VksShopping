export default function MainInfo(props) {
  //let { name, image } = props;
  let pro = {
    name: "Dồ Chơi Lắp Ghép Mine_craft - Đồ Chơi Lắp Ghép Phát Triển Tư Duy Cho Trẻ Xây Dụng Thành Phố Theo Tựa Game Nổi Tiếng",
    image: "https://i.ibb.co/tCfJfjK/be0ca1d5fa3103eb98304cb63a46b4c4-jpg.webp",
    danhgia: 4,
    luotdanhgia: 2,
    sold: 100,
    priceafter: 18690000,
    pricebefore: 18890000,
  }
  let star_arr = Array.from(new Array(pro.danhgia), () => 0);
  let nonstar_arr = Array.from(new Array(5 - pro.danhgia), () => 0);
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
  return (
    <div>
      <div className="maininfo-container flex ">
        <div className="image">
          <div className="img-container">
            <img src={pro.image} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="name">{pro.name}</div>
          <div className="flex moreinfo">
            <div className="star">
              {star_arr.map((v, i) => {
                return <i className="fas fa-star yellow_star" key={i}></i>;
              })}
              {nonstar_arr.map((v, i) => {
                return <i className="fas fa-star" key={5 - i}></i>;
              })}
            </div>
            <div className="number-of-rating">({pro.luotdanhgia} đánh giá)</div>
            <div className="sold">Đã bán {pro.sold}</div>
          </div>
          {discount(pro.pricebefore, pro.priceafter) > 0 ? (
            <div className="price-container">
              <div className="price-after-discount">{price_break(pro.priceafter)} ₫</div>
              <div className="flex discount-container">
                <div className="price-before-discount">{price_break(pro.pricebefore)} ₫</div>
                <div className="discount">{discount(pro.pricebefore, pro.priceafter)}%</div>
              </div>
            </div>
          ) : (
            <div className="price-container">
              <div className="price-after-discount no-discount">{price_break(pro.priceafter)} ₫</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}