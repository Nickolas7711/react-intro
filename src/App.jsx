import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Template from './components/Templates/Template';
import QuizzQuestion from './components/Routes/QuizzQuestion';
import NotFound from './components/NotFound/NotFound';
import Quizz from './pages/continents/Quizz';
import Results from './pages/continents/Result/Results';
import Question from './pages/Questions/Question';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<Template />}>
        <Route path='/' element={<Quizz />} />
        <Route path='/quizz/*' element={<QuizzQuestion />} />
        <Route path="/quizzQuestion/:quizz" element={<Question />} />
        <Route path='/results' element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
