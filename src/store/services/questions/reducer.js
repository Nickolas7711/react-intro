import { createSlice } from '@reduxjs/toolkit';
import {
  setQuestionList,
  setCurrentQuestionIndex,
  setCorrectAnswersCount,
  setTotalTime,
  setImg,
  setError,
} from './actions';
import { questionsName } from './constants';

const initialState = {
  questionList: [],
  currentQuestionIndex: 0,
  correctAnswersCount: 0,
  totalTime: 60 * 60,
  img: '',
  error: null,
};

const questionsReducer = createSlice({
  name: questionsName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setQuestionList, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.questionList = action.payload;
    });
    builder.addCase(setCurrentQuestionIndex, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currentQuestionIndex = action.payload;
    });
    builder.addCase(setCorrectAnswersCount, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.correctAnswersCount = action.payload;
    });
    builder.addCase(setTotalTime, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.totalTime = action.payload;
    });
    builder.addCase(setImg, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.img = action.payload;
    });
    builder.addCase(setError, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.error = action.payload;
    });
  },
});

export default questionsReducer.reducer;
