import React from 'react'
import { words as single, singleClueType } from '../data/wordsOneClue'
import { words as double, doubleClueType } from '../data/WordsTwoClues'

type cluePropsType = {
    difficulty: string,
    currentWord: string,
}
const Clues = (props: cluePropsType) => {
    function getClues() {
        if (props.difficulty === 'easy') {
            const clues: doubleClueType = double.filter(value => value.word == props.currentWord)[0]
            // console.log(clues)
            return (
                <>
                    <div>
                        <p>Clue-1</p>
                        <span>{clues.clues[0]}</span>
                    </div>
                    <div>
                        <p>Clue-1</p>
                        <span>{clues.clues[1]}</span>
                    </div>
                </>
            )
        } else {
            const clues: singleClueType = single.filter(value => value.word == props.currentWord)[0]
            // console.log(clues)
            return (
                <>
                    <div>
                        <p>Clue-1:</p>
                        <span>{clues.clues}</span>
                    </div>
                </>
            )
        }
    }

    return (
        <section className='clue-section'>
            {getClues()}
        </section>
    )
}

export default Clues
