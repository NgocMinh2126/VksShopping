import { useSelector } from "react-redux";
import { helper } from "../../../helper";
export default function PriceInfo() {
  const cartInfo = useSelector(store => store.cart.cartInfo);
  return (
    <div className="priceinfo-container">
      <div className="flex">
        <div className="title">Tạm tính</div>
        <div className="price">₫ {helper.priceBreak(cartInfo.total_before_discount)}</div>
      </div>
      <div className="flex">
        <div className="title">Giảm giá</div>
        <div className="price">
          ₫ {helper.priceBreak(cartInfo.total_before_discount - cartInfo.total_after_discount)}
        </div>
      </div>
      <div className="flex total">
        <div className="title">Tổng cộng</div>
        <div className="price">₫ {helper.priceBreak(cartInfo.total_after_discount)}</div>
      </div>
      <button>Đặt hàng</button>
    </div>
  )
}