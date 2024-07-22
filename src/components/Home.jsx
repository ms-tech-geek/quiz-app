import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // const startQuiz = () => {
  //   navigate('/quiz'); // Navigate to the quiz page
  // };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Quiz App</h1>
        <nav>
          <Link to="/quiz">
            <button className="home-button">Start Quiz</button>
          </Link>
        </nav>
      </header>
      <main>
        <section className="home-welcome">
          <h2>Discover Your Quiz Persona Today!</h2>
          <p>
            Welcome to the Quiz App, where understanding your natural quiz
            persona just got easier.
          </p>
          <Link to="/quiz">
            <button className="start-quiz-button">Take the Quiz</button>
          </Link>
        </section>
        <section className="home-info">
          <h3>Why Take This Quiz?</h3>
          <p>
            Ever wonder why you excel in some areas more than others? Take this
            quiz to find out!
          </p>
          <h3>What You Need to Know</h3>
          <ul>
            <li>
              No Advertisements: Our quiz is straightforward and ad-free for an
              uninterrupted experience.
            </li>
            <li>
              Scientifically Backed: Developed with insights from experts to
              ensure accuracy and relevance.
            </li>
            <li>
              Immediate Results: Get instant feedback on your quiz persona at
              the end of the quiz.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
