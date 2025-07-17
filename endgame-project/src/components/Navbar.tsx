import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>
                <button className='nav-buttons'>home</button>
            </Link>
            <Link to={'/game'}>
                <button className='nav-buttons'>New Game</button>
            </Link>
            <Link to={'/ranking'}>
                <button className='nav-buttons'>Ranking</button>
            </Link>
        </nav>
    )
}

export default Navbar
