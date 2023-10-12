import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../Modal/ModalWindow';
import { addToFavorites, removeFromFavorites } from '../../store/services/favoriteQuizz/action';

export default function CardItem({
  img, title, titles, description, handleNavigateQuestion, quizzId,
}) {
  const [isShowModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites && favorites.includes(quizzId);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(quizzId));
    } else {
      dispatch(addToFavorites(quizzId));
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title={titles}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {titles}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={openModal}>Детальніше</Button>
          <Button size="small" onClick={() => handleNavigateQuestion(title)}>До вікторини</Button>
          <button
        className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
        onClick={handleToggleFavorite}
      >
        ♥
      </button>
        </CardActions>
      </Card>
      {isShowModal && (
        <ModalWindow img={img} title={titles} description={description} onClose={closeModal} />)}
    </>
  );
}
