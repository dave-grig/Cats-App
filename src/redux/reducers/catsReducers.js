const cats = {
    images: [],
    imagesCountPerPage: 10
}

export default (state = cats, action) => {
  switch (action.type) {
    case "SET_CURRENT_CATS":
      return {
        ...state,
        images: action.payload,
      };
    case "UPDATE_CURRENT_CATS":
      console.log(action.payload, "iii");
      return {
        ...state,
        imagesCountPerPage: action.payload + state.imagesCountPerPage,
      };

    case "RESET_IMAGES_COUNT_PER_PAGE":
      
      return {
        ...state,
        imagesCountPerPage: 10,
      };
    default:
      return state;
  }
};
