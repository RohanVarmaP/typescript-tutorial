import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'

const SingleAttemptQuiz = (props: { homeData: homeDataType }) => {
    const sadata = props.homeData.single_attempt_completed_quizzes
    return (
        <div className='quiz-details'>
            <QuizTable from='attempted' data={sadata} />
        </div>
    )
}

export default SingleAttemptQuiz
