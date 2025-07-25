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

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/unattemptdedquiz' element={<UnattemptedQuiz />} />
          <Route path='/singleattemptedquiz' element={<SingleAttemptQuiz />} />
          <Route path='/completedquiz' element={<CompletedQuiz />} />
          <Route path='/quiz/:quizId' element={<Quiz />} />
          <Route path='/quiz/:quizId/review' element={<ReviewQuiz />} />
          <Route path='/quiz/:quizId/rank' element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
