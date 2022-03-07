import React from "react"
import Footer from "../../common/Footer";
import Header from "../../common/Header"
import CartItem from "./child/CartItem";
export default function CartInfoPage(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="bg">
        <div className="page" style={{ paddingTop: "10px" }}>
          <CartItem />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}