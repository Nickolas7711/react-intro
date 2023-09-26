import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalWindow from '../Modal/ModalWindow';

export default function CardItem({
  img, title, titles, description, handleNavigateQuestion,
}) {
  const [isShowModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
        </CardActions>
      </Card>
      {isShowModal && (
        <ModalWindow img={img} title={titles} description={description} onClose={closeModal} />)}
    </>
  );
}
