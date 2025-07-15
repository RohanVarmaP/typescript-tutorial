import React from 'react'
import { reviewData } from '../data/userData'

const ReviewQuiz = () => {
    function getReviewData() {
        return reviewData.questions.map((val, index) => (
            <label className='question-label review-question-label' key={val.question.question_id}>
                <p>{index + 1}. {val.question.question}</p>

                <label className={val.question.correct_answer
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'A')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'A')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'A'} name={val.question.question_id} value="A" aria-disabled disabled />
                    A. {val.question.option_a}
                </label>
                <br />

                <label className={val.question.correct_answer
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'B')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'B')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'B'} name={val.question.question_id} value="B" aria-disabled disabled />
                    B. {val.question.option_b}
                </label>
                <br />

                <label className={val.question.correct_answer
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'C')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'C')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'C'} name={val.question.question_id} value="C" aria-disabled disabled />
                    C. {val.question.option_c}
                </label>
                <br />

                <label className={val.question.correct_answer
                    ? 'correct'
                    : (!val.is_correct && val.user_answer.useranswer === 'D')
                        ? 'wrong'
                        : (val.is_correct && val.user_answer.useranswer === 'D')
                            ? 'correct'
                            : ''
                }>
                    <input type='radio' checked={val.user_answer.useranswer === 'D'} name={val.question.question_id} value="D" aria-disabled disabled />
                    D. {val.question.option_d}
                </label>
            </label>
        ))
    }
    return (
        <form className='quiz-section'>
            <h2>{reviewData.quiz_name}</h2>
            <h4>{reviewData.username}</h4>

            {getReviewData()}
        </form>
    )
}

export default ReviewQuiz
