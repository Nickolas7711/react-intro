import { createAction } from '@reduxjs/toolkit';
import { quizzName } from './constants';

const filterAction = createAction(`${quizzName}/filterAction`, (payload) => ({ payload }));

export default {
  filterAction,
};
