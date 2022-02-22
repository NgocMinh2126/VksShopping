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
        <div className="flex tab-title">
          <h3 className="active">Mô tả sản phẩm</h3>
          <h3>Đánh giá</h3>
        </div>
        <div className="description">
          <p>Bị người yêu lừa dối, Takako bỏ việc và rơi vào chuỗi ngày ngủ triền miên để trốn tránh nỗi buồn. Thế rồi, một cuộc điện thoại từ người cậu ruột cả 10 năm trời không gặp đã đánh thức cô khỏi cơn mộng mị. Takako đồng ý đến trông hiệu sách nửa buổi giúp cậu chỉ để làm vừa lòng mẹ. Nhưng thật ngoài tưởng tượng, chờ đợi cô là hiệu sách Morisaki cũ kỹ với thế giới của hàng nghìn cuốn sách chứa trong mình cả thời gian và lịch sử. Sách đã chữa lành vết thương trong lòng cô.Và hơn thế nữa, Takako tìm thấy bao nhiêu điều mới mẻ và thú vị mà trước đây cô chưa từng biết đến.Câu chuyện nhẹ nhàng mà sâu lắng, đặc biệt với những ai có sở thích sưu tầm sách cổ.</p>
        </div>
        <div className="comment">
          <div className="total flex">
            <div className="average-rating">5</div>
            <div className="more">
              <div className="flex star">
                <i className="fas fa-star yellow_star" />
                <i className="fas fa-star yellow_star" />
                <i className="fas fa-star yellow_star" />
                <i className="fas fa-star yellow_star" />
                <i className="fas fa-star yellow_star" />
              </div>
              1 nhận xét
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}