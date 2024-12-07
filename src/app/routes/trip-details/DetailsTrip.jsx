import React, { useEffect, useState } from 'react';
import TripDetails from '../../../views/TripDetails/TripDetails';
import axios from 'axios';


const mockTrips = [
    { id: 1, driverName: 'John Doe', destination: 'New York', date: '2024-12-01', status: 'Completed' },
    { id: 2, driverName: 'Jane Smith', destination: 'Los Angeles', date: '2024-12-02', status: 'Ongoing' },
    { id: 3, driverName: 'Michael Brown', destination: 'Chicago', date: '2024-12-03', status: 'Scheduled' },
];

const TripDetailsPage = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        
        setTrips(mockTrips);
    }, []);

    return <TripDetails data={trips} />;
};

export default TripDetailsPage;
