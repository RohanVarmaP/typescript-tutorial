import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContent';

const UnattemptedQuiz = (props: { homeData: homeDataType }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate()
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        alert('need to login')
        navigate('/login/')
    }

    const uadata = props.homeData.not_attempted_quizzes
    return (
        <div className='quiz-details'>
            <QuizTable from='unattempted' data={uadata} />
        </div>
    )
}

export default UnattemptedQuiz
