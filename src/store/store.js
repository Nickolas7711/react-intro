import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizzsReducer } from './services/quizzs';

const rootReducer = combineReducers({
  quizzsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
