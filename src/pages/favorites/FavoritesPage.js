import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../store/services/favoriteQuizz/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="favorites-page">
      <h2>Избранные викторины</h2>
      <ul>
      {Array.isArray(favorites) && favorites.length > 0 ? (
        favorites.map((quizzId) => (
            <li key={quizzId}>{/* Отображение выбранных викторин */}</li>
        ))
      ) : (
          <li>У вас нет избранных викторин</li>
      )}
      </ul>
    </div>
  );
};

export default FavoritesPage;
