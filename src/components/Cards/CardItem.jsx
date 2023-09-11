import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardItem({quizz}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={quizz.img}
        title={quizz.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {quizz.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {quizz.description.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Детальніше</Button>
        <Button size="small">До вікторини</Button>
      </CardActions>
    </Card>
  );
}
