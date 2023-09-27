import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quizz from '../../pages/continents/Quizz';
import NotFound from '../NotFound/NotFound';
import StartQuestion from '../StartQuestion/StartQuestion';

export default function QuizzQuestion() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/' element={<Quizz />} />
      <Route path='/quizzQuestion/:quizz' element={<StartQuestion/>} />
    </Routes>
  );
}
