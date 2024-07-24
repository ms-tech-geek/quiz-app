import { useState, useContext } from 'react';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import { SettingsContext } from '../../context/SettingsContext';

const Question = ({
  questionIndex,
  onSelectAnswer,
  selectedQuestions,
  onSkipAnswer,
}) => {
  const { settings } = useContext(SettingsContext);

  const answers = {
    correctAnswer: selectedQuestions[questionIndex].correctAnswer,
    wrongAnswers: selectedQuestions[questionIndex].wrongAnswers,
  };

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = settings.timerDuration * 1000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answers.correctAnswer === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      {settings.timer && (
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
          mode={answerState}
        />
      )}

      <h2>{selectedQuestions[questionIndex].text}</h2>
      <Answers
        answers={answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
