import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path='/login/' element={<Login />} />
          <Route path='/signup/' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/unattemptdedquiz/' element={<UnattemptedQuiz />} />
          <Route path='/singleattemptedquiz/' element={<SingleAttemptQuiz />} />
          <Route path='/completedquiz/' element={<CompletedQuiz />} />
          <Route path='/quiz/' element={<Quiz />} />
          <Route path='/review/' element={<ReviewQuiz />} />
          <Route path='/ranking/' element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
