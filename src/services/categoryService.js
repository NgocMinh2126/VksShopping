function getCategories() {
  const requestObj = {
    method: "GET",
  };
  return fetch(
    "https://immense-shelf-19793.herokuapp.com/api/category",
    requestObj
  )
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
