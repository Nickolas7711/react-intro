import React from 'react';
import { useLocation } from 'react-router-dom';

function formatTime(seconds) {
  if (seconds < 60) {
    return `${seconds} сек.`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} мин. ${remainingSeconds} сек.`;
}

export default function Results() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = searchParams.get('score');
  const time = searchParams.get('time');

  return (
    <div>
      <h1>Результати</h1>
      <p>Ви набрали: {score} балів</p>
      <p>Використаний час: {formatTime(3600 - time)}</p>
    </div>
  );
}
