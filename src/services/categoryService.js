import { constant } from "../constants";

function getCategories() {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/category", requestObj)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
export const categoryService = {
  getCategories,
};
