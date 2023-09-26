import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { questions } from '../../api/questions';
import { QuestionIneer, Questions } from '../../components/Question/styled';

export default function Question() {
  const { quizz, img } = useParams();
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const fetchQuestionList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await questions.get(quizz.toLowerCase().replaceAll(' ', ''));
      setQuestionList(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [quizz]);

  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const currentQuestion = questionList[currentQuestionIndex];
    setIsCorrect(answer === currentQuestion.questions[0]?.answer);
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const currentQuestion = questionList[currentQuestionIndex];

  return (
    <Questions>
      <img src={img} alt="Изображение викторины" /> {/* Вставляем изображение здесь */}
      <h2>{currentQuestion.quizzName}</h2>
      <h1>{currentQuestion.questions[0]?.question}</h1>
      <QuestionIneer>
          {currentQuestion.answers[0]
          && Object.values(currentQuestion.answers[0]).map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </li>
          ))}
      </QuestionIneer>
      {selectedAnswer !== null && (
        <p>{isCorrect ? 'Правильно!' : 'Неправильно.'}</p>
      )}
      {currentQuestionIndex < questionList.length - 1 ? (
        <button onClick={handleNextQuestion}>Наступне</button>
      ) : (
        <p>Вы ответили на все вопросы.</p>
      )}
    </Questions>
  );
}
