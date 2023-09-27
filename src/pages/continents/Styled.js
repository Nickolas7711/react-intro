import React from 'react';

const Results = ({ location }) => {
  const searchParams = new URLSearchParams(location.search);
  const score = searchParams.get('score');

  return (
    <div className="results-container">
      <h1>Результаты</h1>
      <p>Ваши баллы: {score}</p>
      {/* Дополнительная информация о результатах */}
    </div>
  );
};

export default Results;
