import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
