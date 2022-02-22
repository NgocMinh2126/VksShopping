export default function CommentCard(props) {

  let { username, content, star } = props

  const rating = [
    "Rất không hài lòng",
    "Không hài lòng",
    "Bình thường",
    "Hài lòng",
    "Rất hài lòng"
  ]

  let usernamearr = username.split(" ");
  let avt = usernamearr.length > 0 ? (
    usernamearr[0][0].toUpperCase() + usernamearr[usernamearr.length - 1][0].toUpperCase()
  ) : (
    usernamearr[0].slice(0, 2).toUpperCase()
  );
  return (
    <div className="comment-card-container flex">
      <div className="user-info flex">
        <div className="avt">{avt}</div>
        <div className="info">
          <div className="name">{username}</div>
          <span>Khách đã mua hàng</span>
        </div>
      </div>
      <div className="comment-display">
        <div className="flex rating">
          <div className="flex star">
            <i className="fas fa-star yellow_star" />
            <i className="fas fa-star yellow_star" />
            <i className="fas fa-star yellow_star" />
            <i className="fas fa-star yellow_star" />
            <i className="fas fa-star yellow_star" />
          </div>
          <span>Rất hài lòng</span>
        </div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}