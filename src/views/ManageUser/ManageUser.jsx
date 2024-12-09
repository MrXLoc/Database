import React, { useState } from 'react';
import './ManageUser.css';

const ManageUser = ({ data = [], onAdd, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (user) => {
        setIsEditing(user.id);
        setFormData(user);
    };

    const handleSave = () => {
        if (isEditing) {
            onEdit(formData);
        } else {
            onAdd(formData);
        }
        setFormData({});
        setIsEditing(null);
    };

    return (
        <div className="manage-user-container">
            <h1 className="manage-user-title">Manage Users</h1>

            {/* Form for Adding/Editing Users */}
            <div className="form-container">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="accountStatus"
                    placeholder="Account Status"
                    value={formData.accountStatus || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="familyName"
                    placeholder="Family Name"
                    value={formData.familyName || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role || ''}
                    onChange={handleInputChange}
                />
                <button onClick={handleSave}>
                    {isEditing ? 'Save Changes' : 'Add User'}
                </button>
            </div>

            {/* Users Table */}
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
                            <th>Actions</th>
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
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => onDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageUser;
