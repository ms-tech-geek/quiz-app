import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import combinedQuestions from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
  const navigate = useNavigate();

  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === combinedQuestions.length;

  const handleHomeClick = () => {
    navigate('/'); // Navigate back to the landing page
  };

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <>
      <Header />
      <button onClick={handleHomeClick}>Home</button>
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          questionIndex={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </>
  );
}
