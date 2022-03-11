import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../actions/categoryActions";
import Categorycard from "./Categorycard";

export default function Categories() {

  const listCate = useSelector(store => store.category.listCate);


  function createCategorycard(data) {
    return data.map((v) => (
      <Categorycard key={v._id} image={v.image} name={v.name} id={v._id}></Categorycard>
    ))
  }
  return (!listCate.data ? <div></div> :
    <div className="category-container hide-scroll ">
      {createCategorycard(listCate.data)}
    </div>
  );
}