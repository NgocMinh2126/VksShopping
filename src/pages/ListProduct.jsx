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
  function createProductCard() {
    return listProduct.data.map((v, i) => (
      <ProductCard
        key={i}
        name={v.name}
        image={v.images}
        discount={v.discount}
        price={v.before_discount_price}
        sold={v.sold}
      />
    ));
  }
  return (
    !listProduct ? <div></div> :
      <div className="flex listProduct">{createProductCard()}</div>
  );
}