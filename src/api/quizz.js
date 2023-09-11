import axios from './service';

const quizz = {
    get: () => axios.get('/quizz')
        .then(({ data }) => data)
        .catch((err) => {
            throw new Error(err);
        }),
    post: (params) => axios.post('/quizz', params)
        .then(({ data }) => data)
        .catch((err) => {
            throw new Error(err);
        })
       
};

export { quizz };