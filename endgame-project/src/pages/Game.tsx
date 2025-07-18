import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Status from '../components/Status';
import Language from '../components/Language';
import Word from '../components/Word';
import Keyboard from '../components/Keyboard';
import Clues from '../components/Clues';
import DateTimeComponent from '../utils/utils';
import { scoretype } from '../App';

type GamePropsType = {
    isgameLost: boolean;
    isgameWon: boolean;
    wrongGuessCount: number;
    currentWord: string;
    letterGuessed: string[];
    isGameOver: boolean;
    onLetterClick: (letter: string) => void;
    newGame: () => void;
    setIsgameWon: React.Dispatch<React.SetStateAction<boolean>>;
    setRankingList: React.Dispatch<React.SetStateAction<scoretype[]>>;
};

const Game = (props: GamePropsType) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [difficulty, setDifficulty] = React.useState('easy');
    const [startTime, setStartTime] = React.useState<number>(0);
    const [gameStarted, setGameStarted] = React.useState(false);
    const [redirected, setRedirected] = React.useState(false); // ✅ avoid duplicate redirect

    const difficultyParam = new URLSearchParams(location.search).get('difficulty');
    const localDifficulty = localStorage.getItem('difficulty');

    React.useEffect(() => {
        const getDifficulty = () => {
            if (difficultyParam && difficultyParam !== 'null') {
                localStorage.setItem('difficulty', difficultyParam);
                return difficultyParam;
            } else if (localDifficulty) {
                return localDifficulty;
            } else {
                return 'easy';
            }
        };

        const difficultyToUse = getDifficulty();
        setDifficulty(difficultyToUse);

        // ✅ Start new game after short delay to ensure clean state
        setTimeout(() => {
            props.setIsgameWon(false);
            props.newGame();
            setStartTime(Date.now());
            setGameStarted(true);
            setRedirected(false); // reset redirect flag
            alert('A new game will start');
        }, 100);
    }, []);

    React.useEffect(() => {
        if (props.isgameWon && gameStarted && !redirected) {
            const endTime = Date.now();
            const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000);
            const scoreObj: scoretype = {
                ...DateTimeComponent(),
                difficulty: difficulty,
                timeTaken: timeTakenInSeconds,
                wrongGuessCount: props.wrongGuessCount,
            };

            props.setRankingList(prev => [...prev, scoreObj]);
            console.log('🏆 Game Won!', scoreObj);

            setRedirected(true); // ✅ prevent multiple redirects
            setTimeout(() => navigate('/ranking'), 2000);
        }
    }, [props.isgameWon, gameStarted]);

    const handleNewGame = () => {
        props.setIsgameWon(false);
        props.newGame();
        setStartTime(Date.now());
        setGameStarted(true);
        setRedirected(false);
    };

    return (
        <>
            <Header />
            <Status isgameLost={props.isgameLost} isgameWon={props.isgameWon} wrongGuessCount={props.wrongGuessCount} />
            <Language wrongGuessCount={props.wrongGuessCount} />
            <Word currentWord={props.currentWord} letterGuessed={props.letterGuessed} isGameOver={props.isGameOver} />
            {difficulty !== 'hard' && <Clues difficulty={difficulty} currentWord={props.currentWord} />}
            <Keyboard
                onLetterClick={props.onLetterClick}
                letterGuessed={props.letterGuessed}
                currentWord={props.currentWord}
                isGameOver={props.isGameOver}
            />
            {props.isGameOver && (
                <button onClick={handleNewGame}>New Game</button>
            )}
        </>
    );
};

export default Game;
