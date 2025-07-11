import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Status from '../components/Status'
import Language from '../components/Language'
import Word from '../components/Word'
import Keyboard from '../components/Keyboard'
import Clues from '../components/Clues'

type GamePropsType = {
    isgameLost: boolean,
    isgameWon: boolean,
    wrongGuessCount: number,
    currentWord: string,
    letterGuessed: string[],
    isGameOver: boolean,
    onLetterClick: (letter: string) => void,
    newGame: () => void,
    setIsgameWon: React.Dispatch<React.SetStateAction<boolean>>
}
const Game = (props: GamePropsType) => {
    const navigate = useNavigate()
    React.useEffect(() => {
        if (props.isgameWon) {
            setTimeout(() => {
                navigate('/ranking');
            }, 2000)
        }
    }, [props.isgameWon]);
    const location = useLocation()
    const difficultyVal = new URLSearchParams(location.search)
    const [difficulty, setDifficulty] = React.useState<string>(String(difficultyVal.get('difficulty')))
    console.log(difficulty)
    React.useEffect(() => {
        alert('a new game will start')
        setDifficulty(String(difficultyVal.get('difficulty')))
        props.setIsgameWon(false)
        props.newGame()
    }, [location])
    return (
        <>
            <Header />
            <Status isgameLost={props.isgameLost} isgameWon={props.isgameWon} wrongGuessCount={props.wrongGuessCount} />
            <Language wrongGuessCount={props.wrongGuessCount} />
            <Word currentWord={props.currentWord} letterGuessed={props.letterGuessed} isGameOver={props.isGameOver} />
            {difficulty !== 'hard' ? <Clues difficulty={difficulty} currentWord={props.currentWord} /> : null}
            <Keyboard onLetterClick={props.onLetterClick} letterGuessed={props.letterGuessed} currentWord={props.currentWord} isGameOver={props.isGameOver} />
            {props.isGameOver ? <button onClick={props.newGame}>New Game</button> : null}
        </>
    )
}

export default Game
