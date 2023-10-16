import React, { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound/NotFound';
import {
  setQuestionList,
  setCurrentQuestionIndex,
  setCorrectAnswersCount,
  setTotalTime,
  setImg,
  setError,
} from '../../store/services/questions/actions';
import { questions } from '../../api/questions';
import {
  QuestImages,
  QuestionIneer,
  Questions,
  Timer,
} from './styled';

export default function Question() {
  const { quizz } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    questionList,
    currentQuestionIndex,
    correctAnswersCount,
    totalTime,
    img,
    error,
  } = useSelector((state) => state.questionsReducer);

  const fetchQuestionList = useCallback(async () => {
    try {
      const response = await questions.get(quizz.toLowerCase().replaceAll(' ', ''));
      dispatch(setQuestionList(response));
      dispatch(setImg(response[0]?.img));
    } catch (err) {
      dispatch(setError(<NotFound />));
    }
  }, [dispatch, quizz]);

  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  useEffect(() => {
    if (totalTime <= 0) {
      navigate(`/results?score=${correctAnswersCount}&time=0`);
    }
    const intervalId = setInterval(() => {
      dispatch(setTotalTime(totalTime - 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [correctAnswersCount, dispatch, navigate, totalTime]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      navigate(`/results?score=${correctAnswersCount}&time=${totalTime}`);
    }
  };

  const handleAnswerClick = (answer) => {
    const currentQuestion = questionList[currentQuestionIndex];
    const isAnswerCorrect = answer === currentQuestion.questions[0]?.answer;

    if (isAnswerCorrect) {
      dispatch(setCorrectAnswersCount(correctAnswersCount + 10));
    }

    handleNextQuestion();
  };

  if (!questionList || questionList.length === 0) return <Loading />;
  if (error) return <p>{error}</p>;

  const currentQuestion = questionList[currentQuestionIndex];
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  return (
    <Questions>
      <QuestImages>
        <img src={img} alt='Зображення вікторини' />
      </QuestImages>
      <Timer>
        {minutes} : {seconds}
      </Timer>
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
    </Questions>
  );
}
