import React, { useEffect, useState } from 'react';
import ManageUser from '../../../views/ManageUser/ManageUser';
import axios from 'axios';


const mockUsers = [
    { id: 1, username: 'johndoe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, username: 'janedoe', email: 'janedoe@example.com', role: 'Driver' },
    { id: 3, username: 'michael', email: 'michael@example.com', role: 'Passenger' },
];

const UserManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        setUsers(mockUsers);
    }, []);

    return <ManageUser data={users} />;
};

export default UserManagePage;
