import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizzsReducer } from './services/quizzs';
import questionsReducer from './services/questions/reducer';

const rootReducer = combineReducers({
  quizzsReducer,
  questionsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
