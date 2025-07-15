import React from 'react'
import { reviewData, reviewDatatype } from '../data/userData'
import { useAuth } from '../AuthContent';
import { useNavigate, useParams } from 'react-router-dom';

const ReviewQuiz = () => {
    const { isLoggedIn, token } = useAuth();
    const navigate = useNavigate()
    const [data, setData] = React.useState<reviewDatatype | null>(null);
    const [error, setError] = React.useState<string>('')
    const { quizId } = useParams()
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('hello')
                const res = await fetch(`http://127.0.0.1:8000/api/quiz/${quizId}/view/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                })
                if (!res.ok) {
                    throw new Error('Failed to fetch protected data');
                }
                const result: reviewDatatype = await res.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            }
        }
        if (token) {
            fetchData();
        }
    }, [token])

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!data || typeof data === null) return <p>Loading...</p>;

    function getReviewData() {
        if (!data || typeof data === null) return <p>Loading...</p>;
        return data.questions.map((val, index) => (
            <label className='question-label' key={val.question.question_id}>
                <p>{index + 1}. {val.question.question}</p>

                <label className={val.question.correct_answer == 'A'
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'A')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'A')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'A'} name={val.question.question_id} value="A" aria-disabled disabled />
                    A. {val.question.option_a}
                </label>
                <br />

                <label className={val.question.correct_answer == 'B'
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'B')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'B')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'B'} name={val.question.question_id} value="B" aria-disabled disabled />
                    B. {val.question.option_b}
                </label>
                <br />

                <label className={val.question.correct_answer == 'C'
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'C')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'C')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'C'} name={val.question.question_id} value="C" aria-disabled disabled />
                    C. {val.question.option_c}
                </label>
                <br />

                <label className={val.question.correct_answer == 'D'
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'D')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'D')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'D'} name={val.question.question_id} value="D" aria-disabled disabled />
                    D. {val.question.option_d}
                </label>
            </label>
        ))
    }
    return (
        <form className='quiz-section'>
            <h2>{data.quiz_name}</h2>
            <h4>{data.username}</h4>

            {getReviewData()}
        </form>
    )
}

export default ReviewQuiz
