import { questionsApi } from './servise';

const questions = {
  get: (quizz) => questionsApi.get(`/${quizz}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => questionsApi.post('/questions', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { questions };
