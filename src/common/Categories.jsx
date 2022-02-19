import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../actions/categoryActions";
import Categorycard from "./Categorycard";

export default function Categories() {
  const dispatch = useDispatch();

  const listCate = useSelector(store => store.category.listCate);

  useEffect(() => {
    if (listCate.status === "LOADING") {
      dispatch(categoryActions.getCategories());
    } else {
      console.log(listCate);
    }
  })
  function createCategorycard(data) {
    return data.map((v) => (
      <Categorycard key={v._id} image={v.image} name={v.name}></Categorycard>
    ))
  }
  return (!listCate.data ? <div></div> :
    <div className="category-container hide-scroll">
      {createCategorycard(listCate.data)}
    </div>
  );
}