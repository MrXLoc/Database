import React, { useEffect, useState } from 'react';
import ManageUser from '../../../views/ManageUser/ManageUser';
import axios from 'axios';

const mockUsers = [
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
    {
        id: 3,
        username: 'michael',
        email: 'michael@example.com',
        phoneNumber: '555-123-4567',
        accountStatus: 'Active',
        startDate: '2021-11-20',
        familyName: 'Smith',
        firstName: 'Michael',
        address: '789 Oak St, Springfield, USA',
        role: 'Passenger',
    },
];

const UserManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(mockUsers);
    }, []);

    return <ManageUser data={users} />;
};

export default UserManagePage;
