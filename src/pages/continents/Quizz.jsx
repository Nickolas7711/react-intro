import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/Cards/CardItem';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound/NotFound';
import thunks from '../../store/services/quizzs/thunks';

export default function Quizz() {
  const { quizz, filterQuizz, filter } = useSelector((state) => state.quizzsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const quizzList = useMemo(() => (filter ? filterQuizz : quizz), [quizz, filter, filterQuizz]);

  const fetchQuizzList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchQuizz());
    } catch (err) {
      setError(<NotFound />);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuizzList();
  }, [fetchQuizzList]);

  const handleNavigateQuestion = (title) => {
    const params = title.replaceAll(' ', '_').toLowerCase();
    navigate(`/quizz/quizzQuestion/${params}`);
    window.location.reload();
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
