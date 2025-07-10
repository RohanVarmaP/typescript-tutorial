import React from 'react'
import { Link } from 'react-router-dom'
import cartImg from '../assets/images/cart_img.png'

const Navbar = () => {
    return (
        <>
            <div>
                <Link to='/'><button className='nav-button'>Home</button></Link>
                <Link to='/about'><button className='nav-button'>About</button></Link>
                <Link to='/contact'><button className='nav-button'>Contact</button></Link>
                <Link to='/products'><button className='nav-button'>Products</button></Link>
            </div>
            <Link to='/cart'><button className='nav-button right'><p>9</p><img src={cartImg} alt="Cart" /></button></Link>
        </>
    )
}

export default Navbar
