import { constant } from "../constants";
function getProduct(queryString) {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/product?" + queryString, requestObj)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
function getProductInfo(id) {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/product/" + id, requestObj)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
function getProductRating(id) {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/product/rating/" + id, requestObj)
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
  getProductInfo,
  getProductRating,
};
