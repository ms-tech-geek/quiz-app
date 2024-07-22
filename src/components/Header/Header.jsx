// src/components/Header.js
import { Link, useLocation } from 'react-router-dom';
import appLogo from '../../assets/quiz-logo.png';
import './Header.css';

const Header = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={appLogo} alt="Logo" />{' '}
        </div>
        <nav className={'nav-menu'}>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
