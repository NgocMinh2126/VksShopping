import { useState, useEffect } from "react";
import Categorycard from "./Categorycard";

export default function Categories() {

  const [cateInfo, setCateInfo] = useState(null);

  useEffect(() => {
    fetch("https://immense-shelf-19793.herokuapp.com/api/category")
      .then((res) => res.json())
      .then((json) => {
        setCateInfo(json.data);
        console.log(json.data);
      })
  }, []);
  return (!cateInfo ? <div></div> :
    <div className="category-container hide-scroll">
      {cateInfo.map((v, i) => {
        return (<Categorycard key={v._id} image={v.image} name={v.name}></Categorycard>);
      })}
    </div>
  );
}