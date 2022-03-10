import { helper } from "../helper";
export default function ProductCard(props) {
  let { _id, name, pricebefore, sold, priceafter, image } = props;

  return (
    <a className="product-card" href={"/product/" + _id}>
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
        {helper.discount(pricebefore, priceafter) > 0 ? (
          <div className="price_red">
            {helper.priceBreak(priceafter)}đ
          </div>
        ) : (
          <div className="price">
            {helper.priceBreak(pricebefore)}đ
          </div>
        )}
        {helper.discount(pricebefore, priceafter) > 0 && <div className="discount">{helper.discount(pricebefore, priceafter)}%</div>}
      </div>
    </a>
  );
}