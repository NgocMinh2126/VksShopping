import { useState, useEffect } from "react";
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

  return (!listCate.data ? <div></div> :
    <div className="category-container hide-scroll">
      {listCate.data.map((v, i) => {
        return (<Categorycard key={v._id} image={v.image} name={v.name}></Categorycard>);
      })}
    </div>
  );
}