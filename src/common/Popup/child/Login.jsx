import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { userActions } from "../../../actions/userActions.";
import { appActions } from "../../../actions/appActions";
import { constant } from "../../../constants";

export default function Login(props) {
  let { closePopup } = props;
  const dispatch = useDispatch();
  const phone = useSelector(store => store.user.phone);
  const message = useSelector(store => store.user.message);
  const [errMsg, setErrMsg] = useState("");
  const [isRequest, setIsRequest] = useState(false);
  const [userInfo, setUserInfo] = useState({
    phone: phone,
    password: ""
  });
  function handleInputChange(e) {
    setIsRequest(false);
    dispatch({ type: constant.CLEAR_MESSAGE });
    setErrMsg("");
    let info = userInfo;
    info.password = e.target.value;
    setUserInfo(info);
  }
  function handleLogin() {
    if (userInfo.password.length === 0) {
      setErrMsg("Vui lòng nhập mật khẩu!");
      setIsRequest(false);
      return;
    }
    setErrMsg("");
    setIsRequest(true);
    console.log(JSON.stringify(userInfo));
    dispatch({ type: constant.CLEAR_MESSAGE });
    dispatch(userActions.login(userInfo));
  }
  function handleBack() {
    dispatch(appActions.changePopup(constant.PHONE_POPUP));
  }
  return (
    <div className="modal center">
      <div className="login-popup">
        <h3>Nhập mật khẩu</h3>
        <div >Vui lòng nhập mật khẩu của số điện thoại
          <span> {phone}</span>
        </div>
        <input
          name="password"
          type="password"
          placeholder="Nhập mật khẩu"
          onChange={handleInputChange} />
        {
          errMsg && <div className="err-msg">{errMsg}</div>
        }
        {
          !errMsg && !message && isRequest && <div className="err-msg" style={{ color: "#360d5e" }}>Vui lòng chờ...</div>
        }
        {
          isRequest && message && !errMsg && <div className="err-msg">{message}</div>
        }
        <div className="flex">
          <button
            onClick={handleBack}
            className="back-btn">Quay lại
          </button>
          <button
            onClick={handleLogin}
            className="complete-btn">Đăng nhập
          </button>
        </div>
        <button className="exit-btn" onClick={closePopup}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div >
  );
}