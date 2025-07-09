import React from 'react'
import clsx from 'clsx'

type keyboardPropsType = {
    onLetterClick: (letter: string) => void,
    letterGuessed: string[],
    currentWord: string,
    isGameOver: boolean
}

const Keyboard = (props: keyboardPropsType) => {
    const alphabetElement = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index) => {
        const isGuessed = props.letterGuessed.includes(letter)
        const isCorrect = isGuessed && props.currentWord.includes(letter)
        const isWrong = isGuessed && !props.currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        return (
            <button
                key={index}
                onClick={() => props.onLetterClick(letter)}
                className={className}
                disabled={props.isGameOver}
                aria-label={`Letter: ${letter}`}
                aria-disabled={props.isGameOver ? 'true' : 'false'}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className='keyboard-section'>
            {alphabetElement}
        </section>
    )
}

export default Keyboard
