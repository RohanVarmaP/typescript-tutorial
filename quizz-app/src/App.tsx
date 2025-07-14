import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import UnattemptedQuiz from './pages/UnattemptedQuiz';
import SingleAttemptQuiz from './pages/SingleAttemptQuiz';
import Quiz from './pages/Quiz';
import ReviewQuiz from './pages/ReviewQuiz';
import Ranking from './pages/Ranking';
import CompletedQuiz from './pages/CompletedQuiz';
import { homeData as data, homeDataType } from './data/userData';

function App() {
  const [homeData, setHomeData] = React.useState<homeDataType>(data)

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/login/' element={<Login />} />
          <Route path='/signup/' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/unattemptdedquiz/' element={<UnattemptedQuiz homeData={homeData} />} />
          <Route path='/singleattemptedquiz/' element={<SingleAttemptQuiz homeData={homeData} />} />
          <Route path='/completedquiz/' element={<CompletedQuiz homeData={homeData} />} />
          <Route path='/quiz/' element={<Quiz />} />
          <Route path='/review/' element={<ReviewQuiz />} />
          <Route path='/ranking/' element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
