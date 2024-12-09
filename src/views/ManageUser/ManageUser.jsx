import React, { useState } from 'react';
import './ManageUser.css';

const ManageUser = ({ data = [], onAdd, onEdit, onDelete }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false); 
    const [isEditing, setIsEditing] = useState(false);

    const handleDetailsClick = (user) => {
        const url = `https://f1d0-14-191-102-163.ngrok-free.app/api/user/account/${user.username}`;
    
        fetch(url, {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched user details:', data); 
                setSelectedUser(data); 
                setShowModal(true);    
            })
            .catch((err) => console.log('Error fetching user details:', err));
    };
    

    const handleCloseModal = () => {
        setSelectedUser(null);
        setShowModal(false);
        setIsEditing(false);
    };

    const handleSave = () => {
        if (isEditing && selectedUser) {
            onEdit(selectedUser);
        } else if (!isEditing) {
            onAdd(selectedUser);
        }
        handleCloseModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]: value });
    };

    return (
        <div className="manage-user-container">
            <h1 className="manage-user-title">Manage Users</h1>
            {data.length === 0 ? (
                <div>No users available.</div>
            ) : (
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Account Status</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data)?(
                        data.map((user) => (
                            <tr key={user.username}>
                                <td>{user.username}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.accountStatus}</td>
                                <td>{user.startDate}</td>
                                <td>
                                    <button className="details-button" onClick={() => handleDetailsClick(user)}>Details</button>
                                    <button className="edit-button" onClick={() => { setSelectedUser(user); setShowModal(true); setIsEditing(true); }}>Edit</button>
                                    <button className="delete-button" onClick={() => onDelete(user.username)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="6">No valid data available.</td></tr>
                    )}
                    </tbody>
                </table>
            )}

            {/* Modal */}
            {showModal && selectedUser && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
                        <input
                            type="text"
                            name="username"
                            value={selectedUser.username}
                            onChange={handleInputChange}
                            placeholder="Username"
                        />
                        <input
                            type="email"
                            name="email"
                            value={selectedUser.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            value={selectedUser.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                        />
                        <input
                            type="text"
                            name="accountStatus"
                            value={selectedUser.accountStatus}
                            onChange={handleInputChange}
                            placeholder="Account Status"
                        />
                        <input
                            type="text"
                            name="familyName"
                            value={selectedUser.familyName}
                            onChange={handleInputChange}
                            placeholder="Family Name"
                        />
                        <input
                            type="text"
                            name="firstName"
                            value={selectedUser.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="address"
                            value={selectedUser.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                        />
                        <input
                            type="date"
                            name="startDate"
                            value={selectedUser.startDate}
                            onChange={handleInputChange}
                            placeholder="Start Date"
                        />

                        {/* Display details based on user role */}
                        {selectedUser.totalTrips !== undefined ? (
                            <>
                                <input
                                    type="number"
                                    name="totalTrips"
                                    value={selectedUser.totalTrips}
                                    onChange={handleInputChange}
                                    placeholder="Total Trips"
                                />
                                <input
                                    type="number"
                                    name="totalAmountPaid"
                                    value={selectedUser.totalAmountPaid}
                                    onChange={handleInputChange}
                                    placeholder="Total Amount Paid"
                                />
                            </>
                        ) : (
                            <>
                                <input
                                    type="number"
                                    name="totalDriverTrips"
                                    value={selectedUser.totalDriverTrips}
                                    onChange={handleInputChange}
                                    placeholder="Total Driver Trips"
                                />
                                <input
                                    type="number"
                                    name="totalAmountReceived"
                                    value={selectedUser.totalAmountReceived}
                                    onChange={handleInputChange}
                                    placeholder="Total Amount Received"
                                />
                            </>
                        )}

                        <button className="save-button" onClick={handleSave}>
                            {isEditing ? 'Save' : 'Add'}
                        </button>
                        <button className="close-button" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageUser;
