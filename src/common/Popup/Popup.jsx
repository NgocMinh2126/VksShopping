import PhoneCheck from "./child/PhoneCheck";
import Register from "./child/Register";
import { appActions } from "../../actions/appActions";
import { constant } from "../../constants";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
export default function Popup(props) {
  const popup = useSelector(store => store.app.popup);
  const dispatch = useDispatch();
  const popups = {
    [constant.NO_POPUP]: <div></div>,
    [constant.PHONE_POPUP]: <PhoneCheck />,
    [constant.REGIS_POPUP]: <Register />
  }
  return (
    popups[popup.type]
  );
}