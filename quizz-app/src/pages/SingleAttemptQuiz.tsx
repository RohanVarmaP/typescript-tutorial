import React from 'react'
import { homeDataType } from '../data/userData'
import QuizTable from '../components/QuizTable'
import { useAuth } from '../AuthContent';
import { useNavigate } from 'react-router-dom';

const SingleAttemptQuiz = (props: { homeData: homeDataType }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate()
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        alert('need to login')
        navigate('/login/')
    }

    const sadata = props.homeData.single_attempt_completed_quizzes
    return (
        <div className='quiz-details'>
            <QuizTable from='attempted' data={sadata} />
        </div>
    )
}

export default SingleAttemptQuiz
