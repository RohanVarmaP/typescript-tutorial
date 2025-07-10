import React from 'react'
import { Link } from 'react-router-dom'
import cartImg from '../assets/images/cart_img.png'

const Navbar = (props: { cartLength: number }) => {
    return (
        <>
            <div>
                <Link to='/'><button className='nav-button'>Home</button></Link>
                <Link to='/contact'><button className='nav-button'>Contact</button></Link>
                <Link to='/products'><button className='nav-button'>Products</button></Link>
            </div>
            <Link to='/cart'><button className='nav-button right'><p>{props.cartLength}</p><img src={cartImg} alt="Cart" /></button></Link>
        </>
    )
}

export default Navbar
