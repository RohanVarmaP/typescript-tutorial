import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContent'

const Signup = () => {
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = React.useState('')
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    React.useEffect(() => {
        if (isLoggedIn) {
            alert('already login')
            navigate('/')
        }
    }, [])

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('confirm password and password are not matching')
            return
        }
        try {
            const res = await fetch('http://127.0.0.1:8000/signup/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                }),
            })
            if (res.ok) {
                alert('Account created successfully. Please log in.');
                navigate('/login');
            } else {
                const data = await res.json();
                setError(data.error || 'Signup failed.');
            }

        } catch (err: any) {
            setError(err.message)
        }
    }
    return (
        <form className='auth-section' onSubmit={(e) => { handleLogin(e) }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h4>Signup</h4>
            <label htmlFor='username'>
                Username:
                <input
                    name='username'
                    onChange={(e) => { setUsername(e.currentTarget.value) }}
                    id='username'
                    type="text"
                    value={username}
                    placeholder='user1' />
            </label>
            <label htmlFor='password'>
                Password:
                <input
                    name='password'
                    onChange={(e) => { setPassword(e.currentTarget.value) }}
                    id='password'
                    type="password"
                    value={password}
                    placeholder='password' />
            </label>
            <label htmlFor='confirm_password'>
                Confirm Password:
                <input
                    name='confirm_password'
                    onChange={(e) => { setConfirmPassword(e.currentTarget.value) }}
                    id='confirm_password'
                    type="password"
                    value={confirmPassword}
                    placeholder='re-enter password' />
            </label>
            <button type='submit'>signup</button>
            <p>already have an account? <Link to={'/login'}>login</Link></p>
        </form>
    )
}

export default Signup
