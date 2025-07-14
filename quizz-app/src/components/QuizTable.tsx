import React from 'react'
import { Link } from 'react-router-dom'
import { quizType } from '../data/userData'
type QuizPropsType = {
    from: string,
    data: quizType[]
}
const QuizTable = (props: QuizPropsType) => {
    const generateQuizData = props.data.map((quiz, index) => (
        <article key={quiz.quiz_id} className='quiz-article'>
            <h3>{quiz.quiz_name}</h3>
            <div>
                {props.from !== 'completed' ? <Link to={'/quiz/'}><button>Re-attempt Quiz</button></Link> : null}
                {props.from !== 'published'
                    ? <>
                        <Link to={'/review/'}><button>Review Quiz</button></Link><Link to={'/ranking/'}><button>Rank</button></Link>
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
