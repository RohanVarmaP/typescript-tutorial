import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'

const CompletedQuiz = (props: { homeData: homeDataType }) => {
    const cqdata = props.homeData.fully_attempted_quizzes
    return (
        <div>
            <QuizTable from='completed' data={cqdata} />
        </div>
    )
}

export default CompletedQuiz
