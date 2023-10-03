import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizz } from '../../../api/quizz';
import { quizzName } from './constants';

const fetchQuizz = createAsyncThunk(`${quizzName}/fetchQuizz`, async () => {
  try {
    const response = await quizz.get();
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

export default {
  fetchQuizz,
};
