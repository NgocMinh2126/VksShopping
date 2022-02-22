import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../../../actions/productActions";
import { constant } from "../../../constants";
import CommentCard from "./CommentCard";

export default function CommentTab(props) {
  let id = "615ffd94709066373c2ab02b";
  const dispatch = useDispatch();
  const RatingInfo = useSelector(store => store.product.productRating);

  useEffect(() => {
    if (RatingInfo.status === constant.LOADING) {
      dispatch(productActions.getProductRating(id));
    } else console.log(RatingInfo.data);
  });
  function createCommentCard(data) {
    return data.map((v, i) => {
      return (
        <CommentCard
          key={i}
          username={v.user}
          content={v.content}
          star={v.stars}
        />
      )
    })
  }
  return (
    <div>
      {!RatingInfo.data ? (
        <div></div>
      ) : (
        createCommentCard(RatingInfo.data)
      )}
    </div>
  );
}