import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import React from "react";
import MainInfo from "./child/MainInfo";
import { constant } from "../../constants";
import { productActions } from "../../actions/productActions";
import DetailInfo from "./child/DetailInfo";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
export default function ProductInfoPage(props) {
  const dispatch = useDispatch();
  const Info = useSelector(store => store.product.productInfo);
  const Rating = useSelector(store => store.product.productRating);
  let id = "61c04f473b122c8fa6bf2c71";
  useEffect(() => {
    if (Info.status === constant.LOADING) {
      dispatch(productActions.getProductInfo(id));
    }
    if (Info.status === constant.SUCCESS) {
      if (Rating.status === constant.LOADING) {
        dispatch(productActions.getProductRating(id));
      }
      document.title = Info.data.name;
    }
  }, [Info]);
  return (
    <React.Fragment>
      <Header></Header>
      <div className="bg" >
        <div className="page" style={{ paddingTop: "20px" }}>
          {!Info.data ? (<div></div>) : (
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
                attributes={Info.data.attributes}
                description={Info.data.description}>
              </DetailInfo>

            </div>)}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}