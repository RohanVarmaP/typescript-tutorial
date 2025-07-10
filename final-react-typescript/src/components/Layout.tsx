import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = (props: { cartLength: number }) => {
    return (
        <>
            <header>
                <Navbar cartLength={props.cartLength} />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
