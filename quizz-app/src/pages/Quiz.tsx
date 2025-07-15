import React from 'react'
import { quizDatatype, quizData } from '../data/userData'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContent';

const Quiz = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate()
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])

    function getQuizData() {
        return quizData.questions.map((val, index) => (
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
                <h2>{quizData.quiz_name}</h2>
                <h4>{quizData.username}</h4>

                {getQuizData()}

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Quiz
