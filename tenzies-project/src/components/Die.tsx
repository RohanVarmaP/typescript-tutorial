import React from 'react'

type diePropsType = {
    value: number,
    isHeld: boolean,
    id: string,
    hold: () => void
}

const Die = (props: diePropsType) => {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    return (
        <button
            onClick={props.hold}
            style={styles}
            aria-label={`This is a Die with value ${props.value}, ${props.isHeld ? "held" : 'not held'}`}
            aria-pressed={props.isHeld}>
            {props.value}
        </button>
    )
}

export default Die