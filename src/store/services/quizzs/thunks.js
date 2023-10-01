import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { quizz } from '../../../api/quizz';

const fetchQuizz = createAsyncThunk(`${moduleName}/fetchQuizz`, async () => {
  const response = await quizz.get();
  return response;
});

export default {
  fetchQuizz,
};
