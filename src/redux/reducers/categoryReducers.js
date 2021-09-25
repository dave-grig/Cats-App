const currentCategory = {
  title: "",
  id: "",
};

export default (state = currentCategory, action) => {
  switch (action.type) {
    case "SET_CURRENT_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
