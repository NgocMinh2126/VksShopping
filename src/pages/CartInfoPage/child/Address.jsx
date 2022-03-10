export default function Address() {
  return (
    <div className="address-container">
      <div className="flex" >
        <div className="title">Giao tới</div>
        <button>Thay đổi?</button>
      </div>
      <div className="flex" style={{ marginTop: "10px" }}>
        <div className="name">Lê Ngọc Minh</div>
        <div className="phone">0392808994</div>
      </div>
      <div className="address">20,Xã Quới Thành, huyện Châu Thành, tỉnh Bến Tre</div>
    </div>
  );
}