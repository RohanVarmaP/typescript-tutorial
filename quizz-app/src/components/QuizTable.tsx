import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { quizType } from '../data/userData'
import { useAuth } from '../AuthContent'
type QuizPropsType = {
    from: string,
    data: quizType[]
}
const QuizTable = (props: QuizPropsType) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate()
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])

    const generateQuizData = props.data.map((quiz, index) => (
        <article key={quiz.quiz_id} className='quiz-article'>
            <h3>{quiz.quiz_name}</h3>
            <div>
                {props.from !== 'completed'
                    ? props.from !== 'unattempted'
                        ? <Link to={`/quiz/${quiz.quiz_id}/`}><button>Re-attempt Quiz</button></Link>
                        : <Link to={`/quiz/${quiz.quiz_id}/`}><button>Attempt Quiz</button></Link>
                    : null}
                {props.from !== 'unattempted'
                    ? <>
                        <Link to={`/quiz/${quiz.quiz_id}/review/`}><button>Review Quiz</button></Link><Link to={`/quiz/${quiz.quiz_id}/rank/`}><button>Rank</button></Link>
                    </>
                    : null}
            </div>
        </article>
    ))
    return (
        <>
            {generateQuizData}
        </>
    )
}

export default QuizTable
