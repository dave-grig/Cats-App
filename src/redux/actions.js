export const setCurrentCategory = (pl) => {
    return {
        type: 'SET_CURRENT_CATEGORY',
        payload: pl
    }
}

export const setCurrentCats = (pl) => {
  return {
    type: "SET_CURRENT_CATS",
    payload: pl,
  };
};

export const updateCurrentCats = (pl) => {
  return {
    type: "UPDATE_CURRENT_CATS",
    payload: pl,
  };
};

export const resetImagesCountPerPage = (pl) => {
  return {
    //comment for me: name is to long
    type: "RESET_IMAGES_COUNT_PER_PAGE",
    payload: pl,
  };
};




// export const changeUserData = (pl) => {
//     return {
//         type: 'CHANGE_USER_DATA',
//         payload: pl
//     }
// }
