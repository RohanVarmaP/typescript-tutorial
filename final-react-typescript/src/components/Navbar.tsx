import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <h1>MY Nav</h1>
            <div>
                <Link to='/'><button className='nav-button'>Home</button></Link>
                <Link to='/about'><button className='nav-button'>About</button></Link>
                <Link to='/contact'><button className='nav-button'>Contact</button></Link>
                <Link to='/products'><button className='nav-button'>Products</button></Link>
            </div>
        </>
    )
}

export default Navbar
