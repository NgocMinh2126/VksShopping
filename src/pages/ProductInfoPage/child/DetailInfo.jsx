export default function DetailInfo(props) {
  let { attributes } = props;
  function createInfo(attributes) {
    return attributes.map((v) => {
      return (
        <div className="flex" key={v._id}>
          <div className="title">{v.name}</div>
          <div className="info">{v.value}</div>
        </div>);
    })
  }
  return (
    <div>
      <div className="detailinfo-container">
        <h3>Thông tin chi tiết</h3>
        <div>{createInfo(attributes)}</div>
      </div>
      <div className="tabs">
        <div className="flex">
          <h3>Mô tả sản phẩm</h3>
          <h3>Đánh giá</h3>
        </div>
      </div>
    </div>
  );
}