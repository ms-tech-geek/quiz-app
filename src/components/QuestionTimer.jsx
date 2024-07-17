import { useState, useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log(`setting time out`);
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log(`setting interval`);
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
