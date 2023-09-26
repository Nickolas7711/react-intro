import React from 'react';
import {
  Images, NotFoundContent, Text, Title,
} from './style';

export default function NotFound() {
  return (
    <NotFoundContent>
      <Images>
      <Text>4</Text>
      <img style={{ width: '25vw', height: '25vw' }} src='../../monkey.png'></img>
      <Text>4</Text>
      </Images>
      <Title>Сторінку не знайдено, спробуйте ще!!!</Title>
      </NotFoundContent>
  );
}
