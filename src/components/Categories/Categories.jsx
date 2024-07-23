// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Select a Category</h2>
      <div className="categories-list">
        <Link to="/quiz?category=dialogue-to-movie" className="category-item">
          <div className="category-content">
            <h3>Guess the Movie from a Legendary Dialogue</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
