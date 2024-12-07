import React from 'react';
import './TripDetails.css';

const TripDetails = ({ data = [] }) => {
    return (
        <div className="trip-details-container">
            <h1 className="trip-details-title">Trip Details</h1>
            {data.length === 0 ? (
                <div>No trips available.</div>
            ) : (
                <table className="trip-table">
                    <thead>
                        <tr>
                            <th>Trip ID</th>
                            <th>Driver Name</th>
                            <th>Destination</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((trip) => (
                            <tr key={trip.id}>
                                <td>{trip.id}</td>
                                <td>{trip.driverName}</td>
                                <td>{trip.destination}</td>
                                <td>{trip.date}</td>
                                <td>{trip.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TripDetails;
