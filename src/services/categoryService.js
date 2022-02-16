function getCategory() {
  fetch("https://immense-shelf-19793.herokuapp.com/api/category")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}
export const categoryService = {
  getCategory,
};
