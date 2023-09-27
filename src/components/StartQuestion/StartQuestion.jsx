import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function StartQuestion() {
  const { quizz } = useParams();

  return (
    <div>
      <img alt="Изображение викторины" />
      <h1>Страница старта викторины для {quizz}</h1>
        <Link to={`/quizzQuestion/${quizz}`}><button>Почати вікторину</button></Link>
    </div>
  );
}
