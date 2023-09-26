import axios from 'axios';

const quizzApi = axios.create({
  baseURL: 'https://64fb155ccb9c00518f7a9f38.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});

const questionsApi = axios.create({
  baseURL: 'https://650f36e354d18aabfe99f0f5.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});

export { quizzApi, questionsApi };
