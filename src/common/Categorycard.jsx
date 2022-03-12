import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
export default function Categorycard(props) {
  let { id, image, name } = props;
  const [params, setParam] = useSearchParams();
  let queryObj = queryString.parse(params.toString());
  let obj = { ...queryObj, categories: id, page: 1 }
  let href = window.location.origin + "/product?" + queryString.stringify(obj);
  return (
    <a href={href} className="categorycard-container flex">
      <img src={image} alt="" />
      <div className="title">{name}</div>
    </a>
  );
}