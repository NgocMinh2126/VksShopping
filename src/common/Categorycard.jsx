export default function Categorycard(props) {
  let { image, name } = props;
  return (
    <a href="/" className="categorycard-container flex">
      <img src={image} alt="" />
      <div className="title">{name}</div>
    </a>
  );
}