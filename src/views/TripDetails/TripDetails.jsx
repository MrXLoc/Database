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
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) ? (
                            data.map((trip) => (
                                <tr key={trip.tripId}>
                                    <td>{trip.tripId}</td>
                                    <td>{`${trip.driverFirstName} ${trip.driverFamilyName}`}</td>
                                    <td>{trip.departure}</td>
                                    <td>{trip.destination}</td>
                                    <td>{new Date(trip.tripStart).toLocaleString()}</td>
                                    <td>{new Date(trip.tripEnd).toLocaleString()}</td>
                                    <td>{trip.serviceName}</td>
                                    <td>{trip.totalCost.toFixed(2)} USD</td>
                                    <td>{trip.rating}</td>
                                    <td>{trip.feedback}</td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="10">No valid data available.</td></tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TripDetails;
