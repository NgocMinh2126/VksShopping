import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { appActions } from "../../../actions/appActions";
import { constant } from "../../../constants";

export default function Message(props) {
  const popup = useSelector(store => store.app.popup);
  const [active, setActive] = useState();
  const dispatch = useDispatch(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.changePopup(constant.NO_POPUP))
    }, 1200);
  })
  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 30)
  });
  return (
    <div className="modal center" >
      <div className="message-popup">
        <div className="msg-container">
          {active ?
            <div className="msg active">{popup.message}</div> :
            <div className="msg"> {popup.message}</div>}
        </div>
      </div>
    </div>
  )
}