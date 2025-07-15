import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { rankingDataType, rankingData as rData } from '../data/userData';
import { useAuth } from '../AuthContent';


const Ranking = () => {
    const { isLoggedIn, token } = useAuth()
    const [data, setData] = useState<rankingDataType | null>(null)
    const [error, setError] = useState<string>('')
    const { quizId } = useParams<{ quizId: string }>()
    const navigate = useNavigate()
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/quiz/${quizId}/marks/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                })
                if (!res.ok) {
                    throw new Error('Failed to fetch protected data');
                }
                const result: rankingDataType = await res.json()
                setData(result)
            } catch (err: any) {
                setError(err.message)
            }
        }
        if (token) {
            fetchData()
        }
    }, [token])

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!data || typeof data === null) return <p>Loading...</p>;
    return (
        <div className="ranking-container">
            {data ? (
                <>
                    <h2 className="quiz-title">🏆 {data.quiz_name} Rankings</h2>
                    <div className="ranking-list">
                        {data.results.map((entry, index) => (
                            <div key={entry.marks_id} className="ranking-card">
                                <div className="ranking-rank">{index === 0 ? '🥇' : `#${index + 1}`}</div>
                                <div className="ranking-details">
                                    <h3 className="username">{entry.user.username}</h3>
                                    <p className="score">Score: <strong>{entry.marks}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No ranking data found.</p>
            )}
        </div>
    );
};

export default Ranking;
