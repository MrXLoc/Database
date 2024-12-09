import React from 'react';
import './usermodal.css'; // Import CSS file
const UserModal = ({ user, isEditing, onClose, onSave, onInputChange }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={onInputChange}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={onInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={onInputChange}
                    placeholder="Phone Number"
                />
                <input
                    type="text"
                    name="accountStatus"
                    value={user.accountStatus}
                    onChange={onInputChange}
                    placeholder="Account Status"
                />
                <input
                    type="text"
                    name="familyName"
                    value={user.familyName}
                    onChange={onInputChange}
                    placeholder="Family Name"
                />
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={onInputChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={onInputChange}
                    placeholder="Address"
                />
                <input
                    type="date"
                    name="startDate"
                    value={user.startDate}
                    onChange={onInputChange}
                    placeholder="Start Date"
                />

                {/* Conditional Inputs based on Role */}
                {user.totalTrips !== undefined ? (
                    <>
                        <input
                            type="number"
                            name="totalTrips"
                            value={user.totalTrips}
                            onChange={onInputChange}
                            placeholder="Total Trips"
                        />
                        <input
                            type="number"
                            name="totalAmountPaid"
                            value={user.totalAmountPaid}
                            onChange={onInputChange}
                            placeholder="Total Amount Paid"
                        />
                    </>
                ) : (
                    <>
                        <input
                            type="number"
                            name="totalDriverTrips"
                            value={user.totalDriverTrips}
                            onChange={onInputChange}
                            placeholder="Total Driver Trips"
                        />
                        <input
                            type="number"
                            name="totalAmountReceived"
                            value={user.totalAmountReceived}
                            onChange={onInputChange}
                            placeholder="Total Amount Received"
                        />
                    </>
                )}

                <button className="save-button" onClick={onSave}>
                    {isEditing ? 'Save' : 'Add'}
                </button>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UserModal;
