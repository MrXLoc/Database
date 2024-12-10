import React from 'react';
import './MonthlyEarning.css';

const MonthlyEarning = ({ data = [] }) => {
    return (
        <div className="monthly-earning-container">
            {data.length === 0 ? (
                <div>No earnings data available.</div>
            ) : (
                <>
                    <h1 className="monthly-earning-title">Monthly Earnings</h1>
                    <table className="earning-table">
                        <thead>
                            <tr>
                                <th>Driver ID</th>
                                <th>Month</th>
                                <th>Total Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((earning, index) => (
                                <tr key={index}>
                                    <td>{earning.driverId}</td>
                                    <td>{earning.month}</td>
                                    <td>{earning.totalEarnings}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default MonthlyEarning;
