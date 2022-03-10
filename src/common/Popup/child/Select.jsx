import { useState } from "react";
import { useSelector } from "react-redux";

export default function Select(props) {
  const popup = useSelector(store => store.app.popup);
  const [errMsg, setErrMsg] = useState("");
  let popupInfo = { ...popup.additionalInfo };
  let product = {
    id: popupInfo.id,
    quantity: popupInfo.quantity,
  }
  let { closePopup } = props
  return (
    <div className="modal center">
      <div className="select-popup">
        <div className="msg">{popup.message}</div>
        <div className="err-msg">{errMsg}</div>
        <div className="flex" style={{ marginTop: "20px" }}>
          <button
            style={{ marginRight: "20px" }}
            onClick={closePopup}>Hủy bỏ</button>
          <button
            onClick={() => { popupInfo.action(product, setErrMsg) }}
            className="complete-btn">Xác nhận</button>
        </div>
      </div>
    </div>
  );
}