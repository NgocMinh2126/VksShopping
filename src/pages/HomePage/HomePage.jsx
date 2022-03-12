import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../common/Categories";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { constant } from "../../constants";
import { categoryActions } from "../../actions/categoryActions";
import Slider from "react-slick/lib/slider";
import { appActions } from "../../actions/appActions";
import NextButton from "../../common/NextButton";
import PreviousButton from "../../common/PreviousButton";
import ProductSection from "./child/ProductSection";
import LoadingPage from "../../common/LoadingPage";
import Popup from "../../common/Popup/Popup"
export default function HomePage() {
  const dispatch = useDispatch();
  const listCate = useSelector(store => store.category.listCate);
  const homeInfo = useSelector(store => store.app.homeInfo);
  console.log(homeInfo);
  var setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />,
  }
  useEffect(() => {
    if (homeInfo.status === constant.LOADING) {
      dispatch(appActions.getHomeInfo());
      if (listCate.status === constant.LOADING) {
        dispatch(categoryActions.getCategories());
      }
    }
  })
  function createBanners(banners) {
    console.log(banners.length);
    return banners.map((v, i) => {
      return (
        <div className="image" key={v._id}>
          <div className="img-container">
            <img src={v.image} alt="" />
          </div>
        </div>)
    })
  }
  return (
    <React.Fragment>
      {homeInfo.status === constant.LOADING ? (
        <LoadingPage />
      ) : (
        <div>
          <Header />
          <div className="bg">
            <div className="page" style={{ padding: "20px 0 20px 0" }}>
              <div className="flex slider-container">
                <div className="category">
                  <div className="name">
                    Danh mục sản phẩm
                  </div>
                  <div style={{ height: "300px" }}>
                    <Categories />
                  </div>
                </div>
                <div className="home-slider-container">
                  <Slider {...setting}>
                    {createBanners(homeInfo.data.banners)}
                  </Slider>
                </div>
              </div>
              <div className="hot-product">
                <ProductSection
                  title="Sản phẩm nổi bật"
                  listProduct={homeInfo.data.hot_products} />
              </div>
              <div className="new-product">
                <ProductSection
                  title="Sản phẩm mới"
                  listProduct={homeInfo.data.new_products} />
              </div>
            </div>
          </div>
          <Footer />
          <Popup />
        </div>
      )}

    </React.Fragment>
  );
}