function priceBreak(price) {
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
function priceAfterDiscount(price, discount) {
  if (discount > 0) {
    price = (price * discount) / 100;
  }
  return price;
}
function discount(pricebefore, priceafter) {
  let kq = 0;
  if (pricebefore !== priceafter) {
    kq = Math.round(((pricebefore - priceafter) / pricebefore) * 100);
  }
  return kq;
}
function createYellowstar(star) {
  let star_arr = Array.from(new Array(star), () => 0);
  return star_arr.map((v, i) => {
    return <i className="fas fa-star yellow_star" key={i} />;
  });
}
function createNonstar(star) {
  let nonstar_arr = Array.from(new Array(5 - star), () => 0);
  return nonstar_arr.map((v, i) => {
    return <i className="fas fa-star" key={5 - i} />;
  });
}
export const helper = {
  priceBreak,
  discount,
  createNonstar,
  createYellowstar,
};
