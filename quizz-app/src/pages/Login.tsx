import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <form className='auth-section'>
            <h4>Login</h4>
            <label htmlFor='username'>
                Username:
                <input name='username' id='username' type="text" placeholder='user1' />
            </label>
            <label htmlFor='password'>
                Password:
                <input name='password' id='password' type="password" placeholder='password' />
            </label>
            <button type='submit'>login</button>
            <p>don't have an account? <Link to={'/signup'}>Signup</Link></p>
        </form>
    )
}

export default Login
