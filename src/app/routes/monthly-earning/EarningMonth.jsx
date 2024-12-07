import React, { useEffect, useState } from 'react';
import MonthlyEarning from '../../../views/MonthlyEarning/MonthlyEarning';
import axios from 'axios';


const mockEarnings = [
    { month: 'January', totalEarnings: 5000 },
    { month: 'February', totalEarnings: 4500 },
    { month: 'March', totalEarnings: 6000 },
];

const EarnMonthPage = () => {
    const [earnings, setEarnings] = useState([]);

    useEffect(() => {
        
        setEarnings(mockEarnings);
    }, []);

    return <MonthlyEarning data={earnings} />;
};

export default EarnMonthPage;
