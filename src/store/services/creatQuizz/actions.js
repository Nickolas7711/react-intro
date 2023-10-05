import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizz } from '../../../api/quizz';

export const createQuizz = createAsyncThunk('quizzes/createQuizz', async () => {
  try {
    const response = await quizz.post();
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});
