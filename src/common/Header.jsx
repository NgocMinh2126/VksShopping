//import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-container">
      <div className="top flex">
        <div className="logo">
          <img src="/img/vkookshopping.png" alt="" />
        </div>
        <div className="category-btn-container">
          <button className="category-btn flex">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <div className="search-bar">
          <input placeholder="Tìm kiếm sản phẩm" type="text" />
          <button className="search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
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
          <a href="/" className="nav-btn">
            <i className="fa-solid fa-house"></i> Trang chủ
          </a>
          <a href="/" className="nav-btn">
            Sản phẩm
          </a>
          <a href="/" className="nav-btn">
            Tin tức
          </a>
        </div>
        <div className="nav-bar-right">
          <a href="/" className="nav-btn">Đăng nhập</a>
          <a href="/" className="nav-btn borderleft">Đăng ký</a>
        </div>
      </div>
    </div>
  );
}