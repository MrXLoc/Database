import React, { useEffect, useState } from 'react';
import ManageUser from '../../../views/ManageUser/ManageUser';
import axios from 'axios';

const UserManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulating API call for fetching users
        setUsers([
            {
                id: 1,
                username: 'johndoe',
                email: 'johndoe@example.com',
                phoneNumber: '123-456-7890',
                accountStatus: 'Active',
                startDate: '2023-01-15',
                familyName: 'Doe',
                firstName: 'John',
                address: '123 Main St, Springfield, USA',
                role: 'Admin',
            },
            {
                id: 2,
                username: 'janedoe',
                email: 'janedoe@example.com',
                phoneNumber: '987-654-3210',
                accountStatus: 'Inactive',
                startDate: '2022-06-10',
                familyName: 'Doe',
                firstName: 'Jane',
                address: '456 Elm St, Springfield, USA',
                role: 'Driver',
            },
        ]);
    }, []);

    const handleAddUser = (newUser) => {
        // Placeholder: Replace with POST API call
        setUsers([...users, { id: Date.now(), ...newUser }]);
    };

    const handleEditUser = (updatedUser) => {
        // Placeholder: Replace with PUT API call
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    };

    const handleDeleteUser = (userId) => {
        // Placeholder: Replace with DELETE API call
        setUsers(users.filter((user) => user.id !== userId));
    };

    return (
        <ManageUser
            data={users}
            onAdd={handleAddUser}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
        />
    );
};

export default UserManagePage;
