import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TripDetails from '../../../views/TripDetails/TripDetails';

const TripDetailsPage = () => {
    const { username } = useParams();
    const [trips, setTrips] = useState([]);
    const [inputUsername, setInputUsername] = useState(username || ''); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrips = async () => {
            if (!username) return; 
            try {
                const response = await fetch(`https://e921-14-241-225-130.ngrok-free.app/trips/${username}`, {
                    method: 'GET',
                    headers: new Headers({
                        'ngrok-skip-browser-warning': '69420',
                    }),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTrips(data);
            } catch (error) {
                console.error('Error fetching trip details:', error);
            }
        };

        fetchTrips();
    }, [username]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUsername.trim()) {
            navigate(`/trips/${inputUsername}`); 
        }
    };

    return (
        <div className="trip-details-page">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                    placeholder="Enter Username"
                />
                <button type="submit">Submit</button>
            </form>
            <TripDetails data={trips} />
        </div>
    );
};

export default TripDetailsPage;
