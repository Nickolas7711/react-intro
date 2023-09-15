import React, { Component } from 'react';
import CardItem from '../../components/Cards/CardItem';
import { quizz } from '../../api/quizz';
import Loading from '../../components/Loading';

class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzList: [],
      loading: true,
      error: '',
    };
  }

  fetchQuizzList = async () => {
    this.setState({ loading: true });

    try {
      const response = await quizz.get();
      this.setState({ quizzList: response });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchQuizzList();
  }

  render() {
    const { loading, error, quizzList } = this.state;

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

    return (
      <>
        {quizzList.map((quizz) => (
          <CardItem key={quizz.id} quizz={quizz} />
        ))}
      </>
    );
  }
}

export default Quizz;
