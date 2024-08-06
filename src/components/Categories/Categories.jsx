// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Select a Category</h2>
      <div className="categories-list">
        <Link to="/quiz?category=iconic-movies" className="category-item">
          <div className="category-content">
            <h3>Iconic Movies</h3>
          </div>
        </Link>
        <Link to="/quiz?category=legendary-actors" className="category-item">
          <div className="category-content">
            <h3>Legendary Actors</h3>
          </div>
        </Link>
        <Link to="/quiz?category=bollywood-music" className="category-item">
          <div className="category-content">
            <h3>Bollywood Music</h3>
          </div>
        </Link>
        <Link to="/quiz?category=romantic-movies" className="category-item">
          <div className="category-content">
            <h3>Romantic Movies</h3>
          </div>
        </Link>
        <Link to="/quiz?category=villains-of-bollywood" className="category-item">
          <div className="category-content">
            <h3>Villains Of Bollywood</h3>
          </div>
        </Link>
        <Link to="/quiz?category=comedy-films" className="category-item">
          <div className="category-content">
            <h3>Comedy Films</h3>
          </div>
        </Link>
        <Link to="/quiz?category=action-heroes" className="category-item">
          <div className="category-content">
            <h3>Actions Heroes</h3>
          </div>
        </Link>
        <Link to="/quiz?category=film-directors" className="category-item">
          <div className="category-content">
            <h3>Film Directors</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
