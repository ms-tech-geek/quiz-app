import { useCallback, useState } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={quizCompleteImg} alt="Quiz Completed" />
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort((a, b) => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSkipAnswer}
          key={activeQuestionIndex}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
      <ul id="answers">
        {shuffledAnswers.map((answer, index) => (
          <li key={index} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
