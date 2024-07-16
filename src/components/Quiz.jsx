import { useState } from 'react';

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  return (
    <main>
      <p>Currently active question</p>
    </main>
  );
};

export default Quiz;
