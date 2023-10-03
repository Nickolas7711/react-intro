import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizz } from '../../../api/quizz';
import { quizzName } from './constants';

const fetchQuizz = createAsyncThunk(`${quizzName}/fetchQuizz`, async () => {
  const response = await quizz.get();
  return response;
});

export default {
  fetchQuizz,
};
