import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import QUESTIONS from '../questions.js';
import { useState } from 'react';

const Question = ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: true,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';
  console.log(`selectedAnswer`, answer.selectedAnswer);
  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
