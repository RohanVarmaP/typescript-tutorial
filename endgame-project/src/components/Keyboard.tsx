import React from 'react'
import clsx from 'clsx'

type keyboardPropsType = {
    onLetterClick: (letter: string) => void,
    letterGuessed: string[],
    currentWord: string,
    isGameOver: boolean
}

const Keyboard = (props: keyboardPropsType): React.JSX.Element => {
    const row1 = 'qwertyuiop'.split('')
    const row2 = 'asdfghjkl'.split('')
    const row3 = 'zxcvbnm'.split('')

    const getButton = (letter: string, index: number) => {
        const isGuessed = props.letterGuessed.includes(letter)
        const isCorrect = isGuessed && props.currentWord.includes(letter)
        const isWrong = isGuessed && !props.currentWord.includes(letter)
        const className = clsx("key", {
            correct: isCorrect,
            wrong: isWrong
        })
        return (
            <button
                type="button"
                key={index}
                onClick={() => props.onLetterClick(letter)}
                className={className}
                disabled={props.isGameOver}
                aria-label={`Letter: ${letter}`}
                aria-disabled={props.isGameOver ? "true" : "false"}
            >
                {letter.toUpperCase()}
            </button>
        )
    }

    return (
        <section className='keyboard-wrapper'>
            <div className="keyboard-row row1">
                {row1.map(getButton)}
            </div>
            <div className="keyboard-row row2">
                {row2.map(getButton)}
            </div>
            <div className="keyboard-row row3">
                {row3.map(getButton)}
            </div>
        </section>
    )
}

export default Keyboard
