import React from 'react'
import clsx from 'clsx'


const Keyboard = (props) => {
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
                aria-disabled={props.isGameOver}
            >
                {letter.toUpperCase()}
            </button>)
    })

    return (
        <section className='keyboard-section'>
            {alphabetElement}
        </section>
    )
}

export default Keyboard
