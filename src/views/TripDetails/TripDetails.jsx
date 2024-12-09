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
                            <th>Departure</th>
                            <th>Destination</th>
                            <th>Trip Start</th>
                            <th>Trip End</th>
                            <th>Service Name</th>
                            <th>Total Cost</th>
                            <th>Rating</th>
                            <th>Feedback</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((trip) => (
                            <tr key={trip.id}>
                                <td>{trip.id}</td>
                                <td>{trip.driverName}</td>
                                <td>{trip.departure}</td>
                                <td>{trip.destination}</td>
                                <td>{trip.tripStart}</td>
                                <td>{trip.tripEnd}</td>
                                <td>{trip.serviceName}</td>
                                <td>{Number(trip.totalCost).toFixed(2) || '0.00'}</td>
                                <td>{trip.rating}</td>
                                <td>{trip.feedback}</td>
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
