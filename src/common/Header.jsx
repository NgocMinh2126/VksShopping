import { useDispatch } from "react-redux";
import { appActions } from "../actions/appActions";
import { constant } from "../constants";
//import { Link } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(appActions.changePopup(constant.PHONE_POPUP))
  }
  return (
    <div className="header-container">
      <div className="top flex">
        <div className="logo">
          <img src="/img/vkookshopping.png" alt="" />
        </div>
        <div className="category-btn-container">
          <button className="category-btn flex">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <div className="search-bar">
          <input placeholder="Tìm kiếm sản phẩm" type="text" />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <a href="/" className="cart flex">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cart-right">
            <div className="number-of-product">106</div>
            <div className="title">Giỏ hàng</div>
          </div>
        </a>
      </div>
      <div className="nav-bar flex">
        <div className="nav-bar-left">
          <a href="/home" className="nav-btn">
            <i className="fa-solid fa-house"></i> Trang chủ
          </a>
          <a href="/product" className="nav-btn">
            Sản phẩm
          </a>
          <a href="/" className="nav-btn">
            Tin tức
          </a>
        </div>
        <div className="nav-bar-right">
          <button
            className="nav-btn"
            onClick={handleLogin}>Đăng nhập
          </button>
          <button
            className="nav-btn borderleft"
            onClick={handleLogin}>Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}