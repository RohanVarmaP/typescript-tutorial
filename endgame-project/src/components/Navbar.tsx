import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>
                <button>home</button>
            </Link>
            <Link to={'/game'}>
                <button>New Game</button>
            </Link>
            <Link to={'/ranking'}>
                <button>Ranking</button>
            </Link>
        </nav>
    )
}

export default Navbar
