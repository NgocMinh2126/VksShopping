import { constant } from "../constants";
function getCartInfo() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token ? token : "",
    },
  };
  return fetch(constant.API_URL + "/cart", requestObj)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
function addCart(product) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token ? token : "",
    },
    body: JSON.stringify(product),
  };
  return fetch(constant.API_URL + "/cart/item", requestObj)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err);
      return {};
    });
}
export const cartService = {
  getCartInfo,
  addCart,
};
