import logoImg from '../assets/quiz-logo.png';

const Header = () => {
  return (
    <header>
      <h1>Quiz App</h1>
      <img src={logoImg} alt="Quiz Logo" />
    </header>
  );
};

export default Header;
