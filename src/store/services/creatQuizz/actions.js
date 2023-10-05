import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizz } from '../../../api/quizz';

export const createQuizz = createAsyncThunk('quizzes/createQuizz', async (quizzData) => {
  try {
    const response = await quizz.post(quizzData);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});
