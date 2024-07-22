// src/components/Header.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/quiz-logo.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={appLogo} alt="Logo" />{' '}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'menu-icon-open' : 'menu-icon-closed'}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <nav className={isOpen ? 'nav-menu open' : 'nav-menu'}>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
