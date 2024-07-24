import quizCompleteImg from '../../assets/quiz-complete.png';
import { deriveScore } from '../../helper/scoreCard';

export function MiniSummary({ selectedQuestions, userAnswers }) {
  const { skippedAnswersCount, correctAnswersCount, wrongAnswersCount } =
    deriveScore({
      selectedQuestions,
      userAnswers,
    });

  return (
    <div id="mini-summary">
      <div id="mini-summary-stats">
        <p>
          <span className="number">{skippedAnswersCount}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersCount}</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswersCount}</span>
          <span className="text">incorrect</span>
        </p>
      </div>
    </div>
  );
}

export default function Summary({ selectedQuestions, userAnswers }) {
  const { skippedAnswersShare, correctAnswersShare, wrongAnswersShare } =
    deriveScore({
      selectedQuestions,
      userAnswers,
    });

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      {/* <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === selectedQuestions[index].correctAnswer) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{selectedQuestions[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol> */}
    </div>
  );
}
