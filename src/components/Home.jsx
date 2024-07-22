// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <section className="home-welcome">
          <header className="home-header">
            <h1>BOLLYWOOD QUIZ</h1>
          </header>
          <h2>Test Your Bollywood Knowledge!</h2>
          <p>
            Welcome to the Bollywood Quiz App, where you can guess movies,
            songs, dialogues, and scenes. Challenge yourself and see how well
            you know Bollywood!
          </p>
          <Link to="/quiz">
            <button className="start-quiz-button">Take the Quiz</button>
          </Link>
        </section>
        <section className="home-info">
          <h3>Why Take This Quiz?</h3>
          <p>
            Think you're a Bollywood buff? Put your knowledge to the test and
            prove your movie mastery with our exciting quiz!
          </p>
        </section>
        <section className="home-info">
          <h3>What You Can Do</h3>
          <ul>
            <li>Guess the movie from a legendary dialogue.</li>
            <li>Identify the movie from a hit song.</li>
            <li>Recognize the movie from an iconic scene image.</li>
            <li>Name the song from a memorable video clip.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
