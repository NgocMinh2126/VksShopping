import React from "react"
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Categories from "../../common/Categories"
import PageBreak from "../../common/PageBreak"
import ListProducts from "./child/ListProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { constant } from "../../constants";
import { productActions } from "../../actions/productActions";
export default function ProductPage() {
  const dispacth = useDispatch();
  const listProduct = useSelector((store) => store.product.listProduct);
  useEffect(() => {
    if (listProduct.status === constant.LOADING) {
      dispacth(productActions.getProduct());
    } else console.log(listProduct.data);
  });
  return (
    <React.Fragment>
      <Header></Header>
      <div className="bg">
        <div className=" flex page">
          <div className="flex product-container ">
            <div className="category hide-scroll">
              <div className="name">
                Danh mục sản phẩm
              </div>
              <div>
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
      <Footer></Footer>
    </React.Fragment >
  );
}