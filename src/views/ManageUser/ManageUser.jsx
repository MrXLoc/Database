import React from 'react';
import './ManageUser.css';

const ManageUser = ({ data = [] }) => {
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
                            <th>Family Name</th>
                            <th>First Name</th>
                            <th>Address</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.accountStatus}</td>
                                <td>{user.startDate}</td>
                                <td>{user.familyName}</td>
                                <td>{user.firstName}</td>
                                <td>{user.address}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageUser;
