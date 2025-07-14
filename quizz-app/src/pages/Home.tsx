import React from 'react'
import { Link } from 'react-router-dom'
import Single from '../assets/single.png'
import Zero from '../assets/zero.png'
import Double from '../assets/two.png'

const Home = () => {
    return (
        <section className='home-section'>
            <Link to={'/unattemptdedquiz/'}>
                <img src={Zero} alt="Unattempted Quizzes" />
                <p>Unattempted Quizzes</p>
            </Link>
            <Link to={'/singleattemptedquiz/'}>
                <img src={Single} alt="Single attempted completed Quizzes" />
                <p>Single attempted completed Quizzes</p>
            </Link>
            <Link to={'completedquiz'}>
                <img src={Double} alt="Completed Quizzes" />
                <p>Completed Quizzes</p>
            </Link>
        </section>
    )
}

export default Home
