import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { questions } from '../../api/questions';
import { QuestionIneer, Questions } from './styled';
import NotFound from '../../components/NotFound/NotFound';

export default function Question() {
  const { quizz } = useParams();
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const navigate = useNavigate();

  const fetchQuestionList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await questions.get(quizz.toLowerCase().replaceAll(' ', ''));
      setQuestionList(response);
    } catch (err) {
      setError(<NotFound />);
    } finally {
      setLoading(false);
    }
  }, [quizz]);

  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  const startTimer = () => {
    const startTime = Date.now();

    return setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      setTotalTime(elapsedTime);
    }, 1000);
  };

  useEffect(() => {
    const intervalId = startTimer();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      navigate(`/results?score=${correctAnswersCount}&time=${totalTime}`);
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const currentQuestion = questionList[currentQuestionIndex];
    const isAnswerCorrect = answer === currentQuestion.questions[0]?.answer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 10);
    }

    handleNextQuestion();
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const currentQuestion = questionList[currentQuestionIndex];

  return (
    <Questions>
      <img alt='Зображення вікторини' />
      <div className="timer">
        Час виконання вікторини: {totalTime} сек.
      </div>
      <h2>{currentQuestion.quizzName}</h2>
      <h1>{currentQuestion.questions[0]?.question}</h1>
      <QuestionIneer>
        {currentQuestion.answers[0]
        && Object.values(currentQuestion.answers[0]).map((answer, index) => (
            <li key={index} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </li>
        ))}
      </QuestionIneer>
      {selectedAnswer !== null && (
        <p>{isCorrect ? 'Вірно!' : 'Невірно.'}</p>
      )}
    </Questions>
  );
}
