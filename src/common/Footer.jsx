import React from "react";
export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-top flex">
          <div className="footer-left">
            <img src="/img/vkookshopping2.png" alt="" />
            <div className="link-list">
              <a href="/" className="link-btn ">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="/" className="link-btn borderleft">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="/" className="link-btn borderleft">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
          <div className="footer-right flex">
            <div className="contact ">
              <div className="title">Liên hệ</div>
              <div className="info margintop10px">
                Địa chỉ:
                <span> 28 Đường Nguyễn Thị Minh Khai P. Bến Nghé Quận 1 Tp Hồ Chí Minh</span>
              </div>
              <div className="info margintop10px">
                Điện thoại:
                <span> 039 2808 994</span>
              </div>
              <div className="info margintop10px">
                Mail:
                <span> ngocminh.2126@gmail.com</span>
              </div>
            </div>
            <div className="about-us ">
              <div className="title">Về chúng tôi</div>
              <a href="/" className="aboutus-btn margintop10px">Liên hệ</a>
              <a href="/" className="aboutus-btn margintop10px">Giới thiệu</a>
              <a href="/" className="aboutus-btn margintop10px">Trợ giúp</a>
              <a href="/" className="aboutus-btn margintop10px">Chính sách và quyền riêng tư</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2022 Bản quyền thuộc về Ngoc Minh - Vks shopping
        </div>
      </div>
    </React.Fragment>
  );
}