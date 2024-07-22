import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

import Quiz from './components/Quiz';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
