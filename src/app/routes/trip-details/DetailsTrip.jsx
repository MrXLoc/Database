import React, { useEffect, useState } from 'react';
import TripDetails from '../../../views/TripDetails/TripDetails';
import axios from 'axios';


const mockTrips = [
    {
        id: 1,
        driverName: 'Nguyen Van A',
        departure: '259 Ly THuong Kiet, Quan 10',
        destination: '167 Tan Lap, Thu Duc',
        tripStart: '8/12/2024 11:30:29',
        tripEnd: '8/12/2024 12:21:15',
        serviceName: 'Standard',
        totalCost: '320.000 VND',
        rating: 5,
        feedback: 'Excellent',
        status: 'Completed',
    },
    {
        id: 2,
        driverName: 'Nguyen Van B',
        departure: '259 Ly THuong Kiet, Quan 10',
        destination: '167 Tan Lap, Thu Duc',
        tripStart: '8/12/2024 11:30:29',
        tripEnd: '8/12/2024 12:21:15',
        serviceName: 'Standard',
        totalCost: '320.000 VND',
        rating: 5,
        feedback: 'A bit late',
        status: 'Completed',
    },
    {
        id: 3,
        driverName: 'Nguyen Van C',
        departure: '259 Ly THuong Kiet, Quan 10',
        destination: '167 Tan Lap, Thu Duc',
        tripStart: '8/12/2024 11:30:29',
        tripEnd: '8/12/2024 12:21:15',
        serviceName: 'Premium',
        totalCost: '370.000 VND',
        rating: 4,
        feedback: 'Excellent',
        status: 'Completed',
    },
];


const TripDetailsPage = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        
        setTrips(mockTrips);
    }, []);

    return <TripDetails data={trips} />;
};

export default TripDetailsPage;
