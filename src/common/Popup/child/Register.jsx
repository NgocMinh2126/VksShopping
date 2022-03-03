import { useState } from "react"
import { useDispatch } from "react-redux";
import { constant } from "../../../constants";
import { userActions } from "../../../actions/userActions.";
import { useSelector } from "react-redux";
export default function Register(props) {
  let { closePopup } = props
  const dispatch = useDispatch();
  const phone = useSelector(store => store.user.phone);
  const [errMsg, setErrMsg] = useState("");
  const [regisInfo, setRegisInfo] = useState({
    phone: phone,
    name: "",
    email: "",
    password: "",
    sex: 1,
  });
  function handleInputChange(e) {
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
    dispatch(userActions.register(regisInfo));
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
        <div className="err-msg">{errMsg}</div>
        <div className="flex">
          <button className="back-btn">Quay lại</button>
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