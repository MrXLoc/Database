import React from 'react';

const UserModal = ({ user, isEditing, onClose, onSave, onInputChange }) => {
    const roles = ['customer', 'driver']; // Các vai trò có thể chọn

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
                <form>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={onInputChange}
                            disabled={isEditing} // Không cho chỉnh sửa username khi Edit
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Account Status:
                        <input
                            type="text"
                            name="accountStatus"
                            value={user.accountStatus}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Role:
                        <select
                            name="role"
                            value={user.role}
                            onChange={onInputChange}
                        >
                            <option value="" disabled>Select Role</option>
                            {roles.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Family Name:
                        <input
                            type="text"
                            name="familyName"
                            value={user.familyName}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={user.address}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Start Date:
                        <input
                            type="date"
                            name="startDate"
                            value={user.startDate}
                            onChange={onInputChange}
                        />
                    </label>
                </form>
                <button onClick={onSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default UserModal;
