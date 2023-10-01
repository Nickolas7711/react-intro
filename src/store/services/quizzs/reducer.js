import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  countries: [],
  filter: '',
};

export const quizzsReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
    });
    builder.addCase(thunks.fetchQuizz.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.quizz = payload;
    });
  },
});

export default quizzsReducer.reducer;
