import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [answers.correctAnswer, ...answers.wrongAnswers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = `selected`;
        }

        if (answerState === 'correct' && isSelected) {
          cssClass = 'correct';
        } else if (answerState === 'wrong') {
          if (isSelected) {
            cssClass = 'wrong';
          } else if (answer === answers.correctAnswer) {
            cssClass = 'correct';
          }
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
