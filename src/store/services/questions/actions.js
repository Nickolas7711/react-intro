import { createAction } from '@reduxjs/toolkit';
import { questionsName } from './constants';

export const setQuestionList = createAction(`${questionsName}/setQuestionList`, (payload) => ({ payload }));
export const setCurrentQuestionIndex = createAction(`
${questionsName}/setCurrentQuestionIndex`, (payload) => ({ payload }));
export const setCorrectAnswersCount = createAction(`
${questionsName}/setCorrectAnswersCount`, (payload) => ({ payload }));
export const setTotalTime = createAction(`${questionsName}/setTotalTime`, (payload) => ({ payload }));
export const setImg = createAction(`${questionsName}/setImg`, (payload) => ({ payload }));
export const setError = createAction(`${questionsName}/setError`, (payload) => ({ payload }));

export default {
  setQuestionList,
  setCurrentQuestionIndex,
  setCorrectAnswersCount,
  setTotalTime,
  setImg,
  setError,
};
