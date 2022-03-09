import PhoneCheck from "./child/PhoneCheck";
import Register from "./child/Register";
import { appActions } from "../../actions/appActions";
import { constant } from "../../constants";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import Login from "./child/Login";
import Select from "./child/Select";
import Message from "./child/Message";
export default function Popup(props) {
  const popup = useSelector(store => store.app.popup);
  const dispatch = useDispatch();
  function handleClosePopup() {
    dispatch(appActions.changePopup(constant.NO_POPUP));
  }
  const popups = {
    [constant.NO_POPUP]: <div></div>,
    [constant.PHONE_POPUP]: <PhoneCheck closePopup={handleClosePopup} />,
    [constant.REGIS_POPUP]: <Register closePopup={handleClosePopup} />,
    [constant.LOGIN_POPUP]: <Login closePopup={handleClosePopup} />,
    [constant.SELECT_POPUP]: <Select closePopup={handleClosePopup} />,
    [constant.MESSAGE_POPUP]: <Message />
  }
  return (
    popups[popup.type]
  );
}