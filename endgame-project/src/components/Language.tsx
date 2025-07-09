import React from 'react'
import { languages, languageType } from '../data/Languages'
import clsx from 'clsx'

const Language = (props: { wrongGuessCount: number }): React.JSX.Element => {
    function getLanguages(languages: languageType[]) {
        const languageElement: React.JSX.Element[] = languages.map((val: languageType, index: number): React.JSX.Element => {
            const styles: Omit<languageType, 'name'> = {
                backgroundColor: val.backgroundColor,
                color: val.color
            }
            const className: string = clsx({
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
