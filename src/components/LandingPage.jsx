// components/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz'); // Navigate to the quiz page
  };

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default LandingPage;
