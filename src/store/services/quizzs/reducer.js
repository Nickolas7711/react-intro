import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';
import thunks from './thunks';
import { quizzName } from './constants';

const initialState = {
  quizz: [],
  img: '',
  filter: '',
  filterQuizz: [],
};

export const quizzsReducer = createSlice({
  name: quizzName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
      // eslint-disable-next-line no-param-reassign
      state.filterQuizz = state.quizz.filter((title) => {
        const quizzesInitial = title.title.toLowerCase();
        return quizzesInitial.indexOf(payload.toLowerCase()) !== -1;
      });
    });
    builder.addCase(thunks.fetchQuizz.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.quizz = payload;
    });
  },
});

export default quizzsReducer.reducer;
