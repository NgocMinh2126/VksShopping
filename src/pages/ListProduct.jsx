import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { constant } from "../constants";
import { productActions } from "../actions/productActions";
import ProductCard from "../common/Productcard";
export default function ListProduct(props) {
  const dispacth = useDispatch();
  const listProduct = useSelector((store) => store.product.listProduct);
  useEffect(() => {
    if (listProduct.status === constant.LOADING) {
      dispacth(productActions.getProduct());
    } else console.log(listProduct.data);
  });
  function createProductCard(data) {
    return data.map((v, i) => (
      <ProductCard
        key={v._id}
        name={v.name}
        image={v.images}
        pricebefore={v.before_discount_price}
        priceafter={v.after_discount_price}
        sold={v.sold}
      />
    ));
  }
  return (!listProduct.data ? <div></div> :
    <div className="flex listProduct">{createProductCard(listProduct.data)}</div>
  );
}