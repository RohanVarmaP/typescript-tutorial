import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'
import { useAuth } from '../AuthContent';
import { useNavigate } from 'react-router-dom';

const CompletedQuiz = (props: { homeData: homeDataType }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate()
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        alert('need to login')
        navigate('/login/')
    }

    const cqdata = props.homeData.fully_attempted_quizzes
    return (
        <div className='quiz-details'>
            <QuizTable from='completed' data={cqdata} />
        </div>
    )
}

export default CompletedQuiz
