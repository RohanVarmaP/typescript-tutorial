import React from 'react'
import { languages } from '../data/languages'
import clsx from 'clsx'

const Language = (props) => {
    function getLanguages(languages) {
        const languageElement = languages.map((val, index) => {
            const styles = {
                backgroundColor: val.backgroundColor,
                color: val.color
            }
            const className = clsx({
                lost: props.wrongGuessCount > index
            })
            return <span
                className={`chip ${className}`}
                key={val.name}
                style={styles}>
                {val.name}
            </span>
        })
        return languageElement
    }
    return (
        <section className='languge-section'>
            {getLanguages(languages)}
        </section>
    )
}

export default Language
