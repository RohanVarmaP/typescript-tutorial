import React from 'react';
import Header from './components/Header';
import Status from './components/Status';
import Language from './components/Language';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import { getRandomWord } from './utils/utils';

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
    <>
      <Header />
      <Status isgameLost={isgameLost} isgameWon={isgameWon} wrongGuessCount={wrongGuessCount} />
      <Language wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} letterGuessed={letterGuessed} isGameOver={isGameOver} />
      <Keyboard onLetterClick={handleLetterClick} letterGuessed={letterGuessed} currentWord={currentWord} isGameOver={isGameOver} />
      {isGameOver ? <button onClick={newGame}>New Game</button> : null}
    </>
  );
}

export default App;
