import React from 'react'
import { getFarewellText } from '../utils/FarewellText'
import { languages } from '../data/languages'

const Status = (props) => {
    const [incorrectGuess, setIncorrectGuess] = React.useState('')

    React.useEffect(() => {
        if (props.wrongGuessCount > 0 && props.wrongGuessCount < 10) {
            const message = getFarewellText(languages[props.wrongGuessCount - 1].name)
            setIncorrectGuess(message)

            // Reset after 2 seconds
            const timeout = setTimeout(() => {
                setIncorrectGuess('')
            }, 2000)

            // Clean up timeout if component unmounts or wrongGuessCount changes quickly
            return () => clearTimeout(timeout)
        }
    }, [props.wrongGuessCount])

    const getStatus = () => {
        if (props.isgameWon) {
            return (
                <>
                    <h2>You Won!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } else if (props.isgameLost) {
            return (
                <>
                    <h2>Game Over</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        } else if (incorrectGuess) {
            return (<p>{incorrectGuess}</p>)
        } else {
            return null
        }
    }

    return (
        <section
            className='status-section'
            role='status'
            aria-live='polite'
            style={{
                backgroundColor: props.isgameLost
                    ? '#BA2A2A'
                    : props.isgameWon
                        ? '#10A95B'
                        : incorrectGuess
                            ? '#7A5EA7'
                            : 'transparent'
            }}
        >
            {getStatus()}
        </section>
    )
}

export default Status
