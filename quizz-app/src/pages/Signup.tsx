import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <form className='auth-section'>
            <h4>Signup</h4>
            <label htmlFor='username'>
                Username:
                <input name='username' id='username' type="text" placeholder='user1' />
            </label>
            <label htmlFor='password'>
                Password:
                <input name='password' id='password' type="password" placeholder='password' />
            </label>
            <label htmlFor='confirm_password'>
                Confirm Password:
                <input name='confirm_password' id='confirm_password' type="password" placeholder='re-enter password' />
            </label>
            <button type='submit'>login</button>
            <p>don't have an account? <Link to={'/signup'}>Signup</Link></p>
        </form>
    )
}

export default Signup
