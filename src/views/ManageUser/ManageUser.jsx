import React, { useState } from 'react';
import './ManageUser.css';
import UserModal from './usernodal.jsx';

const ManageUser = ({ data = [], onAdd, onEdit, onDelete }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const handleDetailsClick = (user) => {
        const url = `https://e921-14-241-225-130.ngrok-free.app/api/user/account/${user.username}`;

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
                setSelectedUser(data);
                setShowDetailsModal(true);
            })
            .catch((err) => console.log('Error fetching user details:', err));
    };

    const handleAddClick = () => {
        setSelectedUser({
            username: '',
            email: '',
            phoneNumber: '',
            accountStatus: '',
            familyName: '',
            firstName: '',
            address: '',
            role: '', // Thêm role mặc định
            startDate: '',
        });
        setShowModal(true);
        setIsEditing(false);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setShowModal(false);
        setShowDetailsModal(false);
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
            <button className="add-button" onClick={handleAddClick}>
                Add User
            </button>
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
                            <th>Role</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) ? (
                            data.map((user) => (
                                <tr key={user.username}>
                                    <td>{user.username}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.accountStatus}</td>
                                    <td>{user.role || 'N/A'}</td>
                                    <td>{user.startDate}</td>
                                    <td>
                                        <button
                                            className="details-button"
                                            onClick={() => handleDetailsClick(user)}>
                                            Details
                                        </button>
                                        <button
                                            className="edit-button"
                                            onClick={() => {
                                                setSelectedUser(user);
                                                setShowModal(true);
                                                setIsEditing(true);
                                            }}>
                                            Edit
                                        </button>
                                        <button
                                            className="delete-button"
                                            onClick={() => onDelete(user.username)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="8">No valid data available.</td></tr>
                        )}
                    </tbody>
                </table>
            )}

            {/* Modal for adding/editing */}
            {showModal && selectedUser && (
                <UserModal
                    user={selectedUser}
                    isEditing={isEditing}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    onInputChange={handleInputChange}
                />
            )}

            {/* Modal for details */}
            {showDetailsModal && selectedUser && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>User Details</h2>
                        <p><strong>Username:</strong> {selectedUser.username}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Phone Number:</strong> {selectedUser.phoneNumber}</p>
                        <p><strong>Account Status:</strong> {selectedUser.accountStatus}</p>
                        <p><strong>Role:</strong> {selectedUser.role || 'N/A'}</p>
                        <p><strong>Family Name:</strong> {selectedUser.familyName}</p>
                        <p><strong>First Name:</strong> {selectedUser.firstName}</p>
                        <p><strong>Address:</strong> {selectedUser.address}</p>
                        <p><strong>Start Date:</strong> {selectedUser.startDate}</p>

                        {selectedUser.role === 'customer' ? (
                            <>
                                <p><strong>Total Trips:</strong> {selectedUser.totalTrips}</p>
                                <p><strong>Total Amount Paid:</strong> {selectedUser.totalAmountPaid}</p>
                            </>
                        ) : selectedUser.role === 'driver' ? (
                            <>
                                <p><strong>Total Driver Trips:</strong> {selectedUser.totalDriverTrips}</p>
                                <p><strong>Total Amount Received:</strong> {selectedUser.totalAmountReceived}</p>
                            </>
                        ) : null}

                        <button className="close-button" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageUser;
