import { quizzApi } from './servise';

const quizz = {
  get: () => quizzApi.get('/quizz')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => quizzApi.post('/quizz', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),

};

export { quizz };
