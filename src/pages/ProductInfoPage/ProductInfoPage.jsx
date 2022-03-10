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
import SimilarProduct from "./child/SimilarProduct";
import { useParams } from "react-router-dom";
import Popup from "../../common/Popup/Popup";
export default function ProductInfoPage(props) {
  const dispatch = useDispatch();
  const Info = useSelector(store => store.product.productInfo);
  const Rating = useSelector(store => store.product.productRating);
  let param = useParams();
  console.log(param.id);
  useEffect(() => {
    if (Info.status === constant.LOADING) {
      dispatch(productActions.getProductInfo(param.id));
    }
    if (Info.status === constant.SUCCESS) {
      if (Rating.status === constant.LOADING) {
        dispatch(productActions.getProductRating(param.id));
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
                _id={Info.data._id}
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
          <SimilarProduct></SimilarProduct>
        </div>
      </div>
      <Popup />
      <Footer></Footer>
    </React.Fragment>
  );
}