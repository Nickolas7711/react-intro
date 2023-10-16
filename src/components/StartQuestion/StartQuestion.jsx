import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function StartQuestion() {
  const { quizz } = useParams();
  const img = useSelector((state) => state.quizzsReducer.img); // Доступ к изображению напрямую из quizzsReducer
  console.log({ img });
  return (
    <div>
      {/* <img src={img} alt='Зображення вікторини' /> */}
      <h1>Сторінка старту вікторини</h1>
      <Link to={`/quizzQuestion/${quizz}`}><button>Почати вікторину</button></Link>
    </div>
  );
}
