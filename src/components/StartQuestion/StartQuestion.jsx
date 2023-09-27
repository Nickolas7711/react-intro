import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function StartQuestion() {
  const { quizz } = useParams();

  return (
    <div>
      <img alt='зображення вікторини' />
      <h1>Сторінка старту вікторини для {quizz}</h1>
        <Link to={`/quizzQuestion/${quizz}`}><button>Почати вікторину</button></Link>
    </div>
  );
}
