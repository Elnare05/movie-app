const initialState = {
    favorites: [],
    listName: '',
    isListSaved: false
  };
  
  
function favoritesReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        if (state.isListSaved) return state;
        const exists = state.favorites.some(fav => fav.imdbID === action.payload.imdbID);
        if (exists) return state;
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      case 'SET_LIST_NAME':
        return {
          ...state,
          listName: action.payload
        };
      case 'SAVE_FAVORITE_LIST':
        return {
          ...state,
          isListSaved: true
        };
        case 'REMOVE_FROM_FAVORITES':
  if (state.isListSaved) return state;
  return {
    ...state,
    favorites: state.favorites.filter(fav => fav.imdbID !== action.payload.imdbID)
  };

      default:
        return state;
    }
  
  }

  export default favoritesReducer;
  