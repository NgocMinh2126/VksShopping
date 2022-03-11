import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../common/Categories";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { constant } from "../../constants";
import { categoryActions } from "../../actions/categoryActions";
import Slider from "react-slick/lib/slider";
export default function HomePage() {
  const dispatch = useDispatch();
  const listCate = useSelector(store => store.category.listCate);
  var setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    autoplay: true,
    autoplaySpeed: 5000
  }
  useEffect(() => {
    if (listCate.status === constant.LOADING) {
      dispatch(categoryActions.getCategories());
    }
  })
  return (
    <React.Fragment>
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
              {/* <Slider {...setting}>

              </Slider> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}