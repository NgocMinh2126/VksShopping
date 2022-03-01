export default function PhoneCheck(props) {
  return (
    <div className="modal center">
      <div className="phonecheck-popup">
        <h3>Xin chào</h3>
        <h4>Vui lòng nhập số điện thoại</h4>
        <input
          placeholder="Số điện thoại"
          name="phonenumber"
          type="number" />
        <button className="complete-btn">
          Tiếp tục
        </button>
      </div>
    </div>
  );
}