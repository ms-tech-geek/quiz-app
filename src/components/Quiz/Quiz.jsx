import { useState, useCallback, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import questionsData from '../../questions.js';
import Question from './Question.jsx';
import Summary, { MiniSummary } from '../Result/Summary.jsx';
import { SettingsContext } from '../../context/SettingsContext';

export default function Quiz() {
  const { settings } = useContext(SettingsContext);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    let selectedQuestions = [];
    switch (category) {
      case 'iconic-movies':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'iconic-movies')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'legendary-actors':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'legendary-actors')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'bollywood-music':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'bollywood-music')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'romantic-movies':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'romantic-movies')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'villains-of-bollywood':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'villains-of-bollywood')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'comedy-films':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'comedy-films')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'action-heroes':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'action-heroes')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'film-directors':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'film-directors')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'memorable-dialogues':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'memorable-dialogues')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'bollywood-debuts':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'bollywood-debuts')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'dance-numbers':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'dance-numbers')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
        break;
      case 'bollywood-biographies':
        selectedQuestions = questionsData
          .filter((question) => question.category === 'bollywood-biographies')
          .sort((a, b) => Math.random() - 0.5)
          .slice(0, settings.numQuestions);
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
