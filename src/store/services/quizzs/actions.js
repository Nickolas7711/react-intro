import { createAction } from '@reduxjs/toolkit';
import { quizzName } from './constants';

const filterAction = createAction(`${quizzName}/filterAction`, (payload) => ({ payload }));
const setImage = createAction('quizzs/setImage');

export default {
  filterAction,
  setImage,
};
