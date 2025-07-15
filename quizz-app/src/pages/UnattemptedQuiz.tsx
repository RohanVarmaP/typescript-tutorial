import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContent';

const UnattemptedQuiz = () => {
    const { isLoggedIn, token } = useAuth();
    const [data, setData] = React.useState<homeDataType | null>(null);
    const [error, setError] = React.useState('');
    const navigate = useNavigate()
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/home/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch protected data');
                }

                const result = await res.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!data) return <p>Loading...</p>;

    const uadata = data.not_attempted_quizzes
    return (
        <div className='quiz-details'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <QuizTable from='unattempted' data={uadata} />
        </div>
    )
}

export default UnattemptedQuiz
