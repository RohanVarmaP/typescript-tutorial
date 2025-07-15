import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { rankingDataType, rankingData as rData } from '../data/userData';


const Ranking = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const [rankingData, setRankingData] = useState<rankingDataType | null>(null);
    // const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setRankingData(rData)
    }, [])

    // useEffect(() => {
    //     if (!quizId) return;

    //     // Only fetch if data isn't already loaded OR if quizId changes
    //     const fetchRanking = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch(`http://127.0.0.1:8000/api/quiz/${quizId}/marks/`);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch ranking data');
    //             }
    //             const data: rankingDataType = await response.json();
    //             setRankingData(data);
    //         } catch (error) {
    //             console.error('Error fetching ranking:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchRanking();
    // }, [quizId]); // re-run only when quizId changes

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
