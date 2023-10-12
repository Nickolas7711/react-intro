export const addToFavorites = (quizzId) => ({
  type: 'ADD_TO_FAVORITES',
  payload: quizzId,
});

export const removeFromFavorites = (quizzId) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: quizzId,
});
