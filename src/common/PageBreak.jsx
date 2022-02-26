export default function PageBreak(props) {
  //let {totalpage}=props;

  let totalpage = 3;
  return (
    totalpage < 2 ? (
      <div></div>) : (
      <div className="flex pagebreak-container">
        <button><i className="fa-solid fa-angle-right"></i></button>
        <button><i className="fa-solid fa-angle-left"></i></button>
      </div>
    )
  );
}