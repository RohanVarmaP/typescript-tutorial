import React from 'react'

type wordPropsType = {
    currentWord: string,
    letterGuessed: string[],
    isGameOver: boolean
}

const Word = (props: wordPropsType): React.JSX.Element => {
    const letterElements: React.JSX.Element[] = props.currentWord.split('').map((letter: string, index: number) => {
        const isGuessed: boolean = props.letterGuessed.includes(letter)
        const shouldShow: boolean = isGuessed || props.isGameOver
        const styles: React.CSSProperties = {
            color: isGuessed ? '#F9F4DA' : props.isGameOver ? '#EC5D49' : 'black',
        }
        return (<span key={index} style={styles}>{shouldShow ? letter.toUpperCase() : ''}</span>)
    })
    return (
        <section className='word-section'>
            {letterElements}
        </section>
    )
}

export default Word
