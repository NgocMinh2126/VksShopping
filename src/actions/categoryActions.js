import { categoryService } from "../services/categoryService";
function getCategories() {
  return (dispatch) => {
    categoryService.getCategories().then((res) => {
      if (res.status === "SUCCESS") {
        dispatch(success(res.data));
      } else dispatch(failure(res.code, res.msg));
    });
  };
  function success(data) {
    return { type: "GET_CATEGORY_SUCCESS", data };
  }
  function failure(code, msg) {
    return { type: "GET_CATEGORY_FAILURE", code, msg };
  }
}
export const categoryActions = {
  getCategories,
};
