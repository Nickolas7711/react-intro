import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { QuizzCard } from './style';
import InputText from '../../components/Forms/InputText';
import { quizRules } from '../../constans';
import TextareaText from '../../components/Forms/TextareaText';

const QuizesForm = () => {
  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <>
      <QuizzCard>
      <h1>Створення вікторіни</h1>
      <InputText
            fullWidth
            control={control}
            name='quizz'
            rules={quizRules.quizz}
            label='Назва вікторіни'
          />
      <TextareaText
            fullWidth
            control={control}
            name='description'
            rules={quizRules.quizz}
            label='Опис'
          />
          <InputText
            fullWidth
            control={control}
            name='img'
            rules={quizRules.quizz}
            label='Посылання на зображення(URL)'
          />
      <Button onClick={handleSubmit(onSubmit)}>Створити вікторіну</Button>
      </QuizzCard>
    </>
  );
};

export default QuizesForm;
