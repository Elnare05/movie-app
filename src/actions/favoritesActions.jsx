export const addToFavorites = (movie) => ({
    type: 'ADD_TO_FAVORITES',
    payload: movie,
  });
  
  export const removeFromFavorites = (id) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: id,
  });
  
  export const setListName = (name) => ({
    type: 'SET_LIST_NAME',
    payload: name,
  });
  
  export const saveFavoriteList = () => ({
    type: 'SAVE_FAVORITE_LIST',
  });
  
  export const resetFavorites = () => ({
    type: 'RESET_FAVORITES',
  });
  