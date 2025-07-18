import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Status from '../components/Status'
import Language from '../components/Language'
import Word from '../components/Word'
import Keyboard from '../components/Keyboard'
import Clues from '../components/Clues'
import DateTimeComponent from '../utils/utils'
import { scoretype } from '../App'


type GamePropsType = {
    isgameLost: boolean,
    isgameWon: boolean,
    wrongGuessCount: number,
    currentWord: string,
    letterGuessed: string[],
    isGameOver: boolean,
    onLetterClick: (letter: string) => void,
    newGame: () => void,
    setIsgameWon: React.Dispatch<React.SetStateAction<boolean>>,
    setRankingList: React.Dispatch<React.SetStateAction<scoretype[]>>
}


const Game = (props: GamePropsType) => {
    const [startOrEnd, setStartOrEnd] = React.useState<'started' | 'ended'>('started')
    const navigate = useNavigate()

    const location = useLocation()
    const difficultyVal = new URLSearchParams(location.search)
    const valOFdifficulty = String(difficultyVal.get('difficulty'))
    const valFromLocal = localStorage.getItem('difficulty')
    function getDifficulty() {
        if (valOFdifficulty && valOFdifficulty !== 'null') {
            // console.log('from param')
            // console.log(valOFdifficulty)
            localStorage.setItem('difficulty', valOFdifficulty)
            return valOFdifficulty
        } else if (valFromLocal) {
            // console.log('from local')
            // console.log(valFromLocal)
            return valFromLocal
        } else {
            // console.log('from default')
            return 'easy'
        }
    }
    const [difficulty, setDifficulty] = React.useState<string>(getDifficulty())
    // console.log(difficulty)
    const [startTime, setStartTime] = React.useState<number>(Date.now());
    // console.log(difficulty)


    React.useEffect(() => {
        alert('a new game will start')
        setDifficulty(getDifficulty())
        props.setIsgameWon(false)
        setStartOrEnd('started')
        // console.log(difficulty)
        props.newGame()
    }, [])

    React.useEffect(() => {
        if (props.isgameWon && startOrEnd === 'started') {
            setStartOrEnd('ended')
            const endTime = Date.now();
            const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000);
            const timeObj: scoretype = {
                ...DateTimeComponent(),
                difficulty: difficulty,
                timeTaken: timeTakenInSeconds,
                wrongGuessCount: props.wrongGuessCount,
            };
            props.setRankingList(prev => [...prev, timeObj])
            console.log('🏆 Game won!', timeObj);

            setTimeout(() => {
                navigate('/ranking');
            }, 2000);
        }
    }, [props.isgameWon]);
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
