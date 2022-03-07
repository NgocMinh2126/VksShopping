import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../actions/appActions";
import { cartActions } from "../actions/cartActions";
import { userActions } from "../actions/userActions.";
import { constant } from "../constants";
import Categories from "./Categories";
export default function Header() {
  const token = useSelector(store => store.user.token);
  const categories = useSelector(store => store.category.listCate);
  const userInfo = useSelector(store => store.user.userInfo);
  const cartInfo = useSelector(store => store.cart.cartInfo);
  const [dropdownActive, setDropdownActive] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && cartInfo.status === constant.LOADING) {
      dispatch(cartActions.getCartInfo());
    }
  })
  function handleLogin() {
    dispatch(appActions.changePopup(constant.PHONE_POPUP))
  }
  function createUserInfo() {
    if (token) {
      return (
        <div className="nav-bar-right">
          <div className="header-dropdown">
            <button
              onClick={() => { handleStateDropdown("myaccount") }}
              className="nav-btn">
              Tài khoản của tôi
              <i style={{ marginLeft: "0.5em" }}
                className="fas fa-caret-down" ></i>
            </button>
            <div className=
              {dropdownActive === "myaccount" ?
                "dropdown-menu menu active" :
                "dropdown-menu menu"}>
              <h3>{userInfo.name}</h3>
              <ul>
                <li className="flex">
                  <i className="fa-solid fa-heart"></i>
                  Sản phẩm yêu thích
                </li>
                <li className="flex">
                  <i className="fa-solid fa-arrows-rotate"></i>
                  Cập nhật thông tin
                </li>
                <li
                  onClick={handleLogout}
                  className="flex">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Thoát tài khoản
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return (
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
      )
    }
  }
  function handleStateDropdown(type) {
    if (dropdownActive === type) {
      setDropdownActive("");
    } else {
      setDropdownActive(type);
    }
  }
  function createCategory() {
    return (<div
      className={dropdownActive === "categories"
        ? "dropdown-menu menu active" :
        "dropdown-menu menu"}>
      <h3>Danh sách sản phẩm</h3>
      <Categories />
    </div>);
  }
  function handleLogout() {
    dispatch(userActions.logout());
  }
  return (
    <div className="header-container">
      <div className="top flex">
        <div className="logo">
          <img src="/img/vkookshopping.png" alt="" />
        </div>
        <div className="category-btn-container header-dropdown">
          <button
            onClick={() => { handleStateDropdown("categories") }}
            className="category-btn flex">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          {createCategory()}
        </div>
        <div className="search-bar">
          <input placeholder="Tìm kiếm sản phẩm" type="text" />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <a href="/cart" className="cart flex">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cart-right">
            <div className="number-of-product">{token ? cartInfo.items.length : 0}</div>
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
        {createUserInfo()}
      </div>
    </div>
  );
}