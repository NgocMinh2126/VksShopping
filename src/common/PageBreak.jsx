import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
export default function PageBreak(props) {
  let { totalpage } = props;
  let currentpage = 1;
  const [searchparam, setSearchPage] = useSearchParams(1);
  let queryObj;
  if (searchparam.get("page") != null) {
    currentpage = parseInt(searchparam.get("page"));
    queryObj = queryString.parse(searchparam.toString());
  }
  console.log("current page: " + currentpage);
  function createPage(current, total) {
    let arr = [];
    if (total <= 3) {
      arr = Array.from(new Array(total), () => 0);
      return arr.map((v, i) => {
        return (current === i + 1 ?
          (<button className=" active" key={"page_" + i}>
            {i + 1}
          </button>) :
          (<button key={"page_" + i} onClick={() => handlePage(i + 1)}>
            {i + 1}
          </button>)
        );
      })
    } else {
      if (current < total - 2) {
        for (let i = current; i <= current + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = total - 2; i <= total; i++) {
          arr.push(i);
        }
      }
      return arr.map((v, i) => {
        return (v === current ? (
          <button className="active" key={"page_" + v}>{v}</button>
        ) : (
          <button onClick={() => handlePage(v)} key={"page_" + v}>{v}</button>
        ))
      })
    }
  }
  function handlePage(page) {
    let obj = { ...queryObj, page: page }
    window.location.href = window.location.origin + window.location.pathname + "?" + queryString.stringify(obj);
  }
  return (
    totalpage < 2 ? (
      <div></div>) : (
      <div className="flex pagebreak-container">
        {currentpage - 1 >= 1 ? (
          <button onClick={() => handlePage(currentpage - 1)}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        ) : (
          <button disabled={true} >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        )}
        {createPage(currentpage, totalpage)}
        {currentpage + 1 <= totalpage ? (
          <button onClick={() => handlePage(currentpage + 1)}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        ) : (
          <button disabled={true} >
            <i className="fa-solid fa-angle-right"></i>
          </button>)}
      </div>
    )
  );
}