import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { rankingDataType, rankingData as rData } from '../data/userData';
import { useAuth } from '../AuthContent';


const Ranking = () => {
    const { isLoggedIn, token } = useAuth()
    const [data, setData] = useState<rankingDataType | null>(null)
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert('need to login')
            navigate('/login/')
        }
    }, [])

    const { quizId } = useParams<{ quizId: string }>();
    const [rankingData, setRankingData] = useState<rankingDataType | null>(null);
    // const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setRankingData(rData)
    }, [])

    return (
        <div className="ranking-container">
            {rankingData ? (
                <>
                    <h2 className="quiz-title">🏆 {rankingData.quiz_name} Rankings</h2>
                    <div className="ranking-list">
                        {rankingData.results.map((entry, index) => (
                            <div key={entry.marks_id} className="ranking-card">
                                <div className="ranking-rank">{index === 0 ? '🥇' : `#${index + 1}`}</div>
                                <div className="ranking-details">
                                    <h3 className="username">{entry.user.username}</h3>
                                    <p className="score">Score: <strong>{entry.marks}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No ranking data found.</p>
            )}
        </div>











        // <div className="ranking-container">
        //     {loading ? (
        //         <p>Loading ranking...</p>
        //     ) : rankingData ? (
        //         <>
        //             <h2 className="quiz-title">🏆 {rankingData.quiz_name} Rankings</h2>
        //             <div className="ranking-list">
        //                 {rankingData.results.map((entry, index) => (
        //                     <div key={entry.marks_id} className="ranking-card">
        //                         <div className="ranking-rank">{index === 0 ? '🥇' : `#${index + 1}`}</div>
        //                         <div className="ranking-details">
        //                             <h3 className="username">{entry.user.username}</h3>
        //                             <p className="score">Score: <strong>{entry.marks}</strong></p>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </>
        //     ) : (
        //         <p>No ranking data found.</p>
        //     )}
        // </div>
    );
};

export default Ranking;
