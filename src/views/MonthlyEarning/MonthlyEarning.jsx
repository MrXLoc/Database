import React from 'react';
import './MonthlyEarning.css';

const MonthlyEarning = ({ data = [] }) => {
    return (
        <div className="monthly-earning-container">
            <h1 className="monthly-earning-title">Monthly Earnings</h1>
            {data.length === 0 ? (
                <div>No earnings data available.</div>
            ) : (
                <table className="earning-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Total Earnings</th>
                            <th>Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((earning) => (
                            <tr key={earning.userId}>
                                <td>{earning.userId}</td>
                                <td>{earning.totalEarnings}</td>
                                <td>{earning.month}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MonthlyEarning;
