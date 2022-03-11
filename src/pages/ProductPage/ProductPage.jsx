import React from "react"
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Categories from "../../common/Categories"
import PageBreak from "../../common/PageBreak"
import ListProducts from "./child/ListProducts"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { constant } from "../../constants";
import { productActions } from "../../actions/productActions";
import { useSearchParams } from "react-router-dom"
import Popup from "../../common/Popup/Popup"
import LoadingPage from "../../common/LoadingPage"
import { categoryActions } from "../../actions/categoryActions"
export default function ProductPage() {
  let link = "";
  const dispatch = useDispatch();
  const listCate = useSelector(store => store.category.listCate);
  const listProduct = useSelector((store) => store.product.listProduct);
  const [params, setParam] = useSearchParams();
  link = params.toString();
  useEffect(() => {
    if (listProduct.status === constant.LOADING) {
      dispatch(productActions.getProduct(link));
    } else console.log(listProduct.data);
    if (listCate.status === "LOADING") {
      dispatch(categoryActions.getCategories());
    }
  });
  return (
    <React.Fragment>
      {listProduct.data.length === 0 ||
        listCate.data.length === 0 ? (
        <LoadingPage />
      ) : (
        <div>
          <Header></Header>
          <div className="bg">
            <div className=" flex page">
              <div className="flex product-container ">
                <div className="category">
                  <div className="name">
                    Danh mục sản phẩm
                  </div>
                  <div style={{ height: "300px" }}>
                    <Categories ></Categories>
                  </div>
                </div>
                <div className="products">
                  <ListProducts ></ListProducts>
                  <PageBreak
                    totalpage={listProduct.total_page}></PageBreak>
                </div>
              </div>
            </div>
          </div>
          <Popup />
          <Footer></Footer>
        </div>
      )}
    </React.Fragment >
  );
}