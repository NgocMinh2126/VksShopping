const initialState = {
  listCate: {
    status: "LOADING",
  },
};
export function category(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORY_SUCCESS": {
      return {
        ...state,
        listCate: {
          status: "SUCCESS",
          data: action.data,
        },
      };
    }
    case "GET_CATEGORY_FAILURE": {
      return {
        ...state,
        listCate: {
          status: "FAILURE",
          data: [],
        },
      };
    }
    default:
      return state;
  }
}
