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
function getProductInfo(productid) {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/product/" + productid, requestObj)
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
function getProductRating(productid) {
  const requestObj = {
    method: "GET",
  };
  return fetch(constant.API_URL + "/product/rating/" + productid, requestObj)
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
function getSimilarProduct(productid) {
  const requestObj = {
    method: "GET",
  };
  return fetch(`${constant.API_URL}/product/similar/${productid}`, requestObj)
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
  getSimilarProduct,
};
