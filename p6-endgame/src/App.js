import React from 'react';
import './App.css';
import Header from './components/Header';
import Status from './components/Status';
import Language from './components/Language';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import { words } from './data/Words';

function App() {

  const [currentWord, setCurrentWord] = React.useState(Math.floor(Math.random() * words.length) >= 0 ? words[Math.floor(Math.random() * words.length)] : 'javascript');
  const [letterGuessed, setLetterGuessed] = React.useState([])
  // console.log('currentWord', currentWord);
  // console.log('letterGuessed', letterGuessed);

  const wrongGuessCount = letterGuessed.filter((value) => !currentWord.includes(value)).length
  // console.log(wrongGuessCount)

  const isgameWon = currentWord.split('').every((letter) => letterGuessed.includes(letter))
  // console.log('isgameWon', isgameWon)
  const isgameLost = wrongGuessCount >= 9
  // console.log('isgameLost', isgameLost)
  const isGameOver = isgameLost || isgameWon
  console.log('isgameover', isGameOver)

  function handleLetterClick(letter) {
    setLetterGuessed(prev => (letter && !prev.includes(letter)) ? [...prev, letter] : prev);
  }

  return (
    <>
      <Header />
      <Status isgameLost={isgameLost} isgameWon={isgameWon} wrongGuessCount={wrongGuessCount} />
      <Language wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} letterGuessed={letterGuessed} isGameOver={isGameOver} />
      <Keyboard onLetterClick={handleLetterClick} letterGuessed={letterGuessed} currentWord={currentWord} isGameOver={isGameOver} />
      {isGameOver ? <button onClick={() => window.location.reload()}>New Game</button> : null}
    </>
  );
}

export default App;
