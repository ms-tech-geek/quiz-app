import { useState } from 'react';
import QUESTIONS from '../questions';
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

  return (
    <main>
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
          <li key={index} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Quiz;
