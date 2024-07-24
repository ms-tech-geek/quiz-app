export const deriveScore = ({ selectedQuestions, userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === selectedQuestions[index].correctAnswer
  );

  const skippedAnswersCount = isNaN(skippedAnswers.length / userAnswers.length) ?  0 : Math.round(
    skippedAnswers.length / userAnswers.length)

  const correctAnswersCount = isNaN(correctAnswers.length / userAnswers.length) ?  0 : Math.round(
    correctAnswers.length / userAnswers.length)

    const wrongAnswersCount = userAnswers.length - skippedAnswersCount - correctAnswersCount;

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return {
    skippedAnswersCount,
    correctAnswersCount,
    wrongAnswersCount,
    skippedAnswersShare,
    correctAnswersShare,
    wrongAnswersShare,
  };
};