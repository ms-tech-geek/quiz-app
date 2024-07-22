import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  movieQuestions,
  songQuestions,
  dialogueQuestions,
} from '../../questions.js';
import Question from './Question.jsx';
import Summary from '../Result/Summary.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    console.log(`selectedCategory`, category);
    let selectedQuestions = [];
    switch (category) {
      case 'movie':
        selectedQuestions = movieQuestions;
        break;
      case 'song':
        selectedQuestions = songQuestions;
        break;
      case 'dialogue':
        selectedQuestions = dialogueQuestions;
        break;
      default:
        selectedQuestions = [];
        break;
    }
    console.log(`selectedQuestions`, selectedQuestions);

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
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        selectedQuestions={questions}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
