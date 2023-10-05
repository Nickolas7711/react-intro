import { createSlice } from '@reduxjs/toolkit';
import { createQuizz } from './actions';
import { quizzName } from '../quizzs/constants';

const initialState = {
  isLoading: false,
  error: null,
  createdQuizz: null,
};

const quizzesSlice = createSlice({
  name: quizzName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuizz.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
        // eslint-disable-next-line no-param-reassign
        state.error = null;
      })
      .addCase(createQuizz.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.createdQuizz = action.payload;
      })
      .addCase(createQuizz.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.error = action.error.message;
      });
  },
});

export default quizzesSlice.reducer;
