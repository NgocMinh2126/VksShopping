import { constant } from "../constants";
function getHomeInfo() {
  const requestObj = {
    method: "GET",
  };
  return fetch(`${constant.API_URL}/home`, requestObj)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return {};
    });
}
export const appService = {
  getHomeInfo,
};
