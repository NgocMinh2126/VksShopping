import { useState } from "react";
export default function PaymentMethod() {
  const [payment, setPayment] = useState(1);
  function handleInputChange(e) {
    setPayment(parseInt(e.target.value));
  }
  return (
    <div className="payment-container">
      <div className="title">Phương thức thanh toán</div>
      <div className="flex">
        <input
          onChange={handleInputChange}
          checked={payment === 1}
          value="1"
          name="payment"
          type="checkbox"
          id="pm1" />
        <label htmlFor="pm1">Thanh toán khi nhận hàng</label>
      </div>
      <div className="flex">
        <input
          onChange={handleInputChange}
          checked={payment === 2}
          name="payment"
          value="2"
          type="checkbox"
          id="pm2" />
        <label htmlFor="pm2">Thanh toán chuyển khoản</label>
      </div>
    </div>
  );
}