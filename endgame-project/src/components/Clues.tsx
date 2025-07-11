import React from 'react'
import { words as single, singleClueType } from '../data/wordsOneClue'
import { words as double, doubleClueType } from '../data/WordsTwoClues'

type cluePropsType = {
    difficulty: string,
    currentWord: string,
}
const Clues = (props: cluePropsType) => {
    if (props.difficulty === 'easy') {
        const clues: doubleClueType = double.filter(value => value.word == props.currentWord)[0]
        console.log(clues)
    } else {
        const clues: singleClueType = single.filter(value => value.word == props.currentWord)[0]
        console.log(clues)
    }
    return (
        <>
            d
        </>
    )
}

export default Clues
