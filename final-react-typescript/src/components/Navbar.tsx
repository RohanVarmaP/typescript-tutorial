import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>MY Nav</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/contact'><button>Contact</button></Link>
            <Link to='/products'><button>Products</button></Link>
        </div>
    )
}

export default Navbar
