import React from 'react';
import { scoretype } from '../App';

const Ranking = ({ rankingList }: { rankingList: scoretype[] }) => {
    const difficulties = ['easy', 'medium', 'hard'];

    const getSortedScores = (difficulty: string) => {
        return rankingList
            .filter(score => score.difficulty === difficulty)
            .sort((a, b) => a.timeTaken - b.timeTaken);
    };

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}m ${sec}s`;
    };

    return (
        <div className="ranking-container">
            <h1 className="title">🏆 Player Rankings</h1>
            <div className="grid">
                {difficulties.map(diff => {
                    const scores = getSortedScores(diff);
                    return (
                        <div className="card" key={diff}>
                            <h2>{diff} Mode</h2>
                            {scores.length === 0 ? (
                                <p style={{ textAlign: 'center' }}>No scores yet.</p>
                            ) : (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Time Taken</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scores.map((score, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{score.date}</td>
                                                <td>{score.time}</td>
                                                <td>{formatTime(score.timeTaken)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Ranking;
