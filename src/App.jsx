import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/Templates/Template';
import QuizzQuestion from './components/Routes/QuizzQuestion';
import NotFound from './components/NotFound/NotFound';
import Quizz from './pages/continents/Quizz';
import Results from './pages/continents/Result/Results';
import StartQuestion from './components/StartQuestion/StartQuestion';
import Question from './pages/Questions/Question';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<Template />}>
        <Route path='/' element={<Quizz />} />
        <Route path='/quizz/*' element={<QuizzQuestion />} />
        <Route path="/startQuestion/:quizz" element={<StartQuestion />} />
        <Route path="/quizzQuestion/:quizz" element={<Question />} />
        <Route path='/results' element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
