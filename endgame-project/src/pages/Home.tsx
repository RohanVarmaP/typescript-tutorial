import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home-section'>
            <h1 className='home-component'>Home</h1>
            <p className='home-component'>start game <br /> select difficulty</p>
            <Link to={'/game?difficulty=easy'}>
                <button className='home-buttons'>Easy(two clues)</button>
            </Link>
            <Link to={'/game?difficulty=standard'}>
                <button className='home-buttons'>Standard(one clue)</button>
            </Link>
            <Link to={'/game?difficulty=hard'}>
                <button className='home-buttons'>Hard(no clue)</button>
            </Link>
        </section>
    )
}

export default Home
