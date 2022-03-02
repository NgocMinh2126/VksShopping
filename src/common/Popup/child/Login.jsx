export default function Login(props) {
  let { closePopup } = props;
  return (
    <div className="modal center">
      <div className="login-popup">
        <h3>Nhập mật khẩu</h3>
        <div >Vui lòng nhập mật khẩu của số điện thoại
          <span> 0392808994</span>
        </div>
        <input
          name="password"
          type="password"
          placeholder="Nhập mật khẩu" />
        <div className="flex">
          <button className="back-btn">Quay lại</button>
          <button className="complete-btn">Đăng nhập</button>
        </div>
        <button className="exit-btn" onClick={closePopup}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div >
  );
}