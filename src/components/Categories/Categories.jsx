// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Select a Category</h2>
      <div className="categories-list">
        <Link to="/quiz?category=dialogue" className="category-item">
          <div className="category-content">
            <h3>Guess the Movie from a Legendary Dialogue</h3>
          </div>
        </Link>
        <Link to="/quiz?category=song" className="category-item">
          <div className="category-content">
            <h3>Identify the Movie from a Hit Song</h3>
          </div>
        </Link>
        {/* <Link to="/quiz?category=scene" className="category-item">
          <div className="category-content">
            <h3>Recognize the Movie from an Iconic Scene Image</h3>
          </div>
        </Link>
        <Link to="/quiz?category=video" className="category-item">
          <div className="category-content">
            <h3>Name the Song from a Memorable Video Clip</h3>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Categories;
