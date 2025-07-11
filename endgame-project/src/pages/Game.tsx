import React from 'react'
import Header from '../components/Header'
import Status from '../components/Status'
import Language from '../components/Language'
import Word from '../components/Word'
import Keyboard from '../components/Keyboard'
import { }

const Game = () => {
    return (
        <div>
            <>
                <Header />
                <Status isgameLost={isgameLost} isgameWon={isgameWon} wrongGuessCount={wrongGuessCount} />
                <Language wrongGuessCount={wrongGuessCount} />
                <Word currentWord={currentWord} letterGuessed={letterGuessed} isGameOver={isGameOver} />
                <Keyboard onLetterClick={handleLetterClick} letterGuessed={letterGuessed} currentWord={currentWord} isGameOver={isGameOver} />
                {isGameOver ? <button onClick={newGame}>New Game</button> : null}
            </>
        </div>
    )
}

export default Game
