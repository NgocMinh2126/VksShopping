import { useState } from "react"
import { useDispatch } from "react-redux";
import { constant } from "../../../constants";
import { userActions } from "../../../actions/userActions.";
import { useSelector } from "react-redux";
import { appActions } from "../../../actions/appActions";
export default function Register(props) {
  let { closePopup } = props
  const dispatch = useDispatch();
  const phone = useSelector(store => store.user.phone);
  const message = useSelector(store => store.user.message);
  const [isRequest, setIsRequest] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [regisInfo, setRegisInfo] = useState({
    phone: phone,
    name: "",
    email: "",
    password: "",
    sex: 1,
  });
  function handleInputChange(e) {
    setErrMsg("");
    dispatch({ type: constant.CLEAR_MESSAGE });
    setIsRequest(false);
    let info = { ...regisInfo };
    info[e.target.name] = e.target.value;
    if (e.target.name === "sex") {
      info.sex = parseInt(e.target.value);
    }
    if (e.target.name === "retype_pass") {
      if (info.password !== info.retype_pass) {
        setErrMsg("Mật khẩu không khớp");
      } else {
        setErrMsg("");
      }
    }
    setRegisInfo(info);
  }
  function handleCompleteRes() {
    if (!regisInfo.email || !regisInfo.name || !regisInfo.password) {
      setErrMsg("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (regisInfo.password.length < 6) {
      setErrMsg("Mật khẩu quá ngắn. Độ dài tối thiểu là 6 ký tự.");
      return;
    }
    console.log(JSON.stringify(regisInfo));
    setErrMsg("");
    setIsRequest(true);
    dispatch(userActions.register(regisInfo));
  }
  function handleBack() {
    dispatch(appActions.changePopup(constant.PHONE_POPUP));
  }
  return (
    <div className="modal center">
      <div className="register-popup">
        <h4>Nhập thông tin đăng ký</h4>
        <input
          autoComplete="off"
          name="name"
          placeholder="Họ tên"
          type="text"
          onChange={handleInputChange} />
        <input
          name="email"
          placeholder="Mail"
          type="text"
          onChange={handleInputChange} />
        <input
          autoComplete="off"
          name="password"
          placeholder="Mật khẩu"
          onChange={handleInputChange}
          type="password" />
        <input
          autoComplete="off"
          placeholder="Nhập lại mật khẩu"
          name="retype_pass"
          onChange={handleInputChange}
          type="password" />
        <div className="flex">
          <label>Giới tính</label>
          <div>
            <div className="flex">
              <label htmlFor="male">Nam</label>
              <input
                checked={regisInfo.sex === 1}
                value="1"
                name="sex"
                type="checkbox"
                id="male"
                onChange={handleInputChange} />
            </div>
            <div className="flex">
              <label htmlFor="female">Nữ</label>
              <input
                checked={regisInfo.sex === 2}
                name="sex"
                value="2"
                type="checkbox"
                id="female"
                onChange={handleInputChange} />
            </div>
            <div className="flex">
              <label htmlFor="other">Khác</label>
              <input
                checked={regisInfo.sex === 3}
                value="3"
                name="sex"
                type="checkbox"
                id="other"
                onChange={handleInputChange} />
            </div>
          </div>
        </div>
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
            className="complete-btn"
            onClick={handleCompleteRes}>Đăng ký
          </button>
        </div>
        <button className="exit-btn" onClick={closePopup}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

    </div>
  );
}