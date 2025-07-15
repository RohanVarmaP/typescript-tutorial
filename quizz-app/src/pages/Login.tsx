import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContent';

const Login = () => {
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = React.useState('')
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const { setToken } = useAuth()
    React.useEffect(() => {
        if (isLoggedIn) {
            alert('already login')
            navigate('/')
        }
    }, [])

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
        });
        const data = await res.json();

        if (res.ok && data.token) {
            setToken(data.token);
            setError('');
            navigate('/');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };
    return (
        <form onSubmit={handleLogin} className='auth-section'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h4>Login</h4>
            <label htmlFor='username'>
                Username:
                <input
                    onChange={(e) => {
                        setUsername(e.currentTarget.value)
                    }}
                    name='username'
                    id='username'
                    type="text"
                    value={username}
                    placeholder='user1' />
            </label>
            <label htmlFor='password'>
                Password:
                <input
                    onChange={(e) => {
                        setPassword(e.currentTarget.value)
                    }}
                    name='password'
                    id='password'
                    type="password"
                    value={password}
                    placeholder='password' />
            </label>
            <button type='submit'>login</button>
            <p>don't have an account? <Link to={'/signup'}>Signup</Link></p>
        </form>
    )
}

export default Login
