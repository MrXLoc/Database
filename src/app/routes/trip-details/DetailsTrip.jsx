import React, { useEffect, useState } from 'react';
import TripDetails from '../../../views/TripDetails/TripDetails';
// fix part
import { fetchUserData } from './path/to/your/api';

const TripDetailsPage = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTripsData = async () => {
            try {
                const data = await fetchUserData();
                setTrips(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getTripsData();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return <TripDetails data={trips} />;
};
//end

export default TripDetailsPage;
