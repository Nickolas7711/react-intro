import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quizz from '../../pages/continents/Quizz';
import NotFound from '../NotFound/NotFound';
import Question from '../StartQuestion/StartQuestion';
import QuizesForm from '../../pages/quizesForm/QuizesForm';

export default function QuizzQuestion() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/' element={<Quizz />} />
      <Route path='/quizzQuestion/:quizz' element={<Question/>} />
      <Route path='/create-quizz' element={<QuizesForm />} />
    </Routes>
  );
}
