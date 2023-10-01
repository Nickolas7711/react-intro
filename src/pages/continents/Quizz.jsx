import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardItem from '../../components/Cards/CardItem';
import { quizz } from '../../api/quizz';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound/NotFound';

export default function Quizz() {
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const [quizzList, setQuizzList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log(store);

  const fetchQuizzList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizz.get();
      setQuizzList(response);
    } catch (err) {
      setError(<NotFound />);
    } finally {
      setLoading(false);
    }
  }, [setQuizzList, setError, setLoading]);

  useEffect(() => {
    fetchQuizzList();
  }, [fetchQuizzList]);

  const handleNavigateQuestion = (title) => {
    const params = title.replaceAll(' ', '_').toLowerCase();
    navigate(`/quizz/quizzQuestion/${params}`);
  };

  if (loading) return < Loading />;
  if (error) return <p>{error}</p>;
  return (
    <>
      {quizzList.map((quizz) => (
        <CardItem
        key={quizz.id}
        img={quizz.img}
        title={quizz.name}
        titles={quizz.title}
        description={quizz.description}
        handleNavigateQuestion={handleNavigateQuestion}
        />
      ))}
    </>
  );
}
