import React, { useState } from 'react';
import MonthlyEarning from '../../../views/MonthlyEarning/MonthlyEarning';

const EarnMonthPage = () => {
    const [driverId, setDriverId] = useState('');
    const [month, setMonth] = useState('');
    const [error, setError] = useState('');
    const [earnings, setEarnings] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setEarnings(null);

        // Kiểm tra input
        if (!driverId.trim() || !month.trim()) {
            setError('Please fill in both fields: Driver ID and Month.');
            return;
        }

        try {
            const response = await fetch(
                `https://a4e8-125-235-127-6.ngrok-free.app/calculate-earnings?driverId=${driverId}&month=${month}`,
                {
                    method: 'GET',
                    headers: new Headers({
                        'ngrok-skip-browser-warning': '69420',
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text();
            setEarnings({
                driverId,
                month,
                totalEarnings: parseFloat(data), 
            });
        } catch (error) {
            console.error('Error fetching earnings data:', error);
            setError('Failed to fetch earnings data. Please try again.');
        }
    };

    return (
        <div className="earn-month-page">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="number"
                    value={driverId}
                    onChange={(e) => setDriverId(e.target.value)}
                    placeholder="Enter Driver ID"
                />
                <input
                    type="number"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="Enter Month (1-12)"
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {earnings && <MonthlyEarning data={[earnings]} />}
        </div>
    );
};

export default EarnMonthPage;
