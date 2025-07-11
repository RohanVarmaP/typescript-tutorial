import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <p>start game <br /> select difficulty</p>
            <Link to={'/game?difficulty=easy'}>
                <button className='home-buttons'>Easy(two clues)</button>
            </Link>
            <Link to={'/game?difficulty=standard'}>
                <button className='home-buttons'>Standard(1 clue)</button>
            </Link>
            <Link to={'/game?difficulty=hard'}>
                <button className='home-buttons'>Hard(no clue)</button>
            </Link>
        </>
    )
}

export default Home
