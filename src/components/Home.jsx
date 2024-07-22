import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have this CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bollywood</h1>
        <nav>
          <Link to="/quiz">
            <button className="home-button">Start Quiz</button>
          </Link>
        </nav>
      </header>
      <main>
        <section className="home-welcome">
          <h2>Discover Your Bollywood Knowledge!</h2>
          <p>
            Welcome to the Bollywood Quiz App, where you can test your knowledge
            of Bollywood movies, songs, and dialogues.
          </p>
          <Link to="/quiz">
            <button className="start-quiz-button">Take the Quiz</button>
          </Link>
        </section>
        <section className="home-info">
          <h3>Why Take This Quiz?</h3>
          <p>
            Ever wonder how well you know Bollywood? Take this quiz to find out!
          </p>
          <h3>What You Can Do</h3>
          <ul>
            <li>Guess the movie from a legendary dialogue.</li>
            <li>Identify the movie from a hit song.</li>
            <li>Recognize the movie from an iconic scene image.</li>
            <li>Name the movie from a memorable video clip.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
