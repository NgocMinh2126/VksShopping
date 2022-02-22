import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MainInfo from "./child/MainInfo";
import { constant } from "../../constants";
import { productActions } from "../../actions/productActions";
import DetailInfo from "./child/DetailInfo";

export default function ProductInfoPage(props) {
  const dispatch = useDispatch();
  const Info = useSelector(store => store.product.productInfo);
  let id = "61c04f703b122c8fa6bf2c9b";
  useEffect(() => {
    if (Info.status === constant.LOADING) {
      dispatch(productActions.getProductInfo(id));
    } else console.log(Info.data);
  });
  return (!Info.data ? (<div></div>) : (
    <div>
      <MainInfo
        name={Info.data.name}
        image={Info.data.images}
        rating={Info.data.rating.stars}
        luotdanhgia={Info.data.rating.list.length}
        sold={Info.data.sold}
        priceafter={Info.data.after_discount_price}
        pricebefore={Info.data.before_discount_price}
        quantity={Info.data.quantity}
      />
      <DetailInfo
        attributes={Info.data.attributes}>
      </DetailInfo>
    </div>)
  );
}