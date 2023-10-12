const initialState = {
  favorites: [],
};

// eslint-disable-next-line default-param-last
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((quizzId) => quizzId !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
