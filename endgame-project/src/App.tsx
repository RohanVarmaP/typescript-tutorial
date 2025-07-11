import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { getRandomWord } from './utils/utils';
import Game from './pages/Game';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ranking from './pages/Ranking';

function App() {

  // State Values
  const [currentWord, setCurrentWord] = React.useState<string>((): string => getRandomWord());
  const [letterGuessed, setLetterGuessed] = React.useState<string[]>([])
  // console.log('currentWord', currentWord);
  // console.log('letterGuessed', letterGuessed);

  // Derived Values
  const wrongGuessCount: number = letterGuessed.filter((value: string): boolean => !currentWord.includes(value)).length
  // console.log(wrongGuessCount)
  const isgameWon: boolean = currentWord.split('').every((letter: string): boolean => letterGuessed.includes(letter))
  // console.log('isgameWon', isgameWon)
  const isgameLost: boolean = wrongGuessCount >= 9
  // console.log('isgameLost', isgameLost)
  const isGameOver: boolean = isgameLost || isgameWon
  console.log('isgameover', isGameOver)

  function handleLetterClick(letter: string): void {
    setLetterGuessed((prev: string[]): string[] => (letter && !prev.includes(letter)) ? [...prev, letter] : prev);
  }

  function newGame(): void {
    setCurrentWord(getRandomWord());
    setLetterGuessed([]);
  }

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game isgameLost={isgameLost} isgameWon={isgameWon} wrongGuessCount={wrongGuessCount} currentWord={currentWord} letterGuessed={letterGuessed} isGameOver={isGameOver} onLetterClick={handleLetterClick} newGame={newGame} />} />
          <Route path='/ranking' element={<Ranking />} />
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
