import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalWindow from '../Modal/ModalWindow';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  openModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { quizz } = this.props;
    const { isShowModal } = this.state;

    return (
      <>
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
            <Button size="small" onClick={this.openModal}>Детальніше</Button>
            <Button size="small">До вікторини</Button>
          </CardActions>
        </Card>
        {isShowModal && (
          <ModalWindow content={quizz} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default CardItem;
