import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

const Navbar = () => {
    return (
        <nav>

            <div className='left'>
                <Breadcrumbs />
            </div>
            <div className='right'><Link to={'/login'}>Login</Link></div>
        </nav>
    )
}

export default Navbar
