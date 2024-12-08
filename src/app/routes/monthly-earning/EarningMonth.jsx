import React, { useEffect, useState } from 'react';
import MonthlyEarning from '../../../views/MonthlyEarning/MonthlyEarning';
// fix part
import { fetchUserData } from './path/to/your/api';

const EarnMonthPage = () => {
    const [earnings, setEarnings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
useEffect(() => {
        const getEarningsData = async () => {
            try {
                const data = await fetchUserData();
                setEarnings(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    getEarningsData();
    }, []);
 if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>; 
    }
    return <MonthlyEarning data={earnings} />;
};

export default EarnMonthPage;
