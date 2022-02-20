import React from "react"
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Categories from "../../common/Categories"
import ListProducts from "./child/ListProduct";
export default function ProductPage() {
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
            <ListProducts ></ListProducts>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}