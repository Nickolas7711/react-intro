import React, { useCallback, useEffect, useState } from 'react';
import CardItem from '../../components/Cards/CardItem';
import { quizz } from '../../api/quizz';
import Loading from '../../components/Loading';

export default function Quizz() {
  const [quizzList, setQuizzList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQuizzList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizz.get();
      setQuizzList(response);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setQuizzList, setError, setLoading]);

  useEffect(() => {
    fetchQuizzList();
    
  }, [fetchQuizzList]);

  if (loading) return < Loading />;
  if (error) return <p>{error}</p>;
  
  return (
    <>
    {quizzList.map((quizz) => (
      <CardItem key={quizz.id} quizz={quizz} />
    ))}
    </>    
    
  );
}