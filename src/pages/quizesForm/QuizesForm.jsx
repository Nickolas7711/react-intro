import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { QuizzCard } from './style';
import InputText from '../../components/Forms/InputText';
import { quizRules } from '../../constans';
import TextareaText from '../../components/Forms/TextareaText';
import { createQuizz } from '../../store/services/creatQuizz/actions';

const QuizesForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    const formData = getValues();
    dispatch(createQuizz(formData));
    reset();
  };

  return (
    <>
      <QuizzCard>
      <h1>Створення вікторіни</h1>
      <InputText
            fullWidth
            control={control}
            name='title'
            rules={quizRules.quizz}
            label='Назва вікторіни'
          />
      <TextareaText
            fullWidth
            control={control}
            name='description'
            rules={quizRules.description}
            label='Опис вікторини'
          />
          <InputText
            fullWidth
            control={control}
            name='img'
            rules={quizRules.img}
            label='Посылання на зображення(URL)'
          />
      <Button onClick={handleSubmit(onSubmit)}>Створити вікторіну</Button>
      </QuizzCard>
    </>
  );
};

export default QuizesForm;
