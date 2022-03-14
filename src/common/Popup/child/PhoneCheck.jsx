import { useDispatch } from "react-redux";
import { useState } from "react"
import { userActions } from "../../../actions/userActions";
export default function PhoneCheck(props) {
  let { closePopup } = props;
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isRequest, setIsRequest] = useState(false);
  function handleInputChange(e) {
    setIsRequest(false);
    setErrMsg("");
    setPhone(e.target.value);
  }
  function handleCompletebtn() {
    if (phone.length === 0) {
      setErrMsg("Vui lòng điền số điện thoại");
      return;
    }
    if (phone.length < 10) {
      setErrMsg("Số điện thoại không hợp lệ!");
      return;
    }
    setErrMsg("");
    setIsRequest(true);
    console.log(JSON.stringify({ phone }))
    dispatch(userActions.checkPhone({ phone }));
  }
  return (
    <div className="modal center">
      <div className="phonecheck-popup">
        <h3>Xin chào</h3>
        <h4>Vui lòng nhập số điện thoại</h4>
        <input
          placeholder="Số điện thoại"
          name="phonenumber"
          type="number"
          onChange={handleInputChange} />
        {
          errMsg && <div className="err-msg">{errMsg}</div>
        }
        {
          !errMsg && isRequest && <div className="err-msg" style={{ color: "#360d5e" }}>Vui lòng chờ...</div>
        }
        <button className="complete-btn" onClick={handleCompletebtn}>
          Tiếp tục
        </button>
        <button className="exit-btn" onClick={closePopup}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}