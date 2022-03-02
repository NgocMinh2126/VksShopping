import { constant } from "../constants";
function checkPhone(info) {
  const requestObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  };
  return fetch(constant.API_URL + "/user/phone_check", requestObj)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
function addUser(userinfo) {
  const requestObj = {
    method: "POST",
  };
}
export const userService = {
  addUser,
  checkPhone,
};
