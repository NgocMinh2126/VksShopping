import { useSelector } from "react-redux";
import ProductCard from "../../../common/Productcard";
export default function ListProducts(props) {
  const listProduct = useSelector((store) => store.product.listProduct);

  function createProductCard(data) {
    return data.map((v, i) => (
      <ProductCard
        key={v._id}
        _id={v._id}
        name={v.name}
        image={v.images}
        pricebefore={v.before_discount_price}
        priceafter={v.after_discount_price}
        sold={v.sold}
      />
    ));
  }
  return (!listProduct.data ? <div></div> :
    <div className="flex list-product">{createProductCard(listProduct.data)}</div>
  );
}