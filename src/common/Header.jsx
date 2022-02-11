//import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="header-container">
      <div className="top flex">
        <div className="logo">
          <img src="/img/vkookshopping.png" alt="" />
        </div>
        <div className="search-bar">
          <input placeholder="Tìm kiếm sản phẩm" type="text" />
          <button className="search-btn">
            {/* <img src="/img/search_icon.png" alt="" /> */}
            <i class="fa-solid fa-glass"></i>
          </button>
        </div>
      </div>
      <div className="nav-bar">

      </div>
    </div>
  );
}