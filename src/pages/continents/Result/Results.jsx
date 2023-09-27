import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get('score'), 10);
  const time = parseInt(searchParams.get('time'), 10);

  return (
    <div className="results-container">
      <h1>Результаты</h1>
      <p>Ваши баллы: {score}</p>
      <p>Затраченное время: {time} сек</p>
    </div>
  );
};

export default Results;
