import React from 'react'
import { Link } from 'react-router-dom'
import produtsImg from '../assets/images/products_img2.png'

const Home = () => {
    return (
        <>
            <h1>welcome to Home</h1>
            <Link to='/products'>
                <img aria-label='view products' src={produtsImg} alt="Placeholder" />
            </Link>
        </>
    )
}

export default Home
