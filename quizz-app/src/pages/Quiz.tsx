import React, { useState } from 'react'
import { quizDatatype, quizData } from '../data/userData'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContent';

const Quiz = () => {
    const { isLoggedIn, token } = useAuth();
    const [data, setData] = useState<quizDatatype | null>(null);
    const [error, setError] = useState<string>('')
    const { quizId } = useParams()
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
                const res = await fetch(`http://127.0.0.1:8000/api/quiz/${quizId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch protected data');
                }

                const result: quizDatatype = await res.json();
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
    if (!data || typeof data === null) return <p>Loading...</p>;

    function getQuizData() {
        if (!data || typeof data === null) return <p>Loading...</p>;
        return data.questions.map((val, index) => (
            <label className='question-label' key={val.question.question_id}>
                <p>{index + 1}. {val.question.question}</p>

                <label>
                    <input type='radio' name={val.question.question_id} value="A" />
                    A. {val.question.option_a}
                </label>
                <br />

                <label>
                    <input type='radio' name={val.question.question_id} value="B" />
                    B. {val.question.option_b}
                </label>
                <br />

                <label>
                    <input type='radio' name={val.question.question_id} value="C" />
                    C. {val.question.option_c}
                </label>
                <br />

                <label>
                    <input type='radio' name={val.question.question_id} value="D" />
                    D. {val.question.option_d}
                </label>
                <hr />
            </label>

        ))
    }
    return (
        <>
            <form className='quiz-section'>
                <h2>{data.quiz_name}</h2>
                <h4>{data.username}</h4>

                {getQuizData()}

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Quiz
