import { createAsyncThunk } from '@reduxjs/toolkit';
import { questionsName } from './constants';
import { questions } from '../../../api/questions';
import { quizz } from '../../../api/quizz';

const fetchQuestions = createAsyncThunk(`${questionsName}/fetchQuestions`, async () => {
  const response = await questions.get(quizz.toLowerCase().replaceAll(' ', ''));
  return response;
});

export default {
  fetchQuestions,
};
