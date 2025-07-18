import React, { useEffect, useState } from 'react'
import { quizDatatype, quizData } from '../data/userData'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../AuthContent'

type singleAnswerType = {
    "question_id": string,
    "useranswer": string
}

type answerType = {
    "answers": singleAnswerType[]
}

const Quiz = () => {
    const quizAnswers = localStorage.getItem('quizWithAnswers')
    const quizWithAnswers = quizAnswers ? JSON.parse(quizAnswers) : null
    const { isLoggedIn, token } = useAuth();
    const [data, setData] = useState<quizDatatype | null>(null);
    const [error, setError] = useState<string>('')
    const [answers, setAnswers] = useState<answerType | null>(null)
    const [loading, setLoading] = useState(false);
    const { quizId } = useParams()
    const navigate = useNavigate()
    const [answer, setAnswer] = useState<{ [questionId: string]: string }>(setAnswerValue())
    function setAnswerValue(): { [questionId: string]: string } {
        if (quizWithAnswers && quizWithAnswers.quizId === quizId) {
            return quizWithAnswers.answer
        } else {
            return {}
        }
    }

    // console.log(answers)
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])

    useEffect(() => {
        const useranswers: singleAnswerType[] = []
        Object.entries(answer).map(([key, value]) => {
            useranswers.push({
                "question_id": key,
                "useranswer": value
            })
        })
        setAnswers({ answers: useranswers })
        localStorage.setItem('quizWithAnswers', JSON.stringify({ quizId: quizId, answer: answer }))
    }, [answer])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/quiz/${quizId}`, {
                    headers: {
                        'Content-Typ e': 'application/json',
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

    const handleAnswerChange = (questionId: string, option: string) => {
        setAnswer((prev) => ({
            ...prev,
            [questionId]: option,
        }))
    }

    function getQuizData() {
        if (!data || typeof data === null) return <p>Loading...</p>;
        return data.questions.map((val, index) => (
            <div className='question-label' key={val.question.question_id}>
                <p>{index + 1}. {val.question.question}</p>

                <label>
                    <input
                        type='radio'
                        name={val.question.question_id}
                        value="A"
                        checked={answer[val.question.question_id] === 'A'}
                        onChange={() => handleAnswerChange(val.question.question_id, 'A')}
                    />
                    A. {val.question.option_a}
                </label>
                <hr />

                <label>
                    <input
                        type='radio'
                        name={val.question.question_id}
                        value="B"
                        checked={answer[val.question.question_id] === 'B'}
                        onChange={() => handleAnswerChange(val.question.question_id, 'B')}
                        required
                    />
                    B. {val.question.option_b}
                </label>
                <hr />

                <label>
                    <input
                        type='radio'
                        name={val.question.question_id}
                        value="C"
                        checked={answer[val.question.question_id] === 'C'}
                        onChange={() => handleAnswerChange(val.question.question_id, 'C')}
                    />
                    C. {val.question.option_c}
                </label>
                <hr />

                <label>
                    <input
                        type='radio'
                        name={val.question.question_id}
                        value="D"
                        checked={answer[val.question.question_id] === 'D'}
                        onChange={() => handleAnswerChange(val.question.question_id, 'D')}
                    />
                    D. {val.question.option_d}
                </label>
                <hr />
            </div>

        ))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/quiz/${quizId}/submit/`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(answers),
                }
            )
            if (res.status !== 200) {
                setError('Invalid entries. Please try again.');
            } else {
                navigate('/')
            }
        } catch (err: any) {
            setError(err.message);
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <form className='quiz-section' onSubmit={(e) => { handleSubmit(e) }}>
                <h2>{data.quiz_name}</h2>
                <h4>{data.username}</h4>

                {getQuizData()}

                <button type='submit' disabled={loading}>{loading ? "Submitting" : 'Submit'}</button>
            </form>
        </>
    )
}

export default Quiz
