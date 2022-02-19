import { constant } from "../constants";
function getProduct() {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/product", requestObj)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
export const productService = {
  getProduct,
};
