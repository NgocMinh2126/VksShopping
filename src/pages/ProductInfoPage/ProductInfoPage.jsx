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
  const productInfo = useSelector(store => store.product.productInfo);
  const Rating = useSelector(store => store.product.productRating);
  const similarProduct = useSelector(store => store.product.similarProduct);
  let param = useParams();
  console.log(param.id);
  useEffect(() => {
    if (productInfo.status === constant.LOADING) {
      dispatch(productActions.getProductInfo(param.id));
    }
    if (productInfo.status === constant.SUCCESS) {
      if (Rating.status === constant.LOADING) {
        dispatch(productActions.getProductRating(param.id));
      }
      if (similarProduct.status === constant.LOADING) {
        dispatch(productActions.getSimilarProduct(param.id));
      }
      document.title = productInfo.data.name;
    }
  }, [productInfo]);
  return (
    <React.Fragment>
      <Header></Header>
      <div className="bg" >
        <div className="page" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {!productInfo.data ? (<div></div>) : (
            <div>
              <MainInfo
                _id={productInfo.data._id}
                name={productInfo.data.name}
                image={productInfo.data.images}
                rating={productInfo.data.rating.stars}
                luotdanhgia={productInfo.data.rating.list.length}
                sold={productInfo.data.sold}
                priceafter={productInfo.data.after_discount_price}
                pricebefore={productInfo.data.before_discount_price}
                quantity={productInfo.data.quantity}
              />
              <DetailInfo
                attributes={productInfo.data.attributes}
                description={productInfo.data.description}>
              </DetailInfo>
              <SimilarProduct
                listSimilar={similarProduct.data}>
              </SimilarProduct>
            </div>)}

        </div>
      </div>
      <Popup />
      <Footer></Footer>
    </React.Fragment>
  );
}