export default function CommentCard(props) {

  let { username, content, star } = props

  const rating = [
    "Rất không hài lòng",
    "Không hài lòng",
    "Bình thường",
    "Hài lòng",
    "Rất hài lòng"
  ]
  let star_arr = Array.from(new Array(star), () => 0);
  let nonstar_arr = Array.from(new Array(5 - star), () => 0);

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
            {
              star_arr.map((v, i) => {
                return (<i className="fas fa-star yellow_star" key={i} />)
              })}
            {
              nonstar_arr.map((v, i) => {
                return (<i className="fas fa-star " key={5 - i} />)
              })
            }
          </div>
          <span>{rating[star - 1]}</span>
        </div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}