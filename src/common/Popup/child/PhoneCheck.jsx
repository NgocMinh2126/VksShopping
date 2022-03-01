import { useDispatch } from "react-redux";
import { appActions } from "../../../actions/appActions";
import { constant } from "../../../constants";
export default function PhoneCheck(props) {
  const dispatch = useDispatch();
  function handleCompletebtn() {
    dispatch(appActions.changePopup(constant.REGIS_POPUP));
  }
  return (
    <div className="modal center">
      <div className="phonecheck-popup">
        <h3>Xin chào</h3>
        <h4>Vui lòng nhập số điện thoại</h4>
        <input
          placeholder="Số điện thoại"
          name="phonenumber"
          type="number" />
        <button className="complete-btn" onClick={handleCompletebtn}>
          Tiếp tục
        </button>
      </div>
    </div>
  );
}