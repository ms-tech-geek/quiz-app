import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Settings from './components/Settings/Settings';
import { SettingsProvider } from './context/SettingsContext';

const App = () => {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
};

export default App;
