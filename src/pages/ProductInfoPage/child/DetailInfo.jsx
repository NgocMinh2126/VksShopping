import { useState } from "react"
import CommentTab from "./CommentTab"
export default function DetailInfo(props) {
  let { attributes, description } = props;
  const [currentTab, setCurrentTab] = useState("description");
  function createInfo(attributes) {
    return attributes.map((v, i) => {
      return (
        <div className="flex" key={i}>
          <div className="title">{v.name}</div>
          <div className="info">{v.value}</div>
        </div>);
    })
  }
  function changeCurrentTab() {
    if (currentTab === "description") {
      return setCurrentTab("comment");
    } else {
      return setCurrentTab("description");
    }
  }
  function changeActiveTab() {
    if (currentTab === "description") {
      return (
        <div className="flex tab-title">
          <h3 className="active" onClick={changeCurrentTab}>Mô tả sản phẩm</h3>
          <h3 onClick={changeCurrentTab}>Đánh giá</h3>
        </div>
      )
    } else {
      return (<div className="flex tab-title">
        <h3 onClick={changeCurrentTab}>Mô tả sản phẩm</h3>
        <h3 className="active" onClick={changeCurrentTab}>Đánh giá</h3>
      </div>)
    }
  }
  //change content of active tab
  function changeContent() {
    if (currentTab === "description") {
      return (description ? (
        <div className="description"
          dangerouslySetInnerHTML={{ __html: description }}>
        </div>) :
        <div className="description">
          <div style={{ textAlign: "center", fontSize: "18px", color: "#757575" }}>
            Sản phẩm chưa có mô tả từ nhà cung cấp
          </div>
        </div>
      )
    } else {
      return (
        <div className="comment">
          <CommentTab></CommentTab>
        </div>
      )
    }
  }
  return (
    <div className="detailinfo-container">
      <div className="detailinfo">
        <h3>Thông tin chi tiết</h3>
        <div>{createInfo(attributes)}</div>
      </div>
      <div className="tabs" style={{ marginTop: "20px", borderRadius: "5px" }}>
        {changeActiveTab()}
        {changeContent()}
      </div>
    </div>
  );
}