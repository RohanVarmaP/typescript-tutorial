import React from 'react'
import Header from '../components/Header'
import Status from '../components/Status'
import Language from '../components/Language'
import Word from '../components/Word'
import Keyboard from '../components/Keyboard'

type GamePropsType = {
    isgameLost: boolean,
    isgameWon: boolean,
    wrongGuessCount: number,
    currentWord: string,
    letterGuessed: string[],
    isGameOver: boolean,
    onLetterClick: (letter: string) => void,
    newGame: () => void
}
const Game = (props: GamePropsType) => {
    return (
        <>
            <Header />
            <Status isgameLost={props.isgameLost} isgameWon={props.isgameWon} wrongGuessCount={props.wrongGuessCount} />
            <Language wrongGuessCount={props.wrongGuessCount} />
            <Word currentWord={props.currentWord} letterGuessed={props.letterGuessed} isGameOver={props.isGameOver} />
            <Keyboard onLetterClick={props.onLetterClick} letterGuessed={props.letterGuessed} currentWord={props.currentWord} isGameOver={props.isGameOver} />
            {props.isGameOver ? <button onClick={props.newGame}>New Game</button> : null}
        </>
    )
}

export default Game
