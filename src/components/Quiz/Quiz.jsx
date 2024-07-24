import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import questionsData from '../../questions.js';
import Question from './Question.jsx';
import Summary, { MiniSummary } from '../Result/Summary.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    let selectedQuestions = [];
    switch (category) {
      case 'dialogue-to-movie':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'dialogue-to-movie')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, 5);
        break;
      default:
        selectedQuestions = [];
        break;
    }

    setQuestions(selectedQuestions);
  }, [location.search]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

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
    return <Summary selectedQuestions={questions} userAnswers={userAnswers} />;
  }

  return (
    <>
      <MiniSummary selectedQuestions={questions} userAnswers={userAnswers} />
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          questionIndex={activeQuestionIndex}
          selectedQuestions={questions}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </>
  );
}
