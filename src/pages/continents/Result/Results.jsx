import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get('score'), 10);
  const time = parseInt(searchParams.get('time'), 10);

  return (
    <div className="results-container">
      <h1>Результати</h1>
      <p>Ваші бали: {score}</p>
      <p>Витрачений час: {time} сек</p>
    </div>
  );
};

export default Results;
