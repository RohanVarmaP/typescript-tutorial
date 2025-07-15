import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'

const UnattemptedQuiz = (props: { homeData: homeDataType }) => {
    console.log()

    const uadata = props.homeData.not_attempted_quizzes
    return (
        <div className='quiz-details'>
            <QuizTable from='unattempted' data={uadata} />
        </div>
    )
}

export default UnattemptedQuiz
