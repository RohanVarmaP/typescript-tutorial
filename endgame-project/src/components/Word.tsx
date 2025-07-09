import React from 'react'

const Word = (props) => {
    const letterElements = props.currentWord.split('').map((letter, index) => {
        const isGuessed = props.letterGuessed.includes(letter)
        const shouldShow = isGuessed || props.isGameOver
        const styles = {
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
